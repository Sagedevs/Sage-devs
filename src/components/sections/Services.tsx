import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  ShoppingCart, 
  Globe,
  Palette,
  Target,
  Sparkles,
  Wrench,
  Server,
  Database,
  Zap,
  TrendingUp,
  Users,
  Layers,
  Settings
} from 'lucide-react';

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
  index: number;
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
        href: "/services/web-app-development",
        stats: "500+ Projects"
      },
      {
        title: "SaaS & Product Development",
        subtitle: "Scalable Software Solutions",
        description: "End-to-end SaaS platforms with subscription management, user authentication, and advanced analytics built for enterprise scale.",
        features: ["Multi-tenant Architecture", "Subscription Billing", "Analytics Dashboard", "API Integration"],
        technologies: ["AWS", "Stripe", "PostgreSQL", "Redis"],
        icon: Zap,
        href: "/services/saas-product-development",
        stats: "50+ SaaS Apps"
      },
      {
        title: "E-commerce Solutions",
        subtitle: "Digital Commerce Platforms",
        description: "High-converting online stores with advanced inventory management, payment processing, and comprehensive customer analytics.",
        features: ["Payment Integration", "Inventory Management", "SEO Optimization", "Mobile Commerce"],
        technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
        icon: ShoppingCart,
        href: "/services/ecommerce-solutions",
        stats: "200+ Stores"
      },
      {
        title: "Cloud & DevOps",
        subtitle: "Infrastructure & Deployment",
        description: "Robust cloud infrastructure with automated deployment, monitoring, and scaling for maximum performance and reliability.",
        features: ["CI/CD Pipelines", "Auto Scaling", "Monitoring", "Security"],
        technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
        icon: Cloud,
        href: "/services/cloud-devops",
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
        href: "/services/wordpress-services",
        stats: "300+ WP Sites"
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
        href: "/services/ui-ux-design",
        stats: "98% User Satisfaction"
      },
      {
        title: "Digital Strategy",
        subtitle: "Business Transformation",
        description: "Comprehensive digital transformation strategies that align technology with business goals for sustainable growth and market leadership.",
        features: ["Market Analysis", "Technology Roadmap", "Growth Strategy", "ROI Planning"],
        technologies: ["Analytics", "Market Research", "Strategy Planning"],
        icon: Target,
        href: "/services/digital-strategy",
        stats: "300% Avg. Growth"
      },
      {
        title: "Brand Identity",
        subtitle: "Complete Brand Solutions",
        description: "Cohesive brand identity systems including logos, guidelines, and digital assets that resonate deeply with your target audience.",
        features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
        technologies: ["Illustrator", "Photoshop", "Figma", "Brand Tools"],
        icon: Sparkles,
        href: "/services/brand-identity",
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
        href: "/services/maintenance-support",
        stats: "24/7 Support"
      }
    ]
  }
];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Moving Dots Pattern */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
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
      <motion.div
        className="absolute w-96 h-96 border border-blue-500/10 rounded-full"
        animate={{
          x: [0, 200, 0],
          y: [0, -100, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ top: '5%', left: '5%' }}
      />
      
      <motion.div
        className="absolute w-64 h-64 bg-blue-500/5 rounded-2xl rotate-45"
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          rotate: [45, 405],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ top: '50%', right: '10%' }}
      />

      <motion.div
        className="absolute w-80 h-80 border-2 border-blue-400/10 rounded-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ bottom: '10%', left: '10%' }}
      />

      {/* Gradient Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-purple-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  return (
    <motion.div
      className="group relative h-full cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      onClick={() => console.log(`Navigate to: ${service.href}`)}
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
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-bold tracking-wide">Our Services</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Vision
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            From innovative development to strategic design, we deliver comprehensive solutions 
            that accelerate growth, enhance user experience, and future-proof your business
          </motion.p>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-20">
          {services.map((category, categoryIndex) => (
            <motion.div 
              key={category.category}
              className="space-y-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="text-center space-y-4 mb-12">
                <motion.h3 
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
                  whileInView={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    backgroundSize: '200% 100%'
                  }}
                >
                  {category.category}
                </motion.h3>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  {category.description}
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mx-auto" />
              </div>
              
              {/* Services Grid */}
              <div className={`grid gap-8 ${
                category.items.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' :
                category.items.length === 2 ? 'grid-cols-1 lg:grid-cols-2' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}>
                {category.items.map((service, serviceIndex) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={serviceIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-24 pt-16 border-t border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-blue-400">Get Started?</span>
            </h3>
            <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our comprehensive services can accelerate your digital transformation 
              and deliver exceptional results for your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                className="px-10 py-5 border-2 border-blue-500/40 text-blue-400 font-bold text-lg rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/60 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}