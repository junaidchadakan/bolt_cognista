import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Download, Phone, Star, Calendar, Target, Code, BarChart, Brain, Database } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface CourseDetailPageProps {
  courseId: string;
  onBack: () => void;
  onOpenPopup: (popupType: string) => void;
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ courseId, onBack, onOpenPopup }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseData = {
    'master-ai': {
      title: 'Master in Artificial Intelligence',
      subtitle: 'Build intelligent systems and neural networks for the future',
      duration: '12 Months',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: '₹1,50,000',
      originalPrice: '₹2,00,000',
      rating: 4.9,
      students: '2,500+',
      overview: {
        description: 'Master the art of Artificial Intelligence with our comprehensive 12-month program. Learn to build intelligent systems, neural networks, and cutting-edge AI applications that solve real-world problems.',
        highlights: [
          'Deep Learning & Neural Networks',
          'Computer Vision & NLP',
          'AI Ethics & Responsible AI',
          'Production AI Systems',
          'Research Methodologies',
          'Industry Capstone Projects'
        ],
        outcomes: [
          'AI Engineer at top tech companies',
          'Machine Learning Engineer',
          'AI Research Scientist',
          'Computer Vision Engineer',
          'NLP Engineer',
          'AI Product Manager'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'AI Fundamentals',
            duration: '4 weeks',
            topics: ['Introduction to AI', 'Python for AI', 'Mathematics for AI', 'Statistics & Probability']
          },
          {
            title: 'Machine Learning Mastery',
            duration: '8 weeks',
            topics: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Model Evaluation']
          },
          {
            title: 'Deep Learning',
            duration: '10 weeks',
            topics: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers', 'GANs']
          },
          {
            title: 'Computer Vision',
            duration: '6 weeks',
            topics: ['Image Processing', 'Object Detection', 'Face Recognition', 'Medical Imaging']
          },
          {
            title: 'Natural Language Processing',
            duration: '6 weeks',
            topics: ['Text Processing', 'Sentiment Analysis', 'Chatbots', 'Language Models']
          },
          {
            title: 'AI in Production',
            duration: '8 weeks',
            topics: ['MLOps', 'Model Deployment', 'Scaling AI', 'AI Ethics']
          },
          {
            title: 'Capstone Project',
            duration: '6 weeks',
            topics: ['Project Planning', 'Implementation', 'Testing', 'Presentation']
          }
        ]
      },
      tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLTK', 'Scikit-learn', 'Keras', 'Pandas', 'NumPy', 'Jupyter'],
      projects: [
        'AI-Powered Recommendation System',
        'Computer Vision for Medical Diagnosis',
        'Chatbot with Natural Language Understanding',
        'Autonomous Vehicle Navigation System',
        'AI-Based Financial Trading Bot'
      ],
      mentors: [
        {
          name: 'Dr. Sarah Chen',
          designation: 'Senior AI Researcher',
          company: 'Google DeepMind',
          image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Michael Rodriguez',
          designation: 'Principal ML Engineer',
          company: 'Meta',
          image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    'master-data-science': {
      title: 'Master in Data Science',
      subtitle: 'Extract insights from complex data and drive business decisions',
      duration: '10 Months',
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=1200',
      price: '₹1,20,000',
      originalPrice: '₹1,60,000',
      rating: 4.8,
      students: '3,200+',
      overview: {
        description: 'Become a data science expert with our comprehensive program covering statistics, machine learning, and big data analytics. Learn to extract meaningful insights from complex datasets.',
        highlights: [
          'Statistical Analysis & Modeling',
          'Machine Learning Algorithms',
          'Big Data Technologies',
          'Data Visualization',
          'Business Intelligence',
          'Real-world Industry Projects'
        ],
        outcomes: [
          'Data Scientist at Fortune 500 companies',
          'Machine Learning Engineer',
          'Data Analyst',
          'Business Intelligence Analyst',
          'Research Scientist',
          'Data Consultant'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Data Science Foundations',
            duration: '3 weeks',
            topics: ['Python Programming', 'Statistics', 'Data Types', 'Research Methods']
          },
          {
            title: 'Data Analysis & Visualization',
            duration: '6 weeks',
            topics: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly']
          },
          {
            title: 'Machine Learning',
            duration: '8 weeks',
            topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Selection', 'Feature Engineering']
          },
          {
            title: 'Advanced Analytics',
            duration: '6 weeks',
            topics: ['Time Series', 'A/B Testing', 'Causal Inference', 'Bayesian Methods']
          },
          {
            title: 'Big Data & Cloud',
            duration: '5 weeks',
            topics: ['Spark', 'Hadoop', 'AWS', 'Azure', 'Google Cloud']
          },
          {
            title: 'Business Intelligence',
            duration: '4 weeks',
            topics: ['SQL', 'Tableau', 'Power BI', 'Dashboard Design']
          },
          {
            title: 'Capstone Project',
            duration: '8 weeks',
            topics: ['Project Planning', 'Data Collection', 'Analysis', 'Presentation']
          }
        ]
      },
      tools: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Spark', 'Hadoop', 'AWS', 'Pandas', 'Scikit-learn'],
      projects: [
        'Customer Churn Prediction Model',
        'Sales Forecasting Dashboard',
        'Market Basket Analysis',
        'Fraud Detection System',
        'Social Media Sentiment Analysis'
      ],
      mentors: [
        {
          name: 'Emily Watson',
          designation: 'Principal Data Scientist',
          company: 'Netflix',
          image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'David Kim',
          designation: 'Lead Data Engineer',
          company: 'Spotify',
          image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    'data-analyst': {
      title: 'Data Analyst Professional',
      subtitle: 'Analyze business data and create visualizations for strategic decisions',
      duration: '6 Months',
      icon: BarChart,
      color: 'from-green-500 to-teal-500',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpg?auto=compress&cs=tinysrgb&w=1200',
      price: '₹80,000',
      originalPrice: '₹1,20,000',
      rating: 4.7,
      students: '4,100+',
      overview: {
        description: 'Master data analysis and visualization to support business decision-making. Learn to work with databases, create compelling visualizations, and communicate insights effectively.',
        highlights: [
          'SQL Database Management',
          'Excel Advanced Analytics',
          'Tableau & Power BI Mastery',
          'Statistical Analysis',
          'Business Intelligence',
          'Dashboard Development'
        ],
        outcomes: [
          'Data Analyst at top companies',
          'Business Intelligence Analyst',
          'Reporting Analyst',
          'Market Research Analyst',
          'Operations Analyst',
          'Financial Analyst'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Data Analysis Fundamentals',
            duration: '2 weeks',
            topics: ['Data Types', 'Statistics Basics', 'Excel Fundamentals', 'Data Quality']
          },
          {
            title: 'SQL Mastery',
            duration: '4 weeks',
            topics: ['Database Design', 'Complex Queries', 'Joins', 'Stored Procedures']
          },
          {
            title: 'Excel Advanced',
            duration: '3 weeks',
            topics: ['Pivot Tables', 'Advanced Functions', 'VBA', 'Data Modeling']
          },
          {
            title: 'Tableau Visualization',
            duration: '6 weeks',
            topics: ['Chart Types', 'Dashboard Design', 'Calculated Fields', 'Advanced Analytics']
          },
          {
            title: 'Power BI Development',
            duration: '5 weeks',
            topics: ['Data Modeling', 'DAX', 'Power Query', 'Report Design']
          },
          {
            title: 'Statistical Analysis',
            duration: '3 weeks',
            topics: ['Descriptive Statistics', 'Hypothesis Testing', 'Regression', 'Correlation']
          },
          {
            title: 'Business Projects',
            duration: '3 weeks',
            topics: ['Sales Analysis', 'Marketing Analytics', 'Financial Reporting', 'Operations']
          }
        ]
      },
      tools: ['SQL', 'Excel', 'Tableau', 'Power BI', 'Python', 'R', 'Google Analytics', 'SPSS'],
      projects: [
        'Sales Performance Dashboard',
        'Customer Segmentation Analysis',
        'Financial KPI Reporting',
        'Marketing Campaign Analysis',
        'Inventory Optimization Study'
      ],
      mentors: [
        {
          name: 'Dr. Priya Sharma',
          designation: 'Principal BI Architect',
          company: 'Microsoft',
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    'full-stack-python': {
      title: 'Full Stack Python Developer',
      subtitle: 'Build complete web applications from frontend to backend',
      duration: '8 Months',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpg?auto=compress&cs=tinysrgb&w=1200',
      price: '₹1,00,000',
      originalPrice: '₹1,40,000',
      rating: 4.8,
      students: '2,800+',
      overview: {
        description: 'Master full-stack web development with Python. Learn to build scalable web applications using modern frameworks and deploy them to production.',
        highlights: [
          'Python & Django Framework',
          'React.js Frontend Development',
          'Database Design & Management',
          'API Development & Integration',
          'Cloud Deployment',
          'DevOps & CI/CD'
        ],
        outcomes: [
          'Full Stack Developer',
          'Python Developer',
          'Web Developer',
          'Backend Engineer',
          'Frontend Developer',
          'DevOps Engineer'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Python Fundamentals',
            duration: '3 weeks',
            topics: ['Python Syntax', 'OOP', 'Data Structures', 'File Handling']
          },
          {
            title: 'Web Development Basics',
            duration: '2 weeks',
            topics: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
          },
          {
            title: 'Django Backend',
            duration: '8 weeks',
            topics: ['Django Framework', 'Models', 'Views', 'Templates', 'REST APIs']
          },
          {
            title: 'Database Management',
            duration: '4 weeks',
            topics: ['PostgreSQL', 'MongoDB', 'Database Design', 'ORM']
          },
          {
            title: 'React Frontend',
            duration: '6 weeks',
            topics: ['React Components', 'State Management', 'Hooks', 'Redux']
          },
          {
            title: 'DevOps & Deployment',
            duration: '4 weeks',
            topics: ['Docker', 'AWS', 'CI/CD', 'Monitoring']
          },
          {
            title: 'Full Stack Project',
            duration: '5 weeks',
            topics: ['Project Planning', 'Development', 'Testing', 'Deployment']
          }
        ]
      },
      tools: ['Python', 'Django', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Redis'],
      projects: [
        'E-commerce Platform',
        'Social Media Application',
        'Task Management System',
        'Real-time Chat Application',
        'Content Management System'
      ],
      mentors: [
        {
          name: 'James Thompson',
          designation: 'VP of Engineering',
          company: 'Stripe',
          image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    'tableau': {
      title: 'Tableau Expert Certification',
      subtitle: 'Master data visualization and create stunning interactive dashboards',
      duration: '3 Months',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpg?auto=compress&cs=tinysrgb&w=1200',
      price: '₹45,000',
      originalPrice: '₹65,000',
      rating: 4.9,
      students: '1,800+',
      overview: {
        description: 'Become a Tableau expert and create compelling data visualizations. Learn advanced analytics, dashboard design, and storytelling with data.',
        highlights: [
          'Advanced Tableau Features',
          'Dashboard Design Principles',
          'Calculated Fields & Parameters',
          'Data Storytelling',
          'Performance Optimization',
          'Tableau Server Administration'
        ],
        outcomes: [
          'Tableau Developer',
          'Data Visualization Specialist',
          'Business Intelligence Analyst',
          'Dashboard Designer',
          'Analytics Consultant',
          'Tableau Trainer'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Tableau Fundamentals',
            duration: '2 weeks',
            topics: ['Interface', 'Data Connections', 'Basic Charts', 'Filters']
          },
          {
            title: 'Advanced Visualizations',
            duration: '3 weeks',
            topics: ['Complex Charts', 'Maps', 'Dual Axis', 'Custom Shapes']
          },
          {
            title: 'Calculations & Analytics',
            duration: '3 weeks',
            topics: ['Calculated Fields', 'Table Calculations', 'Parameters', 'Sets']
          },
          {
            title: 'Dashboard Design',
            duration: '2 weeks',
            topics: ['Layout', 'Actions', 'Formatting', 'Mobile Design']
          },
          {
            title: 'Advanced Features',
            duration: '2 weeks',
            topics: ['Level of Detail', 'Data Blending', 'Performance', 'Security']
          }
        ]
      },
      tools: ['Tableau Desktop', 'Tableau Server', 'Tableau Prep', 'SQL', 'Excel', 'Python'],
      projects: [
        'Executive Sales Dashboard',
        'Financial Performance Analytics',
        'Customer Journey Visualization',
        'Supply Chain Analytics',
        'HR Analytics Dashboard'
      ],
      mentors: [
        {
          name: 'Dr. Priya Sharma',
          designation: 'Principal BI Architect',
          company: 'Microsoft',
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    'power-bi': {
      title: 'Power BI Professional',
      subtitle: 'Create interactive dashboards and reports with Microsoft Power BI',
      duration: '3 Months',
      icon: BarChart,
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpg?auto=compress&cs=tinysrgb&w=1200',
      price: '₹40,000',
      originalPrice: '₹60,000',
      rating: 4.8,
      students: '2,200+',
      overview: {
        description: 'Master Microsoft Power BI to create powerful business intelligence solutions. Learn data modeling, DAX, and advanced analytics.',
        highlights: [
          'Power BI Desktop Mastery',
          'DAX Formula Language',
          'Data Modeling Techniques',
          'Power Query Transformations',
          'Report Design & Publishing',
          'Power BI Service Administration'
        ],
        outcomes: [
          'Power BI Developer',
          'Business Intelligence Analyst',
          'Data Analyst',
          'BI Consultant',
          'Report Developer',
          'Analytics Specialist'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Power BI Basics',
            duration: '2 weeks',
            topics: ['Interface', 'Data Import', 'Basic Visuals', 'Filters']
          },
          {
            title: 'Data Modeling',
            duration: '3 weeks',
            topics: ['Relationships', 'Star Schema', 'Data Types', 'Hierarchies']
          },
          {
            title: 'DAX Mastery',
            duration: '3 weeks',
            topics: ['DAX Functions', 'Calculated Columns', 'Measures', 'Time Intelligence']
          },
          {
            title: 'Power Query',
            duration: '2 weeks',
            topics: ['Data Transformation', 'M Language', 'Custom Functions', 'Data Sources']
          },
          {
            title: 'Advanced Features',
            duration: '2 weeks',
            topics: ['Custom Visuals', 'R/Python Integration', 'AI Features', 'Performance']
          }
        ]
      },
      tools: ['Power BI Desktop', 'Power BI Service', 'Power Query', 'DAX', 'Excel', 'SQL Server'],
      projects: [
        'Sales Analytics Dashboard',
        'Financial Reporting System',
        'Marketing Performance Tracker',
        'Operations KPI Dashboard',
        'Customer Analytics Portal'
      ],
      mentors: [
        {
          name: 'Dr. Priya Sharma',
          designation: 'Principal BI Architect',
          company: 'Microsoft',
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];
  if (!course) return null;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'projects', label: 'Projects' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Courses</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${course.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <course.icon className="h-12 w-12" />
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">{course.duration}</span>
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl mb-6 opacity-90">{course.subtitle}</p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onOpenPopup('bookCall')}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Book Free Consultation</span>
                </button>
                <WhatsAppButton 
                  message={`Hi! I'm interested in the ${course.title} course. Can you provide more details?`}
                  className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg"
                >
                  <span>Chat on WhatsApp</span>
                </WhatsAppButton>
              </div>
            </div>

            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {course.overview.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                    <ul className="space-y-3">
                      {course.overview.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Career Outcomes</h3>
                    <ul className="space-y-3">
                      {course.overview.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Target className="h-5 w-5 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {course.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold">{course.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price:</span>
                    <div>
                      <span className="text-2xl font-bold text-green-600">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <button 
                    onClick={() => onOpenPopup('bookCall')}
                    className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}
                  >
                    Enroll Now
                  </button>
                  <button 
                    onClick={() => onOpenPopup('downloadCurriculum')}
                    className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Curriculum</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.curriculum.modules.map((module, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {module.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hands-on Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project}</h3>
                  <p className="text-gray-600 text-sm">
                    Real-world project that you'll build during the course to demonstrate your skills.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mentors' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {course.mentors.map((mentor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                    <p className="text-purple-600 font-semibold mb-1">{mentor.designation}</p>
                    <p className="text-gray-600">{mentor.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Course Pricing</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-green-600 mb-2">{course.price}</div>
                <div className="text-lg text-gray-500 line-through">{course.originalPrice}</div>
                <div className="text-sm text-green-600 font-semibold">Limited Time Offer</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Complete {course.duration} program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>1:1 mentorship sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Hands-on projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Industry certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>100% placement assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Lifetime access to materials</span>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => onOpenPopup('bookCall')}
                  className={`w-full bg-gradient-to-r ${course.color} text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all`}
                >
                  Enroll Now
                </button>
                <WhatsAppButton 
                  message={`Hi! I'm interested in enrolling for the ${course.title} course. Can you help me with the admission process?`}
                  className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-lg justify-center"
                >
                  <span>Get Admission Help</span>
                </WhatsAppButton>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className={`bg-gradient-to-r ${course.color} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students who transformed their careers with {course.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onOpenPopup('bookCall')}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Free Consultation</span>
            </button>
            <WhatsAppButton 
              message={`Hi! I want to enroll in the ${course.title} course. Please guide me through the process.`}
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg"
            >
              <span>Start Enrollment</span>
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;