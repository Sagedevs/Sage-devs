import React from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette,
  Server,
  Globe,
  Layers,
  Zap,
  Shield,
  Cpu,
  Monitor,
  Workflow
} from 'lucide-react';

const TechnologyStack = () => {

  const technologies = [
    {
      category: 'Frontend Development',
      icon: <Code2 className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-700',
      items: [
        { name: 'React', icon: <Code2 className="w-5 h-5" />, description: 'Component-based UI library for scalable applications' },
        { name: 'Next.js', icon: <Globe className="w-5 h-5" />, description: 'Full-stack React framework with SSR capabilities' },
        { name: 'TypeScript', icon: <Code2 className="w-5 h-5" />, description: 'Type-safe JavaScript for enterprise applications' },
        { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" />, description: 'Utility-first CSS framework for rapid development' }
      ]
    },
    {
      category: 'Backend Architecture',
      icon: <Server className="w-8 h-8" />,
      color: 'from-blue-600 to-blue-800',
      items: [
        { name: 'Node.js', icon: <Server className="w-5 h-5" />, description: 'High-performance JavaScript runtime environment' },
        { name: 'Express.js', icon: <Zap className="w-5 h-5" />, description: 'Minimalist web framework for robust APIs' },
        { name: 'GraphQL', icon: <Layers className="w-5 h-5" />, description: 'Efficient data fetching and API management' },
        { name: 'PostgreSQL', icon: <Database className="w-5 h-5" />, description: 'Advanced relational database system' }
      ]
    },
    {
      category: 'Mobile Solutions',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-blue-700 to-blue-900',
      items: [
        { name: 'React Native', icon: <Smartphone className="w-5 h-5" />, description: 'Cross-platform mobile development framework' },
        { name: 'Flutter', icon: <Monitor className="w-5 h-5" />, description: 'UI toolkit for natively compiled applications' },
        { name: 'Swift', icon: <Cpu className="w-5 h-5" />, description: 'Native iOS development language' },
        { name: 'Kotlin', icon: <Code2 className="w-5 h-5" />, description: 'Modern Android development language' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-700',
      items: [
        { name: 'AWS', icon: <Cloud className="w-5 h-5" />, description: 'Comprehensive cloud computing platform' },
        { name: 'Docker', icon: <Layers className="w-5 h-5" />, description: 'Containerization for consistent deployments' },
        { name: 'Kubernetes', icon: <Workflow className="w-5 h-5" />, description: 'Container orchestration at scale' },
        { name: 'GitHub Actions', icon: <Workflow className="w-5 h-5" />, description: 'Automated CI/CD pipeline management' }
      ]
    },
    {
      category: 'AI & Analytics',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-600 to-blue-800',
      items: [
        { name: 'TensorFlow', icon: <Brain className="w-5 h-5" />, description: 'Machine learning platform for intelligent applications' },
        { name: 'PyTorch', icon: <Cpu className="w-5 h-5" />, description: 'Deep learning framework for research and production' },
        { name: 'OpenAI', icon: <Brain className="w-5 h-5" />, description: 'Advanced AI models and API integration' },
        { name: 'Apache Spark', icon: <Zap className="w-5 h-5" />, description: 'Unified analytics engine for big data processing' }
      ]
    },
    {
      category: 'Security & Infrastructure',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-700 to-blue-900',
      items: [
        { name: 'OAuth 2.0', icon: <Shield className="w-5 h-5" />, description: 'Industry-standard authorization framework' },
        { name: 'JWT', icon: <Shield className="w-5 h-5" />, description: 'Secure token-based authentication' },
        { name: 'SSL/TLS', icon: <Shield className="w-5 h-5" />, description: 'End-to-end encryption protocols' },
        { name: 'OWASP', icon: <Shield className="w-5 h-5" />, description: 'Security best practices and standards' }
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden px-[110px]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-pulse absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="animate-pulse absolute top-40 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-15" style={{ animationDelay: '2s' }}></div>
          <div className="animate-pulse absolute -bottom-32 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-25" style={{ animationDelay: '4s' }}></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, opacity: '0.4' }}></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Technology
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade technologies powering the next generation of digital solutions. 
            Built for scale, performance, and reliability.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-1000"></div>
                </div>

                {/* Category Header */}
                <div className="relative z-10 flex items-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${tech.color} text-white mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {tech.category}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent mt-2 group-hover:w-20 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Technology Items */}
                <div className="relative z-10 space-y-4">
                  {tech.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/40 hover:scale-[1.02] transition-all duration-300 group/item backdrop-blur-sm"
                    >
                      <div className="text-blue-400 mt-1 group-hover/item:text-blue-300 group-hover/item:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2 group-hover/item:text-blue-400 transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed group-hover/item:text-slate-300 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Hover indicator */}
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </div>
                  ))}
                </div>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner accent */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-blue-500 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center">
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Workflow className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Extraordinary?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let our experts architect the perfect technology stack tailored to your business objectives and scaling requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Innovation Text */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Innovation at 
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Light Speed</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Our technology stack evolves continuously, integrating cutting-edge solutions 
                to deliver unparalleled performance and user experiences that define tomorrow&apos;s digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Real-time Performance', 'Scalable Architecture', 'Future-Ready'].map((feature, index) => (
                  <div key={index} className="flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Tech Visualization */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Floating Tech Icons */}
                <div className="absolute inset-0">
                  <div className="animate-bounce absolute top-6 right-8 text-blue-400" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                    <Code2 className="w-8 h-8" />
                  </div>
                  <div className="animate-bounce absolute bottom-12 left-6 text-blue-500" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="animate-bounce absolute top-16 left-12 text-blue-300" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                    <Cloud className="w-7 h-7" />
                  </div>
                  <div className="animate-bounce absolute bottom-6 right-12 text-blue-600" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                    <Brain className="w-6 h-6" />
                  </div>
                </div>

                {/* Central Hub */}
                <div className="relative z-10 text-center py-12">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 shadow-2xl shadow-blue-500/30">
                    <Layers className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">Unified Ecosystem</div>
                  <div className="text-slate-400">Seamlessly Integrated</div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-blue-500/30 rounded-full animate-ping"></div>
                    <div className="absolute w-40 h-40 border-2 border-blue-400/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M200,150 Q250,50 350,80" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                  <path d="M200,150 Q150,250 50,220" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <path d="M200,150 Q50,100 80,50" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;