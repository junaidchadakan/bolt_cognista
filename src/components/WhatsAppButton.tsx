import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message = 'Hi! I want to connect with TechAcademy team.',
  className = '',
  children 
}) => {
  // WhatsApp Business number - Replace with your actual WhatsApp Business number
  const WHATSAPP_NUMBER = '+919876543210';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold transition-all transform hover:scale-105 ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children || <span>Chat on WhatsApp</span>}
    </button>
  );
};

export default WhatsAppButton;