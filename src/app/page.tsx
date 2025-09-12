// app/page.tsx

"use client";

import React from "react";
import dynamic from "next/dynamic";

// Import  components and blocks
import HeroSection from "@/components/sections/HeroSection";

const DynamicTrustedBySection = dynamic(() => import("@/components/sections/TrustedBySection"));
const DynamicTestimonialSlider = dynamic(() => import("@/components/TestimonialSlider"), { ssr: false });
const DynamicServices = dynamic(() => import("@/components/sections/Services"));
const DynamicCaseStudies = dynamic(() => import("@/components/sections/CaseStudies"), { ssr: false });
const DynamicWhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { ssr: false });
const Dynamictabs = dynamic(() => import("@/components/sections/tabs"), { ssr: false });
const DynamicExtra = dynamic(() => import("@/components/sections/extra"), { ssr: false });
const DynamicFinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), { ssr: false });

export default function Home() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center h-full relative w-full">
        <HeroSection />
        <React.Suspense fallback={null}>
          <DynamicTrustedBySection />
          <DynamicServices />
          <DynamicCaseStudies />
          <DynamicWhyChooseUs />
          <DynamicTestimonialSlider />
          <Dynamictabs />
          <DynamicExtra />
          <DynamicFinalCTA />
        </React.Suspense>
      </main>
    </>
  );
}