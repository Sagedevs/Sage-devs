"use client";

import React, { useEffect, useState } from 'react';

const LetsTalkAISecondSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      phase: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your business challenges, data landscape, and strategic objectives to identify AI opportunities.",
      details: "We conduct comprehensive audits of your existing systems, data quality assessments, and stakeholder interviews to build a complete picture of your AI readiness.",
      icon: "🔍"
    },
    {
      phase: "02", 
      title: "Architecture & Design",
      description: "Custom AI architecture tailored to your infrastructure, ensuring seamless integration and optimal performance.",
      details: "Our architects design scalable, secure, and maintainable AI systems that grow with your business needs and integrate with your existing technology stack.",
      icon: "🏗️"
    },
    {
      phase: "03",
      title: "Development & Training",
      description: "Agile development cycles with continuous testing, model training, and performance optimization.",
      details: "We employ cutting-edge ML techniques, rigorous testing protocols, and iterative refinement to ensure your AI models deliver accurate, reliable results.",
      icon: "⚡"
    },
    {
      phase: "04",
      title: "Deploy & Scale",
      description: "Seamless deployment with ongoing monitoring, optimization, and scaling as your business grows.",
      details: "Our DevOps experts ensure smooth production deployment with comprehensive monitoring, automated scaling, and continuous improvement protocols.",
      icon: "🚀"
    }
  ];

  const technologies = [
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "Neural Networks" },
    { name: "OpenAI GPT", category: "Language Models" },
    { name: "Computer Vision", category: "Image Processing" },
    { name: "MLflow", category: "Model Management" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Apache Kafka", category: "Data Streaming" },
    { name: "MongoDB", category: "Data Storage" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="neural-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
                <circle cx="25" cy="25" r="2" fill="rgb(59, 130, 246)" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="75" cy="75" r="2" fill="rgb(147, 197, 253)" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="25" y1="25" x2="75" y2="75" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
                </line>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-pattern)" />
          </svg>
        </div>

        {/* Code-like flowing lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"
              style={{
                top: `${15 + i * 15}%`,
                left: '-100%',
                width: '200%',
                animation: `slideRight ${8 + i * 2}s linear infinite ${i * 1.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent">
            Our AI Development Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we follow a proven methodology that ensures your AI solutions deliver real business value.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left side - Process visualization */}
          <div className="relative">
            <div className="sticky top-20">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`mb-8 p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeStep === index
                      ? 'bg-blue-600/20 border-blue-400 shadow-lg shadow-blue-500/25'
                      : 'bg-gray-900/40 border-gray-700/50 hover:border-blue-500/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-3xl p-3 rounded-xl ${ 
                      activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white' 
                    } transition-all duration-300`} style={{ filter: 'grayscale(100%) invert(100%)' }}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`text-sm font-mono px-3 py-1 rounded-full ${
                          activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
                        }`}>
                          {step.phase}
                        </span>
                        <h3 className={`text-xl font-bold ${
                          activeStep === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className={`text-sm ${
                        activeStep === index ? 'text-gray-200' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Active step details */}
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl p-4 bg-blue-500 rounded-2xl text-white" style={{ filter: 'grayscale(100%) invert(100%)' }}>
                  {processSteps[activeStep].icon}
                </div>
                <div>
                  <span className="text-blue-400 font-mono text-sm">
                    PHASE {processSteps[activeStep].phase}
                  </span>
                  <h3 className="text-3xl font-bold text-white">
                    {processSteps[activeStep].title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {processSteps[activeStep].details}
              </p>
            </div>

            {/* Progress indicator */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Progress</span>
                <span>{Math.round(((activeStep + 1) / 4) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-4">
              Technologies We Master
            </h3>
            <p className="text-gray-400 text-lg">
              Cutting-edge tools and frameworks powering your AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {tech.name}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default LetsTalkAISecondSection;