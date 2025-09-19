import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Resources Hub
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
          Access our collection of guides, templates, and expert insights to accelerate your digital transformation.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
