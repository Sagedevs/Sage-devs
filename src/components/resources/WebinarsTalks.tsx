"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  speaker: string;
  role: string;
  company: string;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  category: string;
  description: string;
  topics: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'upcoming' | 'completed';
  speakerImage: string;
  backgroundImage: string;
  price: string;
}

const WebinarsTalks = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: 'The Future of AI & Machine Learning',
      speaker: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      company: 'TechCorp',
      date: 'December 28, 2024',
      time: '2:00 PM EST',
      duration: '90 min',
      attendees: 1247,
      category: 'AI/ML',
      description: 'Explore the cutting-edge developments in artificial intelligence and machine learning that will shape the next decade of technology.',
      topics: ['Neural Networks', 'GPT Models', 'Computer Vision', 'Ethics in AI'],
      level: 'Intermediate',
      status: 'upcoming',
      speakerImage: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format',
      price: 'Free'
    },
    {
      id: 2,
      title: 'Modern Web Development Mastery',
      speaker: 'Alex Rodriguez',
      role: 'Senior Full Stack Developer',
      company: 'DevStudio',
      date: 'January 12, 2025',
      time: '11:00 AM EST',
      duration: '120 min',
      attendees: 856,
      category: 'Development',
      description: 'Master the latest web development technologies including React 19, Next.js 15, and advanced TypeScript patterns.',
      topics: ['React 19', 'Next.js 15', 'TypeScript', 'Performance'],
      level: 'Advanced',
      status: 'upcoming',
      speakerImage: 'https://api.uifaces.co/our-content/donated/FJkauyEa.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format',
      price: '$49'
    },
    {
      id: 3,
      title: 'UX Design Psychology & User Behavior',
      speaker: 'Emma Thompson',
      role: 'Head of UX Research',
      company: 'DesignLab',
      date: 'January 25, 2025',
      time: '3:30 PM EST',
      duration: '75 min',
      attendees: 623,
      category: 'Design',
      description: 'Dive deep into the psychology behind user behavior and learn how to create intuitive, user-centered designs.',
      topics: ['User Psychology', 'Behavioral Design', 'A/B Testing', 'Conversion'],
      level: 'Intermediate',
      status: 'upcoming',
      speakerImage: 'https://api.uifaces.co/our-content/donated/bUkmHPKs.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop&crop=entropy&auto=format',
      price: '$29'
    },
    {
      id: 4,
      title: 'Digital Marketing in the AI Era',
      speaker: 'Michael Park',
      role: 'Marketing Strategy Director',
      company: 'GrowthHackers',
      date: 'February 8, 2025',
      time: '1:00 PM EST',
      duration: '90 min',
      attendees: 1089,
      category: 'Marketing',
      description: 'Learn how AI is revolutionizing digital marketing and discover strategies to leverage automation for better ROI.',
      topics: ['AI Marketing', 'Automation', 'Personalization', 'Analytics'],
      level: 'Beginner',
      status: 'upcoming',
      speakerImage: 'https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format',
      price: 'Free'
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices 2025',
      speaker: 'Jennifer Liu',
      role: 'Chief Security Officer',
      company: 'SecureNet',
      date: 'November 15, 2024',
      time: '12:00 PM EST',
      duration: '60 min',
      attendees: 2156,
      category: 'Security',
      description: 'Essential cybersecurity strategies and best practices to protect your business in an increasingly digital world.',
      topics: ['Zero Trust', 'Cloud Security', 'Threat Detection', 'Compliance'],
      level: 'Intermediate',
      status: 'completed',
      speakerImage: 'https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop&crop=entropy&auto=format',
      price: '$39'
    },
    {
      id: 6,
      title: 'Building Scalable Cloud Architecture',
      speaker: 'David Kim',
      role: 'Cloud Solutions Architect',
      company: 'CloudMasters',
      date: 'February 22, 2025',
      time: '4:00 PM EST',
      duration: '105 min',
      attendees: 734,
      category: 'Cloud',
      description: 'Master the principles of designing and implementing scalable, resilient cloud infrastructure using modern technologies.',
      topics: ['AWS/Azure', 'Kubernetes', 'Microservices', 'DevOps'],
      level: 'Advanced',
      status: 'upcoming',
      speakerImage: 'https://api.uifaces.co/our-content/donated/BiIqPuGk.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=entropy&auto=format',
      price: '$79'
    }
  ];

  const filteredEvents = events;

  const getLevelColor = (level: 'Beginner' | 'Intermediate' | 'Advanced') => {
    switch (level) {
      case 'Beginner': return 'bg-emerald-500';
      case 'Intermediate': return 'bg-amber-500';
      case 'Advanced': return 'bg-rose-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <section className="relative min-h-screen py-24 overflow-hidden px-[130px]">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2s"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4s"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium">LIVE LEARNING SESSIONS</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            Expert-Led
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 animate-pulse">
              Webinars
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Join thousands of professionals learning from industry leaders. Interactive sessions, practical insights, 
            and networking opportunities that accelerate your career growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400">Expert Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">12K+</div>
              <div className="text-slate-400">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-slate-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40+</div>
              <div className="text-slate-400">Hours Content</div>
            </div>
          </div>
        </div>


        {/* Premium Events Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group relative bg-slate-900/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-600/20"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Dynamic Background Image */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={event.backgroundImage} 
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getLevelColor(event.level)} backdrop-blur-sm`}>
                    {event.level}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-800/80 backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    event.price === 'Free' ? 'bg-emerald-600 text-white' : 'bg-blue-600 text-white'
                  } backdrop-blur-sm`}>
                    {event.price}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Speaker Section with Real Photo */}
                <div className="flex items-center mb-6">
                  <div className="relative w-14 h-14 mr-4">
                    <Image 
                      src={event.speakerImage} 
                      alt={event.speaker}
                      fill
                      className="rounded-full object-cover ring-2 ring-blue-500/50"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{event.speaker}</p>
                    <p className="text-sm text-slate-400">{event.role}</p>
                    <p className="text-xs text-blue-400">{event.company}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="flex items-center gap-1 text-slate-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                      <span className="text-sm font-semibold">{event.attendees.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">{event.description}</p>

                {/* Topics */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {event.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-800/60 text-slate-300 rounded-full text-sm border border-slate-600">
                        {topic}
                      </span>
                    ))}
                    {event.topics.length > 3 && (
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                        +{event.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <div>
                    <div className="text-slate-400 text-sm mb-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      Date & Time
                    </div>
                    <div className="text-white font-semibold text-sm">{event.date}</div>
                    <div className="text-slate-300 text-sm">{event.time}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      Duration
                    </div>
                    <div className="text-white font-semibold">{event.duration}</div>
                  </div>
                </div>

                {/* Enhanced CTA Button */}
                <button
                  className={`w-full font-bold py-4 px-6 rounded-2xl transition-all duration-500 relative overflow-hidden group ${
                    event.status === 'completed' 
                      ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' 
                      : 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:shadow-xl'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {event.status === 'completed' ? (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                        </svg>
                        Watch Recording
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/>
                        </svg>
                        {event.price === 'Free' ? 'Join Free' : 'Register Now'}
                      </>
                    )}
                  </span>
                  {event.status !== 'completed' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  )}
                </button>
              </div>

              {/* Hover glow effect */}
              {hoveredCard === event.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/5 to-transparent pointer-events-none rounded-3xl"></div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-3xl border border-slate-700/50 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Share Your Expertise?</h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Join our community of thought leaders and help shape the future of technology. 
              We&apos;re always looking for passionate experts to lead sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30">
                Become a Speaker
              </button>
              <button className="bg-slate-800/60 hover:bg-slate-700/80 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 border border-slate-600 hover:border-slate-500">
                View All Sessions
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2s { animation-delay: 2s; }
        .animation-delay-4s { animation-delay: 4s; }
        .line-clamp-2 { 
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 { 
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default WebinarsTalks;