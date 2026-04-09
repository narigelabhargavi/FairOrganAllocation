import React, { useState, useEffect } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Auto welcome message
  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: "Hi 👋 I am your assistant! I can help you with patients, donors, allocation, and system issues."
      }
    ]);
  }, []);

  // ✅ Bot response logic
  const getResponse = (text) => {
    text = text.toLowerCase();

    if (text.includes("add patient") || text.includes("view patients")) {
      return "Go to 'Add Patient' page, fill details and upload image. AI will calculate severity.";
    }

    if (text.includes("add donor") || text.includes("view donor")) {
      return "Go to 'Add Donor' page and enter donor details like blood group and organ type.";
    }

    if (text.includes("allocation") || text.includes("how are patients allocated") || text.includes("view allocation")) {
      return "System selects patient based on severity, waiting time, and compatibility.";
    }

    if (text.includes("severity")) {
      return "Severity is calculated using AI model based on uploaded medical image.";
    }

    if (text.includes("error") || text.includes("problem")) {
      return "Check if all fields are filled and server is running properly.";
    }

    return "Sorry, I can help with patients, donors, allocation, and system usage.";
  };

  // ✅ Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getResponse(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* ✅ Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#8FC2E0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          color: "white",
          fontSize: "24px"
        }}
      >
        🤖
      </div>

      {/* ✅ Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            padding: "10px",
            zIndex: 1000
          }}
        >
          {/* Header */}
          <h3 style={{ textAlign: "center", color: "#8FC2E0", margin: "5px 0" }}>
            Chat Assistant
          </h3>

          {/* Messages */}
          <div
            style={{
              height: "250px",
              overflowY: "auto",
              backgroundColor: "#f9f9f9",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "10px"
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "6px 0"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    backgroundColor:
  msg.sender === "user" ? "#8FC2E0" : "#e0e0e0",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    maxWidth: "80%"
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ display: "flex" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc"
              }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              style={{
                marginLeft: "5px",
                padding: "8px 12px",
                backgroundColor: "#8FC2E0",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;