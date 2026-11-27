'use client';
import { useEffect, useRef } from 'react';

export default function SiteMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const node = root.current;
    if (!node || !('IntersectionObserver' in window)) return;
    const targets = Array.from(node.querySelectorAll<HTMLElement>('[data-reveal], .section-heading-row, .service-explorer, .selected-project, .editorial-row, .project-story, .engagement-paths > *, .contact-form-surface, .faq-entry'));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        (entry.target as HTMLElement).dataset.motion = 'arrived';
        observer.unobserve(entry.target);
      }
    }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });
    const revealAll = () => { observer.disconnect(); targets.forEach(target => delete target.dataset.motion); };
    if (!media.matches) targets.forEach(target => {
      // Content starts visible in server HTML. Only stage content below the fold.
      if (target.getBoundingClientRect().top > window.innerHeight) {
        target.dataset.motion = 'waiting'; observer.observe(target);
      }
    });
    const onPreference = () => { if (media.matches) revealAll(); };
    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Element) {
        const target = event.target.closest<HTMLElement>('[data-motion]');
        if (target) { target.dataset.motion = 'arrived'; observer.unobserve(target); }
      }
    };
    media.addEventListener('change', onPreference);
    node.addEventListener('focusin', onFocus);
    return () => { revealAll(); media.removeEventListener('change', onPreference); node.removeEventListener('focusin', onFocus); };
  }, []);
  return <div ref={root} className="route-transition">{children}</div>;
}
