"use client";
import React, { useRef, useEffect } from "react";
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
    number: "50+",
    title: "Digital Platforms Delivered",
    description:
      "From SaaS dashboards to custom marketplaces, SageDevs has built scalable and reliable platforms for diverse industries.",
  },
  {
    number: "25+",
    title: "AI & ML Projects Launched",
    description:
      "Deployed intelligent solutions ranging from chatbots to predictive models, tailored to solve real business challenges.",
  },
  {
    number: "100+",
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
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Smooth infinite carousel
  useEffect(() => {
    if (!containerRef.current) return;
    const totalLogos = clientLogos.length;
    const logoWidth = 220; // px including gap
    const totalWidth = totalLogos * logoWidth;

    controls.start({
      x: [0, -totalWidth],
      transition: {
        duration: 40, // Set duration for smoother animation
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="relative w-full bg-gradient-to-br from-[#0a0f2e] via-[#1a1f3a] to-[#0f1429] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-purple-400/20 blur-3xl" />

      {/* Logos Section */}
      <div className="relative z-10 py-16">
        <div className="text-center mb-10">
          <p className="text-gray-300 text-sm tracking-[0.2em] font-medium">
            TRUSTED BY GLOBAL BRANDS & ENTERPRISES
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0f2e] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0f2e] to-transparent z-10" />

          <motion.div
            ref={containerRef}
            className="flex items-center will-change-transform"
            style={{ gap: "80px" }} // Set gap
            animate={controls}
          >
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-52 h-28 md:w-64 md:h-32 lg:w-72 lg:h-40 group" // Adjusted container size
              >
                <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill // Use fill instead of explicit width/height
                    sizes="(max-width: 768px) 13rem, (max-width: 1024px) 16rem, 18rem" // Responsive sizes
                    className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Web Developers
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                AI Innovators
              </span>
              <br />
              To Build The Future of Digital
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              From building pixel-perfect web experiences to deploying intelligent AI models,
              our mission is simple:{" "}
              <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                SageDevs
              </span>{" "}
              helps devs & businesses crush it with tech that actually works.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.08] h-full"
              >
                <div className="mb-6">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
                    {stat.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">
                    Ready to build something legendary?
                  </span>
                </div>
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
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
