"use client";
import React from "react";
import Image from "next/image";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import { clientLogos, heroCards } from "@/data/heroSectionData";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-12 overflow-hidden">
      {/* Mobile: Simple background (no animations) */}
      <div className="md:hidden absolute inset-0 -z-10 bg-gradient-to-br from-[#0a1628] via-[#0f2350] to-[#060d1f]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Desktop: Stunning Pure CSS Background */}
      <div className="hidden md:block absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2350] to-[#060d1f]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-950/30 to-transparent" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/5 to-transparent transform rotate-12" />
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-400/5 to-transparent transform -rotate-12" />
        </div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-shimmer" />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 -z-5" />

      {/* Main Hero Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        {/* Trust Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {clientLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={24}
                  height={24}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="w-6 h-6 rounded-full border-2 border-white/20 bg-white p-[2px] object-contain"
                />
              ))}
            </div>
            <span className="text-gray-300 text-sm font-medium">
              Trusted by diverse software partners
            </span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] max-w-4xl leading-tight mb-6">
            Transform Your Ideas into{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent md:animate-gradient">
              Digital Masterpieces
            </span>
          </h1>
        </div>

        {/* Hero Subheadline */}
        <div className="mb-8">
          <p className="text-center text-gray-300 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            We&apos;re Sage Devs—a premium full-stack development agency that partners with ambitious businesses to create
            <span className="text-cyan-300"> scalable web applications</span> and
            <span className="text-blue-300"> award-winning user experiences</span> that drive measurable growth.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <a 
            href="#contact" 
            className="relative group inline-flex items-center justify-center h-14 px-10 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white text-lg font-bold transition-all duration-300 border border-blue-400/30 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/40 overflow-hidden backdrop-blur-sm w-full sm:w-auto hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Your Project
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a 
            href="https://calendly.com/sagedevs-network/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center h-14 px-10 rounded-xl bg-white/5 text-white text-lg font-semibold transition-all duration-300 border-2 border-white/20 hover:border-purple-300/50 hover:shadow-xl hover:shadow-purple-500/30 backdrop-blur-sm w-full sm:w-auto hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Strategy Call
            </span>
          </a>
        </div>

        {/* TrueFocus Animation */}
        <div className="w-full max-w-5xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
              <TrueFocus
                sentence="Full-StackDevelopment • UI/UX-Design • WordPress-Solutions • E-commerceStores • SaaS-Platforms • Cloud&DevOps • Enterprise-Applications • Mobile-Development"
                blurAmount={8}
                borderColor="cyan"
                animationDuration={0.4}
                pauseBetweenAnimations={1.2}
              />
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {heroCards.map((card, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:transform hover:-translate-y-2
                ${
                  index === 0
                    ? "bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border-blue-400/20 hover:border-blue-300/40"
                    : index === 1
                    ? "bg-gradient-to-br from-purple-900/20 to-fuchsia-900/10 border-purple-400/20 hover:border-purple-300/40"
                    : "bg-gradient-to-br from-emerald-900/20 to-teal-900/10 border-emerald-400/20 hover:border-emerald-300/40"
                }
              `}
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${
                    index === 0
                      ? "bg-gradient-to-br from-blue-500/5 to-cyan-500/10"
                      : index === 1
                      ? "bg-gradient-to-br from-purple-500/5 to-fuchsia-500/10"
                      : "bg-gradient-to-br from-emerald-500/5 to-teal-500/10"
                  }
                `}
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 md:mb-0 flex-shrink-0
                    ${
                      index === 0
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : index === 1
                        ? "bg-gradient-to-r from-purple-500 to-fuchsia-500"
                        : "bg-gradient-to-r from-emerald-500 to-teal-500"
                    }
                  `}
                >
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 text-left">{card.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animate-shimmer,
          .animate-gradient {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}