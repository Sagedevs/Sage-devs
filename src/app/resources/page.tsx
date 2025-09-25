"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled where needed
const ProjectCalculator = dynamic(
  () => import("@/components/resources/ProjectCalculator"),
  { ssr: false }
);

const HeroSection = dynamic(() => import("@/components/resources/HeroSection"));
const GuidesTemplates = dynamic(() => import("@/components/resources/GuidesTemplates"));
const TechnologyStack = dynamic(() => import("@/components/resources/TechnologyStack"));
const WebinarsTalks = dynamic(() => import("@/components/resources/WebinarsTalks"));
const SupportCenter = dynamic(() => import("@/components/resources/SupportCenter"));

export default function ResourcesIndexPage() {
  return (
<main>
  <HeroSection />
  <section id="guides-templates">
    <GuidesTemplates />
  </section>
    <TechnologyStack />
  <section id="webinars-talks">
    <WebinarsTalks />
  </section>
  <ProjectCalculator />
  <SupportCenter />
</main>
  );
}
