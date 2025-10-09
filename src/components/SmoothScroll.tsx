// components/SmoothScroll.tsx
'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Comprehensive touch device detection
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    // Skip Lenis on mobile for better native performance
    if (isTouchDevice) {
      ScrollTrigger.refresh();
      return;
    }

    // Set GSAP ticker to 60fps for consistent performance
    gsap.ticker.fps(60);

    // ScrollTrigger defaults for smoother animations
    gsap.defaults({ ease: "power1.out" })

    // Initialize Lenis with natural feeling settings
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out for natural inertia
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true, // Lenis handles resize internally
      syncTouch: false,
      syncTouchLerp: 0.1,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for smooth animation loop
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Initial refresh after mount
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    // Debounced resize handler - only refresh ScrollTrigger
    // (Lenis autoResize handles its own resize)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      clearTimeout(resizeTimeout);
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Expose lenis instance for programmatic scrolling
  useEffect(() => {
    if (lenisRef.current) {
      (window as any).lenis = lenisRef.current;
    }
    return () => {
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}