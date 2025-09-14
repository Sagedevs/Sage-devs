import React from 'react';

const AIStrategy = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-950 to-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-green-300 to-white bg-clip-text text-transparent">
          AI Strategy Development
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Navigate the complex AI landscape with a clear, actionable strategy. We help businesses define their AI vision, identify high-impact use cases, and build a roadmap for successful implementation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-300">AI Readiness Assessment</h3>
            <p className="text-gray-400">
              Evaluate your current capabilities, data infrastructure, and organizational culture for AI adoption.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-green-700/30 hover:border-green-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-green-300">Roadmap & Prioritization</h3>
            <p className="text-gray-400">
              Develop a phased implementation plan for AI initiatives, prioritizing based on business value and feasibility.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-lime-700/30 hover:border-lime-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-lime-300">Ethical AI Frameworks</h3>
            <p className="text-gray-400">
              Integrate ethical considerations and responsible AI practices into your strategy and development lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStrategy;
