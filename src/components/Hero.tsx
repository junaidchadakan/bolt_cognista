import React, { useState, useEffect } from 'react';
import { Download, Phone, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenPopup: (popupType: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPopup }) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const banners = [
    {
      title: "Master in AI",
      subtitle: "Build intelligent systems and neural networks",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Data Science",
      subtitle: "Analyze data and extract meaningful insights",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Full Stack Python",
      subtitle: "Build complete web applications from scratch",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL - Replace with your actual deployed web app URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
      
      const submitData = {
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        course: formData.course,
        timeSlot: 'To be scheduled', // Default value for hero form
        message: 'Submitted from hero section - interested in career consultation',
        timestamp: new Date().toISOString(),
        source: 'Hero Section Form'
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        course: ''
      });

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Future-Proof Your Career with{' '}
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Top Tech Programs
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Learn from industry experts. Practice with real tools. Land your dream job in tech.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onOpenPopup('bookCall')}
                className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>Book Free Career Call</span>
              </button>
              <button 
                onClick={() => onOpenPopup('downloadCurriculum')}
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                <Download className="h-5 w-5" />
                <span>Download Curriculum</span>
              </button>
            </div>

            {/* Rotating Banner Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-orange-400 mb-2">
                {banners[currentBanner].title}
              </h3>
              <p className="text-gray-200">
                {banners[currentBanner].subtitle}
              </p>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            {isSuccess ? (
              <div className="text-center space-y-6">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h3>
                  <p className="text-gray-200">
                    Your request has been submitted successfully. Our career counselor will contact you within 24 hours.
                  </p>
                </div>
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                  <p className="text-sm text-green-200">
                    <strong>What's next?</strong><br />
                    • You'll receive a confirmation email shortly<br />
                    • Our counselor will call you to discuss your goals<br />
                    • Get personalized course recommendations
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                      required
                    >
                      <option value="" className="text-gray-900">Select Preferred Course</option>
                      <option value="ai" className="text-gray-900">Master in AI</option>
                      <option value="datascience" className="text-gray-900">Master in Data Science</option>
                      <option value="dataanalyst" className="text-gray-900">Data Analyst</option>
                      <option value="fullstack" className="text-gray-900">Full Stack Python</option>
                      <option value="powerbi" className="text-gray-900">Power BI</option>
                      <option value="tableau" className="text-gray-900">Tableau</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Get Free Career Consultation'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Banner Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBanner ? 'bg-orange-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;