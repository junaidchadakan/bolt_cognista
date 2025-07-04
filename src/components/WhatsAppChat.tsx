import React, { useState } from 'react';
import { MessageCircle, X, Phone, Clock, Users } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // WhatsApp Business number - Replace with your actual WhatsApp Business number
  const WHATSAPP_NUMBER = '+919876543210';

  const chatOptions = [
    {
      id: 'course-info',
      title: 'Course Information',
      description: 'Get details about our programs',
      icon: '📚',
      message: 'Hi! I want to know more about your courses and programs. Can you help me?'
    },
    {
      id: 'career-guidance',
      title: 'Career Guidance',
      description: 'Free career counseling',
      icon: '🎯',
      message: 'Hi! I need career guidance and want to discuss my career transition goals.'
    },
    {
      id: 'admission',
      title: 'Admission Process',
      description: 'Enrollment and fees',
      icon: '📝',
      message: 'Hi! I want to know about the admission process, fees, and enrollment details.'
    },
    {
      id: 'placement',
      title: 'Placement Support',
      description: 'Job assistance queries',
      icon: '💼',
      message: 'Hi! I want to know more about your placement assistance and job support services.'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Platform or course help',
      icon: '🛠️',
      message: 'Hi! I need technical support or help with the learning platform.'
    },
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Other questions',
      icon: '💬',
      message: 'Hi! I have some questions about TechAcademy. Can you help me?'
    }
  ];

  const handleOptionClick = (option: typeof chatOptions[0]) => {
    const encodedMessage = encodeURIComponent(option.message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setSelectedOption(null);
  };

  const handleDirectChat = () => {
    const defaultMessage = encodeURIComponent('Hi! I want to connect with TechAcademy team.');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-pulse"
            aria-label="Open WhatsApp Chat"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-h-96 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">TechAcademy Support</h3>
                  <p className="text-sm opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 max-h-80 overflow-y-auto">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    👋 Hi there! How can we help you today?
                  </p>
                </div>
                <p className="text-xs text-gray-500 mb-4">Choose a topic to get started:</p>
              </div>

              {/* Chat Options */}
              <div className="space-y-2">
                {chatOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{option.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-green-600">
                          {option.title}
                        </h4>
                        <p className="text-xs text-gray-500">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Direct Chat Button */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={handleDirectChat}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Start Chat</span>
                </button>
              </div>

              {/* Business Hours */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>Available 24/7 for support</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Bar (Optional) */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white p-3 md:hidden z-40">
        <button
          onClick={handleDirectChat}
          className="w-full flex items-center justify-center space-x-2 font-semibold"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Chat with us on WhatsApp</span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppChat;