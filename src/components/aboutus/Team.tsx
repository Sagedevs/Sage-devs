"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { User, Award, Code, Briefcase, Target, Users, Globe, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    name: 'Abdul Ahad',
    role: 'CEO & Founder',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759604989/migrated/photo-1582750433449-648ed127bb54_210acffe.jpg',
    bio: 'Visionary leader with 12+ years driving digital innovation and transforming businesses across Pakistan.',
    icon: Briefcase
  },
  {
    name: 'Fatima Khan',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1594736797933-d0713ba5bb2e?w=400&h=500&fit=crop&crop=face',
    bio: 'Expert in scalable architecture and cutting-edge technologies with global experience from Karachi.',
    icon: Code
  },
  {
    name: 'Hassan Ali',
    role: 'Lead Designer',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759604992/migrated/photo-1507003211169-0a1dd7228f2d_fad214d4.jpg',
    bio: 'Passionate about creating intuitive and beautiful user experiences for everyone in the region.',
    icon: Target
  },
  {
    name: 'Ayesha Ahmed',
    role: 'Senior Developer',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759604995/migrated/photo-1596815064285-45ed8a9c0463_cd27ecc8.jpg',
    bio: 'Full-stack developer with expertise in modern web technologies and frameworks from Lahore.',
    icon: Zap
  },
  {
    name: 'Muhammad Usman',
    role: 'Product Manager',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759604997/migrated/photo-1507591064344-4c6ce005b128_25a6ba65.jpg',
    bio: 'Strategic thinker focused on delivering exceptional user experiences across South Asia.',
    icon: Users
  },
  {
    name: 'Sana Malik',
    role: 'Marketing Director',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759604999/migrated/photo-1534528741775-53994a69daeb_d78ae855.jpg',
    bio: 'Expert in digital marketing and brand strategy with extensive experience in Pakistani markets.',
    icon: Globe
  },
  {
    name: 'Omar Sheikh',
    role: 'Senior Engineer',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605001/migrated/photo-1519085360753-af0119f7cbe7_7a4bdd20.jpg',
    bio: 'Backend specialist with a passion for performance optimization and innovation from Islamabad.',
    icon: Award
  },
  {
    name: 'Zainab Rashid',
    role: 'UX Researcher',
    image: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605003/migrated/photo-1580489944761-15a19d654956_e3944a53.jpg',
    bio: 'User-centered design advocate with deep research expertise and creative solutions for local markets.',
    icon: User
  }
];

// Triple the team array for seamless infinite scroll
const extendedTeam = [...team, ...team, ...team];

const Team = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);

  // Responsive card width calculation
  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(280); // sm
      } else if (width < 768) {
        setCardWidth(300); // md
      } else if (width < 1024) {
        setCardWidth(320); // lg
      } else {
        setCardWidth(350); // xl and above
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Auto-scroll animation with increased speed
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        if (isHovered) return prev;
        
        const gap = window.innerWidth < 640 ? 16 : 32;
        const totalCardWidth = cardWidth + gap;
        const totalWidth = team.length * totalCardWidth;
        
        // Increased speed - move 1.2px per frame
        const newTranslate = prev - 1.2;
        
        if (newTranslate <= -totalWidth) {
          return 0;
        }
        return newTranslate;
      });
    }, 8); // Faster interval for smoother movement

    return () => clearInterval(interval);
  }, [isHovered, cardWidth]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % team.length);
    const gap = window.innerWidth < 640 ? 16 : 32;
    const totalCardWidth = cardWidth + gap;
    setTranslateX(prev => prev - totalCardWidth);
  }, [cardWidth]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + team.length) % team.length);
    const gap = window.innerWidth < 640 ? 16 : 32;
    const totalCardWidth = cardWidth + gap;
    setTranslateX(prev => prev + totalCardWidth);
  }, [cardWidth]);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px sm:50px sm:50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full backdrop-blur-sm">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Meet Our
            <span className="block text-blue-400 mt-2">Exceptional Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A diverse group of talented Pakistani individuals passionate about innovation and excellence, 
            driving the future of digital transformation.
          </p>
        </div>

        {/* Team Slider with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-blue-500/20 hover:bg-blue-500/40 backdrop-blur-sm rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-blue-500/20 hover:bg-blue-500/40 backdrop-blur-sm rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
          </button>

          <div 
            className="overflow-hidden mx-8 sm:mx-12 lg:mx-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex will-change-transform"
              style={{ 
                transform: `translateX(${translateX}px)`,
                transition: translateX === 0 ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
            >
              {extendedTeam.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <div 
                    key={`${member.name}-${index}`} 
                    className="flex-shrink-0 mx-2 sm:mx-4 group"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105">
                      {/* Enhanced Border Glow Effect */}
                      <div className="absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-xl lg:rounded-2xl animate-pulse" 
                             style={{
                               background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.4), transparent, rgba(147, 197, 253, 0.4), transparent)',
                               backgroundSize: '300% 300%',
                               animation: 'borderGlow 3s ease infinite'
                             }}></div>
                      </div>

                      {/* Image Container */}
                      <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64 xl:h-72">
                        <div className="relative w-full h-full">
                          <Image 
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority={index < 2} // Load first 2 images with priority
                          />
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Role Icon */}
                        <div className="absolute top-3 right-3 p-2 sm:p-3 bg-blue-500/80 backdrop-blur-sm rounded-full transform group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 relative">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-blue-400 font-semibold mb-3 text-base sm:text-lg">
                          {member.role}
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-4">
                          {member.bio}
                        </p>
                        
                        {/* Decorative Line */}
                        <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>

                      {/* Enhanced Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                           style={{
                             background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
                             filter: 'blur(1px)'
                           }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                const gap = window.innerWidth < 640 ? 16 : 32;
                const totalCardWidth = cardWidth + gap;
                setTranslateX(-index * totalCardWidth);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex % team.length 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 640px) {
          .line-clamp-4 {
            -webkit-line-clamp: 3;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;