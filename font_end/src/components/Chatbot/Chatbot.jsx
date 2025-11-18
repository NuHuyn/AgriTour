import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today? 😊" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // USER MESSAGE
    const newMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);

    const userInput = input;
    setInput("");

    // CALL OPENAI USING FETCH
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful support assistant." },
          ...messages.map((m) => ({
            role: m.sender === "bot" ? "assistant" : "user",
            content: m.text,
          })),
          { role: "user", content: userInput },
        ],
      }),
    });

    const data = await res.json();
    const botReply = data.choices[0].message.content;

    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
  };

  // AUTO SCROLL TO BOTTOM
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages" ref={scrollRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input-box">
        <input
          value={input}
          type="text"
          placeholder="Type your message…"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
