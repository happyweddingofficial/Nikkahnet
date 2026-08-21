import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export function WhatsAppFloating({ t, lang }) {
  const [showPopup, setShowPopup] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const finalMsg = customMsg.trim() || 'Assalamu Alaikum Nikah.Net, I want to inquire about matrimonial proposals in Malappuram & Kozhikode.';
    const url = `https://wa.me/918075913098?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    setShowPopup(false);
    setCustomMsg('');
  };

  return (
    <>
      {/* Floating Action Button */}
      <a 
        href="https://wa.me/918075913098?text=Assalamu%20Alaikum%20Nikah.Net%2C%20I%20am%20looking%20for%20matrimonial%20proposals."
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat on Official WhatsApp: 80759 13098"
      >
        <MessageCircle size={22} />
        <span>WhatsApp: 80759 13098</span>
      </a>
    </>
  );
}
