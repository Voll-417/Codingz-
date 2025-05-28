import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaPaperPlane, FaTimes, FaBalanceScale } from 'react-icons/fa';

const LawChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm Legal Assist from Vivid Vignette Law Firm. How can I help you today? Here are some things I can help with:\n\n• Practice areas\n• Contact information\n• Office hours\n• Booking appointments\n• Fee structure\n• Emergency contacts", 
      sender: 'bot' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const legalResponses = {
    'hi|hello|hey': 'Hello! How can I assist you with your legal needs today?',
    'practice area|services|special': 'Our practice areas include:\n\n• Corporate & Business Law\n• Family & Divorce Law\n• Real Estate & Property Law\n• Criminal Defense\n• Intellectual Property\n• Employment Law\n• Estate Planning',
    'contact|address|phone|email': 'You can reach us at:\n\n📞 Phone: (254) 123-4567\n✉️ Email: contact@vividvignettelaw.com\n📍 Address: 123 Justice Avenue, Suite 500, Nairobi, Kenya',
    'hour|time|open': 'Our office hours are:\n\nMonday-Friday: 8:30 AM - 5:30 PM\nSaturday: 9:00 AM - 1:00 PM\nEmergency services available 24/7',
    'appointment|meet|consult|schedule': 'To schedule a consultation:\n\n1. Online: Visit our website at www.vividvignettelaw.com/booking\n2. Phone: Call (254) 123-4567\n3. In-person: Visit our office during business hours',
    'fee|cost|price|payment': 'Our fee structure includes:\n\n• Initial consultation: $100 (1 hour)\n• Hourly rates: $200-$400 depending on case complexity\n• Flat fees available for certain services\n• Payment plans may be available',
    'emergency|urgent': 'For legal emergencies:\n\n🚨 Call our 24/7 emergency line: (254) 987-6543\n\nWe respond to emergencies immediately for existing clients.',
    'thank|thanks|appreciate': "You're welcome! Is there anything else I can help you with?",
    'bye|goodbye': 'Thank you for contacting Vivid Vignette Law Firm. Have a great day! Remember, we\'re here if you need legal assistance.'
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      generateResponse(userMessage.toLowerCase());
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay for more natural feel
  };

  const generateResponse = (userInput) => {
    let response = "I'm here to help with legal inquiries about our firm. You can ask about:\n\n• Our practice areas\n• Contact information\n• Scheduling appointments\n• Fees and payments\n• Emergency services";
    
    for (const [key, value] of Object.entries(legalResponses)) {
      if (new RegExp(key).test(userInput)) {
        response = value;
        break;
      }
    }

    setMessages(prev => [
      ...prev,
      { text: response, sender: 'bot' }
    ]);
  };

  return (
    <div className='sasa'>
    <div className={`law-chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="law-chatbot-window">
          <div className="law-chatbot-header">
            <div className="header-content">
              <FaBalanceScale className="law-icon" />
              <div>
                <h3>Vivid Vignette Legal Assist</h3>
                <p className="status">Online now</p>
              </div>
            </div>
            <button onClick={handleToggle} className="close-btn">
              <FaTimes />
            </button>
          </div>

          <div className="law-chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`law-message ${msg.sender}`}>
                <div className="law-avatar">
                  {msg.sender === 'bot' ? <FaRobot /> : '👤'}
                </div>
                <div className="law-text">
                  {msg.text.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="law-typing-indicator">
                <span>Legal Assist is typing</span>
                <div className="law-dots">
                  <div className="law-dot"></div>
                  <div className="law-dot"></div>
                  <div className="law-dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="law-chatbot-input">
            <input
              type="text"
              placeholder="Type your legal question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              autoFocus
            />
            <button type="submit" disabled={!inputText.trim()}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      ) : (
        <button className="law-chatbot-toggle" onClick={handleToggle}>
          <div className="law-toggle-content">
            <FaRobot className="law-toggle-icon" />
            <span>Legal Assist</span>
          </div>
        </button>
      )}
    </div>
    </div>
  );
};

export default LawChatbot