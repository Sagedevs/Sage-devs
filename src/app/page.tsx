// app/page.tsx

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Import your components and blocks
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillTag from "@/components/SkillTag";
import ProjectCard from "@/components/ProjectCard";
import FAQ from "@/components/faq";
import TestimonialSlider from "@/components/TestimonialSlider";

// Project data
const projects = [
  {
    id: 1,
    number: "01",
    title: "Custom Shopify Store",
    description: "Shopify Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/js.svg",
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/ts.svg",
      "/techstack/shopify.svg",
    ],
    imageSrc: "/proj/projectOne.webp",
    link: "https://by39tk-uv.myshopify.com/",
  },
  {
    id: 2,
    number: "02",
    title: "GDSC PLM Website",
    description: "Web Developer",
    techstack: [
      "/techstack/nextjs.svg",
      "/techstack/tailwind.svg",
      "/techstack/shadcn.svg",
    ],
    imageSrc: "/proj/projectTwo.webp",
    link: "https://www.gdsc-plm.org/",
  },
  {
    id: 3,
    number: "03",
    title: "GrievDesk",
    description: "Full Stack Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/css.svg",
      "/techstack/springboot.svg",
    ],
    imageSrc: "/proj/projectThree.webp",
    link: "https://plmce-grievdesk.web.app/",
  },
  {
    id: 4,
    number: "04",
    title: "Conso Programming Language and Compiler",
    description: "Full Stack Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/css.svg",
      "/techstack/python.svg",
      "/techstack/fastapi.svg",
      "/techstack/websockets.svg",
    ],
    imageSrc: "/proj/projectFour.webp",
    link: "https://conso-frontend-v2.onrender.com/",
  },
  {
    id: 5,
    number: "05",
    title: "AceFrame",
    description: "Web Developer",
    techstack: ["/techstack/nextjs.svg", "/techstack/tailwind.svg"],
    imageSrc: "/proj/projectFive.webp",
    link: "https://aceframe.web.app/",
  },
  {
    id: 6,
    number: "06",
    title: "KhanJee – Authentic Pakistani Cuisine & Catering in Montreal",
    description: "WordPress Developer",
    techstack: [
      "/techstack/js.svg",
      "/techstack/php.svg",
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/wordpress.svg",
    ],
    imageSrc: "/proj/projectSix.webp",
    link: "https://khanjeecanada.com/",
  },
];

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

// === Skill sections for Full Stack Developer card ===
const cmsAndEcommerce = [
  "WordPress (Theme & Plugin Customization)",
  "Elementor, WPBakery, Gutenberg",
  "WooCommerce",
  "Shopify (Dawn Theme, Liquid)",
  "Shopify App Integration",
  "Speed Optimization (Core Web Vitals)",
  "On-Page SEO (Yoast, RankMath)",
];

const frontend = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
];

const backend = [
  "Node.js",
  "Express.js",
  "Spring Boot",
  "Python (Flask, Django)",
  "REST API Integration",
];

const databases = ["MySQL", "Firebase", "Supabase", "MongoDB", "PostgreSQL"];

const mobile = ["React Native (basic)", "Flutter (basic)"];

const toolsAndDevOps = [
  "Git & GitHub",
  "Vercel / Netlify / cPanel",
  "Docker (basic)",
  "Postman",
  "CI/CD (basic)",
  "Figma (Developer Handoff)",
];

const otherSkills = [
  "SEO Optimization",
  "Performance Tuning (GTmetrix, PageSpeed)",
  "Agile / Scrum",
  "Client Communication (Upwork, Trello)",
];

const skillSections: { label: string; items: string[] }[] = [
  { label: "CMS & E‑commerce", items: cmsAndEcommerce },
  { label: "Frontend", items: frontend },
  { label: "Backend", items: backend },
  { label: "Databases", items: databases },
  { label: "Mobile", items: mobile },
  { label: "Tools & DevOps", items: toolsAndDevOps },
  { label: "Other", items: otherSkills },
];
// === end skill sections ===

const toolSkills = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Illustrator",
  "Photoshop",
  "Framer",
  "Notion",
  "Miro",
];

const processSkills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Accessibility",
  "Responsive Design",
  "Usability Testing",
  "Interaction Design",
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

        {/* Hero Text - Simplified for Performance */}
        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center relative px-5 md:px-0 z-10">
          <h1 className="lg:text-9xl md:text-7xl text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]">
            Sage Devs
          </h1>
        </div>

        <motion.div
          className="font-bold text-center mt-1 md:mt-3 z-10 px-5 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TrueFocus
            sentence="Full Stack Developer   UI/UX Designer  Entrepreneur"
            manualMode
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          />
        </motion.div>

        <style jsx>{`
          .bg-gradient-radial {
            background: radial-gradient(
              circle at center,
              var(--tw-gradient-stops)
            );
          }
        `}</style>

        {/* CTA Section */}
        <motion.div
          className="w-full flex flex-col items-center mt-12 mb-8 z-10 px-5 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Start Your Project Button */}
<motion.a
  href="mailto:sagedevs.network@gmail.com"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="relative group inline-flex items-center justify-center h-14 px-8 md:px-10 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white text-sm md:text-base font-bold transition-all duration-500 border border-blue-400/30 hover:border-cyan-300/50 hover:shadow-xl hover:shadow-cyan-500/30 overflow-hidden backdrop-blur-sm"
>
  <span className="relative z-10 flex items-center gap-2">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    Start Your Project
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
  <div className="absolute inset-0 bg-blue-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
</motion.a>

{/* Let's Build Together Button */}
<motion.a
  href="mailto:sagedevs.network@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="relative group inline-flex items-center justify-center h-14 px-8 md:px-10 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white text-sm md:text-base font-bold transition-all duration-500 border border-purple-400/30 hover:border-purple-300/50 hover:shadow-xl hover:shadow-purple-500/30 overflow-hidden backdrop-blur-sm"
>
  <span className="relative z-10 flex items-center gap-2">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    Let&apos;s Build Together
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
  <div className="absolute inset-0 bg-purple-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
</motion.a>

{/* WhatsApp Button */}
<motion.a
  href="https://wa.me/923137732732"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="relative group inline-flex items-center justify-center h-14 px-8 md:px-10 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white text-sm md:text-base font-bold transition-all duration-500 border border-emerald-400/30 hover:border-green-300/50 hover:shadow-xl hover:shadow-emerald-500/30 overflow-hidden gap-2 backdrop-blur-sm"
>
  <span className="relative z-10">WhatsApp</span>
  <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
  <div className="absolute inset-0 bg-emerald-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
</motion.a>
          </div>
        </motion.div>
        {/* Tech & Design Cards + Who Am I Section */}
        <motion.div
          className="flex-grow flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-[1400px] lg:mt-35 mt-10 lg:space-x-12 px-5 md:px-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col w-full max-w-lg mt-10 mb-20 space-y-8">
            {/* Full Stack Developer Card */}
            <motion.div
              className="relative p-6 rounded-lg transition-all duration-300 hover:scale-102 custom-corner-border bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50"
              whileHover={{
                boxShadow:
                  "0 10px 20px rgba(6, 182, 212, 0.1), 0 0 30px rgba(6, 182, 212, 0.05)",
                borderColor: "rgba(6, 182, 212, 0.3)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-lg" />
              <h3 className="font-bold md:text-2xl text-lg tracking-wide mb-3 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Full Stack Developer
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                I craft seamless digital experiences with precision,
                performance, and purpose. From architecture to deployment, I
                bring ideas to life through clean, scalable code.
              </p>

              {skillSections.map(({ label, items }) => (
                <div key={label} className="mb-6">
                  <h4 className="font-semibold mb-3 text-base bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    {label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <SkillTag key={skill} skillName={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* UI/UX Designer Card */}
            <motion.div
              className="relative p-6 rounded-lg transition-all duration-300 hover:scale-102 custom-corner-border bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm border border-gray-700/50"
              whileHover={{
                boxShadow:
                  "0 10px 20px rgba(168, 85, 247, 0.1), 0 0 30px rgba(168, 85, 247, 0.05)",
                borderColor: "rgba(168, 85, 247, 0.3)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-lg" />
              <h3 className="font-bold md:text-2xl text-lg tracking-wide mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                UI/UX Designer
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Designing interfaces that not only look beautiful but feel
                intuitive. I turn complex problems into simple, elegant user
                experiences that leave a lasting impact.
              </p>

              {/* Tools */}
              <div>
                <h4 className="font-semibold mb-3 text-base bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Tools I Use
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {toolSkills.map((tool) => (
                    <SkillTag key={tool} skillName={tool} />
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h4 className="font-semibold mb-3 text-base bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  UX Process Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {processSkills.map((step) => (
                    <SkillTag key={step} skillName={step} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Who Am I Section with Premium Luxury Gradient */}
          <motion.div
            className="flex flex-col items-center lg:items-start w-full max-w-2xl mt-10 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <BlurText
              text="Who Am I?"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold mb-8 bg-gradient-to-r from-emerald-200 via-cyan-200 to-purple-300 bg-clip-text text- drop-shadow-[0_0_50px_rgba(6,182,212,0.8)] animate-gradient-luxury filter brightness-125"
            />

            {/* Introduction Text */}
            <div className="mb-8 text-center md:text-left max-w-xl">
              <p className="text-gray-300 md:text-lg text-base leading-relaxed mb-4">
                My name is{" "}
                <span className="text-cyan-300 font-semibold">Abdul Ahad</span>{" "}
                with 4+ years of experience in web development. I&apos;m from
                Pakistan, passionate about creating digital solutions that make
                a difference.
              </p>
              <p className="text-gray-400 md:text-base text-sm leading-relaxed mb-4">
                I specialize in building modern, scalable web applications using
                cutting-edge technologies. From concept to deployment, I ensure
                every project delivers exceptional user experiences and robust
                functionality.
              </p>
              <p className="text-gray-400 md:text-base text-sm leading-relaxed">
                Whether it&apos;s crafting pixel-perfect interfaces or
                architecting complex backend systems, I bring dedication,
                creativity, and technical expertise to every challenge I tackle.
              </p>
            </div>

            {/* TiltedCard for desktop */}
            <motion.div
              className="hidden md:block mt-10 mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <TiltedCard
                imageSrc="/photos/tiltedcard.webp"
                altText="Profile"
                captionText="Abdul Ahad"
                containerHeight="600px"
                containerWidth="500px"
                imageHeight="600px"
                imageWidth="500px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <p className="absolute top-5 left-[85%] m-5 px-4 py-2 border rounded-lg opacity-50 font-bold bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur-sm">
                    Abdul Ahad
                  </p>
                }
              />
            </motion.div>

            {/* TiltedCard for mobile */}
            <motion.div
              className="md:hidden mt-10 mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <TiltedCard
                imageSrc="/photos/tiltedcard.webp"
                altText="Profile"
                captionText="Abdul Ahad"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <p className="absolute m-5 px-4 py-2 border rounded-lg opacity-50 font-bold bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur-sm">
                    Abdul Ahad
                  </p>
                }
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Experience Section with Premium Background & Luxury Gradient */}
        <div className="relative w-full px-5 md:px-0">
          {/* Experience Solid Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/15 to-teal-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/15 via-green-600/8 to-transparent" />
          <div className="absolute inset-0 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-emerald-500/8 via-green-500/12 to-teal-500/15" />

          <motion.div
            className="flex w-full items-center justify-center p-4 lg:mt-25 mt-5 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BlurText
              text="My Experience"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold bg-gradient-to-r from-green-200 via-emerald-200 to-cyan-300 bg-clip-text text- drop-shadow-[0_0_50px_rgba(16,185,129,0.8)] animate-gradient-luxury filter brightness-125"
            />
          </motion.div>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ExperienceTimeline />
          </motion.div>
        </div>

        {/* Projects Section with Premium Background & Luxury Gradient */}
        <div className="relative w-full px-5 md:px-0">
          {/* Projects Solid Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/40 to-slate-800" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-blue-800/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/12 via-blue-400/6 to-transparent" />
          <div className="absolute inset-0 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-white/8 to-cyan-600/12" />
          <motion.div
            className="flex w-full items-center justify-center p-2 mt-5 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="md:text-7xl text-3xl font-extrabold bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] animate-gradient-luxury filter brightness-125">
              My Projects
            </span>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[1400px] mx-auto mt-5 gap-4 p-0 px-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
          {/* View All Button */}
          <motion.div
            className="flex w-full items-center justify-center mt-8 mb-10 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolios">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 20px rgba(6, 182, 212, 0.15), 0 0 30px rgba(6, 182, 212, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group inline-flex items-center justify-center h-12 px-6 md:px-8 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/60 text-white text-sm md:text-base font-semibold transition-all duration-300 border border-white/10 hover:border-cyan-300/40 hover:text-cyan-300 overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>View All Projects</span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
          {/* TestimonialSlider Section */}
          <TestimonialSlider />
          {/* FAQ Section */}
          <FAQ />
        </div>
      </main>
    </>
  );
}
