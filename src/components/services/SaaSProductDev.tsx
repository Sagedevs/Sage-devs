import React from 'react';

const SaaSProductDev = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">SaaS & Product Dev</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Developing scalable software solutions and innovative products.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Product Strategy & Roadmapping</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We help you define a clear product vision, strategy, and a detailed roadmap that aligns with your business goals. From market analysis to feature prioritization, we guide you through every step to ensure a successful product launch and growth.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">SaaS Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Our team specializes in building robust, scalable, and secure Software-as-a-Service (SaaS) platforms. We handle everything from multi-tenant architecture to subscription management, ensuring a seamless experience for your users and efficient operations for your business.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">MVP Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We accelerate your time to market by developing Minimum Viable Products (MVPs) that capture core value. Our agile approach allows for rapid iteration and early user feedback, ensuring your product evolves based on real-world insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSProductDev;
