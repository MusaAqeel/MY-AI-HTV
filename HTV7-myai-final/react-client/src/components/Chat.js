import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import axios from "axios";

function Chat() {
  const [language, setLanguage] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();

    const header = {
      Accept: "application/json",
    };

    setMessages([...messages]);

    const messageToSend = `reply to: ${input} in ${language} (Have a conversation, be like a therapist. Do not repeat user prompt in your response:) `;
    console.log("submit" + messageToSend);
    axios
      .post(
        "htv77-4v2o-cfy9tsg85-musaaqeel.vercel.app",
        { message: messageToSend },
        header
      )
      .then((response) => {
        console.log(response);
        setMessages([
          ...messages,
          {
            type: "sent",
            message: input,
          },
          {
            type: "received",
            message: response.data.message,
          },
        ]);
        setInput("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log(event.target.value);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const scrollToMessagesEnd = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToMessagesEnd();
  }, [messages]);

  return (
    <>
      <main className="chatbox">
        <p className="received">
          Hi, I'm Maiya! I am an AI chatbot. Talk to me by submitting a message
          to me below.
        </p>
        {messages.map((message, i) => {
          return (
            <p className={message.type} key={i}>
              {message.message}
            </p>
          );
        })}
        <div ref={messagesEndRef} />
      </main>

      <form onSubmit={onSubmit}>
        <input
          placeholder="Send Message"
          onChange={handleChange}
          value={input}
        />

        <button class="send-message" type="submit">
          Send
        </button>
      </form>
    </>
  );
}

export default Chat;
