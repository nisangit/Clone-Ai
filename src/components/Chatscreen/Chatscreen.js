import React, { useContext, useState } from 'react';
import { Context } from '../../context/context';
import './Chatscreen.css';

function Chatscreen() {
  const { messages, onSent } = useContext(Context); // Get messages and onSent from context
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      setLoading(true);
      await onSent(input); // Send the message through the onSent function
      setLoading(false);
      setInput(''); // Clear input field
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const renderMessage = (text) => {
    const parts = text.split("**"); // Split the text by '**'
    return parts.map((part, index) => {
      // If the index is odd, wrap the part in a <strong> tag
      return index % 2 === 1 ? (
        <div key={index}>
          <br /> {/* Add a break before the bold text */}
          <strong>{part}</strong>
          <br /> {/* Add a break after the bold text */}
        </div>
      ) : (
        part
      );
    });
  };

  return (
    <div className="chat-container">
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
      </div>

      <div className="message-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatscreen;
