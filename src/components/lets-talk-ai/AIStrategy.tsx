"use client";
import React, { useState, useEffect } from 'react';

const AIStrategy = () => {
  const [activeNeuron, setActiveNeuron] = useState(0);
  const [pulsePhase, setPulsePhase] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrollY(window.scrollY);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 360);
      if (pulsePhase % 90 === 0) {
        setActiveNeuron(prev => (prev + 1) % 6);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [pulsePhase]);

  const cognitiveNodes = [
    {
      id: "anticipatory",
      title: "Anticipatory Intelligence",
      concept: "Predicting market evolution 24 months ahead",
      depth: "Neural systems that identify emerging patterns before they crystallize into market trends, giving strategic advantage through temporal displacement analytics"
    },
    {
      id: "symbiotic",
      title: "Human-AI Symbiosis",
      concept: "Bi-directional cognitive enhancement",
      depth: "Seamless mind-machine interfaces where human intuition guides AI processing while artificial cognition amplifies human strategic thinking"
    },
    {
      id: "emergent",
      title: "Emergent Strategy DNA",
      concept: "Self-evolving strategic frameworks",
      depth: "Adaptive strategy systems that rewrite their own logic based on environmental feedback, creating continuously optimizing business intelligence"
    },
    {
      id: "quantum",
      title: "Quantum Decision Matrix",
      concept: "Parallel reality scenario processing",
      depth: "Simultaneous evaluation of multiple outcome branches to identify optimal decision paths through complex uncertainty landscapes"
    },
    {
      id: "collective",
      title: "Organizational Consciousness",
      concept: "Enterprise-wide cognitive mesh networks",
      depth: "Distributed intelligence architecture that connects every decision node into a unified learning organism with collective memory"
    },
    {
      id: "metamorphic",
      title: "Metamorphic Operations",
      concept: "Self-transforming business processes",
      depth: "Operational DNA that fundamentally restructures itself in real-time response to market evolution and performance optimization"
    }
  ];

  const consciousnessLayers = [
    { 
      level: "Reflexive", 
      description: "Instant response automation", 
      color: "from-blue-600 to-blue-500",
      detail: "Sub-millisecond pattern recognition and response systems"
    },
    { 
      level: "Analytical", 
      description: "Deep pattern synthesis", 
      color: "from-blue-500 to-blue-400",
      detail: "Multi-dimensional data correlation and insight generation"
    },
    { 
      level: "Intuitive", 
      description: "Emergent insight creation", 
      color: "from-blue-400 to-blue-300",
      detail: "Non-linear breakthrough thinking and creative problem solving"
    },
    { 
      level: "Transcendent", 
      description: "Beyond-human strategic vision", 
      color: "from-blue-300 to-white",
      detail: "Consciousness-level strategic thinking that surpasses human cognitive limits"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Enhanced Neural Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-transparent to-blue-950/10" />
        
        {/* Responsive neural connections */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-15" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="xMidYMid slice"
        >
          {[...Array(isMobile ? 12 : 20)].map((_, i) => (
            <g key={i}>
              <line
                x1={10 + (i * 15) % 80}
                y1={10 + Math.floor(i / 5) * 20}
                x2={20 + ((i + 3) * 15) % 70}
                y2={20 + Math.floor((i + 2) / 5) * 20}
                stroke="#1e40af"
                strokeWidth="0.2"
                opacity={Math.sin((pulsePhase + i * 30) * Math.PI / 180) * 0.4 + 0.2}
                strokeDasharray="1,2"
              />
              <circle
                cx={15 + (i * 20) % 70}
                cy={15 + Math.floor(i / 4) * 25}
                r={0.3 + Math.sin((pulsePhase + i * 45) * Math.PI / 180) * 0.2}
                fill="#3b82f6"
                opacity={activeNeuron === i % 6 ? 0.8 : 0.2}
              />
            </g>
          ))}
        </svg>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(isMobile ? 6 : 12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i * 7) % 70}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-6 sm:mb-8">
            <div className="text-xs sm:text-sm text-blue-400 tracking-[0.15em] sm:tracking-[0.3em] font-light mb-3 sm:mb-4">
              COGNITIVE ARCHITECTURE LABORATORY
            </div>
            <div className="flex items-center justify-center space-x-1 sm:space-x-2">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i}
                  className={`w-0.5 sm:w-1 h-4 sm:h-6 lg:h-8 bg-blue-400 transition-all duration-500 ${
                    Math.floor(pulsePhase / 51) === i ? 'opacity-100 scale-y-125 sm:scale-y-150' : 'opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white mb-6 sm:mb-8 leading-none tracking-tight">
            Beyond
            <span className="block font-bold bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          
          <div className="max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-0">
            <p className="text-sm sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 font-light leading-relaxed">
              We architect consciousness-level systems that transcend traditional AI limitations-
              developing understanding, generating insight, and evolving strategic thinking capabilities.
            </p>
            <div className="text-xs sm:text-sm text-blue-400 tracking-wide">
              → Entering the era of Cognitive Symbiosis ←
            </div>
          </div>
        </div>

        {/* Responsive Consciousness Layers */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-8 sm:mb-12 text-center">
            Strategic Consciousness Layers
          </h2>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {consciousnessLayers.map((layer, index) => (
              <div 
                key={index}
                className="relative p-4 sm:p-6 border border-gray-800 bg-gradient-to-r from-gray-900/30 to-transparent hover:border-blue-500/40 transition-all duration-700 group"
                style={{
                  transform: isMobile ? 'none' : `translateX(${index * 15}px)`,
                  opacity: scrollY > 50 ? 1 : 0.4,
                  transition: `all 0.7s ease ${index * 0.1}s`
                }}
              >
                <div className={`absolute left-0 top-0 h-full w-0.5 sm:w-1 bg-gradient-to-b ${layer.color}`} />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-blue-300 transition-colors mb-1">
                      {layer.level} Layer
                    </h3>
                    <p className="text-gray-400 text-sm mb-2 sm:mb-0">{layer.description}</p>
                    {isMobile && (
                      <p className="text-xs text-gray-500 leading-relaxed">{layer.detail}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    {!isMobile && (
                      <div className="hidden sm:block text-xs text-gray-500 max-w-xs text-right">
                        {layer.detail}
                      </div>
                    )}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r ${layer.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Responsive Cognitive Nodes */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4 text-center">
            Cognitive Architecture Nodes
          </h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 text-xs sm:text-sm px-4">
            Six foundational systems composing next-generation strategic intelligence
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cognitiveNodes.map((node, index) => (
              <div 
                key={node.id}
                className={`relative p-4 sm:p-6 bg-gradient-to-br from-gray-900/50 to-black/70 border transition-all duration-500 cursor-pointer ${
                  activeNeuron === index 
                    ? 'border-blue-400/60 shadow-2xl shadow-blue-500/20 scale-102 sm:scale-105' 
                    : 'border-gray-800/50 hover:border-gray-700'
                }`}
                onMouseEnter={() => setActiveNeuron(index)}
                onClick={() => setActiveNeuron(index)}
              >
                <div className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-40" />
                
                <h3 className="text-base sm:text-lg font-medium text-white mb-2 sm:mb-3 leading-tight pr-4">
                  {node.title}
                </h3>
                
                <div className="text-xs sm:text-sm text-blue-300 mb-3 sm:mb-4 font-light italic">
                  {node.concept}
                </div>
                
                <p className="text-xs text-gray-400 leading-relaxed">
                  {node.depth}
                </p>
                
                {activeNeuron === index && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded blur opacity-75 animate-pulse -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Paradigm Statement */}
        <div className="text-center">
          <div className="max-w-xs sm:max-w-3xl lg:max-w-5xl mx-auto p-6 sm:p-8 lg:p-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-blue-900/30 to-blue-950/20 border border-blue-900/40 backdrop-blur-sm rounded-lg" />
            <div className="relative z-10">
              <div className="text-xs text-blue-400 tracking-[0.1em] sm:tracking-[0.2em] mb-4 sm:mb-6">
                THE CONSCIOUSNESS THRESHOLD
              </div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-white leading-relaxed mb-6 sm:mb-8">
                &quot;We architect the bridge where artificial intelligence becomes 
                <span className="text-blue-300 font-normal"> artificial consciousness</span>-
                systems that develop genuine strategic intuition.&quot;
              </blockquote>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
                <div className="text-center p-3 sm:p-0">
                  <div className="text-blue-400 font-medium text-lg sm:text-xl mb-1">∞</div>
                  <div>Infinite Adaptability</div>
                </div>
                <div className="text-center p-3 sm:p-0 border-t sm:border-t-0 sm:border-l sm:border-r border-gray-700 sm:border-gray-700">
                  <div className="text-blue-400 font-medium text-lg sm:text-xl mb-1">◊</div>
                  <div>Emergent Intelligence</div>
                </div>
                <div className="text-center p-3 sm:p-0 border-t sm:border-t-0 border-gray-700">
                  <div className="text-blue-400 font-medium text-lg sm:text-xl mb-1">△</div>
                  <div>Transcendent Strategy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStrategy;