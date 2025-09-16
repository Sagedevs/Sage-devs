"use client";
import React, { useState, useEffect, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const LetsTalkAISection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [activeCard, setActiveCard] = useState(0);
  const [mouseAngle, setMouseAngle] = useState(0);
  const [mouseDistance, setMouseDistance] = useState(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHubHovered, setIsHubHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    { 
      title: "Neural Networks", 
      subtitle: "Deep Learning",
      icon: "⬡", 
      color: "blue",
      gradient: "from-blue-500 to-blue-700"
    },
    { 
      title: "Computer Vision", 
      subtitle: "Image AI",
      icon: "◈", 
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600"
    },
    { 
      title: "NLP Engine", 
      subtitle: "Language AI",
      icon: "◊", 
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600"
    },
    { 
      title: "Predictive AI", 
      subtitle: "Future Tech",
      icon: "◉", 
      color: "sky",
      gradient: "from-sky-500 to-cyan-600"
    }
  ];

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking with smooth interpolation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
        const distance = Math.min(Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) / 300, 1);
        
        setMouseAngle(angle * (180 / Math.PI));
        setMouseDistance(distance);
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newRipple: Ripple = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          id: Date.now()
        };
        setRipples(prev => [...prev.slice(-5), newRipple]);
        
        // Generate particles
        const newParticles: Particle[] = [];
        for (let i = 0; i < 8; i++) {
          newParticles.push({
            x: newRipple.x,
            y: newRipple.y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 60,
            maxLife: 60
          });
        }
        setParticles(prev => [...prev.slice(-20), ...newParticles]);
        
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 2000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Particle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 1,
          vy: p.vy + 0.1
        })).filter(p => p.life > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const completionPercentage = Object.values(formData).filter(v => v.length > 0).length * 25;

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden"
      style={{ cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='8' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%233b82f6'/%3E%3C/svg%3E") 10 10, crosshair` }}
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Interactive particles */}
      {particles.map(particle => (
        <div
          key={`${particle.x}-${particle.y}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.life / particle.maxLife,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-8 h-8 border-2 border-blue-400/60 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-8 h-8 border border-blue-300/40 rounded-full animate-ping" style={{ animationDelay: '0.2s', animationDuration: '2s' }}></div>
          <div className="absolute inset-0 w-8 h-8 border border-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '0.4s', animationDuration: '3s' }}></div>
        </div>
      ))}

      {/* Central AI Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative transition-transform duration-300 ease-out"
          style={{ 
            transform: `rotate(${mouseAngle * 0.15}deg) scale(${1 + mouseDistance * 0.1})`,
            filter: `drop-shadow(0 0 ${20 + mouseDistance * 30}px rgba(59, 130, 246, ${0.3 + mouseDistance * 0.2}))`
          }}
        >
          {/* Connection lines */}
          <svg className="absolute inset-0 w-[400px] h-[400px]" style={{ left: '-50px', top: '-50px' }}>
            {features.map((_, i) => (
              <g key={i}>
                <line
                  x1="200"
                  y1="200"
                  x2={200 + Math.cos((i * 90 - 45) * Math.PI / 180) * 120}
                  y2={200 + Math.sin((i * 90 - 45) * Math.PI / 180) * 120}
                  stroke={activeCard === i ? '#3b82f6' : '#475569'}
                  strokeWidth={activeCard === i ? '3' : '1'}
                  className="transition-all duration-700"
                  opacity={activeCard === i ? '0.8' : '0.3'}
                  strokeDasharray={activeCard === i ? '0' : '5,5'}
                />
                {activeCard === i && (
                  <circle
                    cx={200 + Math.cos((i * 90 - 45) * Math.PI / 180) * 60}
                    cy={200 + Math.sin((i * 90 - 45) * Math.PI / 180) * 60}
                    r="3"
                    fill="#3b82f6"
                    className="animate-pulse"
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Central Hub */}
          <div 
            className="relative w-24 h-24 transition-all duration-500"
            onMouseEnter={() => setIsHubHovered(true)}
            onMouseLeave={() => setIsHubHovered(false)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full transition-all duration-500 ${
              isHubHovered ? 'scale-110 shadow-2xl shadow-blue-500/50' : 'scale-100'
            }`}>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <div className="text-white text-xl font-black">AI</div>
              </div>
            </div>
            <div className="absolute -inset-2 border-2 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
          </div>

          {/* Orbiting Feature Cards */}
          {features.map((feature, i) => (
            <div
              key={i}
              className="absolute w-20 h-20 transition-all duration-700"
              style={{
                transform: `rotate(${i * 90}deg) translateX(120px) rotate(${-i * 90 - mouseAngle * 0.15}deg)`,
                transformOrigin: 'center'
              }}
            >
              <div 
                className={`w-full h-full rounded-2xl backdrop-blur-xl border-2 transition-all duration-500 cursor-pointer ${
                  activeCard === i 
                    ? `bg-gradient-to-br ${feature.gradient} border-white/40 shadow-xl scale-110` 
                    : 'bg-slate-900/80 border-slate-600/50 hover:border-slate-500'
                }`}
                onClick={() => setActiveCard(i)}
              >
                <div className="p-2 h-full flex flex-col items-center justify-center text-center">
                  <div className={`text-lg mb-1 transition-colors duration-300 ${
                    activeCard === i ? 'text-white' : 'text-blue-400'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className={`text-[10px] font-bold leading-tight transition-colors duration-300 ${
                    activeCard === i ? 'text-white' : 'text-slate-300'
                  }`}>
                    {feature.title}
                  </div>
                  <div className={`text-[8px] leading-tight transition-colors duration-300 ${
                    activeCard === i ? 'text-blue-100' : 'text-slate-500'
                  }`}>
                    {feature.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Info Panel */}
      <div className="absolute top-8 left-8 max-w-sm">
        <div className="bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <div className="text-white font-black text-lg">AI</div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">Neural Studio</h1>
              <p className="text-blue-400 text-sm">Interactive AI Platform</p>
            </div>
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Experience our AI ecosystem. Each click creates neural pathways, 
            mouse movements guide the intelligence flow.
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-mono uppercase tracking-wide">Live System</span>
            </div>
            <div className="text-blue-400 font-mono text-xs">
              v4.2.1
            </div>
          </div>
        </div>
      </div>

      {/* Stats Panel */}
      <div className="absolute top-8 right-8">
        <div className="space-y-4">
          {[
            { label: "Neural Nodes", value: "2.4M", icon: "◉" },
            { label: "Processing Speed", value: "∞", icon: "⚡" },
            { label: "Accuracy Rate", value: "99.9%", icon: "✓" },
            { label: "Active Models", value: "847", icon: "◈" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 min-w-[120px] hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="text-blue-400 text-lg">{stat.icon}</div>
                <div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Bottom Form */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-slate-900/95 backdrop-blur-3xl border border-slate-700/60 rounded-3xl p-8 w-[700px] shadow-2xl">
          {/* Form header with progress */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Connect to the Network</h2>
            <p className="text-slate-400 mb-4">Initialize your AI transformation</p>
            
            {/* Progress bar */}
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-slate-500">{completionPercentage}% Complete</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-4 py-4 bg-black/60 border border-slate-600/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-center font-medium"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-4 bg-black/60 border border-slate-600/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-center font-medium"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="px-4 py-4 bg-black/60 border border-slate-600/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-center font-medium"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                CONNECT
              </button>
            </div>

            <textarea
              name="message"
              placeholder="Describe your AI vision and goals..."
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-6 py-4 bg-black/60 border border-slate-600/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 resize-none font-medium"
            />
          </form>

          {/* Enhanced connection indicators */}
          <div className="flex justify-center space-x-8 mt-6 pt-6 border-t border-slate-700/50">
            {[
              { label: "Quantum Encrypted", color: "blue", icon: "🛡️" },
              { label: "Real-time AI", color: "green", icon: "⚡" },
              { label: "Neural Processing", color: "purple", icon: "🧠" }
            ].map((indicator, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                <span className="text-sm">{indicator.icon}</span>
                <div className={`w-2 h-2 bg-${indicator.color}-400 rounded-full animate-pulse`}></div>
                <span>{indicator.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalkAISection;