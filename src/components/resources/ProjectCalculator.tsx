"use client";

import React, { useState } from 'react';

type ProjectType = 'enterprise-website' | 'enterprise-platform' | 'saas-application' | 'mobile-ecosystem' | 'digital-transformation';
type Feature = 'cloud-infrastructure' | 'advanced-analytics' | 'ai-integration' | 'multi-platform' | 'enterprise-security' | 'custom-integrations' | 'scalable-architecture' | 'compliance-suite';
type Timeline = '6-12' | '3-6' | '12-18';
type TeamSize = 'small' | 'medium' | 'large' | 'enterprise';

const EnterpriseProjectCalculator = () => {
  const [projectType, setProjectType] = useState<ProjectType>('enterprise-website');
  const [complexity, setComplexity] = useState(7);
  const [features, setFeatures] = useState<Feature[]>(['cloud-infrastructure', 'enterprise-security']);
  const [timeline, setTimeline] = useState<Timeline>('6-12');
  const [teamSize, setTeamSize] = useState<TeamSize>('medium');

  const calculateEstimate = () => {
    // Base prices for enterprise projects
    let basePrice = 0;
    if (projectType === 'enterprise-website') basePrice = 50000;
    else if (projectType === 'enterprise-platform') basePrice = 150000;
    else if (projectType === 'saas-application') basePrice = 250000;
    else if (projectType === 'mobile-ecosystem') basePrice = 200000;
    else if (projectType === 'digital-transformation') basePrice = 500000;

    // Complexity multiplier
    const complexityMultiplier = 0.5 + (complexity / 10);
    
    // Feature costs
    const featureCost = features.length * 25000;
    
    // Team size multiplier
    const teamMultipliers = { small: 0.8, medium: 1.0, large: 1.3, enterprise: 1.6 };
    
    // Timeline adjustment
    let timelineMultiplier = 1;
    if (timeline === '3-6') timelineMultiplier = 1.4;
    else if (timeline === '12-18') timelineMultiplier = 0.9;
    
    return Math.round((basePrice + featureCost) * complexityMultiplier * teamMultipliers[teamSize] * timelineMultiplier);
  };

  const toggleFeature = (feature: Feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter(f => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50" 
               style={{ 
                 backgroundImage: `
                   linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Enterprise Project Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Calculate precise estimates for enterprise-level digital solutions with advanced feature requirements and scalable architectures.
            </p>
          </div>

          <div className="bg-slate-800 bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
            <div className="lg:flex">
              {/* Configuration Panel */}
              <div className="p-8 lg:p-12 lg:w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 border-r border-slate-700">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Project Configuration</h2>
                
                <div className="space-y-8">
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-4">Project Type</label>
                    <select 
                      className="w-full px-4 py-4 rounded-xl bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white text-base"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value as ProjectType)}
                    >
                      <option value="enterprise-website">Enterprise Website</option>
                      <option value="enterprise-platform">Enterprise Platform</option>
                      <option value="saas-application">SaaS Application</option>
                      <option value="mobile-ecosystem">Mobile Ecosystem</option>
                      <option value="digital-transformation">Digital Transformation</option>
                    </select>
                  </div>

                  {/* Complexity Scale */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-4">
                      Project Complexity: {complexity}/10
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={complexity} 
                      onChange={(e) => setComplexity(parseInt(e.target.value))}
                      className="w-full h-3 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>Simple</span>
                      <span>Enterprise</span>
                    </div>
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-4">Team Size</label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        { value: 'small', label: 'Small\n(3-5)', desc: '3-5 devs' },
                        { value: 'medium', label: 'Medium\n(6-12)', desc: '6-12 devs' },
                        { value: 'large', label: 'Large\n(13-25)', desc: '13-25 devs' },
                        { value: 'enterprise', label: 'Enterprise\n(25+)', desc: '25+ devs' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setTeamSize(option.value as TeamSize)}
                          className={`p-4 text-sm rounded-xl border transition-all ${
                            teamSize === option.value
                              ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                              : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                          }`}
                        >
                          <div className="font-semibold whitespace-pre-line">{option.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-4">Timeline</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: '12-18', label: '12-18 months', desc: 'Standard' },
                        { value: '6-12', label: '6-12 months', desc: 'Accelerated' },
                        { value: '3-6', label: '3-6 months', desc: 'Rush' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setTimeline(option.value as Timeline)}
                          className={`p-4 text-sm rounded-xl border transition-all ${
                            timeline === option.value
                              ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                              : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                          }`}
                        >
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-xs opacity-75">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Enterprise Features */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-4">Enterprise Features</label>
                    <div className="grid grid-cols-2 gap-3">
                      {([
                        'cloud-infrastructure',
                        'advanced-analytics', 
                        'ai-integration',
                        'multi-platform',
                        'enterprise-security',
                        'custom-integrations',
                        'scalable-architecture',
                        'compliance-suite'
                      ] as Feature[]).map((feature) => {
                        const isSelected = features.includes(feature);
                        const featureNames = {
                          'cloud-infrastructure': 'Cloud Infrastructure',
                          'advanced-analytics': 'Advanced Analytics',
                          'ai-integration': 'AI Integration',
                          'multi-platform': 'Multi-Platform',
                          'enterprise-security': 'Enterprise Security',
                          'custom-integrations': 'Custom Integrations',
                          'scalable-architecture': 'Scalable Architecture',
                          'compliance-suite': 'Compliance Suite'
                        };
                        
                        return (
                          <button
                            key={feature}
                            type="button"
                            onClick={() => toggleFeature(feature)}
                            className={`p-3 text-sm text-left rounded-xl border transition-all ${
                              isSelected
                                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                                : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                            }`}
                          >
                            {featureNames[feature]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimate Panel */}
              <div className="p-8 lg:p-12 lg:w-1/2 bg-slate-900">
                <h3 className="text-2xl font-bold text-white mb-8">Investment Estimate</h3>
                
                <div className="mb-10">
                  {/* Base Price */}
                  <div className="flex justify-between items-baseline mb-4 pb-4 border-b border-slate-700">
                    <span className="text-slate-300 font-medium">Base Investment</span>
                    <span className="text-xl font-bold text-white">
                      ${projectType === 'enterprise-website' ? '50,000' : 
                        projectType === 'enterprise-platform' ? '150,000' :
                        projectType === 'saas-application' ? '250,000' :
                        projectType === 'mobile-ecosystem' ? '200,000' : '500,000'}
                    </span>
                  </div>
                  
                  {/* Complexity Adjustment */}
                  <div className="flex justify-between items-baseline mb-4 text-sm text-slate-400">
                    <span>Complexity Multiplier ({complexity}/10)</span>
                    <span>×{(0.5 + (complexity / 10)).toFixed(1)}</span>
                  </div>
                  
                  {/* Features */}
                  {features.length > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between items-baseline text-sm text-slate-400 mb-2">
                        <span>Enterprise Features</span>
                        <span>+${(features.length * 25000).toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {features.map((feature) => (
                          <div key={feature} className="bg-slate-800 px-3 py-2 rounded-lg text-xs text-slate-300">
                            {{
                              'cloud-infrastructure': 'Cloud Infra',
                              'advanced-analytics': 'Analytics',
                              'ai-integration': 'AI Integration',
                              'multi-platform': 'Multi-Platform',
                              'enterprise-security': 'Security',
                              'custom-integrations': 'Integrations',
                              'scalable-architecture': 'Scalable Arch',
                              'compliance-suite': 'Compliance'
                            }[feature]}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Team Size */}
                  <div className="flex justify-between items-baseline mb-4 text-sm text-slate-400">
                    <span>Team Size ({teamSize})</span>
                    <span>×{teamSize === 'small' ? '0.8' : teamSize === 'medium' ? '1.0' : teamSize === 'large' ? '1.3' : '1.6'}</span>
                  </div>
                  
                  {/* Timeline */}
                  {timeline !== '6-12' && (
                    <div className="flex justify-between items-baseline text-sm text-slate-400 mb-4">
                      <span>Timeline Adjustment ({timeline} months)</span>
                      <span>{timeline === '3-6' ? '+40%' : timeline === '12-18' ? '-10%' : ''}</span>
                    </div>
                  )}
                  
                  <div className="h-px bg-slate-700 my-6"></div>
                  
                  {/* Total */}
                  <div className="flex justify-between items-baseline mb-8">
                    <span className="font-semibold text-white text-lg">Total Investment</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-400 mb-1">
                        ${calculateEstimate().toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-400">
                        {timeline} month timeline
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                    Request Detailed Proposal
                  </button>
                  <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-4 px-8 rounded-xl transition-all border border-slate-600">
                    Schedule Consultation
                  </button>
                  <p className="text-xs text-slate-400 text-center leading-relaxed">
                    This estimate is based on industry standards for enterprise projects. 
                    Final pricing depends on detailed requirements analysis and technical specifications.
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
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid #1E40AF;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid #1E40AF;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default EnterpriseProjectCalculator;