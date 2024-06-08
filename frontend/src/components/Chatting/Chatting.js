import React, { useState, useRef, useEffect } from "react";
import "./Chatting.css";
import Helmet from "react-helmet";

const Chatting = () => {
  const [messages, setMessages] = useState([
    { type: "incoming", text: "Hi there 👋<br>How can I help you today?" },
  ]);
  const [message, setMessage] = useState("");
  const chatboxRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
  }, [messages]);

  const createChatLi = (message, className) => {
    const chatLi = { type: className, text: message };
    return chatLi;
  };

  const generateResponse = async (userMessage) => {
    const API_URL = "/generate-response"; // This will be proxied to http://localhost:8080/generate-response
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const textResponse = await response.text(); // Get the response as text

      // Log the response for debugging purposes
      console.log("Raw response from server:", textResponse);

      // Attempt to parse the response as JSON
      const data = JSON.parse(textResponse);

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate response");
      }

      return data.message.trim();
    } catch (error) {
      console.error("Error:", error);
      return "Oops! Something went wrong. Please try again.";
    }
  };

  const handleSendMessage = async () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      const newMessages = [
        ...messages,
        createChatLi(trimmedMessage, "outgoing"),
      ];
      setMessages(newMessages);
      setMessage("");

      setTimeout(async () => {
        const responseMessage = await generateResponse(trimmedMessage);
        const newIncomingMessage = createChatLi(responseMessage, "incoming");
        setMessages([...newMessages, newIncomingMessage]);
        chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      }, 600);
    }
  };

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"
        />
      </Helmet>

      <button
        className="chatbot-toggler"
        onClick={() => document.body.classList.toggle("show-chatbot")}
      >
        <span className="material-symbols-rounded">mode </span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span
            className="close-btn material-symbols-outlined"
            onClick={() => document.body.classList.remove("show-chatbot")}
          >
            close
          </span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          {messages.map((msg, index) => (
            <li key={index} className={`chat ${msg.type}`}>
              <span className="material-symbols-outlined">
                {msg.type === "incoming" ? "smart_toy" : "person"}
              </span>
              <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
            </li>
          ))}
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          ></textarea>
          <span
            className="material-symbols-rounded"
            onClick={handleSendMessage}
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
