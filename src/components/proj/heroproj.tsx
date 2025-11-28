"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

const HeroProj: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Orb[] = [];

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Wave {
      y: number;
      speed: number;
      amplitude: number;
      frequency: number;
      color: string;
      offset: number;

      constructor(y: number, speed: number, amplitude: number, frequency: number, color: string) {
        this.y = y;
        this.speed = speed;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.color = color;
        this.offset = 0;
      }

      update() {
        this.offset += this.speed;
      }

      draw() {
        if (!canvas || !ctx) return;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
          const y = this.y + Math.sin(x * this.frequency + this.offset) * this.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    class Orb {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 120 + 60;
        this.opacity = Math.random() * 0.1 + 0.03;
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.radius || this.x > canvas.width + this.radius) this.vx *= -1;
        if (this.y < -this.radius || this.y > canvas.height + this.radius) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `rgba(14, 165, 233, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(37, 99, 235, ${this.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(30, 58, 138, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const waves = [
      new Wave((canvas?.height || 0) * 0.7, 0.02, 25, 0.004, 'rgba(14, 165, 233, 0.02)'),
      new Wave((canvas?.height || 0) * 0.75, 0.015, 35, 0.003, 'rgba(37, 99, 235, 0.03)'),
      new Wave((canvas?.height || 0) * 0.8, 0.01, 45, 0.002, 'rgba(30, 58, 138, 0.04)')
    ];

    for (let i = 0; i < 4; i++) {
      particles.push(new Orb());
    }

    const animate = () => {
      if (!canvas || !ctx) return;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#020617');
      gradient.addColorStop(0.7, '#0c1739');
      gradient.addColorStop(1, '#1e293b');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((orb) => {
        orb.update();
        orb.draw();
      });

      waves.forEach((wave) => {
        wave.update();
        wave.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] py-8 md:py-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-950/60 to-slate-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Enhanced Left Content - HEADING & BUTTONS FIRST on mobile */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 md:px-6 md:py-3 backdrop-blur-xl shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 transition-all duration-300 hover:scale-105 mx-auto lg:mx-0">
              <div className="relative flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                <div className="absolute inset-0 h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                  Featured Projects
                </span>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Larger Mobile Headings */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
  Crafting Digital
  <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mt-3 md:mt-4 animate-gradient">
    Excellence
  </span>
</h1>


              {/* Larger Mobile Description */}
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Where innovation meets execution. Discover our portfolio of cutting-edge 
                web solutions that transform businesses and elevate user experiences to new heights.
              </p>
            </div>

            {/* Inline Buttons - Always in row layout */}
            <div className="flex flex-row gap-3 md:gap-4 pt-2 justify-center lg:justify-start">
              <a 
                href="mailto:info@sagedevs.tech"
                className="group relative px-5 py-3 md:px-8 md:py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:from-sky-600 hover:to-blue-700 hover:shadow-2xl hover:shadow-sky-500/30 hover:scale-105 text-center flex-1 sm:flex-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                  Contact Us
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>

              <Link 
                href="/case-studies"
                className="group px-5 py-3 md:px-8 md:py-4 border-2 border-sky-400/40 text-sky-400 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-sky-400/10 hover:border-sky-400 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20 text-center flex-1 sm:flex-none"
              >
                <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                  View Case Studies
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Enhanced Right Content - Feature Cards SECOND on mobile */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="group relative rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-xl p-4 md:p-6 transition-all duration-500 hover:bg-slate-900/60 hover:border-sky-400/40 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-xl bg-sky-500/20 border border-sky-400/30 group-hover:bg-sky-500/30 transition-colors duration-300">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Lightning Fast</h3>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mt-1 md:mt-2"></div>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                  Optimized performance with cutting-edge technologies for blazing fast load times and seamless user interactions across all platforms.
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-xl p-4 md:p-6 transition-all duration-500 hover:bg-slate-900/60 hover:border-sky-400/40 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-xl bg-sky-500/20 border border-sky-400/30 group-hover:bg-sky-500/30 transition-colors duration-300">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Pixel Perfect</h3>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mt-1 md:mt-2"></div>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                  Meticulous attention to design details ensuring stunning visual experiences that captivate users and reflect brand excellence.
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-xl p-4 md:p-6 transition-all duration-500 hover:bg-slate-900/60 hover:border-sky-400/40 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-xl bg-sky-500/20 border border-sky-400/30 group-hover:bg-sky-500/30 transition-colors duration-300">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Fully Responsive</h3>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mt-1 md:mt-2"></div>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                  Seamless experience across all devices from mobile to desktop with adaptive layouts and intuitive interactions for every screen size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <span className="text-xs text-sky-400/60 font-medium tracking-wider">EXPLORE</span>
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-sky-400/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroProj;