"use client";
import React, { useEffect } from 'react';

const CaseStudyCTA = () => {
  useEffect(() => {
    console.log('CaseStudyCTA component mounted');
    return () => console.log('CaseStudyCTA component unmounted');
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative z-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          Let's work together to create something amazing. Get in touch with us today to discuss your project requirements.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/services"
            className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCTA;