import React, { useEffect, useRef, useState, useCallback } from 'react';

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

  const getCanvasContext = useCallback((): CanvasRenderingContext2D | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext('2d');
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      if (!canvas) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    // Smooth mouse tracking
    const updateMouse = (): void => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;
    };

    // Create flowing energy waves
    const drawEnergyWaves = (time: number): void => {
      const centerX = canvas.width / (window.devicePixelRatio || 1) / 2;
      const centerY = canvas.height / (window.devicePixelRatio || 1) / 2;
      
      // Multiple overlapping waves with different frequencies
      for (let i = 0; i < 5; i++) {
        const waveRadius = 200 + i * 80;
        const waveSpeed = 0.001 + i * 0.0005;
        const waveOffset = i * Math.PI * 0.4;
        
        const gradient = ctx.createRadialGradient(
          centerX, centerY, waveRadius - 50,
          centerX, centerY, waveRadius + 50
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${0.02 + Math.sin(time * waveSpeed + waveOffset) * 0.01})`);
        gradient.addColorStop(0.5, `rgba(147, 197, 253, ${0.08 + Math.sin(time * waveSpeed + waveOffset) * 0.03})`);
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, waveRadius + Math.sin(time * waveSpeed + waveOffset) * 30, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Floating geometric shapes
    const drawFloatingElements = (time: number): void => {
      const shapes = [
        { x: 0.2, y: 0.3, size: 40, rotation: time * 0.0008, opacity: 0.4 },
        { x: 0.8, y: 0.2, size: 25, rotation: -time * 0.001, opacity: 0.3 },
        { x: 0.1, y: 0.7, size: 35, rotation: time * 0.0006, opacity: 0.35 },
        { x: 0.9, y: 0.8, size: 20, rotation: -time * 0.0012, opacity: 0.25 },
        { x: 0.15, y: 0.15, size: 30, rotation: time * 0.0009, opacity: 0.3 },
        { x: 0.85, y: 0.6, size: 28, rotation: -time * 0.0007, opacity: 0.35 }
      ];

      shapes.forEach((shape, index) => {
        const x = shape.x * (canvas.width / (window.devicePixelRatio || 1));
        const y = shape.y * (canvas.height / (window.devicePixelRatio || 1));
        
        // Mouse interaction effect
        const mouseDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - x, 2) + Math.pow(mouseRef.current.y - y, 2)
        );
        const mouseInfluence = Math.max(0, 1 - mouseDistance / 200);
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(shape.rotation + mouseInfluence * 0.5);
        ctx.globalAlpha = shape.opacity + mouseInfluence * 0.3;
        
        // Hexagon shape
        const size = shape.size + mouseInfluence * 15;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        
        ctx.strokeStyle = `rgba(96, 165, 250, ${0.6 + mouseInfluence * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        ctx.fillStyle = `rgba(59, 130, 246, ${0.05 + mouseInfluence * 0.1})`;
        ctx.fill();
        
        ctx.restore();
      });
    };

    // Dynamic fluid mesh grid
    const drawMeshGrid = (time: number): void => {
      const gridSize = 60;
      const cols = Math.ceil((canvas.width / (window.devicePixelRatio || 1)) / gridSize) + 2;
      const rows = Math.ceil((canvas.height / (window.devicePixelRatio || 1)) / gridSize) + 2;
      
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.05)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize - (time * 0.02) % gridSize;
        
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          const y = j * gridSize;
          const wave = Math.sin((x + y) * 0.01 + time * 0.001) * 15;
          const mouseDistanceInfluence = Math.max(0, 1 - Math.abs(mouseRef.current.x - x) / 100);
          const finalX = x + wave + mouseDistanceInfluence * 10;
          
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
          const x = i * gridSize - (time * 0.02) % gridSize;
          const wave = Math.sin((x + y) * 0.01 + time * 0.001) * 15;
          const mouseDistanceInfluence = Math.max(0, 1 - Math.abs(mouseRef.current.y - y) / 100);
          const finalY = y + wave + mouseDistanceInfluence * 10;
          
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
        mouseRef.current.x, mouseRef.current.y, 120
      );
      gradient.addColorStop(0, 'rgba(147, 197, 253, 0.15)');
      gradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.08)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 120, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = (): void => {
      timeRef.current += 16;
      const time = timeRef.current;
      
      // Clear canvas with gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height / (window.devicePixelRatio || 1));
      bgGradient.addColorStop(0, '#0a0f1c');
      bgGradient.addColorStop(0.5, '#0f172a');
      bgGradient.addColorStop(1, '#1e293b');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      updateMouse();
      drawMeshGrid(time);
      drawEnergyWaves(time);
      drawFloatingElements(time);
      drawCursorOrb();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent): void => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleResize = (): void => {
      resizeCanvas();
    };

    // Initialize
    resizeCanvas();
    mouseRef.current.x = window.innerWidth / 2;
    mouseRef.current.y = window.innerHeight / 2;
    mouseRef.current.targetX = window.innerWidth / 2;
    mouseRef.current.targetY = window.innerHeight / 2;
    
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Canvas Background - Full Screen */}
      <div className="fixed inset-0 w-full h-full">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Floating Badge */}
          <div className={`inline-flex items-center px-6 py-3 mb-12 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-xl transition-all duration-1200 ease-out ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-blue-200 text-sm font-semibold tracking-wider ml-3 uppercase">
              Client Success Stories
            </span>
          </div>
          
          {/* Main Headline with Advanced Typography */}
          <div className="mb-8">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black mb-4 transition-all duration-1000 delay-200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="block text-white leading-[0.9] tracking-tight">
                Case Studies
              </span>
            </h1>
            <div className={`text-4xl md:text-6xl lg:text-7xl font-light transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                That Define Excellence
              </span>
            </div>
          </div>
          
          {/* Enhanced Subtitle */}
          <p className={`text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-600 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Transforming ambitious visions into{' '}
            <span className="text-blue-300 font-medium">digital masterpieces</span>
            <br />
            that drive unprecedented growth and market dominance
          </p>
          
          {/* Interactive Case Study Previews */}
          <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-800 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Featured Case Study 1 */}
              <div className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-blue-400/40 transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-bold text-blue-300 tracking-wider uppercase">E-Commerce Platform</div>
                    <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                    RevolutionShop
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Transformed a failing retail brand into a $50M+ digital empire with our cutting-edge platform.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                      <span className="text-gray-300">2,847% increase in online sales</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                      <span className="text-gray-300">0.3s average page load time</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                      <span className="text-gray-300">AI-powered personalization</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>

              {/* Featured Case Study 2 */}
              <div className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-blue-400/40 transition-all duration-700 hover:scale-[1.02] hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-bold text-green-300 tracking-wider uppercase">FinTech Solution</div>
                    <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors duration-300">
                    SecureBank Pro
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Built a next-gen banking platform that processes $2B+ in transactions with zero security incidents.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                      <span className="text-gray-300">Military-grade encryption</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                      <span className="text-gray-300">50ms transaction processing</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                      <span className="text-gray-300">1M+ active users</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>

              {/* Featured Case Study 3 */}
              <div className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-blue-400/40 transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-bold text-purple-300 tracking-wider uppercase">AI/ML Platform</div>
                    <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    AI Vision Labs
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Developed breakthrough computer vision technology that revolutionized manufacturing quality control.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                      <span className="text-gray-300">99.97% defect detection rate</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                      <span className="text-gray-300">Real-time processing</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                      <span className="text-gray-300">$12M cost savings/year</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          </div>
          
          {/* Revolutionary CTA Experience */}
          <div className={`flex flex-col items-center space-y-8 mb-16 transition-all duration-1000 delay-1200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
           
            <div className="group relative">
              
              
              {/* Orbital rings around button */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-2xl border border-blue-400/30 animate-pulse"></div>
                <div className="absolute inset-[-4px] rounded-2xl border border-blue-400/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-[-8px] rounded-2xl border border-blue-400/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Secondary CTA with holographic effect */}
            <button className="group relative px-10 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-2xl backdrop-blur-xl transition-all duration-500 hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:scale-105 overflow-hidden">
              
              {/* Holographic scanning line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule Strategy Session
              </span>
            </button>
            
          </div>

          {/* Elite Client Showcase */}
          <div className={`transition-all duration-1000 delay-1400 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm mb-2 tracking-wider uppercase font-semibold">
                Transforming Industry Leaders
              </p>
              <h3 className="text-2xl font-bold text-white mb-8">
                From <span className="text-blue-400">Startups</span> to <span className="text-green-400">Fortune 500</span>
              </h3>
            </div>
            
            {/* Industry Categories with Hover Effects */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'E-Commerce', growth: '+2,847%', icon: '🛒', color: 'blue' },
                { name: 'FinTech', growth: '+1,245%', icon: '💳', color: 'green' },
                { name: 'HealthTech', growth: '+934%', icon: '🏥', color: 'purple' },
                { name: 'AI/ML', growth: '+3,156%', icon: '🤖', color: 'pink' }
              ].map((industry, index) => (
                <div 
                  key={index}
                  className={`group relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-${industry.color}-400/40 transition-all duration-500 hover:bg-white/10 hover:scale-110 hover:-translate-y-2 cursor-pointer overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${industry.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  <div className="relative">
                    <div className="text-3xl mb-3 transform group-hover:scale-125 transition-transform duration-300">{industry.icon}</div>
                    <div className={`text-lg font-bold text-white mb-2 group-hover:text-${industry.color}-300 transition-colors duration-300`}>
                      {industry.name}
                    </div>
                    <div className={`text-sm font-semibold text-${industry.color}-400 group-hover:text-${industry.color}-300 transition-colors duration-300`}>
                      {industry.growth} Growth
                    </div>
                  </div>
                  
                  {/* Hover animation dots */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-2 h-2 bg-${industry.color}-400 rounded-full animate-ping`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1400 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col items-center text-gray-400 group cursor-pointer">
          <span className="text-sm mb-4 font-medium tracking-wide group-hover:text-blue-300 transition-colors duration-300">
            Discover Our Success Stories
          </span>
          <div className="relative w-8 h-12 border-2 border-gray-400 rounded-full group-hover:border-blue-400 transition-colors duration-300">
            <div className="absolute w-1.5 h-3 bg-gray-400 rounded-full left-1/2 transform -translate-x-1/2 mt-2 animate-bounce group-hover:bg-blue-400 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyCaseStudyHero;