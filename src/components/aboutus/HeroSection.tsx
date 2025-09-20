"use client";
import React, { useEffect, useState } from 'react';
import { ShoppingCart, Settings, Brain, Code, TrendingUp, Users, Star, Target, RotateCcw, Handshake, CheckCircle, Zap, Globe, Smartphone, Monitor } from 'lucide-react';

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    { title: "E-commerce Stores", desc: "Converting visitors to sales" },
    { title: "WordPress Sites", desc: "Scalable business solutions" },
    { title: "AI Integration", desc: "Smart automation features" },
    { title: "Full-Stack Apps", desc: "Custom web applications" }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-blue-800/20"></div>
        
        {/* Dynamic Network Connections */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <g>
              <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse delay-1000">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="1s" />
              </line>
              <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse delay-2000">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="2s" />
              </line>
              <circle cx="10%" cy="20%" r="4" fill="#3b82f6" opacity="0.6" className="animate-pulse" />
              <circle cx="30%" cy="40%" r="3" fill="#60a5fa" opacity="0.8" className="animate-pulse delay-500" />
              <circle cx="70%" cy="30%" r="4" fill="#3b82f6" opacity="0.6" className="animate-pulse delay-1000" />
              <circle cx="90%" cy="60%" r="3" fill="#60a5fa" opacity="0.8" className="animate-pulse delay-1500" />
              <circle cx="20%" cy="70%" r="3" fill="#60a5fa" opacity="0.8" className="animate-pulse delay-2000" />
              <circle cx="50%" cy="80%" r="4" fill="#3b82f6" opacity="0.6" className="animate-pulse delay-2500" />
            </g>
          </svg>
        </div>
        
        {/* Floating Data Points */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-8 bg-blue-600/20 rounded-lg backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-xs text-blue-300 animate-pulse">
            98% Success Rate
          </div>
          <div className="absolute top-3/4 right-1/4 w-28 h-8 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-400/30 flex items-center justify-center text-xs text-blue-300 animate-pulse delay-1000">
            11 Team Members
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-8 bg-blue-400/20 rounded-lg backdrop-blur-sm border border-blue-300/30 flex items-center justify-center text-xs text-blue-300 animate-pulse delay-2000">
            4+ Years Exp
          </div>
        </div>
        
        {/* Moving Gradient Orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-3 bg-blue-900/40 border border-blue-500/30 rounded-full text-sm text-blue-300 mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Premium Development Agency
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Transform Your Business
              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text animate-pulse">
                Into Digital Success
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We're an elite 11-member development team specializing in high-converting websites, e-commerce stores, 
              and intelligent web solutions that drive real business growth and maximize your ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 relative overflow-hidden shadow-lg shadow-blue-500/25 text-lg">
                <span className="relative z-10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-500/50 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center text-lg">
                <Globe className="w-6 h-6 mr-3" />
                View Case Studies
              </button>
            </div>
            
            {/* Dynamic Service Showcase */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-300">Our Expertise</h3>
                <div className="flex space-x-2">
                  {services.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentService ? 'bg-blue-400' : 'bg-gray-600'
                    }`}></div>
                  ))}
                </div>
              </div>
              <div className="transition-all duration-500">
                <h4 className="text-xl font-bold text-white mb-2">{services[currentService].title}</h4>
                <p className="text-gray-300">{services[currentService].desc}</p>
              </div>
            </div>
            
            {/* Core Services Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: ShoppingCart, text: 'E-commerce Solutions', metric: '300% avg growth' },
                { icon: Monitor, text: 'Business Websites', metric: '98% uptime' },
                { icon: Brain, text: 'AI Integration', metric: 'Smart automation' },
                { icon: Smartphone, text: 'Mobile-First Design', metric: 'Responsive & fast' }
              ].map((service, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-white text-base mb-2">{service.text}</h4>
                  <p className="text-sm text-gray-400">{service.metric}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Interactive Visual Dashboard */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-900/20 via-blue-800/10 to-blue-700/20 backdrop-blur-sm border border-blue-500/30">
              
              {/* Dashboard Interface */}
              <div className="absolute inset-0 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm text-blue-300">Live Analytics Dashboard</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                
                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <TrendingUp className="w-5 h-5 text-blue-300" />
                      <span className="text-green-400 text-sm">+24%</span>
                    </div>
                    <div className="text-2xl font-bold text-white mt-2">$127K</div>
                    <div className="text-xs text-gray-300">Monthly Revenue</div>
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <Users className="w-5 h-5 text-blue-300" />
                      <span className="text-green-400 text-sm">+18%</span>
                    </div>
                    <div className="text-2xl font-bold text-white mt-2">8.4K</div>
                    <div className="text-xs text-gray-300">Active Users</div>
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Conversion Rate</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[87%] animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Performance Score</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[94%] animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Live Activity Feed */}
                <div className="mt-6">
                  <h4 className="text-sm text-blue-300 mb-3">Live Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      New sale: $2,450 - Premium Package
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                      User signed up from organic search
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                      AI chatbot resolved 15 queries
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/40 animate-bounce">
                <Target className="w-8 h-8 text-blue-300" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Proven Track Record</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Numbers that speak for our commitment to excellence and client success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '150+', label: 'Projects Delivered', icon: TrendingUp, color: 'text-green-400' },
              { number: '11', label: 'Expert Team Members', icon: Users, color: 'text-blue-400' },
              { number: '4+', label: 'Years of Excellence', icon: Star, color: 'text-yellow-400' },
              { number: '98%', label: 'Client Satisfaction', icon: Target, color: 'text-purple-400' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-5xl font-bold ${stat.color} mb-4`}>
                  {stat.number}
                </div>
                <div className="text-base text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Leading Businesses Choose Us</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">We don't just build websites - we create digital experiences that drive growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Complete Solution',
                description: 'From strategy and design to development and ongoing optimization - we handle everything.',
                icon: RotateCcw,
                highlight: 'End-to-end service'
              },
              {
                title: 'Elite Team',
                description: 'Specialized developers, designers, and strategists working exclusively on your project.',
                icon: Handshake,
                highlight: '11 dedicated experts'
              },
              {
                title: 'Guaranteed Results',
                description: 'We deliver on time, on budget, with measurable results that impact your bottom line.',
                icon: CheckCircle,
                highlight: '98% success rate'
              }
            ].map((benefit, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-900/50 border border-blue-500/30 rounded-full text-sm text-blue-300 mb-6">
                    {benefit.highlight}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;