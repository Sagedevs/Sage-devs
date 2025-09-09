// app/page.tsx

"use client";

import React from "react";
import Image from "next/image";

// Import your components and blocks
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import { clientLogos, stats } from "@/data/heroSectionData";

export default function Home() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center h-full relative w-full overflow-x-hidden">
        <HeroSection />
        <div className="relative overflow-hidden bg-transparent">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `
                  radial-gradient(circle at 30% 70%, rgba(30, 41, 59, 0.4) 0%, transparent 50%),
                  radial-gradient(circle at 70% 30%, rgba(51, 65, 85, 0.3) 0%, transparent 50%),
                  linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
                `,
              }}
            />

            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: `
                  linear-gradient(45deg, transparent 40%, rgba(100, 116, 139, 0.1) 50%, transparent 60%)
                `,
                clipPath: "polygon(0 0, 100% 0, 100% 88%, 0% 100%)",
                animation: "subtle-slide 20s ease-in-out infinite"
              }}
            />
          </div>

          <div className="relative z-10 py-16 text-center">
            <p className="text-gray-300 text-sm mb-4 tracking-wider font-medium">
              TRUSTED BY
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
              Over 1000+ Entrepreneurs
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-10" />

            <InfiniteSlider className="opacity-100" gap={60} duration={25} durationOnHover={35}>
              {clientLogos.map((logo: { src: string; alt: string; }, i: number) => (
                <div key={i} className="flex items-center justify-center px-8">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={80}
                    className="h-[55px] w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out"
                  />
                </div>
              ))}
            </InfiniteSlider>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 px-6">
              {stats.map((stat: { number: string; label: string; }, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes subtle-slide {
              0%, 100% { transform: translateX(-100px); }
              50% { transform: translateX(100px); }
            }
          `}</style>
        </div>

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