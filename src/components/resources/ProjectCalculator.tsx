"use client";

import React, { useState } from 'react';
import Link from 'next/link';

type ProjectType = 'wordpress-site' | 'shopify-store' | 'landing-page' | 'business-website' | 'web-application' | 'enterprise-website' | 'enterprise-platform' | 'saas-application' | 'mobile-ecosystem' | 'digital-transformation';
type Feature = 'responsive-design' | 'seo-optimization' | 'ecommerce-features' | 'cms-integration' | 'user-authentication' | 'payment-gateway' | 'cloud-infrastructure' | 'advanced-analytics' | 'ai-integration' | 'multi-platform' | 'enterprise-security' | 'custom-integrations';
type Timeline = '1-2' | '2-4' | '4-8' | '6-12' | '3-6' | '12-18';
type TeamSize = 'freelancer' | 'small' | 'medium' | 'large' | 'enterprise';

const ProjectCalculator = () => {
  const [projectType, setProjectType] = useState<ProjectType>('business-website');
  const [complexity, setComplexity] = useState(5);
  const [features, setFeatures] = useState<Feature[]>(['responsive-design', 'seo-optimization']);
  const [timeline, setTimeline] = useState<Timeline>('4-8');
  const [teamSize, setTeamSize] = useState<TeamSize>('small');
  const [quantity, setQuantity] = useState(1);

  const calculateEstimate = () => {
    // Even more affordable market prices
    const basePrices = {
      'landing-page': 299,
      'wordpress-site': 799,
      'shopify-store': 1299,
      'business-website': 1799,
      'web-application': 4999,
      'enterprise-website': 8999,
      'enterprise-platform': 24999,
      'saas-application': 19999,
      'mobile-ecosystem': 14999,
      'digital-transformation': 39999
    };

    const basePrice = basePrices[projectType] || 0;
    const isSimpleProject = ['landing-page', 'wordpress-site', 'shopify-store', 'business-website'].includes(projectType);
    
    const quantityMultiplier = isSimpleProject ? quantity : 1;
    const complexityMultiplier = 0.9 + (complexity / 20);
    const featureCost = isSimpleProject ? features.length * 99 : features.length * 1499;
    
    const teamMultipliers = { 
      freelancer: 0.8, 
      small: 0.9, 
      medium: 1.0, 
      large: 1.15, 
      enterprise: 1.3 
    };
    
    let timelineMultiplier = 1;
    if (timeline === '1-2') timelineMultiplier = 1.25;
    else if (timeline === '2-4') timelineMultiplier = 1.1;
    else if (timeline === '4-8') timelineMultiplier = 1.0;
    else if (timeline === '3-6') timelineMultiplier = 1.15;
    else if (timeline === '6-12') timelineMultiplier = 1.0;
    else if (timeline === '12-18') timelineMultiplier = 0.9;
    
    const total = Math.round(
      (basePrice * quantityMultiplier + featureCost) * 
      complexityMultiplier * 
      teamMultipliers[teamSize] * 
      timelineMultiplier
    );

    return Math.max(total, basePrice);
  };

  const toggleFeature = (feature: Feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter(f => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  const isSimpleProject = ['landing-page', 'wordpress-site', 'shopify-store', 'business-website'].includes(projectType);

  const getProjectDescription = (type: ProjectType) => {
    const descriptions = {
      'landing-page': 'Single page focused on conversions',
      'wordpress-site': 'Custom WordPress with admin panel',
      'shopify-store': 'E-commerce store with products',
      'business-website': 'Multi-page corporate website',
      'web-application': 'Custom web app with functionality',
      'enterprise-website': 'Large-scale corporate solution',
      'enterprise-platform': 'Complex business platform',
      'saas-application': 'Software as a Service product',
      'mobile-ecosystem': 'Mobile app with backend',
      'digital-transformation': 'Complete business transformation'
    };
    return descriptions[type];
  };

  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,69,196,0.1)_0%,transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Enhanced Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 font-medium text-sm md:text-base">INSTANT QUOTES</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              Project 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Calculator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
              Get realistic estimates from <span className="text-green-400 font-semibold">$299</span> to <span className="text-cyan-400 font-semibold">$40K</span>. 
              <span className="block text-slate-400 text-base md:text-lg mt-2">Transparent pricing, no surprises</span>
            </p>
          </div>

          {/* Enhanced Calculator Card */}
          <div className="bg-slate-900/60 backdrop-blur-lg rounded-2xl md:rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="lg:flex">
              {/* Configuration Side */}
              <div className="p-6 md:p-8 lg:p-10 lg:w-3/5 border-b lg:border-b-0 lg:border-r border-slate-700/50">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">Configure Your Project</h2>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  {/* Project Type - Enhanced */}
                  <div>
                    <label className="block text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                      Project Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                      {[
                        { type: 'landing-page', name: 'Landing Page', price: '$299', popular: true },
                        { type: 'wordpress-site', name: 'WordPress Site', price: '$799' },
                        { type: 'shopify-store', name: 'Shopify Store', price: '$1,299' },
                        { type: 'business-website', name: 'Business Website', price: '$1,799', popular: true },
                        { type: 'web-application', name: 'Web Application', price: '$4,999' },
                        { type: 'enterprise-website', name: 'Enterprise Website', price: '$8,999' },
                        { type: 'saas-application', name: 'SaaS Application', price: '$19,999' },
                        { type: 'enterprise-platform', name: 'Enterprise Platform', price: '$24,999' }
                      ].map((project) => (
                        <button
                          key={project.type}
                          onClick={() => setProjectType(project.type as ProjectType)}
                          className={`p-3 md:p-4 rounded-lg md:rounded-xl border text-left transition-all duration-300 group relative overflow-hidden ${
                            projectType === project.type
                              ? 'border-blue-500 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20'
                              : 'border-slate-600 hover:border-slate-500 text-slate-300 hover:bg-slate-800/50'
                          }`}
                        >
                          {project.popular && (
                            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                              Popular
                            </div>
                          )}
                          <div className="flex justify-between items-start mb-1 md:mb-2">
                            <div className="font-semibold text-white text-sm md:text-base group-hover:text-blue-300 transition-colors">
                              {project.name}
                            </div>
                            <div className="text-blue-400 font-bold text-sm md:text-base">{project.price}</div>
                          </div>
                          <div className="text-xs text-slate-400">
                            {getProjectDescription(project.type as ProjectType)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity for Simple Projects */}
                  {isSimpleProject && (
                    <div className="bg-slate-800/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
                      <label className="block text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"/>
                        </svg>
                        Quantity: {quantity} {quantity === 1 ? 'project' : 'projects'}
                      </label>
                      <div className="flex items-center justify-between bg-slate-800/50 rounded-lg md:rounded-xl p-3 md:p-4">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 hover:bg-slate-600 text-white rounded-lg md:rounded-xl font-bold text-lg md:text-xl transition-all duration-200 hover:scale-105"
                        >
                          −
                        </button>
                        <span className="text-2xl md:text-3xl font-bold text-white mx-3 md:mx-4 min-w-[2rem] md:min-w-[3rem] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg md:rounded-xl font-bold text-lg md:text-xl transition-all duration-200 hover:scale-105"
                        >
                          +
                        </button>
                      </div>
                      {quantity > 1 && (
                        <div className="text-green-400 text-xs md:text-sm mt-2 md:mt-3 text-center">
                          💰 Bulk discount applied
                        </div>
                      )}
                    </div>
                  )}

                  {/* Complexity Slider - Enhanced */}
                  <div className="bg-slate-800/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
                    <label className="block text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                      </svg>
                      Complexity Level: {complexity}/10
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={complexity} 
                      onChange={(e) => setComplexity(parseInt(e.target.value))}
                      className="w-full h-2 md:h-3 bg-slate-700 rounded-xl md:rounded-2xl appearance-none cursor-pointer slider-thumb"
                    />
                    <div className="flex justify-between text-xs md:text-sm text-slate-400 mt-2 md:mt-3">
                      <span>Simple</span>
                      <span className={`font-semibold ${
                        complexity <= 3 ? 'text-green-400' : 
                        complexity <= 7 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {complexity <= 3 ? 'Basic' : complexity <= 7 ? 'Standard' : 'Advanced'}
                      </span>
                      <span>Complex</span>
                    </div>
                  </div>

                  {/* Team Size - Enhanced */}
                  <div>
                    <label className="block text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                      Team Size
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {[
                        { value: 'freelancer', label: 'Solo', desc: '-20%' },
                        { value: 'small', label: 'Small', desc: '-10%' },
                        { value: 'medium', label: 'Medium', desc: 'Standard' },
                        { value: 'large', label: 'Large', desc: '+15%' },
                        { value: 'enterprise', label: 'Enterprise', desc: '+30%' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTeamSize(option.value as TeamSize)}
                          className={`p-2 md:p-3 text-center rounded-lg md:rounded-xl border transition-all duration-300 ${
                            teamSize === option.value
                              ? 'border-blue-500 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20'
                              : 'border-slate-600 hover:border-slate-500 text-slate-300 hover:bg-slate-800/50'
                          }`}
                        >
                          <div className="font-semibold text-xs md:text-sm">{option.label}</div>
                          <div className="text-xs opacity-75 mt-0.5">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline - Enhanced */}
                  <div>
                    <label className="block text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(isSimpleProject ? [
                        { value: '4-8', label: '4-8 wks', desc: 'Standard', icon: '🐢' },
                        { value: '2-4', label: '2-4 wks', desc: '+10%', icon: '🚶' },
                        { value: '1-2', label: '1-2 wks', desc: '+25%', icon: '🚀' }
                      ] : [
                        { value: '12-18', label: '12-18 mo', desc: 'Standard', icon: '🐢' },
                        { value: '6-12', label: '6-12 mo', desc: 'Standard', icon: '🚶' },
                        { value: '3-6', label: '3-6 mo', desc: '+15%', icon: '🚀' }
                      ]).map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTimeline(option.value as Timeline)}
                          className={`p-2 md:p-3 text-center rounded-lg md:rounded-xl border transition-all duration-300 ${
                            timeline === option.value
                              ? 'border-blue-500 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20'
                              : 'border-slate-600 hover:border-slate-500 text-slate-300 hover:bg-slate-800/50'
                          }`}
                        >
                          <div className="text-base md:text-lg mb-0.5 md:mb-1">{option.icon}</div>
                          <div className="font-semibold text-xs md:text-sm">{option.label}</div>
                          <div className="text-xs opacity-75">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features - Enhanced */}
                  <div>
                    <label className="block text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                      </svg>
                      Features ({features.length})
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(isSimpleProject ? [
                        { key: 'responsive-design', name: '📱 Responsive', price: '+$99' },
                        { key: 'seo-optimization', name: '🔍 SEO Ready', price: '+$99' },
                        { key: 'cms-integration', name: '⚙️ CMS', price: '+$99' },
                        { key: 'ecommerce-features', name: '🛒 E-commerce', price: '+$99' },
                        { key: 'user-authentication', name: '🔐 Login System', price: '+$99' },
                        { key: 'payment-gateway', name: '💳 Payments', price: '+$99' }
                      ] : [
                        { key: 'cloud-infrastructure', name: '☁️ Cloud Setup', price: '+$1,499' },
                        { key: 'advanced-analytics', name: '📊 Analytics', price: '+$1,499' },
                        { key: 'ai-integration', name: '🤖 AI Features', price: '+$1,499' },
                        { key: 'multi-platform', name: '📱 Multi-Platform', price: '+$1,499' },
                        { key: 'enterprise-security', name: '🛡️ Security', price: '+$1,499' },
                        { key: 'custom-integrations', name: '🔗 Integrations', price: '+$1,499' }
                      ]).map((feature) => {
                        const isSelected = features.includes(feature.key as Feature);
                        return (
                          <button
                            key={feature.key}
                            onClick={() => toggleFeature(feature.key as Feature)}
                            className={`p-3 md:p-4 text-left rounded-lg md:rounded-xl border transition-all duration-300 group ${
                              isSelected
                                ? 'border-green-500 bg-green-500/20 text-white shadow-lg shadow-green-500/20'
                                : 'border-slate-600 hover:border-slate-500 text-slate-300 hover:bg-slate-800/50'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sm md:text-base">{feature.name}</span>
                              <div className={`text-xs md:text-sm font-semibold ${
                                isSelected ? 'text-green-400' : 'text-blue-400'
                              }`}>
                                {feature.price}
                              </div>
                            </div>
                            {isSelected && (
                              <div className="text-green-400 text-xs mt-1 flex items-center gap-1">
                                <span>✓ Selected</span>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Pricing Side */}
              <div className="p-6 md:p-8 lg:p-10 lg:w-2/5 bg-gradient-to-b from-slate-800/50 to-slate-900/70">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Your Estimate</h3>
                </div>
                
                {/* Price Display */}
                <div className="text-center mb-6 md:mb-8 p-4 md:p-6 bg-slate-800/30 rounded-xl md:rounded-2xl border border-slate-700/50">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-1 md:mb-2">
                    ${calculateEstimate().toLocaleString()}
                  </div>
                  <div className="text-slate-300 text-base md:text-lg">
                    {timeline} {isSimpleProject ? 'week' : 'month'} delivery
                  </div>
                  {quantity > 1 && (
                    <div className="text-blue-400 text-xs md:text-sm mt-1 md:mt-2">
                      {quantity} projects • ${Math.round(calculateEstimate() / quantity).toLocaleString()} each
                    </div>
                  )}
                </div>

                {/* Enhanced Price Breakdown */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 bg-slate-900/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
                  <h4 className="font-semibold text-white mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"/>
                    </svg>
                    Price Breakdown
                  </h4>
                  
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-slate-400">Base Project</span>
                      <span className="text-white font-medium">
                        ${(() => {
                          const basePrices = {
                            'landing-page': 299, 'wordpress-site': 799, 'shopify-store': 1299,
                            'business-website': 1799, 'web-application': 4999, 'enterprise-website': 8999,
                            'enterprise-platform': 24999, 'saas-application': 19999, 'mobile-ecosystem': 14999,
                            'digital-transformation': 39999
                          };
                          const base = basePrices[projectType] || 0;
                          return (isSimpleProject ? base * quantity : base).toLocaleString();
                        })()}
                      </span>
                    </div>
                    
                    {features.length > 0 && (
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="text-slate-400">Features ({features.length})</span>
                        <span className="text-green-400 font-medium">
                          +${((isSimpleProject ? features.length * 99 * quantity : features.length * 1499)).toLocaleString()}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-slate-400">Complexity</span>
                      <span className="text-yellow-400 font-medium">
                        {(0.9 + (complexity / 20)).toFixed(1)}x
                      </span>
                    </div>

                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-slate-400">Team & Timeline</span>
                      <span className="text-blue-400 font-medium">
                        {(() => {
                          const teamMultipliers = { freelancer: 0.8, small: 0.9, medium: 1.0, large: 1.15, enterprise: 1.3 };
                          let timelineMultiplier = 1;
                          if (timeline === '1-2') timelineMultiplier = 1.25;
                          else if (timeline === '2-4') timelineMultiplier = 1.1;
                          else if (timeline === '4-8') timelineMultiplier = 1.0;
                          else if (timeline === '3-6') timelineMultiplier = 1.15;
                          else if (timeline === '6-12') timelineMultiplier = 1.0;
                          else if (timeline === '12-18') timelineMultiplier = 0.9;
                          
                          return (teamMultipliers[teamSize] * timelineMultiplier).toFixed(1) + 'x';
                        })()}
                      </span>
                    </div>
                    
                    <div className="border-t border-slate-700 pt-2 md:pt-3">
                      <div className="flex justify-between items-center font-bold">
                        <span className="text-white text-base md:text-lg">Total Estimate</span>
                        <span className="text-green-400 text-lg md:text-xl">${calculateEstimate().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Action Buttons */}
                <div className="space-y-3 md:space-y-4">
                  <Link href="/contact#contact-form">
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-0.5 md:hover:-translate-y-1">
                      <div className="flex items-center justify-center gap-2 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {isSimpleProject ? 'Start Project Today' : 'Get Detailed Proposal'}
                      </div>
                    </button>
                  </Link>
                  
                  <a href="tel:+923259684493">
                    <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2.5 md:py-3 px-6 rounded-lg md:rounded-xl transition-all duration-300 border border-slate-600 hover:border-slate-500 flex items-center justify-center gap-2 text-sm md:text-base">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      Free Consultation: +92 325 9684493
                    </button>
                  </a>
                  
                  <div className="text-center space-y-1 md:space-y-2">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        No hidden fees
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Free revisions
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        Money-back guarantee
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Prices include design, development, and 30 days support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-slate-700/30">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">Fast Delivery</h4>
                <p className="text-slate-400 text-xs md:text-sm">Projects completed 30% faster than industry average</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">Quality Guaranteed</h4>
                <p className="text-slate-400 text-xs md:text-sm">98% client satisfaction rate with ongoing support</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">Flexible Payments</h4>
                <p className="text-slate-400 text-xs md:text-sm">50% upfront, 50% on completion. Monthly plans available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 3px solid #1E40AF;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          transition: all 0.2s ease;
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(59, 130, 246, 0.6);
        }
        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 3px solid #1E40AF;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </div>
  );
};

export default ProjectCalculator;