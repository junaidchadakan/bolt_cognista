import React from 'react';
import { BookOpen, Users, Wrench, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Job-Ready Curriculum",
      description: "Learn through real-world case studies and industry-relevant projects that prepare you for actual work scenarios."
    },
    {
      icon: Users,
      title: "1:1 Mentorship",
      description: "Get personalized guidance from industry leaders working at top tech companies like Google, Meta, and Microsoft."
    },
    {
      icon: Wrench,
      title: "Industry Tools",
      description: "Master cutting-edge tools: Python, TensorFlow, Power BI, Tableau, MongoDB, MySQL, Pandas, Docker, and more."
    },
    {
      icon: Award,
      title: "Certifications & Portfolio",
      description: "Build a strong portfolio with live projects and earn industry-recognized certifications to boost your career."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-purple-600">TechAcademy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach theory - we prepare you for real-world success with practical skills and industry connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Master Industry-Standard Tools</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-gray-700">Python</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-gray-700">TensorFlow</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-gray-700">Power BI</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-gray-700">Tableau</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-gray-700">Docker</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-gray-700">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;