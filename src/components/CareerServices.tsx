import React from 'react';
import { FileText, MessageSquare, Briefcase, Building2, CheckCircle, Users } from 'lucide-react';

interface CareerServicesProps {
  onOpenPopup: (popupType: string) => void;
}

const CareerServices: React.FC<CareerServicesProps> = ({ onOpenPopup }) => {
  const services = [
    {
      icon: FileText,
      title: 'Resume Building',
      description: 'Professional resume review and optimization by industry experts to make you stand out.',
      features: ['ATS-Friendly Templates', 'Industry-Specific Keywords', 'Personal Branding', 'LinkedIn Optimization']
    },
    {
      icon: MessageSquare,
      title: 'Interview Preparation',
      description: 'Mock interviews and personalized feedback to boost your confidence and performance.',
      features: ['Technical Interviews', 'Behavioral Questions', 'System Design', 'Salary Negotiation']
    },
    {
      icon: Briefcase,
      title: 'Job Placement',
      description: 'Direct connections with our hiring partners and active job placement assistance.',
      features: ['Job Matching', 'Application Tracking', 'Interview Scheduling', 'Offer Negotiation']
    },
    {
      icon: Building2,
      title: 'Internship Programs',
      description: 'Hands-on experience with real companies to build your portfolio and network.',
      features: ['Paid Internships', 'Mentorship', 'Project Portfolio', 'Performance Reviews']
    }
  ];

  const hiringPartners = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Uber', 'Spotify', 'Airbnb',
    'LinkedIn', 'Twitter', 'Stripe', 'Square', 'PayPal', 'Adobe', 'Salesforce', 'Oracle'
  ];

  const placementStats = [
    { number: '95%', label: 'Placement Rate' },
    { number: '₹12L', label: 'Average Package' },
    { number: '6 Months', label: 'Avg. Job Timeline' },
    { number: '500+', label: 'Hiring Partners' }
  ];

  return (
    <section id="career" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="text-purple-600">Career Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach you skills - we ensure you land your dream job with comprehensive career services
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {placementStats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Building2 className="h-6 w-6 mr-2 text-purple-600" />
              Our Hiring Partners
            </h3>
            <p className="text-gray-600">
              We have direct partnerships with 500+ companies actively hiring our graduates
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {hiringPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-purple-50 transition-colors group"
              >
                <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Process */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Your Success Journey</h3>
            <p className="text-lg opacity-90">
              Our proven 6-step process to land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '1', title: 'Learn', desc: 'Master skills' },
              { step: '2', title: 'Build', desc: 'Create portfolio' },
              { step: '3', title: 'Practice', desc: 'Mock interviews' },
              { step: '4', title: 'Apply', desc: 'Job applications' },
              { step: '5', title: 'Interview', desc: 'Ace interviews' },
              { step: '6', title: 'Land', desc: 'Dream job!' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => onOpenPopup('bookCall')}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>Start Your Journey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerServices;