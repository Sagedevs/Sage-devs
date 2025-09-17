"use client";
import React, { useState } from 'react';
import { Brain, Lightbulb, Rocket, Settings, Cloud, Zap, Cpu, Sliders, HardDrive, Atom, Sparkles, Wand2 } from 'lucide-react';

const AISolutions = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const aiSolutionsServices = [
    {
      id: 1,
      icon: Brain,
      title: "AI Strategy & Consulting",
      subtitle: "Paving Your AI Journey",
      description: "We help businesses define their AI vision, identify strategic opportunities, and create a comprehensive roadmap for successful AI adoption and implementation.",
      features: ["AI opportunity assessment", "Feasibility studies & ROI analysis", "Custom AI roadmap development", "Ethical AI framework & governance"],
      technologies: ["Market Research", "Data Analysis", "Strategic Planning", "Risk Assessment"],
      stats: "100+ Strategies",
      timeline: "4-8 weeks",
      complexity: "Strategic"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Machine Learning Development",
      subtitle: "Intelligent Algorithms & Models",
      description: "Building, training, and deploying custom machine learning models to solve complex problems, automate tasks, and extract valuable insights from your data.",
      features: ["Predictive analytics", "Natural Language Processing (NLP)", "Computer Vision", "Recommendation engines"],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
      stats: "200+ Models",
      timeline: "8-16 weeks",
      complexity: "Advanced"
    },
    {
      id: 3,
      icon: Atom,
      title: "Deep Learning Solutions",
      subtitle: "Neural Networks for Complex Tasks",
      description: "Developing advanced deep learning solutions, including neural networks for image recognition, speech processing, and complex pattern detection.",
      features: ["Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Generative Adversarial Networks (GANs)", "Transfer learning"],
      technologies: ["DeepMind", "OpenAI", "Hugging Face", "Google AI"],
      stats: "50+ DL Projects",
      timeline: "12-24 weeks",
      complexity: "Transformative"
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Generative AI & LLM Development",
      subtitle: "Creative & Conversational AI",
      description: "Building and customizing generative AI models and large language models (LLMs) for content creation, intelligent chatbots, and advanced conversational interfaces.",
      features: ["Content generation (text, image, code)", "Custom chatbot development", "Sentiment analysis & summarization", "Voice & speech AI"],
      technologies: ["GPT-4", "BERT", "DALL-E", "Stable Diffusion"],
      stats: "30+ GenAI Projects",
      timeline: "10-20 weeks",
      complexity: "Innovative"
    },
    {
      id: 5,
      icon: HardDrive,
      title: "Data Engineering for AI",
      subtitle: "Robust Data Pipelines",
      description: "Designing and implementing scalable data pipelines, data warehousing, and ETL processes to ensure high-quality, readily available data for AI model training and deployment.",
      features: ["Data cleansing & preprocessing", "Feature engineering", "Real-time data streaming", "Data warehousing & lakes"],
      technologies: ["Apache Spark", "Kafka", "Databricks", "Snowflake"],
      stats: "60+ Data Pipelines",
      timeline: "8-16 weeks",
      complexity: "Advanced"
    },
    {
      id: 6,
      icon: Cloud,
      title: "AI Cloud & MLOps",
      subtitle: "Scalable AI Infrastructure",
      description: "Setting up and managing robust cloud infrastructure for AI workloads, implementing MLOps practices for seamless model deployment, monitoring, and scaling.",
      features: ["Cloud platform selection (AWS, GCP, Azure)", "Containerization (Docker, Kubernetes)", "CI/CD for ML models", "Model monitoring & retraining"],
      technologies: ["AWS SageMaker", "Google AI Platform", "Azure ML", "MLflow"],
      stats: "40+ AI Deployments",
      timeline: "6-12 weeks",
      complexity: "Enterprise"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Strategic': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Advanced': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Transformative': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'Innovative': return 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10';
      case 'Enterprise': return 'text-red-400 border-red-500/30 bg-red-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Futuristic AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Grid Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0 animate-pulse"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(30, 58, 138, 0.6) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.5) 0%, transparent 50%),
                  radial-gradient(circle at 40% 70%, rgba(37, 99, 235, 0.4) 0%, transparent 50%),
                  radial-gradient(circle at 90% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 10% 80%, rgba(147, 197, 253, 0.2) 0%, transparent 50%)
                `,
                animation: 'neuralPulse 8s infinite ease-in-out'
              }}
            />
          </div>
        </div>

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{
                width: '100%',
                top: Math.random() * 100 + '%',
                left: '0%',
                transform: `translateX(${Math.random() * 200 - 100}px)`,
                animation: `slideHorizontal ${4 + Math.random() * 4}s infinite linear`,
                animationDelay: Math.random() * 4 + 's'
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`vertical-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"
              style={{
                height: '100%',
                left: Math.random() * 100 + '%',
                top: '0%',
                transform: `translateY(${Math.random() * 200 - 100}px)`,
                animation: `slideVertical ${5 + Math.random() * 3}s infinite linear`,
                animationDelay: Math.random() * 3 + 's'
              }}
            />
          ))}
        </div>

        {/* Floating Data Nodes */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full border border-blue-400/40 bg-blue-500/20 animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `floatNode ${8 + Math.random() * 6}s infinite ease-in-out`,
                animationDelay: Math.random() * 4 + 's'
              }}
            />
          ))}
        </div>

        {/* Binary Code Rain */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400 font-mono text-xs leading-tight"
              style={{
                left: Math.random() * 100 + '%',
                animation: `binaryRain ${10 + Math.random() * 5}s infinite linear`,
                animationDelay: Math.random() * 5 + 's'
              }}
            >
              {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
            </div>
          ))}
        </div>

        {/* AI Brain Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="brainPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-400">
                  <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-blue-300">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80" cy="30" r="1" fill="currentColor" className="text-blue-500">
                  <animate attributeName="opacity" values="1;0.2;1" dur="5s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="50" x2="20" y2="20" stroke="currentColor" strokeWidth="0.3" className="text-blue-400" opacity="0.6"/>
                <line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="0.3" className="text-blue-400" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#brainPattern)" />
          </svg>
        </div>

        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-300/30"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `quantumFloat ${6 + Math.random() * 8}s infinite ease-in-out`,
                animationDelay: Math.random() * 6 + 's',
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>

        {/* Matrix-style flowing connections */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                animation: `matrixFlow ${8 + i}s infinite linear`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>

        {/* Glowing orbs with pulsing effect */}
        <div className="absolute top-1/6 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-blue-800/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-slate-800/25 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
      </div>

      <style jsx>{`
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes slideHorizontal {
          0% { transform: translateX(-100vw); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes slideVertical {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes floatNode {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
        }
        
        @keyframes binaryRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes quantumFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3; 
          }
          25% { 
            transform: translate(10px, -15px) scale(1.5); 
            opacity: 1; 
          }
          50% { 
            transform: translate(-5px, -25px) scale(0.8); 
            opacity: 0.6; 
          }
          75% { 
            transform: translate(-15px, -10px) scale(1.2); 
            opacity: 0.9; 
          }
        }
        
        @keyframes matrixFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes gradientShift {
          0% { background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
          50% { background: linear-gradient(225deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
          100% { background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-8 mx-auto">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-violet-400 font-bold tracking-wide flex items-center gap-2">
                <Brain className="w-4 h-4" />
                AI & Machine Learning Solutions
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Unlock the Power of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            Revolutionize your business with cutting-edge AI and Machine Learning solutions.
            We deliver intelligent systems that automate processes, generate insights, and 
            drive innovation across various industries.
          </p>
        </div>

        {/* AI Solutions Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {aiSolutionsServices.map((service) => (
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
                      <div className="text-xs font-bold text-violet-400 mb-1">{service.stats}</div>
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
                    <p className="text-violet-400 font-medium text-xs uppercase tracking-wide">
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
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-2" />
                      Technical Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xxs text-slate-400 group/item">
                          <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-violet-300 transition-colors" />
                          <span className="group-hover/item:text-slate-300 transition-colors leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      Development Timeline
                    </h4>
                    <div className="text-xxs text-slate-400">
                      {service.timeline} typical delivery
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-2" />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xxs bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
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
              Our Core AI & ML Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-violet-400" />
                Machine Learning Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-purple-400" />
                AI Platforms & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS SageMaker", "Google AI Platform", "Azure Machine Learning", "Databricks", "Hugging Face"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-fuchsia-400" />
                Data Science & MLOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "R", "SQL", "Apache Spark", "MLflow", "Kubeflow", "Data Version Control"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-fuchsia-500/10 text-fuchsia-300 rounded-full border border-fuchsia-500/20">
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
            <button className="group px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Start Your AI Journey
              <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-violet-500/30 transition-all duration-300 text-base">
              View AI Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;