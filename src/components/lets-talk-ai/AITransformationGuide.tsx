import React from 'react';

const AITransformationGuide = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-950 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
          AI Transformation Guide
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Embark on a guided journey to integrate Artificial Intelligence seamlessly into your organization. Our comprehensive guide covers every step from initial assessment to full-scale AI adoption and beyond.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">Phase 1: Assessment & Strategy</h3>
            <p className="text-gray-400">
              Understand your current state, define objectives, and craft a tailored AI strategy and roadmap.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Phase 2: Pilot & Development</h3>
            <p className="text-gray-400">
              Implement proof-of-concept projects, develop core AI models, and build initial prototypes.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-300">Phase 3: Integration & Scale</h3>
            <p className="text-gray-400">
              Integrate AI solutions into existing systems, optimize performance, and scale across the enterprise.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-purple-300">Phase 4: Monitoring & Optimization</h3>
            <p className="text-gray-400">
              Establish robust monitoring, continuously optimize AI models, and ensure long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransformationGuide;
