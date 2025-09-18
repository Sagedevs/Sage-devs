"use client";
import React, { useState, useEffect, useRef } from 'react';

const EcommerceGrowth = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const metrics = [
    { value: "285%", label: "Revenue Growth", icon: "📈" },
    { value: "4.7x", label: "Conversion Rate", icon: "🎯" },
    { value: "92%", label: "Customer Retention", icon: "💝" },
    { value: "1.8s", label: "Page Load Time", icon: "⚡" }
  ];

  const features = [
    {
      title: "AI-Powered Personalization",
      description: "Advanced machine learning algorithms analyze customer behavior to deliver personalized shopping experiences that increase engagement by 340%.",
      impact: "+340% Engagement"
    },
    {
      title: "Omnichannel Integration",
      description: "Seamlessly connect online and offline touchpoints to create a unified customer journey that drives loyalty and repeat purchases.",
      impact: "+180% Loyalty"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Real-time insights and predictive analytics help optimize inventory, pricing, and marketing strategies for maximum profitability.",
      impact: "+250% ROI"
    },
    {
      title: "Mobile-First Architecture",
      description: "Lightning-fast mobile experiences with progressive web app capabilities that convert 3x better than traditional approaches.",
      impact: "+300% Mobile Sales"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(59, 130, 246, 0.15) 0%, 
          rgba(30, 64, 175, 0.05) 25%, 
          transparent 50%), 
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%)`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Cursor Following Glow */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none opacity-30 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-600 bg-opacity-20 text-blue-300 text-sm font-medium rounded-full border border-blue-500 border-opacity-30">
              Success Story
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            E-commerce
            <span className="block text-blue-400">Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming a traditional retail business into a digital powerhouse through cutting-edge technology, 
            strategic optimization, and customer-centric design principles.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-sm border border-blue-500 border-opacity-20 rounded-2xl p-6 text-center hover:bg-opacity-10 hover:border-opacity-40 transition-all duration-500 cursor-pointer transform hover:scale-105"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                {metric.value}
              </div>
              <p className="text-gray-300 text-sm font-medium">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Challenge & Solution */}
          <div className={`space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'}`}>
            {/* Challenge */}
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-blue-500 border-opacity-20 rounded-3xl p-8 hover:bg-opacity-10 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-8 bg-blue-500 rounded-full mr-4"></span>
                The Challenge
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our client, a premium lifestyle brand with 15+ years in traditional retail, faced declining sales 
                and increasing competition from digital-native brands. Their existing e-commerce platform was 
                outdated, mobile-unfriendly, and failing to capture the modern consumer&apos;s expectations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black bg-opacity-30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">-35%</div>
                  <p className="text-gray-400 text-sm">Sales Decline</p>
                </div>
                <div className="bg-black bg-opacity-30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">78%</div>
                  <p className="text-gray-400 text-sm">Bounce Rate</p>
                </div>
              </div>
            </div>

            {/* Solution Overview */}
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-blue-500 border-opacity-20 rounded-3xl p-8 hover:bg-opacity-10 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-8 bg-blue-500 rounded-full mr-4"></span>
                Our Solution
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We implemented a comprehensive digital transformation strategy, combining modern technology 
                stack with data-driven optimization and user experience excellence.
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'MongoDB', 'AWS', 'Stripe', 'Algolia'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-blue-600 bg-opacity-20 text-blue-300 text-sm rounded-full border border-blue-500 border-opacity-30 hover:bg-opacity-30 transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Project Timeline</h4>
                <div className="space-y-3">
                  {[
                    { phase: "Discovery & Audit", duration: "2 weeks" },
                    { phase: "Design & Prototyping", duration: "3 weeks" },
                    { phase: "Development & Testing", duration: "8 weeks" },
                    { phase: "Launch & Optimization", duration: "2 weeks" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-black bg-opacity-20 rounded-lg p-3">
                      <span className="text-gray-300">{item.phase}</span>
                      <span className="text-blue-400 font-medium">{item.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Results */}
          <div className={`space-y-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white bg-opacity-5 backdrop-blur-sm border border-blue-500 border-opacity-20 rounded-3xl p-8 hover:bg-opacity-10 hover:border-opacity-40 transition-all duration-500 cursor-pointer transform hover:scale-102"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h4>
                  <span className="px-3 py-1 bg-blue-600 bg-opacity-30 text-blue-300 text-sm font-bold rounded-full border border-blue-500 border-opacity-50">
                    {feature.impact}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

            {/* Final Results */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Final Results</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$2.8M+</div>
                  <p className="text-blue-100 text-sm">Additional Revenue</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">6 Months</div>
                  <p className="text-blue-100 text-sm">ROI Achievement</p>
                </div>
              </div>
              <p className="text-blue-100 text-lg">
                &ldquo;This transformation exceeded all our expectations. We&apos;ve not just recovered from our decline, 
                but positioned ourselves as a leader in our industry.&rdquo;
              </p>
              <p className="text-blue-200 text-sm mt-3 font-medium">
                — Sarah Mitchell, CEO
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <span className="flex items-center">
              Start Your Growth Journey
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceGrowth;