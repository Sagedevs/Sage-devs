import React from 'react';

const DigitalStrategy = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Digital Strategy</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Strategic planning for business transformation in the digital age.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Market Analysis & Insights</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We conduct comprehensive market analysis to identify emerging trends, competitive landscapes, and untapped opportunities. Our insights empower you to make informed decisions and position your business for sustained growth in the digital marketplace.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Digital Roadmap Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Our experts craft tailored digital roadmaps that outline clear, actionable strategies for achieving your business objectives. We prioritize initiatives, allocate resources effectively, and define key performance indicators to ensure measurable success and continuous innovation.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Technology Consulting</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Navigate the complex technology landscape with our expert consulting services. We provide unbiased guidance on selecting, implementing, and optimizing the right technologies to support your digital strategy, enhance operational efficiency, and drive business value.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalStrategy;
