"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Award, Code, Briefcase, Target, Users, Zap } from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    name: 'Abdul Ahad',
    role: 'CEO & Founder',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759604989/migrated/photo-1582750433449-648ed127bb54_210acffe.jpg',
    bio: 'Visionary leader with 4+ years driving digital innovation and transforming businesses across Pakistan.',
    icon: Briefcase
  },
  {
    name: 'Amjad Arfaat',
    role: 'Lead Designer',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1760164755/download_28_cixjql.webp',
    bio: 'Passionate about creating intuitive and beautiful user experiences for everyone in the region.',
    icon: Target
  },
  {
    name: 'Muhammad Usman',
    role: 'Product Manager',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759604997/migrated/photo-1507591064344-4c6ce005b128_25a6ba65.jpg',
    bio: 'Strategic thinker focused on delivering exceptional user experiences across South Asia.',
    icon: Users
  },
  {
    name: 'Omar Sheikh',
    role: 'Senior Engineer',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605001/migrated/photo-1519085360753-af0119f7cbe7_7a4bdd20.jpg',
    bio: 'Backend specialist with a passion for performance optimization and innovation from Islamabad.',
    icon: Award
  },
  {
    name: 'Ali Raza',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
    bio: 'Full-stack expert specializing in scalable solutions and modern web architectures.',
    icon: Code
  },
  {
    name: 'Hassan Ahmed',
    role: 'Solutions Architect',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face',
    bio: 'Cloud infrastructure specialist driving innovation with cutting-edge technologies.',
    icon: Zap
  }
];

const Team = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5;

    const getCardWidth = () => {
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      const cardWidth = isMobile ? 280 : isTablet ? 300 : 320;
      const gap = isMobile ? 16 : 32;
      return cardWidth + gap;
    };

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += scrollSpeed;
        
        const totalCardWidth = getCardWidth();
        const totalWidth = team.length * totalCardWidth;
        
        if (scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const getCardWidth = () => {
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    const cardWidth = isMobile ? 280 : isTablet ? 300 : 320;
    const gap = isMobile ? 16 : 32;
    return cardWidth + gap;
  };

  const handlePrev = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const cardWidth = getCardWidth();
      scrollPositionRef.current = Math.max(0, scrollPositionRef.current - cardWidth);
      scrollContainer.style.transform = `translateX(-${scrollPositionRef.current}px)`;
    }
  };

  const handleNext = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const cardWidth = getCardWidth();
      const totalWidth = team.length * cardWidth;
      scrollPositionRef.current = (scrollPositionRef.current + cardWidth) % totalWidth;
      scrollContainer.style.transform = `translateX(-${scrollPositionRef.current}px)`;
    }
  };

  const infiniteTeam = [...team, ...team, ...team];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center p-2.5 bg-blue-500/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 mb-4">
            <Users className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 px-4">
            Meet Our
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Elite Team
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
          Talented professionals driving innovation and excellence in digital transformation — with many more incredible team members working passionately behind the scenes.
          </p>
        </div>

        {/* Infinite Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-blue-500/90 hover:bg-blue-600 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-blue-500/90 hover:bg-blue-600 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
            aria-label="Next"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 lg:gap-8 will-change-transform transition-transform duration-300"
            >
              {infiniteTeam.map((member, index) => {
                const IconComponent = member.icon;
                
                return (
                  <div
                    key={`${member.name}-${index}`}
                    className="group flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px]"
                  >
                    {/* Card */}
                    <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-xl lg:rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                      
                      {/* Animated Border Gradient */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 animate-gradient-slow"></div>
                        <div className="absolute inset-[2px] bg-gray-800 rounded-xl lg:rounded-2xl"></div>
                      </div>

                      {/* Content Container */}
                      <div className="relative">
                        {/* Image Section */}
                        <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                          <Image 
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                          
                          {/* Icon Badge */}
                          <div className="absolute top-3 right-3 p-2.5 bg-blue-500/90 backdrop-blur-sm rounded-lg lg:rounded-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>

                          {/* Shine Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="relative p-4 sm:p-5 lg:p-6 space-y-2 lg:space-y-3">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-blue-400 font-semibold text-sm sm:text-base lg:text-lg">
                            {member.role}
                          </p>
                          <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-3">
                            {member.bio}
                          </p>
                          
                          {/* Animated Line */}
                          <div className="pt-3 lg:pt-4">
                            <div className="h-0.5 lg:h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                          </div>
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute inset-0 bg-radial-glow"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.05); }
          50% { transform: translate(-15px, 20px) scale(0.95); }
          75% { transform: translate(25px, 10px) scale(1.02); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float 12s ease-in-out infinite 4s;
        }

        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .bg-radial-glow {
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Team;