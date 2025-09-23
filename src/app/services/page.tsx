"use client";
import React, { useState } from "react";

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

  const tabs = [
    { id: "development", label: "Development" },
    { id: "ai", label: "AI Solutions" },
    { id: "design", label: "Design & Strategy" },
    { id: "support", label: "Support & Infrastructure" },
  ];

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

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
              <div className="flex flex-wrap justify-center gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
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

          {/* Active Tab Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/30 rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-slate-300 text-sm">
                Showing: {tabs.find(tab => tab.id === activeTab)?.label}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="bg-slate-900 min-h-screen">
        {activeTab === "development" && (
          <div className="space-y-0">
            <WebAppDevelopment />
            <SaaSProductDev />
            <EcommerceSolutions />
            <WordPressServices />
            <CloudDevOps />
          </div>
        )}

        {activeTab === "ai" && (
          <div className="space-y-0">
            <AISolutions />
          </div>
        )}

        {activeTab === "design" && (
          <div className="space-y-0">
            <UIDesign />
            <DigitalStrategy />
            <BrandIdentity />
          </div>
        )}

        {activeTab === "support" && (
          <div className="space-y-0">
            <MaintenanceSupport />
          </div>
        )}
      </div>

      {/* Final CTA */}
      <FinalSection />
    </main>
  );
}