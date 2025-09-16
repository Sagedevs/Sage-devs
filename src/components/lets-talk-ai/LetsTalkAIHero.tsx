"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const LetsTalkAIHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElementStyles, setFloatingElementStyles] = useState<any[]>([]);
  const floatingElementRefs = useRef<Array<HTMLDivElement | null>>([]);
  const complexGridRef = useRef<HTMLDivElement>(null);
  const hexagonalPatternRef = useRef<HTMLDivElement>(null);
  const interactiveLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Add Gilroy font and enhanced animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Black.woff2') format('woff2');
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
        25% { transform: translateY(-20px) rotate(90deg); }
        50% { transform: translateY(-10px) rotate(180deg); }
        75% { transform: translateY(-25px) rotate(270deg); }
      }
      @keyframes matrixRain {
        0% { transform: translateY(-100vh); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      @keyframes networkPulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
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
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
        40%, 43% { transform: translateY(-30px); }
        70% { transform: translateY(-15px); }
      }
      .slide-up {
        animation: slideUp 0.8s ease-out forwards;
      }
      .fade-in-scale {
        animation: fadeInScale 0.6s ease-out forwards;
      }
      .cursor-glow {
        position: fixed;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        transition: transform 0.1s ease-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Only run on client-side

    const numFloatingElements = 50;
    const generatedStyles = Array.from({ length: numFloatingElements }).map((_, i) => ({
      width: `${3 + Math.random() * 8}px`,
      height: `${3 + Math.random() * 8}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      background: [
        '#3b82f6', '#2563eb', '#06b6d4', '#1d4ed8',
        '#1e40af', '#172554', '#1f2937', '#334155'
      ][i % 8],
      borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '2px' : '0',
      animationName: i % 4 === 0 ? 'float' : i % 4 === 1 ? 'bounce' : i % 4 === 2 ? 'spin' : 'pulse',
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 4}s`,
      animationIterationCount: 'infinite',
      randomTranslateX: (0.02 + Math.random() * 0.04),
      randomTranslateY: (0.02 + Math.random() * 0.04),
      randomRotate: (Math.random() * 0.2 - 0.1),
    }));
    setFloatingElementStyles(generatedStyles);
  }, []); // Empty dependency array means this runs once on mount, client-side only

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Update floating elements
    floatingElementRefs.current.forEach((el, index) => {
      if (el && floatingElementStyles[index]) {
        const style = floatingElementStyles[index];
        el.style.transform = `translate(${mousePosition.x * style.randomTranslateX}px, ${mousePosition.y * style.randomTranslateY}px) rotate(${mousePosition.x * style.randomRotate}deg)`;
      }
    });

    // Update other layered background elements
    if (complexGridRef.current) {
      complexGridRef.current.style.transform = `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px) rotate(${mousePosition.x * 0.01}deg)`;
    }
    if (hexagonalPatternRef.current) {
      hexagonalPatternRef.current.style.transform = `translate(${mousePosition.x * -0.04}px, ${mousePosition.y * -0.04}px) scale(${1 + mousePosition.x * 0.0001})`;
    }
    if (interactiveLayerRef.current) {
      interactiveLayerRef.current.style.transform = `translate(${mousePosition.x * 0.06}px, ${mousePosition.y * 0.06}px) rotate(${mousePosition.x * 0.02}deg)`;
    }
  }, [mousePosition, floatingElementStyles]); // Dependencies: mousePosition, and floatingElementStyles (for multipliers)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="gilroy-font">
      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
        }}
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-gradient-to-b from-black via-black/80 to-blue-950/80 backdrop-blur-sm overflow-hidden flex items-center justify-center py-10 lg:py-20"
        onMouseMove={handleMouseMove}
      >
        {/* Radial gradient overlay for darker center */}
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, transparent 70%)' }} />

        {/* Ultra Dense Interactive Background */}
        <div className="absolute inset-0">
          {/* Complex Multi-layered Grid System */}
          <div 
            className="absolute inset-0 opacity-40 complex-grid"
            ref={complexGridRef}
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.9) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.7) 1px, transparent 1px),
                radial-gradient(circle at 50% 10%, rgba(6, 182, 212, 0.8) 1px, transparent 1px),
                radial-gradient(circle at 10% 90%, rgba(236, 72, 153, 0.6) 1px, transparent 1px),
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(45deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(236, 72, 153, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 75px 75px, 100px 100px, 125px 125px, 60px 60px, 60px 60px, 40px 40px, 40px 40px',
              // transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px) rotate(${mousePosition.x * 0.01}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
          
          {/* Intense gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-950/80 to-cyan-950/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/70 via-blue-950/60 to-blue-950/80" />
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-950/65 via-transparent to-emerald-950/60" />
          
          {/* Dynamic hexagonal pattern with cursor interaction */}
          <div 
            className="absolute inset-0 opacity-10 hexagonal-pattern"
            ref={hexagonalPatternRef}
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2) 2px, transparent 2px),
                radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.2) 2px, transparent 2px),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px, 100px 100px, 70px 70px, 90px 90px, 120px 120px',
              // transform: `translate(${mousePosition.x * -0.04}px, ${mousePosition.y * -0.04}px) scale(${1 + mousePosition.x * 0.0001})`,
              transition: 'transform 0.1s ease-out',
            }}
          />

          {/* Additional interactive layer */}
          <div 
            className="absolute inset-0 opacity-2 interactive-layer"
            ref={interactiveLayerRef}
            style={{
              backgroundImage: `
                conic-gradient(from 0deg at 30% 30%, rgba(59, 130, 246, 0.05), transparent 50%, rgba(59, 130, 246, 0.05)),
                conic-gradient(from 180deg at 70% 70%, rgba(6, 182, 212, 0.05), transparent 50%, rgba(6, 182, 212, 0.05))
              `,
              backgroundSize: '200px 200px, 250px 250px',
              // transform: `translate(${mousePosition.x * 0.06}px, ${mousePosition.y * 0.06}px) rotate(${mousePosition.x * 0.02}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>

        {/* Dense Network Animation */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1d4ed8" stopOpacity="1" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Many more dynamic connecting lines */}
            <line x1="5%" y1="10%" x2="25%" y2="30%" stroke="url(#lineGradient1)" strokeWidth="2" className="animate-pulse" />
            <line x1="75%" y1="20%" x2="95%" y2="50%" stroke="url(#lineGradient2)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="15%" y1="60%" x2="45%" y2="85%" stroke="url(#lineGradient1)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="60%" y1="15%" x2="85%" y2="75%" stroke="url(#lineGradient2)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <line x1="30%" y1="5%" x2="70%" y2="40%" stroke="url(#lineGradient1)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <line x1="10%" y1="40%" x2="90%" y2="20%" stroke="url(#lineGradient2)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
            <line x1="50%" y1="90%" x2="20%" y2="30%" stroke="url(#lineGradient1)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '3s' }} />
            <line x1="80%" y1="60%" x2="40%" y2="10%" stroke="url(#lineGradient2)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            
            {/* Network nodes with varied sizes */}
            <circle cx="5%" cy="10%" r="4" fill="#3b82f6" className="animate-pulse" />
            <circle cx="25%" cy="30%" r="3" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="75%" cy="20%" r="5" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="95%" cy="50%" r="3" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="15%" cy="60%" r="4" fill="#22c55e" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <circle cx="45%" cy="85%" r="2" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
            <circle cx="60%" cy="15%" r="4" fill="#ef4444" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="85%" cy="75%" r="3" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
          </svg>
        </div>

        {/* Massive Amount of Floating Elements */}
        <div className="absolute inset-0">
          {floatingElementStyles.map((style, index) => (
            <div
              key={index}
              ref={el => {
                floatingElementRefs.current[index] = el;
              }}
              className="absolute opacity-60"
              style={{
                ...style,
                transition: 'transform 0.1s ease-out',
              }}
            />
          ))}
        </div>

        {/* Multiple Intense Ambient Light Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl animate-pulse"
            style={{
              top: '10%',
              left: '15%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          />
          <div 
            className="absolute w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-3xl animate-pulse"
            style={{
              bottom: '20%',
              right: '10%',
              animationDelay: '1s',
              transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            }}
          />
          <div 
            className="absolute w-[500px] h-[500px] bg-cyan-800/2 rounded-full blur-3xl animate-pulse"
            style={{
              top: '40%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              animationDelay: '2s',
            }}
          />
          <div 
            className="absolute w-[250px] h-[250px] bg-blue-700/5 rounded-full blur-3xl animate-pulse"
            style={{
              top: '60%',
              left: '20%',
              animationDelay: '3s',
              transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`,
            }}
          />
          <div 
            className="absolute w-[350px] h-[350px] bg-emerald-800/2 rounded-full blur-3xl animate-pulse"
            style={{
              top: '20%',
              right: '30%',
              animationDelay: '4s',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            }}
          />
        </div>

        {/* Trusted by bubble - now responsive */}
        <div className="absolute z-20 top-20 left-1/2 transform -translate-x-1/2 md:top-4">
          <div className="inline-flex items-center space-x-2 px-4 lg:px-6 py-2 lg:py-3 bg-slate-800/90 backdrop-blur-md rounded-full border border-blue-500/40 shadow-2xl text-white text-xs lg:text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-blue-400/60">
            <div className="flex -space-x-2 overflow-hidden">
              <Image className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-slate-800" src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="Partner 1" width={32} height={32} />
              <Image className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-slate-800" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="Partner 2" width={32} height={32} />
              <Image className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-slate-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Partner 3" width={32} height={32} />
            </div>
            <span className="hidden sm:inline">Trusted by diverse software partners</span>
            <span className="sm:hidden">Trusted by 500+</span>
          </div>
        </div>

        {/* Main Content Container - Responsive */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center pt-24 lg:pt-0">
          {/* Main Heading - Responsive */}
          <div className="mb-8 lg:mb-16">
            <h1 
              className={`font-black mb-4 lg:mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                fontWeight: 900, 
                fontSize: 'clamp(32px, 8vw, 72px)', 
                lineHeight: 'clamp(40px, 10vw, 99px)', 
                color: 'rgb(255, 255, 255)' 
              }}
            >
              <span className="block text-white mb-2 lg:mb-4 tracking-tight">LET&apos;S</span>
              <span 
                className="block bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-extrabold tracking-tight"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 4s ease-in-out infinite',
                }}
              >
                TALK AI
              </span>
            </h1>

            {/* Enhanced Subtitle - Responsive */}
            <p 
              className={`mb-8 lg:mb-12 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                fontWeight: 500, 
                fontSize: 'clamp(16px, 3vw, 20px)', 
                lineHeight: 'clamp(24px, 4vw, 33px)', 
                color: 'oklch(0.872 0.01 258.338)' 
              }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Transform your enterprise with cutting-edge artificial intelligence solutions</span>. 
              From <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">machine learning</span> to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">natural language processing</span>, we deliver <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">scalable AI innovations</span> 
              that drive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">measurable business outcomes</span> and <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">revolutionary digital transformation</span>.
            </p>

            {/* Professional CTA Buttons - Responsive */}
            <div 
              className={`flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mb-12 lg:mb-20 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button className="group relative px-8 lg:px-12 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base lg:text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-500/20">
                <span className="relative z-10 tracking-wide">Start Your AI Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group relative px-8 lg:px-12 py-4 lg:py-5 border-2 border-blue-500/50 text-blue-300 text-base lg:text-lg font-bold rounded-xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-950/30 hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm">
                <span className="relative z-10 tracking-wide">Explore AI Solutions</span>
              </button>
            </div>
          </div>

          {/* Professional Stats - Responsive */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { number: '50+', label: 'Enterprise Projects' },
              { number: '95%', label: 'Client Success Rate' },
              { number: '24/7', label: 'AI-Powered Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-6 group-hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-blue-200 transition-all duration-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs lg:text-sm uppercase tracking-wider font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Professional Footer */}
        <div className="absolute bottom-0 left-0 w-full h-32 lg:h-40 bg-gradient-to-t from-black/100 via-slate-950/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-100" />
      </section>
    </div>
  );
};

export default LetsTalkAIHero;