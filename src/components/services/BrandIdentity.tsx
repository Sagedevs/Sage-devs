"use client";
import React, { useState } from 'react';
import { PenTool, Palette, Type, BookText, Users, BadgeCheck, Globe, Layers, Target } from 'lucide-react';
import Link from "next/link";
const BrandIdentity = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const brandServices = [
    {
      id: 1,
      icon: PenTool,
      title: "Logo Design",
      subtitle: "Your Visual Signature",
      description: "Crafting unique logos that capture your brand's essence and create a lasting impression.",
      features: ["Custom Logo Concepts", "Brand Personality Integration", "Versatile File Formats", "Trademark Guidance"],
      technologies: ["Adobe Illustrator", "Procreate", "Vector Graphics", "Brand Strategy"],
      stats: "200+ Logos",
      timeline: "3-5 weeks",
      complexity: "Core Identity"
    },
    {
      id: 2,
      icon: Palette,
      title: "Brand Colors",
      subtitle: "Emotional Impact",
      description: "Developing a strategic color palette that evokes the right emotions and brand perception.",
      features: ["Color Psychology", "Accessibility Compliance", "Primary & Secondary Palettes", "Application Guidelines"],
      technologies: ["Pantone Matching", "Color Theory", "WCAG Standards", "Brand Applications"],
      stats: "150+ Palettes",
      timeline: "2-3 weeks",
      complexity: "Visual Language"
    },
    {
      id: 3,
      icon: Type,
      title: "Brand Typography",
      subtitle: "Voice in Type",
      description: "Selecting typefaces that communicate your brand's personality with clarity and distinction.",
      features: ["Custom Font Pairings", "Web & Print Optimization", "Hierarchy Systems", "Licensing Support"],
      technologies: ["Font Pairing", "Type Design", "Typography Scales", "Brand Consistency"],
      stats: "90+ Type Systems",
      timeline: "2-4 weeks",
      complexity: "Tone Setting"
    },
    {
      id: 4,
      icon: BookText,
      title: "Brand Guidelines",
      subtitle: "The Brand Bible",
      description: "Comprehensive manual ensuring consistent brand application across all platforms and materials.",
      features: ["Usage Rules", "Visual Standards", "Messaging Guidelines", "Implementation Examples"],
      technologies: ["InDesign", "Brand Strategy", "Content Guidelines", "Digital & Print"],
      stats: "120+ Guidelines",
      timeline: "4-6 weeks",
      complexity: "Governance"
    },
    {
      id: 5,
      icon: Target,
      title: "Brand Strategy",
      subtitle: "Purpose & Position",
      description: "Defining your brand's core positioning, values, and market differentiation.",
      features: ["Brand Archetypes", "Value Proposition", "Messaging Framework", "Audience Mapping"],
      technologies: ["Market Research", "Competitive Analysis", "Brand Architecture", "Positioning Strategy"],
      stats: "80+ Strategies",
      timeline: "6-8 weeks",
      complexity: "Foundation"
    },
    {
      id: 6,
      icon: Globe,
      title: "Brand Experience",
      subtitle: "Every Touchpoint",
      description: "Ensuring consistent brand expression across all customer interactions and touchpoints.",
      features: ["Customer Journey Mapping", "Touchpoint Audit", "Experience Design", "Brand Training"],
      technologies: ["CX Strategy", "Service Design", "Brand Standards", "Employee Training"],
      stats: "60+ Experiences",
      timeline: "8-12 weeks",
      complexity: "Integration"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Core Identity': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Visual Language': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Tone Setting': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'Governance': return 'text-red-400 border-red-500/30 bg-red-500/10';
      case 'Foundation': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Integration': return 'text-lime-400 border-lime-500/30 bg-lime-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (2 + Math.random() * 2) + 's'
              }}
            />
          ))}
        </div>

        {/* Gradient Background Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/12 via-indigo-500/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-8 mx-auto">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-purple-400 font-bold tracking-wide flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                Brand Identity Services
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Building Powerful{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Brand Identities
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            We craft distinctive brand identities that resonate with your audience and stand the test of time. 
            Our comprehensive approach ensures your brand tells a compelling story across all touchpoints, 
            creating meaningful connections with your customers.
          </p>
        </div>

        {/* Brand Identity Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {brandServices.map((service) => (
            <div
              key={service.id}
              className="group relative h-full cursor-pointer"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-800/40 to-slate-900/80 backdrop-blur-xl border border-slate-700/30 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{
                       animation: hoveredCard === service.id ? 'gradientShift 3s infinite' : 'none'
                     }} />
                
                <style jsx>{`
                  @keyframes gradientShift {
                    0% { background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                    50% { background: linear-gradient(225deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                    100% { background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                  }
                `}</style>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 via-blue-500/10 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-tr-3xl" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header with Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xs font-bold text-purple-400 mb-1">{service.stats}</div>
                      <div className={`text-xxs px-2 py-1 rounded-full ${getComplexityColor(service.complexity)}`}>
                        {service.complexity}
                      </div>
                    </div>
                  </div>

                  {/* Title Section */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-purple-400 font-medium text-xs uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description - More Detailed */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-xs">
                    {service.description}
                  </p>

                  {/* Key Features - Expanded */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      Technical Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xxs text-slate-400 group/item">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-purple-300 transition-colors" />
                          <span className="group-hover/item:text-slate-300 transition-colors leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2" />
                      Development Timeline
                    </h4>
                    <div className="text-xxs text-slate-400">
                      {service.timeline} typical delivery
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xxs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Identity Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our Brand Identity Toolkit
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-purple-400" />
                Design & Identity Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Adobe Illustrator", "Affinity Designer", "Procreate", "Figma", "Sketch", "CorelDRAW"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                Brand Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Frontify", "Bynder", "Brandfolder", "InVision DSM", "Zeplin", "Figma"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Research & Strategy
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Audience Research", "Competitive Analysis", "Brand Archetypes", "Positioning Strategy", "Trademark Research", "Brand Audits"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            
            <Link href="/Contact" className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Start Your Brand Journey
              <BadgeCheck className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies#case-studies-grid" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-purple-500/30 transition-all duration-300 text-base">
              View Case Study 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity;