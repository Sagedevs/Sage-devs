import React from 'react';

const OurStory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 mb-8">
            Founded in 2020, our journey began with a simple mission: to create exceptional digital experiences that make a difference. 
            What started as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Team Members' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
