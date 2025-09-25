"use client";
import React, { useState } from 'react';
import { Zap, TrendingUp, RefreshCcw, Bell, Lightbulb, Rocket, Cloud, Settings } from 'lucide-react';
import Link from "next/link";
const SaaSProductDev = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const saasServices = [
    {
      id: 1,
      icon: Lightbulb,
      title: "SaaS Ideation & MVP Development",
      subtitle: "From Concept to Launch",
      description: "We transform your innovative SaaS concepts into tangible minimum viable products (MVPs), focusing on core features and rapid iteration to validate market fit.",
      features: ["Market research & feasibility analysis", "Core feature identification & prioritization", "UI/UX prototyping for user flows", "Rapid development & iterative feedback"],
      technologies: ["Figma", "Next.js", "Node.js", "MongoDB", "Vercel"],
      stats: "40+ MVPs Launched",
      timeline: "8-16 weeks",
      complexity: "Rapid"
    },
    {
      id: 2,
      icon: Rocket,
      title: "Custom SaaS Platform Development",
      subtitle: "Tailored for Your Business Needs",
      description: "Building bespoke SaaS applications designed to meet your unique business requirements. Our platforms are scalable, secure, and integrate seamlessly with your existing ecosystem.",
      features: ["Scalable architecture design", "Robust backend development", "Intuitive frontend interfaces", "Third-party integrations (APIs, CRM, ERP)"],
      technologies: ["Node.js", "React/Vue", "Microservices", "AWS/Azure/GCP", "PostgreSQL/MongoDB"],
      stats: "60+ Platforms Built",
      timeline: "12-24 weeks",
      complexity: "Enterprise"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "SaaS Product Growth & Optimization",
      subtitle: "Driving User Engagement & Revenue",
      description: "Enhancing existing SaaS products through feature additions, performance tuning, and user experience improvements to drive growth, increase retention, and maximize revenue streams.",
      features: ["Feature ideation & implementation", "Performance & scalability audits", "A/B testing & conversion optimization", "User feedback integration & iteration"],
      technologies: ["Google Analytics", "Mixpanel", "Hotjar", "Optimizely", "Stripe"],
      stats: "50% Avg. Growth",
      timeline: "Ongoing",
      complexity: "Strategic"
    },
    {
      id: 4,
      icon: Bell,
      title: "SaaS Integration & API Development",
      subtitle: "Seamless Connectivity for Your Ecosystem",
      description: "Developing robust APIs and integrating your SaaS platform with other essential business tools and services, creating a cohesive and automated digital ecosystem.",
      features: ["Custom API design & development", "Third-party API integrations (CRM, ERP, payment gateways)", "Data synchronization & migration", "Webhook implementation & management"],
      technologies: ["REST/GraphQL", "OAuth", "JWT", "Stripe Connect", "Zapier"],
      stats: "80+ Integrations",
      timeline: "6-12 weeks",
      complexity: "Advanced"
    },
    {
      id: 5,
      icon: RefreshCcw,
      title: "SaaS Maintenance & Support",
      subtitle: "Ensuring Continuous Operation & Security",
      description: "Providing ongoing maintenance, security updates, and technical support to ensure your SaaS platform remains secure, performant, and up-to-date with the latest technologies.",
      features: ["24/7 monitoring & alerting", "Regular security audits & patches", "Performance optimization & bug fixes", "Cloud infrastructure management"],
      technologies: ["New Relic", "Datadog", "Sentry", "AWS CloudWatch", "PagerDuty"],
      stats: "99.9% Uptime",
      timeline: "Ongoing",
      complexity: "Critical"
    },
    {
      id: 6,
      icon: Cloud,
      title: "SaaS Deployment & DevOps",
      subtitle: "Automated & Reliable Release Cycles",
      description: "Implementing robust DevOps practices and automated deployment pipelines to ensure rapid, reliable, and secure delivery of your SaaS application updates and features.",
      features: ["CI/CD pipeline setup (GitLab CI, GitHub Actions)", "Containerization with Docker & Kubernetes", "Cloud infrastructure automation (Terraform)", "Monitoring & logging integration"],
      technologies: ["Docker", "Kubernetes", "Terraform", "AWS/Azure/GCP DevOps", "Prometheus/Grafana"],
      stats: "100% Automation",
      timeline: "8-16 weeks",
      complexity: "Comprehensive"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Strategic': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Rapid': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Enterprise': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'Critical': return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
      case 'Mandatory': return 'text-red-400 border-red-500/30 bg-red-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (3 + Math.random() * 3) + 's'
              }}
            />
          ))}
        </div>

        {/* Gradient Background Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl opacity-70 animate-blob mix-blend-lighten" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-pink-500/12 via-pink-500/6 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000 mix-blend-lighten" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000 mix-blend-lighten" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.12] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
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
                <Lightbulb className="w-4 h-4" />
                SaaS & Product Development
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Cutting-Edge SaaS{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              & Product Solutions
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            We specialize in bringing innovative software products to life, from initial concept and strategy 
            to development, launch, and continuous iteration. Partner with us to build scalable, 
            user-centric SaaS platforms and digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {saasServices.map((service) => (
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
                      <div className="text-xs font-bold text-blue-400 mb-1">{service.stats}</div>
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
                    <p className="text-purple-300 font-medium text-xs uppercase tracking-wide">
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
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      Technical Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xxs text-slate-400 group/item">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-blue-300 transition-colors" />
                          <span className="group-hover/item:text-slate-300 transition-colors leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                      Development Timeline
                    </h4>
                    <div className="text-xxs text-slate-400">
                      {service.timeline} typical delivery
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 font-medium"
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
              Our Core SaaS Tech Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Frontend Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "GraphQL (Apollo/Relay)", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-400" />
                Backend & Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python (Django/Flask)", "Ruby on Rails", "Go", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-indigo-400" />
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD (GitLab/GitHub Actions)", "Terraform", "Monitoring (Prometheus/Grafana)"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
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
            <Link href="/Contact" className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Scale Your SaaS Idea
              <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies#case-studies-grid" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-blue-500/30 transition-all duration-300 text-base">
              Explore Our SaaS Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaaSProductDev;