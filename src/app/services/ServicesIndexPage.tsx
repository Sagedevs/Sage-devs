"use client";
import React, { useState, useEffect } from "react";
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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "development") setActiveDevTab("web-app");
    if (tabId === "design") setActiveDesignTab("ui-design");
  };

  const handleSubTabChange = (tabId: string, isDesign = false) => {
    if (isDesign) {
      setActiveDesignTab(tabId);
    } else {
      setActiveDevTab(tabId);
    }
  };

  // Render only the active content
  const renderActiveContent = () => {
    if (activeTab === "development") {
      switch (activeDevTab) {
        case "web-app":
          return <section id="web-app"><WebAppDevelopment /></section>;
        case "saas":
          return <section id="saas"><SaaSProductDev /></section>;
        case "ecommerce":
          return <section id="ecommerce"><EcommerceSolutions /></section>;
        case "wordpress":
          return <section id="wordpress"><WordPressServices /></section>;
        case "cloud":
          return <section id="cloud"><CloudDevOps /></section>;
        default:
          return null;
      }
    } else if (activeTab === "ai") {
      return <section id="ai-solutions"><AISolutions /></section>;
    } else if (activeTab === "design") {
      switch (activeDesignTab) {
        case "ui-design":
          return <section id="ui-design"><UIDesign /></section>;
        case "digital-strategy":
          return <section id="digital-strategy"><DigitalStrategy /></section>;
        case "brand-identity":
          return <section id="brand-identity"><BrandIdentity /></section>;
        default:
          return null;
      }
    } else if (activeTab === "support") {
      return <section id="maintenance-support"><MaintenanceSupport /></section>;
    }
    return null;
  };

  return (
    <main className="bg-slate-900">
      <HeroSection />

      {/* Tabs Section */}
      <section className="bg-slate-900 py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Comprehensive solutions tailored to your business needs.
            </p>
          </div>

          {/* Tabs Container */}
          <div className="space-y-4">
            {/* Main Tabs */}
            <div className="flex justify-center">
              <div className="relative rounded-2xl p-1.5 shadow-2xl border bg-gradient-to-r from-slate-800 via-slate-800/95 to-slate-800 border-slate-700/50">
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
              <div className="relative rounded-xl p-1 border bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-800/80 border-slate-700/30">
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
              <div className="relative rounded-xl p-1 border bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-800/80 border-slate-700/30">
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
      </section>

      {/* Content Sections - Only render active content */}
      <div className="bg-slate-900">
        {renderActiveContent()}
      </div>

      <FinalSection />
    </main>
  );
}