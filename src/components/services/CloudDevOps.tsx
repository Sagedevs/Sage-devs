import React from 'react';

const CloudDevOps = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Cloud & DevOps</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Expert infrastructure management and seamless deployment solutions.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Cloud Infrastructure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We design, implement, and manage highly scalable and resilient cloud infrastructures on leading platforms like AWS, Azure, and Google Cloud. Our solutions ensure optimal performance, cost-efficiency, and robust security for your applications.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">DevOps Automation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Streamline your development and operations with our DevOps automation services. We implement Continuous Integration/Continuous Deployment (CI/CD) pipelines, infrastructure as code (IaC), and advanced monitoring solutions to accelerate delivery and improve reliability.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Containerization</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Embrace the power of containerization with Docker and Kubernetes. We help you package your applications and their dependencies, enabling consistent deployment across different environments and simplifying scaling and management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDevOps;
