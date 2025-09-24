"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

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

interface TabConfig {
  mainTab: string;
  subTab: string;
  designSubTab: string;
}

interface TabItem {
  id: string;
  label: string;
}

export default function ServicesIndexPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("development");
  const [activeDevTab, setActiveDevTab] = useState("web-app");
  const [activeDesignTab, setActiveDesignTab] = useState("ui-design");
  const [isNavigating, setIsNavigating] = useState(false);
  const [hasScrolledToTarget, setHasScrolledToTarget] = useState(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastHashRef = useRef<string>("");

  const mainTabs: TabItem[] = [
    { id: "development", label: "Development" },
    { id: "ai", label: "AI Solutions" },
    { id: "design", label: "Design & Strategy" },
    { id: "support", label: "Support & Infrastructure" },
  ];

  const developmentTabs: TabItem[] = [
    { id: "web-app", label: "Web Development" },
    { id: "saas", label: "SaaS Products" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "wordpress", label: "WordPress" },
    { id: "cloud", label: "Cloud & DevOps" },
  ];

  const designTabs: TabItem[] = [
    { id: "ui-design", label: "UI/UX Design" },
    { id: "digital-strategy", label: "Digital Strategy" },
    { id: "brand-identity", label: "Brand Identity" },
  ];

  // Improved hash to tab mapping
  const getTabsFromHash = useCallback((hash: string): TabConfig | null => {
    if (!hash) return null;

    // Development tabs
    if (developmentTabs.some(tab => tab.id === hash)) {
      return {
        mainTab: "development",
        subTab: hash,
        designSubTab: activeDesignTab
      };
    }

    // Design tabs
    if (designTabs.some(tab => tab.id === hash)) {
      return {
        mainTab: "design",
        subTab: activeDevTab,
        designSubTab: hash
      };
    }

    // AI Solutions
    if (hash === "ai-solutions") {
      return {
        mainTab: "ai",
        subTab: activeDevTab,
        designSubTab: activeDesignTab
      };
    }

    // Support
    if (hash === "maintenance-support") {
      return {
        mainTab: "support",
        subTab: activeDevTab,
        designSubTab: activeDesignTab
      };
    }

    return null;
  }, [developmentTabs, designTabs, activeDevTab, activeDesignTab]);

  const scrollToElement = useCallback((hash: string) => {
    const element = document.getElementById(hash);
    if (element && !hasScrolledToTarget) {
      setHasScrolledToTarget(true);
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
      });

      // Clear the flag after scroll is complete
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setHasScrolledToTarget(false);
      }, 1500); // Give enough time for smooth scroll to complete
    }
  }, [hasScrolledToTarget]);

  const updateTabsFromHash = useCallback((hash: string, shouldScroll = false) => {
    if (!hash || hash === lastHashRef.current) return;

    console.log('updateTabsFromHash called with:', hash);
    
    const tabConfig = getTabsFromHash(hash);
    if (!tabConfig) return;

    // Update the last hash reference
    lastHashRef.current = hash;
    setIsNavigating(true);
    
    // Clear any existing timeout
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    // Update tabs immediately
    setActiveTab(tabConfig.mainTab);
    setActiveDevTab(tabConfig.subTab);
    setActiveDesignTab(tabConfig.designSubTab);

    // Handle scrolling after a short delay to ensure content is rendered
    navigationTimeoutRef.current = setTimeout(() => {
      if (shouldScroll) {
        scrollToElement(hash);
      }
      setIsNavigating(false);
    }, 150);
  }, [getTabsFromHash, scrollToElement]);

  // Initial mount effect
  useEffect(() => {
    setMounted(true);
    
    // Handle initial hash if present
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) {
      console.log('Initial hash detected:', initialHash);
      updateTabsFromHash(initialHash, true);
    }
  }, [updateTabsFromHash]);

  // Simplified hash change listener
  useEffect(() => {
    if (!mounted) return;

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      console.log('Hash change detected:', hash);
      
      // Only update if it's a different hash and not during navigation
      if (hash && hash !== lastHashRef.current && !isNavigating) {
        updateTabsFromHash(hash, true);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange, false);

    // Handle initial hash processing with a delay for Next.js
    const initialTimer = setTimeout(() => {
      const hash = window.location.hash.replace("#", "");
      if (hash && hash !== lastHashRef.current) {
        console.log('Processing delayed initial hash:', hash);
        updateTabsFromHash(hash, true);
      }
    }, 200);

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      clearTimeout(initialTimer);
    };
  }, [mounted, updateTabsFromHash, isNavigating]);

  const handleMainTabChange = (tabId: string) => {
    if (isNavigating) return;
    
    console.log('Manual tab change to:', tabId);
    setActiveTab(tabId);
    setHasScrolledToTarget(false); // Reset scroll flag
    
    let newHash = "";
    
    if (tabId === "development") {
      setActiveDevTab("web-app");
      newHash = "web-app";
    } else if (tabId === "design") {
      setActiveDesignTab("ui-design");
      newHash = "ui-design";
    } else if (tabId === "ai") {
      newHash = "ai-solutions";
    } else if (tabId === "support") {
      newHash = "maintenance-support";
    }
    
    // Update URL hash
    if (newHash) {
      lastHashRef.current = newHash;
      window.history.replaceState(null, '', `#${newHash}`);
    }
  };

  const handleDevTabChange = (tabId: string) => {
    if (isNavigating) return;
    
    console.log('Dev sub-tab change to:', tabId);
    setActiveDevTab(tabId);
    setHasScrolledToTarget(false); // Reset scroll flag
    
    // Update URL hash
    lastHashRef.current = tabId;
    window.history.replaceState(null, '', `#${tabId}`);
  };

  const handleDesignTabChange = (tabId: string) => {
    if (isNavigating) return;
    
    console.log('Design sub-tab change to:', tabId);
    setActiveDesignTab(tabId);
    setHasScrolledToTarget(false); // Reset scroll flag
    
    // Update URL hash
    lastHashRef.current = tabId;
    window.history.replaceState(null, '', `#${tabId}`);
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
                    disabled={isNavigating}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 transform scale-105"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    } ${isNavigating ? "opacity-50 cursor-not-allowed" : ""}`}
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
                      onClick={() => handleDevTabChange(tab.id)}
                      disabled={isNavigating}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        activeDevTab === tab.id
                          ? "bg-blue-500 text-white shadow-md"
                          : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                      } ${isNavigating ? "opacity-50 cursor-not-allowed" : ""}`}
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
                      onClick={() => handleDesignTabChange(tab.id)}
                      disabled={isNavigating}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        activeDesignTab === tab.id
                          ? "bg-blue-500 text-white shadow-md"
                          : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                      } ${isNavigating ? "opacity-50 cursor-not-allowed" : ""}`}
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
              <div className={`w-2 h-2 bg-blue-500 rounded-full mr-3 ${isNavigating ? "animate-pulse" : ""}`}></div>
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