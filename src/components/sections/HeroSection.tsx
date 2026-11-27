"use client";
import { business } from '@/lib/business';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import Atmosphere from '@/components/site/Atmosphere';
import { brand } from '@/lib/brand';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', { y: 22, opacity: 0, duration: .85, stagger: .12, ease: 'power3.out' });
      gsap.from('.identity-object', { rotate: -6, y: 30, opacity: 0, duration: 1.3, ease: 'power3.out', delay: .2 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section ref={sectionRef} className="premium-hero" aria-labelledby="hero-title">
    <Atmosphere/>
    <div className="premium-shell hero-layout">
      <div className="hero-copy">
        <p className="section-label hero-reveal"><span className="status-dot" /> INDEPENDENT DESIGN & DEVELOPMENT STUDIO</p>
        <h1 id="hero-title" className="hero-reveal">Digital excellence.<br /><em>Engineered.</em></h1>
        <p className="hero-lede hero-reveal">Custom software. WordPress websites. Shopify stores. We bring design and engineering together to build digital experiences that move your business forward.</p>
        <div className="hero-links hero-reveal"><Link className="premium-button" href="/contact">Start a project <ArrowUpRight size={18}/></Link><a className="button button-glass" href="#selected-work">Explore our work <ArrowDown size={16}/></a></div>
        <div className="hero-footline hero-reveal"><span>Based in Lahore.<br/><strong>Building for the world.</strong></span><a href={business.bookingUrl} target="_blank" rel="noopener noreferrer">Have an idea in mind?<br/><strong>Let’s talk it through <ArrowUpRight size={13}/></strong></a></div>
      </div>
      <div className="identity-object" aria-hidden="true">
        <div className="identity-halo"/><div className="identity-outline"/>
        <div className="identity-glass"><span className="object-index">S / 01</span><Image src={brand.emblem} alt="" width={420} height={512} priority sizes="(max-width: 760px) 190px, 280px"/><span className="object-caption">FORM MEETS FUNCTION</span></div>
        <div className="identity-note"><span className="status-dot"/><span>Thoughtfully designed.<br/><strong>Built to perform.</strong></span><ArrowUpRight size={20}/></div>
        <span className="identity-coordinate">SAGE DEVS — DIGITAL CRAFT</span>
      </div>
    </div>
    <div className="premium-shell hero-capabilities"><span><strong>500+</strong> projects delivered.</span><span>Thoughtful design.</span><span>Dependable engineering.</span><Link className="button button-glass" href="/about">Discover the studio <ArrowDown size={14}/></Link></div>
  </section>;
}
