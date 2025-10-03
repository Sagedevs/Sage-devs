"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
  outcome: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  scope: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Priority Insurance Brokers",
    subtitle: "Professional Business Insurance Brokerage Platform",
    category: "Business Insurance",
    image: "/proj/priotize.webp",
    link: "https://priorityib.com.au/",
    outcome: "Enhanced client acquisition by 180%",
    challenge: "Creating a comprehensive, trustworthy platform for business insurance services with complex policy options, client testimonials, and seamless quote generation system.",
    solution: "Developed a professional website with detailed service pages, client success stories, comprehensive FAQ section, testimonials, and integrated contact forms for quick quotes.",
    results: [
      "180% increase in insurance inquiries",
      "65% improvement in user engagement",
      "95% client satisfaction rate",
      "40% faster quote turnaround time"
    ],
    technologies: ["WordPress", "PHP", "MySQL", "Custom CSS", "JavaScript"],
    duration: "7-8 weeks",
    scope: "Full Website Development & SEO Optimization"
  },
  {
    id: 2,
    title: "KhanJee Canada",
    subtitle: "Authentic Pakistani Cuisine & Catering Restaurant",
    category: "Restaurant & Food Service",
    image: "/proj/projectSix.webp",
    link: "https://khanjeecanada.com/",
    outcome: "Boosted online reservations by 250%",
    challenge: "Building an appetizing digital presence for a Pakistani restaurant with online reservations, detailed menu showcase, cultural authenticity, and franchise opportunities.",
    solution: "Created a vibrant, culturally-rich website with high-quality food photography, comprehensive menu with prices, reservation system, franchise information, and Instagram integration.",
    results: [
      "250% increase in online reservations",
      "300% growth in catering inquiries",
      "40K+ Instagram followers integration",
      "Successful franchise expansion launch"
    ],
    technologies: ["WordPress", "Custom PHP", "MySQL", "Instagram API", "Reservation System"],
    duration: "5-6 weeks",
    scope: "Restaurant Website & Social Media Integration"
  },
  {
    id: 3,
    title: "Ahad Dev Portfolio",
    subtitle: "Full Stack Developer Professional Portfolio",
    category: "Personal Portfolio",
    image: "/proj/portfolio.jpg",
    link: "https://ahad-dev.vercel.app/",
    outcome: "Secured 15+ high-value clients",
    challenge: "Creating a standout developer portfolio showcasing full-stack expertise, modern technologies, project case studies, and comprehensive service offerings.",
    solution: "Built a modern, interactive portfolio with advanced animations, detailed project showcases, comprehensive tech stack display, client testimonials, and FAQ section.",
    results: [
      "15+ high-value client acquisitions",
      "98% performance score",
      "500% increase in project inquiries",
      "Featured in multiple design showcases"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    duration: "3-4 weeks",
    scope: "Personal Brand & Portfolio Development"
  },
];

// Modal Component - FIXED VERSION
const Modal = ({ caseStudy, onClose, isMobile }: { caseStudy: CaseStudy; onClose: () => void; isMobile: boolean }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power2.out", delay: 0.1 }
      );
    }, modalRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] p-4 overflow-y-auto"
      style={{ 
        paddingTop: '100px', 
        paddingBottom: '40px',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch'
      }}
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-2xl w-full max-w-3xl border border-slate-700/50 relative shadow-2xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - FIXED with higher z-index */}
        <button
          className="absolute -top-4 -right-4 z-[10000] w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-red-600/90 transition-all duration-300 flex items-center justify-center border border-slate-600/50 shadow-lg hover:shadow-red-500/50"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content - No inner scroll, uses parent scroll */}
        <div 
          className="w-full"
        >
          {/* Hero Section - Smaller */}
          <div className="relative">
            <div className="aspect-video overflow-hidden relative rounded-t-2xl">
              <Image 
                src={caseStudy.image} 
                alt={caseStudy.title}
                width={900} 
                height={500} 
                priority={true} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent" />
            </div>
            
            {/* Hero Content - Compact */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <span className="inline-block px-2.5 py-1 text-xs font-medium bg-blue-500/30 text-blue-200 rounded-full mb-2 backdrop-blur-sm border border-blue-400/30 w-fit">
                {caseStudy.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
                {caseStudy.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base mb-2">{caseStudy.subtitle}</p>
              <p className="text-blue-300 text-sm md:text-base font-semibold">{caseStudy.outcome}</p>
            </div>
          </div>

          {/* Content Sections - More compact */}
          <div className="p-5 md:p-6 space-y-6">
            {/* Project Overview */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4">Project Overview</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-1 text-xs uppercase tracking-wide">Duration</h5>
                  <p className="text-white text-sm font-medium">{caseStudy.duration}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-1 text-xs uppercase tracking-wide">Scope</h5>
                  <p className="text-white text-sm font-medium">{caseStudy.scope}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-1 text-xs uppercase tracking-wide">Impact</h5>
                  <p className="text-white text-sm font-medium">{caseStudy.outcome}</p>
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">The Challenge</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{caseStudy.challenge}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">The Solution</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4">Key Results</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.results.map((result: string, index: number) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg p-3 border border-blue-500/20 backdrop-blur-sm"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 rounded-full text-xs font-medium border border-blue-400/30 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4 pb-2">
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30 text-sm"
              >
                <span>View Live Project</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) rgba(15, 23, 42, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
};

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCase(null);
    };

    if (selectedCase) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedCase]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        
        cards.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: isMobile ? 30 : 50,
            scale: isMobile ? 1 : 0.95,
            duration: isMobile ? 0.5 : 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          });
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: isMobile ? 0.5 : 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <>
      <section ref={sectionRef} className="w-full bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-900/15" />
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-indigo-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 relative z-10">
          <div ref={headerRef} className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              Featured <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Real projects, real results, real impact on business growth
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer active:scale-95"
                onClick={() => setSelectedCase(study)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
                        <p className="text-white text-xs sm:text-sm font-medium">Click to view full case study</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-5 md:p-6">
                  <span className="inline-block px-2.5 py-1 sm:px-3 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full mb-2 sm:mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{study.subtitle}</p>
                  <p className="text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">{study.outcome}</p>
                  
                  <div className="text-white hover:text-blue-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          <div ref={ctaRef} className="text-center mt-8 sm:mt-10 md:mt-12">
            <a
              href="/case-studies"
              className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </section>

      {selectedCase && (
        <Modal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} isMobile={isMobile} />
      )}
    </>
  );
}