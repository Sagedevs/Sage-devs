import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-95"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 -right-20 w-40 h-40 bg-white/5 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Let's turn your ideas into reality. Our team is ready to help you create something amazing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get a Free Consultation
          </a>
          <a 
            href="/portfolio" 
            className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors duration-300"
          >
            View Our Work
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-blue-100 mb-4">Have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:hello@example.com" className="flex items-center text-white hover:text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@example.com
            </a>
            <span className="hidden sm:inline text-white/50">•</span>
            <a href="tel:+1234567890" className="flex items-center text-white hover:text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
