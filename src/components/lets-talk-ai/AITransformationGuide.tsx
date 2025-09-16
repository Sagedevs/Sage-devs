"use client";
import React, { useState, useEffect, useRef } from 'react';

const AITransformationSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeNode, setActiveNode] = useState(0);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, nodeIndex: -1 });
  const sectionRef = useRef<HTMLElement>(null);

  // Helper function to determine popup position based on screen location
  const getPopupPosition = (x: number, y: number) => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    
    let transform = '';
    
    // Horizontal positioning - more aggressive positioning to stay on screen
    if (x > screenWidth * 0.6) {
      transform += '-translate-x-full -ml-8 '; // Right area - show popup to the left
    } else if (x > screenWidth * 0.4) {
      transform += '-translate-x-1/2 '; // Center - center the popup
    } else {
      transform += 'ml-8 '; // Left area - show popup to the right
    }
    
    // Vertical positioning - ensure popup stays in viewport
    if (y > screenHeight * 0.7) {
      transform += '-translate-y-full -mt-4'; // Bottom area - show popup above
    } else if (y < screenHeight * 0.3) {
      transform += 'mt-4'; // Top area - show popup below
    } else {
      transform += '-translate-y-1/2'; // Middle - center vertically
    }
    
    return transform;
  };

  // Helper function for arrow positioning
  const getArrowPosition = (x: number, y: number) => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    
    let position = '';
    
    // Horizontal arrow positioning
    if (x > screenWidth * 0.6) {
      position += 'right-8 '; // Right area popup - arrow on right
    } else if (x > screenWidth * 0.4) {
      position += 'left-1/2 -ml-1.5 '; // Center popup - arrow in center
    } else {
      position += 'left-8 '; // Left area popup - arrow on left
    }
    
    // Vertical arrow positioning
    if (y > screenHeight * 0.7) {
      position += 'bottom-0 mb-2'; // Popup above - arrow at bottom
    } else if (y < screenHeight * 0.3) {
      position += 'top-0 -mt-2'; // Popup below - arrow at top
    } else {
      position += 'top-1/2 -mt-1.5'; // Middle - arrow in center
    }
    
    return position;
  };

  const handleMouseMove = (e: React.MouseEvent, nodeIndex: number) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
      nodeIndex
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        setScrollY(progress);
        setActiveNode(Math.floor(progress * 5));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transformationNodes = [
    {
      id: "assessment",
      title: "AI Readiness Assessment",
      phase: "01",
      description: "Comprehensive evaluation of your organization's AI readiness, including data infrastructure, technology stack, and team capabilities. We identify quick wins and long-term opportunities.",
      keyPoints: [
        "Data quality and accessibility audit",
        "Technology infrastructure evaluation",
        "Team skill gap analysis",
        "ROI potential mapping"
      ],
      deliverables: "AI Readiness Report, Implementation Roadmap, Resource Requirements",
      duration: "2-3 weeks",
      teams: ["AI Consultants", "Data Analysts", "Technical Architects"],
      coordinates: { x: 15, y: 20 }
    },
    {
      id: "strategy",
      title: "AI Strategy Development",
      phase: "02", 
      description: "Create a tailored AI strategy aligned with your business objectives. Define use cases, prioritize initiatives, and establish governance frameworks for responsible AI implementation.",
      keyPoints: [
        "Business case development",
        "Use case prioritization matrix",
        "Governance and ethics framework",
        "Success metrics definition"
      ],
      deliverables: "AI Strategy Document, Governance Guidelines, Success KPIs",
      duration: "3-4 weeks",
      teams: ["Strategy Consultants", "Domain Experts", "Compliance Officers"],
      coordinates: { x: 50, y: 10 }
    },
    {
      id: "implementation",
      title: "AI Solution Implementation",
      phase: "03",
      description: "Build and deploy AI solutions using industry best practices. From proof of concept to production-ready systems with proper monitoring and quality assurance.",
      keyPoints: [
        "Rapid prototyping and MVP development",
        "Scalable architecture design",
        "MLOps pipeline setup",
        "Quality assurance and testing"
      ],
      deliverables: "Working AI Solutions, Documentation, Training Materials",
      duration: "6-12 weeks", 
      teams: ["ML Engineers", "Software Developers", "QA Engineers"],
      coordinates: { x: 85, y: 30 }
    },
    {
      id: "integration",
      title: "System Integration",
      phase: "04",
      description: "Seamlessly integrate AI solutions with existing business systems. Ensure data flows smoothly and users can access AI capabilities through familiar interfaces.",
      keyPoints: [
        "API development and integration",
        "Data pipeline optimization",
        "User interface enhancement",
        "Performance monitoring setup"
      ],
      deliverables: "Integrated Systems, API Documentation, Monitoring Dashboards",
      duration: "4-8 weeks",
      teams: ["Integration Engineers", "DevOps Specialists", "UX Designers"],
      coordinates: { x: 20, y: 70 }
    },
    {
      id: "optimization",
      title: "Continuous Optimization",
      phase: "05",
      description: "Monitor, maintain, and continuously improve AI systems. Implement feedback loops, retrain models, and scale solutions based on business growth and changing requirements.",
      keyPoints: [
        "Performance monitoring and alerts",
        "Model retraining and updates",
        "User feedback integration",
        "Scaling and expansion planning"
      ],
      deliverables: "Optimization Reports, Updated Models, Expansion Roadmap",
      duration: "Ongoing",
      teams: ["MLOps Engineers", "Data Scientists", "Product Managers"],
      coordinates: { x: 75, y: 80 }
    }
  ];

  const connectionPaths = [
    "M 15,20 Q 32,15 50,10",
    "M 50,10 Q 67,20 85,30", 
    "M 85,30 Q 52,50 20,70",
    "M 20,70 Q 47,75 75,80"
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 overflow-hidden"
    >
      
      {/* Contained Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridMove 25s linear infinite'
            }}
          />
        </div>

        {/* Floating Data Orbs - Contained */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({length: 8}).map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/15 backdrop-blur-sm"
              style={{
                width: `${15 + Math.random() * 25}px`,
                height: `${15 + Math.random() * 25}px`,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animation: `orbFloat ${10 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        {/* Neural Connection Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            {Array.from({length: 4}).map((_, i) => (
              <line
                key={`neural-${i}`}
                x1={`${20 + Math.random() * 60}%`}
                y1={`${20 + Math.random() * 60}%`}
                x2={`${20 + Math.random() * 60}%`}
                y2={`${20 + Math.random() * 60}%`}
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.7}s` }}
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
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-blue-950/40 border border-blue-400/30 rounded-full backdrop-blur-md mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full relative">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute"></div>
            </div>
            <span className="text-blue-200 font-mono text-xs sm:text-sm tracking-wider">AI TRANSFORMATION GUIDE</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight">
            <span className="block text-white">Your AI Journey</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-4">
            A comprehensive 5-phase approach to AI transformation. From initial assessment 
            to continuous optimization, we guide you through every step of your AI journey.
          </p>
        </div>

        {/* Interactive Transformation Map */}
        <div className="relative h-64 sm:h-80 lg:h-96 mb-8 lg:mb-16 bg-gradient-to-br from-blue-950/20 to-slate-950/40 border border-blue-400/20 rounded-xl backdrop-blur-sm overflow-visible transformation-map">
          
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
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
                activeNode >= i ? 'scale-100 opacity-100 z-20' : 'scale-90 opacity-70 z-10'
              }`}
              style={{
                left: `${node.coordinates.x}%`,
                top: `${node.coordinates.y}%`,
              }}
              onMouseEnter={(e) => {
                setHoveredPhase(i);
                handleMouseMove(e, i);
              }}
              onMouseLeave={() => setHoveredPhase(null)}
              onMouseMove={(e) => handleMouseMove(e, i)}
            >
              <div className={`relative p-3 sm:p-4 bg-gradient-to-br from-blue-900/70 to-slate-900/90 border-2 rounded-lg backdrop-blur-md transition-all duration-300 ${
                activeNode >= i 
                  ? 'border-blue-400 shadow-xl shadow-blue-500/30' 
                  : 'border-blue-700/40'
              }`}>
                
                <div className="text-blue-400 font-mono text-xs mb-1 font-bold">PHASE {node.phase}</div>
                <div className="text-white font-bold text-xs sm:text-sm mb-1 leading-tight">{node.title}</div>
                <div className="text-gray-300 text-xs">{node.duration}</div>
                
                {/* Active Node Pulse Effect */}
                {activeNode >= i && (
                  <>
                    <div className="absolute inset-0 border-2 border-blue-400/50 rounded-lg animate-ping"></div>
                    <div className="absolute -inset-1 border border-blue-300/30 rounded-lg animate-pulse"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Popup Tooltip */}
        {hoveredPhase !== null && (
          <div 
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          >
            <div 
              className={`w-72 sm:w-80 lg:w-96 max-w-sm p-4 sm:p-5 bg-gradient-to-br from-slate-900/98 to-blue-950/98 border border-blue-400/50 rounded-xl backdrop-blur-xl shadow-2xl shadow-blue-500/30 transform transition-all duration-200 max-h-[80vh] overflow-y-auto ${
                getPopupPosition(mousePosition.x, mousePosition.y)
              }`}
              style={{
                animation: 'popupFadeIn 0.25s ease-out'
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-black text-blue-400 font-mono">
                    {transformationNodes[hoveredPhase].phase}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                    {transformationNodes[hoveredPhase].title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-blue-900/40 border border-blue-600/40 rounded-full">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 font-mono text-xs">{transformationNodes[hoveredPhase].duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed">
                {transformationNodes[hoveredPhase].description}
              </p>

              {/* Content Grid */}
              <div className="space-y-3">
                {/* Key Activities */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
                    <div className="text-blue-400 text-xs font-bold uppercase tracking-wider">Key Activities</div>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {transformationNodes[hoveredPhase].keyPoints.slice(0, 3).map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                    {transformationNodes[hoveredPhase].keyPoints.length > 3 && (
                      <div className="text-xs text-blue-300 ml-3">+{transformationNodes[hoveredPhase].keyPoints.length - 3} more activities</div>
                    )}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-sm"></div>
                    <div className="text-green-400 text-xs font-bold uppercase tracking-wider">Key Deliverables</div>
                  </div>
                  <div className="text-xs text-gray-300 bg-slate-800/50 p-2 rounded border border-slate-700/50 line-clamp-2">
                    {transformationNodes[hoveredPhase].deliverables}
                  </div>
                </div>

                {/* Team */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-sm"></div>
                    <div className="text-purple-400 text-xs font-bold uppercase tracking-wider">Teams</div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {transformationNodes[hoveredPhase].teams.slice(0, 2).map((team, i) => (
                      <span key={i} className="px-2 py-1 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 text-purple-200 text-xs rounded-full font-medium">
                        {team}
                      </span>
                    ))}
                    {transformationNodes[hoveredPhase].teams.length > 2 && (
                      <span className="px-2 py-1 bg-slate-700/50 border border-slate-600/30 text-slate-300 text-xs rounded-full">
                        +{transformationNodes[hoveredPhase].teams.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Arrow pointers for different positions */}
              <div className={`absolute w-3 h-3 bg-gradient-to-br from-slate-900 to-blue-950 border-l border-t border-blue-400/50 transform rotate-45 ${
                getArrowPosition(mousePosition.x, mousePosition.y)
              }`}></div>
            </div>
          </div>
        )}

        {/* Progress Indicator - Mobile Friendly */}
        <div className="flex lg:hidden justify-center mb-8">
          <div className="flex items-center space-x-3">
            {transformationNodes.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full border transition-all duration-500 ${
                  activeNode >= i 
                    ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50' 
                    : 'border-blue-700/50 bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Progress Indicator */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
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

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes orbFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3; 
          }
          33% { 
            transform: translate(20px, -15px) scale(1.1); 
            opacity: 0.6; 
          }
          66% { 
            transform: translate(-15px, 20px) scale(0.9); 
            opacity: 0.4; 
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

        @keyframes popupFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default AITransformationSection;