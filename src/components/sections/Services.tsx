"use client";
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Cloud, 
  ShoppingCart, 
  Globe,
  Palette,
  Sparkles,
  Wrench,
  Zap,
  Brain
} from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ElementType;
  href: string;
  stats: string;
}

const services: ServiceItem[] = [
  {
    title: "Web & App Development",
    subtitle: "Custom Digital Solutions",
    description: "Full-stack web applications and mobile apps built with modern frameworks like React, Next.js, Node.js, and React Native for scalable business solutions.",
    features: ["Progressive Web Apps", "Cross-platform Mobile", "API Development", "Real-time Features"],
    technologies: ["React", "Next.js", "Node.js", "React Native"],
    icon: Code,
    href: "/services#web-app",
    stats: "100+ Projects"
  },
  {
    title: "AI-Powered Automation",
    subtitle: "Work Smarter, Not Harder",
    description: "Automate repetitive tasks and workflows with AI-driven solutions tailored to your business processes.",
    features: ["Workflow Automation", "Predictive Analytics", "AI Assistants", "Custom ML Models"],
    technologies: ["OpenAI", "TensorFlow", "LangChain", "Python"],
    icon: Brain,
    href: "/services#ai-solutions",
    stats: "10x Productivity"
  },
  {
    title: "SaaS & Product Development",
    subtitle: "Scalable Software Solutions",
    description: "End-to-end SaaS platforms with subscription management, user authentication, and advanced analytics built for enterprise scale.",
    features: ["Multi-tenant Architecture", "Subscription Billing", "Analytics Dashboard", "API Integration"],
    technologies: ["AWS", "Stripe", "PostgreSQL", "Redis"],
    icon: Zap,
    href: "/services#saas",
    stats: "50+ SaaS Apps"
  },
  {
    title: "E-commerce Solutions",
    subtitle: "Digital Commerce Platforms",
    description: "High-converting online stores with advanced inventory management, payment processing, and comprehensive customer analytics.",
    features: ["Payment Integration", "Inventory Management", "SEO Optimization", "Mobile Commerce"],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    icon: ShoppingCart,
    href: "/services#ecommerce",
    stats: "150+ Stores"
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure & Deployment",
    description: "Robust cloud infrastructure with automated deployment, monitoring, and scaling for maximum performance and reliability.",
    features: ["CI/CD Pipelines", "Auto Scaling", "Monitoring", "Security"],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
    icon: Cloud,
    href: "/services#cloud",
    stats: "99.9% Uptime"
  },
  {
    title: "WordPress Development",
    subtitle: "Custom WordPress Solutions",
    description: "Custom WordPress websites, themes, and plugins with advanced functionality, performance optimization, and seamless user experience.",
    features: ["Custom Themes", "Plugin Development", "Performance Optimization", "Security Hardening"],
    technologies: ["WordPress", "PHP", "MySQL", "WP CLI"],
    icon: Globe,
    href: "/services#wordpress",
    stats: "200+ WP Sites"
  },
  {
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description: "Intuitive interfaces and seamless user experiences backed by extensive research, testing, and data-driven design decisions.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
    icon: Palette,
    href: "/services#ui-design",
    stats: "98% User Satisfaction"
  },
  {
    title: "Brand Identity",
    subtitle: "Complete Brand Solutions",
    description: "Cohesive brand identity systems including logos, guidelines, and digital assets that resonate deeply with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    technologies: ["Illustrator", "Photoshop", "Figma", "Brand Tools"],
    icon: Sparkles,
    href: "/services#brand-identity",
    stats: "150+ Brands"
  },
  {
    title: "Technical Support",
    subtitle: "24/7 Expert Assistance",
    description: "Round-the-clock technical support with proactive monitoring, security updates, performance optimization, and backup management.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Tuning", "Backup Management"],
    technologies: ["Monitoring Tools", "Security Suites", "Backup Systems"],
    icon: Wrench,
    href: "/services#maintenance-support",
    stats: "24/7 Support"
  }
];

// Memoized static background
const StaticBackground = React.memo(({ isMobile }: { isMobile: boolean }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className={`absolute top-1/4 left-1/3 ${isMobile ? 'w-[300px] h-[300px]' : 'w-[600px] h-[600px]'} bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full ${isMobile ? '' : 'blur-3xl'}`} />
    <div className={`absolute bottom-1/4 right-1/3 ${isMobile ? 'w-[250px] h-[250px]' : 'w-[500px] h-[500px]'} bg-gradient-radial from-purple-500/8 via-purple-500/4 to-transparent rounded-full ${isMobile ? '' : 'blur-3xl'}`} />
  </div>
));

StaticBackground.displayName = 'StaticBackground';

const ServiceCard = ({ service, isMobile, index }: { service: ServiceItem; isMobile: boolean; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = service.icon;

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(cardRef.current, {
        opacity: 0,
        y: isMobile ? 30 : 50,
        scale: isMobile ? 1 : 0.95
      });

      // Scroll animation
      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 0.5 : 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });

      // Desktop hover effect
      if (!isMobile && cardRef.current) {
        const card = cardRef.current;
        
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [isMobile, index]);

  return (
    <div ref={cardRef} className="group relative h-full">
      <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/40 to-gray-900/80 ${isMobile ? '' : 'backdrop-blur-xl'} border border-gray-700/30 ${isMobile ? '' : 'transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20'}`}>
        
        {/* Hover gradient overlay - desktop only */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 via-blue-500/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-tr-3xl" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className={`p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 ${isMobile ? '' : 'backdrop-blur-sm'}`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            
            <div className="text-right">
              <div className="text-sm font-bold text-blue-400 mb-1">{service.stats}</div>
              <div className="text-xs text-gray-500">Delivered</div>
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <h4 className={`text-2xl font-bold text-white mb-2 ${isMobile ? '' : 'transition-colors duration-300 group-hover:text-blue-300'}`}>
              {service.title}
            </h4>
            <p className="text-blue-400 font-medium text-sm uppercase tracking-wide">
              {service.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6 flex-grow text-sm">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h5 className="text-sm font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
              Key Features
            </h5>
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
              {service.features.slice(0, isMobile ? 3 : 4).map((feature, idx) => (
                <div key={idx} className="flex items-center text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h5 className="text-sm font-bold text-white mb-3 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
              Tech Stack
            </h5>
            <div className="flex flex-wrap gap-2">
              {service.technologies.slice(0, isMobile ? 3 : 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href={service.href} className="w-full block">
            <div className={`w-full p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl border border-blue-500/50 text-center ${isMobile ? '' : 'transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:from-blue-500 hover:to-blue-400'}`}>
              <div className="flex items-center justify-center gap-3">
                <span>Explore Service</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Header and CTA animations
  useEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: isMobile ? 0.6 : 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        });
      }

      // CTA animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: isMobile ? 0.6 : 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      }
    });

    return () => ctx.revert();
  }, [isMounted, isMobile]);

  return (
    <section className="relative w-full min-h-screen bg-[#020618] overflow-hidden">
      {/* Static background */}
      <StaticBackground isMobile={isMobile} />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className={`px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full ${isMobile ? '' : 'backdrop-blur-sm'}`}>
              <span className="text-blue-400 font-bold tracking-wide">Our Services</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Vision
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            From innovative development to strategic design, we deliver comprehensive solutions 
            that accelerate growth, enhance user experience, and future-proof your business
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              isMobile={isMobile}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <Link href="/services" className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full text-lg ${isMobile ? '' : 'hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300'}`}>
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}