"use client";
import React from 'react';
import { Users, Heart } from 'lucide-react';

const values = [
  {
    title: 'Innovation',
    subtitle: 'Pioneering Tomorrow',
    description: 'We don\'t just adapt to change—we create it. Our innovation labs and R&D initiatives push the boundaries of what\'s possible, turning visionary ideas into reality through cutting-edge research and fearless experimentation.',
    icon: Users,
    stats: '50+ Patents Filed',
    color: 'blue-400'
  },
  {
    title: 'Collaboration',
    subtitle: 'United We Excel',
    description: 'Every breakthrough begins with connection. Our cross-functional teams leverage diverse perspectives and collective intelligence to solve complex challenges that individual brilliance alone cannot conquer.',
    icon: Users,
    stats: '15 Countries United',
    color: 'blue-500'
  },
  {
    title: 'Excellence',
    subtitle: 'Perfection in Motion',
    description: 'Excellence isn\'t a destination—it\'s our journey. Through rigorous quality standards, continuous improvement methodologies, and an obsession with detail, we deliver experiences that exceed expectations.',
    icon: Users,
    stats: '99.9% Quality Score',
    color: 'blue-600'
  },
  {
    title: 'Integrity',
    subtitle: 'Unshakeable Foundation',
    description: 'Trust is earned through consistent action. Our ethical framework guides every decision, creating lasting relationships built on transparency, accountability, and unwavering moral courage.',
    icon: Users,
    stats: '100% Ethical Compliance',
    color: 'blue-700'
  }
];

const perks = [
  { name: 'Flexible Hours', description: 'Work-life harmony', icon: Users, category: 'Lifestyle' },
  { name: 'Global Remote', description: 'Work from anywhere', icon: Users, category: 'Freedom' },
  { name: 'Learning Fund', description: '$5,000 annual budget', icon: Users, category: 'Growth' },
  { name: 'Team Retreats', description: 'Quarterly adventures', icon: Users, category: 'Culture' },
  { name: 'Premium Health', description: 'Full family coverage', icon: Heart, category: 'Wellness' },
  { name: 'Innovation Time', description: '30% passion projects', icon: Users, category: 'Innovation' },
  { name: 'Career Coaching', description: 'Personal mentorship', icon: Users, category: 'Growth' },
  { name: 'Tech Budget', description: 'Latest equipment', icon: Users, category: 'Tools' },
  { name: 'Stock Options', description: 'Equity participation', icon: Users, category: 'Rewards' },
  { name: 'Sabbaticals', description: '3 months every 3 years', icon: Users, category: 'Lifestyle' }
];

const achievements = [
  { number: '99.2%', label: 'Employee Satisfaction', description: 'Highest in industry', trend: '+5.2%' },
  { number: '4.9/5', label: 'Company Rating', description: 'Glassdoor & Indeed', trend: 'Top 1%' },
  { number: '2.1%', label: 'Turnover Rate', description: '10x below industry avg', trend: '-3.4%' },
  { number: '120+', label: 'Team Members', description: 'Across 18 countries', trend: '+45%' },
  { number: '15', label: 'Awards Won', description: 'Best workplace 2024', trend: 'New' },
  { number: '$2.5M', label: 'Learning Investment', description: 'Annual development', trend: '+120%' }
];

const testimonials = [
  {
    quote: "This isn't just a workplace—it's where impossible becomes inevitable. The culture of innovation here has transformed not just my career, but my entire perspective on what's possible.",
    author: "Sarah Chen",
    role: "Lead Innovation Engineer",
    years: "3 years"
  },
  {
    quote: "I've never experienced such genuine care for employee growth. The mentorship, resources, and opportunities here are unmatched. It feels like family.",
    author: "Marcus Rodriguez",
    role: "Senior Product Designer",
    years: "2 years"
  }
];

const Culture = () => {
  return (
    <section className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      {/* Darker background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div>
            <div className="relative inline-block mb-8 sm:mb-10 md:mb-12">
              <div className="relative">
                <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 rounded-full border-2 sm:border-3 md:border-4 border-white/20 shadow-2xl shadow-blue-600/30">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter">
                <span className="block text-gray-200 opacity-90">Our</span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 bg-clip-text text-transparent">
                    Culture
                  </span>
                </span>
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 font-light px-4">
              Where <span className="font-semibold text-gray-100">extraordinary minds</span> converge to{' '}
              <span className="font-semibold text-gray-100">reshape tomorrow</span>, building not just products,{' '}
              <span className="font-semibold text-gray-100">but the future itself</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12 text-gray-300 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-100">2023</div>
                <div className="text-xs text-gray-400">Founded</div>
              </div>
              <div className="hidden sm:block w-px h-8 md:h-10 bg-gradient-to-b from-transparent via-blue-600 to-transparent"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-100">120+</div>
                <div className="text-xs text-gray-400">Team Members</div>
              </div>
              <div className="hidden sm:block w-px h-6 md:h-8 bg-gradient-to-b from-transparent via-blue-600 to-transparent"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-100">18</div>
                <div className="text-xs text-gray-400">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-100 text-center mb-8 sm:mb-10 md:mb-12">
            Our <span className="text-blue-400">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {values.map((value, index) => {
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-black/40 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10"></div>
                  <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                      <div className="relative">
                        <div className={`relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-${value.color} via-blue-700 to-blue-900 rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl shadow-${value.color}/20`}>
                          <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                        </div>
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-3">
                        <div className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                          {value.stats}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-100">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-blue-400">
                        {value.subtitle}
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${value.color} to-blue-500`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="max-w-7xl mx-auto mb-20 sm:mb-24 md:mb-32">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-3 sm:mb-4">
              By the <span className="text-blue-400">Numbers</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300">Measurable excellence in everything we do</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="relative bg-gradient-to-br from-white/[0.02] to-black/40 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden hover:border-white/20 transition-all duration-500">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="text-xl sm:text-2xl font-bold text-gray-100">
                        {achievement.number}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-gray-300">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {achievement.description}
                      </div>
                      <div className="absolute -top-1 sm:-top-2 right-2 sm:right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full">
                        {achievement.trend}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Life at Company Section */}
        <div className="relative max-w-7xl mx-auto mb-20 sm:mb-24 md:mb-32">
          <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-14 md:mb-16 space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="relative">
                  <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 rounded-full border-2 sm:border-4 border-white/20 shadow-2xl shadow-blue-600/30">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-3 sm:mb-4">
                    Life at <span className="text-blue-400">Our Company</span>
                  </h3>
                  <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-white to-blue-600 mx-auto sm:mx-0 rounded-full"></div>
                </div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed text-center max-w-6xl mx-auto mb-12 sm:mb-14 md:mb-16 px-2">
                We don&apos;t just offer jobs—we provide launchpads for extraordinary careers. Every benefit, every opportunity, 
                every moment is designed to unlock human potential and fuel the journey toward greatness.
              </p>
              
              {/* Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16">
                {perks.map((perk, i) => {
                  const IconComponent = perk.icon;
                  return (
                    <div 
                      key={i} 
                      className="group relative bg-gradient-to-br from-white/[0.02] to-black/40 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-white/20 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-700 overflow-hidden"
                    >
                      {/* Category badge */}
                      <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-3 py-1">
                        <span className="text-[10px] sm:text-xs font-bold text-blue-400 group-hover:text-gray-100 transition-colors duration-500">
                          {perk.category}
                        </span>
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-700/0 group-hover:from-blue-500/10 group-hover:to-blue-700/20 rounded-xl sm:rounded-2xl transition-all duration-700"></div>
                      
                      <div className="relative space-y-3 sm:space-y-4 pt-2">
                        <div className="flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-700"></div>
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-700">
                              <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center space-y-1 sm:space-y-2">
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-200">
                            {perk.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {perk.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Employee Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-white/[0.02] to-black/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm sm:text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-100 mb-0.5">{testimonial.author}</h3>
                          <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role} • {testimonial.years}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 md:h-48 bg-gradient-to-t from-black via-gray-950/80 to-transparent"></div>
    </section>
  );
};

export default Culture;