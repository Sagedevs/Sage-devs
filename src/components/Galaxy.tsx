import React, { useEffect, useRef, useState } from "react";

interface OptimizedGalaxyProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  starCount?: number;
  animationSpeed?: number;
  glowIntensity?: number;
  enableMouseInteraction?: boolean;
  enableTwinkle?: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  hue: number;
  twinkleOffset: number;
  velocityX: number;
  velocityY: number;
}

export default function OptimizedGalaxy({
  starCount = 100,
  animationSpeed = 1.0,
  glowIntensity = 0.6,
  enableMouseInteraction = true,
  enableTwinkle = true,
  className,
  ...props
}: OptimizedGalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });
  const smoothedMouse = useRef({ x: 0.5, y: 0.5 });
  const [isLowPerf, setIsLowPerf] = useState(false);
  
  // Performance tracking
  const frameTimeRef = useRef<number[]>([]);
  const lastFrameTime = useRef(performance.now());

  // Performance detection
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
    setIsLowPerf(isMobile || isLowEnd);
  }, []);

  // Generate stars with movement
  useEffect(() => {
    const actual = isLowPerf ? Math.min(Math.floor(starCount * 0.4), 60) : Math.min(starCount, 120);
    const stars: Star[] = [];
    for (let i = 0; i < actual; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 2.0 + 0.8,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 1.5 + 0.5,
        hue: 200 + Math.random() * 60,
        twinkleOffset: Math.random() * Math.PI * 2,
        velocityX: (Math.random() - 0.5) * 0.0003,
        velocityY: (Math.random() - 0.5) * 0.0003,
      });
    }
    starsRef.current = stars;
  }, [starCount, isLowPerf]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    let frameCount = 0;

    // Resize to container only
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, isLowPerf ? 1 : 2);
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const animate = () => {
      const now = performance.now();
      const deltaTime = now - lastFrameTime.current;
      lastFrameTime.current = now;
      
      // Track performance and adjust quality
      frameTimeRef.current.push(deltaTime);
      if (frameTimeRef.current.length > 60) {
        frameTimeRef.current.shift();
      }
      
      // Skip frames if performance is poor
      const avgFrameTime = frameTimeRef.current.reduce((a, b) => a + b, 0) / frameTimeRef.current.length;
      if (avgFrameTime > 20 && frameCount % 2 === 0) { // Skip every other frame if slow
        rafRef.current = requestAnimationFrame(animate);
        frameCount++;
        return;
      }

      time += 0.016 * animationSpeed; // More stable time increment
      frameCount++;

      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;

      // Clear canvas
      ctx.clearRect(0, 0, W, H);

      // Smooth mouse tracking (less frequent updates)
      if (frameCount % 2 === 0) {
        smoothedMouse.current.x = lerp(smoothedMouse.current.x, mouseRef.current.x, 0.06);
        smoothedMouse.current.y = lerp(smoothedMouse.current.y, mouseRef.current.y, 0.06);
      }

      // Simplified background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, W, H);
      bgGradient.addColorStop(0, "#020618"); 
      bgGradient.addColorStop(0.5, "#0a1530");
      bgGradient.addColorStop(1, "#030812");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, W, H);

      // Simplified nebula clouds (less frequent updates)
      if (frameCount % 3 === 0 || frameCount < 60) {
        ctx.globalCompositeOperation = "lighter";
        ctx.filter = `blur(${isLowPerf ? 20 : 30}px)`;
        
        const angle = time * 0.15;
        const cloudX = 0.35 + 0.3 * Math.sin(angle) + (smoothedMouse.current.x - 0.5) * 0.08;
        const cloudY = 0.35 + 0.3 * Math.cos(angle * 0.7) + (smoothedMouse.current.y - 0.5) * 0.08;
        
        const cloudGrad = ctx.createRadialGradient(
          cloudX * W, cloudY * H, 0,
          cloudX * W, cloudY * H, Math.min(W, H) * 0.25
        );
        cloudGrad.addColorStop(0, `rgba(15, 35, 75, 0.1)`);
        cloudGrad.addColorStop(0.4, `rgba(8, 20, 50, 0.05)`);
        cloudGrad.addColorStop(1, "transparent");
        
        ctx.fillStyle = cloudGrad;
        ctx.beginPath();
        ctx.arc(cloudX * W, cloudY * H, Math.min(W, H) * 0.25, 0, Math.PI * 2);
        ctx.fill();

        ctx.filter = "none";
        ctx.globalCompositeOperation = "source-over";
      }

      // Stars with reduced complexity
      const stars = starsRef.current;
      stars.forEach((star, index) => {
        // Update star position less frequently for some stars
        if (frameCount % 2 === 0 || index % 3 === 0) {
          star.x += star.velocityX * animationSpeed;
          star.y += star.velocityY * animationSpeed;
          
          // Simplified orbital movement
          star.x += Math.sin(time * star.speed * 0.01 + star.twinkleOffset) * 0.0003;
          star.y += Math.cos(time * star.speed * 0.008 + star.twinkleOffset) * 0.0003;

          // Wrap around edges
          if (star.x > 1.02) star.x = -0.02;
          if (star.x < -0.02) star.x = 1.02;
          if (star.y > 1.02) star.y = -0.02;
          if (star.y < -0.02) star.y = 1.02;
        }

        const x = star.x * W;
        const y = star.y * H;

        // Simplified mouse interaction
        let colorShift = 0;
        let brightnessBoost = 1;
        
        if (enableMouseInteraction && mouseRef.current.active && frameCount % 2 === 0) {
          const mx = smoothedMouse.current.x * W;
          const my = smoothedMouse.current.y * H;
          const distance = Math.hypot(x - mx, y - my);
          const maxDistance = 80;
          
          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance);
            colorShift = force * 80;
            brightnessBoost = 1 + force * 0.5;
          }
        }

        // Simplified twinkling
        let twinkle = 1;
        if (enableTwinkle && frameCount % 4 === index % 4) {
          twinkle = 0.8 + 0.2 * Math.sin(time * 1.5 + star.twinkleOffset);
        }

        const finalOpacity = Math.min(star.opacity * twinkle * brightnessBoost, 0.8);
        const finalHue = (star.hue + colorShift) % 360;

        // Simplified rendering - combine glow effects
        ctx.globalCompositeOperation = "screen";
        const glow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 6);
        glow.addColorStop(0, `hsla(${finalHue}, 70%, 60%, ${finalOpacity * 0.6})`);
        glow.addColorStop(0.4, `hsla(${finalHue}, 60%, 50%, ${finalOpacity * 0.3})`);
        glow.addColorStop(1, "transparent");
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = `hsla(${finalHue}, 90%, 70%, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.6, star.size * 0.3), 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resize();
    animate();

    // Event listeners
    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    if (enableMouseInteraction) {
      canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
      canvas.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      if (enableMouseInteraction) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animationSpeed, glowIntensity, enableMouseInteraction, enableTwinkle, isLowPerf]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full ${className || ""}`}
        style={{
          zIndex: -10,
          pointerEvents: enableMouseInteraction ? 'auto' : 'none',
        }}
        {...props}
      />
    </>
  );
}