import React from 'react';

const MaintenanceSupport = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Maintenance & Support</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Ongoing technical support to ensure your systems run smoothly and efficiently.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">24/7 Technical Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Our dedicated support team provides round-the-clock technical assistance, ensuring that any issues or inquiries are addressed promptly. We minimize downtime and keep your systems running smoothly, allowing you to focus on your core business.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">System Monitoring & Updates</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We offer proactive monitoring of your systems to detect and resolve potential issues before they impact your operations. Regular updates and patches are applied to keep your software current, secure, and performing optimally.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Security & Backup Solutions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Protect your valuable data and systems with our robust security and backup solutions. We implement industry-leading security measures, conduct regular vulnerability assessments, and establish reliable backup strategies to ensure data integrity and business continuity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSupport;
