"use client";
import React, { useState } from 'react';
import { Code2, Layers, Database, Shield, ArrowRight, Terminal, Server, Activity, Lock } from 'lucide-react';
import Link from "next/link";
const WebAppDevelopment = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const webAppServices = [
    {
      id: 1,
      icon: Layers,
      title: "Single Page Applications",
      subtitle: "Dynamic SPA Architecture",
      description: "Complex single-page applications with dynamic routing, state management, and seamless user experiences. Built with React/Vue ecosystems for enterprise-scale performance.",
      features: ["Client-side routing with React Router", "Global state management with Redux/Zustand", "Code splitting and lazy loading", "Virtual DOM optimization"],
      technologies: ["React", "Redux Toolkit", "React Router", "Webpack"],
      stats: "150+ SPAs Built",
      timeline: "6-12 weeks",
      complexity: "Enterprise"
    },
    {
      id: 2,
      icon: Activity,
      title: "Real-time Applications",
      subtitle: "Live Data & Communication",
      description: "Real-time web applications with live updates, collaborative features, and instant data synchronization. Perfect for dashboards, chat systems, and monitoring tools.",
      features: ["WebSocket connections for real-time data", "Server-Sent Events for live updates", "Collaborative editing capabilities", "Real-time notifications & alerts"],
      technologies: ["Socket.io", "WebRTC", "Server-Sent Events", "Redis"],
      stats: "80+ Real-time Apps",
      timeline: "8-16 weeks",
      complexity: "Advanced"
    },
    {
      id: 3,
      icon: Database,
      title: "Data-Driven Applications",
      subtitle: "Complex Data Management",
      description: "Sophisticated applications handling complex data relationships, advanced analytics, reporting systems, and business intelligence dashboards with real-time insights.",
      features: ["Complex data modeling & relationships", "Advanced filtering and search", "Real-time analytics & reporting", "Data visualization & charts"],
      technologies: ["GraphQL", "Prisma", "D3.js", "ElasticSearch"],
      stats: "100+ Data Apps",
      timeline: "10-20 weeks",
      complexity: "Enterprise"
    },
    {
      id: 4,
      icon: Lock,
      title: "Enterprise Security",
      subtitle: "Advanced Security Implementation",
      description: "Enterprise-grade security with OAuth integration, encryption, audit trails, compliance features, and advanced threat protection for mission-critical applications.",
      features: ["OAuth 2.0 & OpenID Connect", "End-to-end encryption", "Comprehensive audit trails", "GDPR & SOC2 compliance"],
      technologies: ["OAuth 2.0", "Encryption", "Audit Systems", "Compliance"],
      stats: "200+ Secure Apps",
      timeline: "4-8 weeks",
      complexity: "Critical"
    },
    // 🆕 New Card 1
    {
      id: 5,
      icon: Server,
      title: "Microservices Architecture",
      subtitle: "Scalable & Modular Systems",
      description: "Breaking down monoliths into scalable microservices with independent deployment, fault isolation, and cloud-native design. Perfect for complex enterprise ecosystems.",
      features: ["Independent service deployment", "API Gateway integration", "Service discovery & load balancing", "Containerized services with Docker & Kubernetes"],
      technologies: ["Node.js", "Docker", "Kubernetes", "gRPC"],
      stats: "50+ Microservice Systems",
      timeline: "12-20 weeks",
      complexity: "Enterprise"
    },
    // 🆕 New Card 2
    {
      id: 6,
      icon: Code2,
      title: "Progressive Web Apps",
      subtitle: "Offline-first Experiences",
      description: "Modern web apps with offline capabilities, installable features, and near-native performance. Delivering seamless cross-device user experiences.",
      features: ["Offline support with Service Workers", "Push notifications", "Add-to-home-screen installability", "Lighthouse PWA compliance"],
      technologies: ["React", "Next.js", "Workbox", "Service Workers"],
      stats: "70+ PWAs Delivered",
      timeline: "6-10 weeks",
      complexity: "Advanced"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Enterprise': return 'text-red-400 border-red-500/30 bg-red-500/10';
      case 'Advanced': return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
      case 'Critical': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
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
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
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
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-blue-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/12 via-indigo-500/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-cyan-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
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
              <span className="text-blue-400 font-bold tracking-wide flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Web Application Development
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Enterprise-Grade{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Web Applications
            </span>
          </h1>
          
          <p className="text-slate-400 text-xl max-w-4xl leading-relaxed mx-auto">
            Building sophisticated web applications with complex business logic, real-time capabilities, 
            and enterprise-level architecture. From SPAs to microservices, we deliver scalable solutions 
            that power modern businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {webAppServices.map((service) => (
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
                      <div className="text-sm font-bold text-blue-400 mb-1">{service.stats}</div>
                      <div className={`text-xs px-2 py-1 rounded-full ${getComplexityColor(service.complexity)}`}>
                        {service.complexity}
                      </div>
                    </div>
                  </div>

                  {/* Title Section */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description - More Detailed */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Key Features - Expanded */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      Technical Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xs text-slate-400 group/item">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-blue-300 transition-colors" />
                          <span className="group-hover/item:text-slate-300 transition-colors leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                      Development Timeline
                    </h4>
                    <div className="text-xs text-slate-400">
                      {service.timeline} typical delivery
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Advanced Technology Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                Frontend Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Redux Toolkit", "React Query", "Framer Motion", "Tailwind CSS", "Webpack"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-green-400" />
                Backend & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Microservices"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-green-500/10 text-green-300 rounded-full border border-green-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                DevOps & Security
              </h3>
              <div className="flex flex-wrap gap-2">
                {["CI/CD", "OAuth 2.0", "JWT", "SSL/TLS", "Monitoring", "Logging", "Testing", "Compliance"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
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
            <Link href="/Contact" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-3">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies#case-studies-grid" className="px-8 py-4 border border-slate-600 text-slate-300 rounded-2xl hover:bg-slate-800/50 hover:text-white hover:border-blue-500/30 transition-all duration-300">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;