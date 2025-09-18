import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the CaseStudy type
interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
  outcome: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  scope: string;
  industry: string;
  techStack: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "ThemeHfil",
    subtitle: "Premium WordPress Theme Marketplace",
    category: "WordPress Projects",
    image: "/proj/themehfil.webp",
    link: "https://themehfil.ca/",
    outcome: "Enhanced theme sales by 300%",
    challenge: "Creating a professional marketplace for WordPress themes with seamless user experience and payment integration.",
    solution: "Developed a comprehensive theme marketplace with advanced filtering, preview functionality, and secure payment processing.",
    results: [
      "300% increase in theme sales",
      "85% user retention rate",
      "50% faster theme discovery",
      "98% customer satisfaction"
    ],
    technologies: ["WordPress", "WooCommerce", "Custom PHP", "PayPal API"],
    duration: "12 weeks",
    scope: "Full Marketplace Development",
    industry: "E-commerce",
    techStack: "WordPress & PHP"
  },
  {
    id: 2,
    title: "AIDN Australia",
    subtitle: "Australian Immigration & Visa Services",
    category: "Business Consulting",
    image: "/proj/aidn.webp",
    link: "https://aidn.org.au/",
    outcome: "Boosted client inquiries by 250%",
    challenge: "Building a trustworthy platform for immigration services with complex visa processes and client management.",
    solution: "Created a professional immigration platform with detailed visa guides, consultation booking, and client portal.",
    results: [
      "250% increase in client inquiries",
      "90% consultation conversion rate",
      "65% faster application processing",
      "95% client satisfaction score"
    ],
    technologies: ["WordPress", "Custom PHP", "Bootstrap", "MySQL"],
    duration: "10 weeks",
    scope: "Professional Service Platform",
    industry: "Business Consulting",
    techStack: "WordPress & PHP"
  },
  {
    id: 3,
    title: "Priority Immigration & Business",
    subtitle: "Professional Immigration Consulting Platform",
    category: "Business Consulting",
    image: "/proj/priorityib.webp",
    link: "https://priorityib.com.au/",
    outcome: "Enhanced client acquisition by 150%",
    challenge: "Creating a professional, trustworthy platform for immigration services with complex service offerings.",
    solution: "Developed a comprehensive website with intuitive navigation, detailed service pages, and integrated consultation booking.",
    results: [
      "150% increase in consultation bookings",
      "40% improvement in user engagement",
      "95% client satisfaction rate",
      "60% faster load times"
    ],
    technologies: ["WordPress", "Custom PHP", "Bootstrap", "MySQL"],
    duration: "8 weeks",
    scope: "Full Website Development & Design",
    industry: "Business Consulting",
    techStack: "WordPress & PHP"
  },
  {
    id: 4,
    title: "Igor Vainshtein Portfolio",
    subtitle: "Professional Photography & Creative Portfolio",
    category: "Personal Branding",
    image: "/proj/igor.webp",
    link: "https://igorvainshtein.com/",
    outcome: "Secured 15+ high-value photography projects",
    challenge: "Showcasing creative photography work with elegant design and fast loading galleries.",
    solution: "Built a stunning portfolio with optimized image galleries, smooth animations, and mobile responsiveness.",
    results: [
      "15+ high-value project acquisitions",
      "200% increase in portfolio views",
      "90% mobile user engagement",
      "Featured in design showcases"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Image Optimization"],
    duration: "6 weeks",
    scope: "Creative Portfolio Development",
    industry: "Web Apps",
    techStack: "React & Next.js"
  },
  {
    id: 5,
    title: "Admin Dashboard Pro",
    subtitle: "Advanced Analytics & Management System",
    category: "Web Apps",
    image: "/proj/admin-dashboard.webp",
    link: "https://abdulahad-2.github.io/admin-dashboard/#/dashboard",
    outcome: "Improved business efficiency by 180%",
    challenge: "Creating a comprehensive admin dashboard with real-time analytics and intuitive user management.",
    solution: "Developed a feature-rich dashboard with advanced charts, user management, and real-time data visualization.",
    results: [
      "180% improvement in business efficiency",
      "95% user adoption rate",
      "70% reduction in manual tasks",
      "99.9% uptime reliability"
    ],
    technologies: ["React", "Chart.js", "Material-UI", "Node.js"],
    duration: "14 weeks",
    scope: "Enterprise Dashboard Development",
    industry: "Web Apps",
    techStack: "React & Next.js"
  },
  {
    id: 6,
    title: "KhanJee Canada",
    subtitle: "Authentic Pakistani Cuisine & Catering",
    category: "Restaurant & Catering",
    image: "/proj/khanjee.webp",
    link: "https://khanjeecanada.com/",
    outcome: "Boosted online orders by 200%",
    challenge: "Building an appetizing digital presence for a Pakistani restaurant with online ordering and catering services.",
    solution: "Created a vibrant, culturally-rich website with mouth-watering food photography and seamless online ordering.",
    results: [
      "200% increase in online orders",
      "300% growth in catering bookings",
      "85% mobile user engagement",
      "50% reduction in phone orders"
    ],
    technologies: ["WordPress", "WooCommerce", "Custom CSS", "Payment Gateway"],
    duration: "6 weeks",
    scope: "E-commerce & Brand Development",
    industry: "E-commerce",
    techStack: "WordPress & PHP"
  },
  {
    id: 7,
    title: "Conso Frontend Platform",
    subtitle: "Modern Business Management System",
    category: "SaaS Platforms",
    image: "/proj/conso.webp",
    link: "https://conso-frontend-v2.onrender.com/",
    outcome: "Streamlined business operations by 220%",
    challenge: "Developing a comprehensive business management platform with multiple integrated modules.",
    solution: "Built a scalable SaaS platform with advanced features for inventory, sales, and customer management.",
    results: [
      "220% improvement in operational efficiency",
      "150+ active business users",
      "99.8% system reliability",
      "60% reduction in manual processes"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    duration: "16 weeks",
    scope: "Full-Stack SaaS Development",
    industry: "SaaS Platforms",
    techStack: "React & Next.js"
  },
  {
    id: 8,
    title: "Real-Time Chat Application",
    subtitle: "Instant Messaging & Communication Platform",
    category: "Web Apps",
    image: "/proj/chatapp.webp",
    link: "https://chatapp-rho-six.vercel.app/",
    outcome: "Connected 1000+ active users",
    challenge: "Building a real-time chat application with instant messaging and user presence features.",
    solution: "Developed a modern chat application with WebSocket integration, real-time messaging, and user management.",
    results: [
      "1000+ active daily users",
      "99% message delivery rate",
      "Sub-second message latency",
      "95% user engagement rate"
    ],
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    duration: "8 weeks",
    scope: "Real-Time Communication Platform",
    industry: "Web Apps",
    techStack: "React & Next.js"
  },
  {
    id: 9,
    title: "Sage Video Downloader",
    subtitle: "Advanced Video Processing & Download Tool",
    category: "AI & ML",
    image: "/proj/sage-video.webp",
    link: "https://sage-video-downloader.onrender.com/",
    outcome: "Processed 10,000+ video downloads",
    challenge: "Creating an intelligent video downloader with format conversion and quality optimization.",
    solution: "Built an AI-powered video processing tool with advanced download capabilities and format conversion.",
    results: [
      "10,000+ successful video downloads",
      "Support for 50+ video formats",
      "99% download success rate",
      "80% faster processing speed"
    ],
    technologies: ["Python", "FFmpeg", "Flask", "AI Processing"],
    duration: "10 weeks",
    scope: "AI-Powered Video Tool",
    industry: "Web Apps",
    techStack: "AI & ML"
  },
  {
    id: 10,
    title: "Ahad Dev Portfolio",
    subtitle: "Personal Developer Portfolio & Brand",
    category: "Personal Branding",
    image: "/proj/portfolio.webp",
    link: "https://ahad-dev.vercel.app/",
    outcome: "Secured 25+ high-value clients",
    challenge: "Creating a standout developer portfolio that showcases technical expertise with elegant design.",
    solution: "Built a modern, interactive portfolio with advanced animations and seamless user experience.",
    results: [
      "25+ high-value client acquisitions",
      "98% performance score",
      "120% increase in project inquiries",
      "Featured in design showcases"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    duration: "4 weeks",
    scope: "Personal Brand & Portfolio",
    industry: "Web Apps",
    techStack: "React & Next.js"
  },
  {
    id: 11,
    title: "AI Resume Analyzer",
    subtitle: "Intelligent Resume Analysis & Generation",
    category: "AI & ML",
    image: "/proj/ai-resume.webp",
    link: "https://ai-resume-analyzer-generator.vercel.app/upload",
    outcome: "Analyzed 5,000+ resumes with 95% accuracy",
    challenge: "Developing an AI system to analyze and improve resumes with intelligent recommendations.",
    solution: "Created an advanced AI platform using machine learning to analyze resume content and provide insights.",
    results: [
      "5,000+ resumes analyzed",
      "95% accuracy in recommendations",
      "80% improvement in resume quality",
      "90% user satisfaction rate"
    ],
    technologies: ["Next.js", "Python", "OpenAI API", "Machine Learning"],
    duration: "12 weeks",
    scope: "AI-Powered Resume Platform",
    industry: "Web Apps",
    techStack: "AI & ML"
  },
  {
    id: 12,
    title: "Developer Portfolio Classic",
    subtitle: "Professional Development Showcase",
    category: "Personal Branding",
    image: "/proj/portfolio-classic.webp",
    link: "https://abdulahad-developer.netlify.app/",
    outcome: "Established strong online presence",
    challenge: "Building a comprehensive portfolio to showcase development skills and attract potential clients.",
    solution: "Developed a professional portfolio with project showcases, skills demonstration, and contact integration.",
    results: [
      "200% increase in profile views",
      "10+ client inquiries per month",
      "Featured in developer communities",
      "Strong professional network growth"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    duration: "3 weeks",
    scope: "Professional Portfolio",
    industry: "Web Apps",
    techStack: "Frontend Web"
  },
  {
    id: 13,
    title: "Modern Landing Page",
    subtitle: "High-Converting Marketing Website",
    category: "Marketing",
    image: "/proj/landing-page.webp",
    link: "https://landing-page-bice-three-77.vercel.app/",
    outcome: "Achieved 85% conversion rate",
    challenge: "Creating a high-converting landing page with modern design and optimal user experience.",
    solution: "Built a conversion-focused landing page with compelling copy, smooth animations, and clear CTAs.",
    results: [
      "85% conversion rate achieved",
      "300% increase in lead generation",
      "60% reduction in bounce rate",
      "95+ PageSpeed Insights score"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    duration: "4 weeks",
    scope: "High-Converting Landing Page",
    industry: "Web Apps",
    techStack: "React & Next.js"
  },
  {
    id: 14,
    title: "Debug Shop Services",
    subtitle: "Professional Development Services Platform",
    category: "Business Services",
    image: "/proj/debug-shop.webp",
    link: "http://dbug.sparkweb.cloud/shop-services/",
    outcome: "Streamlined service delivery by 160%",
    challenge: "Creating a professional platform for development services with project management capabilities.",
    solution: "Developed a comprehensive services platform with project tracking, client communication, and delivery management.",
    results: [
      "160% improvement in service delivery",
      "50+ satisfied business clients",
      "99% project completion rate",
      "4.9/5 average client rating"
    ],
    technologies: ["WordPress", "Custom PHP", "MySQL", "Bootstrap"],
    duration: "8 weeks",
    scope: "Professional Services Platform",
    industry: "Business Consulting",
    techStack: "WordPress & PHP"
  },
  {
    id: 15,
    title: "InsightBC Analytics",
    subtitle: "Business Intelligence & Analytics Platform",
    category: "Enterprise",
    image: "/proj/insightbc.webp",
    link: "https://insightbc.sparkweb.cloud/about-us/",
    outcome: "Enhanced business insights by 275%",
    challenge: "Building an enterprise-level analytics platform with advanced data visualization and reporting.",
    solution: "Created a comprehensive BI platform with real-time analytics, custom dashboards, and automated reporting.",
    results: [
      "275% improvement in business insights",
      "100+ enterprise clients",
      "Real-time data processing",
      "99.9% system uptime"
    ],
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    duration: "20 weeks",
    scope: "Enterprise Analytics Platform",
    industry: "Enterprise",
    techStack: "React & Next.js"
  },
  {
    id: 16,
    title: "Verdeos Sustainability",
    subtitle: "Environmental Solutions & Green Technology",
    category: "Environmental Tech",
    image: "/proj/verdeos.webp",
    link: "https://verdeos.com/",
    outcome: "Promoted 500+ green initiatives",
    challenge: "Creating an engaging platform to promote environmental sustainability and green technologies.",
    solution: "Built an interactive platform showcasing environmental solutions with compelling visuals and data presentations.",
    results: [
      "500+ green initiatives promoted",
      "200% increase in environmental awareness",
      "150+ partner organizations",
      "Global sustainability impact"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Data Visualization"],
    duration: "10 weeks",
    scope: "Environmental Platform Development",
    industry: "Web Apps",
    techStack: "React & Next.js"
  },
  {
    id: 17,
    title: "Shopify E-commerce Store",
    subtitle: "Custom Shopify Theme & Functionality",
    category: "E-commerce",
    image: "/proj/shopify-store.webp",
    link: "https://by39tk-uv.myshopify.com/",
    outcome: "Increased online sales by 320%",
    challenge: "Developing a custom Shopify theme with advanced e-commerce functionality and user experience.",
    solution: "Created a fully customized Shopify store with advanced product filtering, checkout optimization, and mobile responsiveness.",
    results: [
      "320% increase in online sales",
      "95% mobile conversion rate",
      "40% improvement in user engagement",
      "99% payment processing success"
    ],
    technologies: ["Shopify Liquid", "JavaScript", "CSS3", "Shopify APIs"],
    duration: "6 weeks",
    scope: "Custom E-commerce Development",
    industry: "E-commerce",
    techStack: "Frontend Web"
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: caseStudies.length },
  { id: 'web-apps', label: 'Web Apps', count: caseStudies.filter(cs => cs.industry === 'Web Apps').length },
  { id: 'saas', label: 'SaaS Platforms', count: caseStudies.filter(cs => cs.industry === 'SaaS Platforms').length },
  { id: 'ecommerce', label: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
  { id: 'enterprise', label: 'Enterprise', count: caseStudies.filter(cs => cs.industry === 'Enterprise').length },
  { id: 'wordpress', label: 'WordPress Projects', count: caseStudies.filter(cs => cs.techStack === 'WordPress & PHP').length },
  { id: 'react', label: 'React & Next.js', count: caseStudies.filter(cs => cs.techStack === 'React & Next.js').length },
  { id: 'ai-ml', label: 'AI & ML', count: caseStudies.filter(cs => cs.techStack === 'AI & ML').length },
  { id: 'frontend', label: 'Frontend Web', count: caseStudies.filter(cs => cs.techStack === 'Frontend Web').length }
];

export default function CaseStudiesMasterpiece() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [filteredCases, setFilteredCases] = useState(caseStudies);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredCases(caseStudies);
    } else {
      const filtered = caseStudies.filter(cs => {
        switch (selectedCategory) {
          case 'web-apps': return cs.industry === 'Web Apps';
          case 'saas': return cs.industry === 'SaaS Platforms';
          case 'ecommerce': return cs.industry === 'E-commerce';
          case 'enterprise': return cs.industry === 'Enterprise';
          case 'wordpress': return cs.techStack === 'WordPress & PHP';
          case 'react': return cs.techStack === 'React & Next.js';
          case 'ai-ml': return cs.techStack === 'AI & ML';
          case 'frontend': return cs.techStack === 'Frontend Web';
          default: return true;
        }
      });
      setFilteredCases(filtered);
    }
  }, [selectedCategory]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCase(null);
      }
    };

    if (selectedCase) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Modal Component
  const Modal = ({ caseStudy, onClose }: { caseStudy: CaseStudy; onClose: () => void }) => (
    <motion.div
      className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-slate-900/98 to-slate-800/95 backdrop-blur-xl rounded-3xl max-w-6xl border border-slate-700/50 relative shadow-2xl h-[calc(100vh-8rem)] overflow-hidden"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-slate-700/90 transition-all duration-300 z-20 flex items-center justify-center border border-slate-600/50"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full">
          {/* Hero Section */}
          <div className="relative h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-slate-900/60 to-slate-950/90" />
            <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-50`} />
            
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-200 rounded-full mb-4 backdrop-blur-sm border border-blue-400/30">
                  {caseStudy.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-200 text-xl mb-4">{caseStudy.subtitle}</p>
                <p className="text-blue-300 text-lg font-semibold">{caseStudy.outcome}</p>
              </motion.div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-12">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-3xl font-bold text-white mb-8">Project Overview</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/40">
                  <h5 className="text-blue-300 font-semibold mb-3 text-sm uppercase tracking-wide">Duration</h5>
                  <p className="text-white text-xl font-medium">{caseStudy.duration}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/40">
                  <h5 className="text-blue-300 font-semibold mb-3 text-sm uppercase tracking-wide">Scope</h5>
                  <p className="text-white text-xl font-medium">{caseStudy.scope}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/40">
                  <h5 className="text-blue-300 font-semibold mb-3 text-sm uppercase tracking-wide">Impact</h5>
                  <p className="text-white text-xl font-medium">{caseStudy.outcome}</p>
                </div>
              </div>
            </motion.div>

            {/* Challenge & Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white">The Challenge</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{caseStudy.challenge}</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white">The Solution</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{caseStudy.solution}</p>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h4 className="text-3xl font-bold text-white mb-8">Key Results & Achievements</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result: string, index: number) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-500/30 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h4 className="text-3xl font-bold text-white mb-8">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-4">
                {caseStudy.technologies.map((tech: string, index: number) => (
                  <motion.span 
                    key={index} 
                    className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/40 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Live Project</span>
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <section className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-indigo-950/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/3 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }} />
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30`} />

        <div className="max-w-7xl mx-auto px-5 relative z-10 py-20">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
                Case Studies
              </span>
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Real projects, measurable results, transformative digital experiences that drive business growth and user engagement
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500/50 shadow-lg'
                      : 'bg-slate-800/60 text-gray-300 border-slate-600/50 hover:bg-slate-700/80 hover:text-white hover:border-blue-500/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-blue-100'
                      : 'bg-slate-700/80 text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Case Study Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredCases.map((study, index) => (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -12, scale: 1.02 }}
                  onClick={() => setSelectedCase(study)}
                  layout
                >
                  {/* Image Container */}
                  <div className="aspect-video overflow-hidden relative bg-slate-800">
                    {/* Placeholder for image */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <div className="text-4xl text-slate-500">{study.title.charAt(0)}</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                          <p className="text-white text-sm font-medium">Click to explore full case study</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                        {study.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-400">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{study.subtitle}</p>
                    
                    <div className="mb-6">
                      <p className="text-blue-300 text-sm font-semibold mb-2">{study.outcome}</p>
                      <div className="w-full bg-slate-700/50 rounded-full h-1">
                        <motion.div 
                          className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-700/60 text-gray-300 text-xs rounded-lg border border-slate-600/50">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/60 text-gray-300 text-xs rounded-lg border border-slate-600/50">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <motion.div
                      className="text-white hover:text-blue-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Explore Case Study
                      <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 bg-gradient-to-r from-slate-900/60 to-slate-800/40 rounded-3xl border border-slate-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {caseStudies.length}+
              </motion.div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                98%
              </motion.div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                200%
              </motion.div>
              <div className="text-gray-400 text-sm">Average ROI Boost</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                24/7
              </motion.div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </motion.div>

          {/* View All CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-300 text-lg font-semibold rounded-full border border-blue-500/40 hover:border-blue-400/60 hover:from-blue-600/30 hover:to-indigo-600/30 transition-all duration-300 backdrop-blur-sm"
            >
              Start Your Project Today
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && isClient && (
          <Modal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />
        )}
      </AnimatePresence>
    </>
  );
}