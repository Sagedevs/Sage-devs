"use client";
import React from 'react';
import { ArrowRight, Users, Heart, Zap } from 'lucide-react';

const AboutCTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 opacity-95"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-blue-800/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-tr from-blue-700/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-white/10 transform rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Floating Dots */}
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-blue-400/80 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-20 w-1.5 h-1.5 bg-blue-500/70 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <Heart className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">Join Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Be Part of 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Something Bigger?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Every great story needs passionate people. Whether you&apos;re a client, partner, or future team member, 
            let&apos;s create something extraordinary together.
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Partner with Us */}
          <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Partner with Us</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Join forces with industry leaders. Let's collaborate on projects that push boundaries and create lasting impact.
              </p>
              <button className="inline-flex items-center text-white font-medium group-hover:text-blue-300 transition-colors">
                Start Partnership
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Work with Us */}
          <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-blue-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Work with Us</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Transform your vision into reality. From strategy to execution, we're your dedicated creative partners.
              </p>
              <button className="inline-flex items-center text-white font-medium group-hover:text-blue-300 transition-colors">
                Start Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Join Our Team */}
          <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-blue-950/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Be part of a culture that values creativity, growth, and making a meaningful difference in the world.
              </p>
              <button className="inline-flex items-center text-white font-medium group-hover:text-blue-300 transition-colors">
                View Careers
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let&apos;s Start the Conversation
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Every great partnership begins with a simple hello. What story will we tell together?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-10 py-4 bg-white text-blue-900 hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
                Get In Touch
              </button>
              <button className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 font-medium rounded-xl transition-all duration-300 backdrop-blur-sm">
                Schedule a Call
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-white/20">
              <a 
                href="mailto:hello@agency.com" 
                className="flex items-center text-white hover:text-blue-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">hello@agency.com</span>
              </a>
              
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              
              <a 
                href="tel:+1234567890" 
                className="flex items-center text-white hover:text-blue-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium">+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;