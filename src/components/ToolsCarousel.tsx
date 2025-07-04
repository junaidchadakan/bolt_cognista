import React, { useEffect, useState } from 'react';

const ToolsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tools = [
    { name: 'Python', category: 'Programming', logo: '🐍' },
    { name: 'TensorFlow', category: 'AI/ML', logo: '🧠' },
    { name: 'PyTorch', category: 'AI/ML', logo: '🔥' },
    { name: 'Pandas', category: 'Data Analysis', logo: '🐼' },
    { name: 'Scikit-learn', category: 'Machine Learning', logo: '🤖' },
    { name: 'Tableau', category: 'Visualization', logo: '📊' },
    { name: 'Power BI', category: 'Business Intelligence', logo: '📈' },
    { name: 'MySQL', category: 'Database', logo: '🗄️' },
    { name: 'MongoDB', category: 'Database', logo: '🍃' },
    { name: 'Docker', category: 'DevOps', logo: '🐳' },
    { name: 'GitHub', category: 'Version Control', logo: '🐙' },
    { name: 'Anaconda', category: 'Environment', logo: '🐍' },
    { name: 'Jupyter', category: 'Notebooks', logo: '📔' },
    { name: 'React', category: 'Frontend', logo: '⚛️' },
    { name: 'Django', category: 'Backend', logo: '🎸' },
    { name: 'AWS', category: 'Cloud', logo: '☁️' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(tools.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [tools.length]);

  const getVisibleTools = () => {
    const startIndex = currentIndex * 4;
    return tools.slice(startIndex, startIndex + 4);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Master <span className="text-orange-400">Industry-Standard</span> Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn the most in-demand tools and technologies used by top companies worldwide
          </p>
        </div>

        {/* Mobile View - Stack */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {tools.slice(0, 8).map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl mb-2">{tool.logo}</div>
                <h3 className="font-bold text-white">{tool.name}</h3>
                <p className="text-sm text-gray-300">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Carousel */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-6 transition-all duration-500">
            {getVisibleTools().map((tool, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{tool.logo}</div>
                <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-300">{tool.category}</p>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(tools.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-orange-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Tools Grid - Hidden on smaller screens */}
        <div className="hidden lg:block mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-orange-400">Complete Technology Stack</h3>
          <div className="grid grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{tool.logo}</div>
                <div className="text-xs font-medium text-white">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-400">16+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400">100%</div>
            <div className="text-gray-300">Hands-on</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400">Live</div>
            <div className="text-gray-300">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400">Industry</div>
            <div className="text-gray-300">Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;