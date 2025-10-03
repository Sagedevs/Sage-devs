"use client";
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const differentiators = [
    "Lightning-fast development cycles with agile methodology",
    "24/7 technical support and maintenance services",
    "Cutting-edge technology stack and modern frameworks",
    "Proven track record with 500+ successful projects",
    "Custom solutions tailored to your business needs",
    "Transparent pricing with no hidden costs",
    "Expert team of senior developers and designers",
    "End-to-end project management and delivery",
    "Scalable architecture built for future growth"
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        });
      }

      // Stats cards
      if (statsRef.current) {
        const stats = Array.from(statsRef.current.children);
        stats.forEach((stat, index) => {
          gsap.from(stat, {
            opacity: 0,
            y: isMobile ? 20 : 30,
            scale: isMobile ? 1 : 0.9,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          });
        });
      }

      // Feature cards
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children);
        cards.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: isMobile ? 25 : 40,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          });
        });
      }

      // CTA
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black py-16 md:py-20 z-0">
      {/* Static Background - No animation on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 md:bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-56 md:w-80 h-56 md:h-80 bg-blue-500/8 md:bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-48 md:w-72 h-48 md:h-72 bg-white/5 md:bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle orbs - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-xl opacity-50"></div>
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-l from-blue-400/15 to-transparent rounded-full blur-xl opacity-50"></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-5">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
              Sage Devs
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4">
            We&apos;re not just developers—we&apos;re your strategic technology partners committed to your success
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-900/20 md:from-blue-900/30 to-black/40 md:to-black/50 backdrop-blur-sm border border-blue-500/20">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-300 text-xs md:text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-900/20 md:from-blue-900/30 to-black/40 md:to-black/50 backdrop-blur-sm border border-blue-500/20">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-300 text-xs md:text-sm">Support Available</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-900/20 md:from-blue-900/30 to-black/40 md:to-black/50 backdrop-blur-sm border border-blue-500/20">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-blue-300 text-xs md:text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-900/20 md:from-blue-900/30 to-black/40 md:to-black/50 backdrop-blur-sm border border-blue-500/20">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-blue-300 text-xs md:text-sm">Years Experience</div>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {differentiators.map((point, index) => (
            <div
              key={index}
              className="group relative p-5 md:p-6 rounded-xl bg-gradient-to-br from-gray-900/30 md:from-gray-900/40 to-black/50 md:to-black/60 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Hover glow - desktop only */}
              {!isMobile && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300"></div>
              )}
              
              <div className="relative flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <div className="inline-flex flex-col items-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 md:from-blue-900/30 to-black/40 md:to-black/50 backdrop-blur-sm border border-blue-500/30 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Ready to Transform Your Ideas into Reality?
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-5 md:mb-6 max-w-md px-4">
              Join hundreds of satisfied clients who chose Sage Devs for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Link href="/Contact" passHref>
                <button className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm md:text-base">
                  Start Your Project
                </button>
              </Link>
              <Link href="/case-studies" passHref>
                <button className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-white font-semibold rounded-lg border border-white/30 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-sm md:text-base">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}