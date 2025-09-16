"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Eye, Scan, Brain, Target, Zap, Monitor, Code, Cpu, Database, ArrowRight, Sparkles, Settings } from 'lucide-react';

const ComputerVision = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Custom Computer Vision Integration",
      description: "We integrate cutting-edge computer vision AI directly into your existing applications and workflows",
      deliverable: "Full AI Integration",
      timeline: "4-8 weeks",
      complexity: "Enterprise Grade",
      features: ["API Integration", "Custom Model Training", "Real-time Processing"],
      color: "from-blue-500 to-cyan-500",
      icon: Code
    },
    {
      title: "AI-Powered Visual Analytics",
      description: "Transform your business data with intelligent image and video analysis solutions",
      deliverable: "Analytics Dashboard",
      timeline: "6-10 weeks", 
      complexity: "Advanced AI",
      features: ["Business Intelligence", "Automated Insights", "Custom Reporting"],
      color: "from-indigo-500 to-purple-500",
      icon: Brain
    },
    {
      title: "Smart Vision Applications",
      description: "We build complete applications powered by computer vision from concept to deployment",
      deliverable: "Full Application",
      timeline: "8-16 weeks",
      complexity: "Complete Solution",
      features: ["End-to-end Development", "Cloud Deployment", "Ongoing Support"],
      color: "from-cyan-500 to-teal-500",
      icon: Monitor
    }
  ];

  const integrationCapabilities = [
    { 
      icon: Eye, 
      title: "Object Detection APIs", 
      desc: "Integrate real-time object recognition into your applications",
      techStack: ["TensorFlow Serving", "REST APIs", "WebSocket"],
      useCase: "E-commerce, Security, Manufacturing"
    },
    { 
      icon: Scan, 
      title: "Document AI Integration", 
      desc: "Add OCR and document processing to your business workflows",
      techStack: ["Tesseract", "AWS Textract", "Custom OCR"],
      useCase: "Finance, Legal, Healthcare"
    },
    { 
      icon: Target, 
      title: "Quality Control Systems", 
      desc: "Automate visual inspection with AI-powered quality assurance",
      techStack: ["OpenCV", "Custom Models", "Edge Computing"],
      useCase: "Manufacturing, Food Industry, Pharma"
    },
    { 
      icon: Brain, 
      title: "Facial Recognition Systems", 
      desc: "Implement secure biometric authentication and access control",
      techStack: ["FaceNet", "Azure Face API", "Custom Training"],
      useCase: "Security, Retail, Events"
    },
    { 
      icon: Monitor, 
      title: "Video Analytics Platform", 
      desc: "Process and analyze video streams for business insights",
      techStack: ["FFmpeg", "NVIDIA DeepStream", "Cloud Processing"],
      useCase: "Retail Analytics, Traffic, Sports"
    },
    { 
      icon: Zap, 
      title: "Mobile AI Integration", 
      desc: "Bring computer vision capabilities to mobile and edge devices",
      techStack: ["TensorFlow Lite", "Core ML", "ONNX Runtime"],
      useCase: "Mobile Apps, IoT, Automotive"
    }
  ];

  const developmentProcess = [
    { step: "Discovery & Planning", duration: "1-2 weeks", desc: "Understanding your vision requirements and technical constraints" },
    { step: "AI Model Selection", duration: "1 week", desc: "Choosing or training the optimal computer vision models" },
    { step: "Integration Development", duration: "3-8 weeks", desc: "Building APIs and integrating AI into your systems" },
    { step: "Testing & Optimization", duration: "2-3 weeks", desc: "Performance tuning and comprehensive testing" },
    { step: "Deployment & Support", duration: "Ongoing", desc: "Production deployment with continued monitoring" }
  ];

  const clientResults = [
    { metric: "50+ Projects", label: "Computer Vision Integrations", icon: Cpu },
    { metric: "99.2%", label: "Average Model Accuracy", icon: Target },
    { metric: "< 100ms", label: "Response Time", icon: Zap },
    { metric: "24/7", label: "AI System Monitoring", icon: Database }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic gradient following mouse */}
      <div 
        className="absolute w-96 h-96 bg-blue-600/15 rounded-full blur-3xl transition-all duration-1000"
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Floating code elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-blue-400/20 font-mono text-sm animate-float"
          style={{
            left: `${20 + (i % 4) * 20}%`,
            top: `${20 + Math.floor(i / 4) * 40}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        >
          {['AI.detect()', 'cv2.process()', 'model.predict()', 'api.analyze()'][i % 4]}
        </div>
      ))}

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Circuit-like connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(6)].map((_, i) => (
          <g key={i}>
            <path
              d={`M${100 + i * 200},100 Q${200 + i * 200},200 ${300 + i * 200},100`}
              fill="none"
              stroke="rgb(59, 130, 246)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            <circle
              cx={100 + i * 200}
              cy="100"
              r="4"
              fill="rgb(59, 130, 246)"
              className="animate-ping"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20 mb-8">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">AI Integration Services</span>
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              Computer Vision
            </span>
            <br />
            <span className="text-white/90">Integration</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We integrate cutting-edge computer vision AI into your applications and business processes. 
            From custom model training to full-stack development, we make AI work for your business.
          </p>
        </div>

        {/* Service Showcase */}
        <div className="mb-20">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-blue-500/20 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                {/* This is the problematic line */}
                {(() => {
                  const IconComponent = services[activeService].icon;
                  return (
                    <div className={`w-16 h-16 bg-gradient-to-br ${services[activeService].color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  );
                })()}
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{services[activeService].title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-blue-400">{services[activeService].deliverable}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{services[activeService].timeline}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 px-6 py-3 rounded-full border border-blue-500/30 mt-6 lg:mt-0">
                <span className="text-blue-300 font-semibold">{services[activeService].complexity}</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8">{services[activeService].description}</p>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {services[activeService].features.map((feature, _idx) => (
                <div key={feature} className="bg-gradient-to-br from-gray-900/60 to-blue-900/20 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-3">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    idx === activeService ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Integration Capabilities */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-4 text-white">AI Integration Capabilities</h3>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            We specialize in integrating computer vision AI into your existing systems and building new AI-powered applications from scratch
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCapabilities.map((capability, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-900/60 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                    <capability.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {capability.title}
                  </h4>
                </div>
                
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {capability.desc}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-blue-400">Tech Stack:</span>
                    <p className="text-sm text-gray-400">{capability.techStack.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-green-400">Use Cases:</span>
                    <p className="text-sm text-gray-400">{capability.useCase}</p>
                  </div>
                </div>

                {hoveredFeature === idx && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/5 rounded-2xl border border-blue-400/30 transition-all duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-4 text-white">Our Development Process</h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            From concept to deployment, we follow a proven methodology to deliver AI solutions that work
          </p>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 opacity-30"></div>
            
            {developmentProcess.map((phase, idx) => (
              <div key={idx} className="relative flex items-center mb-12 last:mb-0">
                <div className={`flex-1 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                  <div className="bg-gradient-to-br from-gray-900/60 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                    <h4 className="text-xl font-bold text-white mb-2">{phase.step}</h4>
                    <p className="text-blue-400 text-sm font-medium mb-3">{phase.duration}</p>
                    <p className="text-gray-300">{phase.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                  <span className="text-white font-bold text-sm">{idx + 1}</span>
                </div>
                
                <div className={`flex-1 ${idx % 2 === 0 ? 'order-2' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Results */}
        <div className="bg-gradient-to-br from-black/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-blue-500/20">
          <h3 className="text-4xl font-bold text-center mb-4 text-white">Proven Results</h3>
          <p className="text-center text-gray-400 mb-12">Real metrics from our computer vision integration projects</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientResults.map((result, idx) => (
              <div key={idx} className="text-center group hover:bg-blue-500/5 p-6 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800/50 rounded-full flex items-center justify-center group-hover:bg-gray-700/50 transition-colors">
                  <result.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-sm text-gray-400">{result.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-300">
              <Settings className="w-5 h-5 text-blue-400" />
              <span>Custom AI solutions tailored to your business needs</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ComputerVision;