// app/page.tsx

"use client";

import React from "react";
import type { Metadata } from "next";

// Import your components and blocks
import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center h-full relative w-full overflow-x-hidden">
        <HeroSection />
        <TrustedBySection />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
        <TestimonialSlider />
        <Pricing />
        <FinalCTA />
      </main>
    </>
  );
}