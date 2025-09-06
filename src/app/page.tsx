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

// Tech logos
const techLogos = [
  { name: "React", src: "/techstack/react.svg" },
  { name: "Next.js", src: "/techstack/nextjs.svg" },
  { name: "WordPress", src: "/techstack/wordpress.svg" },
  { name: "Shopify", src: "/techstack/shopify.svg" },
  { name: "Node.js", src: "/techstack/nodejs.svg" },
  { name: "TypeScript", src: "/techstack/ts.svg" },
];

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
      <main className="flex-grow flex flex-col items-center h-full relative pt-20 w-full overflow-x-hidden">
        {/* Enhanced Hero Banner Background - Blue, Black, White Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-800/20 to-cyan-900/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />

        {/* Luxury mesh gradient overlay for banner */}
        <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-br from-blue-400/8 via-cyan-400/12 to-slate-600/15" />
        <div className="absolute top-0 left-0 right-0 h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-cyan-500/5 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-screen bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-blue-400/5 via-cyan-400/8 to-white/8" />

        {/* Static Background Gradient for Performance */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-transparent" />

        {/* HERO SECTION */}
        <section className="w-full flex flex-col items-center justify-center min-h-screen relative z-10 px-5 md:px-0">
          {/* Hero Headline */}
          <motion.div
            className="w-full flex justify-center items-center text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="relative lg:text-8xl md:text-6xl text-4xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] max-w-6xl leading-tight">
              We build scalable web apps &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                world-class UI/UX
              </span>
            </h1>
          </motion.div>

          {/* Hero Subheadline */}
          <motion.div
            className="w-full flex justify-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed">
              Sage Devs is a global full stack software agency that builds scalable web apps and delivers world-class UI/UX for startups and businesses.
            </p>
          </motion.div>

          {/* TrueFocus Animation - Keep as requested */}
          <motion.div
            className="font-bold text-center mt-1 md:mt-3 z-10 px-2 sm:px-5 md:px-10 lg:px-20 xl:px-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TrueFocus
              sentence="FullStackDevelopment UIUXDesign WordPressDevelopment EcommerceStores SaaSSolutions Cloud&DevOps EnterpriseApps"
              manualMode
              blurAmount={5}
              borderColor="cyan"
              animationDuration={0.3}
              pauseBetweenAnimations={1}
            />
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white text-lg font-bold transition-all duration-500 border border-blue-400/30 hover:border-cyan-300/50 hover:shadow-xl hover:shadow-cyan-500/30 overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Start Your Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-flex items-center justify-center h-16 px-8 rounded-2xl bg-transparent text-white text-lg font-semibold transition-all duration-500 border-2 border-white/20 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <span className="relative z-10">Get a Quote</span>
            </motion.a>

            {/* Tertiary CTA */}
            <motion.a
              href="https://calendly.com/sagedevs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200 text-sm font-medium underline underline-offset-4 hover:underline-offset-8 transition-all duration-300"
            >
              📅 Book a Call
            </motion.a>
          </motion.div>

          {/* Tech Logos */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-12 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {techLogos.map((tech) => (
              <div key={tech.name} className="flex items-center justify-center w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300">
                <img src={tech.src} alt={tech.name} className="w-8 h-8" />
              </div>
            ))}
          </motion.div>

          {/* Microtrust - Trusted by */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-gray-500 text-sm mb-4">Trusted by startups and enterprises worldwide</p>
          <InfiniteSlider className="opacity-90" gap={40} duration={30} durationOnHover={14}>
            <div className="flex items-center justify-center px-6">
              <Image src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia" width={120} height={24} className="h-6 w-auto opacity-80 invert dark:invert-0" />
            </div>
            <div className="flex items-center justify-center px-6">
              <Image src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub" width={110} height={22} className="h-5 w-auto opacity-80 invert dark:invert-0" />
            </div>
            <div className="flex items-center justify-center px-6">
              <Image src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike" width={110} height={22} className="h-5 w-auto opacity-80 invert dark:invert-0" />
            </div>
            <div className="flex items-center justify-center px-6">
              <Image src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy" width={140} height={28} className="h-7 w-auto opacity-80 invert dark:invert-0" />
            </div>
            <div className="flex items-center justify-center px-6">
              <Image src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI" width={120} height={24} className="h-6 w-auto opacity-80 invert dark:invert-0" />
            </div>
            <div className="flex items-center justify-center px-6">
              <Image src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel" width={110} height={22} className="h-5 w-auto opacity-80 invert dark:invert-0" />
            </div>
            <div className="flex items-center justify-center px-6">
              <Image src="https://html.tailus.io/blocks/customers/column.svg" alt="Column" width={110} height={22} className="h-5 w-auto opacity-80 invert dark:invert-0" />
            </div>
          </InfiniteSlider>
        </motion.div>
        </section>

        <style jsx>{`
          .bg-gradient-radial {
            background: radial-gradient(
{{ ... }} (rest of the code remains the same)
              circle at center,
              var(--tw-gradient-stops)
            );
          }
        `}</style>

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