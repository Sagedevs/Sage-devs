"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { ShoppingCart, Brain, Code, TrendingUp, Users, Star, Target, RotateCcw, Handshake, CheckCircle, Zap, Globe, ArrowRight, Play, Monitor } from 'lucide-react';

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  
  const services = [
    { title: "E-commerce Stores", desc: "Converting visitors to sales", icon: ShoppingCart },
    { title: "WordPress Sites", desc: "Scalable business solutions", icon: Monitor },
    { title: "AI Integration", desc: "Smart automation features", icon: Brain },
    { title: "Full-Stack Apps", desc: "Custom web applications", icon: Code }
  ];

  const updateService = useCallback(() => {
    setCurrentService((prev) => (prev + 1) % services.length);
  }, [services.length]);

  useEffect(() => {
    const interval = setInterval(updateService, 3000);
    return () => clearInterval(interval);
  }, [updateService]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-pulse-custom { animation: pulse 3s ease-in-out infinite; }
        .animate-slide-left { animation: slideInLeft 0.8s ease-out; }
        .animate-slide-right { animation: slideInRight 0.8s ease-out; }
        
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glow-effect {
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
        }
      `}</style>

      <section className="relative bg-black text-white overflow-hidden min-h-screen">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          {/* Main Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-black to-slate-900"></div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-custom" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          {/* Animated Network Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Moving Light Beam */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-pulse"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
              
              {/* Left Column - Content */}
              <div className="space-y-8 animate-slide-left">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-6 py-3 glass-card rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-300">Premium Development Agency</span>
                  <Zap className="w-4 h-4 text-yellow-400" />
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    Transform Your
                    <span className="block gradient-text">
                      Digital Vision
                    </span>
                    <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-300">
                      Into Reality
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  We&apos;re an elite 11-member development team crafting high-converting websites, 
                  e-commerce platforms, and intelligent web solutions that drive measurable business growth.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden glow-effect hover:shadow-blue-500/50">
                    <span className="relative z-10 flex items-center justify-center">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  
                  <button className="group px-8 py-4 glass-card hover:bg-white/10 border border-white/20 hover:border-blue-500/50 text-white font-semibold rounded-xl transition-all duration-300">
                    <span className="flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* Service Showcase Card */}
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-blue-300">Our Expertise</h3>
                    <div className="flex space-x-2">
                      {services.map((_, index) => (
                        <div 
                          key={index} 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentService ? 'bg-blue-400 w-6' : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 transition-all duration-500">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      {React.createElement(services[currentService].icon, { 
                        className: "w-6 h-6 text-blue-400" 
                      })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {services[currentService].title}
                      </h4>
                      <p className="text-gray-400">
                        {services[currentService].desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: 'Projects', value: '400+', icon: TrendingUp },
                    { label: 'Success Rate', value: '98%', icon: Target },
                    { label: 'Team Size', value: '11', icon: Users }
                  ].map((stat, index) => (
                    <div key={index} className="text-center glass-card rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Floating Elements */}
              <div className="relative h-screen flex items-center justify-center animate-slide-right">
                {/* Central Core Element */}
                <div className="relative">
                  {/* Main Central Circle */}
                  <div className="relative w-48 h-48 glass-card rounded-full flex items-center justify-center glow-effect animate-float-slow">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/40 to-purple-600/30 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">11</div>
                        <div className="text-sm text-blue-200 font-semibold">Expert Team</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Achievement Cards */}
                  {/* Top Left */}
                  <div 
                    className="absolute -top-20 -left-32 animate-float"
                    style={{animationDelay: '0s'}}
                  >
                    <div className="glass-card rounded-2xl p-4 glow-effect hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">300%</div>
                          <div className="text-sm text-green-300">ROI Growth</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Right */}
                  <div 
                    className="absolute -top-16 -right-36 animate-float"
                    style={{animationDelay: '1s'}}
                  >
                    <div className="glass-card rounded-2xl p-4 glow-effect hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">98%</div>
                          <div className="text-sm text-blue-300">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Left Side */}
                  <div 
                    className="absolute top-16 -left-40 animate-float"
                    style={{animationDelay: '2s'}}
                  >
                    <div className="glass-card rounded-2xl p-4 glow-effect hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                          <Brain className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">AI</div>
                          <div className="text-sm text-purple-300">Powered</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div 
                    className="absolute top-20 -right-44 animate-float"
                    style={{animationDelay: '3s'}}
                  >
                    <div className="glass-card rounded-2xl p-4 glow-effect hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">24/7</div>
                          <div className="text-sm text-orange-300">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left */}
                  <div 
                    className="absolute -bottom-16 -left-36 animate-float"
                    style={{animationDelay: '4s'}}
                  >
                    <div className="glass-card rounded-2xl p-4 glow-effect hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                          <Star className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">4.9</div>
                          <div className="text-sm text-yellow-300">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right */}
                  <div 
                    className="absolute -bottom-12 -right-40 animate-float"
                    style={{animationDelay: '5s'}}
                  >
                    <div className="glass-card rounded-2xl p-4 glow-effect hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                          <Globe className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">400+</div>
                          <div className="text-sm text-cyan-300">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Small Floating Elements */}
                  <div 
                    className="absolute -top-8 left-20 animate-float"
                    style={{animationDelay: '6s'}}
                  >
                    <div className="glass-card rounded-xl p-3 glow-effect">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">99.9%</div>
                        <div className="text-xs text-gray-300">Uptime</div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="absolute bottom-6 right-16 animate-float"
                    style={{animationDelay: '7s'}}
                  >
                    <div className="glass-card rounded-xl p-3 glow-effect">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">&lt;2s</div>
                        <div className="text-xs text-gray-300">Load Time</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 200 150 Q 350 200 500 150"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M 150 350 Q 300 300 450 350"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{animationDelay: '2s'}}
                  />
                </svg>

                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-ping`}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Key Benefits */}
        <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Leading Businesses Choose Us</h2>
              <p className="text-xl text-gray-400">We deliver results that matter to your bottom line</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Complete Solution',
                  description: 'From strategy to deployment and optimization - we handle everything.',
                  icon: RotateCcw,
                  highlight: 'End-to-end service'
                },
                {
                  title: 'Elite Team',
                  description: '11 specialized experts dedicated to your project success.',
                  icon: Handshake,
                  highlight: 'Dedicated experts'
                },
                {
                  title: 'Guaranteed Results',
                  description: 'On-time delivery with measurable business impact.',
                  icon: CheckCircle,
                  highlight: '98% success rate'
                }
              ].map((benefit, index) => (
                <div key={index} className="group glass-card rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-blue-900/50 border border-blue-500/30 rounded-full text-sm text-blue-300 mb-4">
                    {benefit.highlight}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;