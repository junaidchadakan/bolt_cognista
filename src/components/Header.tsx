import React, { useState } from 'react';
import { Menu, X, Brain, Phone, User, ChevronDown, Download, Calendar, MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface HeaderProps {
  onOpenCourseDetail?: (courseId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCourseDetail }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const coursesMenu = [
    {
      category: 'AI & Machine Learning',
      courses: [
        { name: 'Master in Artificial Intelligence', duration: '12 Months', id: 'master-ai' },
        { name: 'Machine Learning Specialist', duration: '8 Months', id: 'master-ai' },
        { name: 'Deep Learning Expert', duration: '6 Months', id: 'master-ai' }
      ]
    },
    {
      category: 'Data Science & Analytics',
      courses: [
        { name: 'Master in Data Science', duration: '10 Months', id: 'master-data-science' },
        { name: 'Data Analyst Professional', duration: '6 Months', id: 'data-analyst' },
        { name: 'Business Intelligence', duration: '4 Months', id: 'data-analyst' }
      ]
    },
    {
      category: 'Development & Tools',
      courses: [
        { name: 'Full Stack Python', duration: '8 Months', id: 'full-stack-python' },
        { name: 'Power BI Mastery', duration: '3 Months', id: 'power-bi' },
        { name: 'Tableau Expert', duration: '3 Months', id: 'tableau' }
      ]
    }
  ];

  const servicesMenu = [
    { name: 'Career Counseling', icon: MessageCircle, href: '#counseling' },
    { name: 'Resume Building', icon: User, href: '#resume' },
    { name: 'Interview Preparation', icon: Calendar, href: '#interview' },
    { name: 'Job Placement', icon: Phone, href: '#placement' }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleCourseClick = (courseId: string) => {
    if (onOpenCourseDetail) {
      onOpenCourseDetail(courseId);
    } else {
      // Scroll to courses section if on home page
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.reload()}>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Cognista
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Courses Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('courses')}
              >
                <span>Courses</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'courses' && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {coursesMenu.map((category, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <h3 className="text-sm font-bold text-purple-600 mb-3 uppercase tracking-wide">
                        {category.category}
                      </h3>
                      <div className="space-y-2">
                        {category.courses.map((course, courseIndex) => (
                          <button
                            key={courseIndex}
                            onClick={() => handleCourseClick(course.id)}
                            className="flex justify-between items-center p-2 rounded-lg hover:bg-purple-50 transition-colors group w-full text-left"
                          >
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-purple-600">
                                {course.name}
                              </div>
                              <div className="text-sm text-gray-500">{course.duration}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <a
                      href="#courses"
                      className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                    >
                      View All Courses →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('services')}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {servicesMenu.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                    >
                      <service.icon className="h-5 w-5 text-purple-600" />
                      <span className="font-medium text-gray-900 group-hover:text-purple-600">
                        {service.name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#mentors" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Mentors
            </a>
            <a href="#success" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Success Stories
            </a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <WhatsAppButton 
              message="Hi! I want to book a free career consultation call with TechAcademy."
              className="px-4 py-2 rounded-lg"
            >
              <span>WhatsApp</span>
            </WhatsAppButton>
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
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-courses')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-purple-600 font-medium"
                >
                  <span>Courses</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobile-courses' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-courses' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {coursesMenu.map((category, index) => (
                      <div key={index}>
                        <div className="text-sm font-semibold text-purple-600 mb-1">
                          {category.category}
                        </div>
                        {category.courses.map((course, courseIndex) => (
                          <button
                            key={courseIndex}
                            onClick={() => handleCourseClick(course.id)}
                            className="block text-sm text-gray-600 hover:text-purple-600 ml-2 w-full text-left"
                          >
                            {course.name}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-services')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-purple-600 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {servicesMenu.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-purple-600"
                      >
                        <service.icon className="h-4 w-4" />
                        <span>{service.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#mentors" className="text-gray-700 hover:text-purple-600 font-medium">
                Mentors
              </a>
              <a href="#success" className="text-gray-700 hover:text-purple-600 font-medium">
                Success Stories
              </a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 font-medium">
                FAQ
              </a>
              
              <div className="flex flex-col space-y-2 pt-4">
                <WhatsAppButton 
                  message="Hi! I want to book a free career consultation call with TechAcademy."
                  className="px-6 py-2 rounded-lg justify-center"
                />
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