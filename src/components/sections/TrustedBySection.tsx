"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Client Logos
const clientLogos = [
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605025/migrated/GSK-Group-Logo_443e8358.png", alt: "GSK Group" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605028/migrated/sara-smith-logo-300x300_7fc99b2b.png", alt: "Sara Smith" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605030/migrated/A1-Taxis-300x274_015aafa2.png", alt: "A1 Taxis" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605033/migrated/supplement-logo_bdaa0098.png", alt: "Supplement" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605036/migrated/justroofinc-logo-removebg-preview-300x193_ec226fbd.png", alt: "JustRoof Inc" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605038/migrated/eb_logo_b5964641.png", alt: "EB Logo" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605040/migrated/logos-300x110_e4c50b2a.png", alt: "Logos" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605043/migrated/unnamed-file_900cf23f.png", alt: "Unnamed" },
];

// Stats Section
const statsData = [
  {
    number: "500+",
    title: "Digital Platforms Delivered",
    description: "From SaaS dashboards to custom marketplaces, SageDevs has built scalable and reliable platforms for diverse industries.",
  },
  {
    number: "50+",
    title: "AI & ML Projects Launched",
    description: "Deployed intelligent solutions ranging from chatbots to predictive models, tailored to solve real business challenges.",
  },
  {
    number: "500+",
    title: "Clients Served",
    description: "Startups, agencies, and enterprises across the globe trust SageDevs as their technology partner for growth and innovation.",
  },
  {
    number: "∞",
    title: "Code Shipped",
    description: "We measure success not by lines of code, but by the lasting impact of the products and systems we deliver.",
  },
  {
    number: "15+",
    title: "Industries Covered",
    description: "Successfully delivered solutions across healthcare, fintech, logistics, education, and more.",
  },
  {
    number: "24/7",
    title: "Technical Support",
    description: "Dedicated to ensuring reliability and continuity, with round-the-clock support for mission-critical projects.",
  },
];

export default function TrustedBySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const logoCarouselRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsHeadingRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      // Heading fade in
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: isMobile ? 0.6 : 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        });
      }

      // Logo carousel - slower on mobile for performance
      if (logoCarouselRef.current) {
        const totalWidth = logoCarouselRef.current.scrollWidth / 2;
        const duration = isMobile ? 60 : 40;

        gsap.to(logoCarouselRef.current, {
          x: -totalWidth,
          duration: duration,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
          }
        });
      }

      // Stats heading
      if (statsHeadingRef.current) {
        gsap.from(statsHeadingRef.current, {
          opacity: 0,
          y: isMobile ? 20 : 40,
          duration: isMobile ? 0.6 : 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsHeadingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        });
      }

      // Stats cards stagger - FIXED
      if (statsGridRef.current) {
        const cards = Array.from(statsGridRef.current.children);
        
        // Clear any previous animations
        gsap.set(cards, { clearProps: "all" });
        
        cards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: isMobile ? 20 : 40,
            scale: isMobile ? 1 : 0.95,
            duration: isMobile ? 0.5 : 0.7,
            delay: index * (isMobile ? 0.08 : 0.12),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
              once: false,
            }
          });
        });
      }

      // CTA fade in
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: isMobile ? 0.6 : 0.8,
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
  }, [isMounted, isMobile]);

  return (
    <div ref={sectionRef} className="relative w-full bg-gradient-to-br from-[#020618] via-[#051225] to-[#0a1530] overflow-hidden">
      {/* Background Glow - lighter on mobile */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 bg-gradient-to-r from-cyan-400/5 via-blue-500/3 to-purple-400/5 md:from-cyan-400/20 md:via-blue-500/10 md:to-purple-400/20 blur-3xl opacity-50" />

      {/* Logos Section */}
      <div className="relative z-10 py-8">
        {/* Heading Block */}
        <div ref={headingRef} className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-12 h-0.5 rounded-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" />
            <span className="text-xs tracking-wider text-blue-200 uppercase font-medium">Trusted by</span>
            <span className="w-12 h-0.5 rounded-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" />
          </div>

          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-blue-500">
                Global Brands & Enterprises
              </span>
            </span>
            <span className="block text-lg md:text-xl mt-2 text-blue-200">
              Empowering <span className="text-white font-bold">Web Developers</span> & <span className="text-white font-bold">AI Innovators</span>
            </span>
          </h3>

          <div className="w-28 h-1 mx-auto rounded-full mt-4 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" />
        </div>

        {/* Logo Carousel */}
        <div className="relative min-h-[160px] md:min-h-[140px] lg:min-h-[160px] overflow-hidden">
          <div className="absolute left-0 top-0 w-8 md:w-32 h-full bg-gradient-to-r from-[#0a0f2e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-8 md:w-32 h-full bg-gradient-to-l from-[#0a0f2e] to-transparent z-10 pointer-events-none" />
          
          {isMounted && (
            <div 
              ref={logoCarouselRef}
              className="flex items-center gap-3 md:gap-[60px] py-4 will-change-transform"
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-32 h-20 sm:w-36 sm:h-24 md:w-64 md:h-32 lg:w-72 lg:h-40"
                >
                  <div className="w-full h-full bg-white/[0.02] md:bg-white/5 md:backdrop-blur-sm rounded-lg border border-white/[0.06] md:border-white/10 flex items-center justify-center relative overflow-hidden md:hover:bg-white/[0.08] transition-colors duration-300">
                    <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-2/3 md:w-3/4 h-6 md:h-12 bg-white/40 md:bg-white/90 rounded-full blur-xl md:blur-3xl z-0 pointer-events-none" />
                    <div className="relative z-20 w-11/12 h-3/4 flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="(max-width: 768px) 100px, (max-width: 1024px) 14rem, 18rem"
                        className="object-contain opacity-85 md:opacity-95 md:hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                        quality={isMobile ? 60 : 75}
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div ref={statsHeadingRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Web Developers
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                AI Innovators
              </span>
              <br />
              To Build The Future of Digital
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              From building pixel-perfect web experiences to deploying intelligent AI models,
              our mission is simple:{" "}
              <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                SageDevs helps devs & businesses crush it with tech that actually works.
              </span>
            </p>
          </div>

          {/* Stats Grid */}
          <div ref={statsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white/[0.02] md:bg-gradient-to-br md:from-white/5 md:to-white/[0.02] md:backdrop-blur-sm rounded-2xl p-8 border border-white/10 md:hover:border-white/20 transition-all duration-300 md:hover:bg-white/[0.08] active:bg-white/[0.06] h-full"
              >
                <div className="mb-6">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
                    {stat.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="text-center mt-16">
            <div className="bg-white/[0.02] md:bg-gradient-to-r md:from-white/5 md:to-white/[0.02] md:backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">Ready to build something legendary?</span>
                </div>
                <Link href="/Contact">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 md:hover:from-blue-600 md:hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 md:hover:scale-105 md:hover:shadow-lg md:hover:shadow-purple-500/25 active:scale-95">
                    Partner With Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}