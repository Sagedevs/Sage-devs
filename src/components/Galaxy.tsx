import React, { useEffect, useRef, useState } from "react";

interface OptimizedGalaxyProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  starCount?: number;
  animationSpeed?: number; // overall speed multiplier
  glowIntensity?: number; // how strong star glow is
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
}

export default function OptimizedGalaxyLuxury({
  starCount = 120,
  animationSpeed = 0.6,
  glowIntensity = 0.45,
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

  // Performance detection (mobile / low device concurrency)
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl");
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = !gl || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 3) || isMobile;
    setIsLowPerf(isLowEnd);
  }, []);

  // Generate stars (smaller & subtle for luxe)
  useEffect(() => {
    const actual = isLowPerf ? Math.min(Math.floor(starCount * 0.5), 70) : starCount;
    const stars: Star[] = [];
    for (let i = 0; i < actual; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1.0 + 0.25, // small
        opacity: Math.random() * 0.45 + 0.12, // subtle
        speed: (Math.random() * 0.25 + 0.02) * (isLowPerf ? 0.6 : 1),
        hue: 200 + Math.random() * 30 - 10, // blueish hue (200-230)
        twinkleOffset: Math.random() * Math.PI * 2,
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

    // blobs config - these are the blurred moving nebula blobs
    const blobs = [
      { ox: 0.2, oy: 0.35, radius: 0.7, hue: 205, amp: 0.04, speed: 0.08 }, // left soft blue
      { ox: 0.75, oy: 0.3, radius: 0.6, hue: 210, amp: 0.05, speed: 0.06 }, // right blue
      { ox: 0.5, oy: 0.7, radius: 0.9, hue: 195, amp: 0.03, speed: 0.04 }, // bottom subtle darker
    ];

    const resize = () => {
      // Use device pixel ratio but cap for perf
      const dpr = isLowPerf ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      // Reset transform and scale to draw in CSS pixels
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    // mouse smoothing lerp
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
      time += 0.008 * (animationSpeed || 1);

      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;

      // Smooth mouse position (smoothed follows actual mouse with some easing)
      smoothedMouse.current.x = lerp(smoothedMouse.current.x, mouseRef.current.x, 0.08);
      smoothedMouse.current.y = lerp(smoothedMouse.current.y, mouseRef.current.y, 0.08);

      // === Background base gradient (blue dominant) ===
      const base = ctx.createLinearGradient(0, 0, W, H);
      base.addColorStop(0, "rgb(6,12,35)");    // very dark navy
      base.addColorStop(0.45, "rgb(10,20,60)"); // deep blue
      base.addColorStop(1, "rgb(3,6,20)");     // deep navy
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, W, H);

      // === Blurred moving nebula blobs (use ctx.filter for soft blur) ===
      // We'll draw each blob on top with blur filter to create soft glow
      // reduce blur on low perf devices
      const blurPx = isLowPerf ? 40 : 90;
      ctx.globalCompositeOperation = "lighter"; // add glow blend
      ctx.filter = `blur(${blurPx}px)`;
      blobs.forEach((b, idx) => {
        // position oscillation + slight mouse offset
        const mx = (smoothedMouse.current.x - 0.5) * 0.18; // how much mouse moves background
        const my = (smoothedMouse.current.y - 0.5) * 0.18;
        const bx = (b.ox + Math.sin(time * b.speed + idx) * b.amp + mx) * W;
        const by = (b.oy + Math.cos(time * b.speed * 0.9 + idx) * b.amp + my) * H;
        const radius = Math.max(W, H) * b.radius * 0.6;

        // create radial gradient for the blob
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, radius);
        // center soft blue (slightly desaturated) -> outer near transparent
        g.addColorStop(0, `rgba(${20 + (b.hue - 195) * 0.3}, ${40 + (b.hue - 195) * 0.6}, ${120 + (b.hue - 195)}, 0.45)`);
        g.addColorStop(0.35, `rgba(18,28,80,0.18)`);
        g.addColorStop(1, "rgba(2,4,12,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(bx, by, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      // reset blur and composite
      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";

      // === subtle moving overlay (very soft noise layer) ===
      // Add a subtle translucent gradient that slowly shifts for depth
      const overlayX = Math.sin(time * 0.12) * 0.03;
      const overlayY = Math.cos(time * 0.09) * 0.03;
      const overlayGrad = ctx.createLinearGradient(W * (0.1 + overlayX), H * (0.1 + overlayY), W * (0.9 - overlayX), H * (0.9 - overlayY));
      overlayGrad.addColorStop(0, "rgba(255,255,255,0.02)");
      overlayGrad.addColorStop(0.5, "rgba(0,0,0,0)");
      overlayGrad.addColorStop(1, "rgba(10, 10, 30, 0.06)");
      ctx.fillStyle = overlayGrad;
      ctx.fillRect(0, 0, W, H);

      // === Stars (small, soft, slow) ===
      const stars = starsRef.current;
      stars.forEach((star) => {
        const x = star.x * W;
        const y = star.y * H;

        // mouse influence: gentle brightening near cursor
        let influence = 1;
        if (enableMouseInteraction) {
          const mx = smoothedMouse.current.x * W;
          const my = smoothedMouse.current.y * H;
          const d = Math.hypot(x - mx, y - my);
          const maxD = Math.min(W, H) * 0.25;
          influence = 1 + (1 - Math.min(d / maxD, 1)) * 0.4;
        }

        // twinkle
        let tw = 1;
        if (enableTwinkle && !isLowPerf) {
          tw = 0.85 + 0.15 * Math.sin(time * 1.6 + star.twinkleOffset);
        }

        const finalOpacity = star.opacity * tw * (0.7 + 0.3 * (glowIntensity || 0.4)) * (influence);
        const finalSize = star.size * (0.6 + 0.6 * (glowIntensity || 0.4)) * (influence);

        // soft glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, finalSize * 8);
        glow.addColorStop(0, `hsla(${star.hue}, 70%, 85%, ${finalOpacity})`);
        glow.addColorStop(0.3, `hsla(${star.hue}, 60%, 70%, ${finalOpacity * 0.55})`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, finalSize * 8, 0, Math.PI * 2);
        ctx.fill();

        // tiny core (very subtle)
        if (!isLowPerf) {
          ctx.fillStyle = `hsla(${star.hue}, 85%, 95%, ${Math.min(finalOpacity, 0.95)})`;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.2, finalSize * 0.2), 0, Math.PI * 2);
          ctx.fill();
        }

        // slow drift
        star.x += Math.sin(time * star.speed + star.twinkleOffset) * 0.00002;
        star.y += Math.cos(time * star.speed * 0.7 + star.twinkleOffset) * 0.00002;
        if (star.x > 1.05) star.x = -0.05;
        if (star.x < -0.05) star.x = 1.05;
        if (star.y > 1.05) star.y = -0.05;
        if (star.y < -0.05) star.y = 1.05;
      });

      // === cursor halo (soft) ===
      if (enableMouseInteraction && mouseRef.current.active) {
        const cx = smoothedMouse.current.x * W;
        const cy = smoothedMouse.current.y * H;
        const r = Math.min(W, H) * 0.08;
        const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        halo.addColorStop(0, "rgba(80,160,255,0.08)");
        halo.addColorStop(1, "rgba(80,160,255,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // init size & start
    resize();
    animate();

    window.addEventListener("resize", resize);
    if (enableMouseInteraction) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (enableMouseInteraction) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animationSpeed, glowIntensity, enableMouseInteraction, enableTwinkle, isLowPerf]);

  // Render canvas
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className || ""}`}
      style={{
        // fallback background while canvas paints
        background: "linear-gradient(135deg, #020316 0%, #071233 100%)",
      }}
      {...props}
    />
  );
}
