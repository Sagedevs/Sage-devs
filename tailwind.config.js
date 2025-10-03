/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite ease-in-out",
        shimmer: "shimmer 8s ease-in-out infinite",
        gradient: "gradient 3s ease infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(30px, -50px, 0) scale(1.1)" },
          "66%": { transform: "translate3d(-20px, 20px, 0) scale(0.9)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      fontFamily: {
        gilroy: ["var(--font-gilroy)", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};