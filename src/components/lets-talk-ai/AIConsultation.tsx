import React from 'react';

const AIConsultation = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
          AI Consultation Services
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Unlock the full potential of Artificial Intelligence for your business with our expert consultation services. We help you identify opportunities, develop strategies, and implement cutting-edge AI solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">Strategy Development</h3>
            <p className="text-gray-400">
              We work with you to create a clear AI roadmap, aligning technology with your business objectives for maximum impact.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Feasibility & ROI Analysis</h3>
            <p className="text-gray-400">
              Evaluate the technical and financial viability of AI projects, ensuring a strong return on investment.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-300">Technology Stack Selection</h3>
            <p className="text-gray-400">
              Guidance on choosing the right AI tools, platforms, and infrastructure tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultation;
