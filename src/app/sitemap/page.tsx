"use client";
import React, { useState } from 'react';
import { Home, Users, Briefcase, MessageSquare, HelpCircle, Shield, DollarSign, Folder, Wrench, BookOpen, FileCheck, Mail, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap - SageDevs | Complete Site Navigation',
  description: 'Explore the complete sitemap of SageDevs website. Navigate through our services, company information, resources, and legal pages with ease.',
  keywords: ['sitemap', 'navigation', 'SageDevs', 'web development', 'AI solutions', 'company', 'services', 'resources'],
  openGraph: {
    title: 'Sitemap - SageDevs',
    description: 'Complete navigation guide for SageDevs website - Find all pages and sections easily',
    type: 'website',
    url: 'https://sagedevs.com/sitemap',
    images: [
      {
        url: 'https://sagedevs.com/og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'SageDevs Sitemap',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap - SageDevs',
    description: 'Complete navigation guide for SageDevs website',
    images: ['https://sagedevs.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sagedevs.com/sitemap',
  },
};

export default function SitemapPage() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const sitemapData = [
    {
      category: "Company",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
      links: [
        { name: "Home", url: "/", icon: <Home className="w-5 h-5" />, description: "Welcome to SageDevs" },
        { name: "About", url: "/about", icon: <Users className="w-5 h-5" />, description: "Our story & team" },
        { name: "Careers", url: "/careers", icon: <Briefcase className="w-5 h-5" />, description: "Join our journey" },
        { name: "Contact", url: "/contact", icon: <Mail className="w-5 h-5" />, description: "Get in touch" }
      ]
    },
    {
      category: "Services & Products",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400",
      links: [
        { name: "Services", url: "/services", icon: <Wrench className="w-5 h-5" />, description: "What we offer" },
        { name: "Projects", url: "/projects", icon: <Folder className="w-5 h-5" />, description: "Our portfolio" },
        { name: "Pricing", url: "/pricing", icon: <DollarSign className="w-5 h-5" />, description: "Investment plans" },
        { name: "LetsTalkAI", url: "/letstalkai", icon: <MessageSquare className="w-5 h-5" />, description: "AI solutions" }
      ]
    },
    {
      category: "Resources",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      links: [
        { name: "Blog", url: "/blog", icon: <Globe className="w-5 h-5" />, description: "Latest insights" },
        { name: "Case Studies", url: "/case-studies", icon: <FileCheck className="w-5 h-5" />, description: "Success stories" },
        { name: "Resources", url: "/resources", icon: <BookOpen className="w-5 h-5" />, description: "Learning hub" },
        { name: "FAQ", url: "/faq", icon: <HelpCircle className="w-5 h-5" />, description: "Quick answers" }
      ]
    },
    {
      category: "Legal",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
      links: [
        { name: "Privacy Policy", url: "/privacy", icon: <Shield className="w-5 h-5" />, description: "Your data security" },
        { name: "Terms of Service", url: "/terms", icon: <FileCheck className="w-5 h-5" />, description: "Usage terms" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-float"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow-delayed"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-6 animate-glow">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">SITE NAVIGATION</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Explore
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient-delayed">
              SageDevs
            </span>
          </h1>
          
          <p className="text-blue-200/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your gateway to innovation, expertise, and digital excellence
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-shimmer"></div>
          </div>
        </div>

        {/* Interactive Sitemap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {sitemapData.map((section, idx) => (
            <div
              key={idx}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-500 h-full hover:transform hover:scale-105 hover:-translate-y-2">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
                
                {/* Category Header */}
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400">
                      {section.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {section.category}
                  </h2>
                </div>

                {/* Links */}
                <ul className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      onMouseEnter={() => setHoveredIndex(`${idx}-${linkIdx}`)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <a
                        href={link.url}
                        className="flex items-start gap-4 group/link relative"
                      >
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} p-0.5 transform group-hover/link:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 group-hover/link:text-white transition-colors">
                            {link.icon}
                          </div>
                        </div>
                        
                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-semibold group-hover/link:text-blue-300 transition-colors">
                              {link.name}
                            </span>
                            <ArrowRight className={`w-4 h-4 text-blue-400 transform transition-all duration-300 ${
                              hoveredIndex === `${idx}-${linkIdx}` ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'
                            }`} />
                          </div>
                          <p className="text-blue-200/60 text-sm mt-1 group-hover/link:text-blue-200/80 transition-colors">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 backdrop-blur-xl rounded-3xl border border-blue-500/30">
            <Globe className="w-12 h-12 text-blue-400 animate-pulse-slow" />
            <p className="text-blue-200 text-lg">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
          
          <p className="text-blue-300/40 text-sm mt-8">
            Last updated: December 3, 2025
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 40px) scale(1.05); }
          66% { transform: translate(40px, -40px) scale(0.95); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.08); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes particle {
          0% { transform: translateY(0) translateX(0) scale(0); opacity: 0; }
          10% { opacity: 0.3; transform: scale(1); }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(50px) scale(0); opacity: 0; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 5s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .animate-gradient-delayed {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
          animation-delay: 0.5s;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}