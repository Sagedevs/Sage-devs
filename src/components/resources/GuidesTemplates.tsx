"use client";
import React, { useState, ReactElement } from 'react';
import { Download, FileText, Target, Palette, TrendingUp, ShoppingCart, Smartphone, Code, Eye, Zap, Star, ArrowRight } from 'lucide-react';

const GuidesTemplates = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const resources = [
    {
      title: 'Advanced Web Design System',
      description: 'Complete design system with 200+ components, design tokens, accessibility guidelines, and responsive patterns. Includes Figma library and production-ready CSS framework.',
      type: 'Design System',
      category: 'Design',
      downloads: '12,847',
      rating: '4.9',
      fileSize: '45 MB',
      lastUpdated: '2 days ago',
      features: ['Design Tokens Library', 'Component Documentation', 'Figma Templates', 'CSS Framework'],
      downloadLink: '#',
      icon: Palette,
      bgPattern: 'design'
    },
    {
      title: 'Professional SEO Toolkit',
      description: 'Comprehensive SEO resources including keyword research templates, technical audit checklists, content optimization guides, and competitor analysis frameworks.',
      type: 'Marketing Suite',
      category: 'Marketing',
      downloads: '18,432',
      rating: '4.8',
      fileSize: '28 MB',
      lastUpdated: '1 week ago',
      features: ['Keyword Research Tools', 'Technical SEO Audit', 'Content Templates', 'Analytics Dashboards'],
      downloadLink: '#',
      icon: TrendingUp,
      bgPattern: 'marketing'
    },
    {
      title: 'Content Strategy Framework',
      description: 'Strategic content planning toolkit with editorial calendars, content audit templates, performance tracking sheets, and audience research methodologies.',
      type: 'Content Strategy',
      category: 'Content',
      downloads: '9,756',
      rating: '4.9',
      fileSize: '32 MB',
      lastUpdated: '3 days ago',
      features: ['Editorial Calendar', 'Content Audit Tools', 'Performance Metrics', 'Research Templates'],
      downloadLink: '#',
      icon: FileText,
      bgPattern: 'content'
    },
    {
      title: 'Brand Identity System',
      description: 'Complete brand development package with logo guidelines, color psychology frameworks, typography systems, and brand voice documentation templates.',
      type: 'Brand System',
      category: 'Branding',
      downloads: '7,203',
      rating: '4.8',
      fileSize: '52 MB',
      lastUpdated: '5 days ago',
      features: ['Logo Guidelines', 'Color Psychology', 'Typography System', 'Brand Voice Guide'],
      downloadLink: '#',
      icon: Target,
      bgPattern: 'brand'
    },
    {
      title: 'Social Media Management Kit',
      description: 'Professional social media toolkit with content calendars, engagement strategies, analytics templates, and cross-platform posting guidelines.',
      type: 'Social Strategy',
      category: 'Social Media',
      downloads: '15,389',
      rating: '4.9',
      fileSize: '38 MB',
      lastUpdated: '1 day ago',
      features: ['Content Calendar', 'Engagement Tools', 'Analytics Templates', 'Platform Guidelines'],
      downloadLink: '#',
      icon: Smartphone,
      bgPattern: 'social'
    },
    {
      title: 'E-commerce Optimization Suite',
      description: 'Conversion optimization resources with A/B testing templates, user journey mapping tools, checkout optimization guides, and revenue tracking systems.',
      type: 'CRO System',
      category: 'E-commerce',
      downloads: '11,164',
      rating: '4.8',
      fileSize: '41 MB',
      lastUpdated: '4 days ago',
      features: ['A/B Testing Kit', 'Journey Mapping', 'Checkout Optimization', 'Revenue Analytics'],
      downloadLink: '#',
      icon: ShoppingCart,
      bgPattern: 'ecommerce'
    }
  ];

  const filteredResources = resources;

  const getBackgroundPattern = (pattern: string): ReactElement => {
    const patterns = {
      design: (
        <svg key="design" className="absolute inset-0 w-full h-full opacity-3" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="2" fill="currentColor" />
          <circle cx="80" cy="40" r="1.5" fill="currentColor" />
          <circle cx="40" cy="80" r="1" fill="currentColor" />
          <path d="M10,10 Q50,30 90,10" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      ),
      marketing: (
        <svg key="marketing" className="absolute inset-0 w-full h-full opacity-3" viewBox="0 0 100 100">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <path d="M30,30 L70,50 L30,70 Z" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      ),
      content: (
        <svg key="content" className="absolute inset-0 w-full h-full opacity-3" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="8" fill="currentColor" fillOpacity="0.3" />
          <rect x="20" y="35" width="45" height="6" fill="currentColor" fillOpacity="0.3" />
          <rect x="20" y="48" width="55" height="6" fill="currentColor" fillOpacity="0.3" />
          <rect x="20" y="61" width="40" height="6" fill="currentColor" fillOpacity="0.3" />
        </svg>
      ),
      brand: (
        <svg key="brand" className="absolute inset-0 w-full h-full opacity-3" viewBox="0 0 100 100">
          <polygon points="50,20 80,70 20,70" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      ),
      social: (
        <svg key="social" className="absolute inset-0 w-full h-full opacity-3" viewBox="0 0 100 100">
          <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="70" cy="30" r="8" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="50" cy="70" r="8" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <path d="M30,30 L70,30 L50,70 Z" stroke="currentColor" strokeWidth="0.2" fill="none" />
        </svg>
      ),
      ecommerce: (
        <svg key="ecommerce" className="absolute inset-0 w-full h-full opacity-3" viewBox="0 0 100 100">
          <rect x="20" y="30" width="60" height="40" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="35" cy="80" r="5" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="65" cy="80" r="5" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      )
    } as const;
    
    return patterns[pattern as keyof typeof patterns] || patterns.design;
  };

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden px-4 sm:px-6 lg:px-[140px]">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/80" />
        
        {/* More subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(100, 116, 139)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* More subtle glow effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-800/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-950/30 border border-blue-800/20 rounded-full backdrop-blur-sm mb-4 sm:mb-6">
            <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-blue-300 text-xs sm:text-sm font-medium">Professional Resources</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Guides & Templates
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Professional-grade resources and templates to accelerate your workflow. 
            Each package includes detailed documentation and implementation guides.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {filteredResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className={`group relative bg-slate-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                  hoveredCard === index 
                    ? 'border-blue-600/30 shadow-xl shadow-blue-600/10' 
                    : 'border-slate-800/50 hover:border-slate-700/50'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 text-blue-500">
                  {getBackgroundPattern(resource.bgPattern)}
                </div>

                {/* Card Content */}
                <div className="relative p-4 sm:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-blue-600/10 border border-blue-600/20 rounded-lg">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      </div>
                      <div>
                        <span className="inline-block px-2 py-1 bg-blue-950/30 border border-blue-800/20 text-blue-300 text-xs font-medium rounded">
                          {resource.category}
                        </span>
                        <p className="text-slate-500 text-xs mt-1">{resource.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-400 mb-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-medium">{resource.rating}</span>
                      </div>
                      <p className="text-slate-500 text-xs">{resource.downloads}</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 sm:mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* File Info */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>{resource.fileSize}</span>
                    <span>Updated {resource.lastUpdated}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium">Includes</span>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      {resource.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          <span className="text-slate-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn text-sm sm:text-base"
                    onClick={() => window.open(resource.downloadLink, '_blank')}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resource</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              </div>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 lg:mt-16 text-center p-6 sm:p-8 bg-slate-900/30 border border-slate-800/50 rounded-xl sm:rounded-2xl backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/30 border border-blue-800/20 rounded-full mb-4">
            <Zap className="w-3 h-3 text-blue-400" />
            <span className="text-blue-300 text-sm">Stay Updated</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Get New Resources First
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm sm:text-base px-4">
            Subscribe to receive notifications when new templates and guides are released. 
            No spam, just valuable resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600/50 transition-colors text-sm sm:text-base"
            />
            <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidesTemplates;