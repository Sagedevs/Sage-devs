import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the CaseStudy type
interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: string[];
  image: string;
  link: string;
  outcome: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  scope: string;
  clientType: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Priority Immigration & Business",
    subtitle: "Professional Immigration Consulting Platform",
    category: ["WordPress Projects", "Enterprise", "Frontend Web"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=faces",
    link: "https://priorityib.com.au/",
    outcome: "Enhanced client acquisition by 150%",
    challenge: "Creating a professional, trustworthy platform for immigration services with complex service offerings and client testimonials.",
    solution: "Developed a comprehensive website with intuitive navigation, detailed service pages, client success stories, and integrated consultation booking system.",
    results: [
      "150% increase in consultation bookings",
      "40% improvement in user engagement", 
      "95% client satisfaction rate",
      "60% faster load times"
    ],
    technologies: ["WordPress", "Custom PHP", "Bootstrap", "MySQL"],
    duration: "8 weeks",
    scope: "Full Website Development & Design",
    clientType: "Professional Services"
  },
  {
    id: 2,
    title: "KhanJee Canada",
    subtitle: "Authentic Pakistani Cuisine & E-commerce",
    category: ["E-commerce", "WordPress Projects", "Frontend Web"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    link: "https://khanjeecanada.com/",
    outcome: "Boosted online orders by 200%",
    challenge: "Building an appetizing digital presence for a Pakistani restaurant with online ordering, catering services, and cultural authenticity.",
    solution: "Created a vibrant, culturally-rich website with mouth-watering food photography, seamless online ordering, and catering request forms.",
    results: [
      "200% increase in online orders",
      "300% growth in catering bookings",
      "85% mobile user engagement", 
      "50% reduction in phone orders"
    ],
    technologies: ["WordPress", "WooCommerce", "Custom CSS", "Payment Gateway"],
    duration: "6 weeks",
    scope: "E-commerce & Brand Development",
    clientType: "Restaurant & Food"
  },
  {
    id: 3,
    title: "Ahad Dev Portfolio",
    subtitle: "Modern Developer Portfolio & Personal Brand",
    category: ["Frontend Web", "React & Next.js", "Web Apps"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "https://ahad-dev.vercel.app/",
    outcome: "Secured 5+ high-value clients",
    challenge: "Creating a standout developer portfolio that showcases technical expertise while maintaining elegant design and optimal performance.",
    solution: "Built a modern, interactive portfolio with advanced animations, project showcases, skill demonstrations, and seamless user experience.",
    results: [
      "5+ high-value client acquisitions",
      "98% performance score",
      "120% increase in project inquiries",
      "Featured in design showcases"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    duration: "4 weeks", 
    scope: "Personal Brand & Portfolio",
    clientType: "Personal Branding"
  },
  {
    id: 4,
    title: "ThemeHFil Creative Agency",
    subtitle: "Digital Agency Portfolio & Service Platform",
    category: ["WordPress Projects", "Enterprise", "Frontend Web"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    link: "https://themehfil.ca/",
    outcome: "Generated 300% more qualified leads",
    challenge: "Establishing a strong digital presence for a creative agency with diverse services while showcasing portfolio and attracting high-value clients.",
    solution: "Designed a sleek, professional website with interactive portfolio galleries, service showcases, and streamlined contact processes.",
    results: [
      "300% increase in qualified leads",
      "180% boost in project inquiries",
      "92% client retention rate",
      "40% higher average project value"
    ],
    technologies: ["WordPress", "Custom Themes", "JavaScript", "CSS3"],
    duration: "10 weeks",
    scope: "Full Brand & Web Development",
    clientType: "Creative Agency"
  },
  {
    id: 5,
    title: "AIDN Australia",
    subtitle: "Professional Industry Network Platform",
    category: ["Enterprise", "WordPress Projects", "SaaS Platforms"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    link: "https://aidn.org.au/",
    outcome: "Connected 2000+ industry professionals",
    challenge: "Building a comprehensive networking platform for industry professionals with membership management, event coordination, and resource sharing.",
    solution: "Developed a robust membership platform with event management, networking tools, resource libraries, and member communication systems.",
    results: [
      "2000+ active members registered",
      "500% increase in event attendance",
      "85% member engagement rate",
      "40+ successful networking events"
    ],
    technologies: ["WordPress", "Memberpress", "Event Management", "Custom PHP"],
    duration: "12 weeks",
    scope: "Platform Development & Integration",
    clientType: "Professional Network"
  },
  {
    id: 6,
    title: "Igor Vainshtein Portfolio",
    subtitle: "Executive Personal Brand & Portfolio",
    category: ["Frontend Web", "Enterprise", "WordPress Projects"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop&crop=face",
    link: "https://igorvainshtein.com/",
    outcome: "Established thought leadership presence",
    challenge: "Creating a sophisticated personal brand website for a senior executive that reflects expertise and builds professional credibility.",
    solution: "Crafted an elegant, minimalist design focusing on achievements, thought leadership content, and professional networking capabilities.",
    results: [
      "400% increase in LinkedIn connections",
      "250% growth in speaking engagements",
      "12+ media interview requests",
      "Positioned as industry thought leader"
    ],
    technologies: ["WordPress", "Custom Design", "SEO Optimization", "Analytics"],
    duration: "6 weeks",
    scope: "Personal Brand Development",
    clientType: "Executive Branding"
  },
  {
    id: 7,
    title: "Modern Admin Dashboard",
    subtitle: "Advanced Data Management Interface",
    category: ["Web Apps", "React & Next.js", "SaaS Platforms"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "https://abdulahad-2.github.io/admin-dashboard/#/dashboard",
    outcome: "Improved admin efficiency by 75%",
    challenge: "Designing an intuitive admin dashboard with complex data visualization, user management, and real-time analytics for business operations.",
    solution: "Built a responsive, feature-rich dashboard with interactive charts, data tables, user management, and real-time monitoring capabilities.",
    results: [
      "75% improvement in admin efficiency",
      "90% reduction in task completion time",
      "98% user satisfaction score",
      "Zero learning curve for new users"
    ],
    technologies: ["React", "Chart.js", "Material-UI", "REST APIs"],
    duration: "8 weeks",
    scope: "Full Dashboard Development",
    clientType: "Business Management"
  },
  {
    id: 8,
    title: "Conso Consulting Platform",
    subtitle: "Business Consulting & Service Management",
    category: ["Web Apps", "SaaS Platforms", "Enterprise"],
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
    link: "https://conso-frontend-v2.onrender.com/",
    outcome: "Streamlined consulting operations by 60%",
    challenge: "Creating a comprehensive platform for consulting firms to manage clients, projects, and deliverables with automated workflows.",
    solution: "Developed an integrated consulting platform with project management, client portals, document sharing, and automated reporting systems.",
    results: [
      "60% improvement in operational efficiency",
      "45% reduction in project delivery time",
      "92% client satisfaction rate",
      "200% increase in concurrent projects"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    duration: "14 weeks",
    scope: "Full Platform Development",
    clientType: "Consulting Services"
  },
  {
    id: 9,
    title: "Real-Time Chat Application",
    subtitle: "Modern Communication Platform",
    category: ["Web Apps", "React & Next.js", "Mobile Apps"],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
    link: "https://chatapp-rho-six.vercel.app/",
    outcome: "Facilitated 10,000+ daily conversations",
    challenge: "Building a scalable, real-time chat application with modern UI, file sharing, and cross-platform compatibility.",
    solution: "Engineered a WebSocket-based chat system with real-time messaging, media sharing, user presence, and responsive design.",
    results: [
      "10,000+ daily active conversations",
      "99.9% message delivery rate",
      "Sub-second message latency",
      "95% user retention rate"
    ],
    technologies: ["React", "Socket.io", "Node.js", "WebRTC"],
    duration: "6 weeks",
    scope: "Full Application Development",
    clientType: "Communication Platform"
  },
  {
    id: 10,
    title: "Sage Video Downloader",
    subtitle: "Media Processing & Download Tool",
    category: ["Web Apps", "AI & ML", "SaaS Platforms"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    link: "https://sage-video-downloader.onrender.com/",
    outcome: "Processed 50,000+ video downloads",
    challenge: "Creating a reliable video downloading tool with format conversion, quality options, and batch processing capabilities.",
    solution: "Built an intelligent video processing platform with AI-powered format detection, quality optimization, and bulk download features.",
    results: [
      "50,000+ successful video downloads",
      "Support for 15+ video formats",
      "85% faster processing speeds",
      "99% success rate for downloads"
    ],
    technologies: ["Python", "Flask", "FFmpeg", "Machine Learning"],
    duration: "5 weeks",
    scope: "Tool Development & Optimization",
    clientType: "Media Processing"
  },
  {
    id: 11,
    title: "AI Resume Analyzer",
    subtitle: "Intelligent Resume Analysis & Generation",
    category: ["AI & ML", "Web Apps", "SaaS Platforms"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
    link: "https://ai-resume-analyzer-generator.vercel.app/upload",
    outcome: "Analyzed 25,000+ resumes with 95% accuracy",
    challenge: "Developing an AI-powered system to analyze resumes, provide feedback, and generate optimized versions for better job matching.",
    solution: "Created an intelligent platform using NLP and machine learning to parse resumes, analyze content, and provide actionable improvement suggestions.",
    results: [
      "25,000+ resumes analyzed successfully",
      "95% accuracy in skill detection",
      "80% improvement in ATS compatibility",
      "92% user satisfaction score"
    ],
    technologies: ["Python", "TensorFlow", "React", "Natural Language Processing"],
    duration: "10 weeks",
    scope: "AI Platform Development",
    clientType: "HR & Recruitment"
  },
  {
    id: 12,
    title: "Professional Landing Page",
    subtitle: "High-Converting Business Landing Page",
    category: ["Frontend Web", "WordPress Projects", "E-commerce"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "https://landing-page-bice-three-77.vercel.app/",
    outcome: "Achieved 85% conversion rate increase",
    challenge: "Designing a high-converting landing page with compelling copy, optimized user flow, and strong call-to-action elements.",
    solution: "Crafted a conversion-focused landing page with A/B tested elements, persuasive design, and optimized user journey mapping.",
    results: [
      "85% increase in conversion rate",
      "60% reduction in bounce rate",
      "3x improvement in lead generation",
      "45% increase in time on page"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Analytics"],
    duration: "3 weeks",
    scope: "Landing Page Optimization",
    clientType: "Lead Generation"
  },
  {
    id: 13,
    title: "Verdeos Green Technology",
    subtitle: "Sustainable Technology Showcase Platform",
    category: ["Enterprise", "WordPress Projects", "Frontend Web"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    link: "https://verdeos.com/",
    outcome: "Increased environmental awareness by 200%",
    challenge: "Building a platform to showcase green technology solutions while educating visitors about sustainable practices and environmental impact.",
    solution: "Developed an engaging, informative website with interactive demonstrations, environmental impact calculators, and educational resources.",
    results: [
      "200% increase in environmental awareness",
      "150% growth in solution inquiries",
      "88% user engagement with calculators",
      "45% increase in partnership requests"
    ],
    technologies: ["WordPress", "Custom Plugins", "JavaScript", "Environmental APIs"],
    duration: "9 weeks",
    scope: "Educational Platform Development",
    clientType: "Environmental Technology"
  },
  {
    id: 14,
    title: "By39TK Fashion E-commerce",
    subtitle: "Modern Fashion Retail Platform",
    category: ["E-commerce", "Mobile Apps", "Frontend Web"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    link: "https://by39tk-uv.myshopify.com/",
    outcome: "Boosted online sales by 180%",
    challenge: "Creating a modern, mobile-first e-commerce platform for fashion retail with inventory management, payment processing, and customer engagement.",
    solution: "Built a responsive Shopify store with custom themes, advanced filtering, wishlist functionality, and seamless checkout experience.",
    results: [
      "180% increase in online sales",
      "95% mobile conversion rate",
      "70% reduction in cart abandonment",
      "4.8/5 customer satisfaction score"
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Payment APIs"],
    duration: "7 weeks",
    scope: "E-commerce Store Development",
    clientType: "Fashion Retail"
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: '🎯' },
  { id: 'web-apps', name: 'Web Apps', icon: '⚡', description: 'Custom web applications' },
  { id: 'saas-platforms', name: 'SaaS Platforms', icon: '☁️', description: 'Scalable software solutions' },
  { id: 'e-commerce', name: 'E-commerce', icon: '🛍️', description: 'Online retail success' },
  { id: 'enterprise', name: 'Enterprise', icon: '🏢', description: 'Large-scale implementations' },
  { id: 'wordpress-projects', name: 'WordPress Projects', icon: '📝', description: 'Custom WordPress sites & plugins' },
  { id: 'react-nextjs', name: 'React & Next.js', icon: '⚛️', description: 'Modern web frameworks' },
  { id: 'mobile-apps', name: 'Mobile Apps', icon: '📱', description: 'iOS & Android development' },
  { id: 'ai-ml', name: 'AI & ML', icon: '🤖', description: 'Machine learning projects' },
  { id: 'blockchain', name: 'Blockchain', icon: '🔗', description: 'Decentralized solutions' },
  { id: 'frontend-web', name: 'Frontend Web', icon: '🎨', description: 'HTML, CSS, JS, and modern frameworks' }
];

export default function ComprehensiveCaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredStudies(caseStudies);
    } else {
      const filtered = caseStudies.filter(study => 
        study.category.some(cat => 
          cat.toLowerCase().replace(/\s+/g, '-').replace('&', '') === selectedCategory
        )
      );
      setFilteredStudies(filtered);
    }
  }, [selectedCategory]);

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
    hidden: { opacity: 0, y: 20 },
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
      className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[9999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-3xl max-w-5xl border border-slate-700/50 relative shadow-2xl h-[calc(100vh-2rem)] w-full"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto h-full">
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-slate-700/80 transition-all duration-300 z-20 flex items-center justify-center border border-slate-600/50"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent" />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {caseStudy.category.map((cat, index) => (
                    <span key={index} className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/30 text-blue-200 rounded-full backdrop-blur-sm border border-blue-400/30">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-2 leading-tight">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-200 text-base md:text-xl mb-3">{caseStudy.subtitle}</p>
                <p className="text-blue-300 text-base md:text-lg font-semibold">{caseStudy.outcome}</p>
              </motion.div>
            </div>
          </div>

          <div className="p-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-white mb-6">Project Overview</h4>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">Duration</h5>
                  <p className="text-white text-lg font-medium">{caseStudy.duration}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">Scope</h5>
                  <p className="text-white text-lg font-medium">{caseStudy.scope}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">Client Type</h5>
                  <p className="text-white text-lg font-medium">{caseStudy.clientType}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">Impact</h5>
                  <p className="text-white text-lg font-medium">{caseStudy.outcome}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white">The Challenge</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{caseStudy.challenge}</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white">The Solution</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{caseStudy.solution}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-white mb-8">Key Results & Achievements</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result: string, index: number) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-500/20 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-4">
                {caseStudy.technologies.map((tech: string, index: number) => (
                  <motion.span 
                    key={index} 
                    className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30 backdrop-blur-sm"
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
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Live Project</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-indigo-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable growth through innovative digital solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>150+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>50+ Industries Served</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="relative z-10 px-5 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg border border-blue-500/30'
                    : 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/60 border border-slate-600/30'
                } backdrop-blur-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                {selectedCategory === category.id && (
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Category Description */}
          {selectedCategory !== 'all' && (
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-400 text-lg">
                {categories.find(cat => cat.id === selectedCategory)?.description}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative z-10 px-5 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCase(study)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <p className="text-white text-sm font-medium">Click to view full case study</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.category.slice(0, 2).map((cat, index) => (
                      <span key={index} className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full">
                        {cat}
                      </span>
                    ))}
                    {study.category.length > 2 && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-600/30 text-slate-400 rounded-full">
                        +{study.category.length - 2}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{study.subtitle}</p>
                  <p className="text-blue-300 text-sm font-medium mb-4">{study.outcome}</p>
                  
                  <motion.div
                    className="text-white hover:text-blue-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results State */}
          {filteredStudies.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-slate-800/60 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Case Studies Found</h3>
              <p className="text-gray-400 text-lg mb-8">We're working on projects in this category. Check back soon!</p>
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-5 bg-gradient-to-r from-slate-900/50 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">150+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">98%</h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-400">Industries Served</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-400">Support Available</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Create Your
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Success Story</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who've transformed their businesses with our innovative solutions. Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-slate-800/60 text-white font-semibold rounded-full hover:bg-slate-700/60 transition-all duration-300 border border-slate-600/30 backdrop-blur-sm text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && isClient && (
          <Modal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}