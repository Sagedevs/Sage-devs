"use client";
import React, { useState } from 'react';
import { ShoppingCart, Store, CreditCard, Layout, TrendingUp } from 'lucide-react';
import Link from "next/link";

const EcommerceSolutions = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const ecommerceServices = [
    {
      id: 1,
      icon: Store,
      title: "Custom E-commerce Store Development",
      subtitle: "Tailored Online Shopping Experiences",
      description: "We design and develop bespoke e-commerce platforms that perfectly align with your brand identity and business objectives, ensuring a unique and engaging customer journey.",
      features: ["Responsive design for all devices", "Intuitive product catalog management", "Secure checkout flow & payment integration", "Personalized user accounts & dashboards"],
      technologies: ["Shopify Plus", "WooCommerce", "Magento", "Custom React/Next.js"],
      stats: "100+ Stores",
      timeline: "8-16 weeks",
      complexity: "Enterprise"
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Payment Gateway & Integrations",
      subtitle: "Seamless & Secure Transactions",
      description: "Integrate popular and secure payment gateways like Stripe, PayPal, and more, along with essential third-party services for shipping, analytics, and CRM to streamline operations.",
      features: ["Multiple payment options (credit card, digital wallets)", "Fraud detection & security protocols", "Shipping carrier APIs integration", "CRM & marketing automation hooks"],
      technologies: ["Stripe", "PayPal", "Square", "Authorize.Net"],
      stats: "200+ Integrations",
      timeline: "4-8 weeks",
      complexity: "Critical"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "E-commerce SEO & Marketing",
      subtitle: "Drive Traffic & Conversions",
      description: "Boost your online store's visibility and attract more customers through effective SEO strategies, targeted marketing campaigns, and data-driven optimization techniques.",
      features: ["Keyword research & on-page SEO", "Content marketing for product pages", "Social media integration & campaigns", "Email marketing & automation"],
      technologies: ["Google Analytics", "SEMrush", "Mailchimp", "Hootsuite"],
      stats: "150+ Campaigns",
      timeline: "Ongoing",
      complexity: "Growth"
    },
    {
      id: 4,
      icon: Layout,
      title: "Shipping & Logistics Solutions",
      subtitle: "Efficient Order Fulfillment",
      description: "Optimize your supply chain and delivery process with robust shipping integrations, inventory management, and order tracking systems for a smooth customer experience.",
      features: ["Real-time shipping rate calculation", "Multi-carrier shipping integration", "Warehouse & inventory management", "Order tracking & notifications"],
      technologies: ["FedEx API", "UPS API", "DHL API", "ShipStation"],
      stats: "90+ Systems",
      timeline: "6-10 weeks",
      complexity: "Logistical"
    },
    {
      id: 5,
      icon: Layout,
      title: "Mobile Commerce & PWA",
      subtitle: "Shopping on the Go",
      description: "Reach customers everywhere with optimized mobile shopping experiences, including responsive web design and Progressive Web Apps (PWAs) for app-like performance and engagement.",
      features: ["Mobile-first responsive design", "Progressive Web App (PWA) development", "Accelerated Mobile Pages (AMP) implementation", "Optimized mobile checkout"],
      technologies: ["React Native (for apps)", "AMP", "Next.js (mobile-optimized)", "Service Workers"],
      stats: "75+ Mobile Stores",
      timeline: "10-18 weeks",
      complexity: "Modern"
    },
    {
      id: 6,
      icon: Layout,
      title: "Pricing & Promotion Management",
      subtitle: "Maximize Revenue & Engagement",
      description: "Implement dynamic pricing strategies, discount codes, loyalty programs, and promotional banners to attract and retain customers, boosting your sales and customer lifetime value.",
      features: ["Dynamic pricing rules & A/B testing", "Coupon & discount code generation", "Loyalty program integration", "Personalized promotions & bundles"],
      technologies: ["Promotion Engines", "CRM Integration", "A/B Testing Tools", "Marketing Automation"],
      stats: "120+ Strategies",
      timeline: "3-7 weeks",
      complexity: "Marketing"
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Enterprise': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'Critical': return 'text-red-400 border-red-500/30 bg-red-500/10';
      case 'Growth': return 'text-lime-400 border-lime-500/30 bg-lime-500/10';
      case 'Logistical': return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
      case 'Modern': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      case 'Marketing': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      default: return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0 z-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (2 + Math.random() * 2) + 's'
              }}
            />
          ))}
        </div>

        {/* Gradient Background Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-green-500/15 via-green-500/8 to-transparent rounded-full blur-3xl opacity-70 animate-blob mix-blend-lighten" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-lime-500/12 via-lime-500/6 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000 mix-blend-lighten" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000 mix-blend-lighten" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.08] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-8 mx-auto">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-green-400 font-bold tracking-wide flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                E-commerce Solutions
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Boost Your Online Business with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              E-commerce Solutions
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed mx-auto">
            We provide comprehensive e-commerce development services to help businesses establish 
            and grow their online presence. From custom online stores to platform integrations, 
            we craft engaging shopping experiences that drive sales and customer loyalty.
          </p>
        </div>

        {/* E-commerce Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {ecommerceServices.map((service) => (
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
                
                <style jsx>{`
                  @keyframes gradientShift {
                    0% { background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                    50% { background: linear-gradient(225deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                    100% { background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(59, 130, 246, 0.05)); }
                  }
                `}</style>

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
                      <div className="text-xs font-bold text-blue-400 mb-1">{service.stats}</div>
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
                    <p className="text-blue-400 font-medium text-xs uppercase tracking-wide">
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
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      Technical Capabilities
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xxs text-slate-400 group/item">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-blue-300 transition-colors" />
                          <span className="group-hover/item:text-slate-300 transition-colors leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                      Development Timeline
                    </h4>
                    <div className="text-xxs text-slate-400">
                      {service.timeline} typical delivery
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
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
              Our E-commerce Tech Stack
            </span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Store className="w-5 h-5 text-blue-400" />
                E-commerce Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Shopify Plus", "WooCommerce", "Magento 2", "BigCommerce", "Salesforce Commerce Cloud"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-cyan-400" />
                Payments & Integrations
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Stripe", "PayPal", "Square", "Authorize.Net", "Klarna", "Afterpay", "Google Pay", "Apple Pay"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/30 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                Marketing & Analytics
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Google Analytics", "SEMrush", "Mailchimp", "Klaviyo", "Hotjar", "Optimizely", "Ahrefs"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xxs bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
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
            <Link href="/Contact" className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 text-base">
              Launch Your Store
              <Store className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies#case-studies-grid" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-blue-500/30 transition-all duration-300 text-base">
              View E-commerce Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceSolutions;