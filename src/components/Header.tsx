import React, { useState } from 'react';
import { Menu, X, Brain, Phone, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              TechAcademy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Courses
            </a>
            <a href="#mentors" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Mentors
            </a>
            <a href="#career" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Career Services
            </a>
            <a href="#success" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Success Stories
            </a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>Book Free Call</span>
            </button>
            <button className="flex items-center space-x-2 border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors">
              <User className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#courses" className="text-gray-700 hover:text-purple-600 font-medium">
                Courses
              </a>
              <a href="#mentors" className="text-gray-700 hover:text-purple-600 font-medium">
                Mentors
              </a>
              <a href="#career" className="text-gray-700 hover:text-purple-600 font-medium">
                Career Services
              </a>
              <a href="#success" className="text-gray-700 hover:text-purple-600 font-medium">
                Success Stories
              </a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 font-medium">
                FAQ
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-6 py-2 rounded-lg">
                  <Phone className="h-4 w-4" />
                  <span>Book Free Call</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-purple-600 text-purple-600 px-6 py-2 rounded-lg">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;