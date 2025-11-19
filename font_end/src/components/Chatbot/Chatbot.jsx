import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import chatbotIcon from "../../assets/chatbot-icon.png";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today? 😊" }
  ]);
  const [input, setInput] = useState("");
  const [fullscreen, setFullscreen] = useState(false);
  const scrollRef = useRef(null);

  // DANH SÁCH CÂU HỎI – TRẢ LỜI
  const botReplies = [
    { keywords: ["hello", "hi"], reply: "Hi! How can I help you today? 😊" },
    { keywords: ["how are you"], reply: "I'm just a demo bot, but I'm fine! 😄" },
    { keywords: ["bye", "goodbye"], reply: "Goodbye! Have a nice day! 👋" },
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    const userInput = input.trim();
    const newUserMsg = { sender: "user", text: userInput };
    setMessages(prev => [...prev, newUserMsg]);
    setInput("");

    // TÌM CÂU TRẢ LỜI THEO KEYWORD
    const matched = botReplies.find(b =>
      b.keywords.some(k => userInput.toLowerCase().includes(k))
    );
    const reply = matched ? matched.reply : "Sorry, I can only answer a few questions 😅";

    // TYPING EFFECT
    const typingMsg = { sender: "bot", text: "Typing..." };
    setMessages(prev => [...prev, typingMsg]);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(m => m.text === "Typing..." ? { sender: "bot", text: reply } : m)
      );
    }, 800); // delay 0.8s
  };

  // AUTO SCROLL TO BOTTOM
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className={`chatbot-container ${fullscreen ? "fullscreen" : ""}`}>
      {/* HEADER */}
      <div className="chatbot-header">
        <button className="zoom-btn" onClick={() => setFullscreen(!fullscreen)}>
          {fullscreen ? "Exit Fullscreen" : "Zoom"}
        </button>
      </div>

      {/* MESSAGES */}
      <div className="chatbot-messages" ref={scrollRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.sender}`}>
            {msg.sender === "bot" && (
              <img src={chatbotIcon} alt="bot" className="avatar-img" />
            )}
            <div className="msg-text">{msg.text}</div>
            {msg.sender === "user" && <div className="avatar">🧑</div>}
          </div>
        ))}
      </div>

      {/* INPUT */}
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
