"use client";
import React, { useState, useEffect, MouseEvent } from 'react';
import { Lightbulb, Users, Award, Shield, Clock, Home, BookOpen, Calendar, Heart, Sparkles, Target, Zap, ChevronRight, Star, Trophy, Rocket, Eye } from 'lucide-react';

const values = [
  {
    title: 'Innovation',
    subtitle: 'Pioneering Tomorrow',
    description: 'We don\'t just adapt to change—we create it. Our innovation labs and R&D initiatives push the boundaries of what\'s possible, turning visionary ideas into reality through cutting-edge research and fearless experimentation.',
    icon: Lightbulb,
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
    icon: Award,
    stats: '99.9% Quality Score',
    color: 'blue-600'
  },
  {
    title: 'Integrity',
    subtitle: 'Unshakeable Foundation',
    description: 'Trust is earned through consistent action. Our ethical framework guides every decision, creating lasting relationships built on transparency, accountability, and unwavering moral courage.',
    icon: Shield,
    stats: '100% Ethical Compliance',
    color: 'blue-700'
  }
];

const perks = [
  { name: 'Flexible Hours', description: 'Work-life harmony', icon: Clock, category: 'Lifestyle' },
  { name: 'Global Remote', description: 'Work from anywhere', icon: Home, category: 'Freedom' },
  { name: 'Learning Fund', description: '$5,000 annual budget', icon: BookOpen, category: 'Growth' },
  { name: 'Team Retreats', description: 'Quarterly adventures', icon: Calendar, category: 'Culture' },
  { name: 'Premium Health', description: 'Full family coverage', icon: Heart, category: 'Wellness' },
  { name: 'Innovation Time', description: '30% passion projects', icon: Sparkles, category: 'Innovation' },
  { name: 'Career Coaching', description: 'Personal mentorship', icon: Target, category: 'Growth' },
  { name: 'Tech Budget', description: 'Latest equipment', icon: Zap, category: 'Tools' },
  { name: 'Stock Options', description: 'Equity participation', icon: Trophy, category: 'Rewards' },
  { name: 'Sabbaticals', description: '3 months every 3 years', icon: Rocket, category: 'Lifestyle' }
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
  const [activeValue, setActiveValue] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100
    });
  };

  return (
    <section 
      className="relative min-h-screen py-32 overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Ultra-sophisticated animated background */}
      <div className="absolute inset-0">
        {/* Primary gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-black"></div>
        
        {/* Interactive cursor-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-600/30 via-blue-800/20 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        {/* Dynamic floating orbs with complex animations */}
        <div className="absolute -top-64 -left-64 w-[800px] h-[800px] bg-gradient-conic from-blue-800/20 via-blue-600/30 to-blue-900/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '60s'}}></div>
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-gradient-to-bl from-blue-700/40 to-blue-950/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute -bottom-48 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-blue-500/25 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}}></div>
        
        {/* Prismatic light effects */}
        <div className="absolute top-1/6 right-1/4 w-2 h-32 bg-gradient-to-b from-white/80 via-blue-300/60 to-transparent rotate-45 animate-pulse opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/6 w-1 h-24 bg-gradient-to-t from-blue-400/80 via-white/60 to-transparent rotate-12 animate-pulse opacity-60"></div>
        
        {/* Complex geometric patterns */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.5)_50%,transparent_65%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        {/* Animated particle system */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\' opacity=\'0.4\'/%3E%3C/svg%3E")'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-8">
        {/* Spectacular Header */}
        <div className="max-w-6xl mx-auto text-center mb-32">
          <div className={`transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {/* Floating icon constellation */}
            <div className="relative inline-block mb-12">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl animate-pulse scale-150"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-full border-4 border-white/30 shadow-2xl shadow-blue-500/50 hover:scale-110 transition-all duration-700 group">
                  <Users className="w-16 h-16 text-white group-hover:rotate-12 transition-transform duration-500" />
                  
                  {/* Orbiting mini icons */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center animate-bounce">
                    <Star className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center animate-pulse">
                    <Heart className="w-4 h-4 text-blue-800" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Epic title with advanced typography */}
            <div className="space-y-6 mb-12">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
                <span className="block text-white opacity-90">Our</span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Culture
                  </span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
                </span>
              </h2>
            </div>
            
            <p className="text-2xl text-blue-100 leading-relaxed max-w-5xl mx-auto mb-12 font-light">
              Where <span className="font-semibold text-white">extraordinary minds</span> converge to{' '}
              <span className="font-semibold text-white">reshape tomorrow</span>, building not just products,{' '}
              <span className="font-semibold text-white">but the future itself</span>.
            </p>
            
            {/* Animated statistics bar */}
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

        {/* Revolutionary Values Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Our <span className="text-blue-300">Core Values</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const isActive = activeValue === index;
              
              return (
                <div 
                  key={index}
                  className={`group relative transition-all duration-1000 ${isActive ? 'scale-105' : ''}`}
                  onMouseEnter={() => setActiveValue(index)}
                >
                  {/* Layered background with advanced gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-black/20 rounded-3xl backdrop-blur-xl border border-white/20 transition-all duration-700 group-hover:border-white/40 group-hover:from-white/[0.12] group-hover:to-white/[0.06]"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
                  
                  <div className="relative p-12">
                    {/* Enhanced icon section */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-${value.color}/30 rounded-full blur-2xl group-hover:bg-${value.color}/50 transition-all duration-700 scale-150`}></div>
                        <div className={`relative flex items-center justify-center w-24 h-24 bg-gradient-to-br from-${value.color} via-blue-600 to-blue-800 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 border-2 border-white/30 group-hover:border-white/50 shadow-2xl shadow-${value.color}/30`}>
                          <IconComponent className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        
                        {/* Floating indicator */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                          <ChevronRight className="w-3 h-3 text-blue-600" />
                        </div>
                      </div>
                      
                      {/* Stats badge */}
                      <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-3 hover:bg-white/5 transition-all duration-500 group">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            {value.stats}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-50 transition-colors duration-500">
                        {value.title}
                      </h3>
                      <p className="text-base font-semibold text-blue-300 group-hover:text-blue-200 transition-colors duration-500">
                        {value.subtitle}
                      </p>
                      <p className="text-blue-200 text-base leading-relaxed group-hover:text-blue-50 transition-colors duration-500">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-3xl overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${value.color} to-blue-400 transition-all duration-1000 ${isActive ? 'w-full' : 'w-0'}`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Spectacular Achievement Metrics */}
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
                  <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl group-hover:bg-blue-500/40 transition-all duration-700 scale-110"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-700 overflow-hidden">
                    
                    {/* Trend indicator */}
                    <div className="absolute -top-2 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {achievement.trend}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-500">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-bold text-blue-200 group-hover:text-white transition-colors duration-500">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-blue-300 group-hover:text-blue-100 transition-colors duration-500">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ultimate Life at Company Section */}
        <div className="relative max-w-8xl mx-auto mb-32">
          <div className="relative bg-gradient-to-br from-black/50 via-black/30 to-black/50 backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden">
            {/* Complex background patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-blue-900/40"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.3)_0%,transparent_50%)] "></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-16">
              {/* Section Header */}
              <div className="flex items-center justify-center mb-16">
                <div className="relative mr-8">
                  <div className="absolute inset-0 bg-blue-400/40 rounded-full blur-2xl animate-pulse scale-150"></div>
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-full border-4 border-white/30 shadow-2xl shadow-blue-500/50">
                    <Heart className="w-10 h-10 text-white animate-pulse" />
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
                We don't just offer jobs—we provide launchpads for extraordinary careers. Every benefit, every opportunity, 
                every moment is designed to unlock human potential and fuel the journey toward greatness.
              </p>
              
              {/* Premium Perks Grid */}
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
                          <h4 className="text-lg font-bold text-blue-100 group-hover:text-white transition-colors duration-500">
                            {perk.name}
                          </h4>
                          <p className="text-sm text-blue-300 group-hover:text-blue-100 transition-colors duration-500">
                            {perk.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:bg-white transition-all duration-500 group-hover:scale-150"></div>
                    </div>
                  );
                })}
              </div>
              
              {/* Employee Testimonials */}
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:border-white/40 hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20">
                    
                    {/* Quote icon */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-blue-100 leading-relaxed italic group-hover:text-white transition-colors duration-500">
                        "{testimonial.quote}"
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
      
      {/* Edge lighting effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"></div>
    </section>
  );
};

export default Culture;