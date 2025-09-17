"use client";
import React, { useState } from 'react';
import { Layout, Palette, PenTool, Figma, Layers, Users, Sparkles, Monitor } from 'lucide-react';

const UIDesign = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const uiDesignServices = [
    {
      id: 1,
      icon: Layout,
      title: "User Research & Strategy",
      subtitle: "Understanding Your Users",
      description: "In-depth user research, persona development, and journey mapping to create design strategies that genuinely resonate with your target audience.",
      features: ["User interviews & surveys", "Persona & user journey mapping", "Competitive analysis", "Information architecture"],
      technologies: ["Miro", "Typeform", "Google Analytics", "Hotjar"],
      stats: "50+ Projects",
      timeline: "3-6 weeks",
      complexity: "Discovery"
    },
    {
      id: 2,
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      subtitle: "Crafting Intuitive Experiences",
      description: "Creating stunning, user-friendly interfaces and interactive prototypes that ensure seamless navigation and engaging user interactions across all devices.",
      features: ["Wireframing & low-fidelity mockups", "High-fidelity designs", "Interactive prototyping", "Design system development"],
      technologies: ["Figma", "Sketch", "Adobe XD", "InVision"],
      stats: "100+ Designs",
      timeline: "6-12 weeks",
      complexity: "Design"
    },
    {
      id: 3,
      icon: PenTool,
      title: "Front-end Development Handoff",
      subtitle: "Seamless Implementation",
      description: "Providing clear, comprehensive design documentation and assets for developers, ensuring accurate and efficient implementation of the UI/UX design into code.",
      features: ["Developer-friendly design specs", "Asset export & optimization", "Interaction & animation guidelines", "Continuous collaboration"],
      technologies: ["Zeplin", "Storybook", "Jira", "Confluence"],
      stats: "80+ Handoffs",
      timeline: "2-4 weeks",
      complexity: "Implementation"
    },
    {
      id: 4,
      icon: Users,
      title: "Usability Testing & Iteration",
      subtitle: "Refining User Satisfaction",
      description: "Conducting rigorous usability testing and A/B experiments to gather feedback, identify pain points, and iterate on designs for optimal user satisfaction.",
      features: ["Usability testing (moderated/unmoderated)", "A/B testing & heatmaps", "Accessibility audits", "Post-launch performance monitoring"],
      technologies: ["UserTesting", "Hotjar", "Optimizely", "Google Optimize"],
      stats: "60+ Tests Run",
      timeline: "Ongoing",
      complexity: "Testing"
    },
    {
      id: 5,
      icon: Monitor,
      title: "Responsive & Adaptive Design",
      subtitle: "Seamless Experience Everywhere",
      description: "Designing interfaces that look and function flawlessly across all devices and screen sizes, ensuring a consistent and delightful user experience from desktop to mobile.",
      features: ["Mobile-first design principles", "Cross-browser compatibility", "Accessibility standards (WCAG)", "Performance optimization for all devices"],
      technologies: ["Bootstrap", "Tailwind CSS", "Material-UI", "Responsive Frameworks"],
      stats: "90+ Responsive Designs",
      timeline: "5-10 weeks",
      complexity: "Adaptation"
    },
    {
      id: 6,
      icon: Sparkles,
      title: "Interactive Animations & Micro-interactions",
      subtitle: "Bringing Designs to Life",
      description: "Enhancing user engagement and delight through subtle yet impactful animations and micro-interactions that guide users and provide instant feedback.",
      features: ["Loading animations & transitions", "Hover effects & button feedback", "Form validation animations", "Onboarding guided tours"],
      technologies: ["Framer Motion", "GreenSock (GSAP)", "Lottie", "CSS Animations"],
      stats: "70+ Animations",
      timeline: "4-8 weeks",
      complexity: "Enhancement"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Discovery': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Design': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Implementation': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'Testing': return 'text-red-400 border-red-500/30 bg-red-500/10';
      case 'Adaptation': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Enhancement': return 'text-lime-400 border-lime-500/30 bg-lime-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (2 + Math.random() * 2) + 's'
              }}
            />
          ))}
        </div>

        {/* Gradient Background Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/12 via-indigo-500/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-8 mx-auto">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-purple-400 font-bold tracking-wide flex items-center gap-2">
                <Layout className="w-4 h-4" />
                UI/UX Design Services
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Crafting Exceptional{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            We believe great design is at the heart of every successful product. Our UI/UX design
            services focus on creating intuitive, engaging, and aesthetically pleasing interfaces
            that delight users and drive business growth.
          </p>
        </div>

        {/* UI/UX Design Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {uiDesignServices.map((service) => (
            <div
              key={service.id}
              className="group relative h-full cursor-pointer"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-800/40 to-slate-900/80 backdrop-blur-xl border border-slate-700/30 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{
                       animation: hoveredCard === service.id ? 'gradientShift 3s infinite' : 'none'
                     }} />
                
                <style jsx>{`
                  @keyframes gradientShift {
                    0% { background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                    50% { background: linear-gradient(225deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                    100% { background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                  }
                `}</style>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 via-blue-500/10 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-tr-3xl" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header with Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xs font-bold text-purple-400 mb-1">{service.stats}</div>
                      <div className={`text-xxs px-2 py-1 rounded-full ${getComplexityColor(service.complexity)}`}>
                        {service.complexity}
                      </div>
                    </div>
                  </div>

                  {/* Title Section */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-purple-400 font-medium text-xs uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description - More Detailed */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-xs">
                    {service.description}
                  </p>

                  {/* Key Features - Expanded */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      Technical Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xxs text-slate-400 group/item">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-purple-300 transition-colors" />
                          <span className="group-hover/item:text-slate-300 transition-colors leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2" />
                      Development Timeline
                    </h4>
                    <div className="text-xxs text-slate-400">
                      {service.timeline} typical delivery
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xxs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our Core UI/UX Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Figma className="w-5 h-5 text-purple-400" />
                Design Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Sketch", "Adobe XD", "InVision", "ProtoPie", "Webflow"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                Prototyping & Collaboration
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Figma Prototyping", "Adobe XD", "InVision Freehand", "Miro", "Zeplin", "Confluence"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                User Research & Testing
              </h3>
              <div className="flex flex-wrap gap-2">
                {["UserTesting", "Hotjar", "Maze", "Lookback", "Optimizely", "Google Optimize"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <button className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Start Your Design Project
              <Figma className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-purple-500/30 transition-all duration-300 text-base">
              View Design Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIDesign;