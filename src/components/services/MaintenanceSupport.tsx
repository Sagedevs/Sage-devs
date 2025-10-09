"use client";
import React, { useState } from 'react';
import { Target, Lightbulb, BarChart, Globe, LineChart, Megaphone, FileText } from 'lucide-react';
import Link from "next/link";

const MaintenanceSupport = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const maintenanceServices = [
    {
      id: 1,
      icon: Target,
      title: "24/7 Technical Support",
      subtitle: "Always Here for You",
      description: "Round-the-clock technical support to ensure your systems run smoothly with minimal downtime and maximum efficiency.",
      features: ["24/7 helpdesk support", "Priority ticket handling", "Remote troubleshooting", "Incident management"],
      technologies: ["Zendesk", "ServiceNow", "Jira Service Desk", "Freshdesk"],
      stats: "99.9% Uptime",
      timeline: "Immediate Response",
      complexity: "Critical"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Proactive System Monitoring",
      subtitle: "Prevent Issues Before They Happen",
      description: "Continuous monitoring of your systems to detect and resolve potential issues before they impact your operations.",
      features: ["Real-time alerts", "Performance monitoring", "Resource utilization tracking", "Automated health checks"],
      technologies: ["Datadog", "New Relic", "Prometheus", "Grafana"],
      stats: "1000+ Systems Monitored",
      timeline: "24/7 Coverage",
      complexity: "Essential"
    },
    {
      id: 3,
      icon: Megaphone,
      title: "Security & Compliance",
      subtitle: "Protecting Your Assets",
      description: "Comprehensive security measures and compliance management to protect your systems and data from threats.",
      features: ["Vulnerability scanning", "Security patching", "Compliance audits", "Incident response"],
      technologies: ["Nessus", "Qualys", "Rapid7", "Tenable"],
      stats: "100% Compliance",
      timeline: "Ongoing",
      complexity: "Critical"
    },
    {
      id: 4,
      icon: BarChart,
      title: "Backup & Disaster Recovery",
      subtitle: "Your Safety Net",
      description: "Reliable backup solutions and disaster recovery planning to ensure business continuity in any situation.",
      features: ["Automated backups", "Disaster recovery planning", "Data encryption", "Regular recovery testing"],
      technologies: ["Veeam", "Acronis", "Datto", "Rubrik"],
      stats: "99.99% Recovery Rate",
      timeline: "24/7 Protection",
      complexity: "Essential"
    },
    {
      id: 5,
      icon: Globe,
      title: "Software Updates & Patching",
      subtitle: "Stay Current, Stay Secure",
      description: "Regular updates and patching to keep your software secure, stable, and performing at its best.",
      features: ["Patch management", "Version control", "Rollback capabilities", "Change management"],
      technologies: ["WSUS", "SCCM", "Ansible", "Puppet"],
      stats: "1000+ Systems Patched",
      timeline: "Monthly Cycles",
      complexity: "Standard"
    },
    {
      id: 6,
      icon: LineChart,
      title: "Performance Optimization",
      subtitle: "Peak Efficiency",
      description: "Continuous optimization of your systems to ensure they run at peak performance and efficiency.",
      features: ["Performance tuning", "Bottleneck identification", "Resource optimization", "Capacity planning"],
      technologies: ["Dynatrace", "AppDynamics", "SolarWinds", "New Relic"],
      stats: "50%+ Performance Gain",
      timeline: "Ongoing",
      complexity: "Advanced"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Critical': return 'text-red-400 border-red-500/30 bg-red-500/10';
      case 'Essential': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Standard': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Advanced': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-1050 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0 z-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse"
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
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-gradient-radial from-blue-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl opacity-70 animate-blob mix-blend-lighten" />
        <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-gradient-radial from-indigo-500/12 via-indigo-500/6 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000 mix-blend-lighten" />
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000 mix-blend-lighten" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.1] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-8 mx-auto">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-bold tracking-wide flex items-center gap-2">
                <Target className="w-4 h-4" />
                Maintenance & Support Services
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Keep Your Business{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Running Smoothly
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            Our comprehensive maintenance and support services ensure your systems are always available,
            secure, and performing at their best. Focus on your business while we handle the technical details.
          </p>
        </div>

        {/* Maintenance & Support Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {maintenanceServices.map((service) => (
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
                    <p className="text-blue-400 font-medium text-xs uppercase tracking-wide">
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
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our Maintenance & Support Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-blue-400" />
                Monitoring & Alerting
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Datadog", "New Relic", "Prometheus", "Grafana", "Zabbix"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                Security & Compliance
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Nessus", "Qualys", "Rapid7", "Tenable", "CrowdStrike"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <LineChart className="w-5 h-5 text-purple-400" />
                Backup & Recovery
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Veeam", "Acronis", "Datto", "Rubrik", "Commvault"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
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
            <Link href="/contact" className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Get Support Now
              <Target className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services#service-plans" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-blue-500/30 transition-all duration-300 text-base">
              View Service Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSupport;