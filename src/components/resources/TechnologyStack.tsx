import React, { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette,
  Server,
  Globe,
  Layers,
  Zap,
  Shield,
  Cpu,
  Monitor,
  Workflow
} from 'lucide-react';

// TypeScript declarations for GSAP
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const TechnologyStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const innovationRef = useRef<HTMLDivElement>(null);
  const unifiedRef = useRef<HTMLDivElement>(null);
  const pulseCircle1Ref = useRef<HTMLDivElement>(null);
  const pulseCircle2Ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Replace with your actual links
  const contactLink = "/contact";
  const caseStudiesLink = "/case-studies";

  // Initialize cards refs properly
  const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  useEffect(() => {
    const loadGSAP = async () => {
      // If GSAP is already loaded, initialize animations
      if (window.gsap && window.ScrollTrigger) {
        initAnimations();
        setIsLoaded(true);
        return;
      }

      try {
        // Load GSAP
        await new Promise((resolve, reject) => {
          if (window.gsap) {
            resolve(true);
            return;
          }
          const gsapScript = document.createElement('script');
          gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
          gsapScript.onload = () => resolve(true);
          gsapScript.onerror = () => reject(new Error('GSAP failed to load'));
          document.head.appendChild(gsapScript);
        });

        // Load ScrollTrigger
        await new Promise((resolve, reject) => {
          if (window.ScrollTrigger) {
            resolve(true);
            return;
          }
          const stScript = document.createElement('script');
          stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
          stScript.onload = () => resolve(true);
          stScript.onerror = () => reject(new Error('ScrollTrigger failed to load'));
          document.head.appendChild(stScript);
        });

        // Small delay to ensure everything is registered
        setTimeout(() => {
          initAnimations();
          setIsLoaded(true);
        }, 100);
        
      } catch (error) {
        console.error('Failed to load animations:', error);
        // Fallback to CSS animations
        initFallbackAnimations();
        setIsLoaded(true);
      }
    };

    loadGSAP();

    return () => {
      // Cleanup ScrollTrigger on unmount
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  const initAnimations = () => {
    const gsap = window.gsap;
    if (!gsap) {
      initFallbackAnimations();
      return;
    }

    // Register ScrollTrigger
    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    // Header animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: -50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out" 
        }
      );
    }

    // Cards animation with section as trigger
    if (sectionRef.current && cardsRef.current.length > 0) {
      const validCards = cardsRef.current.filter(card => card !== null);
      gsap.fromTo(validCards, 
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current, 
        { opacity: 0, scale: 0.8, y: 40 },
        { 
          opacity: 1, 
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Innovation section animation
    if (innovationRef.current) {
      gsap.fromTo(innovationRef.current, 
        { opacity: 0, x: -80 },
        { 
          opacity: 1, 
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: innovationRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Unified ecosystem animation
    if (unifiedRef.current) {
      gsap.fromTo(unifiedRef.current, 
        { 
          opacity: 0, 
          x: 80,
          scale: 0.95
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: unifiedRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate floating icons in unified section
      const floatingIcons = unifiedRef.current?.querySelectorAll('.floating-tech-icon');
      if (floatingIcons && floatingIcons.length > 0) {
        gsap.to(floatingIcons, {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.5
        });
      }
    }

    // Fix pulse circle animations
    if (pulseCircle1Ref.current && pulseCircle2Ref.current) {
      // Create continuous pulse animation for circles
      gsap.to(pulseCircle1Ref.current, {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out"
      });

      gsap.to(pulseCircle2Ref.current, {
        scale: 1.8,
        opacity: 0,
        duration: 2.5,
        repeat: -1,
        ease: "power2.out",
        delay: 0.5
      });
    }

    // Hover animations for cards
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.03,
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    // Refresh ScrollTrigger after all animations are set up
    if (window.ScrollTrigger) {
      setTimeout(() => {
        window.ScrollTrigger.refresh();
      }, 500);
    }
  };

  const initFallbackAnimations = () => {
    // Simple CSS-based fallback animations
    document.querySelectorAll('.fallback-animate').forEach((el, index) => {
      if (el instanceof HTMLElement) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  };

  const technologies = [
    {
      category: 'Frontend Development',
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-blue-500 to-blue-700',
      items: [
        { name: 'React', icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Component-based UI library for scalable applications' },
        { name: 'Next.js', icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Full-stack React framework with SSR capabilities' },
        { name: 'TypeScript', icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Type-safe JavaScript for enterprise applications' },
        { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Utility-first CSS framework for rapid development' }
      ]
    },
    {
      category: 'Backend Architecture',
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-blue-600 to-blue-800',
      items: [
        { name: 'Node.js', icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'High-performance JavaScript runtime environment' },
        { name: 'Express.js', icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Minimalist web framework for robust APIs' },
        { name: 'GraphQL', icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Efficient data fetching and API management' },
        { name: 'PostgreSQL', icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Advanced relational database system' }
      ]
    },
    {
      category: 'Mobile Solutions',
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-blue-700 to-blue-900',
      items: [
        { name: 'React Native', icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Cross-platform mobile development framework' },
        { name: 'Flutter', icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'UI toolkit for natively compiled applications' },
        { name: 'Swift', icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Native iOS development language' },
        { name: 'Kotlin', icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Modern Android development language' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-blue-500 to-blue-700',
      items: [
        { name: 'AWS', icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Comprehensive cloud computing platform' },
        { name: 'Docker', icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Containerization for consistent deployments' },
        { name: 'Kubernetes', icon: <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Container orchestration at scale' },
        { name: 'GitHub Actions', icon: <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Automated CI/CD pipeline management' }
      ]
    },
    {
      category: 'AI & Analytics',
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-blue-600 to-blue-800',
      items: [
        { name: 'TensorFlow', icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Machine learning platform for intelligent applications' },
        { name: 'PyTorch', icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Deep learning framework for research and production' },
        { name: 'OpenAI', icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Advanced AI models and API integration' },
        { name: 'Apache Spark', icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Unified analytics engine for big data processing' }
      ]
    },
    {
      category: 'Security & Infrastructure',
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-blue-700 to-blue-900',
      items: [
        { name: 'OAuth 2.0', icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Industry-standard authorization framework' },
        { name: 'JWT', icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Secure token-based authentication' },
        { name: 'SSL/TLS', icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'End-to-end encryption protocols' },
        { name: 'OWASP', icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, description: 'Security best practices and standards' }
      ]
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .fallback-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .tech-card {
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          transform: translateY(-5px);
        }

        /* Enhanced pulse animation for circles */
        @keyframes enhanced-pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        .enhanced-pulse {
          animation: enhanced-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .enhanced-pulse-2 {
          animation: enhanced-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 1.5s;
        }
      `}</style>
      
      <section 
        ref={sectionRef} 
        className="relative py-12 sm:py-16 lg:py-24 bg-slate-950 overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-20 min-h-screen"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
            }}
          ></div>
        </div>

        <div className="relative container mx-auto">
          {/* Header Section */}
          <div 
            ref={headerRef} 
            className="text-center mb-12 lg:mb-16 fallback-animate"
            style={!isLoaded ? { opacity: 1, transform: 'none' } : undefined}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl mb-4 sm:mb-6">
              <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Technology
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mt-2">
                Arsenal
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Enterprise-grade technologies powering the next generation of digital solutions. 
              Built for scale, performance, and reliability.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                ref={el => addToCardsRef(el, index)}
                className="group relative fallback-animate tech-card"
                style={!isLoaded ? { opacity: 1, transform: 'none' } : undefined}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden h-full flex flex-col">
                  
                  {/* Category Header */}
                  <div className="relative z-10 flex items-center mb-6 lg:mb-8">
                    <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-gradient-to-br ${tech.color} text-white mr-4 shadow-lg`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-white">
                        {tech.category}
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent mt-2"></div>
                    </div>
                  </div>

                  {/* Technology Items */}
                  <div className="relative z-10 space-y-4 flex-1">
                    {tech.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group/item"
                      >
                        <div className="text-blue-400 mt-1 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                            {item.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section with Links */}
          <div 
            ref={ctaRef} 
            className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center mb-16 lg:mb-20 fallback-animate"
            style={!isLoaded ? { opacity: 1, transform: 'none' } : undefined}
          >
            <div className="absolute inset-0 bg-black/20 rounded-2xl lg:rounded-3xl"></div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Build Something Extraordinary?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Let our experts architect the perfect technology stack tailored to your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={contactLink}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg text-center"
                >
                  Start Your Project
                </a>
                <a 
                  href={caseStudiesLink}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-center"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>

          {/* Innovation & Unified Ecosystem Section */}
          <div className="mt-16 lg:mt-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Innovation Text */}
              <div 
                ref={innovationRef}
                className="fallback-animate"
                style={!isLoaded ? { opacity: 1, transform: 'none' } : undefined}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"></div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Innovation at 
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Light Speed</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Our technology stack evolves continuously, integrating cutting-edge solutions 
                  to deliver unparalleled performance and user experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Real-time Performance', 'Scalable Architecture', 'Future-Ready'].map((feature, index) => (
                    <div key={index} className="flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unified Ecosystem Visualization */}
              <div 
                ref={unifiedRef}
                className="relative h-full min-h-[400px] fallback-animate"
                style={!isLoaded ? { opacity: 1, transform: 'none' } : undefined}
              >
                <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden h-full">
                  
                  {/* Floating Icons */}
                  <div className="absolute inset-0">
                    <div className="absolute top-6 right-8 text-blue-400 floating-tech-icon animate-float">
                      <Code2 className="w-8 h-8" />
                    </div>
                    <div className="absolute bottom-12 left-6 text-blue-500 floating-tech-icon animate-float" style={{ animationDelay: '1s' }}>
                      <Database className="w-6 h-6" />
                    </div>
                    <div className="absolute top-16 left-12 text-blue-300 floating-tech-icon animate-float" style={{ animationDelay: '2s' }}>
                      <Cloud className="w-7 h-7" />
                    </div>
                    <div className="absolute bottom-6 right-12 text-blue-600 floating-tech-icon animate-float" style={{ animationDelay: '0.5s' }}>
                      <Brain className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Central Hub with Fixed Pulse Animation */}
                  <div className="relative z-10 text-center py-12">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 shadow-2xl shadow-blue-500/30 relative z-20">
                      <Layers className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">Unified Ecosystem</div>
                    <div className="text-slate-400">Seamlessly Integrated</div>
                    
                    {/* Fixed Pulse Animation Circles */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                      <div 
                        ref={pulseCircle1Ref}
                        className="absolute w-32 h-32 border-4 border-blue-400 rounded-full enhanced-pulse"
                      ></div>
                      <div 
                        ref={pulseCircle2Ref}
                        className="absolute w-40 h-40 border-4 border-blue-300 rounded-full enhanced-pulse-2"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M50,50 Q75,20 95,30" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" />
                    <path d="M50,50 Q25,80 5,70" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <path d="M50,50 Q20,30 10,15" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyStack;