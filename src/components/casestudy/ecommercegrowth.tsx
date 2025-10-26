"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Diamond, Rocket, Star, Zap, Brain, Globe, BarChart3, Smartphone, TrendingUp, Award, ArrowRight } from 'lucide-react';

const EcommerceGrowth = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const metrics = [
    { value: "385%", label: "Revenue Surge", Icon: Diamond },
    { value: "7.2x", label: "Conversion Beast", Icon: Rocket },
    { value: "96%", label: "Retention Master", Icon: Star },
    { value: "0.8s", label: "Lightning Speed", Icon: Zap }
  ];

  const features = [
    {
      title: "Neural Commerce AI",
      description: "Revolutionary AI engine that predicts customer desires before they know them, creating hyper-personalized shopping experiences that feel like magic.",
      impact: "+450% Engagement",
      Icon: Brain
    },
    {
      title: "Quantum Omnichannel",
      description: "Seamlessly merge physical and digital realms with our advanced omnichannel ecosystem that creates unforgettable customer journeys.",
      impact: "+280% Loyalty",
      Icon: Globe
    },
    {
      title: "Predictive Analytics Matrix",
      description: "Advanced predictive models that forecast trends, optimize inventory, and maximize profits with surgical precision and lightning speed.",
      impact: "+350% ROI",
      Icon: BarChart3
    },
    {
      title: "Next-Gen Mobile Engine",
      description: "Ultra-responsive mobile architecture with PWA capabilities that delivers console-grade performance on any device.",
      impact: "+420% Mobile Sales",
      Icon: Smartphone
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Animated Background with Flowing Gradients */}
      <div className="absolute inset-0">
        {/* Primary flowing background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(29, 78, 216, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, #000000 0%, #1e1e1e 25%, #2d3748 50%, #1e1e1e 75%, #000000 100%)
            `,
            animation: 'gradientShift 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary animated layer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 60% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 30% 30%, rgba(29, 78, 216, 0.2) 0%, transparent 50%)
            `,
            animation: 'gradientShiftReverse 12s ease-in-out infinite'
          }}
        />

        {/* Floating geometric shapes - Hidden on mobile for performance */}
        <div className="hidden md:block">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                background: `rgba(59, 130, 246, 0.6)`,
                borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                animation: `floatAround ${8 + Math.random() * 12}s linear infinite`,
                animationDelay: `${Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        {/* Pulsing accent lights */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-blue-700 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { 
            background: radial-gradient(circle at 20% 80%, rgba(29, 78, 216, 0.4) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.3) 0%, transparent 50%),
                       radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                       linear-gradient(135deg, #000000 0%, #1e1e1e 25%, #2d3748 50%, #1e1e1e 75%, #000000 100%);
          }
          50% { 
            background: radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.5) 0%, transparent 50%),
                       radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.4) 0%, transparent 50%),
                       radial-gradient(circle at 60% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                       linear-gradient(225deg, #1e1e1e 0%, #2d3748 25%, #4a5568 50%, #2d3748 75%, #1e1e1e 100%);
          }
        }

        @keyframes gradientShiftReverse {
          0%, 100% { 
            background: radial-gradient(circle at 60% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                       radial-gradient(circle at 30% 30%, rgba(29, 78, 216, 0.2) 0%, transparent 50%);
          }
          50% { 
            background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                       radial-gradient(circle at 70% 70%, rgba(29, 78, 216, 0.3) 0%, transparent 50%);
          }
        }

        @keyframes floatAround {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(100px, -50px) rotate(90deg); }
          50% { transform: translate(200px, 20px) rotate(180deg); }
          75% { transform: translate(50px, 80px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-block mb-6 md:mb-8">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs sm:text-sm font-bold rounded-full border border-blue-400 border-opacity-20 shadow-2xl backdrop-blur-sm">
              <TrendingUp className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              LEGENDARY SUCCESS STORY
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-gray-100 to-blue-100 bg-clip-text text-transparent">
              E-commerce
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
              DOMINATION
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            Witness the most <span className="text-blue-400 font-bold">explosive transformation</span> in e-commerce history. 
            From struggling retailer to <span className="text-blue-500 font-bold">industry titan</span> in just 6 months.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900 bg-opacity-50 backdrop-blur-xl border border-blue-500 border-opacity-20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-700 cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-500 flex justify-center">
                  <metric.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </div>
                <p className="text-gray-300 font-bold text-xs sm:text-sm md:text-base group-hover:text-white transition-colors">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-20">
          {/* Challenge & Solution - Left */}
          <div className={`space-y-8 md:space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'}`}>
            {/* The Crisis */}
            <div className="relative bg-gray-900 bg-opacity-60 backdrop-blur-xl border border-blue-600 border-opacity-30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 flex items-center">
                  <span className="w-2 sm:w-3 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-3 sm:mr-4"></span>
                  THE CRISIS
                </h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-medium">
                  A premium lifestyle empire with 15+ years of dominance was <span className="text-blue-400 font-bold">bleeding revenue</span>. 
                  Their ancient e-commerce platform was a <span className="text-blue-500 font-bold">conversion killer</span>, 
                  driving customers straight into competitors&apos; arms.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 sm:p-4 text-center border border-blue-400 border-opacity-30">
                    <div className="text-xl sm:text-2xl font-black text-white mb-1 sm:mb-2">-47%</div>
                    <p className="text-blue-200 font-bold text-xs sm:text-sm">Revenue Crash</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-xl p-3 sm:p-4 text-center border border-blue-400 border-opacity-30">
                    <div className="text-xl sm:text-2xl font-black text-white mb-1 sm:mb-2">84%</div>
                    <p className="text-blue-300 font-bold text-xs sm:text-sm">Bounce Rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Revolution */}
            <div className="relative bg-gray-900 bg-opacity-60 backdrop-blur-xl border border-blue-500 border-opacity-30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 flex items-center">
                  <span className="w-2 sm:w-3 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-3 sm:mr-4"></span>
                  THE REVOLUTION
                </h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                  We unleashed a <span className="text-blue-400 font-bold">digital transformation tsunami</span> that 
                  revolutionized every aspect of their business. This wasn&apos;t just an upgrade – it was a complete 
                  <span className="text-blue-500 font-bold"> metamorphosis</span>.
                </p>
                
                {/* Platform Expertise */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-bold text-blue-300 mb-3 sm:mb-4 flex items-center">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Platform Mastery
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['WordPress', 'WooCommerce', 'Shopify', 'Magento', 'BigCommerce', 'Custom'].map((platform) => (
                      <span 
                        key={platform} 
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-xs sm:text-sm rounded-full border border-blue-400 border-opacity-20 hover:scale-105 transition-all cursor-pointer shadow-lg"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Power Stack */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-bold text-blue-300 mb-3 sm:mb-4 flex items-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Power Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['React 18', 'Next.js 14', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Stripe', 'PayPal'].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-xs sm:text-sm rounded-full border border-blue-400 border-opacity-20 hover:scale-105 transition-all cursor-pointer shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lightning Timeline */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-300 mb-3 sm:mb-4 flex items-center">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Lightning Timeline
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { phase: "Deep Discovery & Strategy", duration: "1 week" },
                      { phase: "Revolutionary Design", duration: "2 weeks" },
                      { phase: "Power Development", duration: "6 weeks" },
                      { phase: "Launch & Domination", duration: "1 week" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-2 sm:p-3 border border-blue-400 border-opacity-30">
                        <span className="text-white font-bold text-xs sm:text-sm">{item.phase}</span>
                        <span className="text-blue-300 font-black text-sm sm:text-base">{item.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Impact - Right */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900 bg-opacity-60 backdrop-blur-xl border border-blue-500 border-opacity-20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-700 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 gap-2">
                    <div className="flex items-center">
                      <feature.Icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                      <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-blue-200 transition-all">
                        {feature.title}
                      </h4>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black text-xs rounded-full border border-blue-400 border-opacity-20 shadow-lg whitespace-nowrap">
                      {feature.impact}
                    </span>
                  </div>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Results Showcase */}
            <div className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center overflow-hidden border border-blue-400 border-opacity-20">
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20" />
              <div className="relative z-10">
                <h4 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  LEGENDARY RESULTS
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-blue-800 bg-opacity-30 rounded-xl p-3 sm:p-4 border border-white border-opacity-20">
                    <div className="text-2xl sm:text-3xl font-black text-white mb-1">$4.2M+</div>
                    <p className="text-blue-200 font-bold text-xs sm:text-sm">Revenue Explosion</p>
                  </div>
                  <div className="bg-blue-800 bg-opacity-30 rounded-xl p-3 sm:p-4 border border-white border-opacity-20">
                    <div className="text-2xl sm:text-3xl font-black text-white mb-1">3 Months</div>
                    <p className="text-blue-200 font-bold text-xs sm:text-sm">ROI Achieved</p>
                  </div>
                </div>
                <div className="bg-blue-800 bg-opacity-30 rounded-xl p-4 sm:p-6 border border-white border-opacity-20">
                  <p className="text-white text-sm sm:text-base font-bold mb-3 italic">
                    &quot;This transformation didn&apos;t just save our business – it made us the undisputed leader in our market. 
                    We&apos;ve never seen results this extraordinary.&quot;
                  </p>
                  <p className="text-blue-200 font-bold text-xs sm:text-sm">
                    - Sarah Mitchell, CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">DOMINATE</span> Your Market?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 font-medium">
              Join the revolution. Transform your business into an unstoppable force.
            </p>
            <button className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white font-black text-sm sm:text-base md:text-lg py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-blue-400 border-opacity-20 overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                START YOUR DOMINATION
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceGrowth;