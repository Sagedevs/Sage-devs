"use client";

import React from 'react';

const WebinarsTalks = () => {
  const events = [
    {
      title: 'The Future of Web Development',
      speaker: 'Alex Johnson',
      role: 'Lead Developer',
      date: 'October 15, 2023',
      time: '2:00 PM EST',
      image: '/images/webinar1.jpg',
      link: '#'
    },
    {
      title: 'AI in Digital Marketing',
      speaker: 'Sarah Chen',
      role: 'Marketing Director',
      date: 'November 2, 2023',
      time: '11:00 AM EST',
      image: '/images/webinar2.jpg',
      link: '#'
    },
    {
      title: 'UX/UI Design Trends 2023',
      speaker: 'Michael Brown',
      role: 'Head of Design',
      date: 'November 18, 2023',
      time: '3:30 PM EST',
      image: '/images/webinar3.jpg',
      link: '#'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Webinars & Talks</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expert-led sessions to expand your knowledge</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {event.title.split(' ')[0]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    {event.speaker.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{event.speaker}</p>
                    <p className="text-sm text-gray-500">{event.role}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>
                <a 
                  href={event.link}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarsTalks;
