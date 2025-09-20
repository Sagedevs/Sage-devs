"use client";
import React from 'react';
import { Rocket, Target, Bot, Lightbulb, Code, Database, Smartphone, Globe, Users, Award, Clock, HeadphonesIcon, Zap, Cpu, Brain, ArrowRight, Star } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-blue-600/10 backdrop-blur-sm animate-float-reverse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-blue-400/30 rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 border border-blue-300/15 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-500/5 animate-float-reverse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-1/4 left-1/3 text-blue-400/20 font-mono text-2xl animate-float" style={{animationDelay: '0.5s'}}>{"</>"}</div>
        <div className="absolute bottom-1/3 right-1/4 text-blue-300/15 font-mono text-lg animate-float-reverse" style={{animationDelay: '1.5s'}}>{"{ }"}</div>
        <div className="absolute top-2/3 left-1/5 text-blue-500/25 font-mono text-xl animate-float" style={{animationDelay: '2.5s'}}>{"<AI/>"}</div>
        
        {/* Glowing Particles */}
        <div className="absolute top-1/6 left-2/3 w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-1/5 w-3 h-3 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 border border-blue-500/30 rounded-full bg-blue-950/20 backdrop-blur-sm">
            <Star className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-blue-300 font-medium tracking-wide">OUR JOURNEY</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            THE <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">STORY</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every great innovation starts with a vision. Here's how we transformed 
            <span className="text-blue-400"> ideas into digital reality</span>
          </p>
        </div>

        {/* Story Cards - Floating Layout */}
        <div className="relative max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Main Story */}
            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-10 hover:border-blue-400/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">The Genesis - 2023</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Founded in <span className="text-blue-400 font-semibold">2023</span>, Sage Devs emerged from a simple yet powerful vision: 
                    to bridge the gap between cutting-edge technology and exceptional user experiences.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    What started as passionate web developers crafting WordPress solutions quickly evolved into 
                    something much bigger - a full-service digital agency pushing the boundaries of what's possible.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-10 hover:border-blue-400/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">AI Integration Pioneer</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We saw the future before it arrived. While others were building traditional websites, 
                    we were already integrating <span className="text-blue-400 font-semibold">artificial intelligence</span> 
                    into web experiences, making every interaction smarter and more intuitive.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Floating Tech Stack */}
            <div className="relative">
              <div className="space-y-6">
                {/* Floating Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/60 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 transform hover:scale-105 hover:-rotate-2 transition-all duration-300 animate-float">
                    <Code className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold mb-2">React & Next.js</h4>
                    <p className="text-gray-400 text-sm">Modern frontend mastery</p>
                  </div>
                  
                  <div className="bg-black/60 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 transform hover:scale-105 hover:rotate-2 transition-all duration-300 animate-float-reverse mt-8">
                    <Database className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold mb-2">PHP & Python</h4>
                    <p className="text-gray-400 text-sm">Backend powerhouse</p>
                  </div>
                  
                  <div className="bg-black/60 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                    <Globe className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold mb-2">WordPress</h4>
                    <p className="text-gray-400 text-sm">CMS excellence</p>
                  </div>
                  
                  <div className="bg-black/60 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 animate-float-reverse" style={{animationDelay: '2s'}}>
                    <Smartphone className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold mb-2">Shopify</h4>
                    <p className="text-gray-400 text-sm">E-commerce genius</p>
                  </div>
                </div>
                
                {/* Center AI Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/50 rounded-full p-6 animate-pulse">
                    <Bot className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats - Floating */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            ACHIEVEMENTS <span className="text-blue-400">UNLOCKED</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '2023', label: 'FOUNDED', icon: Target, desc: 'Year of inception' },
              { number: '400+', label: 'PROJECTS', icon: Rocket, desc: 'Successfully delivered' },
              { number: '100%', label: 'SATISFACTION', icon: Award, desc: 'Client happiness rate' },
              { number: '∞', label: 'INNOVATION', icon: Lightbulb, desc: 'Endless possibilities' }
            ].map((stat, index) => (
              <div key={index} className="group relative animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 text-center transform hover:scale-110 hover:border-blue-400 transition-all duration-500">
                  <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-300 font-bold text-sm tracking-widest mb-2">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement - Floating */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative group animate-float">
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-black/60 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12 hover:border-blue-400/50 transition-all duration-500">
              <Zap className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To transform businesses through <span className="text-blue-400 font-semibold">intelligent digital solutions</span> 
                that don't just meet today's needs, but anticipate tomorrow's possibilities.
              </p>
              
              <div className="flex items-center justify-center gap-2 mt-8 text-blue-300">
                <span className="text-sm font-medium">Ready to innovate?</span>
                <ArrowRight className="w-4 h-4 animate-bounce" style={{animationDirection: 'alternate'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default OurStory;