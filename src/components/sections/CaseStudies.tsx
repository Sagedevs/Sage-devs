import React, { useState, useEffect } from "react";
import Image from "next/image";
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
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Priority Immigration & Business",
    subtitle: "Professional Immigration Consulting Platform",
    category: "Business Consulting",
    image: "/proj/priotize.webp",
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
    scope: "Full Website Development & Design"
  },
  {
    id: 2,
    title: "KhanJee Canada",
    subtitle: "Authentic Pakistani Cuisine & Catering",
    category: "Restaurant & Catering",
    image: "/proj/projectSix.webp",
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
    scope: "E-commerce & Brand Development"
  },
  {
    id: 3,
    title: "Ahad Dev Portfolio",
    subtitle: "Personal Developer Portfolio & Brand",
    category: "Personal Branding",
    image: "/proj/portfolio.jpg",
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
    scope: "Personal Brand & Portfolio"
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side for portal rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCase(null);
      }
    };

    if (selectedCase) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Modal Component (rendered inline instead of portal)
  const Modal = ({ caseStudy, onClose }: { caseStudy: CaseStudy; onClose: () => void }) => (
    <motion.div
      className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[9999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-3xl max-w-5xl border border-slate-700/50 relative shadow-2xl h-[calc(100vh-10rem)] mt-[4rem] sm:mt-[5rem] md:h-[600px] md:mt-[110px]"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-slate-700/80 transition-all duration-300 z-20 flex items-center justify-center border border-slate-600/50"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Hero Section */}
          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden relative">
              <Image 
                src={caseStudy.image} 
                alt={caseStudy.title}
                width={1200} 
                height={675} 
                priority={true} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent" />
            </div>
            
            {/* Hero Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-500/30 text-blue-200 rounded-full mb-4 backdrop-blur-sm border border-blue-400/30">
                  {caseStudy.category}
                </span>
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-3 leading-tight">
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
              <h4 className="text-2xl font-bold text-white mb-6">Project Overview</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">Duration</h5>
                  <p className="text-white text-lg font-medium">{caseStudy.duration}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">Scope</h5>
                  <p className="text-white text-lg font-medium">{caseStudy.scope}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
                  <h5 className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">Impact</h5>
                  <p className="text-white text-lg font-medium">{caseStudy.outcome}</p>
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

            {/* Results */}
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

            {/* Technologies */}
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
    <>
      <section className="w-full bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-900/15" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real projects, real results, real impact on business growth
            </p>
          </motion.div>

          {/* Case Study Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCase(study)}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Hover overlay with preview */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <p className="text-white text-sm font-medium">Click to view full case study</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full mb-3">
                    {study.category}
                  </span>
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

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-300 text-base font-semibold border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
            >
              View All Case Studies
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal - Rendered directly without portal */}
      <AnimatePresence>
        {selectedCase && isClient && (
          <Modal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />
        )}
      </AnimatePresence>
    </>
  );
}