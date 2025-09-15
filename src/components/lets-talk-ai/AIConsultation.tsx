"use client";
import React, { useState } from 'react';

const AIConsultation = () => {
  const [activeNode, setActiveNode] = useState(0);

  const services = [
    {
      title: "AI Strategy & Planning",
      subtitle: "Business Intelligence Solutions",
      description: "Develop comprehensive AI roadmaps tailored to your business goals and industry requirements",
      paths: ["Market Analysis", "ROI Planning", "Tech Assessment", "Risk Analysis", "Compliance Review", "Resource Planning"],
      color: "blue"
    },
    {
      title: "Implementation Support",
      subtitle: "End-to-End AI Deployment", 
      description: "Guide your team through seamless AI integration with proven frameworks and best practices",
      paths: ["System Integration", "Team Training", "Quality Assurance", "Data Migration", "Security Setup", "Performance Testing"],
      color: "indigo"
    },
    {
      title: "Performance Optimization",
      subtitle: "AI System Enhancement",
      description: "Maximize your AI investments with continuous monitoring, optimization, and scaling strategies",
      paths: ["Performance Metrics", "Process Automation", "Scalability Planning", "Cost Optimization", "Model Tuning", "Infrastructure Scaling"],
      color: "cyan"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 text-white overflow-hidden">
      {/* Minimal Static Background */}
      <div className="absolute inset-0">
        {/* Simple Static Grid */}
        <div 
          className="absolute inset-0 opacity-2"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section with Animated Title */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-4 bg-blue-950/30 backdrop-blur border border-blue-400/20 rounded-full px-8 py-4">
              <div className="relative">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-blue-600 rounded-full" />
              </div>
              <span className="text-blue-300 font-medium text-lg">AI Intelligence Network</span>
              <div className="flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4">
              The Future
            </span>
            <span className="block bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              is Intelligent
            </span>
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto mb-12">
            Step into tomorrow&apos;s business landscape with AI consultation that doesn&apos;t just advise&mdash;it transforms reality.
          </p>
        </div>

        {/* Interactive Service Flows */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-1000 hover:scale-105 ${
                  activeNode === index ? 'scale-105' : 'scale-100'
                }`}
                onClick={() => setActiveNode(index)}
                onMouseEnter={() => setActiveNode(index)}
              >
                {/* Advanced Service Node Visualization */}
                <div className="relative h-[500px] mb-8">
                  <div className={`absolute inset-0 rounded-3xl backdrop-blur border transition-all duration-1000 overflow-hidden ${
                    activeNode === index ? 
                      'bg-gradient-to-br from-slate-900/90 to-blue-950/90 border-blue-400/30' : 
                      'bg-gradient-to-br from-slate-900/70 to-blue-950/70 border-slate-700/30'
                  }`}>
                    {/* Inner energy field */}
                    <div className={`absolute inset-4 rounded-2xl transition-all duration-1000 ${
                      activeNode === index ? 
                        'bg-gradient-to-br from-blue-500/5 to-indigo-500/5' : 
                        'bg-slate-900/10'
                    }`} />
                  </div>
                  
                  {/* Multi-layer Central Core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Outer rotating ring */}
                    <div className={`w-32 h-32 rounded-full border-2 border-dashed transition-all duration-1000 animate-spin ${
                      activeNode === index ? 'border-blue-400/40' : 'border-white/10'
                    }`} style={{ animationDuration: '20s' }} />
                    
                    {/* Middle pulse ring */}
                    <div className={`absolute top-2 left-2 w-28 h-28 rounded-full border-4 transition-all duration-1000 ${
                      activeNode === index ? 
                        'border-blue-400/60 animate-pulse bg-blue-500/10' : 
                        'border-white/20 bg-white/5'
                    }`} />
                    
                    {/* Core nucleus */}
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-1000 ${
                      activeNode === index ? 
                        'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border-blue-300/60 scale-110' : 
                        'bg-white/5 border-white/20'
                    }`}>
                      <div className={`w-8 h-8 rounded-full transition-all duration-500 ${
                        activeNode === index ? 
                          'bg-white animate-pulse shadow-lg shadow-blue-400/30' : 
                          'bg-white/40'
                      }`} />
                    </div>
                  </div>

                  {/* Rotating Orbital Container */}
                  <div 
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full transition-all duration-1000 ${
                      activeNode === index ? 'animate-spin' : ''
                    }`}
                    style={{ 
                      animationDuration: activeNode === index ? '15s' : undefined,
                      animationTimingFunction: 'linear'
                    }}
                  >
                    {/* Enhanced Orbiting Elements - All 6 paths */}
                    {service.paths.map((path, pathIndex) => {
                      // Now properly distribute 6 elements (60 degrees apart)
                      const angle = pathIndex * 60; // 0°, 60°, 120°, 180°, 240°, 300°
                      const radius = 130; // Increased radius to prevent overlapping
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      
                      return (
                        <div
                          key={pathIndex}
                          className="absolute transition-all duration-700"
                          style={{
                            top: `calc(50% + ${y}px)`,
                            left: `calc(50% + ${x}px)`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          {/* Orbital element */}
                          <div className={`w-20 h-20 rounded-full border-2 backdrop-blur flex items-center justify-center text-xs text-center leading-tight font-medium transition-all duration-500 ${
                            activeNode === index ? 
                              'border-blue-400/80 bg-blue-950/90 text-blue-200 shadow-lg shadow-blue-500/30' : 
                              'border-white/30 bg-slate-800/70 text-white/60'
                          }`}>
                            <span 
                              className="px-1 transform transition-transform duration-1000"
                              style={{ 
                                transform: activeNode === index ? 'rotate(-360deg)' : 'rotate(0deg)',
                                animationDuration: '15s'
                              }}
                            >
                              {path}
                            </span>
                          </div>
                          
                          {/* Energy trail */}
                          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            activeNode === index ? 'animate-ping bg-blue-400/20' : ''
                          }`} style={{ animationDelay: `${pathIndex * 0.3}s` }} />
                          
                          {/* Connection Line to Center */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div 
                              className={`absolute border-t transition-all duration-500 ${
                                activeNode === index ? 
                                  'border-blue-400/60 border-t-2' : 
                                  'border-white/20 border-t'
                              }`}
                              style={{
                                width: `${radius}px`,
                                transformOrigin: 'left center',
                                transform: `rotate(${angle + 180}deg)`,
                                left: '0'
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Floating data particles around active service */}
                  {activeNode === index && Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full animate-ping opacity-60"
                      style={{
                        top: `${30 + Math.sin((i * 30) * 0.02) * 40}%`,
                        left: `${30 + Math.cos((i * 30) * 0.02) * 40}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${2 + i * 0.2}s`
                      }}
                    />
                  ))}
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-blue-300 font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 ${
                  activeNode === index ? 'opacity-100' : 'group-hover:opacity-100'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive CTA */}
        <div className="text-center">
          <div className="relative inline-block">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-white/10 transform rotate-45 translate-x-full group-hover:-translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-3">
                Initiate AI Transformation
                <div className="w-6 h-6 bg-white rounded-full animate-pulse" />
              </span>
            </button>
            
            {/* Surrounding Animation */}
            <div className="absolute -inset-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                  style={{
                    top: `${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                    left: `${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                    animationDelay: `${i * 0.2}s`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
            </div>
          </div>
          
          <p className="text-slate-400 mt-8">
            Join the intelligence revolution • Experience the future today
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default AIConsultation;