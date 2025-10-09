"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      // GSAP Animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(statsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      );

      // Hover animations for stat cards
      const statCards = document.querySelectorAll('.stat-card');
      statCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      });
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parentElement = canvas.parentElement;
    if (!parentElement) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = parentElement.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced Particle system with darker theme
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
      
      // Canvas dimensions
      private readonly canvasWidth: number;
      private readonly canvasHeight: number;
      
      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.hue = Math.random() * 60 + 200; // Blue range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (!ctx) return;
        
        try {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
          
          // Add glow effect
          ctx.shadowBlur = 20;
          ctx.shadowColor = `hsla(${this.hue}, 70%, 60%, 0.5)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        } catch (error) {
          console.error('Error drawing particle:', error);
        }
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };
    
    initParticles();

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      try {
        // Dark background with subtle gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#0a0a0a');
        gradient.addColorStop(0.5, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw(ctx);
        });

        // Draw connections between particles
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - distance / 600})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });
        });
      } catch (error) {
        console.error('Error in animation loop:', error);
        return;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Dark Animated Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full"
      />
      
      {/* Content with completely new design */}
      <div className="relative z-30 container mx-auto px-8 md:px-12 lg:px-16 text-center py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Hexagonal Badge */}
          <div ref={badgeRef} className="relative inline-block mb-8 opacity-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border-2 border-blue-500/30 rounded-full px-8 py-3 text-blue-300 font-bold text-sm tracking-wider">
                <span className="relative z-10 flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  PREMIUM RESOURCE CENTER
                </span>
              </div>
            </div>
          </div>
          
          {/* Creative Split Typography */}
          <div ref={titleRef} className="mb-10 opacity-0">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-4">
                <span className="block">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    DIGITAL
                  </span>
                </span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    ARSENAL
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </span>
              </h1>
            </div>
          </div>
          
          {/* Interactive Description */}
          <div ref={descRef} className="mb-12 opacity-0">
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-6">
              Dominate your industry with our battle-tested collection of 
              <span className="relative inline-block mx-2 group cursor-pointer">
                <span className="text-blue-400 font-bold group-hover:text-white transition-colors duration-300">strategic resources</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
              </span>
              and exclusive insights
            </p>
          </div>
          
          {/* Floating Action Cards */}
          <div ref={buttonsRef} className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16 opacity-0">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Link href="/resources" className="relative bg-black/50 backdrop-blur-xl border border-blue-500/30 px-12 py-5 text-white font-bold rounded-2xl hover:bg-blue-600/20 transition-all duration-300 flex items-center space-x-3">
                <span>Browse Resources</span>
                <div className="w-5 h-5 border-t-2 border-r-2 border-white rotate-45"></div>
              </Link>
            </div>
            
            <div className="group relative">
              <Link href="/contact" className="relative bg-transparent border-2 border-blue-400/50 px-12 py-5 text-blue-300 hover:text-white font-bold rounded-2xl hover:border-blue-300 hover:bg-blue-500/10 backdrop-blur-xl transition-all duration-300 inline-block">
                Get Started Free
              </Link>
            </div>
          </div>
          
          {/* Innovative Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 opacity-0">
            {[
              { number: "2.5K+", label: "Battle-Tested Tools", color: "from-blue-500 to-cyan-400" },
              { number: "500K+", label: "Elite Members", color: "from-purple-500 to-pink-400" },
              { number: "24/7", label: "Expert Access", color: "from-green-500 to-emerald-400" },
              { number: "99.9%", label: "Success Rate", color: "from-orange-500 to-red-400" }
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer stat-card">
                <div className="relative bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500">
                  <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${stat.color} rounded-t-2xl`}></div>
                  <div className="text-center">
                    <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-ping opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-5 w-12 h-12 bg-cyan-500/10 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-gray-900/50 to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection;