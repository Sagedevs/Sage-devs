"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "./AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 6-6-6-6" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const GoogleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const PauseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h2v12H8V6zm6 0h2v12h-2V6z" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6v12l10-6L8 6z" />
  </svg>
);

interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    content: "Abdul's work exceeded all expectations. The platform he delivered transformed our business operations completely.",
    image: "https://images.pexels.com/photos/3290244/pexels-photo-3290244.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    id: 2,
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateNow",
    content: "Working with Abdul was a game-changer for our startup. His technical expertise is unmatched.",
    image: "https://images.pexels.com/photos/8499301/pexels-photo-8499301.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLab",
    content: "The website Abdul created for us is not just beautiful, it's incredibly functional. Our conversion rates improved by 250%!",
    image: "https://images.pexels.com/photos/7707306/pexels-photo-7707306.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    id: 4,
    author: "David Park",
    role: "Founder",
    company: "StartupVision",
    content: "Abdul's ability to understand our vision and translate it into a stunning digital experience is remarkable.",
    image: "https://images.pexels.com/photos/7119106/pexels-photo-7119106.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    id: 5,
    author: "Lisa Thompson",
    role: "Product Manager",
    company: "DigitalFlow",
    content: "The attention to user experience and modern design principles Abdul brought to our project was outstanding.",
    image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    id: 6,
    author: "James Wilson",
    role: "VP Engineering",
    company: "CodeCraft",
    content: "Abdul's technical skills are top-notch. He delivered a complex web application that performs flawlessly.",
    image: "https://images.pexels.com/photos/3831612/pexels-photo-3831612.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
            i < rating ? "text-blue-400 fill-blue-400" : "text-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="h-full bg-black/30 backdrop-blur-xl border border-blue-500/30 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:bg-blue-900/20 hover:border-blue-400/50 transition-all duration-300 flex flex-col">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <StarRating rating={testimonial.rating} />
        <GoogleLogo className="w-4 h-4 md:w-5 md:h-5 opacity-60" />
      </div>
      <blockquote className="text-gray-100 mb-4 md:mb-6 text-sm md:text-base line-clamp-4 flex-grow">
        &quot;{testimonial.content}&quot;
      </blockquote>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 relative flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="rounded-full object-cover"
            sizes="40px"
          />
        </div>
        <div className="min-w-0">
          <div className="font-bold text-white text-sm md:text-base truncate">
            {testimonial.author}
          </div>
          <p className="text-blue-300 text-xs md:text-sm truncate">{testimonial.role}</p>
          <p className="text-gray-400 text-xs truncate">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default function EnhancedTestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const paginate = useCallback((newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return (prevIndex - 1 + testimonials.length) % testimonials.length;
      }
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => paginate(1), 3000);
    return () => clearInterval(interval);
  }, [paginate, isAutoPlay]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlay((prev) => !prev);
  }, []);

  const getVisibleTestimonials = () => {
    const indices = [];
    for (let i = 0; i < (isMobile ? 1 : 3); i++) {
      indices.push((currentIndex + i) % testimonials.length);
    }
    return indices;
  };

  // GSAP Animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      

      if (statsRef.current) {
        const stats = Array.from(statsRef.current.children);
        stats.forEach((stat) => {
          gsap.from(stat, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Card slide animation
  useEffect(() => {
    if (!cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [currentIndex]);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 relative overflow-hidden w-full">
      {/* Static background - no animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 md:from-blue-900/30 via-transparent to-blue-600/10"></div>

      {/* Static orbs - lighter on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 md:w-40 h-32 md:h-40 bg-blue-600/10 md:bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 md:w-48 h-36 md:h-48 bg-blue-500/15 md:bg-blue-500/25 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
            What Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-10 md:mb-16">
          {/* Controls */}
          <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <button
              onClick={() => paginate(-1)}
              className="bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-full p-3 md:p-4 hover:bg-blue-600/30 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={toggleAutoPlay}
              className={`bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-full p-3 md:p-4 hover:bg-blue-600/30 transition-all ${!isAutoPlay ? "bg-blue-600/30" : ""}`}
              aria-label={isAutoPlay ? "Pause" : "Play"}
            >
              {isAutoPlay ? (
                <PauseIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <PlayIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </button>
            <button
              onClick={() => paginate(1)}
              className="bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-full p-3 md:p-4 hover:bg-blue-600/30 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Google Badge */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-black/40 backdrop-blur-xl border border-blue-500/40 rounded-2xl md:rounded-3xl px-4 py-3 md:px-6 md:py-4 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-4">
                <GoogleLogo className="w-10 h-10 md:w-12 md:h-12" />
                <div>
                  <div className="text-white font-bold text-base md:text-lg">Google Reviews</div>
                  <div className="text-green-400 text-xs md:text-sm">✓ 100% Verified</div>
                </div>
              </div>
              
              {!isMobile && (
                <div className="h-10 w-px bg-blue-500/50 hidden sm:block"></div>
              )}
              
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl font-bold text-yellow-400">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-xs md:text-sm">Based on 500+ reviews</p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {getVisibleTestimonials().map((index) => (
              <div key={`testimonial-${index}`}>
                <TestimonialCard testimonial={testimonials[index]} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-16 pt-10 md:pt-16 border-t border-blue-500/30">
          <AnimatedCounter value={500} suffix="+" label="Happy Clients" />
          <AnimatedCounter value={4.9} label="Average Rating" decimal />
          <AnimatedCounter value={100} suffix="%" label="Project Success" />
          <AnimatedCounter value={350} suffix="%" label="ROI Increase" />
        </div>
      </div>
    </section>
  );
}