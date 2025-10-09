"use client";
import React, { useState } from 'react';
import { Cloud, Server, Shield, Activity, GitBranch, Terminal } from 'lucide-react';
import Link from "next/link";

const CloudDevOps = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cloudDevOpsServices = [
    {
      id: 1,
      icon: Cloud,
      title: "Cloud Infrastructure & Migration",
      subtitle: "Scalable & Secure Cloud Foundations",
      description: "Designing, deploying, and migrating robust cloud infrastructures on leading platforms like AWS, Azure, and Google Cloud for unparalleled scalability and reliability.",
      features: ["Cloud architecture design (AWS, Azure, GCP)", "On-premise to cloud migration", "Infrastructure as Code (IaC) with Terraform", "Cost optimization & resource management"],
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "CloudFormation"],
      stats: "100+ Infrastructures",
      timeline: "8-16 weeks",
      complexity: "Enterprise"
    },
    {
      id: 2,
      icon: Server,
      title: "Containerization & Orchestration",
      subtitle: "Efficient & Portable Deployments",
      description: "Implementing Docker and Kubernetes to containerize applications, ensuring consistent environments, simplified deployments, and automatic scaling.",
      features: ["Docker container development", "Kubernetes cluster management", "Container orchestration with Helm", "Microservices deployment & scaling"],
      technologies: ["Docker", "Kubernetes", "Helm", "EKS", "AKS", "GKE"],
      stats: "50+ Clusters",
      timeline: "6-12 weeks",
      complexity: "Advanced"
    },
    {
      id: 3,
      icon: GitBranch,
      title: "CI/CD Pipeline Implementation",
      subtitle: "Automated & Reliable Releases",
      description: "Building automated Continuous Integration and Continuous Delivery (CI/CD) pipelines to accelerate development cycles and ensure reliable, frequent software releases.",
      features: ["Automated build & testing", "Continuous deployment setup", "Version control integration (Git)", "Pipeline monitoring & optimization"],
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps", "CircleCI"],
      stats: "70+ Pipelines",
      timeline: "4-8 weeks",
      complexity: "Critical"
    },
    {
      id: 4,
      icon: Shield,
      title: "Cloud Security & Compliance",
      subtitle: "Robust Protection for Your Data",
      description: "Ensuring your cloud infrastructure and applications are secure and compliant with industry standards through comprehensive security audits, threat detection, and access management.",
      features: ["Identity & Access Management (IAM)", "Network security & WAF", "Vulnerability assessments & pen testing", "Compliance (GDPR, HIPAA, SOC2)"],
      technologies: ["Vault", "Okta", "Palo Alto", "Fortinet", "Cloudflare"],
      stats: "99.9% Secure",
      timeline: "Varies",
      complexity: "Mandatory"
    },
    {
      id: 5,
      icon: Activity,
      title: "Monitoring & Logging Solutions",
      subtitle: "Proactive Problem Detection",
      description: "Implementing advanced monitoring and logging tools to provide real-time visibility into application performance, infrastructure health, and security events.",
      features: ["Centralized logging (ELK, Splunk)", "Performance monitoring (Prometheus, Grafana)", "Alerting & incident management", "Dashboard creation & analytics"],
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Splunk", "Datadog"],
      stats: "80+ Deployments",
      timeline: "3-6 weeks",
      complexity: "Strategic"
    },
    {
      id: 6,
      icon: Terminal,
      title: "DevOps Consulting & Automation",
      subtitle: "Streamlining Your Development Workflow",
      description: "Providing expert guidance and hands-on implementation to optimize your development processes, automate tasks, and foster a collaborative DevOps culture within your team.",
      features: ["DevOps maturity assessment", "Workflow automation (scripting)", "Team training & best practices", "Custom toolchain integration"],
      technologies: ["Ansible", "Puppet", "Chef", "Bash/Python Scripting", "Jira"],
      stats: "30+ Consultations",
      timeline: "Flexible",
      complexity: "Comprehensive"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Enterprise': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Advanced': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Critical': return 'text-red-400 border-red-500/30 bg-red-500/10';
      case 'Mandatory': return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
      case 'Strategic': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'Comprehensive': return 'text-lime-400 border-lime-500/30 bg-lime-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0 z-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse"
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
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-gradient-radial from-green-500/15 via-green-500/8 to-transparent rounded-full blur-3xl opacity-70 animate-blob mix-blend-lighten" />
        <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-gradient-radial from-teal-500/12 via-teal-500/6 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000 mix-blend-lighten" />
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000 mix-blend-lighten" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.1] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
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
                <Cloud className="w-4 h-4" />
                Cloud & DevOps Services
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Empowering Your Digital Infrastructure with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Expert Cloud & DevOps Solutions
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            We provide comprehensive cloud and DevOps services to help your organization achieve scalability, reliability, and efficiency.
            From infrastructure design to security compliance, we ensure your digital assets are protected and perform optimally.
          </p>
        </div>

        {/* Cloud & DevOps Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {cloudDevOpsServices.map((service) => (
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
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
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
              Our Core Cloud & DevOps Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-blue-400" />
                Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "Google Cloud", "Terraform", "CloudFormation"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                Containers & Orchestration
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "Helm", "EKS", "AKS", "GKE"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-indigo-400" />
                CI/CD & Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps", "CircleCI"].map((tech) => (
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
            <Link href="/contact" className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Start Your Cloud & DevOps Project
              <Cloud className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies#case-studies-grid" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-blue-500/30 transition-all duration-300 text-base">
              View Cloud & DevOps Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOps;