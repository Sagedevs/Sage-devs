import React from 'react';

const EcommerceSolutions = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">E-commerce Solutions</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Building robust online stores with WordPress and Shopify.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Shopify Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">From custom theme development to robust app integrations and performance optimization, we build stunning and high-converting Shopify stores that drive sales and enhance the customer journey. Our solutions are scalable and designed for growth.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">WordPress E-commerce</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Leverage the flexibility of WordPress with powerful e-commerce functionalities through WooCommerce. We provide comprehensive services, including custom store setup, feature extensions, secure payment gateway integrations, and ongoing support for your online business.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">E-commerce Strategy</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Our e-commerce strategy services focus on maximizing your online sales and enhancing the overall customer experience. We analyze market trends, optimize conversion funnels, and implement data-driven strategies to ensure your e-commerce platform achieves its full potential.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutions;
