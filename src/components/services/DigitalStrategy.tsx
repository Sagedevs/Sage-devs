"use client";
import React, { useState } from 'react';
import { Target, Lightbulb, BarChart, Globe, LineChart, Megaphone, FileText } from 'lucide-react';

const DigitalStrategy = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const digitalStrategyServices = [
    {
      id: 1,
      icon: Target,
      title: "Digital Market Analysis",
      subtitle: "Understanding the Landscape",
      description: "Comprehensive market research and competitive analysis to identify opportunities, threats, and optimal strategies for your digital presence.",
      features: ["Competitor benchmarking", "Target audience identification", "Market trend analysis", "SWOT analysis"],
      technologies: ["SEMrush", "Ahrefs", "SimilarWeb", "Google Trends"],
      stats: "80+ Analyses",
      timeline: "2-4 weeks",
      complexity: "Analysis"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Strategic Planning & Roadmapping",
      subtitle: "Charting Your Digital Course",
      description: "Developing tailored digital strategies and detailed roadmaps that align with your business objectives, ensuring a clear path to achieving your goals.",
      features: ["Goal setting & KPIs", "Channel strategy (SEO, SEM, Social)", "Content strategy & calendars", "Technology stack recommendations"],
      technologies: ["Asana", "Trello", "Jira", "Google Workspace"],
      stats: "60+ Strategies",
      timeline: "4-8 weeks",
      complexity: "Planning"
    },
    {
      id: 3,
      icon: Megaphone,
      title: "SEO & Content Marketing",
      subtitle: "Driving Organic Growth",
      description: "Optimizing your online presence through targeted SEO campaigns and engaging content marketing strategies to attract, convert, and retain customers.",
      features: ["Keyword research & analysis", "On-page & off-page SEO", "Content creation & optimization", "Link building & outreach"],
      technologies: ["Google Analytics", "Google Search Console", "WordPress SEO", "Mailchimp"],
      stats: "120+ Campaigns",
      timeline: "Ongoing",
      complexity: "Execution"
    },
    {
      id: 4,
      icon: BarChart,
      title: "Performance & Analytics",
      subtitle: "Measuring & Optimizing Impact",
      description: "Tracking key metrics, analyzing campaign performance, and providing actionable insights to continuously optimize your digital strategy for maximum ROI.",
      features: ["Data collection & reporting", "Conversion rate optimization (CRO)", "A/B testing & multivariate analysis", "Campaign performance analysis"],
      technologies: ["Google Data Studio", "Tableau", "Mixpanel", "Amplitude"],
      stats: "90+ Reports",
      timeline: "Ongoing",
      complexity: "Optimization"
    },
    {
      id: 5,
      icon: Globe,
      title: "Social Media Strategy",
      subtitle: "Engaging Your Audience",
      description: "Developing comprehensive social media strategies that build brand awareness, foster community engagement, and drive traffic and conversions.",
      features: ["Platform selection & content planning", "Community management", "Paid social campaigns", "Influencer marketing"],
      technologies: ["Buffer", "Hootsuite", "Sprout Social", "Meta Business Suite"],
      stats: "70+ Strategies",
      timeline: "4-8 weeks",
      complexity: "Execution"
    },
    {
      id: 6,
      icon: LineChart,
      title: "Conversion Rate Optimization (CRO)",
      subtitle: "Maximizing Your ROI",
      description: "Optimizing your website and landing pages to increase the percentage of visitors who complete a desired action, such as making a purchase or filling out a form.",
      features: ["A/B testing & heatmaps", "User flow analysis", "Form optimization", "Personalization strategies"],
      technologies: ["Optimizely", "VWO", "Hotjar", "Google Optimize"],
      stats: "50+ CRO Projects",
      timeline: "6-12 weeks",
      complexity: "Optimization"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Analysis': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Planning': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Execution': return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
      case 'Optimization': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
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
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-gradient-radial from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000 mix-blend-lighten" />
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
              <span className="text-green-400 font-bold tracking-wide flex items-center gap-2">
                <Target className="w-4 h-4" />
                Digital Strategy & Growth
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Unlock Your Business{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Full Digital Potential
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            We craft data-driven digital strategies that propel your business forward.
            From market analysis to SEO, content marketing, and performance optimization,
            we build robust plans for sustainable online growth.
          </p>
        </div>

        {/* Digital Strategy Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {digitalStrategyServices.map((service) => (
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
                      <div className="text-xs font-bold text-green-400 mb-1">{service.stats}</div>
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
                    <p className="text-green-400 font-medium text-xs uppercase tracking-wide">
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
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                      Technical Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xxs text-slate-400 group/item">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-green-300 transition-colors" />
                          <span className="group-hover/item:text-slate-300 transition-colors leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-2" />
                      Development Timeline
                    </h4>
                    <div className="text-xxs text-slate-400">
                      {service.timeline} typical delivery
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xxs bg-green-500/10 text-green-300 rounded-full border border-green-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
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
              Our Core Digital Strategy Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-green-400" />
                Market Research & Analysis
              </h3>
              <div className="flex flex-wrap gap-2">
                {["SEMrush", "Ahrefs", "Google Analytics", "Hotjar", "SimilarWeb"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-green-500/10 text-green-300 rounded-full border border-green-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-400" />
                SEO & Content Strategy
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Keyword Research", "Content Creation", "On-page SEO", "Off-page SEO", "Technical SEO"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-teal-500/10 text-teal-300 rounded-full border border-teal-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <LineChart className="w-5 h-5 text-emerald-400" />
                Performance & Analytics
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Google Analytics", "Google Search Console", "Data Studio", "Conversion Tracking"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20">
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
            <button className="group px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Develop Your Strategy
              <Target className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-green-500/30 transition-all duration-300 text-base">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalStrategy;