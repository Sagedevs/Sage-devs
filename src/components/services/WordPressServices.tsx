import React from 'react';

const WordPressServices = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">WordPress Services</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Custom WordPress sites, themes, plugins & ongoing maintenance.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Custom WordPress Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We craft custom WordPress websites tailored to your specific business needs, ensuring a unique design and robust functionality. Our solutions are scalable, secure, and optimized for performance across all devices.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Theme & Plugin Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Enhance your WordPress site with bespoke themes and custom plugins. We develop solutions that extend functionality, improve user experience, and seamlessly integrate with your existing systems, giving you full control over your site&apos;s capabilities.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">WordPress Maintenance</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Keep your WordPress website secure, updated, and performing at its best with our comprehensive maintenance services. We offer regular backups, security monitoring, performance optimization, and timely updates to ensure smooth operation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressServices;
