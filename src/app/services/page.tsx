"use client";
import React, { useState, useEffect } from "react";

// Sections
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
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("development");
  const [activeDevTab, setActiveDevTab] = useState("web-app");
  const [activeDesignTab, setActiveDesignTab] = useState("ui-design");

  const mainTabs = [
    { id: "development", label: "Development" },
    { id: "ai", label: "AI Solutions" },
    { id: "design", label: "Design & Strategy" },
    { id: "support", label: "Support & Infrastructure" },
  ];

  const developmentTabs = [
    { id: "web-app", label: "Web Development" },
    { id: "saas", label: "SaaS Products" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "wordpress", label: "WordPress" },
    { id: "cloud", label: "Cloud & DevOps" },
  ];

  const designTabs = [
    { id: "ui-design", label: "UI/UX Design" },
    { id: "digital-strategy", label: "Digital Strategy" },
    { id: "brand-identity", label: "Brand Identity" },
  ];

  // Set mounted to true on client side
  useEffect(() => {
    setMounted(true);
    
    // Set initial state based on hash if present
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      console.log('Initial hash detected:', hash);
      updateActiveTabFromHash(hash);
    }
  }, []);

  // Only run this effect on the client side after mounting
  useEffect(() => {
    if (!mounted) return;
    
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      updateActiveTabFromHash(hash);
    }
  }, [mounted]);

  const updateActiveTabFromHash = (hash: string) => {
    console.log('updateActiveTabFromHash called with:', hash);
    if (developmentTabs.some((tab: { id: string }) => tab.id === hash)) {
      console.log('Setting development tab:', hash);
      setActiveTab("development");
      setActiveDevTab(hash);
      return;
    }

    if (designTabs.some((tab: { id: string }) => tab.id === hash)) {
      console.log('Setting design tab:', hash);
      setActiveTab("design");
      setActiveDesignTab(hash);
      return;
    }

    if (hash === "ai-solutions") {
      console.log('Setting AI tab');
      setActiveTab("ai");
      return;
    }

    if (hash === "maintenance-support") {
      console.log('Setting support tab');
      setActiveTab("support");
      return;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        updateActiveTabFromHash(hash);
      }
    };

  
    // Handle initial load
    handleHashChange();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange, false);

    // Handle Next.js client-side navigation
    const handleRouteChange = (url: string) => {
      console.log('Route change detected:', url); // Debug log
      const hash = new URL(url, window.location.origin).hash.replace("#", "");
      if (hash) {
        console.log('Route change hash:', hash); // Debug log
        // Small timeout to ensure the DOM is ready
        setTimeout(() => {
          updateActiveTabFromHash(hash);
        }, 10);
      }
    };

    // Listen for route changes
    const router = require('next/router');
    router.events?.on('routeChangeComplete', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [developmentTabs, designTabs]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [activeTab, activeDevTab, activeDesignTab]);

  // Reset sub-tabs when main tab changes (only if not coming from hash)
  const handleMainTabChange = (tabId: string) => {
    console.log('handleMainTabChange called with:', tabId, 'hash:', window.location.hash); // Debug log
    setActiveTab(tabId);
    if (tabId === "development" && !window.location.hash) {
      console.log('Resetting development tab to web-app'); // Debug log
      setActiveDevTab("web-app");
    } else if (tabId === "design" && !window.location.hash) {
      console.log('Resetting design tab to ui-design'); // Debug log
      setActiveDesignTab("ui-design");
    }
  };

  // Show loading state until component is mounted on client side
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-pulse text-slate-400">Loading services...</div>
      </div>
    );
  }

  return (
    <main className="bg-slate-900">
      {/* Hero / intro */}
      <HeroSection />

      {/* Services Navigation Section */}
      <section className="bg-slate-900 py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs. 
              Choose a category to explore our specialized services.
            </p>
          </div>

          {/* Main Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
              <div className="flex flex-wrap justify-center gap-1">
                {mainTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleMainTabChange(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 transform scale-105"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-tabs for Development */}
          {activeTab === "development" && (
            <div className="flex justify-center mb-6">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-1 border border-slate-700/50">
                <div className="flex flex-wrap justify-center gap-1">
                  {developmentTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDevTab(tab.id)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        activeDevTab === tab.id
                          ? "bg-blue-500 text-white shadow-md"
                          : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sub-tabs for Design */}
          {activeTab === "design" && (
            <div className="flex justify-center mb-6">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-1 border border-slate-700/50">
                <div className="flex flex-wrap justify-center gap-1">
                  {designTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDesignTab(tab.id)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        activeDesignTab === tab.id
                          ? "bg-blue-500 text-white shadow-md"
                          : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active Tab Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/30 rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-slate-300 text-sm">
                {activeTab === "development" && `Development: ${developmentTabs.find(tab => tab.id === activeDevTab)?.label}`}
                {activeTab === "design" && `Design: ${designTabs.find(tab => tab.id === activeDesignTab)?.label}`}
                {activeTab === "ai" && "AI Solutions"}
                {activeTab === "support" && "Support & Infrastructure"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content - Single Service Display */}
      <div className="bg-slate-900">
        {/* Development Content */}
        {activeTab === "development" && (
          <div>
            {activeDevTab === "web-app" && <section id="web-app"><WebAppDevelopment /></section>}
            {activeDevTab === "saas" && <section id="saas"><SaaSProductDev /></section>}
            {activeDevTab === "ecommerce" && <section id="ecommerce"><EcommerceSolutions /></section>}
            {activeDevTab === "wordpress" && <section id="wordpress"><WordPressServices /></section>}
            {activeDevTab === "cloud" && <section id="cloud"><CloudDevOps /></section>}
          </div>
        )}

        {/* AI Solutions Content */}
        {activeTab === "ai" && <section id="ai-solutions"><AISolutions /></section>}

        {/* Design Content */}
        {activeTab === "design" && (
          <div>
            {activeDesignTab === "ui-design" && <section id="ui-design"><UIDesign /></section>}
            {activeDesignTab === "digital-strategy" && <section id="digital-strategy"><DigitalStrategy /></section>}
            {activeDesignTab === "brand-identity" && <section id="brand-identity"><BrandIdentity /></section>}
          </div>
        )}

        {/* Support Content */}
        {activeTab === "support" && <section id="maintenance-support"><MaintenanceSupport /></section>}
      </div>

      {/* Final CTA */}
      <FinalSection />
    </main>
  );
}