import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  onOpenPopup: (popupType: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onOpenPopup }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Sharma',
      course: 'Master in Data Science',
      previousRole: 'Marketing Executive',
      currentRole: 'Data Scientist at Google',
      salary: '₹18 LPA',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: "TechAcademy transformed my career completely. The mentorship was incredible and the projects were exactly what industry needed. I went from marketing to data science in just 8 months!",
      rating: 5
    },
    {
      name: 'Priya Patel',
      course: 'Full Stack Python',
      previousRole: 'Content Writer',
      currentRole: 'Software Engineer at Microsoft',
      salary: '₹15 LPA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: "The curriculum was so well-structured and practical. My mentor helped me build amazing projects that impressed recruiters. The career support team was with me throughout the job search.",
      rating: 5
    },
    {
      name: 'Amit Kumar',
      course: 'Master in AI',
      previousRole: 'Mechanical Engineer',
      currentRole: 'ML Engineer at Meta',
      salary: '₹22 LPA',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: "Coming from mechanical engineering, I was worried about transitioning to AI. But the beginner-friendly approach and 1:1 mentoring made it smooth. Now I'm working on cutting-edge AI at Meta!",
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      course: 'Data Analyst',
      previousRole: 'HR Executive',
      currentRole: 'Senior Data Analyst at Netflix',
      salary: '₹12 LPA',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: "The Power BI and Tableau training was exceptional. I built a portfolio of 5+ dashboards that got me interviews at top companies. The placement assistance was phenomenal!",
      rating: 5
    },
    {
      name: 'Vikash Singh',
      course: 'Full Stack Python',
      previousRole: 'Sales Manager',
      currentRole: 'Full Stack Developer at Uber',
      salary: '₹16 LPA',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: "At 35, I thought it was too late to switch careers. TechAcademy proved me wrong! The supportive community and practical projects gave me confidence to make the leap.",
      rating: 5
    },
    {
      name: 'Kavya Agarwal',
      course: 'Master in Data Science',
      previousRole: 'Teacher',
      currentRole: 'Data Scientist at Spotify',
      salary: '₹14 LPA',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: "The transition from teaching to data science felt natural with TechAcademy's approach. The real-world projects and mentorship prepared me perfectly for the industry challenges.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="success" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real <span className="text-orange-400">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our students transformed their careers and achieved their dreams
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-orange-400" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-xl lg:text-2xl leading-relaxed mb-6 italic">
                "{currentData.testimonial}"
              </p>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentData.rating)].map((_, index) => (
                  <Star key={index} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Student Info */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-white/5 rounded-xl p-6">
              <div className="flex items-center mb-6 lg:mb-0">
                <img
                  src={currentData.image}
                  alt={currentData.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">{currentData.name}</h4>
                  <p className="text-orange-400 font-semibold">{currentData.course}</p>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="mb-2">
                  <span className="text-gray-300">From: </span>
                  <span className="text-white">{currentData.previousRole}</span>
                </div>
                <div className="mb-2">
                  <span className="text-gray-300">To: </span>
                  <span className="text-white font-semibold">{currentData.currentRole}</span>
                </div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                  {currentData.salary}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial ? 'bg-orange-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid - Mobile */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-orange-400' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-orange-400">{testimonial.course}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                "{testimonial.testimonial}"
              </p>
              <div className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-green-400 font-bold text-sm">{testimonial.salary}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-gray-300 mb-6">Join thousands of successful career changers</p>
          <button 
            onClick={() => onOpenPopup('bookCall')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;