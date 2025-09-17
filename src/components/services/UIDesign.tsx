import React from 'react';

const UIDesign = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">UI/UX Design</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          User-centered design approach to create intuitive and engaging experiences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">User Research & Analysis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We conduct in-depth user research and analysis to understand your target audience's behaviors, needs, and pain points. This foundational step ensures our designs are truly user-centered and solve real-world problems.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Wireframing & Prototyping</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Our design process includes creating detailed wireframes and interactive prototypes. This allows for early visualization and testing of user flows, gathering valuable feedback, and iterating on the design before development begins.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Visual Design & Branding</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We specialize in crafting stunning visual interfaces that are not only aesthetically pleasing but also highly functional. Our visual design services extend to ensuring brand consistency across all touchpoints, reinforcing your brand's identity and appeal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIDesign;
