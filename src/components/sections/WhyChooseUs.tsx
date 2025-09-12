import React from 'react';

export default function WhyChooseUs() {
  const differentiators = [
    "Lightning-fast development cycles with agile methodology",
    "24/7 technical support and maintenance services",
    "Cutting-edge technology stack and modern frameworks",
    "Proven track record with 100+ successful projects",
    "Custom solutions tailored to your business needs",
    "Transparent pricing with no hidden costs",
    "Expert team of senior developers and designers",
    "End-to-end project management and delivery",
    "Scalable architecture built for future growth"
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black py-20 z-0">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Moving gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/30 to-transparent rounded-full blur-xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-l from-blue-400/20 to-transparent rounded-full blur-xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
              Sage Devs
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We&apos;re not just developers—we&apos;re your strategic technology partners committed to your success
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-black/50 backdrop-blur-sm border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-blue-300 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-black/50 backdrop-blur-sm border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-300 text-sm">Support Available</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-black/50 backdrop-blur-sm border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-blue-300 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-black/50 backdrop-blur-sm border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-blue-300 text-sm">Years Experience</div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {differentiators.map((point, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300"></div>
              
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-black/50 backdrop-blur-sm border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Ideas into Reality?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Join hundreds of satisfied clients who chose Sage Devs for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                Start Your Project
              </button>
              <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border border-white/30 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}