"use client";

import React, { useState, useEffect } from 'react';

type ProjectType = 'wordpress-site' | 'shopify-store' | 'landing-page' | 'business-website' | 'web-application' | 'enterprise-website' | 'enterprise-platform' | 'saas-application' | 'mobile-ecosystem' | 'digital-transformation';
type Feature = 'responsive-design' | 'seo-optimization' | 'ecommerce-features' | 'cms-integration' | 'user-authentication' | 'payment-gateway' | 'cloud-infrastructure' | 'advanced-analytics' | 'ai-integration' | 'multi-platform' | 'enterprise-security' | 'custom-integrations' | 'scalable-architecture' | 'compliance-suite';
type Timeline = '1-2' | '2-4' | '4-8' | '6-12' | '3-6' | '12-18';
type TeamSize = 'freelancer' | 'small' | 'medium' | 'large' | 'enterprise';

const EnterpriseProjectCalculator = () => {
  const [projectType, setProjectType] = useState<ProjectType>('business-website');
  const [complexity, setComplexity] = useState(5);
  const [features, setFeatures] = useState<Feature[]>(['responsive-design', 'seo-optimization']);
  const [timeline, setTimeline] = useState<Timeline>('4-8');
  const [teamSize, setTeamSize] = useState<TeamSize>('small');
  const [quantity, setQuantity] = useState(1);
  const [animatedPrice, setAnimatedPrice] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const targetPrice = calculateEstimate();
    const duration = 800;
    const steps = 60;
    const stepValue = (targetPrice - animatedPrice) / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setAnimatedPrice(prev => {
        const newPrice = prev + stepValue;
        if (currentStep >= steps) {
          clearInterval(timer);
          return targetPrice;
        }
        return newPrice;
      });
    }, duration / steps);

    return () => clearInterval(timer);
  }, [projectType, complexity, features, timeline, teamSize, quantity]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleFeature = (feature: Feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter(f => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  const isSimpleProject = ['landing-page', 'wordpress-site', 'shopify-store', 'business-website'].includes(projectType);

  const projectIcons = {
    'landing-page': '🚀',
    'wordpress-site': '📝',
    'shopify-store': '🛒',
    'business-website': '🏢',
    'web-application': '💻',
    'enterprise-website': '🏛️',
    'enterprise-platform': '🌐',
    'saas-application': '☁️',
    'mobile-ecosystem': '📱',
    'digital-transformation': '⚡'
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Ultra Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>
        
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/30 via-transparent to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-60 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-slate-900/20"
          style={{ 
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4 max-w-8xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block text-6xl animate-bounce">{projectIcons[projectType]}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-cyan-400 mb-6 animate-pulse">
              PROJECT CALCULATOR
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From <span className="text-blue-400 font-bold">$800 WordPress sites</span> to <span className="text-cyan-400 font-bold">$500k+ Digital Transformations</span>
              <br />
              <span className="text-lg text-slate-400">Get instant, accurate estimates for any project size</span>
            </p>
            
            <div className="flex justify-center space-x-12 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">99%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
            </div>
          </div>

          {/* Main Calculator */}
          <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-black/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
            <div className="lg:flex">
              {/* Configuration Panel */}
              <div className="p-8 lg:p-12 lg:w-3/5 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-r border-slate-700/50">
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-4">{projectIcons[projectType]}</div>
                  <h2 className="text-3xl font-bold text-white">Configure Your Project</h2>
                </div>
                
                <div className="space-y-10">
                  {/* Project Type with Visual Cards */}
                  <div>
                    <label className="block text-lg font-bold text-white mb-6">Choose Your Project Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-400 mb-3">Simple & Affordable</h3>
                        <div className="space-y-2">
                          {[
                            { type: 'landing-page', name: 'Landing Page', price: '$800+', icon: '🚀' },
                            { type: 'wordpress-site', name: 'WordPress Site', price: '$2,000+', icon: '📝' },
                            { type: 'shopify-store', name: 'Shopify Store', price: '$3,500+', icon: '🛒' },
                            { type: 'business-website', name: 'Business Website', price: '$5,000+', icon: '🏢' }
                          ].map((project) => (
                            <button
                              key={project.type}
                              onClick={() => setProjectType(project.type as ProjectType)}
                              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                projectType === project.type
                                  ? 'border-blue-500 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 shadow-lg shadow-blue-500/25 transform scale-105'
                                  : 'border-slate-600 hover:border-slate-500 hover:bg-slate-700/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="text-2xl mr-3">{project.icon}</span>
                                  <div>
                                    <div className="font-semibold text-white">{project.name}</div>
                                    <div className="text-sm text-slate-400">{project.price}</div>
                                  </div>
                                </div>
                                {projectType === project.type && (
                                  <div className="text-blue-400">✓</div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-slate-400 mb-3">Advanced Solutions</h3>
                        <div className="space-y-2">
                          {[
                            { type: 'web-application', name: 'Web Application', price: '$15,000+', icon: '💻' },
                            { type: 'enterprise-website', name: 'Enterprise Website', price: '$50,000+', icon: '🏛️' },
                            { type: 'enterprise-platform', name: 'Enterprise Platform', price: '$150,000+', icon: '🌐' },
                            { type: 'saas-application', name: 'SaaS Application', price: '$250,000+', icon: '☁️' }
                          ].map((project) => (
                            <button
                              key={project.type}
                              onClick={() => setProjectType(project.type as ProjectType)}
                              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                projectType === project.type
                                  ? 'border-blue-500 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 shadow-lg shadow-blue-500/25 transform scale-105'
                                  : 'border-slate-600 hover:border-slate-500 hover:bg-slate-700/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="text-2xl mr-3">{project.icon}</span>
                                  <div>
                                    <div className="font-semibold text-white">{project.name}</div>
                                    <div className="text-sm text-slate-400">{project.price}</div>
                                  </div>
                                </div>
                                {projectType === project.type && (
                                  <div className="text-blue-400">✓</div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  {isSimpleProject && (
                    <div>
                      <label className="block text-lg font-bold text-white mb-6">
                        How many {projectType.replace('-', ' ')}s do you need?
                      </label>
                      <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-6">
                        <div className="flex items-center justify-center space-x-8">
                          <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-110"
                          >
                            −
                          </button>
                          <div className="text-center">
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse">
                              {quantity}
                            </div>
                            <div className="text-lg text-slate-300 mt-2">
                              {quantity === 1 ? 'Project' : 'Projects'}
                            </div>
                          </div>
                          <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-110"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Complexity Slider */}
                  <div>
                    <label className="block text-lg font-bold text-white mb-6">
                      Project Complexity Level: <span className="text-blue-400">{complexity}/10</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value={complexity} 
                        onChange={(e) => setComplexity(parseInt(e.target.value))}
                        className="w-full h-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg appearance-none cursor-pointer premium-slider"
                      />
                      <div className="flex justify-between text-sm text-slate-400 mt-3">
                        <span>🟢 {isSimpleProject ? 'Basic' : 'Simple'}</span>
                        <span>🔥 {isSimpleProject ? 'Premium' : 'Enterprise'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="block text-lg font-bold text-white mb-6">Select Team Size</label>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                      {[
                        { value: 'freelancer', label: '👤 Solo', desc: '1 Expert' },
                        { value: 'small', label: '👥 Small', desc: '2-5 People' },
                        { value: 'medium', label: '🏢 Medium', desc: '6-12 People' },
                        { value: 'large', label: '🏭 Large', desc: '13-25 People' },
                        { value: 'enterprise', label: '🌟 Enterprise', desc: '25+ People' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTeamSize(option.value as TeamSize)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            teamSize === option.value
                              ? 'border-blue-500 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 shadow-lg shadow-blue-500/25 transform scale-105'
                              : 'border-slate-600 hover:border-slate-500 hover:bg-slate-700/50'
                          }`}
                        >
                          <div className="text-center">
                            <div className="font-bold text-white">{option.label}</div>
                            <div className="text-xs text-slate-400 mt-1">{option.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-lg font-bold text-white mb-6">Project Timeline</label>
                    <div className="grid grid-cols-3 gap-4">
                      {(isSimpleProject ? [
                        { value: '4-8', label: '⏰ Standard', time: '4-8 weeks', desc: 'Best Value' },
                        { value: '2-4', label: '🚀 Fast Track', time: '2-4 weeks', desc: '+30% Cost' },
                        { value: '1-2', label: '⚡ Rush', time: '1-2 weeks', desc: '+60% Cost' },
                      ] : [
                        { value: '12-18', label: '⏰ Standard', time: '12-18 months', desc: 'Best Value' },
                        { value: '6-12', label: '🚀 Accelerated', time: '6-12 months', desc: 'Balanced' },
                        { value: '3-6', label: '⚡ Rush', time: '3-6 months', desc: '+40% Cost' },
                      ]).map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setTimeline(option.value as Timeline)}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                            timeline === option.value
                              ? 'border-blue-500 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 shadow-lg shadow-blue-500/25 transform scale-105'
                              : 'border-slate-600 hover:border-slate-500 hover:bg-slate-700/50'
                          }`}
                        >
                          <div className="text-center">
                            <div className="font-bold text-white text-lg">{option.label}</div>
                            <div className="text-slate-300 mt-1">{option.time}</div>
                            <div className="text-xs text-slate-400 mt-2">{option.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-lg font-bold text-white mb-6">
                      {isSimpleProject ? '🎯 Website Features' : '🚀 Enterprise Features'}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {(isSimpleProject ? [
                        { key: 'responsive-design', name: '📱 Responsive Design', desc: 'Mobile-first approach' },
                        { key: 'seo-optimization', name: '🎯 SEO Optimization', desc: 'Google-ready content' },
                        { key: 'cms-integration', name: '📝 CMS Integration', desc: 'Easy content management' },
                        { key: 'ecommerce-features', name: '🛒 E-commerce Features', desc: 'Online selling tools' },
                        { key: 'user-authentication', name: '🔐 User Login System', desc: 'Secure user accounts' },
                        { key: 'payment-gateway', name: '💳 Payment Gateway', desc: 'Accept online payments' }
                      ] : [
                        { key: 'cloud-infrastructure', name: '☁️ Cloud Infrastructure', desc: 'Scalable hosting solution' },
                        { key: 'advanced-analytics', name: '📊 Advanced Analytics', desc: 'Deep insights & reporting' },
                        { key: 'ai-integration', name: '🤖 AI Integration', desc: 'Machine learning features' },
                        { key: 'multi-platform', name: '🌐 Multi-Platform', desc: 'Web, mobile, desktop' },
                        { key: 'enterprise-security', name: '🔒 Enterprise Security', desc: 'Bank-level protection' },
                        { key: 'custom-integrations', name: '🔗 Custom Integrations', desc: 'Connect existing systems' }
                      ]).map((feature) => {
                        const isSelected = features.includes(feature.key as Feature);
                        return (
                          <button
                            key={feature.key}
                            onClick={() => toggleFeature(feature.key as Feature)}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                              isSelected
                                ? 'border-green-500 bg-gradient-to-br from-green-600/20 to-emerald-600/20 shadow-lg shadow-green-500/25 transform scale-105'
                                : 'border-slate-600 hover:border-slate-500 hover:bg-slate-700/50'
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold text-white">{feature.name}</div>
                                <div className="text-sm text-slate-400 mt-1">{feature.desc}</div>
                              </div>
                              {isSelected && (
                                <div className="text-green-400 text-xl">✓</div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Panel */}
              <div className="p-8 lg:p-12 lg:w-2/5 bg-gradient-to-br from-slate-900/90 to-black/90">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  💰 Your Investment
                </h3>
                
                <div className="text-center mb-12">
                  <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse mb-4">
                    ${Math.round(animatedPrice).toLocaleString()}
                  </div>
                  <div className="text-xl text-slate-300">
                    {timeline} {isSimpleProject ? 'week' : 'month'} delivery
                    {quantity > 1 ? ` • ${quantity} projects` : ''}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-lg">
                    🚀 {isSimpleProject ? 'Start Your Project Now' : 'Request Enterprise Proposal'}
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-slate-600">
                    💬 {isSimpleProject ? 'Chat with Our Team' : 'Schedule Strategy Call'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        
        .premium-slider::-webkit-slider-thumb {
          appearance: none;
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3B82F6, #06B6D4);
          cursor: pointer;
          border: 4px solid #1E40AF;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
          transition: all 0.3s ease;
        }
        
        .premium-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(59, 130, 246, 1);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default EnterpriseProjectCalculator;