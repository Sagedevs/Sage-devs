"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import OptimizedGalaxy from "@/components/Galaxy";
import { clientLogos, stats, heroCards } from "@/data/heroSectionData";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 overflow-hidden">
      {/* Galaxy Background - Only for Hero */}
      <OptimizedGalaxy
        starCount={150}
        animationSpeed={0.6}
        enableMouseInteraction={true}
        enableTwinkle={false}
        className="absolute inset-0 -z-10"
      />

      {/* Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 -z-5"></div>

      {/* Main Hero Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">

        {/* Trust Badge with Real Small-Business Logos */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3
                          rounded-full bg-gradient-to-r from-blue-500/10
                          to-cyan-500/10 border border-blue-400/20
                          backdrop-blur-sm">
            <div className="flex -space-x-2">
              {clientLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full border-2 border-white/20 bg-white p-[2px] object-contain"
                />
              ))}
            </div>
            <span className="text-gray-300 text-sm font-medium">
              Trusted by diverse software partners
            </span>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] max-w-5xl leading-tight sm:leading-tight md:leading-snug mb-4">
            Transform Ideas Into
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
        </motion.div>

        {/* Hero Subheadline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-gray-300 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            We&apos;re Sage Devs—a premium full-stack development agency that partners with ambitious businesses to create
            <span className="text-cyan-300"> scalable web applications</span> and
            <span className="text-blue-300"> award-winning user experiences</span> that drive measurable growth.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.number}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Hero CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a href="#contact" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="relative group inline-flex items-center justify-center h-14 px-10 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white text-lg font-bold transition-all duration-500 border border-blue-400/30 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/40 overflow-hidden backdrop-blur-sm w-full sm:w-auto">
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Start Your Project
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </motion.a>

          <motion.a href="https://calendly.com/sagedevs" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="relative group inline-flex items-center justify-center h-14 px-10 rounded-xl bg-white/5 text-white text-lg font-semibold transition-all duration-500 border-2 border-white/20 hover:border-purple-300/50 hover:shadow-xl hover:shadow-purple-500/30 backdrop-blur-sm w-full sm:w-auto">
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Book Strategy Call
            </span>
          </motion.a>
        </motion.div>

        {/* TrueFocus Animation */}
        <motion.div
          className="w-full max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
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
        </motion.div>

        {/* Value Proposition Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {heroCards.map((card, index) => (
            <div key={index} className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 backdrop-blur-sm border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
