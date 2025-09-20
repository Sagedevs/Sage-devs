"use client";

import React, { useState } from 'react';

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
    const basePrices = {
      'landing-page': 800,
      'wordpress-site': 2000,
      'shopify-store': 3500,
      'business-website': 5000,
      'web-application': 15000,
      'enterprise-website': 50000,
      'enterprise-platform': 150000,
      'saas-application': 250000,
      'mobile-ecosystem': 200000,
      'digital-transformation': 500000
    };

    const basePrice = basePrices[projectType] || 0;
    const isSimpleProject = ['landing-page', 'wordpress-site', 'shopify-store', 'business-website'].includes(projectType);
    const quantityMultiplier = isSimpleProject ? quantity : 1;
    const complexityMultiplier = isSimpleProject ? (0.8 + (complexity / 25)) : (0.5 + (complexity / 10));
    const featureCost = isSimpleProject ? features.length * 500 : features.length * 25000;
    
    const teamMultipliers = { 
      freelancer: 0.7, 
      small: 0.8, 
      medium: 1.0, 
      large: 1.3, 
      enterprise: 1.6 
    };
    
    let timelineMultiplier = 1;
    if (timeline === '1-2') timelineMultiplier = 1.6;
    else if (timeline === '2-4') timelineMultiplier = 1.3;
    else if (timeline === '4-8') timelineMultiplier = 1.0;
    else if (timeline === '3-6') timelineMultiplier = 1.4;
    else if (timeline === '6-12') timelineMultiplier = 1.0;
    else if (timeline === '12-18') timelineMultiplier = 0.9;
    
    return Math.round((basePrice + featureCost) * complexityMultiplier * teamMultipliers[teamSize] * timelineMultiplier * quantityMultiplier);
  };

  const toggleFeature = (feature: Feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter(f => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  const isSimpleProject = ['landing-page', 'wordpress-site', 'shopify-store', 'business-website'].includes(projectType);

  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,69,196,0.08)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Simple Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Project Calculator
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Get accurate estimates from <span className="text-blue-400 font-semibold">$800</span> to <span className="text-cyan-400 font-semibold">$500K+</span>
            </p>
          </div>

          {/* Main Calculator */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
            <div className="lg:flex">
              {/* Configuration */}
              <div className="p-8 lg:p-10 lg:w-3/5 border-r border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-8">Configure Your Project</h2>
                
                <div className="space-y-8">
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-4">Project Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { type: 'landing-page', name: 'Landing Page', price: '$800+' },
                        { type: 'wordpress-site', name: 'WordPress Site', price: '$2K+' },
                        { type: 'shopify-store', name: 'Shopify Store', price: '$3.5K+' },
                        { type: 'business-website', name: 'Business Website', price: '$5K+' },
                        { type: 'web-application', name: 'Web Application', price: '$15K+' },
                        { type: 'enterprise-website', name: 'Enterprise Website', price: '$50K+' },
                        { type: 'enterprise-platform', name: 'Enterprise Platform', price: '$150K+' },
                        { type: 'saas-application', name: 'SaaS Application', price: '$250K+' }
                      ].map((project) => (
                        <button
                          key={project.type}
                          onClick={() => setProjectType(project.type as ProjectType)}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            projectType === project.type
                              ? 'border-blue-500 bg-blue-500/10 text-white'
                              : 'border-slate-600 hover:border-slate-500 text-slate-300'
                          }`}
                        >
                          <div className="font-medium">{project.name}</div>
                          <div className="text-sm opacity-75">{project.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity for Simple Projects */}
                  {isSimpleProject && (
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-4">
                        Quantity: {quantity}
                      </label>
                      <div className="flex items-center space-x-4 bg-slate-800 rounded-lg p-4">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors"
                        >
                          −
                        </button>
                        <span className="text-2xl font-bold text-white min-w-[2rem] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Complexity */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-4">
                      Complexity: {complexity}/10
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={complexity} 
                      onChange={(e) => setComplexity(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>Basic</span>
                      <span>Advanced</span>
                    </div>
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-4">Team Size</label>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                      {[
                        { value: 'freelancer', label: 'Solo' },
                        { value: 'small', label: 'Small' },
                        { value: 'medium', label: 'Medium' },
                        { value: 'large', label: 'Large' },
                        { value: 'enterprise', label: 'Enterprise' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTeamSize(option.value as TeamSize)}
                          className={`p-3 text-sm rounded-lg border transition-all ${
                            teamSize === option.value
                              ? 'border-blue-500 bg-blue-500/10 text-white'
                              : 'border-slate-600 hover:border-slate-500 text-slate-300'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-4">Timeline</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(isSimpleProject ? [
                        { value: '4-8', label: '4-8 weeks', desc: 'Standard' },
                        { value: '2-4', label: '2-4 weeks', desc: '+30%' },
                        { value: '1-2', label: '1-2 weeks', desc: '+60%' }
                      ] : [
                        { value: '12-18', label: '12-18 months', desc: 'Standard' },
                        { value: '6-12', label: '6-12 months', desc: 'Standard' },
                        { value: '3-6', label: '3-6 months', desc: '+40%' }
                      ]).map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTimeline(option.value as Timeline)}
                          className={`p-3 text-center rounded-lg border transition-all ${
                            timeline === option.value
                              ? 'border-blue-500 bg-blue-500/10 text-white'
                              : 'border-slate-600 hover:border-slate-500 text-slate-300'
                          }`}
                        >
                          <div className="font-medium text-sm">{option.label}</div>
                          <div className="text-xs opacity-75">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-4">Features</label>
                    <div className="grid grid-cols-2 gap-3">
                      {(isSimpleProject ? [
                        { key: 'responsive-design', name: 'Responsive Design' },
                        { key: 'seo-optimization', name: 'SEO Optimization' },
                        { key: 'cms-integration', name: 'CMS Integration' },
                        { key: 'ecommerce-features', name: 'E-commerce Features' },
                        { key: 'user-authentication', name: 'User Authentication' },
                        { key: 'payment-gateway', name: 'Payment Gateway' }
                      ] : [
                        { key: 'cloud-infrastructure', name: 'Cloud Infrastructure' },
                        { key: 'advanced-analytics', name: 'Advanced Analytics' },
                        { key: 'ai-integration', name: 'AI Integration' },
                        { key: 'multi-platform', name: 'Multi-Platform' },
                        { key: 'enterprise-security', name: 'Enterprise Security' },
                        { key: 'custom-integrations', name: 'Custom Integrations' }
                      ]).map((feature) => {
                        const isSelected = features.includes(feature.key as Feature);
                        return (
                          <button
                            key={feature.key}
                            onClick={() => toggleFeature(feature.key as Feature)}
                            className={`p-3 text-sm text-left rounded-lg border transition-all ${
                              isSelected
                                ? 'border-green-500 bg-green-500/10 text-white'
                                : 'border-slate-600 hover:border-slate-500 text-slate-300'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              {feature.name}
                              {isSelected && <span className="text-green-400">✓</span>}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="p-8 lg:p-10 lg:w-2/5 bg-slate-800/50">
                <h3 className="text-2xl font-bold text-white mb-8">Estimate</h3>
                
                {/* Price Display */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-blue-400 mb-2">
                    ${calculateEstimate().toLocaleString()}
                  </div>
                  <div className="text-slate-400">
                    {timeline} {isSimpleProject ? 'week' : 'month'} delivery
                    {quantity > 1 ? ` • ${quantity} projects` : ''}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-8 bg-slate-900/50 rounded-lg p-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Base Price {quantity > 1 ? `(${quantity}x)` : ''}</span>
                    <span className="text-white font-medium">
                      ${(() => {
                        const basePrices = {
                          'landing-page': 800, 'wordpress-site': 2000, 'shopify-store': 3500,
                          'business-website': 5000, 'web-application': 15000, 'enterprise-website': 50000,
                          'enterprise-platform': 150000, 'saas-application': 250000, 'mobile-ecosystem': 200000,
                          'digital-transformation': 500000
                        };
                        const base = basePrices[projectType] || 0;
                        return (isSimpleProject ? base * quantity : base).toLocaleString();
                      })()}
                    </span>
                  </div>
                  
                  {features.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Features ({features.length})</span>
                      <span className="text-white font-medium">
                        +${((isSimpleProject ? features.length * 500 * quantity : features.length * 25000)).toLocaleString()}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Complexity × Team × Timeline</span>
                    <span className="text-white font-medium">
                      {(isSimpleProject ? (0.8 + (complexity / 25)) : (0.5 + (complexity / 10))).toFixed(1)}x
                    </span>
                  </div>
                  
                  <div className="border-t border-slate-700 pt-3">
                    <div className="flex justify-between font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-blue-400 text-lg">${calculateEstimate().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg transition-colors">
                    {isSimpleProject ? 'Start Project' : 'Request Proposal'}
                  </button>
                  <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Get Free Consultation
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    No hidden fees • Free revisions • Money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid #1E40AF;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid #1E40AF;
        }
      `}</style>
    </div>
  );
};

export default ProjectCalculator;