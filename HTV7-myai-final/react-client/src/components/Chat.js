import React, { useRef, useState } from 'react';
import './Chat.css';
import axios from "axios";

function Chat() {

  const [language, setLanguage] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();


    const header = {
      Accept: "application/json",
    }

    setMessages([
      ...messages,

    ]);




    const messageToSend = `reply to: ${input} in ${language} (Have a conversation:) `;
    console.log("submit" + messageToSend);
    axios.post("http://localhost:4000/sendmessage", { message: messageToSend }, header)
      .then((response) => {
        console.log(response);
        setMessages([
          ...messages,
          {
            type: "sent",
            message: input
          },
          {
            type: "received",
            message: response.data.message
          }
        ]);
        setInput("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log(event.target.value);
  }

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  }

  return (<>
    <main className="chatbox">
      <p className="received">Hi, I'm Maiya! I am an AI chatbot. Talk to me by submitting a message to me below.</p>
      {messages.map((message, i) => {
        return <p className={message.type} key={i}>{message.message}</p>;
      })}
    </main>

    <form onSubmit={onSubmit}>


      <input placeholder="Start the convo!" onChange={handleChange} value={input} />

      <button type="submit"> send </button>
    </form>
  </>)
}




export default Chat;