import React from 'react';

const BrandIdentity = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Brand Identity</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          Crafting complete brand solutions that resonate with your audience.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Logo & Visual Identity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We design compelling logos and visual elements that capture the essence of your brand. Our creative process ensures your visual identity is distinctive, memorable, and effectively communicates your brand&apos;s values and personality.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Brand Guidelines</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">To maintain consistency and strengthen brand recognition, we develop comprehensive brand guidelines. These guidelines cover everything from logo usage and typography to color palettes and imagery, ensuring a unified brand presence across all platforms.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Messaging & Tone of Voice</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We help you articulate your brand&apos;s unique voice and develop impactful messaging that resonates with your target audience. Our strategies ensure your communication is consistent, authentic, and effectively conveys your brand&apos;s narrative and value proposition.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
