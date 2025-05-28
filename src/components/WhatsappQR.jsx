import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppQR = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '254791042547';
  const message = 'Hi, I need legal assistance';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="whatsapp-float-container">
      {/* Animated Button */}
      <button 
        className="Btn whatsapp-float-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="sign">
          <FaWhatsapp />
        </div>
        <div className="text">Chat with Us</div>
      </button>

      {/* Expanded QR Code Panel */}
      {isExpanded && (
        <div className="whatsapp-expanded">
          <button 
            className="whatsapp-close-btn"
            onClick={() => setIsExpanded(false)}
          >
            <FaTimes />
          </button>
          <h3>Chat with Us on WhatsApp</h3>
          <QRCodeCanvas 
            value={whatsappUrl} 
            size={180} 
            className="whatsapp-qr"
          />
          <p className="whatsapp-text">
            Scan the code or <br/>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              click here to chat directly
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default WhatsAppQR;