"use client";
import React from 'react';
import { Rocket, Star, Lightbulb, Trophy } from 'lucide-react';

const positions = [
  {
    title: 'Creative Director',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    description: 'Lead creative vision and strategy for client campaigns. Drive innovation in digital storytelling and brand experiences across multiple platforms.',
    requirements: ['3-4 years creative leadership', 'Portfolio of successful campaigns', 'Team collaboration skills', 'Adobe Creative Suite mastery'],
    skills: ['Brand Strategy', 'Visual Design', 'Campaign Development', 'Client Presentation'],
    benefits: ['Health & Dental', 'Flexible Hours', 'Creative Budget', 'Conference Attendance'],
    salary: '$75K - $95K'
  },
  {
    title: 'Brand Strategist',
    type: 'Full-time',
    location: 'New York, NY',
    description: 'Shape brand narratives and positioning strategies. Work with diverse clients to define market presence and growth opportunities.',
    requirements: ['3-4 years brand experience', 'Strategic thinking skills', 'Market research expertise', 'Presentation abilities'],
    skills: ['Market Analysis', 'Brand Positioning', 'Competitive Research', 'Strategic Planning'],
    benefits: ['Remote Options', 'Learning Budget', 'Stock Options', 'Gym Membership'],
    salary: '$65K - $85K'
  },
  {
    title: 'UX/UI Designer',
    type: 'Full-time',
    location: 'Remote',
    description: 'Design digital experiences that convert and engage. Create user-centered designs and scalable design systems for web and mobile.',
    requirements: ['3-4 years UX/UI experience', 'Design systems knowledge', 'User research skills', 'Prototyping expertise'],
    skills: ['Figma/Sketch', 'User Research', 'Wireframing', 'Design Systems'],
    benefits: ['Equipment Budget', 'Flexible PTO', 'Design Tools', 'Team Retreats'],
    salary: '$60K - $80K'
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Contract',
    location: 'Los Angeles, CA',
    description: 'Execute performance marketing campaigns across digital channels. Optimize ad spend and drive measurable results for client accounts.',
    requirements: ['2-4 years digital marketing', 'Google Ads & Meta certified', 'Analytics proficiency', 'Campaign optimization skills'],
    skills: ['Paid Advertising', 'Analytics', 'A/B Testing', 'Conversion Optimization'],
    benefits: ['Performance Bonuses', 'Certification Support', 'Flexible Schedule', 'Client Variety'],
    salary: '$50K - $70K'
  }
];

const Careers = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-black"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-600/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-blue-400/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/20 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '6s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-20 lg:mb-32">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30 mb-6 animate-fade-in">
                  We're Hiring
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Join the 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
                  Elite Team
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Build extraordinary brands with industry leaders. Shape the future of digital experiences 
                and work on campaigns that move culture forward.
              </p>
            </div>

            {/* Positions Grid */}
            <div className="grid gap-6 lg:gap-8">
              {positions.map((position, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1">
                    
                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs font-medium rounded-full">
                            {position.location}
                          </span>
                          <span className="px-3 py-1 bg-green-600/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
                            {position.salary}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {position.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {position.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-3 gap-6 mt-6">
                          <div>
                            <h5 className="text-blue-300 font-semibold mb-3 text-sm uppercase tracking-wide">Requirements</h5>
                            <ul className="space-y-2">
                              {position.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-green-300 font-semibold mb-3 text-sm uppercase tracking-wide">Key Skills</h5>
                            <ul className="space-y-2">
                              {position.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-purple-300 font-semibold mb-3 text-sm uppercase tracking-wide">Benefits</h5>
                            <ul className="space-y-2">
                              {position.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                          Apply Now
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 lg:mt-32 text-center">
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                  Don't See Your Perfect Role?
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  We're always seeking exceptional talent. Send us your portfolio and let's explore 
                  how you can contribute to our mission of creating extraordinary brand experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    Send Portfolio
                  </button>
                  <button className="px-10 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                    Contact Talent Team
                  </button>
                </div>
              </div>
            </div>

            {/* Company Values */}
            <div className="mt-20 lg:mt-32">
              <h4 className="text-center text-2xl lg:text-3xl font-bold text-white mb-12">Why Choose Us?</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Rocket, title: 'Innovation First', desc: 'Work on cutting-edge projects that push boundaries' },
                  { icon: Star, title: 'Elite Clients', desc: 'Collaborate with Fortune 500 companies and startups' },
                  { icon: Lightbulb, title: 'Creative Freedom', desc: 'Your ideas shape the future of digital experiences' },
                  { icon: Trophy, title: 'Award-Winning', desc: 'Join a team recognized for excellence globally' }
                ].map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                      <h5 className="text-white font-bold mb-2">{value.title}</h5>
                      <p className="text-gray-400 text-sm">{value.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Careers;