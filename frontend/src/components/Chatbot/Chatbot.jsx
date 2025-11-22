import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import chatbotIcon from "../../assets/chatbot-icon.png";
import customerIcon from "../../assets/customer_icon.png";


// Tour images
import trip1 from "../../assets/trip1.jpg";
import river2 from "../../assets/river2.jpg";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today? 😊", content: null }
  ]);

  const [input, setInput] = useState("");
  const [fullscreen, setFullscreen] = useState(false);
  const [chatStage, setChatStage] = useState(0);
  const scrollRef = useRef(null);

  // =====================
  // ⭐ BOT TYPING HANDLER
  // =====================
  const addTyping = () => {
    setMessages(prev => [
      ...prev,
      { sender: "bot", text: "Typing...", content: null }
    ]);
  };

  const replaceTypingWith = (newMsg) => {
    setMessages(prev =>
      prev.map(m =>
        m.text === "Typing..."
          ? {
            sender: "bot",
            text: newMsg.text || "",
            content: newMsg.content || null
          }
          : m
      )
    );
  };

  // =====================
  // ⭐ SEND MESSAGE
  // =====================
  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const normalized = userText.toLowerCase();

    // User message luôn có dạng unified
    setMessages(prev => [
      ...prev,
      { sender: "user", text: userText, content: null }
    ]);

    setInput("");
    addTyping();

    setTimeout(() => {
      // ============================
      // ⭐ STAGE 0 – Suggest 2 tours
      // ============================
      if (
        chatStage === 0 &&
        (
          normalized.includes("tet") ||
          normalized.includes("ho chi minh") ||
          normalized.includes("holiday") ||
          normalized.includes("budget") ||
          normalized.includes("4 days")
        )
      ) {
        setChatStage(1);

        return replaceTypingWith({
          text: "",
          content: [
            { type: "text", content: "I have some suggestions for you:" },

            {
              type: "card",
              img: trip1,
              name: "Vinh Long Farm & Lotus Experience",
              price: "$30",
              link: "http://localhost:5173/tour-details/38"
            },

            {
              type: "card",
              img: river2,
              name: "Ha Tien Shell Beach Rowing Experience",
              price: "$30",
              link: "http://localhost:5173/tour-details/36"
            }
          ]
        });
      }

      // ==========================================
      // ⭐ STAGE 1 – Ask: which tour fits farming?
      // ==========================================
      if (
        chatStage === 1 &&
        (
          normalized.includes("farm") ||
          normalized.includes("pick") ||
          normalized.includes("fruit") ||
          normalized.includes("vegetable")
        )
      ) {
        setChatStage(2);

        return replaceTypingWith({
          text: "",
          content: [
            { type: "text", content: "I think this tour is suitable for you:" },

            {
              type: "card",
              img: trip1,
              name: "Vinh Long Farm & Lotus Experience",
              price: "$80",
              link: "http://localhost:5173/tour-details/38"
            }
          ]
        });
      }

      // ============================
      // ⭐ Default fallback message
      // ============================
      replaceTypingWith({
        text: "Sorry, I can only answer a few questions 😅",
        content: null
      });

    }, 900);
  };

  // =====================
  // ⭐ AUTO SCROLL DOWN
  // =====================
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);

  // =====================
  // ⭐ RENDER BOT MESSAGE
  // =====================
  const renderBotMessage = (data) => {
    if (!data) return null;

    if (typeof data === "string") return <div>{data}</div>;

    if (Array.isArray(data)) {
      return data.map((item, idx) => {

        if (item.type === "text")
          return <div key={idx}>{item.content}</div>;

        if (item.type === "card")
          return (
            <div className="tour-card" key={idx}>
              <img
                src={item.img}
                alt={item.name}
                className="tour-img chatbot-tour-image"
              />

              <div className="tour-info">
                <div className="tour-name chatbot-tour-name">{item.name}</div>

                <div className="tour-price chatbot-tour-price">{item.price}</div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tour-btn"
                >
                  View
                </a>
              </div>
            </div>
          );
      });
    }

    return null;
  };

  // =====================
  // ⭐ UI
  // =====================
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
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.sender}`}>

            {msg.sender === "bot" && (
              <img src={chatbotIcon} alt="bot" className="avatar-img" />
            )}

            {msg.sender === "user" && (
              <img src={customerIcon} alt="user" className="avatar-img" />
            )}

            <div className="msg-text">
              {msg.sender === "bot"
                ? renderBotMessage(msg.content || msg.text)
                : msg.text}
            </div>

          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="chatbot-input-box">
        <input
          value={input}
          type="text"
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
};

export default Chatbot;
