import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const WhatsAppQR = () => {
  // Replace this with your firm's number in international format 
  const phoneNumber = '254791042547';

  // Optional: add a pre-filled message
  const message = 'Hi, I need legal assistance';
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${254791042547}?text=${encodedMessage}`;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Scan to Chat with Our Law Firm</h2>
      <QRCodeCanvas value={`https://wa.me/${254791042547}?text=${encodedMessage}`} size={256} />
      <p>Or click <a href={`https://wa.me/${254791042547}?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">here</a> to start chat</p>
    </div>
  );
};

export default WhatsAppQR;
