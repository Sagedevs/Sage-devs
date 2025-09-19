"use client";
import React, { useState, useEffect } from 'react';

const CaseStudyCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    console.log('CaseStudyCTA component mounted');
    return () => console.log('CaseStudyCTA component unmounted');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We\'ll get back to you soon.');
  };

  return (
    <section className="relative py-16 lg:py-24 xl:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-gray-900">
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-purple-900/20 to-indigo-900/30 animate-pulse" 
             style={{ animationDuration: '6s' }} />
        
        {/* Dynamic floating orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-xl opacity-20 animate-bounce"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${15 + Math.floor(i / 4) * 35}%`,
                width: `${60 + Math.random() * 120}px`,
                height: `${60 + Math.random() * 120}px`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
                }40, transparent)`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px',
                 animation: 'drift 20s linear infinite'
               }}>
          </div>
        </div>
        
        {/* Glowing particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `${
                  i % 4 === 0 ? '#3b82f6' : 
                  i % 4 === 1 ? '#8b5cf6' : 
                  i % 4 === 2 ? '#06b6d4' : '#10b981'
                }`,
                boxShadow: `0 0 ${6 + Math.random() * 10}px currentColor`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Rotating geometric shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-blue-500/20 rounded-full animate-spin opacity-30" 
             style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/2 right-32 w-32 h-32 border border-purple-500/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-cyan-500/30 rounded-lg animate-bounce" 
             style={{ animationDuration: '4s' }} />
        
        {/* Diagonal light streaks */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 rotate-12 animate-pulse" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-600/5 via-transparent to-indigo-600/5 -rotate-12 animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Add CSS for grid drift animation */}
      <style jsx>{`
        @keyframes drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-8 sm:px-12 lg:px-20 xl:px-32 2xl:px-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                <span className="block text-white">Transform Your</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text animate-pulse">
                  Digital Vision
                </span>
                <span className="block text-white">Into Reality</span>
              </h2>
              
              <div className="relative">
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
                  Join the ranks of industry leaders who&apos;ve transformed their businesses with our cutting-edge solutions.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-60" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm opacity-60" />
                </div>
                <span className="text-slate-200 text-lg font-medium">Enterprise-grade architecture & scalability</span>
              </div>
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" 
                       style={{ animationDelay: '0.7s' }} />
                  <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-60" />
                </div>
                <span className="text-slate-200 text-lg font-medium">AI-powered optimization & analytics</span>
              </div>
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse" 
                       style={{ animationDelay: '1.4s' }} />
                  <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur-sm opacity-60" />
                </div>
                <span className="text-slate-200 text-lg font-medium">24/7 dedicated support & monitoring</span>
              </div>
            </div>
            
            <div className="pt-8">
              <div className="inline-flex items-center space-x-3 group">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-bold text-lg">
                  Start Your Transformation
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-white/20">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text">Let's Build Something Amazing</h3>
                <p className="text-slate-300 text-lg leading-relaxed">Ready to join the digital elite? Share your vision and we'll craft a strategy that transforms your business landscape.</p>
              </div>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-200 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project goals, timeline, and requirements..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start Your Project
                </button>
                
                <div className="text-center">
                  <p className="text-sm text-slate-400">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-40 animate-bounce" 
                 style={{ animationDuration: '3s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCTA;