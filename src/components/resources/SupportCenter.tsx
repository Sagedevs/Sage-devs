"use client";

import React from 'react';
import { Headset, FileText, Video, MessageSquare, BookOpen } from 'lucide-react';

const SupportCenter = () => {
  const supportItems = [
    {
      icon: <Headset className="w-8 h-8 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our expert support team',
      link: '/support/contact'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs'
    },
    {
      icon: <Video className="w-8 h-8 text-purple-500" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-500" />,
      title: 'Community Forum',
      description: 'Connect with other developers and experts',
      link: '/community'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-red-500" />,
      title: 'Knowledge Base',
      description: 'Find answers to common questions',
      link: '/knowledge-base'
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Support Center
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400">
            We're here to help you succeed
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {supportItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-200 flex flex-col items-center text-center"
            >
              <div className="bg-gray-700 p-4 rounded-full mb-4 group-hover:bg-opacity-75 transition-colors duration-200">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Can't find what you're looking for?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportCenter;
