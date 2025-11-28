"use client";

import React, { useEffect, useRef } from "react";

const HeroProj: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Orb[] = [];

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
        this.radius = Math.random() * 150 + 80;
        this.opacity = Math.random() * 0.15 + 0.05;
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
        gradient.addColorStop(0.5, `rgba(37, 99, 235, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(30, 58, 138, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const waves = [
      new Wave((canvas?.height || 0) * 0.6, 0.02, 30, 0.005, 'rgba(14, 165, 233, 0.03)'),
      new Wave((canvas?.height || 0) * 0.65, 0.015, 40, 0.004, 'rgba(37, 99, 235, 0.04)'),
      new Wave((canvas?.height || 0) * 0.7, 0.01, 50, 0.003, 'rgba(30, 58, 138, 0.05)')
    ];

    for (let i = 0; i < 5; i++) {
      particles.push(new Orb());
    }

    const animate = () => {
      if (!canvas || !ctx) return;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#020617');
      gradient.addColorStop(1, '#0c1739');
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(135deg, #020617 0%, #0c1739 100%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/30 bg-sky-400/5 px-5 py-2.5 backdrop-blur-sm">
              <div className="relative">
                <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                <div className="absolute inset-0 h-2 w-2 rounded-full bg-sky-400 animate-ping" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                Featured Projects
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Building the
                <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mt-2">
                  Future of Web
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                Transforming ideas into powerful digital solutions. Explore our collection 
                of innovative projects that push the boundaries of modern web development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-500/30 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button className="px-8 py-4 border-2 border-sky-400/40 text-sky-400 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-sky-400/10 hover:border-sky-400 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-4">
            <div className="group relative rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-sm p-6 hover:bg-slate-900/60 transition-all duration-500 hover:border-sky-400/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-500/20 border border-sky-400/30">
                    <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Lightning Fast</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Optimized performance with cutting-edge technologies for blazing fast load times
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-sm p-6 hover:bg-slate-900/60 transition-all duration-500 hover:border-sky-400/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-500/20 border border-sky-400/30">
                    <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Pixel Perfect</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Meticulous attention to design details ensuring stunning visual experiences
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-sm p-6 hover:bg-slate-900/60 transition-all duration-500 hover:border-sky-400/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-500/20 border border-sky-400/30">
                    <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Fully Responsive</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Seamless experience across all devices from mobile to desktop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-sky-400 opacity-60"
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
    </section>
  );
};

export default HeroProj;