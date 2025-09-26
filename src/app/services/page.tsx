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
  const [activeTab, setActiveTab] = useState("development");
  const [activeDevTab, setActiveDevTab] = useState("web-app");
  const [activeDesignTab, setActiveDesignTab] = useState("ui-design");

  const mainTabs = [
    { id: "development", label: "Development" },
    { id: "ai", label: "AI Solutions" },
    { id: "design", label: "Design & Strategy" },
    { id: "support", label: "Support & Infrastructure" },
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
  }, [developmentTabs, designTabs, setActiveTab, setActiveDevTab, setActiveDesignTab]);

  return (
    <main className="bg-slate-900">
      <HeroSection />

      <section className="bg-slate-900 py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs.
            </p>
          </div>

          {/* Main Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
              <div className="flex flex-wrap justify-center gap-1">
                {mainTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (tab.id === "development") setActiveDevTab("web-app");
                      if (tab.id === "design") setActiveDesignTab("ui-design");
                    }}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Development Sub-tabs */}
          <div className={`flex justify-center mb-6 transition-all duration-300 ${activeTab === "development" ? "opacity-100" : "opacity-0 pointer-events-none h-0"}`}>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-1 border border-slate-700/50">
              <div className="flex flex-wrap justify-center gap-1">
                {developmentTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDevTab(tab.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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

          {/* Design Sub-tabs */}
          <div className={`flex justify-center mb-6 transition-all duration-300 ${activeTab === "design" ? "opacity-100" : "opacity-0 pointer-events-none h-0"}`}>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-1 border border-slate-700/50">
              <div className="flex flex-wrap justify-center gap-1">
                {designTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDesignTab(tab.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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
        </div>
      </section>

      {/* Content Sections - ALL RENDERED, ONLY SHOW/HIDE */}
      <div className="bg-slate-900">
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