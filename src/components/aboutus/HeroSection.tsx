import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building the Future, <span className="text-blue-400">Together</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              We&apos;re a team of passionate creators, innovators, and problem-solvers dedicated to delivering exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-center"
              >
                Get in Touch
              </a>
              <a 
                href="#our-work" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors duration-300 text-center"
              >
                See Our Work
              </a>
            </div>
          </div>
          
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Team Collaboration</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Team Members' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="py-6 px-4 text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
