import React from 'react';

const AISolutions = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">AI Solutions</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Harnessing the power of Artificial Intelligence to drive innovation and efficiency.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Machine Learning</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We develop and deploy custom Machine Learning models to solve complex business challenges. From predictive analytics and recommendation systems to fraud detection and anomaly identification, our ML solutions provide actionable insights and automation.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Natural Language Processing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Unlock the power of text and speech with our Natural Language Processing (NLP) solutions. We build intelligent chatbots, sentiment analysis tools, text summarization systems, and advanced language understanding platforms to enhance customer interactions and automate content processing.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Computer Vision</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Transform visual data into valuable insights with our Computer Vision solutions. We implement advanced image and video analysis for applications like object detection, facial recognition, anomaly detection, and autonomous navigation, enhancing security and operational efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
