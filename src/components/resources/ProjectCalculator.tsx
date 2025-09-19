"use client";

import React, { useState } from 'react';

type ProjectType = 'website' | 'webapp' | 'ecommerce' | 'mobile';
type Feature = 'responsive' | 'seo' | 'ecommerce' | 'cms' | 'auth' | 'api';
type Timeline = '1-2' | '2-4' | '4-6';

const ProjectCalculator = () => {
  const [projectType, setProjectType] = useState<ProjectType>('website');
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState<Feature[]>(['responsive', 'seo']);
  const [timeline, setTimeline] = useState<Timeline>('4-6');

  const calculateEstimate = () => {
    // Base prices
    let basePrice = 0;
    if (projectType === 'website') basePrice = 2000;
    else if (projectType === 'webapp') basePrice = 10000;
    else if (projectType === 'ecommerce') basePrice = 15000;
    else if (projectType === 'mobile') basePrice = 25000;

    // Adjust for pages (for websites)
    const pageMultiplier = projectType === 'website' ? (pages - 1) * 200 : 0;
    
    // Adjust for features
    const featureCost = features.length * 1000;
    
    // Timeline adjustment
    let timelineMultiplier = 1;
    if (timeline === '2-4') timelineMultiplier = 1.2;
    else if (timeline === '1-2') timelineMultiplier = 1.5;
    
    return Math.round((basePrice + pageMultiplier + featureCost) * timelineMultiplier);
  };

  const toggleFeature = (feature: Feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter(f => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="p-8 md:p-10 md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Calculator</h2>
              <p className="text-blue-100 mb-8">Get an instant estimate for your next project based on your requirements.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Project Type</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-blue-700 bg-opacity-50 border border-blue-500 focus:ring-2 focus:ring-white focus:border-white text-white"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value as ProjectType)}
                  >
                    <option value="website">Website</option>
                    <option value="webapp">Web Application</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="mobile">Mobile App</option>
                  </select>
                </div>

                {projectType === 'website' && (
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Number of Pages: {pages}
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="50" 
                      value={pages} 
                      onChange={(e) => setPages(parseInt(e.target.value))}
                      className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Timeline</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: '4-6', label: '4-6 weeks' },
                      { value: '2-4', label: '2-4 weeks' },
                      { value: '1-2', label: '1-2 weeks' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setTimeline(option.value as Timeline)}
                        className={`px-3 py-2 text-sm rounded-lg border ${
                          timeline === option.value
                            ? 'bg-white text-blue-700 border-white'
                            : 'border-blue-400 text-blue-100 hover:bg-blue-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Features</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['responsive', 'seo', 'ecommerce', 'cms', 'auth', 'api'] as Feature[]).map((feature) => {
                      const isSelected = features.includes(feature);
                      const featureNames = {
                        responsive: 'Responsive Design',
                        seo: 'SEO Optimization',
                        ecommerce: 'E-commerce',
                        cms: 'Content Management',
                        auth: 'User Authentication',
                        api: 'API Integration'
                      };
                      
                      return (
                        <button
                          key={feature}
                          type="button"
                          onClick={() => toggleFeature(feature)}
                          className={`px-3 py-2 text-sm text-left rounded-lg border ${
                            isSelected
                              ? 'bg-white text-blue-700 border-white'
                              : 'border-blue-400 text-blue-100 hover:bg-blue-700'
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

            <div className="p-8 md:p-10 md:w-1/2 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Estimate</h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-gray-600">Base Price</span>
                  <span className="text-lg font-semibold">
                    ${projectType === 'website' ? '2,000' : projectType === 'webapp' ? '10,000' : projectType === 'ecommerce' ? '15,000' : '25,000'}
                  </span>
                </div>
                
                {projectType === 'website' && (
                  <div className="flex justify-between items-baseline mb-2 text-sm text-gray-500">
                    <span>+ {pages} page{pages > 1 ? 's' : ''} (${(pages - 1) * 200})</span>
                    <span>+ ${(pages - 1) * 200}</span>
                  </div>
                )}
                
                {features.length > 0 && (
                  <div className="mb-2">
                    <div className="text-sm text-gray-500 mb-1">Features (${features.length * 1000})</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {features.map((feature) => (
                        <div key={feature} className="bg-gray-50 px-2 py-1 rounded">
                          {{
                            responsive: 'Responsive',
                            seo: 'SEO',
                            ecommerce: 'E-commerce',
                            cms: 'CMS',
                            auth: 'Auth',
                            api: 'API'
                          }[feature]}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {timeline !== '4-6' && (
                  <div className="flex justify-between items-baseline text-sm text-gray-500 mb-2">
                    <span>Expedited Delivery ({timeline} weeks)</span>
                    <span>+{timeline === '2-4' ? '20%' : '50%'}</span>
                  </div>
                )}
                
                <div className="h-px bg-gray-200 my-4"></div>
                
                <div className="flex justify-between items-baseline">
                  <span className="font-medium">Estimated Cost</span>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${calculateEstimate().toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 text-right">
                      {timeline} week{timeline.includes('-') ? 's' : ''} timeline
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Get a Detailed Quote
                </button>
                <p className="text-xs text-gray-500 text-center">
                  This is an estimate. Contact us for a detailed project proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;
