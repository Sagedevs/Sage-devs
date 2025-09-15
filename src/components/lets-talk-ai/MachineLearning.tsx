"use client";
import React, { useEffect, useRef, useState } from 'react';

const MachineLearning = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Auto-cycle through flows
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const mlFlows = [
    {
      input: "Raw Business Data",
      process: "Deep Learning Models",
      output: "Predictive Insights",
      description: "Transform chaotic data into crystal-clear predictions that drive strategic decisions",
      color: "blue"
    },
    {
      input: "Visual Content",
      process: "Computer Vision",
      output: "Automated Recognition",
      description: "Instantly analyze images and videos for quality control, security, and automation",
      color: "cyan"
    },
    {
      input: "Text & Documents",
      process: "NLP Algorithms",
      output: "Intelligent Analysis",
      description: "Extract meaning, sentiment, and insights from any text-based content",
      color: "indigo"
    },
    {
      input: "User Behavior",
      process: "Recommendation Engine",
      output: "Personalized Experience",
      description: "Deliver hyper-personalized recommendations that increase engagement and sales",
      color: "sky"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-black"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-blue-900/20"></div>
        
        {/* Flowing Data Streams */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent`}
            style={{
              left: `${15 + (i * 12)}%`,
              height: '100%',
              animation: `dataFlow ${3 + i * 0.5}s linear infinite`,
            }}
          />
        ))}
        
        {/* Neural Network Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-blue-400/40 animate-pulse"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-mono text-sm mb-6">
              AI-POWERED INTELLIGENCE
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-4 leading-tight">
              Machine
              <span className="block bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                Learning
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We don't just build models. We create intelligent systems that think, learn, and evolve with your business.
            </p>
          </div>
        </div>

        {/* Interactive ML Flows */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="relative">
            {/* Flow Visualization */}
            <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
              {mlFlows.map((flow, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    activeFlow === index ? 'scale-100 lg:scale-105' : 'scale-95 opacity-60'
                  }`}
                  onClick={() => setActiveFlow(index)}
                >
                  {/* Flow Pipeline */}
                  <div className="flex flex-col items-center gap-3 sm:gap-4">
                    {/* Input */}
                    <div className={`w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 transition-all duration-300 ${
                      activeFlow === index 
                        ? `border-${flow.color}-400 bg-${flow.color}-500/10` 
                        : 'border-gray-600 bg-gray-800/30'
                    }`}>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">INPUT</div>
                        <div className="text-white font-semibold text-sm sm:text-base">{flow.input}</div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className={`flex flex-col items-center transition-all duration-300 ${
                      activeFlow === index ? 'text-blue-400' : 'text-gray-600'
                    }`}>
                      <div className="w-px h-4 sm:h-6 bg-current"></div>
                      <div className="w-0 h-0 border-t-4 border-t-current border-x-2 border-x-transparent"></div>
                    </div>

                    {/* Process */}
                    <div className={`w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 transition-all duration-300 ${
                      activeFlow === index 
                        ? 'border-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/20' 
                        : 'border-gray-600 bg-gray-800/30'
                    }`}>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">PROCESS</div>
                        <div className="text-white font-semibold text-sm sm:text-base">{flow.process}</div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className={`flex flex-col items-center transition-all duration-300 ${
                      activeFlow === index ? 'text-blue-400' : 'text-gray-600'
                    }`}>
                      <div className="w-px h-4 sm:h-6 bg-current"></div>
                      <div className="w-0 h-0 border-t-4 border-t-current border-x-2 border-x-transparent"></div>
                    </div>

                    {/* Output */}
                    <div className={`w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 transition-all duration-300 ${
                      activeFlow === index 
                        ? 'border-green-400 bg-green-500/10' 
                        : 'border-gray-600 bg-gray-800/30'
                    }`}>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">OUTPUT</div>
                        <div className="text-white font-semibold text-sm sm:text-base">{flow.output}</div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Indicator */}
                  <div className={`w-2 h-2 rounded-full mx-auto mt-4 transition-all duration-300 ${
                    activeFlow === index ? 'bg-blue-400' : 'bg-gray-600'
                  }`}></div>
                </div>
              ))}
            </div>

            {/* Active Flow Description */}
            <div className="text-center">
              <div className={`inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 transition-all duration-500`}>
                <p className="text-lg text-gray-300 max-w-2xl">
                  {mlFlows[activeFlow].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Matrix */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {[
            'Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP Processing',
            'Predictive Models', 'Pattern Recognition', 'Data Mining', 'AI Automation'
          ].map((capability, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="p-4 bg-blue-900/10 border border-blue-800/30 rounded-xl hover:border-blue-600/50 transition-all duration-300 group-hover:bg-blue-800/20">
                <div className="text-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mb-2 group-hover:bg-white transition-colors duration-300"></div>
                  <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {capability}
                  </div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`flex justify-center items-center gap-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { value: '99.7%', label: 'Model Accuracy' },
            { value: '< 100ms', label: 'Response Time' },
            { value: '24/7', label: 'Monitoring' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes dataFlow {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default MachineLearning;