"use client";
import React, { useState } from 'react';
import { Palette, Plug, Lock, RefreshCw, Code, BookText, Activity } from 'lucide-react';
import Link from "next/link";
const WordPressServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const wordpressServices = [
    {
      id: 1,
      icon: Palette,
      title: "Custom WordPress Theme Development",
      subtitle: "Unique & Engaging Designs",
      description: "Crafting visually stunning and highly functional WordPress themes from scratch. We focus on responsive design, optimal performance, and seamless user experience.",
      features: ["Pixel-perfect design implementation", "Mobile-first responsiveness", "SEO-friendly code structure", "Custom post types & fields integration"],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "ACF"],
      stats: "70+ Themes Built",
      timeline: "6-12 weeks",
      complexity: "Custom"
    },
    {
      id: 2,
      icon: Plug,
      title: "WordPress Plugin Development",
      subtitle: "Extend Functionality & Features",
      description: "Developing powerful and secure custom plugins to add unique functionalities to your WordPress site, or customizing existing plugins to fit your specific business needs.",
      features: ["Custom feature implementation", "Third-party API integrations", "Performance optimization for plugins", "Security hardening & updates"],
      technologies: ["PHP", "JavaScript", "WordPress API", "React"],
      stats: "50+ Plugins",
      timeline: "4-10 weeks",
      complexity: "Extension"
    },
    {
      id: 3,
      icon: Activity,
      title: "WordPress Performance & Speed Optimization",
      subtitle: "Blazing Fast Websites",
      description: "Enhancing your WordPress site's loading speed and overall performance through image optimization, caching, code minification, and database cleanup, improving user experience and SEO.",
      features: ["Image optimization & lazy loading", "Browser caching & CDN integration", "Database optimization & cleanup", "Code minification & concatenation"],
      technologies: ["WP Rocket", "Cloudflare", "Imagify", "Google PageSpeed"],
      stats: "90+ Optimized",
      timeline: "2-5 days",
      complexity: "Optimization"
    },
    {
      id: 4,
      icon: Lock,
      title: "WordPress Security & Malware Removal",
      subtitle: "Protecting Your Digital Asset",
      description: "Implementing robust security measures to protect your WordPress site from hacks, malware, and other vulnerabilities, including proactive monitoring and swift removal services.",
      features: ["Firewall & brute force protection", "Malware scanning & removal", "Regular security audits", "SSL certificate implementation"],
      technologies: ["Wordfence", "Sucuri", "Cloudflare", "SSL/TLS"],
      stats: "100% Secure",
      timeline: "Immediate Response",
      complexity: "Security"
    },
    {
      id: 5,
      icon: RefreshCw,
      title: "WordPress Maintenance & Support",
      subtitle: "Ensuring Peak Performance & Uptime",
      description: "Comprehensive ongoing support including regular updates, backups, security monitoring, and troubleshooting to ensure your WordPress site runs smoothly and securely.",
      features: ["Daily/weekly backups", "Core, theme & plugin updates", "24/7 uptime monitoring", "Bug fixing & technical support"],
      technologies: ["ManageWP", "UpdraftPlus", "Sucuri", "Cloudways"],
      stats: "120+ Clients",
      timeline: "Ongoing",
      complexity: "Support"
    },
    {
      id: 6,
      icon: Code,
      title: "WordPress Development for Businesses",
      subtitle: "Enterprise-Grade Solutions",
      description: "Building robust and scalable WordPress solutions for businesses, including custom integrations, CRM connectivity, and advanced e-commerce functionalities (WooCommerce).",
      features: ["WooCommerce development & customization", "CRM & ERP integrations", "API development for external services", "High-traffic & scalable architecture"],
      technologies: ["WooCommerce", "BuddyPress", "LearnDash", "Elementor Pro"],
      stats: "80+ Projects",
      timeline: "10-20 weeks",
      complexity: "Business"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Custom': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Extension': return 'text-red-400 border-red-500/30 bg-red-500/10';
      case 'Optimization': return 'text-lime-400 border-lime-500/30 bg-lime-500/10';
      case 'Security': return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
      case 'Support': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Business': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0 z-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-yellow-400/30 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (3 + Math.random() * 3) + 's'
              }}
            />
          ))}
        </div>

        {/* Gradient Background Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-gradient-radial from-yellow-500/15 via-yellow-500/8 to-transparent rounded-full blur-3xl opacity-70 animate-blob mix-blend-lighten" />
        <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-gradient-radial from-orange-500/12 via-orange-500/6 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000 mix-blend-lighten" />
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-radial from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000 mix-blend-lighten" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.1] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(252, 211, 77, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(252, 211, 77, 0.2) 1px, transparent 1px)
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
              <span className="text-blue-400 font-bold tracking-wide flex items-center gap-2">
                <BookText className="w-4 h-4" />
                WordPress Services
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Powerful WordPress Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Your Business
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            We specialize in crafting dynamic, secure, and high-performing WordPress websites.
            From custom theme development and robust plugin solutions to ongoing maintenance and 
            optimization, we ensure your WordPress site is a powerful asset for your brand.
          </p>
        </div>

        {/* WordPress Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {wordpressServices.map((service) => (
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
                      <div className="text-xs font-bold text-blue-400 mb-1">{service.stats}</div>
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
                    <p className="text-blue-400 font-medium text-xs uppercase tracking-wide">
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
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      Technical Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xxs text-slate-400 group/item">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-blue-300 transition-colors" />
                          <span className="group-hover/item:text-slate-300 transition-colors leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                      Development Timeline
                    </h4>
                    <div className="text-xxs text-slate-400">
                      {service.timeline} typical delivery
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our Core WordPress Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-blue-400" />
                Theme & Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Custom Themes", "Elementor", "Divi", "Oxygen Builder", "ACF Pro", "Figma (Design)"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Plug className="w-5 h-5 text-cyan-400" />
                Plugins & Custom Dev
              </h3>
              <div className="flex flex-wrap gap-2">
                {["WooCommerce", "Gravity Forms", "Yoast SEO", "Custom Plugins", "API Integrations"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-400" />
                Performance & Security
              </h3>
              <div className="flex flex-wrap gap-2">
                {["WP Rocket", "Cloudflare CDN", "Wordfence", "SSL Certificates", "Daily Backups"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
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
            <Link href="/Contact" className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Start Your WordPress Project
              <BookText className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies#case-studies-grid" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-blue-500/30 transition-all duration-300 text-base">
              View WordPress Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPressServices;