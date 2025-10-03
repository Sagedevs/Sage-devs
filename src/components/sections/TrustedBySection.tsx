"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Client Logos
const clientLogos = [
  { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/GSK-Group-Logo.webp", alt: "GSK Group" },
  { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/sara-smith-logo-300x300.webp", alt: "Sara Smith" },
  { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/A1-Taxis-300x274.webp", alt: "A1 Taxis" },
  { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/supplement-logo.webp", alt: "Supplement" },
  { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/justroofinc-logo-removebg-preview-300x193.webp", alt: "JustRoof Inc" },
  { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/eb_logo.webp", alt: "EB Logo" },
  { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/logos-300x110.webp", alt: "Logos" },
  { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/unnamed-file.webp", alt: "Unnamed" },
];

// Stats Section
const statsData = [
  {
    number: "500+",
    title: "Digital Platforms Delivered",
    description:
      "From SaaS dashboards to custom marketplaces, SageDevs has built scalable and reliable platforms for diverse industries.",
  },
  {
    number: "50+",
    title: "AI & ML Projects Launched",
    description:
      "Deployed intelligent solutions ranging from chatbots to predictive models, tailored to solve real business challenges.",
  },
  {
    number: "500+",
    title: "Clients Served",
    description:
      "Startups, agencies, and enterprises across the globe trust SageDevs as their technology partner for growth and innovation.",
  },
  {
    number: "∞",
    title: "Code Shipped",
    description:
      "We measure success not by lines of code, but by the lasting impact of the products and systems we deliver.",
  },
  {
    number: "15+",
    title: "Industries Covered",
    description:
      "Successfully delivered solutions across healthcare, fintech, logistics, education, and more.",
  },
  {
    number: "24/7",
    title: "Technical Support",
    description:
      "Dedicated to ensuring reliability and continuity, with round-the-clock support for mission-critical projects.",
  },
];

export default function TrustedBySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mobileSliderRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if desktop on mount
  useEffect(() => {
    setIsMounted(true);
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Desktop carousel animation
  useEffect(() => {
    if (!containerRef.current || !isMounted || !isDesktop) {
      controls.stop();
      return;
    }
    
    const totalLogos = clientLogos.length;
    const logoWidth = 220;
    const totalWidth = totalLogos * logoWidth;

    controls.start({
      x: [0, -totalWidth],
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    });

    return () => {
      controls.stop();
    };
  }, [controls, isMounted, isDesktop]);

  // Mobile auto-scroll carousel - OPTIMIZED
  useEffect(() => {
    if (isDesktop || !mobileSliderRef.current || !isMounted) return;

    const slider = mobileSliderRef.current;
    let animationId: number;
    let currentScroll = 0;
    const speed = 0.4; // Slightly slower for better performance

    const animate = () => {
      currentScroll += speed;
      const scrollWidth = slider.scrollWidth;
      
      // Seamless loop - only duplicate once for mobile
      if (currentScroll >= scrollWidth / 2) {
        currentScroll = 0;
      }
      slider.scrollLeft = currentScroll;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isMounted, isDesktop]);

  return (
    <div className="relative w-full bg-gradient-to-br from-[#020618] via-[#051225] to-[#0a1530] overflow-hidden">
      {/* Background Glow - lighter on mobile */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 bg-gradient-to-r from-cyan-400/10 via-blue-500/5 to-purple-400/10 md:from-cyan-400/20 md:via-blue-500/10 md:to-purple-400/20 blur-3xl opacity-50" />

      {/* Logos Section */}
      <div className="relative z-10 py-8">
        {/* Heading Block */}
        <div className="text-center mb-6">
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

        {/* Logo Display */}
        <div className="relative min-h-[160px] md:min-h-[140px] lg:min-h-[160px]">
          {/* Mobile: Optimized Scrolling Carousel */}
          <div className="md:hidden relative">
            {/* Simplified fade edges - no blur */}
            <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-[#0a0f2e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-[#0a0f2e] to-transparent z-10 pointer-events-none" />
            
            <div 
              ref={mobileSliderRef}
              className="flex gap-3 overflow-x-hidden px-4 py-4"
              style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
            >
              {/* Only duplicate once for mobile performance */}
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-36 h-24 sm:w-40 sm:h-28"
                >
                  {/* NO backdrop-blur on mobile, simple bg */}
                  <div className="w-full h-full bg-white/[0.03] rounded-lg border border-white/[0.08] flex items-center justify-center relative overflow-hidden">
                    {/* Lighter glow for mobile performance */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-white/60 rounded-full blur-2xl z-0 pointer-events-none" />
                    <div className="relative z-20 w-11/12 h-3/4 flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="(max-width: 768px) 120px"
                        className="object-contain opacity-90"
                        loading="lazy"
                        quality={75}
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Animated Carousel with blur effects */}
          <div className="hidden md:block overflow-hidden">
            {/* Desktop fade edges with blur */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0f2e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0f2e] to-transparent z-10 pointer-events-none" />

            {isMounted && isDesktop && (
              <motion.div
                ref={containerRef}
                className="flex items-center will-change-transform -mt-6"
                style={{ gap: "60px" }}
                animate={controls}
              >
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center w-64 h-32 lg:w-72 lg:h-40 group"
                  >
                    {/* Desktop gets full effects */}
                    <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden transition-colors duration-300 hover:bg-white/[0.08]">
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-white/90 rounded-full blur-3xl z-0 pointer-events-none" />
                      <div className="relative z-20 w-11/12 h-3/4 flex items-center justify-center">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="(max-width: 1024px) 14rem, 18rem"
                          className="object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
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

          {/* Stats Grid - Optimized for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white/[0.03] md:bg-gradient-to-br md:from-white/5 md:to-white/[0.02] md:backdrop-blur-sm rounded-2xl p-8 border border-white/10 md:hover:border-white/20 transition-all duration-300 md:hover:bg-white/[0.08] active:bg-white/[0.06] h-full"
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

          {/* CTA - Simplified for mobile */}
          <div className="text-center mt-16">
            <div className="bg-white/[0.03] md:bg-gradient-to-r md:from-white/5 md:to-white/[0.02] md:backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">Ready to build something legendary?</span>
                </div>
                <Link href="/contact">
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