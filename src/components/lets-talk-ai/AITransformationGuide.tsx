"use client";
import React, { useState, useEffect, useRef } from 'react';

const AITransformationSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeNode, setActiveNode] = useState(0);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        setScrollY(progress);
        setActiveNode(Math.floor(progress * 4));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transformationNodes = [
    {
      id: "assessment",
      title: "Intelligent Discovery",
      phase: "01",
      description: "Deep-dive analysis using AI-powered assessment tools to map your digital ecosystem, identify transformation opportunities, and quantify potential impact across business units.",
      technical: "Advanced data profiling, ML-powered gap analysis, predictive ROI modeling",
      metrics: ["System Compatibility Score", "Data Readiness Index", "AI Potential Mapping"],
      duration: "3-5 weeks",
      teams: ["Data Scientists", "Solution Architects", "Business Analysts"],
      coordinates: { x: 20, y: 25 }
    },
    {
      id: "architecture",
      title: "Neural Architecture Design",
      phase: "02", 
      description: "Custom AI architecture blueprint leveraging microservices, edge computing, and cloud-native patterns designed for your specific scalability and performance requirements.",
      technical: "Distributed ML pipelines, real-time inference engines, adaptive model orchestration",
      metrics: ["Latency Optimization", "Scalability Factor", "Resource Efficiency"],
      duration: "4-6 weeks",
      teams: ["ML Engineers", "Cloud Architects", "DevOps Specialists"],
      coordinates: { x: 50, y: 15 }
    },
    {
      id: "development",
      title: "Cognitive Development Lab",
      phase: "03",
      description: "Rapid prototyping environment where we build, test, and refine AI models using advanced MLOps practices, continuous integration, and automated testing frameworks.",
      technical: "AutoML pipelines, containerized model serving, A/B testing infrastructure",
      metrics: ["Model Accuracy", "Deployment Velocity", "Quality Gates"],
      duration: "8-12 weeks", 
      teams: ["ML Researchers", "Software Engineers", "QA Specialists"],
      coordinates: { x: 80, y: 35 }
    },
    {
      id: "integration",
      title: "Symbiotic Integration",
      phase: "04",
      description: "Seamless fusion of AI capabilities with existing systems through intelligent APIs, event-driven architectures, and real-time data synchronization mechanisms.",
      technical: "GraphQL federation, event sourcing, distributed tracing, chaos engineering",
      metrics: ["Integration Health", "Data Flow Velocity", "System Resilience"],
      duration: "6-10 weeks",
      teams: ["Integration Engineers", "Platform Architects", "Site Reliability Engineers"],
      coordinates: { x: 25, y: 75 }
    },
    {
      id: "evolution",
      title: "Adaptive Intelligence",
      phase: "05",
      description: "Self-improving AI systems with continuous learning capabilities, automated model retraining, and intelligent performance optimization based on real-world feedback.",
      technical: "Online learning algorithms, automated hyperparameter tuning, drift detection",
      metrics: ["Learning Velocity", "Adaptation Rate", "Performance Drift"],
      duration: "Continuous",
      teams: ["MLOps Engineers", "Data Platform Team", "AI Researchers"],
      coordinates: { x: 70, y: 85 }
    }
  ];

  const connectionPaths = [
    "M 20,25 Q 35,20 50,15",
    "M 50,15 Q 65,25 80,35", 
    "M 80,35 Q 50,55 25,75",
    "M 25,75 Q 47,80 70,85"
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[150vh] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Data Orbs */}
        <div className="absolute inset-0">
          {Array.from({length: 12}).map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 backdrop-blur-sm"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `orbFloat ${8 + Math.random() * 12}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Neural Connection Lines */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full">
            {Array.from({length: 6}).map((_, i) => (
              <line
                key={`neural-${i}`}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-slate-950/60"
          style={{ opacity: 0.6 + scrollY * 0.3 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-16">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          {/* Hero Section */}
          <div className="text-center mb-16" style={{ transform: `translateY(${scrollY * -30}px)` }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-950/40 border border-blue-400/30 rounded-full backdrop-blur-md mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute"></div>
              </div>
              <span className="text-blue-200 font-mono text-sm tracking-wider">NEXT-GEN AI TRANSFORMATION</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white">Intelligent</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Evolution
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Revolutionary AI transformation methodology that adapts to your business DNA. 
              We don't just implement AI—we architect intelligent ecosystems that evolve, 
              learn, and optimize continuously.
            </p>
          </div>

          {/* Interactive Transformation Map */}
          <div className="relative h-80 lg:h-96 mb-16 bg-gradient-to-br from-blue-950/20 to-slate-950/40 border border-blue-400/20 rounded-xl backdrop-blur-sm overflow-hidden">
            
            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-full">
              {connectionPaths.map((path, i) => (
                <path
                  key={`path-${i}`}
                  d={path}
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60"
                  style={{
                    strokeDasharray: "8 4",
                    animation: `pathPulse ${4 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`
                  }}
                />
              ))}
              
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="30%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="rgb(34, 211, 238)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>

            {/* Transformation Nodes */}
            {transformationNodes.map((node, i) => (
              <div
                key={node.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 group ${
                  activeNode >= i ? 'scale-100 opacity-100 z-20' : 'scale-90 opacity-60 z-10'
                }`}
                style={{
                  left: `${node.coordinates.x}%`,
                  top: `${node.coordinates.y}%`,
                }}
                onMouseEnter={() => setHoveredPhase(i)}
                onMouseLeave={() => setHoveredPhase(null)}
              >
                <div className={`relative p-4 bg-gradient-to-br from-blue-900/60 to-slate-900/80 border-2 rounded-lg backdrop-blur-md transition-all duration-300 ${
                  activeNode >= i 
                    ? 'border-blue-400 shadow-xl shadow-blue-500/30 group-hover:shadow-blue-400/50' 
                    : 'border-blue-700/40 group-hover:border-blue-500/60'
                } ${hoveredPhase === i ? 'scale-110 z-30' : ''}`}>
                  
                  <div className="text-blue-400 font-mono text-xs mb-1 font-bold">PHASE {node.phase}</div>
                  <div className="text-white font-bold text-sm mb-1 leading-tight">{node.title}</div>
                  <div className="text-gray-300 text-xs">{node.duration}</div>
                  
                  {/* Active Node Pulse Effect */}
                  {activeNode >= i && (
                    <>
                      <div className="absolute inset-0 border-2 border-blue-400/50 rounded-lg animate-ping"></div>
                      <div className="absolute -inset-1 border border-blue-300/30 rounded-lg animate-pulse"></div>
                    </>
                  )}

                  {/* Hover Glow Effect */}
                  {hoveredPhase === i && (
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-sm -z-10"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Phase Details */}
          {hoveredPhase !== null && (
            <div 
              className="mt-8 bg-gradient-to-r from-blue-950/80 to-slate-950/80 border border-blue-400/30 rounded-xl backdrop-blur-lg p-8 transition-all duration-300"
              style={{
                animation: 'slideUp 0.3s ease-out'
              }}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-black text-blue-500/40 font-mono">
                      {transformationNodes[hoveredPhase].phase}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {transformationNodes[hoveredPhase].title}
                      </h3>
                      <p className="text-blue-300 text-sm font-mono">
                        {transformationNodes[hoveredPhase].technical}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {transformationNodes[hoveredPhase].description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {transformationNodes[hoveredPhase].metrics.map((metric, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-900/50 border border-blue-600/50 text-blue-200 text-xs font-mono rounded-full">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-blue-400 text-sm font-semibold mb-2 uppercase tracking-wider">Duration</div>
                    <div className="text-white font-mono text-lg">{transformationNodes[hoveredPhase].duration}</div>
                  </div>
                  
                  <div>
                    <div className="text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wider">Specialist Teams</div>
                    <div className="space-y-2">
                      {transformationNodes[hoveredPhase].teams.map((team, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <div className="text-gray-300 text-sm">{team}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Progress Indicator */}
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
            <div className="flex flex-col items-center space-y-3">
              {transformationNodes.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                    activeNode >= i 
                      ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50 scale-110' 
                      : 'border-blue-700/50 bg-transparent hover:border-blue-500/70'
                  }`}
                />
              ))}
              <div className="w-px h-12 bg-gradient-to-b from-blue-500/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        
        @keyframes orbFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.4; 
          }
          33% { 
            transform: translate(30px, -20px) scale(1.1); 
            opacity: 0.7; 
          }
          66% { 
            transform: translate(-20px, 30px) scale(0.9); 
            opacity: 0.5; 
          }
        }
        
        @keyframes pathPulse {
          0%, 100% { 
            stroke-dashoffset: 0; 
            opacity: 0.3; 
          }
          50% { 
            stroke-dashoffset: 20; 
            opacity: 0.8; 
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AITransformationSection;