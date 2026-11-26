'use client';
import Brand from './Brand';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
const links = [['Services', '/services'], ['Our work', '/projects'], ['About', '/about'], ['Insights', '/blog']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  return <header className={`site-header ${pathname === "/" ? "header-home" : ""}`} onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); trigger.current?.focus(); } }}>
    <div className="shell header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}</nav>
      <Link href="/contact" className="button button-small header-contact">Let’s talk</Link>
      <button ref={trigger} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav shell" aria-label="Mobile navigation">{[...links, ['AI solutions', '/letstalkai'], ['Pricing', '/pricing'], ['Contact', '/contact']].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}</nav>}
  </header>;
}
