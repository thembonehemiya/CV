import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={30} fill="white" />
    </button>
  );
};

export default WhatsAppButton;