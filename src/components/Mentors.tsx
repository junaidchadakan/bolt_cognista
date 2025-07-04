import React from 'react';
import { MapPin, Award, Users } from 'lucide-react';

interface MentorsProps {
  onOpenPopup: (popupType: string) => void;
}

const Mentors: React.FC<MentorsProps> = ({ onOpenPopup }) => {
  const mentors = [
    {
      name: 'Dr. Sarah Chen',
      designation: 'Senior AI Researcher',
      company: 'Google DeepMind',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Machine Learning', 'Neural Networks', 'Computer Vision'],
      previousCompanies: ['Google', 'Microsoft', 'NVIDIA']
    },
    {
      name: 'Michael Rodriguez',
      designation: 'Principal Data Scientist',
      company: 'Meta',
      experience: '8+ years',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Data Science', 'Statistical Modeling', 'Big Data'],
      previousCompanies: ['Meta', 'Uber', 'Spotify']
    },
    {
      name: 'Emily Watson',
      designation: 'Staff Software Engineer',
      company: 'Netflix',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Full Stack Development', 'System Design', 'Cloud Architecture'],
      previousCompanies: ['Netflix', 'Amazon', 'Airbnb']
    },
    {
      name: 'David Kim',
      designation: 'Lead Data Engineer',
      company: 'Spotify',
      experience: '9+ years',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Data Engineering', 'MLOps', 'Cloud Platforms'],
      previousCompanies: ['Spotify', 'LinkedIn', 'Twitter']
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Principal BI Architect',
      company: 'Microsoft',
      experience: '11+ years',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Business Intelligence', 'Data Visualization', 'Analytics'],
      previousCompanies: ['Microsoft', 'Tableau', 'Oracle']
    },
    {
      name: 'James Thompson',
      designation: 'VP of Engineering',
      company: 'Stripe',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Engineering Leadership', 'Product Development', 'Scaling Teams'],
      previousCompanies: ['Stripe', 'PayPal', 'Square']
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn from <span className="text-purple-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized mentorship from professionals working at top tech companies around the world
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600">Years Avg Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
            <div className="text-gray-600">Top Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1:1</div>
            <div className="text-gray-600">Personal Mentorship</div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Mentor Image */}
              <div className="relative overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-purple-600">{mentor.experience}</span>
                </div>
              </div>

              {/* Mentor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                <div className="flex items-center text-purple-600 mb-2">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{mentor.designation}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{mentor.company}</span>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specializations.map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Previous Companies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Previously at
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.previousCompanies.map((company, companyIndex) => (
                      <span
                        key={companyIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => onOpenPopup('bookCall')}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform group-hover:scale-105"
                >
                  Book 1:1 Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Connect with Your Mentor?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get matched with the perfect mentor based on your career goals and learning preferences. 
              Start your personalized learning journey today.
            </p>
            <button 
              onClick={() => onOpenPopup('careerGuidance')}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Find Your Mentor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;