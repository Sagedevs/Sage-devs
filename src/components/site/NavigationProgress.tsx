'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

// Feedback only: links, history, prefetching and scroll restoration remain owned by Next.js.
export default function NavigationProgress() {
  const pathname = usePathname();
  const [state,setState] = useState<'idle'|'loading'|'complete'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    setState(current => current === 'loading' ? 'complete' : 'idle');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 250);
  }, [pathname]);
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.download || (link.target && link.target !== '_self')) return;
      const url = new URL(link.href,location.origin);
      if (url.origin !== location.origin || url.pathname === location.pathname || /\.[a-z0-9]+$/i.test(url.pathname)) return;
      setState('loading');
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setState('idle'), 10000);
    };
    document.addEventListener('click',click,true);
    return () => { document.removeEventListener('click',click,true); if (timer.current) clearTimeout(timer.current); };
  }, []);
  return <div aria-hidden="true" className={`navigation-progress is-${state}`}><span/></div>;
}
