import React, { useState } from 'react';
import { MessageCircle, Target, User, Mail, Phone, Briefcase } from 'lucide-react';
import PopupModal from './PopupModal';

interface CareerGuidancePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CareerGuidancePopup: React.FC<CareerGuidancePopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    experience: '',
    targetRole: '',
    challenges: ''
  });

  const experienceLevels = [
    'Fresher (0-1 years)',
    'Junior (1-3 years)',
    'Mid-level (3-5 years)',
    'Senior (5-8 years)',
    'Expert (8+ years)'
  ];

  const targetRoles = [
    'Data Scientist',
    'AI Engineer',
    'Machine Learning Engineer',
    'Data Analyst',
    'Full Stack Developer',
    'Business Intelligence Analyst',
    'Product Manager',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Career guidance request:', formData);
    alert('Thank you! Our career counselor will contact you within 24 hours.');
    onClose();
  };

  return (
    <PopupModal isOpen={isOpen} onClose={onClose} title="Get Free Career Guidance">
      <div className="space-y-6">
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Target className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-600">
            Get personalized career roadmap and course recommendations from our experts.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="h-4 w-4 inline mr-2" />
              Current Role/Background
            </label>
            <input
              type="text"
              name="currentRole"
              value={formData.currentRole}
              onChange={handleInputChange}
              placeholder="e.g., Marketing Manager, Student, Engineer"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience Level
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Select experience level</option>
              {experienceLevels.map((level, index) => (
                <option key={index} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Role
            </label>
            <select
              name="targetRole"
              value={formData.targetRole}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Select target role</option>
              {targetRoles.map((role, index) => (
                <option key={index} value={role}>{role}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageCircle className="h-4 w-4 inline mr-2" />
              Career Challenges (Optional)
            </label>
            <textarea
              name="challenges"
              value={formData.challenges}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="What challenges are you facing in your career transition?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            <Target className="h-5 w-5 inline mr-2" />
            Get My Career Roadmap
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <p>✓ Personalized guidance ✓ Expert counselor ✓ 100% free consultation</p>
        </div>
      </div>
    </PopupModal>
  );
};

export default CareerGuidancePopup;