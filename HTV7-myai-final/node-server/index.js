require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const axios = require('axios');
var cors = require('cors');

const whitelist = ["https://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send(process.env.OPENAI_API);
});

// receive message
app.post('/sendmessage', jsonParser, (req, res) => {
  const message = req.body.message;
  if (!message) {
    res.send({ message: "Need to include message body" });
    return;
  }

  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API}`
    }
  }

  axios
    .post('https://api.openai.com/v1/completions', {
      model: "text-davinci-002",
      prompt: message,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    }, config)
    .then(response => {
      console.log(response.data);
      let replyWith = response.data?.choices[0]?.text;
      if (!replyWith) {
        replyWith = "An error occured";
      }
      res.send({ message: replyWith });
      return;
    })
    .catch(error => {
      console.error(error);
      res.send("An error occurred.");
      return;
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// index.js
// api request
