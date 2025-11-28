"use client";

import React from "react";
import Link from "next/link";

const Cta: React.FC = () => {
  return (
    <section className="w-full bg-slate-950 py-14 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 rounded-2xl border border-sky-500/40 bg-gradient-to-r from-sky-600/20 via-slate-900 to-sky-500/10 px-6 py-10 text-center md:gap-5">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Have a project in mind?
        </h2>
        <p className="max-w-xl text-sm text-slate-200/80 md:text-base">
          Let&apos;s turn your idea into a fast, modern web experience. I can
          help with design, development, and deployment.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition"
          >
            Start a project
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300 transition"
          >
            View more work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;