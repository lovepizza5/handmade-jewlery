import React, { useState } from 'react';
import './ChatBot.css';
import avatar from './logo.png'; // Use a real avatar image or replace with a default

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      //from: 'bot',
      text: "Bonjour - Je suis là pour vous aider à répondre à toutes vos questions ou vous diriger vers les ressources que vous recherchez. Comment puis-je vous aider ?"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { from: 'user', text: input }]);
      setInput('');
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="chat-launcher" onClick={() => setIsOpen(true)}>💬</div>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <img src={avatar} alt="Bot Avatar" className="bot-avatar" />
              <div>
                <p className="bot-name">
                  Bonjour, je<br />
                  <strong>suis Trusty !</strong>
                </p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.from === 'bot' ? 'bot-message' : 'user-message'}`}>
                {msg.from === 'bot' && <img src={avatar} alt="Bot" className="bot-msg-avatar" />}
                <p className="chat-text">{msg.text}</p>
              </div>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleSubmit}>
            <textarea
              placeholder="Tapez votre message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              className="chatbot-textarea"
            />
            <button type="submit" className="send-btn">Envoyer</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
