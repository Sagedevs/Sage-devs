import React from 'react';

const WebAppDevelopment = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Web & App Development</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Crafting custom web and mobile applications tailored to your business needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Custom Web Applications</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We develop bespoke web applications from scratch, focusing on scalability, security, and performance. Leveraging modern frameworks like Next.js, React, and Angular, we ensure your application meets your unique business logic and user experience demands.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Mobile App Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Our expertise extends to crafting native and cross-platform mobile applications for iOS and Android. We prioritize intuitive UI/UX, seamless functionality, and optimal performance to deliver engaging experiences that your users will love.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Frontend & Backend Services</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We offer end-to-end development, covering both captivating front-end interfaces and robust back-end systems. Our full-stack developers are proficient in various languages and databases, ensuring a cohesive and powerful application architecture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppDevelopment;
