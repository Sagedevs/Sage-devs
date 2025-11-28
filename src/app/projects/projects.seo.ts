// src/app/projects/projects.seo.ts
import type { Metadata } from "next";

export const projectsMetadata: Metadata = {
  title: "Projects | Sage Devs",
  description:
    "Explore a curated selection of recent web projects by Sage Devs, including SaaS dashboards, marketing sites, and modern portfolio experiences.",
  openGraph: {
    title: "Projects | Sage Devs",
    description:
      "See featured work from Sage Devs – performance-focused, accessible, and beautifully designed web projects.",
    url: "https://sagedevs.com/projects",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};