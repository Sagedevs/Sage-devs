import React from "react";

// Tech logos
export const techLogos = [
  { name: "React", src: "/techstack/react.svg" },
  { name: "Next.js", src: "/techstack/nextjs.svg" },
  { name: "WordPress", src: "/techstack/wordpress.svg" },
  { name: "Shopify", src: "/techstack/shopify.svg" },
  { name: "Node.js", src: "/techstack/js.svg" },
  { name: "TypeScript", src: "/techstack/ts.svg" },
];

// Differentiators (Note: This was later moved to its own file)
export const differentiators = [
  "Dedicated engineering pods for focused delivery",
  "Design-led development process",
  "SLA & ongoing support included",
  "Transparent, fixed pricing model",
  "100% remote with US/EU timezone overlap",
  "4+ years proven track record"
];

export const heroCards = [
  {
    title: "Lightning Fast",
    description:
      "Optimized performance and rapid deployment cycles that keep you ahead of competition.",
    icon: (
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Innovation First",
    description:
      "Cutting-edge technologies and creative solutions that set new industry standards.",
    icon: (
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Enterprise Grade",
    description:
      "Secure, scalable architecture with 99.9% uptime and comprehensive support.",
    icon: (
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
    ),
  },
];


export const clientLogos: { src: string; alt: string }[] = [
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605025/migrated/GSK-Group-Logo_443e8358.png", alt: "GSK Group" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605028/migrated/sara-smith-logo-300x300_7fc99b2b.png", alt: "Sara Smith" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605030/migrated/A1-Taxis-300x274_015aafa2.png", alt: "A1 Taxis" },
  // { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605033/migrated/supplement-logo_bdaa0098.png", alt: "Supplement" },
  // { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605036/migrated/justroofinc-logo-removebg-preview-300x193_ec226fbd.png", alt: "JustRoof Inc" },
  // { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605038/migrated/eb_logo_b5964641.png", alt: "EB Logo" },
  // { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605040/migrated/logos-300x110_e4c50b2a.png", alt: "Logos" },
  // { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605043/migrated/unnamed-file_900cf23f.png", alt: "Unnamed" },
];
export const stats: { number: string; label: string; }[] = [
  { number: "200+", label: "Projects Delivered" },
  { number: "4.9★", label: "Client Satisfaction" },
  { number: "50+", label: "Global Clients" },
  { number: "24/7", label: "Support" },
];
