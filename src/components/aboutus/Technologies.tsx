"use client";
import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Cloud, 
  Smartphone, 
  Database, 
  Brain, 
  Monitor,
  Zap,
  Globe,
  Shield,
  Settings,
  Star,
  TrendingUp,
  Award,
  Sparkles,
  Layers,
  Eye,
} from 'lucide-react';

type LucideIcon = React.ComponentType<any>;

interface TechnologyItem {
  name: string;
  level: number;
  description: string;
  popular?: boolean;
  trending?: boolean;
}

interface TechnologyCategory {
  category: string;
  icon: LucideIcon;
  description: string;
  items: TechnologyItem[];
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface TechnologyCardProps {
  tech: TechnologyCategory;
  index: number;
}

const technologies: TechnologyCategory[] = [
  {
    category: 'Frontend Development',
    icon: Monitor,
    description: 'Creating beautiful, responsive, and interactive user interfaces',
    items: [
      { name: 'React', level: 95, description: 'Component-based UI library for scalable applications', popular: true },
      { name: 'Next.js', level: 92, description: 'Full-stack React framework with SSR and SSG', trending: true },
      { name: 'TypeScript', level: 88, description: 'Strongly typed JavaScript for better code quality', popular: true },
      { name: 'Tailwind CSS', level: 94, description: 'Utility-first CSS framework for rapid styling', trending: true },
      { name: 'Redux Toolkit', level: 85, description: 'State management for complex applications' },
      { name: 'Vue.js', level: 80, description: 'Progressive framework for building user interfaces' }
    ]
  },
  {
    category: 'Backend Development',
    icon: Server,
    description: 'Building robust, scalable server-side applications and APIs',
    items: [
      { name: 'Node.js', level: 93, description: 'JavaScript runtime for server-side development', popular: true },
      { name: 'Python', level: 90, description: 'Versatile language for web development and AI', popular: true },
      { name: 'Django', level: 87, description: 'High-level Python web framework', trending: true },
      { name: 'GraphQL', level: 85, description: 'Query language for efficient API development' },
      { name: 'Express.js', level: 91, description: 'Fast, minimal web framework for Node.js' },
      { name: 'FastAPI', level: 83, description: 'Modern, fast web framework for Python APIs' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Deploying and managing applications in cloud environments',
    items: [
      { name: 'Docker', level: 89, description: 'Containerization for consistent deployments', popular: true },
      { name: 'Kubernetes', level: 82, description: 'Container orchestration at scale', trending: true },
      { name: 'AWS', level: 91, description: 'Comprehensive cloud computing platform', popular: true },
      { name: 'CI/CD', level: 87, description: 'Automated testing and deployment pipelines' },
      { name: 'Terraform', level: 78, description: 'Infrastructure as Code for cloud resources' },
      { name: 'Azure', level: 84, description: 'Microsoft cloud platform and services' }
    ]
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    description: 'Cross-platform and native mobile application development',
    items: [
      { name: 'React Native', level: 88, description: 'Cross-platform mobile apps with React', popular: true },
      { name: 'Flutter', level: 85, description: 'Google\'s UI toolkit for mobile development', trending: true },
      { name: 'Swift', level: 82, description: 'Native iOS application development' },
      { name: 'Kotlin', level: 80, description: 'Modern language for Android development', trending: true },
      { name: 'Expo', level: 86, description: 'Platform for universal React applications' },
      { name: 'Ionic', level: 75, description: 'Hybrid mobile app development framework' }
    ]
  },
  {
    category: 'Database & Storage',
    icon: Database,
    description: 'Data storage, management, and optimization solutions',
    items: [
      { name: 'PostgreSQL', level: 92, description: 'Advanced relational database system', popular: true },
      { name: 'MongoDB', level: 89, description: 'NoSQL document database for flexibility', popular: true },
      { name: 'Redis', level: 86, description: 'In-memory data structure store for caching' },
      { name: 'Firebase', level: 84, description: 'Real-time database and backend services', trending: true },
      { name: 'MySQL', level: 88, description: 'Reliable relational database management' },
      { name: 'Elasticsearch', level: 79, description: 'Search and analytics engine' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    description: 'Artificial intelligence and machine learning solutions',
    items: [
      { name: 'TensorFlow', level: 83, description: 'Open-source machine learning framework', popular: true },
      { name: 'PyTorch', level: 81, description: 'Dynamic neural network framework', trending: true },
      { name: 'OpenAI API', level: 87, description: 'GPT and AI model integration', trending: true },
      { name: 'Computer Vision', level: 78, description: 'Image and video analysis capabilities' },
      { name: 'Scikit-learn', level: 85, description: 'Machine learning library for Python' },
      { name: 'Hugging Face', level: 80, description: 'NLP models and transformers', trending: true }
    ]
  }
];

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 hidden sm:block"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const IconComponent = tech.icon;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group relative bg-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800 transform transition-all duration-700 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-500/30 to-blue-600/0 animate-border-glow"></div>
      </div>
      
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating Sparkles - Hidden on mobile for performance */}
      {isCardHovered && (
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <Sparkles className="absolute top-4 right-6 w-4 h-4 text-blue-400 animate-pulse" />
          <Sparkles className="absolute bottom-6 left-8 w-3 h-3 text-blue-300 animate-pulse animation-delay-500" />
        </div>
      )}
      
      {/* Header */}
      <div className="relative flex items-start sm:items-center mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="ml-3 sm:ml-4 flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
            {tech.category}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 line-clamp-2">{tech.description}</p>
        </div>
      </div>

      {/* Technology Items */}
      <div className="relative space-y-3 sm:space-y-4">
        {tech.items.map((item: TechnologyItem, i: number) => (
          <div 
            key={i}
            className="relative group/item cursor-pointer"
            onMouseEnter={() => setHoveredItem(i)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Main Item Container */}
            <div className="flex items-center justify-between p-2 sm:p-3 rounded-md sm:rounded-lg bg-black/20 border border-gray-700/50 hover:bg-black/40 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
              
              <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
                  <span className="font-semibold text-white text-sm sm:text-base truncate">{item.name}</span>
                  {item.popular && (
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 fill-current animate-pulse flex-shrink-0" />
                  )}
                  {item.trending && (
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 flex-shrink-0" />
                  )}
                </div>
              </div>

              {/* Proficiency Level */}
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <div className="w-12 sm:w-16 bg-gray-800 rounded-full h-1.5 sm:h-2 border border-gray-700">
                  <div 
                    className="h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-blue-500/30"
                    style={{ 
                      width: isVisible ? `${item.level}%` : '0%',
                      transitionDelay: `${(index * 150) + (i * 80)}ms`
                    }}
                  ></div>
                </div>
                <span className="text-xs sm:text-sm font-medium text-blue-300 w-6 sm:w-8">{item.level}%</span>
              </div>
            </div>

            {/* Hover Tooltip - Only show on larger screens */}
            {hoveredItem === i && (
              <div className="absolute z-20 left-0 top-full mt-2 p-3 sm:p-4 bg-black/90 backdrop-blur-sm text-white text-xs sm:text-sm rounded-lg shadow-xl border border-blue-500/30 w-full transform opacity-0 animate-fadeIn hidden sm:block">
                <p className="text-gray-300">{item.description}</p>
                <div className="absolute -top-2 left-4 w-4 h-4 bg-black/90 border-l border-t border-blue-500/30 transform rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Category Stats */}
      <div className="relative mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-800">
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-gray-400">
            {tech.items.length} Technologies
          </span>
          <span className="text-blue-400 font-medium">
            {Math.round(tech.items.reduce((acc: number, item: TechnologyItem) => acc + item.level, 0) / tech.items.length)}% Avg
          </span>
        </div>
      </div>
    </div>
  );
};

const Technologies = () => {
  const [stats, setStats] = useState({
    totalTech: 0,
    avgProficiency: 0,
    trending: 0
  });

  useEffect(() => {
    const totalTech = technologies.reduce((acc, cat) => acc + cat.items.length, 0);
    const allItems = technologies.flatMap(cat => cat.items);
    const avgProficiency = Math.round(allItems.reduce((acc, item) => acc + item.level, 0) / allItems.length);
    const trending = allItems.filter(item => item.trending).length;
    
    setStats({ totalTech, avgProficiency, trending });
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gray-950 overflow-hidden">
      {/* Animated Dark Blue Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Simplified for mobile */}
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-900/20 sm:bg-blue-900/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-800/10 sm:bg-blue-800/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-3000"></div>
        
        {/* Moving Gradient Waves - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-y-12 animate-wave"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent transform skew-y-12 animate-wave-reverse"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative p-4 sm:p-6 bg-blue-600/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-blue-500/30 shadow-2xl shadow-blue-500/10">
              <Settings className="w-6 h-6 sm:w-10 sm:h-10 text-blue-400 animate-spin-slow" />
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-blue-600/0 animate-border-glow"></div>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative px-4">
            <span className="block">Technologies We</span>
            <span className="block text-blue-400 mt-1 sm:mt-2 relative">
              Master &amp; Innovate
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-blue-200 leading-relaxed max-w-4xl mx-auto px-4">
            We don&apos;t just use technology-we push its boundaries. Our stack is a carefully crafted
            ecosystem of cutting-edge tools and battle-tested solutions, each chosen for its ability
            to deliver exceptional results at scale.
          </p>

          {/* Enhanced Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-8 sm:mt-12 mb-8 sm:mb-16 px-4">
            {[
              { label: 'Technologies', value: `${stats.totalTech}+`, icon: Layers },
              { label: 'Avg Proficiency', value: `${stats.avgProficiency}%`, icon: Award },
              { label: 'Trending Tech', value: stats.trending, icon: TrendingUp }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="p-4 sm:p-6 bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} tech={tech} index={index} />
          ))}
        </div>

        {/* Special Bottom Section */}
        <div className="relative text-center bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-500/20 shadow-2xl shadow-blue-500/10 overflow-hidden mx-4 sm:mx-0">
          
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-blue-800/10 to-blue-900/5 animate-pulse-slow"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"></div>
          
          <div className="relative">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-blue-600/20 rounded-full border border-blue-500/30">
                <Eye className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Always Evolving &amp; <span className="text-blue-400">Innovating</span>
            </h3>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-10">
              Technology never stands still, and neither do we. We continuously evaluate and adopt new tools, 
              frameworks, and methodologies to ensure we&apos;re always using the best solutions for your project. 
              Our commitment to learning keeps us at the forefront of innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6">
              {[
                { icon: Zap, label: 'Continuous Learning', delay: '0s' },
                { icon: Globe, label: 'Industry Standards', delay: '0.2s' },
                { icon: Shield, label: 'Best Practices', delay: '0.4s' }
              ].map((item, i) => (
                <div key={i} className="group flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300" style={{ animationDelay: item.delay }}>
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes wave {
          0% { transform: translateX(-100%) skewY(-12deg); }
          100% { transform: translateX(100%) skewY(-12deg); }
        }
        
        @keyframes wave-reverse {
          0% { transform: translateX(100%) skewY(12deg); }
          100% { transform: translateX(-100%) skewY(12deg); }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        @keyframes border-glow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.8; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.5; }
          75% { transform: translateY(-30px) rotate(270deg); opacity: 0.8; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        
        .animate-wave-reverse {
          animation: wave-reverse 20s linear infinite;
        }
        
        .animate-border-glow {
          background-size: 200% 200%;
          animation: border-glow 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .animate-pulse-slow {
            animation: none;
          }
          
          .animate-border-glow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;