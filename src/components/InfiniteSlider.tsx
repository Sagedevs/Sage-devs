'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export type InfiniteSliderProps = {
  children: React.ReactNode[];
  gap?: number;
  duration?: number; // seconds for one full scroll
  durationOnHover?: number; // seconds for one full scroll when hovered
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover = 35,
  className,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const totalChildren = React.Children.count(children);

  useEffect(() => {
    if (!containerRef.current) return;

    const slider = containerRef.current;
    const childWidth = slider.scrollWidth / 2; // we will duplicate once
    const distance = childWidth;

    controls.start({
      x: [-0, -distance],
      transition: {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
      },
    });
  }, [children, controls, duration]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        style={{ gap: `${gap}px` }}
        ref={containerRef}
        animate={controls}
      >
        {/* Duplicate once for seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
