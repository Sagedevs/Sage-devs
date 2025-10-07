import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
interface MousePosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

const AgencyCaseStudyHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Canvas context is accessed directly in the effects

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      if (!canvas || !container) return;
      
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
    };

    // Smooth mouse tracking
    const updateMouse = (): void => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;
    };

    // Create flowing energy waves
    const drawEnergyWaves = (time: number): void => {
      const canvasRect = canvas.getBoundingClientRect();
      const centerX = canvasRect.width / 2;
      const centerY = canvasRect.height / 2;
      
      // Multiple overlapping waves with different frequencies
      for (let i = 0; i < 4; i++) {
        const waveRadius = 180 + i * 70;
        const waveSpeed = 0.001 + i * 0.0004;
        const waveOffset = i * Math.PI * 0.4;
        
        const gradient = ctx.createRadialGradient(
          centerX, centerY, waveRadius - 40,
          centerX, centerY, waveRadius + 40
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${0.015 + Math.sin(time * waveSpeed + waveOffset) * 0.008})`);
        gradient.addColorStop(0.5, `rgba(147, 197, 253, ${0.06 + Math.sin(time * waveSpeed + waveOffset) * 0.025})`);
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, waveRadius + Math.sin(time * waveSpeed + waveOffset) * 25, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Floating geometric shapes
    const drawFloatingElements = (time: number): void => {
      const canvasRect = canvas.getBoundingClientRect();
      const shapes = [
        { x: 0.15, y: 0.25, size: 35, rotation: time * 0.0006, opacity: 0.35 },
        { x: 0.85, y: 0.2, size: 22, rotation: -time * 0.0008, opacity: 0.25 },
        { x: 0.08, y: 0.75, size: 28, rotation: time * 0.0005, opacity: 0.3 },
        { x: 0.92, y: 0.8, size: 18, rotation: -time * 0.001, opacity: 0.2 },
        { x: 0.12, y: 0.12, size: 25, rotation: time * 0.0007, opacity: 0.28 }
      ];

      shapes.forEach((shape) => {
        const x = shape.x * canvasRect.width;
        const y = shape.y * canvasRect.height;
        
        // Mouse interaction effect
        const mouseDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - x, 2) + Math.pow(mouseRef.current.y - y, 2)
        );
        const mouseInfluence = Math.max(0, 1 - mouseDistance / 150);
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(shape.rotation + mouseInfluence * 0.3);
        ctx.globalAlpha = shape.opacity + mouseInfluence * 0.2;
        
        // Hexagon shape
        const size = shape.size + mouseInfluence * 8;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        
        ctx.strokeStyle = `rgba(96, 165, 250, ${0.5 + mouseInfluence * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.fillStyle = `rgba(59, 130, 246, ${0.04 + mouseInfluence * 0.06})`;
        ctx.fill();
        
        ctx.restore();
      });
    };

    // Dynamic fluid mesh grid
    const drawMeshGrid = (time: number): void => {
      const canvasRect = canvas.getBoundingClientRect();
      const gridSize = 50;
      const cols = Math.ceil(canvasRect.width / gridSize) + 2;
      const rows = Math.ceil(canvasRect.height / gridSize) + 2;
      
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.04)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize - (time * 0.015) % gridSize;
        
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          const y = j * gridSize;
          const wave = Math.sin((x + y) * 0.008 + time * 0.0008) * 12;
          const mouseDistanceInfluence = Math.max(0, 1 - Math.abs(mouseRef.current.x - x) / 80);
          const finalX = x + wave + mouseDistanceInfluence * 8;
          
          if (j === 0) ctx.moveTo(finalX, y);
          else ctx.lineTo(finalX, y);
        }
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let j = 0; j < rows; j++) {
        const y = j * gridSize;
        
        ctx.beginPath();
        for (let i = 0; i <= cols; i++) {
          const x = i * gridSize - (time * 0.015) % gridSize;
          const wave = Math.sin((x + y) * 0.008 + time * 0.0008) * 12;
          const mouseDistanceInfluence = Math.max(0, 1 - Math.abs(mouseRef.current.y - y) / 80);
          const finalY = y + wave + mouseDistanceInfluence * 8;
          
          if (i === 0) ctx.moveTo(x, finalY);
          else ctx.lineTo(x, finalY);
        }
        ctx.stroke();
      }
    };

    // Cursor-following energy orb
    const drawCursorOrb = (): void => {
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 100
      );
      gradient.addColorStop(0, 'rgba(147, 197, 253, 0.12)');
      gradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.06)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 100, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = (): void => {
      timeRef.current += 16;
      const time = timeRef.current;
      
      const canvasRect = canvas.getBoundingClientRect();
      
      // Clear canvas with gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvasRect.height);
      bgGradient.addColorStop(0, '#0a0f1c');
      bgGradient.addColorStop(0.5, '#0f172a');
      bgGradient.addColorStop(1, '#1e293b');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvasRect.width, canvasRect.height);
      
      updateMouse();
      drawMeshGrid(time);
      drawEnergyWaves(time);
      drawFloatingElements(time);
      drawCursorOrb();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent): void => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const handleResize = (): void => {
      resizeCanvas();
    };

    // Initialize
    resizeCanvas();
    const rect = container.getBoundingClientRect();
    mouseRef.current.x = rect.width / 2;
    mouseRef.current.y = rect.height / 2;
    mouseRef.current.targetX = rect.width / 2;
    mouseRef.current.targetY = rect.height / 2;
    
    animate();
    
    // Delay load animation
    setTimeout(() => setIsLoaded(true), 100);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Canvas Background - Contained to Section */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Professional Badge */}
          <div className={`inline-flex items-center px-8 py-4 mb-16 rounded-full bg-gradient-to-r from-blue-600/15 to-indigo-600/15 border border-blue-400/30 backdrop-blur-xl transition-all duration-1200 ease-out ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="relative">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-blue-200 text-sm font-semibold tracking-wider ml-4 uppercase">
              Portfolio Excellence
            </span>
          </div>
          
          {/* Main Headline with Advanced Typography */}
          <div className="mb-12">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 transition-all duration-1000 delay-200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="block text-white leading-[0.85] tracking-tight">
                Case Studies
              </span>
            </h1>
            <div className={`text-3xl md:text-5xl lg:text-6xl font-light transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Driving Measurable Results
              </span>
            </div>
          </div>
          
          {/* Professional Subtitle */}
          <p className={`text-lg md:text-xl lg:text-2xl text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-600 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Explore how we&apos;ve partnered with industry leaders to deliver{' '}
            <span className="text-blue-300 font-medium">transformative digital solutions</span>
            <br />
            that exceed expectations and drive sustained competitive advantage
          </p>
          
          {/* Professional Case Study Previews */}
          <div className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 delay-800 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Enterprise E-Commerce */}
              <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/4 border border-white/15 hover:border-blue-400/30 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-xs font-bold text-blue-300 tracking-[0.2em] uppercase">Enterprise E-Commerce</div>
                    <div className="px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20">
                      <span className="text-green-300 text-xs font-semibold">Active</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                    Fortune 500 Retail Platform
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                    Architected a scalable omnichannel platform that unified online and offline operations for a global retail leader.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Revenue Growth</span>
                      <span className="text-white font-semibold">+284%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Performance Improvement</span>
                      <span className="text-white font-semibold">65% faster</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Global Markets</span>
                      <span className="text-white font-semibold">23 countries</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Financial Technology */}
              <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/4 border border-white/15 hover:border-green-400/30 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-transparent to-emerald-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-xs font-bold text-green-300 tracking-[0.2em] uppercase">Financial Technology</div>
                    <div className="px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20">
                      <span className="text-blue-300 text-xs font-semibold">Deployed</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors duration-300">
                    Next-Gen Banking Core
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                    Developed a cloud-native banking platform with advanced security protocols and real-time transaction processing.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Transaction Volume</span>
                      <span className="text-white font-semibold">$2.8B+ processed</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white font-semibold">{"<"} 45ms avg</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Security Incidents</span>
                      <span className="text-white font-semibold">Zero breaches</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* AI & Machine Learning */}
              <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/4 border border-white/15 hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-xs font-bold text-purple-300 tracking-[0.2em] uppercase">AI & Machine Learning</div>
                    <div className="px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20">
                      <span className="text-purple-300 text-xs font-semibold">Scaling</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    Industrial AI Platform
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                    Built an intelligent manufacturing optimization system using computer vision and predictive analytics.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Efficiency Gains</span>
                      <span className="text-white font-semibold">+34% productivity</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Defect Reduction</span>
                      <span className="text-white font-semibold">99.96% accuracy</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Cost Savings</span>
                      <span className="text-white font-semibold">$18M annually</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
          
          {/* Professional CTA Section */}
          <div className={`flex flex-col items-center space-y-8 transition-all duration-1000 delay-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Link href="/contact" passHref>
    <a className="group relative px-12 py-4 border-2 border-blue-400/40 text-white font-semibold text-lg rounded-xl backdrop-blur-xl transition-all duration-500 hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-indigo-500/10 hover:scale-105 overflow-hidden">
      <span className="relative z-10 flex items-center">
        <svg
          className="w-5 h-5 mr-3 transition-transform group-hover:rotate-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Contact Now
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </a>
  </Link>
            
            <p style={{color: "#1F2C43"}}>hy</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyCaseStudyHero;