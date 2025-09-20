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
  // State variables removed as they were unused
  // Can be added back when needed for future features

  return (
    <section className="relative min-h-screen py-24 bg-black px-[110px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="max-w-6xl mx-auto text-center mb-32">
          <div>
            <div className="relative inline-block mb-12">
              <div className="relative">
                <div className="relative flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-full border-4 border-white/30 shadow-2xl shadow-blue-500/50">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-6 mb-12">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
                <span className="block text-white opacity-90">Our</span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Culture
                  </span>
                </span>
              </h2>
            </div>
            <p className="text-2xl text-blue-100 leading-relaxed max-w-5xl mx-auto mb-12 font-light">
              Where <span className="font-semibold text-white">extraordinary minds</span> converge to{' '}
              <span className="font-semibold text-white">reshape tomorrow</span>, building not just products,{' '}
              <span className="font-semibold text-white">but the future itself</span>.
            </p>
            <div className="flex items-center justify-center space-x-12 text-blue-200 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2023</div>
                <div className="text-xs text-blue-300">Founded</div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">120+</div>
                <div className="text-xs text-blue-300">Team Members</div>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">18</div>
                <div className="text-xs">Countries</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Our <span className="text-blue-300">Core Values</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-10">
            {values.map((value, index) => {
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-black/20 rounded-3xl backdrop-blur-xl border border-white/20"></div>
                  <div className="relative p-12">
                    <div className="flex items-start justify-between mb-8">
                      <div className="relative">
                        <div className={`relative flex items-center justify-center w-24 h-24 bg-gradient-to-br from-${value.color} via-blue-600 to-blue-800 rounded-2xl border-2 border-white/30 shadow-2xl shadow-${value.color}/30`}>
                          <Users className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            {value.stats}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">
                        {value.title}
                      </h3>
                      <p className="text-base font-semibold text-blue-300">
                        {value.subtitle}
                      </p>
                      <p className="text-blue-200 text-base leading-relaxed">
                        {value.description.replace(/'/g, "\\'")}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-3xl overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${value.color} to-blue-400`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-8xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-white mb-4">
              By the <span className="text-blue-300">Numbers</span>
            </h3>
            <p className="text-lg text-blue-200">Measurable excellence in everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-2xl p-6 overflow-hidden">
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-white">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-bold text-blue-200">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-blue-300">
                        {achievement.description}
                      </div>
                      <div className="absolute -top-2 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {achievement.trend}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-8xl mx-auto mb-32">
          <div className="relative bg-gradient-to-br from-black/50 via-black/30 to-black/50 backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden">
            <div className="relative z-10 p-8 md:p-16">
              <div className="flex items-center justify-center mb-16">
                <div className="relative mr-8">
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-full border-4 border-white/30 shadow-2xl shadow-blue-500/50">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-6xl font-bold text-white mb-4">
                    Life at <span className="text-blue-300">Our Company</span>
                  </h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-white to-blue-500 mx-auto rounded-full"></div>
                </div>
              </div>
              <p className="text-2xl text-blue-100 leading-relaxed text-center max-w-6xl mx-auto mb-16">
                We don&apos;t just offer jobs—we provide launchpads for extraordinary careers. Every benefit, every opportunity, 
                every moment is designed to unlock human potential and fuel the journey toward greatness.
              </p>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {perks.map((perk, i) => {
                  const IconComponent = perk.icon;
                  return (
                    <div 
                      key={i} 
                      className="group relative bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-700 overflow-hidden"
                    >
                      {/* Category badge */}
                      <div className="absolute -top-3 left-4 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                        <span className="text-xs font-bold text-blue-300 group-hover:text-white transition-colors duration-500">
                          {perk.category}
                        </span>
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/30 rounded-2xl transition-all duration-700"></div>
                      
                      <div className="relative space-y-4">
                        <div className="flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl group-hover:bg-white/40 transition-all duration-700"></div>
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-700">
                              <IconComponent className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center space-y-2">
                          <h4 className="text-lg font-bold text-blue-100">
                            {perk.name}
                          </h4>
                          <p className="text-sm text-blue-300">
                            {perk.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Employee Testimonials */}
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-10">
                    
                    {/* Quote icon */}
                    
                    <div className="space-y-6">
                      <p className="text-lg text-blue-100 leading-relaxed italic">
                        &quot;{testimonial.quote.replace(/'/g, "\\'")}&quot;
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-0.5">{testimonial.author}</h3>
                          <p className="text-blue-300 text-xs">{testimonial.role} • {testimonial.years}</p>
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

      {/* Ultra-sophisticated bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-blue-950/60 to-transparent"></div>
    </section>
  );
};

export default Culture;