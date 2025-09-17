"use client";
import React from "react";

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
  return (
    <main >
      {/* Hero / intro */}
      <HeroSection />

      {/* Services list */}
      
        {/* Development-focused first */}
        <WebAppDevelopment />
        <SaaSProductDev />
        <EcommerceSolutions />
        <WordPressServices />
        <CloudDevOps />

        <AISolutions />

        {/* Design + strategy */}
        <UIDesign />
        <DigitalStrategy />
        <BrandIdentity />

        {/* After-launch services */}
        <MaintenanceSupport />
      

      {/* Final CTA */}
      <FinalSection />
    </main>
  );
}
