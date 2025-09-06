"use client";
import React from "react";

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen pt-28 px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-white">Services</h1>
      <p className="text-gray-400 mt-4 max-w-3xl">Explore everything we offer, from full‑stack web & app development to UI/UX, e‑commerce, SaaS, cloud & DevOps, and ongoing support.</p>

      <div className="mt-12 space-y-16">
        <section id="web-dev" className="scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Web App Development</h2>
          <p className="text-gray-400 mt-2">Scalable, high-performance applications built with modern tech.</p>
        </section>

        <section id="ui-ux" className="scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-white">UI/UX Design</h2>
          <p className="text-gray-400 mt-2">Design systems, prototypes, and delightful interfaces.</p>
        </section>

        <section id="wordpress" className="scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-white">WordPress Development</h2>
          <p className="text-gray-400 mt-2">Custom themes, plugins, and enterprise WordPress solutions.</p>
        </section>

        <section id="shopify" className="scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Shopify Development</h2>
          <p className="text-gray-400 mt-2">Conversion-focused storefronts and custom apps.</p>
        </section>

        <section id="saas" className="scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-white">SaaS Solutions</h2>
          <p className="text-gray-400 mt-2">From MVP to scale: auth, billing, multi-tenant, analytics.</p>
        </section>

        <section id="devops" className="scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Cloud & DevOps</h2>
          <p className="text-gray-400 mt-2">CI/CD, infra-as-code, monitoring, and reliability.</p>
        </section>
      </div>
    </main>
  );
}
