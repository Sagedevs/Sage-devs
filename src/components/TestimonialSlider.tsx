'use client';
import React, { useEffect, useRef } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const videoPopupRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const testimonials = [
  {
      stars: 5,
      text: "Videuvlad transformed our online presence completely. The SEO strategy they implemented has driven consistent organic traffic growth, and our website conversions have doubled in just four months.",
      author: "Igor Vainshtein",
      company: "Tech Innovation Consulting"
    },
    {
      stars: 5,
      text: "Working with Videuvlad was seamless from start to finish. They delivered exactly what we needed with incredible attention to detail.",
      author: "Jake",
      company: "Weather Forecasting Services",
      video: "https://youtube.com/shorts/4gFSVqLk_j0"
    },
    {
      stars: 5,
      text: "The team at Videuvlad exceeded our expectations with their web design expertise. Our e-commerce platform is now fast, beautiful, and optimized for sales. Highly recommended!",
      author: "Bavalle Team",
      company: "Premium Fashion Boutique"
    },
    {
      stars: 5,
      text: "We partnered with Videuvlad for a complete rebrand and website overhaul. The professionalism and creativity they brought to our project was outstanding.",
      author: "Kelvin Melgar",
      company: "Creative Design Studio"
    },
    {
      stars: 5,
      text: "Incredible results! The SEO work has put us on the first page for our key search terms. Our business has grown significantly since working with Videuvlad.",
      author: "Ana Kurkina",
      company: "Marketing Solutions",
      video: "https://youtu.be/u5LDjn6NdHM"
    },
    {
      stars: 5,
      text: "Videuvlad delivered a stunning website for our insurance brokerage. The user experience is intuitive, and we've seen a marked increase in quote requests through the site.",
      author: "Priority Team",
      company: "Insurance Solutions Group"
    },
    {
      stars: 5,
      text: "From concept to launch, Videuvlad handled everything professionally. Our new site perfectly represents our brand and has improved engagement across all metrics.",
      author: "AIDN Leadership",
      company: "Digital Innovation Network"
    },
    {
      stars: 5,
      text: "The custom development work was flawless. Videuvlad understood our technical requirements and delivered a robust, scalable solution.",
      author: "Emily",
      company: "Software Development",
      video: "https://youtu.be/NzExt1Bzdfw"
    },
    {
      stars: 5,
      text: "Outstanding service throughout our entire project. The team was responsive, creative, and committed to delivering excellence. Our online visibility has skyrocketed!",
      author: "VrdeOS Founders",
      company: "Enterprise Software Platform"
    },
    {
      stars: 5,
      text: "Videuvlad redesigned our restaurant's website and implemented local SEO strategies that have driven real foot traffic. We're now ranking at the top for searches in our area.",
      author: "Mehfil Management",
      company: "Indian Cuisine Restaurant"
    },
    {
      stars: 5,
      text: "The e-commerce solution they built for us is phenomenal. Sales have increased by 180% since launch, and customers love the smooth checkout experience.",
      author: "Jason",
      company: "Online Retail Business",
      video: "https://youtu.be/Lr0AhNhmya4"
    },
    {
      stars: 5,
      text: "Working with Videuvlad was one of the best business decisions we made. They took time to understand our vision and delivered a website that truly represents our craftsmanship.",
      author: "Eli Burch",
      company: "Artisan Jewelry Design"
    },
    {
      stars: 5,
      text: "The branding and web design work exceeded all expectations. Videuvlad captured our essence perfectly and created a digital presence that resonates with our clients.",
      author: "KhanJee Leadership",
      company: "Immigration Consulting Services"
    },
    {
      stars: 5,
      text: "Professional, reliable, and extremely talented. Videuvlad helped us establish a strong digital foundation that continues to generate leads and build our reputation.",
      author: "Andrew",
      company: "Financial Advisory",
      video: "https://youtu.be/S4a8buevs3I"
    },
    {
      stars: 4,
      text: "From the initial consultation to the final launch, Videuvlad demonstrated expertise at every stage. Our portfolio website now showcases our work beautifully.",
      author: "Jake Matluck",
      company: "Photography & Visual Arts"
    },
    {
      stars: 5,
      text: "The ROI from working with Videuvlad has been exceptional. Their comprehensive approach to web development and SEO has transformed our digital marketing results.",
      author: "Randy",
      company: "Business Consulting",
      video: "https://youtu.be/1JaRQCaH6nA"
    }


  ];

  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      const headingElements = headingRef.current.querySelectorAll('h3, span');
      gsap.fromTo(headingElements, 
        { 
          y: 50, 
          opacity: 0 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Auto-scroll animation
    if (testimonialsRef.current) {
      const testimonialsElement = testimonialsRef.current;
      const totalWidth = testimonialsElement.scrollWidth / 3;

      animationRef.current = gsap.to(testimonialsElement, {
        x: -totalWidth,
        duration: 50,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0))
        }
      });

      const pauseAnimation = () => animationRef.current?.pause();
      const resumeAnimation = () => animationRef.current?.resume();

      testimonialsElement.addEventListener('mouseenter', pauseAnimation);
      testimonialsElement.addEventListener('mouseleave', resumeAnimation);

      return () => {
        animationRef.current?.kill();
        testimonialsElement.removeEventListener('mouseenter', pauseAnimation);
        testimonialsElement.removeEventListener('mouseleave', resumeAnimation);
      };
    }
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    if (!testimonialsRef.current) return;
    
    const testimonialsElement = testimonialsRef.current;
    const cardWidth = 320; // w-80
    const gap = 24; // gap-6
    const scrollAmount = (cardWidth + gap); // Scroll only 1 card at a time
    
    if (direction === 'next') {
      gsap.to(testimonialsElement, {
        x: `-=${scrollAmount}`,
        duration: 0.6,
        ease: "power2.inOut"
      });
    } else {
      gsap.to(testimonialsElement, {
        x: `+=${scrollAmount}`,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
  };

  const openVideoPopup = (videoUrl: string) => {
    if (videoPopupRef.current) {
      const video = videoPopupRef.current.querySelector('video') as HTMLVideoElement;
      if (video) {
        video.src = videoUrl;
      }
      videoPopupRef.current.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  };

  const closeVideoPopup = () => {
    if (videoPopupRef.current) {
      const video = videoPopupRef.current.querySelector('video') as HTMLVideoElement;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      videoPopupRef.current.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  const GoogleLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );

  return (
    <section className="py-16 md:py-24 relative overflow-hidden w-full">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-blue-600/10"></div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 md:w-40 h-32 md:h-40 bg-blue-600/10 md:bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 md:w-48 h-36 md:h-48 bg-blue-500/15 md:bg-blue-500/25 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl lg:rounded-[60px] overflow-hidden border border-blue-500/30 mx-4 md:mx-6">
          <div className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            
            {/* Heading on top */}
            <div ref={headingRef} className="text-center max-w-5xl mx-auto mb-8 md:mb-10">
              <h3 className="font-sans text-3xl md:text-5xl lg:text-[60px] font-600 leading-tight text-white">
                We&apos;re proudly rated 5 stars by
                <br className="hidden md:block" />
                <span className="font-600">100+ happy clients on </span>
                <span className="inline-block font-600">
                  <span className="text-blue-400">G</span>
                  <span className="text-red-400">o</span>
                  <span className="text-yellow-400">o</span>
                  <span className="text-blue-400">g</span>
                  <span className="text-green-400">l</span>
                  <span className="text-red-400">e</span>
                </span>
                <br className="hidden md:block" />
                with an average rating of <span className="font-600 text-yellow-400">4.9</span>
              </h3>
            </div>

            {/* Rating Box - centered landscape pill */}
            <div className="flex justify-center mb-12 lg:mb-20">
              <div className="flex items-center gap-6 md:gap-8 bg-black/40 backdrop-blur-xl border border-blue-500/40 rounded-2xl md:rounded-[20px] px-5 py-4 md:px-8 md:py-5 shadow-[0_2px_0_0_rgba(59,130,246,0.2)_inset]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-lg">
                    <GoogleLogo className="w-7 h-7 md:w-9 md:h-9" />
                  </div>
                  <div className="text-left">
                    <div className="text-green-400 text-xs md:text-sm">✓ 100% Verified</div>
                    <div className="text-white font-bold text-sm md:text-base">Google Reviews</div>
                  </div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-blue-500/40" />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl md:text-2xl font-extrabold">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm -mt-0.5">Based on 100+ reviews</p>
                </div>
              </div>
            </div>

            {/* Carousel Container with Navigation */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={() => navigate('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-600/30"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={() => navigate('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-600/30"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Carousel */}
              <div className="overflow-hidden px-16">
                <div
                  ref={testimonialsRef}
                  className="flex gap-6"
                  style={{ width: 'max-content' }}
                >
                  {allTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-80 bg-black/30 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 hover:border-blue-400/50 hover:bg-blue-900/20 group"
                    >
                      <div className="flex flex-col h-full">
                        {/* Stars and Google Logo */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex gap-1">
                            {[...Array(testimonial.stars)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            ))}
                          </div>
                          <GoogleLogo className="w-5 h-5 opacity-60" />
                        </div>

                        {/* Video Thumbnail */}
                        {testimonial.video && (
                          <div 
                            className="relative mb-4 rounded-xl overflow-hidden aspect-video bg-gray-900 cursor-pointer group/video"
                            onClick={() => openVideoPopup(testimonial.video!)}
                          >
                            <video
                              src={testimonial.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-3 left-3 w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center group-hover/video:scale-110 transition-transform duration-300">
                              <Play className="w-4 h-4 text-gray-900 ml-0.5" fill="currentColor" />
                            </div>
                          </div>
                        )}

                        {/* Testimonial Text - Larger font */}
                        <blockquote className="font-sans text-base md:text-lg text-gray-200 leading-relaxed mb-4 flex-grow italic">
                          &ldquo;{testimonial.text}&rdquo;
                        </blockquote>

                        {/* Author - Larger and more refined */}
                        <div className="text-sm font-sans text-gray-400 flex items-center gap-1.5 flex-wrap pt-3 border-t border-gray-700">
                          <span className="font-semibold text-white">{testimonial.author}</span>
                          <span className="text-gray-600">•</span>
                          <cite className="not-italic text-gray-500">{testimonial.company}</cite>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Removed dot navigation as requested */}
          </div>
        </div>
      </div>

      {/* Video Popup */}
      <div
        ref={videoPopupRef}
        className="fixed inset-0 bg-black/95 z-50 hidden items-center justify-center p-4 backdrop-blur-sm"
        onClick={closeVideoPopup}
      >
        <button
          className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          onClick={closeVideoPopup}
        >
          <X className="w-5 h-5" />
        </button>
        <div
          className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            className="w-full h-full"
            controls
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Smooth scrolling for the carousel */
        .smooth-scroll {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar but maintain functionality */
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;