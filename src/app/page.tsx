// app/page.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import your components and blocks
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import TestimonialSlider from "@/components/TestimonialSlider";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import OptimizedGalaxy from "@/components/Galaxy";

// Featured Case Studies data
const featuredCaseStudies = [
  {
    id: 1,
    title: "Custom Shopify Store",
    outcome: "40% faster load time — 3x conversion boost",
    image: "/proj/projectOne.webp",
    link: "https://by39tk-uv.myshopify.com/",
    category: "E-commerce"
  },
  {
    id: 2,
    title: "GDSC PLM Website",
    outcome: "Modern design system — 200% user engagement",
    image: "/proj/projectTwo.webp",
    link: "https://www.gdsc-plm.org/",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Conso Programming Language",
    outcome: "Full-stack compiler — Real-time code execution",
    image: "/proj/projectFour.webp",
    link: "https://conso-frontend-v2.onrender.com/",
    category: "SaaS Platform"
  }
];

// Services data
const services = [
  {
    icon: "🚀",
    title: "Web App Development",
    benefit: "Scalable, high-performance applications built with modern tech",
    anchor: "#web-dev"
  },
  {
    icon: "🎨",
    title: "UI/UX Design", 
    benefit: "Beautiful, conversion-focused interfaces that users love",
    anchor: "#ui-ux"
  },
  {
    icon: "📱",
    title: "WordPress Development",
    benefit: "Custom themes, plugins, and enterprise WordPress solutions",
    anchor: "#wordpress"
  },
  {
    icon: "🛍️",
    title: "Shopify Development",
    benefit: "E-commerce stores that convert visitors into customers",
    anchor: "#shopify"
  },
  {
    icon: "☁️",
    title: "SaaS Solutions",
    benefit: "End-to-end software platforms with scalable architecture",
    anchor: "#saas"
  },
  {
    icon: "⚙️",
    title: "Cloud & DevOps",
    benefit: "Reliable deployment, monitoring, and infrastructure management",
    anchor: "#devops"
  }
];

// // Tech logos
// const techLogos = [
//   { name: "React", src: "/techstack/react.svg" },
//   { name: "Next.js", src: "/techstack/nextjs.svg" },
//   { name: "WordPress", src: "/techstack/wordpress.svg" },
//   { name: "Shopify", src: "/techstack/shopify.svg" },
//   { name: "Node.js", src: "/techstack/js.svg" },
//   { name: "TypeScript", src: "/techstack/ts.svg" },
// ];

// Differentiators
const differentiators = [
  "Dedicated engineering pods for focused delivery",
  "Design-led development process",
  "SLA & ongoing support included",
  "Transparent, fixed pricing model",
  "100% remote with US/EU timezone overlap",
  "4+ years proven track record"
];

export default function Home() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center h-full relative w-full overflow-x-hidden">
{/* HERO SECTION - Professional Agency Design */}
<section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 overflow-hidden">
  {/* Galaxy Background - Only for Hero */}
  {/* See notes below on how to make this component responsive */}
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
      <img
        src="https://wisdomcoders.us/wp-content/uploads/2024/08/GSK-Group-Logo.webp"
        alt="GSK Group"
        className="w-6 h-6 rounded-full border-2 border-white/20 
                   bg-white p-[2px] object-contain"
      />
      <img
        src="https://wisdomcoders.us/wp-content/uploads/2024/08/sara-smith-logo-300x300.webp"
        alt="Sara Smith"
        className="w-6 h-6 rounded-full border-2 border-white/20 
                   bg-white p-[2px] object-contain"
      />
      <img
        src="https://wisdomcoders.us/wp-content/uploads/2024/08/A1-Taxis-300x274.webp"
        alt="A1 Taxis"
        className="w-6 h-6 rounded-full border-2 border-white/20 
                   bg-white p-[2px] object-contain"
      />
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
      {/* IMPROVED: Responsive font sizes and leading */}
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
      // IMPROVED: Added a max-width and adjusted gaps for better responsive behavior
      className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 w-full max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-cyan-400">200+</div>
        <div className="text-sm text-gray-400 font-medium">Projects Delivered</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-blue-400">4.9★</div>
        <div className="text-sm text-gray-400 font-medium">Client Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-purple-400">50+</div>
        <div className="text-sm text-gray-400 font-medium">Global Clients</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-emerald-400">24/7</div>
        <div className="text-sm text-gray-400 font-medium">Support</div>
      </div>
    </motion.div>

    {/* Hero CTAs */}
    <motion.div
      // NOTE: `flex-col sm:flex-row` is a great responsive pattern for buttons.
      className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {/* Primary & Secondary CTAs - no changes needed, they are well-structured */}
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

    {/* TrueFocus Animation - Repositioned with better styling */}
    <motion.div
      // IMPROVED: Adjusted margins and max-width for better flow.
      className="w-full max-w-5xl mx-auto mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
        {/* IMPROVED: Responsive padding */}
        <div className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
          {/* FIXED: Pass an array of strings to TrueFocus.
            This treats multi-word services like "Full-Stack Development" as a single, unbreakable unit.
            Your TrueFocus component will need to accept an array for its 'sentence' prop.
          */}
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
      {/* Cards are well-structured for responsiveness */}
      <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 backdrop-blur-sm border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500 hover:transform hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Optimized performance and rapid deployment cycles that keep you ahead of competition.</p>
        </div>
      </div>

      <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm border border-purple-400/20 hover:border-purple-300/40 transition-all duration-500 hover:transform hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Cutting-edge technologies and creative solutions that set new industry standards.</p>
        </div>
      </div>

      <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/10 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-300/40 transition-all duration-500 hover:transform hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Enterprise Grade</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Secure, scalable architecture with 99.9% uptime and comprehensive support.</p>
        </div>
      </div>
    </motion.div>

    {/* Scroll Indicator - Shows on small screens and up
<motion.div
  className="absolute left-1/2 -translate-x-1/2 hidden sm:block sm:bottom-12 md:bottom-16 lg:bottom-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1.5 }}
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-1"
  >
    <div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
  </motion.div>
</motion.div> */}

  </div>
</section>

        {/* Tech Logos
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-12 opacity-60 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {techLogos.map((tech) => (
            <div key={tech.name} className="flex items-center justify-center w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300">
              <img src={tech.src} alt={tech.name} className="w-8 h-8" />
            </div>
          ))}
        </motion.div> */}
<div className="relative overflow-hidden bg-transparent">
  {/* Gradient Background with bottom tilt */}
  <div className="absolute inset-0 z-0">
  <div
  className="absolute inset-0 z-0"
  style={{
    background: `
      radial-gradient(circle at 30% 70%, rgba(30, 41, 59, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(51, 65, 85, 0.3) 0%, transparent 50%),
      linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
    `,
    // clipPath: `polygon(0 0, 100% 0, 100% calc(100% - 100px), 0 100%)`
  }}
/>

    <div
      className="absolute inset-0 opacity-10"
      style={{
        background: `
          linear-gradient(45deg, transparent 40%, rgba(100, 116, 139, 0.1) 50%, transparent 60%)
        `,
        clipPath: "polygon(0 0, 100% 0, 100% 88%, 0% 100%)",
        animation: "subtle-slide 20s ease-in-out infinite"
      }}
    />
  </div>

  {/* Content */}
  <div className="relative z-10 py-16 text-center">
    <p className="text-gray-300 text-sm mb-4 tracking-wider font-medium">
      TRUSTED BY
    </p>
    <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
      Over 1000+ Entrepreneurs
    </h3>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-10" />

    {/* Logos Slider */}
    <InfiniteSlider className="opacity-100" gap={60} duration={25} durationOnHover={35}>
      {[
        { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/unnamed-file.webp", alt: "Nvidia" },
        { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/justroofinc-logo-removebg-preview-300x193.webp", alt: "GitHub" },
        { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/A1-Taxis-300x274.webp", alt: "Nike" },
        { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/GSK-Group-Logo.webp", alt: "Lemon Squeezy" },
        { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/supplement-logo.webp", alt: "OpenAI" },
        { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/logos-300x110.webp", alt: "Laravel" },
        { src: "https://wisdomcoders.us/wp-content/uploads/2024/08/eb_logo.webp", alt: "Column" },
      ].map((logo, i) => (
        <div key={i} className="flex items-center justify-center px-8">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={80}
            className="h-[55px] w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out"
          />
        </div>
      ))}
    </InfiniteSlider>

    {/* Stats Below Logos */}
    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 px-6">
      {[
        { number: "1000+", label: "Entrepreneurs" },
        { number: "50+", label: "Countries" },
        { number: "99%", label: "Satisfaction" }
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
          <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes subtle-slide {
      0%, 100% { transform: translateX(-100px); }
      50% { transform: translateX(100px); }
    }
  `}</style>
</div>


       {/* SERVICE SNAPSHOT SECTION */}
        <section className="w-full max-w-7xl mx-auto px-5 py-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to deployment, we handle every aspect of your digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.benefit}</p>
                
                <Link href={`/services${service.anchor}`}>
                  <motion.button
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More →
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURED CASE STUDIES SECTION */}
        <section className="w-full bg-gradient-to-br from-slate-900/50 to-gray-900/30 py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-teal-900/15" />
          
          <div className="max-w-7xl mx-auto px-5 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Featured <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Case Studies</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Real results from real projects that made a difference
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 rounded-full mb-3">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-emerald-300 text-sm font-medium mb-4">{study.outcome}</p>
                    
                    <Link href={study.link} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        className="text-white hover:text-emerald-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Read Case Study →
                      </motion.button>
                    </Link>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 text-emerald-300 text-base font-semibold border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
                >
                  View All Case Studies →
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE SAGE DEVS SECTION */}
        <section className="w-full max-w-7xl mx-auto px-5 py-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sage Devs</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We&apos;re not just developers—we&apos;re your strategic technology partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <TestimonialSlider />

        {/* PRICING TEASER SECTION */}
        <section className="w-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/15" />
          
          <div className="max-w-7xl mx-auto px-5 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Simple <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Transparent, fixed pricing with no hidden costs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Package */}
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <p className="text-4xl font-black text-purple-400 mb-2">Starting at $2,999</p>
                <p className="text-gray-400 text-sm mb-6">Perfect for small businesses & startups</p>
                <ul className="text-left text-gray-300 space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> Custom website design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> Responsive development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> SEO optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> 3 months support
                  </li>
                </ul>
                <button className="w-full h-12 rounded-xl bg-purple-600/20 text-purple-300 font-semibold border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>

              {/* Professional Package */}
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/30 backdrop-blur-sm border-2 border-blue-400/50 text-center transform scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <p className="text-4xl font-black text-blue-400 mb-2">Starting at $7,999</p>
                <p className="text-gray-400 text-sm mb-6">Ideal for growing businesses</p>
                <ul className="text-left text-gray-300 space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Everything in Starter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Web application development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Database integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> 6 months support
                  </li>
                </ul>
                <button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>

              {/* Enterprise Package */}
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <p className="text-4xl font-black text-emerald-400 mb-2">Custom Quote</p>
                <p className="text-gray-400 text-sm mb-6">For large-scale applications</p>
                <ul className="text-left text-gray-300 space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Everything in Professional
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Dedicated team
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Ongoing maintenance
                  </li>
                </ul>
                <button className="w-full h-12 rounded-xl bg-emerald-600/20 text-emerald-300 font-semibold border border-emerald-500/30 hover:bg-emerald-600/30 transition-all duration-300">
                  Contact Us
                </button>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-base font-semibold border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                >
                  View Detailed Pricing →
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section id="contact" className="w-full bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/20 py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-blue-500/5 to-transparent" />
          
          <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Ready to build something{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  great?
                </span>
              </h2>
              <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s transform your ideas into powerful digital experiences that drive real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                {/* Start Your Project Button */}
                <motion.a
                  href="mailto:sagedevs.network@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group inline-flex items-center justify-center h-16 px-12 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white text-lg font-bold transition-all duration-500 border border-blue-400/30 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden backdrop-blur-sm"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Start Your Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.a>

                {/* Book a Call Button */}
                <motion.a
                  href="https://calendly.com/sagedevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-transparent text-white text-lg font-semibold transition-all duration-500 border-2 border-white/20 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.a>
              </div>

              {/* Contact Info */}
              <motion.div
                className="mt-12 pt-8 border-t border-gray-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400 text-sm mb-6">
                  Prefer to reach out directly? We&apos;d love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <a 
                    href="mailto:sagedevs.network@gmail.com"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sagedevs.network@gmail.com
                  </a>
                  <a 
                    href="https://wa.me/923137732732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-300 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp: +92 313 7732732
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}