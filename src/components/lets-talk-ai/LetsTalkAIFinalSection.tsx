"use client";
import React, { useState, useEffect, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  aiInterest: string;
  projectScale: string;
  timeline: string;
  message: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

const LetsTalkAISection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    aiInterest: '',
    projectScale: '',
    timeline: '',
    message: ''
  });
  
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFormFocused, setIsFormFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const aiInterests = [
    "Machine Learning",
    "Natural Language Processing", 
    "Computer Vision",
    "Predictive Analytics",
    "Automation & Robotics",
    "Data Intelligence",
    "Custom AI Solutions"
  ];

  const projectScales = [
    "Startup/Small Business",
    "Mid-size Company",
    "Enterprise",
    "Government/Institution",
    "Research/Academic"
  ];

  const timelines = [
    "Immediate (1-3 months)",
    "Short-term (3-6 months)",
    "Medium-term (6-12 months)",
    "Long-term (12+ months)",
    "Just exploring"
  ];

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
        const newParticles: Particle[] = [];
      const particleCount = window.innerWidth < 768 ? 15 : 30; // Fewer particles on mobile
      for (let i = 0; i < particleCount; i++) {
          newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: Math.random() * 200 + 100,
          maxLife: Math.random() * 200 + 100,
          color: ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981'][Math.floor(Math.random() * 4)]
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 1,
          vx: p.x < 0 || p.x > window.innerWidth ? -p.vx : p.vx,
          vy: p.y < 0 || p.y > window.innerHeight ? -p.vy : p.vy
        })).filter(p => p.life > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('AI Consultation Request:', formData);
    // Add your form submission logic here
    alert('Thank you for your interest! We\'ll contact you within 24 hours.');
  };

  const completionPercentage = Math.round(
    (Object.values(formData).filter(v => v.length > 0).length / Object.keys(formData).length) * 100
  );

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-60"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife * 0.6,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Mouse follower effect - hidden on mobile */}
        <div
        className="fixed w-80 h-80 pointer-events-none hidden md:block"
          style={{
          left: mousePos.x - 160,
          top: mousePos.y - 160,
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          transition: 'all 0.3s ease'
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center" style={{ paddingTop: '50px' }}>
        <div className="px-14 sm:px-15 md:px-20 lg:px-24 xl:px-34 py-8 sm:py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <div className="text-white font-black text-lg sm:text-xl">AI</div>
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                      Let&apos;s Talk
                      <span className="block text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Artificial Intelligence
                      </span>
                    </h1>
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-lg">
                  Ready to transform your business with AI? Let&apos;s discuss your vision and explore how cutting-edge artificial intelligence can drive your success.
                </p>
      </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  { icon: "🧠", title: "Smart Solutions", desc: "Custom AI tailored to your needs" },
                  { icon: "⚡", title: "Rapid Deployment", desc: "Fast implementation & results" },
                  { icon: "📊", title: "Data-Driven", desc: "Insights that drive decisions" },
                  { icon: "🔮", title: "Future-Ready", desc: "Scalable AI architecture" }
                ].map((feature, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-2xl hover:bg-slate-800/30 transition-all duration-300 cursor-pointer">
                      <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
            </div>
            <div>
                        <h3 className="text-white font-bold text-base sm:text-lg mb-1">{feature.title}</h3>
                        <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          </div>
        </div>
                ))}
      </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 pt-6 lg:pt-8 border-t border-slate-700/50">
                {[
                  { value: "500+", label: "AI Projects" },
                  { value: "24hr", label: "Response Time" },
                  { value: "98%", label: "Success Rate" }
          ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="relative order-1 lg:order-2">
              <div 
                className={`bg-slate-900/80 backdrop-blur-2xl border rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl transition-all duration-500 ${
                  isFormFocused ? 'border-blue-500/60 shadow-blue-500/20' : 'border-slate-700/50'
                }`}
                onFocus={() => setIsFormFocused(true)}
                onBlur={() => setIsFormFocused(false)}
              >
                {/* Form header */}
                <div className="text-center mb-6 lg:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Start Your AI Journey</h2>
                  <p className="text-slate-400 text-sm">Tell us about your project</p>
                  
                  {/* Progress indicator */}
                  <div className="mt-4">
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
                    <div className="text-xs text-slate-500 mt-2">{completionPercentage}% Complete</div>
                  </div>
          </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Basic info row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                      placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-black/60 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                      placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-black/60 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-sm sm:text-base"
              />
                  </div>

              <input
                type="text"
                name="company"
                    placeholder="Company/Organization"
                value={formData.company}
                onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/60 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-sm sm:text-base"
                  />

                  {/* AI-specific fields */}
                  <select
                    name="aiInterest"
                    value={formData.aiInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/60 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="" className="text-slate-400">Select AI Interest Area</option>
                    {aiInterests.map(interest => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </select>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      name="projectScale"
                      value={formData.projectScale}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-black/60 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Project Scale</option>
                      {projectScales.map(scale => (
                        <option key={scale} value={scale}>{scale}</option>
                      ))}
                    </select>

                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-black/60 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
            </div>

            <textarea
              name="message"
                    placeholder="Describe your AI vision, challenges, or specific requirements..."
              value={formData.message}
              onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/60 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-black/80 transition-all duration-300 resize-none text-sm sm:text-base"
                  />

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Let&apos;s Discuss AI Solutions</span>
                    <span className="text-lg sm:text-xl">🚀</span>
                  </button>

                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-700/30">
                  {[
                    { icon: "🔒", label: "Secure" },
                    { icon: "⚡", label: "24h Response" },
                    { icon: "🎯", label: "Tailored Solutions" }
            ].map((indicator, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                      <span>{indicator.icon}</span>
                <span>{indicator.label}</span>
              </div>
            ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalkAISection;