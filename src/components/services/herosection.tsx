"use client";
import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let time = 0;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      if (!canvas) return;
      particles = [];
      // Reduced particle count for better performance
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Reduced velocity
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5, // Smaller particles
          opacity: Math.random() * 0.3 + 0.1, // Lower opacity
          hue: 220 + Math.random() * 40
        });
      }
    };

    const drawBackground = () => {
      if (!canvas || !ctx) return;
      
      // Simpler gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(0.5, '#1e293b');
      gradient.addColorStop(1, '#020617');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Simplified single wave animation
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      for (let x = 0; x <= canvas.width; x += 20) { // Increased step for better performance
        const y = canvas.height - 80 + 
          Math.sin((x * 0.005) + (time * 0.01)) * 40;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      
      const waveGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      waveGradient.addColorStop(0, 'hsla(220, 70%, 50%, 0.08)');
      waveGradient.addColorStop(1, 'hsla(220, 70%, 30%, 0.03)');
      
      ctx.fillStyle = waveGradient;
      ctx.fill();
    };

    const drawParticles = () => {
      if (!ctx) return;
      
      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Simplified mouse interaction
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) { // Reduced interaction range
          const force = (80 - distance) / 80;
          particle.vx += dx * force * 0.0005; // Reduced force
          particle.vy += dy * force * 0.0005;
        }

        // Wrap around screen
        if (!canvas) return;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with simplified glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = `hsl(${particle.hue}, 60%, 60%)`;
        ctx.shadowBlur = 8; // Reduced blur for performance
        ctx.shadowColor = `hsl(${particle.hue}, 60%, 60%)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Optimized connections - only draw for nearby particles
      particles.forEach((particle, i) => {
        if (i % 2 !== 0) return; // Draw connections for every other particle
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) { // Reduced connection distance
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2; // Lower opacity
            ctx.strokeStyle = `hsl(${(particle.hue + otherParticle.hue) / 2}, 40%, 50%)`;
            ctx.lineWidth = 0.5; // Thinner lines
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      time += 0.5; // Slower time progression
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawBackground();
      drawParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    resizeCanvas();
    createParticles();
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Optimized Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full"
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Professional Status Badge */}
        <div className={`group relative mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-md animate-pulse"></div>
            <div className="relative px-8 py-4 bg-black/70 border border-blue-400/40 rounded-full backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent -skew-x-12 animate-pulse"></div>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                </div>
                <span className="text-blue-200 text-sm font-mono tracking-[0.15em] font-medium">SAGE_SERVICES://ONLINE</span>
                <div className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Typography with Proper Line Height */}
        <div className={`relative mb-16 transition-all duration-1500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6" style={{ lineHeight: '0.9' }}>
              <div className="relative mb-3">
                <span className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text blur-sm scale-110">
                  OUR
                </span>
                <span className="relative text-white drop-shadow-2xl">
                  OUR
                </span>
              </div>
              <div className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
                  SERVICES
                </span>
              </div>
            </h1>
          </div>
        </div>

        {/* Enhanced Services Description */}
        <div className={`mb-20 transition-all duration-1500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <p className="text-xl md:text-2xl font-mono text-green-400 mb-6 tracking-wide">
              {'>'} TRANSFORMING_BUSINESSES_DIGITALLY
            </p>
            <div className="text-base md:text-xl text-blue-100 max-w-4xl leading-relaxed font-light">
              We specialize in delivering{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent font-semibold">enterprise-grade solutions</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-blue-200 animate-pulse"></div>
              </span>
              {' '}that accelerate{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">digital transformation</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse delay-300"></div>
              </span>
              {' '}and drive{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">measurable results</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse delay-600"></div>
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`mb-20 transition-all duration-1500 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
            {[
              { 
                code: "WEB_DEV", 
                name: "Web Development", 
                status: "CRAFTING",
                color: "from-green-400 to-emerald-500",
                desc: "Custom Websites & Apps"
              },
              { 
                code: "SAAS_DEV", 
                name: "SaaS Development", 
                status: "SCALING",
                color: "from-blue-400 to-cyan-500",
                desc: "End-to-End Platforms"
              },
              { 
                code: "ECOMMERCE", 
                name: "E-commerce Solutions", 
                status: "SELLING",
                color: "from-purple-400 to-violet-500",
                desc: "Online Store Mastery"
              },
              { 
                code: "CLOUD_OPS", 
                name: "Cloud & DevOps", 
                status: "OPTIMIZING",
                color: "from-orange-400 to-red-500",
                desc: "Infrastructure Excellence"
              },
              { 
                code: "CMS_DEV", 
                name: "CMS Development", 
                status: "MANAGING",
                color: "from-pink-400 to-rose-500",
                desc: "WordPress & Beyond"
              },
              { 
                code: "AI_INTEGRATION", 
                name: "AI Integration", 
                status: "EVOLVING",
                color: "from-yellow-400 to-amber-500",
                desc: "Smart Automation"
              },
            ].map((service, _index) => (
              <div
                key={service.code}
                className="group relative overflow-hidden rounded-2xl bg-black/70 border border-white/20 hover:border-blue-400/50 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-gray-400 tracking-wider">{service.code}</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} animate-pulse`}></div>
                      <span className="text-xs font-mono text-gray-300">{service.status}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">
                    {service.desc}
                  </p>
                  <div className="text-xs text-gray-500 font-mono group-hover:text-green-400 transition-colors duration-500">
                    <span className="md:group-hover:hidden">{Math.floor(Math.random() * 20 + 80)}% SUCCESS RATE</span>
                    <span className="hidden md:group-hover:inline max-md:hidden">100% SUCCESS RATE</span>
                    <span className="md:hidden">100% SUCCESS RATE</span>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Scanning line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional CTA */}
        <div className={`mb-24 transition-all duration-1500 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <button className="group relative overflow-hidden px-12 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl font-semibold text-lg text-black transition-all duration-500 hover:scale-105 shadow-2xl shadow-blue-500/25">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            <button className="group relative overflow-hidden px-12 py-4 bg-black/70 border-2 border-white/30 hover:border-cyan-400 rounded-xl font-semibold text-lg text-white transition-all duration-500 hover:scale-105 backdrop-blur-xl">
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </button>
          </div>
        </div>

        {/* Updated Professional Metrics */}
        <div className={`w-full max-w-6xl transition-all duration-1500 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 rounded-3xl blur-xl"></div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-black/70 border border-white/20 rounded-3xl backdrop-blur-xl">
              {[
                { 
                  metric: "400+", 
                  label: "PROJECTS_DELIVERED", 
                  icon: "▲", 
                  status: "COMPLETED",
                  color: "text-green-400"
                },
                { 
                  metric: "5+", 
                  label: "YEARS_EXPERIENCE", 
                  icon: "◆", 
                  status: "EXPERT",
                  color: "text-blue-400"
                },
                { 
                  metric: "98%", 
                  label: "CLIENT_SATISFACTION", 
                  icon: "●", 
                  status: "EXCELLENT",
                  color: "text-cyan-400"
                },
                { 
                  metric: "24/7", 
                  label: "SUPPORT_AVAILABLE", 
                  icon: "◉", 
                  status: "ACTIVE",
                  color: "text-white"
                }
              ].map((stat, index) => (
                <div key={index} className="group text-center space-y-3">
                  <div className="relative">
                    <div className={`text-xl ${stat.color} animate-pulse font-mono`}>{stat.icon}</div>
                  </div>
                  <div className={`text-3xl md:text-4xl font-black font-mono ${stat.color} group-hover:text-white transition-colors duration-500`}>
                    {stat.metric}
                  </div>
                  <div className="text-xs text-gray-400 font-mono tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    [{stat.status}]
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;