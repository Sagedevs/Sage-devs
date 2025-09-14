import React from 'react';

const MachineLearning = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-950 to-purple-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-white bg-clip-text text-transparent">
          Machine Learning Solutions
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Harness the power of data with our custom Machine Learning solutions. From predictive analytics to intelligent automation, we build models that drive innovation and efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-purple-300">Predictive Analytics</h3>
            <p className="text-gray-400">
              Develop models to forecast trends, anticipate customer behavior, and make data-driven decisions.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-pink-700/30 hover:border-pink-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-pink-300">Custom ML Model Development</h3>
            <p className="text-gray-400">
              Build bespoke machine learning models tailored to your unique business problems and datasets.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-rose-700/30 hover:border-rose-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-rose-300">MLOps & Deployment</h3>
            <p className="text-gray-400">
              Seamlessly deploy, monitor, and maintain your machine learning models in production environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineLearning;
