import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ElementType; // Type for Lucide React icons
  href: string;
  stats: string;
}

interface ServiceCategory {
  category: string;
  description: string;
  items: ServiceItem[];
}

interface ServiceCardProps {
  service: ServiceItem;
}

const services: ServiceCategory[] = [
  {
    category: "Development Services",
    description: "Cutting-edge development solutions that power modern businesses",
    items: [
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
      }
    ]
  },
  {
    category: "WordPress Excellence",
    description: "Premium WordPress solutions for enterprise and business needs",
    items: [
      {
        title: "WordPress Development",
        subtitle: "Custom WordPress Solutions",
        description: "Custom WordPress websites, themes, and plugins with advanced functionality, performance optimization, and seamless user experience.",
        features: ["Custom Themes", "Plugin Development", "Performance Optimization", "Security Hardening"],
        technologies: ["WordPress", "PHP", "MySQL", "WP CLI"],
        icon: Globe,
        href: "/services#wordpress",
        stats: "200+ WP Sites"
      }
    ]
  },
  {
    category: "Design & Strategy",
    description: "Strategic design solutions that drive engagement and conversions",
    items: [
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
      }
    ]
  },
  {
    category: "Support & Maintenance",
    description: "Reliable ongoing support to keep your digital assets performing optimally",
    items: [
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
    ]
  }
];

const AnimatedBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions(); // Set initial dimensions
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (dimensions.width === 0) return null; // Don't render on server or before client-side dimensions are known

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Moving Dots Pattern */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              x: [Math.random() * dimensions.width, Math.random() * dimensions.width],
              y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Large Floating Shapes */}
      
      

      {/* Gradient Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-purple-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  return (
    <motion.div
      className="group relative h-full cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/40 to-gray-900/80 backdrop-blur-xl border border-gray-700/30 overflow-hidden transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
        
        {/* Animated Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={isHovered ? {
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05))',
              'linear-gradient(225deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05))',
              'linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05))',
            ]
          } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 via-blue-500/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-tr-3xl" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Header with Icon and Stats */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 backdrop-blur-sm"
              animate={isHovered ? {
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* ALL ICONS SAME COLOR - WHITE */}
              <IconComponent className="w-8 h-8 text-white" />
            </motion.div>
            
            <div className="text-right">
              <div className="text-sm font-bold text-blue-400 mb-1">{service.stats}</div>
              <div className="text-xs text-gray-500">Successfully Delivered</div>
            </div>
          </div>

          {/* Title Section */}
          <div className="mb-4">
            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
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

          {/* Key Features */}
          <div className="mb-6">
            <h5 className="text-sm font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
              Key Features
            </h5>
            <div className="grid grid-cols-2 gap-3">
              {service.features.map((feature: string, idx: number) => (
                <motion.div
                  key={idx}
                  className="flex items-center text-xs text-gray-400"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h5 className="text-sm font-bold text-white mb-3 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
              Tech Stack
            </h5>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech: string, idx: number) => (
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
          <motion.div
            className="mt-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="w-full p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl border border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-400">
              <div className="flex items-center justify-center gap-3">
                <span>Explore Service</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-lg"
                >
                  →
                </motion.div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20 relative"
        >
          
          <motion.div
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-bold tracking-wide">Our Services</span>
            </div>
          </motion.div>
          
          <h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Vision
            </span>
          </h2>
          
          <p 
            className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed"
          >
            From innovative development to strategic design, we deliver comprehensive solutions 
            that accelerate growth, enhance user experience, and future-proof your business
          </p>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-20">
          
              
              {/* Services Grid */}
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.flatMap(category => category.items).map((service: ServiceItem) => (
                  <Link key={service.title} href={service.href} passHref>
                    <ServiceCard service={service} />
                  </Link>
                ))}
              </div>
          
        </div>

        <div className="text-center mt-20">
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
            View All Services →
          </Link>
            </div>
      </div>
    </section>
  );
}