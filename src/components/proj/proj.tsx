"use client";

import React from "react";

const Proj: React.FC = () => {
  // dummy projects list
  const projects = [
    {
      title: "SaaS Dashboard",
      tag: "Product",
      description: "Analytics dashboard with charts, auth, and responsive UI.",
    },
    {
      title: "Portfolio Website",
      tag: "Frontend",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
    },
    {
      title: "Landing Page",
      tag: "Marketing",
      description: "High-converting landing page with A/B tested hero section.",
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-10 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Selected Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-sky-500/60 transition"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                {project.tag}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-400">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proj;