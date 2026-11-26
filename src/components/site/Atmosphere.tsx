'use client';
import { useEffect, useRef } from 'react';

// Pilot only: hero and selected work. Static light remains when motion is reduced.
export default function Atmosphere({ variant = 'hero' }: { variant?: 'hero' | 'work' }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const update = () => { node.dataset.running = String(visible && !document.hidden && !preference.matches); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(node);
    document.addEventListener('visibilitychange', update);
    preference.addEventListener('change', update);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); preference.removeEventListener('change', update); };
  }, []);
  return <div className={`ambient-light ambient-light-${variant}`} ref={ref} aria-hidden="true" data-running="false"><span/><span/></div>;
}
