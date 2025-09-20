"use client";
import React from 'react';

const positions = [
  {
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    description: 'We are looking for an experienced frontend developer to join our team.'
  },
  {
    title: 'UX/UI Designer',
    type: 'Full-time',
    location: 'New York, NY',
    description: 'Help us create beautiful and intuitive user experiences.'
  },
  {
    title: 'DevOps Engineer',
    type: 'Contract',
    location: 'Remote',
    description: 'Looking for someone to optimize our deployment pipeline.'
  }
];

const Careers = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600">
              Be part of something great. Help us build the future of digital experiences.
            </p>
          </div>
          
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-gray-600">{position.type}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{position.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="mt-4 text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Don&apos;t see your dream job? We&apos;re always looking for talented individuals.</p>
            <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
