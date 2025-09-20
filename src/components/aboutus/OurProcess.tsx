"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, Palette, Code2, Shield, Rocket, ChevronDown, Play, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Research',
    subtitle: 'Understanding Your Vision',
    description: 'We dive deep into your business ecosystem, analyzing market dynamics and user behaviors to craft a strategic foundation that sets you apart from the competition.',
    icon: Search,
    details: [
      'Strategic stakeholder alignment sessions',
      'Comprehensive market & competitor analysis',
      'User journey mapping & persona development',
      'Technical architecture assessment',
      'Business goal validation & KPI definition'
    ],
    duration: '1-2 weeks',
    deliverables: ['Project Brief', 'Research Report', 'Technical Specs', 'Timeline'],
    features: ['Market Analysis', 'User Research', 'Strategy Planning']
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    subtitle: 'Blueprint for Success',
    description: 'We architect your digital solution with precision, creating detailed roadmaps that ensure every element serves your business objectives perfectly.',
    icon: FileText,
    details: [
      'Information architecture & user flow design',
      'Technology stack optimization',
      'Agile sprint planning & milestone mapping',
      'Resource allocation & team assembly',
      'Risk mitigation & contingency planning'
    ],
    duration: '1-2 weeks',
    deliverables: ['Project Roadmap', 'Tech Specifications', 'Design Plan', 'Testing Strategy'],
    features: ['Strategic Planning', 'Architecture Design', 'Risk Assessment']
  },
  {
    step: '03',
    title: 'Design & Experience',
    subtitle: 'Crafting Digital Art',
    description: 'Our design team creates stunning interfaces that don\'t just look beautiful—they create emotional connections and drive meaningful user engagement.',
    icon: Palette,
    details: [
      'Design system & component library creation',
      'Interactive prototyping & user testing',
      'Brand integration & visual storytelling',
      'Accessibility & inclusive design implementation',
      'Mobile-first responsive optimization'
    ],
    duration: '2-4 weeks',
    deliverables: ['Design System', 'Prototypes', 'UI/UX Designs', 'Style Guide'],
    features: ['User-Centered Design', 'Brand Integration', 'Mobile-First']
  },
  {
    step: '04',
    title: 'Development & Engineering',
    subtitle: 'Building the Future',
    description: 'Our engineering team builds robust, scalable solutions using cutting-edge technologies, ensuring your platform performs flawlessly at scale.',
    icon: Code2,
    details: [
      'Clean, scalable code architecture',
      'API development & integrations',
      'Database optimization & security',
      'Performance tuning & optimization',
      'DevOps setup & deployment automation'
    ],
    duration: '4-10 weeks',
    deliverables: ['Production Code', 'API Docs', 'Database Schema', 'Deployment'],
    features: ['Scalable Code', 'Performance', 'Security First']
  },
  {
    step: '05',
    title: 'Testing & Optimization',
    subtitle: 'Quality Assurance',
    description: 'We conduct rigorous testing across all scenarios to ensure your solution performs flawlessly under any condition, delivering exceptional user experiences.',
    icon: Shield,
    details: [
      'Comprehensive automated testing',
      'Cross-platform compatibility validation',
      'Performance benchmarking',
      'Security audits & penetration testing',
      'User acceptance testing & feedback'
    ],
    duration: '1-3 weeks',
    deliverables: ['Test Reports', 'Performance Analysis', 'Security Audit', 'Bug Fixes'],
    features: ['Quality Testing', 'Security Validation', 'Performance Tuning']
  },
  {
    step: '06',
    title: 'Launch & Evolution',
    subtitle: 'Your Success Begins',
    description: 'We orchestrate a seamless launch and provide continuous support, ensuring your digital solution evolves with your growing business needs.',
    icon: Rocket,
    details: [
      'Strategic deployment & go-live support',
      'Performance monitoring & analytics',
      'Ongoing maintenance & updates',
      'Dedicated support team & SLA',
      'Growth planning & scalability roadmap'
    ],
    duration: 'Ongoing',
    deliverables: ['Live Website', 'Analytics Setup', 'Support Plan', 'Growth Strategy'],
    features: ['24/7 Support', 'Monitoring', 'Continuous Updates']
  }
];

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [playingStep, setPlayingStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-slate-950 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      {/* Blue Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-slate-950 to-blue-950/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.08),transparent)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-semibold">Our Development Process</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            How We Create
            <span className="block text-blue-400">Digital Excellence</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Our proven methodology transforms ambitious visions into market-leading digital solutions through systematic execution and continuous innovation.
          </p>
        </div>

        {/* Mobile-First Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === index;
            const isHovered = hoveredCard === index;
            const isPlaying = playingStep === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-blue-500/50 transition-all duration-500 cursor-pointer ${
                  isActive ? 'border-blue-400/80 bg-slate-900/90' : ''
                } ${isHovered ? 'transform scale-105' : ''} transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveStep(isActive ? null : index)}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-base border-2 border-slate-950 group-hover:rotate-12 transition-transform duration-300">
                  {step.step}
                </div>

                {/* Duration Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-600/40 rounded-full px-3 py-1">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span className="text-blue-300 text-xs font-medium">{step.duration}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlayingStep(isPlaying ? null : index);
                    }}
                    className="w-8 h-8 bg-blue-500/20 hover:bg-blue-500/40 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Play className="w-4 h-4 text-blue-400" />
                  </button>
                </div>

                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                  </div>
                  {isPlaying && (
                    <div className="absolute inset-0 bg-blue-400/20 rounded-xl animate-pulse"></div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <h4 className="text-sm sm:text-base font-semibold text-blue-300">
                    {step.subtitle}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-medium text-blue-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Deliverables Preview */}
                  <div className="bg-slate-800/40 border border-slate-600/30 rounded-lg p-3 sm:p-4">
                    <h5 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Key Deliverables
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {step.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="text-xs text-slate-400 flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-slate-600/30 pt-4">
                      <h5 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Detailed Process:
                      </h5>
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
                    <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
                      <span>{isActive ? 'Hide' : 'View'} Details</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? 'rotate-180' : ''
                      }`} />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <div className={`mt-12 sm:mt-16 md:mt-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Your Journey Timeline
            </h3>
            <p className="text-base sm:text-lg text-slate-300">
              From concept to launch and beyond
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">{step.title}</h4>
                  <p className="text-blue-400 text-xs font-medium">{step.duration}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="inline-flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-white font-semibold text-sm sm:text-base">Total: 8-20 weeks + Ongoing Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 md:mt-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="bg-gradient-to-r from-blue-900/60 to-slate-900/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your <span className="text-blue-400">Digital Transformation?</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8">
              Let's discuss your vision and create a custom roadmap for your success.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default OurProcess;