import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const LawChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Legal Assist. How can I help you today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Legal knowledge base
  const legalResponses = {
    'practice areas': 'We specialize in: Corporate Law, Family Law, Real Estate, Criminal Defense, and Intellectual Property.',
    'contact': 'Reach us at: 📞 (254) 123-4567 | ✉️ contact@Vividvignettelawfirm.com | 📍 123 Justice Ave, Suite 500',
    'hours': 'Office Hours: Mon-Fri 9AM-5PM | Emergency: 24/7 Hotline',
    'appointment': 'To book a consultation: <a href="/booking">Click here</a> or say "book consultation"',
    'fees': 'We offer: Hourly rates | Flat fees | Contingency arrangements (where applicable)',
    'emergency': 'For urgent matters: Call our 24/7 hotline at (555) 987-6543'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(scrollToBottom, 300);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, { text: inputText, sender: 'user' }]);
    setInputText('');

    setIsTyping(true);
    setTimeout(() => {
      generateResponse(inputText.toLowerCase());
      setIsTyping(false);
    }, 1200);
  };

  const generateResponse = (userInput) => {
    const matchedKey = Object.keys(legalResponses).find(key => 
      userInput.includes(key)
    );

    const response = matchedKey ? legalResponses[matchedKey] : 
      `I'm sorry, I don't understand. Please ask about:
      <br/>• Practice areas
      <br/>• Contact info
      <br/>• Booking a consultation
      <br/>• Location`;

    setMessages(prev => [...prev, { 
      text: response, 
      sender: 'bot',
      html: true 
    }]);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div 
      className={`chatbot-container ${isOpen ? 'open' : ''} ${isAnimating ? 'animating' : ''}`}
      ref={chatContainerRef}
      onAnimationEnd={handleAnimationEnd}
    >
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="header-content">
              <FaRobot className="animated-bounce" />
              <h3>Legal Assist</h3>
            </div>
            <button className="close-btn hover-spin" onClick={handleToggle}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.sender} slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="avatar">
                  {msg.sender === 'bot' ? <FaRobot /> : '👤'}
                </div>
                <div className="text">
                  {msg.html ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="chatbot-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your legal query..."
              className="input-grow"
            />
            <button type="submit" className="send-btn hover-lift">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      ) : (
        <button 
          className="chatbot-toggle hover-bob" 
          onClick={handleToggle}
        >
          <FaRobot className="float-icon" size={24} />
          <span>Legal Assist</span>
        </button>
      )}
    </div>
  );
};

export default LawChatbot;