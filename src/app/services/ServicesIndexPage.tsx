"use client";
import React, { useState, useEffect, useRef } from "react";
import { Code2, Bot, Palette, Wrench } from "lucide-react";


import HeroSection from "@/components/services/herosection";
import FinalSection from "@/components/services/finalsection";
import AISolutions from "@/components/services/AISolutions";
import WebAppDevelopment from "@/components/services/WebAppDevelopment";
import SaaSProductDev from "@/components/services/SaaSProductDev";
import EcommerceSolutions from "@/components/services/EcommerceSolutions";
import CloudDevOps from "@/components/services/CloudDevOps";
import WordPressServices from "@/components/services/WordPressServices";
import UIDesign from "@/components/services/UIDesign";
import DigitalStrategy from "@/components/services/DigitalStrategy";
import BrandIdentity from "@/components/services/BrandIdentity";
import MaintenanceSupport from "@/components/services/MaintenanceSupport";

export default function ServicesIndexPage() {
  const [activeTab, setActiveTab] = useState("development");
  const [activeDevTab, setActiveDevTab] = useState("web-app");
  const [activeDesignTab, setActiveDesignTab] = useState("ui-design");
  const [isSticky, setIsSticky] = useState(false);

  const tabsRef = useRef<HTMLDivElement>(null);
  const servicesStartRef = useRef<HTMLElement>(null);
  const servicesEndRef = useRef<HTMLDivElement>(null);

  const mainTabs = [
    { id: "development", label: "Development", icon: Code2 },
    { id: "ai", label: "AI Solutions", icon: Bot },
    { id: "design", label: "Design & Strategy", icon: Palette },
    { id: "support", label: "Support & Infrastructure", icon: Wrench },
  ];

  const developmentTabs = React.useMemo(() => [
    { id: "web-app", label: "Web Development" },
    { id: "saas", label: "SaaS Products" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "wordpress", label: "WordPress" },
    { id: "cloud", label: "Cloud & DevOps" },
  ], []);

  const designTabs = React.useMemo(() => [
    { id: "ui-design", label: "UI/UX Design" },
    { id: "digital-strategy", label: "Digital Strategy" },
    { id: "brand-identity", label: "Brand Identity" },
  ], []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    if (developmentTabs.find(tab => tab.id === hash)) {
      setActiveTab("development");
      setActiveDevTab(hash);
    } else if (designTabs.find(tab => tab.id === hash)) {
      setActiveTab("design");
      setActiveDesignTab(hash);
    } else if (hash === "ai-solutions") {
      setActiveTab("ai");
    } else if (hash === "maintenance-support") {
      setActiveTab("support");
    }
  }, [developmentTabs, designTabs]);

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesStartRef.current || !servicesEndRef.current) return;

      const servicesStart = servicesStartRef.current.offsetTop;
      const scrollPosition = window.scrollY;
      const navbarHeight = 80;

      // Smoother sticky behavior with threshold
      const shouldBeSticky = scrollPosition >= servicesStart - navbarHeight - 10;
      
      if (shouldBeSticky !== isSticky) {
        setIsSticky(shouldBeSticky);
      }
    };

    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isSticky]);

  // Smooth scroll to section when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "development") setActiveDevTab("web-app");
    if (tabId === "design") setActiveDesignTab("ui-design");
    
    // Smooth scroll to services section
    setTimeout(() => {
      servicesStartRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleSubTabChange = (tabId: string, isDesign = false) => {
    if (isDesign) {
      setActiveDesignTab(tabId);
    } else {
      setActiveDevTab(tabId);
    }
    
    // Smooth scroll to services section
    setTimeout(() => {
      servicesStartRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <main className="bg-slate-900">
      <HeroSection />

      {/* Tabs Section */}
      <section 
        ref={servicesStartRef}
        className="bg-slate-900 py-16 border-y border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Comprehensive solutions tailored to your business needs.
            </p>
          </div>

          {/* Sticky Tabs Container - UPDATED */}
          <div 
            ref={tabsRef}
            className={`transition-all duration-300 ease-in-out ${
              isSticky 
                ? "fixed top-20 left-0 right-0 z-40 py-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-xl" 
                : "relative"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Main Tabs */}
              <div className="flex justify-center mb-4">
                <div className={`relative rounded-2xl p-1.5 shadow-2xl border transition-all duration-300 ${
                  isSticky 
                    ? "bg-slate-800/90 border-slate-600/50" 
                    : "bg-gradient-to-r from-slate-800 via-slate-800/95 to-slate-800 border-slate-700/50"
                }`}>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 rounded-2xl"></div>
                  
                  <div className="relative flex flex-wrap justify-center gap-2">
                    {mainTabs.map((tab) => {
                      const IconComponent = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className={`group relative px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap overflow-hidden ${
                            activeTab === tab.id
                              ? "text-white shadow-lg"
                              : "text-slate-300 hover:text-white"
                          }`}
                        >
                          {/* Active background gradient */}
                          {activeTab === tab.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-xl">
                              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                            </div>
                          )}
                          
                          {/* Hover background */}
                          {activeTab !== tab.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/0 via-slate-700/50 to-slate-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                          )}
                          
                          <span className="relative flex items-center gap-2">
                            <IconComponent className="w-5 h-5" />
                            {tab.label}
                          </span>

                          {/* Active indicator */}
                          {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Development Sub-tabs */}
              <div className={`flex justify-center transition-all duration-300 ${
                activeTab === "development" ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
              }`}>
                <div className={`relative rounded-xl p-1 border transition-all duration-300 ${
                  isSticky 
                    ? "bg-slate-800/80 border-slate-600/30" 
                    : "bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-800/80 border-slate-700/30"
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-600/5 to-blue-600/5 rounded-xl"></div>
                  
                  <div className="relative flex flex-wrap justify-center gap-1">
                    {developmentTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleSubTabChange(tab.id, false)}
                        className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap overflow-hidden ${
                          activeDevTab === tab.id
                            ? "text-white shadow-md"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {activeDevTab === tab.id && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg"></div>
                        )}
                        
                        {activeDevTab !== tab.id && (
                          <div className="absolute inset-0 bg-slate-700/0 hover:bg-slate-700/50 transition-colors duration-300 rounded-lg"></div>
                        )}
                        
                        <span className="relative">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design Sub-tabs */}
              <div className={`flex justify-center transition-all duration-300 ${
                activeTab === "design" ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
              }`}>
                <div className={`relative rounded-xl p-1 border transition-all duration-300 ${
                  isSticky 
                    ? "bg-slate-800/80 border-slate-600/30" 
                    : "bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-800/80 border-slate-700/30"
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-600/5 to-blue-600/5 rounded-xl"></div>
                  
                  <div className="relative flex flex-wrap justify-center gap-1">
                    {designTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleSubTabChange(tab.id, true)}
                        className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap overflow-hidden ${
                          activeDesignTab === tab.id
                            ? "text-white shadow-md"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {activeDesignTab === tab.id && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg"></div>
                        )}
                        
                        {activeDesignTab !== tab.id && (
                          <div className="absolute inset-0 bg-slate-700/0 hover:bg-slate-700/50 transition-colors duration-300 rounded-lg"></div>
                        )}
                        
                        <span className="relative">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer to prevent content jump when tabs become sticky */}
          {isSticky && <div className="h-32" />}
        </div>
      </section>

      {/* Content Sections - ALL RENDERED, ONLY SHOW/HIDE */}
      <div className="bg-slate-900" ref={servicesEndRef}>
        {/* Your content sections remain the same */}
        {/* Development Content */}
        <div className={activeTab === "development" ? "block" : "hidden"}>
          <div className={activeDevTab === "web-app" ? "block" : "hidden"}>
            <section id="web-app"><WebAppDevelopment /></section>
          </div>
          <div className={activeDevTab === "saas" ? "block" : "hidden"}>
            <section id="saas"><SaaSProductDev /></section>
          </div>
          <div className={activeDevTab === "ecommerce" ? "block" : "hidden"}>
            <section id="ecommerce"><EcommerceSolutions /></section>
          </div>
          <div className={activeDevTab === "wordpress" ? "block" : "hidden"}>
            <section id="wordpress"><WordPressServices /></section>
          </div>
          <div className={activeDevTab === "cloud" ? "block" : "hidden"}>
            <section id="cloud"><CloudDevOps /></section>
          </div>
        </div>

        {/* AI Content */}
        <div className={activeTab === "ai" ? "block" : "hidden"}>
          <section id="ai-solutions"><AISolutions /></section>
        </div>

        {/* Design Content */}
        <div className={activeTab === "design" ? "block" : "hidden"}>
          <div className={activeDesignTab === "ui-design" ? "block" : "hidden"}>
            <section id="ui-design"><UIDesign /></section>
          </div>
          <div className={activeDesignTab === "digital-strategy" ? "block" : "hidden"}>
            <section id="digital-strategy"><DigitalStrategy /></section>
          </div>
          <div className={activeDesignTab === "brand-identity" ? "block" : "hidden"}>
            <section id="brand-identity"><BrandIdentity /></section>
          </div>
        </div>

        {/* Support Content */}
        <div className={activeTab === "support" ? "block" : "hidden"}>
          <section id="maintenance-support"><MaintenanceSupport /></section>
        </div>
      </div>

      <FinalSection />
    </main>
  );
}