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
  starCount = 150,
  animationSpeed = 1.2,
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
    const actual = isLowPerf ? Math.min(Math.floor(starCount * 0.6), 90) : starCount;
    const stars: Star[] = [];
    for (let i = 0; i < actual; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 2.5 + 1.0,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 2.0 + 0.5,
        hue: 200 + Math.random() * 80,
        twinkleOffset: Math.random() * Math.PI * 2,
        velocityX: (Math.random() - 0.5) * 0.0005,
        velocityY: (Math.random() - 0.5) * 0.0005,
      });
    }
    starsRef.current = stars;
  }, [starCount, isLowPerf]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let time = 0;

    // Resize to container only
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
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
      time += 0.02 * animationSpeed;

      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;

      // Clear canvas
      ctx.clearRect(0, 0, W, H);

      // Smooth mouse tracking
      smoothedMouse.current.x = lerp(smoothedMouse.current.x, mouseRef.current.x, 0.08);
      smoothedMouse.current.y = lerp(smoothedMouse.current.y, mouseRef.current.y, 0.08);

      // Background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, W, H);
      bgGradient.addColorStop(0, "#020618"); 
      bgGradient.addColorStop(0.3, "#0a1530");
      bgGradient.addColorStop(0.7, "#051225");
      bgGradient.addColorStop(1, "#030812");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, W, H);

      // Nebula clouds
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = `blur(${isLowPerf ? 25 : 50}px)`;
      
      for(let i = 0; i < 2; i++) {
        const angle = time * 0.2 + i * 2;
        const cloudX = 0.3 + 0.4 * Math.sin(angle) + (smoothedMouse.current.x - 0.5) * 0.1;
        const cloudY = 0.3 + 0.4 * Math.cos(angle * 0.7) + (smoothedMouse.current.y - 0.5) * 0.1;
        
        const cloudGrad = ctx.createRadialGradient(
          cloudX * W, cloudY * H, 0,
          cloudX * W, cloudY * H, Math.min(W, H) * 0.3
        );
        cloudGrad.addColorStop(0, `rgba(15, 35, 75, 0.15)`);
        cloudGrad.addColorStop(0.4, `rgba(8, 20, 50, 0.08)`);
        cloudGrad.addColorStop(1, "transparent");
        
        ctx.fillStyle = cloudGrad;
        ctx.beginPath();
        ctx.arc(cloudX * W, cloudY * H, Math.min(W, H) * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";

      // Stars
      const stars = starsRef.current;
      stars.forEach((star) => {
        // Continuous movement
        star.x += star.velocityX * animationSpeed;
        star.y += star.velocityY * animationSpeed;
        
        // Add subtle orbital movement
        star.x += Math.sin(time * star.speed * 0.015 + star.twinkleOffset) * 0.0005;
        star.y += Math.cos(time * star.speed * 0.01 + star.twinkleOffset) * 0.0005;

        // Wrap around edges
        if (star.x > 1.05) star.x = -0.05;
        if (star.x < -0.05) star.x = 1.05;
        if (star.y > 1.05) star.y = -0.05;
        if (star.y < -0.05) star.y = 1.05;

        const x = star.x * W;
        const y = star.y * H;

        // Mouse interaction effect - Color change instead of size change
        let colorShift = 0;
        let brightnessBoost = 1;
        
        if (enableMouseInteraction && mouseRef.current.active) {
          const mx = smoothedMouse.current.x * W;
          const my = smoothedMouse.current.y * H;
          const distance = Math.hypot(x - mx, y - my);
          const maxDistance = 100; // Larger interaction radius
          
          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance);
            // Change color instead of size
            colorShift = force * 120; // Shift hue
            brightnessBoost = 1 + force * 0.8; // Slight brightness boost
          }
        }

        // Twinkling
        let twinkle = 1;
        if (enableTwinkle) {
          twinkle = 0.7 + 0.3 * Math.sin(time * 2 + star.twinkleOffset) * 
                   Math.cos(time * 1.3 + star.twinkleOffset * 0.5);
        }

        const finalOpacity = Math.min(star.opacity * twinkle * brightnessBoost, 0.9);
        const finalHue = (star.hue + colorShift) % 360;

        // Outer glow
        ctx.globalCompositeOperation = "screen";
        const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 8);
        outerGlow.addColorStop(0, `hsla(${finalHue}, 70%, 50%, ${finalOpacity * 0.4})`);
        outerGlow.addColorStop(0.5, `hsla(${finalHue}, 60%, 40%, ${finalOpacity * 0.2})`);
        outerGlow.addColorStop(1, "transparent");
        
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 8, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow
        ctx.globalCompositeOperation = "lighter";
        const innerGlow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 4);
        innerGlow.addColorStop(0, `hsla(${finalHue}, 80%, 60%, ${finalOpacity * 0.7})`);
        innerGlow.addColorStop(0.7, `hsla(${finalHue}, 70%, 50%, ${finalOpacity * 0.3})`);
        innerGlow.addColorStop(1, "transparent");
        
        ctx.fillStyle = innerGlow;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = `hsla(${finalHue}, 90%, 70%, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.8, star.size * 0.4), 0, Math.PI * 2); // Made core slightly bigger
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
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
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
          pointerEvents: 'none',
        }}
        {...props}
      />
    </>
  );
}