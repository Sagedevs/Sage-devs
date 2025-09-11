import React, { useState } from "react";
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
  // Fix the state type to accept CaseStudy or null
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

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

  return (
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
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
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
                
                <motion.button
                  className="text-white hover:text-blue-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  View Case Study →
                </motion.button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Detailed Case Study */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-700/50 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
                  onClick={() => setSelectedCase(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Hero Image */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={selectedCase.image} 
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full mb-4">
                      {selectedCase.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {selectedCase.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{selectedCase.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Project Overview */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">Duration</h4>
                      <p className="text-white">{selectedCase.duration}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">Scope</h4>
                      <p className="text-white">{selectedCase.scope}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">Outcome</h4>
                      <p className="text-white">{selectedCase.outcome}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4">The Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4">The Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedCase.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-white mb-6">Key Results</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedCase.results.map((result: string, index: number) => (
                        <div key={index} className="flex items-center gap-3 bg-slate-800/30 rounded-lg p-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedCase.technologies.map((tech: string, index: number) => (
                        <span key={index} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <a
                      href={selectedCase.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Live Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
            View All Case Studies →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}