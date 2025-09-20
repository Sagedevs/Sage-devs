"use client";
import React, { useEffect, useState } from 'react';
import { User, Award, Code, Briefcase, Target, Users, Globe, Zap } from 'lucide-react';

const team = [
  {
    name: 'Abdul Ahad',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&crop=face',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    bio: 'Passionate about creating intuitive and beautiful user experiences for everyone in the region.',
    icon: Target
  },
  {
    name: 'Ayesha Ahmed',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=400&h=500&fit=crop&crop=face',
    bio: 'Full-stack developer with expertise in modern web technologies and frameworks from Lahore.',
    icon: Zap
  },
  {
    name: 'Muhammad Usman',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&crop=face',
    bio: 'Strategic thinker focused on delivering exceptional user experiences across South Asia.',
    icon: Users
  },
  {
    name: 'Sana Malik',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
    bio: 'Expert in digital marketing and brand strategy with extensive experience in Pakistani markets.',
    icon: Globe
  },
  {
    name: 'Omar Sheikh',
    role: 'Senior Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face',
    bio: 'Backend specialist with a passion for performance optimization and innovation from Islamabad.',
    icon: Award
  },
  {
    name: 'Zainab Rashid',
    role: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
    bio: 'User-centered design advocate with deep research expertise and creative solutions for local markets.',
    icon: User
  }
];

// Triple the team array for seamless infinite scroll
const extendedTeam = [...team, ...team, ...team];

const Team = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        // Only move if not hovered
        if (isHovered) return prev;
        
        const cardWidth = 320 + 32; // 320px width + 32px margin
        const totalWidth = team.length * cardWidth;
        
        // Reset smoothly when we've moved one full cycle
        if (prev <= -totalWidth) {
          return 0;
        }
        return prev - 0.6; // Increased speed by doubling the translation value
      });
    }, 10); // Reduced interval time for smoother faster movement

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-500/20 rounded-full backdrop-blur-sm">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Meet Our
            <span className="block text-blue-400 mt-2">Exceptional Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A diverse group of talented Pakistani individuals passionate about innovation and excellence, 
            driving the future of digital transformation.
          </p>
        </div>

        {/* Team Slider */}
        <div className="relative">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex will-change-transform"
              style={{ 
                transform: `translateX(${translateX}px)`,
                transition: translateX === 0 ? 'transform 0.3s ease-out' : 'none'
              }}
            >
              {extendedTeam.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <div 
                    key={`${member.name}-${index}`} 
                    className="flex-shrink-0 w-80 mx-4 group"
                  >
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500" style={{ height: '600px' }}>
                      {/* Image Container - Fixed Height */}
                      <div className="relative overflow-hidden" style={{ height: '320px' }}>
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Role Icon */}
                        <div className="absolute top-4 right-4 p-3 bg-blue-500/80 backdrop-blur-sm rounded-full">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Content - Fixed Height */}
                      <div className="p-6 relative" style={{ height: '280px', display: 'flex', flexDirection: 'column' }}>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-blue-400 font-semibold mb-3 text-lg">
                          {member.role}
                        </p>
                        <p className="text-gray-300 leading-relaxed" style={{ flex: '1', overflow: 'hidden' }}>
                          {member.bio}
                        </p>
                        
                        {/* Decorative Line */}
                        <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>

                      {/* Hover Glow Effect - Background Light */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                           style={{
                             background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)'
                           }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
      `}</style>
    </section>
  );
};

export default Team;