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
  starCount = 80,
  animationSpeed = 0.8,
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

  // Performance monitoring and adaptive quality
  const frameTimeRef = useRef<number[]>([]);
  const lastFrameTime = useRef<number>(performance.now());
  const frameCount = useRef<number>(0);

  // Performance detection
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
    setIsLowPerf(isMobile || isLowEnd);
  }, []);

  // Generate stars with movement - optimized for performance
  useEffect(() => {
    const getOptimalStarCount = () => {
      if (isLowPerf) return Math.min(Math.floor(starCount * 0.3), 40);
      return Math.min(starCount, 80);
    };

    const actual = getOptimalStarCount();
    const stars: Star[] = [];
    for (let i = 0; i < actual; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        speed: Math.random() * 1.0 + 0.3,
        hue: 200 + Math.random() * 40,
        twinkleOffset: Math.random() * Math.PI * 2,
        velocityX: (Math.random() - 0.5) * 0.0002,
        velocityY: (Math.random() - 0.5) * 0.0002,
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

      // Performance monitoring - adjust quality based on frame time
      frameTimeRef.current.push(deltaTime);
      if (frameTimeRef.current.length > 30) {
        frameTimeRef.current.shift();
      }

      const avgFrameTime = frameTimeRef.current.reduce((a, b) => a + b, 0) / frameTimeRef.current.length;

      // Adaptive quality based on performance
      let qualityMultiplier = 1;
      if (avgFrameTime > 25) {
        qualityMultiplier = 0.5; // Reduce quality for slow devices
      } else if (avgFrameTime > 16) {
        qualityMultiplier = 0.75;
      }

      // Skip frames if performance is very poor
      if (avgFrameTime > 33 && frameCount.current % 2 === 0) {
        rafRef.current = requestAnimationFrame(animate);
        frameCount.current++;
        return;
      }

      time += 0.012 * animationSpeed * qualityMultiplier;
      frameCount.current++;

      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;

      // Clear canvas
      ctx.clearRect(0, 0, W, H);

      // Simplified mouse tracking (less frequent)
      if (frameCount.current % 3 === 0) {
        smoothedMouse.current.x = lerp(smoothedMouse.current.x, mouseRef.current.x, 0.05);
        smoothedMouse.current.y = lerp(smoothedMouse.current.y, mouseRef.current.y, 0.05);
      }

      // Simplified background
      const bgGradient = ctx.createLinearGradient(0, 0, W, H);
      bgGradient.addColorStop(0, "#020618");
      bgGradient.addColorStop(0.5, "#0a1530");
      bgGradient.addColorStop(1, "#030812");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, W, H);

      // Simplified nebula (less frequent)
      if (frameCount.current % 5 === 0 && qualityMultiplier > 0.5) {
        ctx.globalCompositeOperation = "lighter";
        ctx.filter = `blur(${isLowPerf ? 15 : 25}px)`;

        const angle = time * 0.1;
        const cloudX = 0.4 + 0.2 * Math.sin(angle) + (smoothedMouse.current.x - 0.5) * 0.05;
        const cloudY = 0.4 + 0.2 * Math.cos(angle * 0.8) + (smoothedMouse.current.y - 0.5) * 0.05;

        const cloudGrad = ctx.createRadialGradient(
          cloudX * W, cloudY * H, 0,
          cloudX * W, cloudY * H, Math.min(W, H) * 0.2
        );
        cloudGrad.addColorStop(0, `rgba(15, 35, 75, 0.08)`);
        cloudGrad.addColorStop(0.4, `rgba(8, 20, 50, 0.04)`);
        cloudGrad.addColorStop(1, "transparent");

        ctx.fillStyle = cloudGrad;
        ctx.beginPath();
        ctx.arc(cloudX * W, cloudY * H, Math.min(W, H) * 0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.filter = "none";
        ctx.globalCompositeOperation = "source-over";
      }

      // Optimized star rendering
      const stars = starsRef.current;
      stars.forEach((star, index) => {
        // Update positions less frequently
        if (frameCount.current % 2 === 0 || index % 4 === 0) {
          star.x += star.velocityX * animationSpeed * qualityMultiplier;
          star.y += star.velocityY * animationSpeed * qualityMultiplier;

          // Simplified movement
          star.x += Math.sin(time * star.speed * 0.008 + star.twinkleOffset) * 0.0002;
          star.y += Math.cos(time * star.speed * 0.006 + star.twinkleOffset) * 0.0002;

          // Wrap around edges
          if (star.x > 1.01) star.x = -0.01;
          if (star.x < -0.01) star.x = 1.01;
          if (star.y > 1.01) star.y = -0.01;
          if (star.y < -0.01) star.y = 1.01;
        }

        const x = star.x * W;
        const y = star.y * H;

        // Simplified mouse interaction
        let colorShift = 0;
        let brightnessBoost = 1;

        if (enableMouseInteraction && mouseRef.current.active && frameCount.current % 4 === 0) {
          const mx = smoothedMouse.current.x * W;
          const my = smoothedMouse.current.y * H;
          const distance = Math.hypot(x - mx, y - my);
          const maxDistance = 60;

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance);
            colorShift = force * 60;
            brightnessBoost = 1 + force * 0.3;
          }
        }

        // Simplified twinkling
        let twinkle = 1;
        if (enableTwinkle && qualityMultiplier > 0.5) {
          twinkle = 0.85 + 0.15 * Math.sin(time * 1.2 + star.twinkleOffset);
        }

        const finalOpacity = Math.min(star.opacity * twinkle * brightnessBoost, 0.7);
        const finalHue = (star.hue + colorShift) % 360;

        // Combined glow effect (more efficient)
        ctx.globalCompositeOperation = "screen";
        const glow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 4);
        glow.addColorStop(0, `hsla(${finalHue}, 70%, 60%, ${finalOpacity * 0.5})`);
        glow.addColorStop(0.6, `hsla(${finalHue}, 50%, 40%, ${finalOpacity * 0.2})`);
        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Star core
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = `hsla(${finalHue}, 90%, 75%, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.4, star.size * 0.25), 0, Math.PI * 2);
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