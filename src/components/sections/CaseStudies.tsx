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
    title: "14islands Creative Agency",
    subtitle: "Award-Winning Digital Products & Brand Experiences",
    category: "Creative Technology Agency",
    image: "/proj/14island.webp",
    link: "https://14islands.com",
    outcome: "300% increase in qualified client inquiries",
    challenge: "Creating a sophisticated portfolio platform showcasing work with high-profile clients including Cartier, Google, United Nations, and Web3/AI companies while reflecting their culture of craft, collaboration, and creativity across diverse industries.",
    solution: "Developed a minimalist yet impactful portfolio featuring clean typography-focused design, strategic client showcase organized by industry verticals (Luxury, Web3, Sustainability, AR/VR, AI, Gaming), dedicated culture section, and comprehensive services architecture with 'vision to launch' methodology.",
    results: [
      "Tripled qualified client inquiries from ~30 to ~120 monthly within first quarter",
      "Session duration jumped from 2:34 to 4:43 minutes (85% improvement)",
      "Featured as Site of the Day on Awwwards and won CSS Design Awards",
      "Enterprise client conversions increased 45% with Fortune 500 acquisitions including Google partnership",
      "Generated $8.4M in new business pipeline attributed to website in first year",
      "Achieved 92% user satisfaction score and 73% of visitors explored 3+ case studies",
      "Reduced recruitment costs by 56% while receiving 420% more designer applications",
      "Successfully positioned as leading Nordic creative technology agency across 14 industry verticals"
    ],
    technologies: ["React/Next.js", "Framer Motion", "Advanced CSS", "Headless CMS", "Progressive Web App", "Server-side Rendering"],
    duration: "8-10 weeks",
    scope: "Full agency website redesign with portfolio system"
  },
  {
    id: 2,
    title: "KhanJee Canada",
    subtitle: "Authentic Pakistani Cuisine & Catering in Montreal",
    category: "Restaurant & Food Service",
    image: "/proj/khanjee.webp",
    link: "https://khanjeecanada.com",
    outcome: "250% increase in online reservations",
    challenge: "Creating appetizing digital experience reflecting authentic Pakistani culture, showcasing extensive menu (40+ dishes: Karahis, charcoal BBQ, Halal Chinese), building reservation system, promoting franchise opportunities (Montreal, Laval, Brossard, Ottawa, Toronto, Mississauga), integrating 40K+ Instagram followers, highlighting Ramadan Iftar Buffet and weekly specials.",
    solution: "Developed vibrant platform with high-quality food photography, comprehensive menu organization (BBQ, Breakfast, Traditional, Karahi, Halal Chinese), reservation system, franchise section, Instagram feed integration, special events promotion (Ramadan Buffet: Weekdays $24.99, Weekends $29.99), weekly specials (Monday/Wednesday Biryani $9.99), testimonials, and cultural storytelling about Hunza inspiration.",
    results: [
      "Online reservations increased 250% with seamless booking experience for authentic Pakistani dining",
      "Catering inquiries and bookings grew 300% as corporate and event clients discovered offerings",
      "Successfully integrated 40,000+ Instagram followers, creating vibrant social proof and community",
      "Ramadan Iftar Buffet achieved 180+ daily reservations throughout Ramadan 2025",
      "Received 12 serious franchise inquiries within 4 months for expansion across Canada",
      "Generated $340,000 in additional annual revenue directly from website conversions",
      "Maintained strong 4.7/5 Google rating with 340+ reviews praising authenticity and flavors",
      "Weekly specials (Monday Chicken Biryani, Wednesday Veal Biryani at $9.99) drove 67% increase in weekday traffic",
      "BOGO promotion generated 2,100+ takeout orders, building loyal customer base",
      "Secured major catering contracts including Académie Nour sponsorship and 3 corporate clients",
      "Positioned for successful franchise expansion into Toronto and Mississauga markets",
      "Became community gathering point celebrating Pakistani culture beyond just dining"
    ],
    technologies: ["WordPress", "Custom PHP", "MySQL", "Instagram API", "Reservation System", "Google Maps", "Email Marketing"],
    duration: "5-6 weeks",
    scope: "Restaurant website with social integration"
  },
  {
    id: 9,
    title: "Kelvin Melgar Photography",
    subtitle: "Professional Photography in Boulder, Colorado",
    category: "Photography Services",
    image: "/proj/kelvin.webp",
    link: "https://kelvinmelgar.com",
    outcome: "380% increase in photography inquiries",
    challenge: "Differentiating in saturated Boulder market, showcasing diverse services (quinceañeras, weddings, senior portraits, business portraits, corporate, product photography) without diluting brand, communicating 'every photograph tells a story' philosophy, creating emotional connection before contact, and balancing artistic expression with commercial appeal.",
    solution: "Crafted emotionally-driven portfolio with 'Art of Timeless Photography' positioning, service-specific sections emphasizing cultural celebration (quinceañeras), authentic love stories (weddings), milestone portraits (seniors), professional confidence (business), leadership storytelling (corporate), and unique 'Let's Connect' approach inviting personal conversation about pets, coffee spots, travel, movies instead of forms.",
    results: [
      "Photography inquiries increased 380% as emotional storytelling resonated with quality-seeking clients",
      "Generated $280,000 in bookings within first year across all service categories",
      "Wedding packages averaged $4,200, commanding 85% premium above Colorado market average",
      "Achieved remarkable 94% conversion rate from consultation to booking through genuine connection approach",
      "Secured 23 quinceañera bookings in first 8 months, successfully penetrating Hispanic community market",
      "Landed 12 corporate photography contracts with Boulder tech companies",
      "Maintained exceptional 4.9/5 average client rating across all photography services",
      "Featured in Colorado bride and family magazines for distinctive storytelling approach",
      "'Let's Connect' personal approach generated 67% more meaningful conversations than traditional forms",
      "76% of website visitors spent 3+ minutes exploring portfolio, indicating deep engagement",
      "Senior portrait bookings surged 340% during graduation season through cinematic milestone approach",
      "Clients consistently mentioned feeling 'known and understood' before first meeting, leading to more relaxed sessions"
    ],
    technologies: ["WordPress", "High-resolution Image Optimization", "Lightbox Gallery", "Mobile-responsive Viewing", "SEO Optimization", "Client Gallery System"],
    duration: "4-5 weeks",
    scope: "Professional photography portfolio with client experience focus"
  },
];

// ----------------------
// Modal Component
// ----------------------
const Modal = ({ caseStudy, onClose }: { caseStudy: CaseStudy; onClose: () => void }) => {
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // capture refs into local vars so cleanup can remove listeners from the same nodes
    const backdropEl = backdropRef.current;
    const innerEl = innerScrollRef.current;

    if (!backdropEl || !innerEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(backdropEl, { opacity: 0 }, { opacity: 1, duration: 0.28, ease: "power2.out" });
      gsap.fromTo(innerEl, { y: 18, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.36, ease: "power2.out", delay: 0.06 });
    }, backdropEl);

    // focus the inner scroll container so keyboard/wheel works
    innerEl.setAttribute("tabindex", "-1");
    innerEl.focus();

    // wheel handling: keep scroll inside modal, prevent page behind from scrolling
    const onWheel = (e: WheelEvent) => {
      // innerEl is captured above
      const el = innerEl;
      if (!el) return;
      const delta = e.deltaY;
      const canScrollUp = el.scrollTop > 0;
      const canScrollDown = el.scrollTop + el.clientHeight < el.scrollHeight;

      if ((delta > 0 && canScrollDown) || (delta < 0 && canScrollUp)) {
        el.scrollTop += delta;
        e.preventDefault();
      } else {
        e.preventDefault();
      }
    };

    backdropEl.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      ctx.revert();
      // remove listener from the same captured element
      backdropEl.removeEventListener("wheel", onWheel as EventListener);
    };
  }, []);

  // robust outside click close
  const handleBackdropClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as Node;
    if (!wrapperRef.current) {
      if (e.target === e.currentTarget) onClose();
      return;
    }
    if (!wrapperRef.current.contains(target)) {
      onClose();
    }
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-start justify-center px-4"
      style={{ paddingTop: 88, paddingBottom: 20, overflow: "hidden", WebkitOverflowScrolling: "auto" }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div ref={wrapperRef} className="relative w-full max-w-3xl mb-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close modal"
          className="absolute -translate-y-1/2 top-4 right-4 z-50 w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-800/90 text-gray-300 hover:text-white hover:bg-red-600/90 border-none shadow-lg flex items-center justify-center focus:outline-none focus:ring-0"
          style={{ border: "none" }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div
          ref={innerScrollRef}
          className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-2xl relative shadow-2xl flex flex-col overflow-auto ring-0 outline-none"
          style={{
            maxHeight: "85vh",
            minHeight: "400px",
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
            touchAction: "pan-y",
            border: "none",
            outline: "none",
            boxShadow: "0 6px 30px rgba(2,6,23,0.6)",
            backgroundClip: "padding-box",
          }}
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          {/* Hero */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="aspect-video overflow-hidden relative rounded-t-2xl">
                <Image src={caseStudy.image} alt={caseStudy.title} width={1400} height={720} priority className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent pointer-events-none rounded-t-2xl" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-5 pointer-events-auto">
                <span className="inline-block px-2.5 py-1 text-xs font-medium bg-blue-500/30 text-blue-200 rounded-full mb-2 backdrop-blur-sm border border-blue-400/30 w-fit">
                  {caseStudy.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">{caseStudy.title}</h3>
                <p className="text-gray-200 text-sm md:text-base mb-2">{caseStudy.subtitle}</p>
                <p className="text-blue-300 text-sm md:text-base font-semibold">{caseStudy.outcome}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 space-y-6">
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

            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4">Key Results</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.results.map((result: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg p-3 border border-blue-500/20 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.technologies.map((tech: string, index: number) => (
                  <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 rounded-full text-xs font-medium border border-blue-400/30 backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-center pt-2 pb-6">
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                >
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------
// Main component
// ----------------------
export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  // store page Y when modal opens & prev focused element
  const modalScrollYRef = useRef<number | null>(null);
  const prevActiveElementRef = useRef<HTMLElement | null>(null);
  const restoreTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // open modal helper: store activeElement before opening
  const openModal = (study: CaseStudy) => {
    prevActiveElementRef.current = (document.activeElement as HTMLElement) ?? null;
    setSelectedCase(study);
  };

  // scroll lock with reliable restore & focus restore
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCase(null);
    };

    if (selectedCase) {
      document.addEventListener("keydown", handleEscape);

      // Store current scroll position
      const scrollY = window.scrollY;
      modalScrollYRef.current = scrollY;

      // Simply prevent scrolling without changing layout
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = 'relative';

    } else {
      document.removeEventListener("keydown", handleEscape);

      const storedScrollY = modalScrollYRef.current ?? 0;

      // Restore styles
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';

      // Restore scroll position and focus
      requestAnimationFrame(() => {
        window.scrollTo(0, storedScrollY);
        try {
          prevActiveElementRef.current?.focus?.();
        } catch {
          // ignore
        }
        prevActiveElementRef.current = null;
      });
      
      modalScrollYRef.current = null;
      restoreTimerRef.current = null;
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Ensure cleanup
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
    };
  }, [selectedCase]);

  // GSAP animations for cards + CTA
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
              start: "top 90%",
              once: true,
            },
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
            start: "top 90%",
            once: true,
          },
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
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
                Case Studies
              </span>
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
                onClick={() => openModal(study)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image src={study.image} alt={study.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20 pointer-events-auto">
                        <p className="text-white text-xs sm:text-sm font-medium">Click to view full case study</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  <span className="inline-block px-2.5 py-1 sm:px-3 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full mb-2 sm:mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">{study.title}</h3>
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
            <a href="/case-studies" className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300">
              View All Case Studies
            </a>
          </div>
        </div>
      </section>

      {selectedCase && <Modal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />}
    </>
  );
}
