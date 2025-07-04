import React, { useState } from 'react';
import { Download, BookOpen, Code, Award } from 'lucide-react';

interface CurriculumTabsProps {
  onOpenPopup: (popupType: string) => void;
}

const CurriculumTabs: React.FC<CurriculumTabsProps> = ({ onOpenPopup }) => {
  const [activeTab, setActiveTab] = useState('beginner');

  const curriculumData = {
    beginner: {
      title: 'Beginner Level',
      subtitle: 'Perfect for those starting their tech journey',
      modules: [
        { name: 'Programming Fundamentals', duration: '4 weeks', topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'Basic Algorithms'] },
        { name: 'Mathematics for Tech', duration: '3 weeks', topics: ['Statistics', 'Linear Algebra', 'Probability', 'Calculus Basics'] },
        { name: 'Introduction to Tools', duration: '2 weeks', topics: ['IDE Setup', 'Git Basics', 'Command Line', 'Project Structure'] },
        { name: 'First Project', duration: '3 weeks', topics: ['Planning', 'Implementation', 'Testing', 'Documentation'] }
      ]
    },
    intermediate: {
      title: 'Intermediate Level',
      subtitle: 'Build on your foundation with advanced concepts',
      modules: [
        { name: 'Advanced Programming', duration: '6 weeks', topics: ['OOP Concepts', 'Design Patterns', 'Data Structures', 'Algorithm Optimization'] },
        { name: 'Database Management', duration: '4 weeks', topics: ['SQL Mastery', 'Database Design', 'Performance Tuning', 'NoSQL Databases'] },
        { name: 'Web Development', duration: '8 weeks', topics: ['Frontend Frameworks', 'Backend APIs', 'Authentication', 'Deployment'] },
        { name: 'Industry Project', duration: '6 weeks', topics: ['Real Client Work', 'Team Collaboration', 'Agile Methodology', 'Code Review'] }
      ]
    },
    advanced: {
      title: 'Advanced Level',
      subtitle: 'Master cutting-edge technologies and lead projects',
      modules: [
        { name: 'Machine Learning', duration: '8 weeks', topics: ['Deep Learning', 'Neural Networks', 'Model Optimization', 'Production ML'] },
        { name: 'Cloud & DevOps', duration: '6 weeks', topics: ['AWS/Azure', 'CI/CD Pipelines', 'Containerization', 'Monitoring'] },
        { name: 'System Design', duration: '4 weeks', topics: ['Scalability', 'Microservices', 'Load Balancing', 'Architecture Patterns'] },
        { name: 'Capstone Project', duration: '8 weeks', topics: ['Full-Stack Application', 'Performance Optimization', 'Security', 'Presentation'] }
      ]
    }
  };

  const tabs = [
    { id: 'beginner', label: 'Beginner', icon: BookOpen },
    { id: 'intermediate', label: 'Intermediate', icon: Code },
    { id: 'advanced', label: 'Advanced', icon: Award }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-purple-600">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured learning path takes you from basics to advanced concepts with hands-on projects
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {curriculumData[activeTab as keyof typeof curriculumData].title}
            </h3>
            <p className="text-lg text-gray-600">
              {curriculumData[activeTab as keyof typeof curriculumData].subtitle}
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {curriculumData[activeTab as keyof typeof curriculumData].modules.map((module, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{module.name}</h4>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duration}
                  </span>
                </div>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Get Complete Curriculum Details</h4>
              <p className="text-lg mb-6 opacity-90">
                Download the full curriculum PDF with detailed syllabus, project descriptions, and learning outcomes
              </p>
              <button 
                onClick={() => onOpenPopup('downloadCurriculum')}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Full Curriculum</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumTabs;