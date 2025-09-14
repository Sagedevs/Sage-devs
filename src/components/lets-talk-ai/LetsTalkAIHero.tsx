import React from 'react';

const LetsTalkAIHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 to-blue-900 py-24 lg:py-32 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
          Ignite Your Future with AI
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto">
          Transform your business operations and unlock new possibilities with cutting-edge Artificial Intelligence solutions tailored to your unique needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/ai-consultation"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Get an AI Consultation
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border border-blue-400 text-blue-300 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-400/20 transition-all duration-300 transform hover:scale-105"
          >
            Contact Our AI Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkAIHero;
