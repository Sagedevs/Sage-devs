"use client";

import React from "react";

const HeroProj: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-950 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 text-center md:gap-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Projects
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          A curated selection of my recent work.
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-400 md:text-base">
          From landing pages to full products, these builds focus on clean UI,
          performance, and good UX.
        </p>
      </div>
    </section>
  );
};

export default HeroProj;