import React from 'react';

const LetsTalkAIFinalSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 to-gray-950 text-white text-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
          Ready to Transform with AI?
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-10">
          Whether you&apos;re looking to automate processes, gain deeper insights, or create intelligent products, our team of AI specialists is ready to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/ai-consultation"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border border-blue-400 text-blue-300 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-400/20 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our AI Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkAIFinalSection;
