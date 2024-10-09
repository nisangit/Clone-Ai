import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../context/context';
import './Chatscreen.css';
import Sidebar from '../Sidebar/Sidebar'; // Import Sidebar

function Chatscreen() {
  const { messages, onSent } = useContext(Context);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endOfMessagesRef = useRef(null); // Create a ref for the end of messages

  const handleSendMessage = async (message) => {
    if (message.trim()) {
      setLoading(true);
      await onSent(message);
      setLoading(false);
      setInput(''); // Clear input after sending
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handlePromptClick = (promptText) => {
    setInput(promptText); // Set the input field with the prompt text
    handleSendMessage(promptText); // Automatically send the prompt
  };

  const renderMessage = (text) => {
    const parts = text.split("**");
    return parts.map((part, index) => {
      return index % 2 === 1 ? (
        <div key={index}>
          <br />
          <strong>{part}</strong>
          <br />
        </div>
      ) : (
        part
      );
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    if (messages.length > 0) {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
}, [messages]);


  return (
    <div className="chat-container">
      <Sidebar onPromptClick={handlePromptClick} /> {/* Pass the prompt handler */}
      <div className="message-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <p>{message.sender === 'bot' ? renderMessage(message.text) : message.text}</p>
          </div>
        ))}
        {loading ? (
          <div className="loader">
            <div className="loader-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : null}
        {/* This div is used for scrolling to the bottom */}
        <div ref={endOfMessagesRef} />
      </div>

      <div className="message-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
        />
        <button onClick={() => handleSendMessage(input)}>Send</button>
      </div>
    </div>
  );
}

export default Chatscreen;
