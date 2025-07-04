import React from 'react';
import { Clock, Target, Code, BarChart, Brain, Database } from 'lucide-react';

const CourseCards: React.FC = () => {
  const courses = [
    {
      id: 'ai',
      title: 'Master in Artificial Intelligence',
      duration: '12 Months',
      icon: Brain,
      tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
      outcomes: ['AI Engineer', 'ML Engineer', 'AI Researcher'],
      color: 'from-purple-500 to-pink-500',
      description: 'Build intelligent systems, neural networks, and machine learning models for real-world applications.'
    },
    {
      id: 'datascience',
      title: 'Master in Data Science',
      duration: '10 Months',
      icon: BarChart,
      tools: ['Python', 'R', 'Pandas', 'Scikit-learn'],
      outcomes: ['Data Scientist', 'ML Engineer', 'Data Analyst'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Extract insights from complex data and build predictive models to drive business decisions.'
    },
    {
      id: 'dataanalyst',
      title: 'Data Analyst',
      duration: '6 Months',
      icon: BarChart,
      tools: ['SQL', 'Excel', 'Python', 'Tableau'],
      outcomes: ['Data Analyst', 'Business Analyst', 'BI Analyst'],
      color: 'from-green-500 to-teal-500',
      description: 'Analyze business data and create visualizations to support strategic decision-making.'
    },
    {
      id: 'fullstack',
      title: 'Full Stack in Python',
      duration: '8 Months',
      icon: Code,
      tools: ['Python', 'Django', 'React', 'PostgreSQL'],
      outcomes: ['Full Stack Developer', 'Python Developer', 'Web Developer'],
      color: 'from-orange-500 to-red-500',
      description: 'Build complete web applications from frontend to backend using modern Python frameworks.'
    },
    {
      id: 'powerbi',
      title: 'Power BI',
      duration: '3 Months',
      icon: BarChart,
      tools: ['Power BI', 'DAX', 'Power Query', 'Excel'],
      outcomes: ['BI Developer', 'Data Analyst', 'BI Consultant'],
      color: 'from-yellow-500 to-orange-500',
      description: 'Create interactive dashboards and reports with Microsoft Power BI for business intelligence.'
    },
    {
      id: 'tableau',
      title: 'Tableau',
      duration: '3 Months',
      icon: Database,
      tools: ['Tableau', 'SQL', 'Statistics', 'Analytics'],
      outcomes: ['Tableau Developer', 'Data Visualization Specialist', 'BI Analyst'],
      color: 'from-indigo-500 to-purple-500',
      description: 'Master data visualization and create stunning interactive dashboards with Tableau.'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-purple-600">Career Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-designed programs that transform beginners into job-ready professionals with hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <course.icon className="h-10 w-10 text-white" />
                  <div className="flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm opacity-90">{course.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Tools */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Tools You'll Master
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Career Outcomes
                  </h4>
                  <div className="space-y-2">
                    {course.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform group-hover:scale-105`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can't decide? Get personalized course recommendations</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Get Free Career Guidance
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseCards;