"use client";

import React from 'react';

const EcommerceGrowth = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            E-commerce Growth Success Story
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-600 mb-6">
              Our client, a mid-sized fashion retailer, was struggling with stagnant online sales and poor customer engagement. 
              Their website had a high bounce rate and low conversion rate, despite having quality products.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Approach</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Comprehensive website audit and performance analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Mobile-first responsive redesign</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Improved product discovery and search functionality</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Streamlined checkout process</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">175%</div>
                <p className="text-sm text-gray-600">Increase in Conversion Rate</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">3.2x</div>
                <p className="text-sm text-gray-600">More Average Order Value</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">68%</div>
                <p className="text-sm text-gray-600">Reduction in Bounce Rate</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">12s</div>
                <p className="text-sm text-gray-600">Faster Page Load</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white text-sm rounded-full text-gray-700 border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceGrowth;