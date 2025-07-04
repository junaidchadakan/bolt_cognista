import React from 'react';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Footer: React.FC = () => {
  const courseCategories = [
    'Master in AI',
    'Master in Data Science',
    'Data Analyst',
    'Full Stack Python',
    'Power BI',
    'Tableau',
    'Machine Learning',
    'Deep Learning'
  ];

  const quickLinks = [
    'About Us',
    'Career Services',
    'Success Stories',
    'Mentors',
    'Blog',
    'Contact Us',
    'Privacy Policy',
    'Terms of Service'
  ];

  const contactInfo = [
    { icon: Phone, text: '+91-9876543210', href: 'tel:+919876543210' },
    { icon: Mail, text: 'info@techacademy.com', href: 'mailto:info@techacademy.com' },
    { icon: MapPin, text: 'Bangalore, Mumbai, Delhi, Hyderabad', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  const trustBadges = [
    'ISO 9001:2015 Certified',
    'NASSCOM Member',
    '500+ Hiring Partners',
    '95% Placement Rate'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">TechAcademy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's leading platform for career transformation in AI, Data Science, and Technology. 
              Join thousands who've successfully switched careers with our industry-focused programs.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* WhatsApp Contact */}
            <WhatsAppButton 
              message="Hi! I want to know more about TechAcademy courses and career opportunities."
              className="px-4 py-2 rounded-lg w-full justify-center"
            >
              <span>Connect on WhatsApp</span>
            </WhatsAppButton>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-400">Popular Courses</h3>
            <ul className="space-y-3">
              {courseCategories.map((course, index) => (
                <li key={index}>
                  <a
                    href="#courses"
                    className="text-gray-300 hover:text-white transition-colors hover:underline"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-400">Get in Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <contact.icon className="h-5 w-5 text-purple-400" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
                <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {trustBadges.map((badge, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm font-semibold text-green-400">{badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 TechAcademy. All rights reserved. | Transforming careers since 2020
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;