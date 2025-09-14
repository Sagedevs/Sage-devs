"use client";

import React, { useState, useEffect } from 'react';

const LetsTalkAIHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add Gilroy font and enhanced animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Regular.woff2') format('woff2'),
             url('/fonts/Gilroy-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Medium.woff2') format('woff2'),
             url('/fonts/Gilroy-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Bold.woff2') format('woff2'),
             url('/fonts/Gilroy-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Black.woff2') format('woff2'),
             url('/fonts/Gilroy-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
      }
      
      .gilroy-font {
        font-family: 'Gilroy', Arial, sans-serif;
        font-feature-settings: 'kern' 1, 'liga' 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(90deg); }
        50% { transform: translateY(-5px) rotate(180deg); }
        75% { transform: translateY(-15px) rotate(270deg); }
      }
      @keyframes matrixRain {
        0% { transform: translateY(-100vh); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      @keyframes networkPulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
      }
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .slide-up {
        animation: slideUp 0.8s ease-out forwards;
      }
      .fade-in-scale {
        animation: fadeInScale 0.6s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="gilroy-font">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden flex items-center justify-center py-20"
        onMouseMove={handleMouseMove}
      >
        {/* Enhanced Professional Background */}
        <div className="absolute inset-0">
          {/* Sophisticated Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
                linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          />
          
          {/* Enterprise Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-cyan-900/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-indigo-900/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        {/* Professional Network Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* Dynamic connecting lines */}
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
            <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <line x1="60%" y1="20%" x2="80%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            {/* Network nodes */}
            <circle cx="10%" cy="20%" r="3" fill="#3b82f6" className="animate-pulse" />
            <circle cx="30%" cy="40%" r="2" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="70%" cy="30%" r="2.5" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <circle cx="90%" cy="60%" r="2" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          </svg>
        </div>

        {/* Sophisticated Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-40 animate-pulse"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `translate(${mousePosition.x * (0.01 + Math.random() * 0.02)}px, ${mousePosition.y * (0.01 + Math.random() * 0.02)}px)`,
              }}
            />
          ))}
        </div>

        {/* Professional Ambient Light Effects */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

        {/* Trusted by diverse software partners bubble */}
        <div className="absolute z-20 top-4 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800" src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="Partner 1" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="Partner 2" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Partner 3" />
            </div>
            <span>Trusted by diverse software partners</span>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <div className="mb-16 lg:mb-20">
            <h1 
              className={`font-black mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ fontWeight: 900, fontSize: '72px', lineHeight: '99px', color: 'rgb(255, 255, 255)' }}
            >
              <span className="block text-white mb-4 tracking-tight">LET&apos;S</span>
              <span 
                className="block bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent font-extrabold tracking-tight"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 4s ease-in-out infinite',
                }}
              >
                TALK AI
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p 
              className={`mb-12 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ fontWeight: 500, fontSize: '20px', lineHeight: '33px', color: 'oklch(0.872 0.01 258.338)' }}
            >
              Transform your enterprise with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver scalable AI innovations 
              that drive measurable business outcomes.
            </p>

            {/* Professional CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row justify-center gap-6 mb-20 lg:mb-24 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-500/20">
                <span className="relative z-10 tracking-wide">Start Your AI Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group relative px-12 py-5 border-2 border-blue-500/50 text-blue-300 text-lg font-bold rounded-xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-950/30 hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm">
                <span className="relative z-10 tracking-wide">Explore AI Solutions</span>
              </button>
            </div>
          </div>

          {/* Professional Stats with Enhanced Design */}
          <div 
            className={`flex flex-wrap justify-center gap-12 lg:gap-16 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { number: '500+', label: 'Enterprise Projects' },
              { number: '95%', label: 'Client Success Rate' },
              { number: '24/7', label: 'AI-Powered Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-blue-500/30 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-blue-200 transition-all duration-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Professional Footer */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      </section>
    </div>
  );
};

export default LetsTalkAIHero;