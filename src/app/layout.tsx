"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GooeyNav from "@/blocks/Components/GooeyNav/GooeyNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { gilroy } from "@/fonts/fonts"; // Assuming this path is correct
import Footer from "@/components/Footer"; // Assuming this path is correct
// Navigation items for GooeyNav (desktop center)
const items = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web & App Development", href: "/services/web-app-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "E-commerce (WordPress & Shopify)", href: "/services/ecommerce" },
      { label: "SaaS & Product Dev", href: "/services/saas-product" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Maintenance & Support", href: "/services/maintenance-support" },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: [
      { label: "Web Apps", href: "/case-studies/web-apps" },
      { label: "SaaS", href: "/case-studies/saas" },
      { label: "E-commerce", href: "/case-studies/ecommerce" },
      { label: "Enterprise", href: "/case-studies/enterprise" },
    ],
  },
  { label: "Pricing & Plans", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog / Insights", href: "/blog" },
      { label: "Guides & Templates", href: "/resources/guides-templates" },
      { label: "Webinars / Talks", href: "/resources/webinars" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Team", href: "/about/team" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Contact",
    cta: true,
    children: [
      { label: "Get in Touch (form)", href: "/Contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Book a Call", href: "https://calendly.com/abdul-ahadt732", external: true },
    ],
  },
];

const socialLinks = [
  {
    platform: "GitHub",
    href: "https://github.com/abdulahad-2",
    iconPath: "/icons/github_icon.svg",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-ahad-7908a82b4/",
    iconPath: "/icons/linkedin_icon.svg",
  },
  {
    platform: "Gmail",
    href: "mailto:sagedevs.network@gmail.com",
    iconPath: "/icons/gmail_icon.svg",
  },
];

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Ensure client-side rendering is complete
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize activeIndex calculation (supports dropdown items)
  const activeIndex = useMemo(() => {
    const index = items.findIndex((item) => {
      if (item.href) {
        return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
      }
      if ((item as any).children) {
        return (item as any).children.some((c: any) => c.href && pathname.startsWith(c.href));
      }
      return false;
    });
    return index === -1 ? 0 : index;
  }, [pathname]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    // This check is redundant if useEffect is guarded, but harmless.
    // if (typeof window === "undefined") return;
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);
  }, []);

  useEffect(() => {
    // Only attach event listener on the client side
    if (!isClient) return;

    // More efficient throttle implementation
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll, isClient]); // Add isClient to dependency array

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle body overflow - only on client
  useEffect(() => {
    // Only run on client
    if (!isClient) return;

    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, isClient]); // Add isClient to dependency array

  // Memoize mobile menu handler
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // Base classes that don't change based on state - CONSISTENT FOR SSR
  const baseBodyClasses = `${geistSans.variable} ${geistMono.variable} ${gilroy.variable} antialiased font-gilroy relative overflow-x-hidden`;

  // FIXED: Use consistent classes for header during SSR - no conditional rendering
  const headerClasses = `fixed top-0 left-0 right-0 z-[9999] transition-all duration-200 bg-transparent`;

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="My Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/icon-167x167.png"
        />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        
        {/* Favicon & manifest */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        {/* Title & Description (company-first, international tone) */}
        <title>Sage Devs — Full Stack Software Agency & UI/UX Studio</title>
        <meta
          name="description"
          content="Sage Devs is a global software agency specializing in full stack web development and world-class UI/UX design. We deliver scalable, modern, and reliable digital solutions using Next.js, React, and Tailwind CSS."
        />

        {/* SEO keywords */}
        <meta
          name="keywords"
          content="Sage Devs, software agency, software company, full stack development, web development, UI/UX design, Next.js, React, Tailwind CSS, digital solutions, tech studio"
        />
        <meta name="author" content="Sage Devs" />

        {/* Open Graph (for LinkedIn/Facebook share cards) */}
        <meta property="og:title" content="Sage Devs — Full Stack Software Agency & UI/UX Studio" />
        <meta property="og:description" content="We are Sage Devs, a global software agency delivering scalable web apps and exceptional UI/UX design with modern technologies like Next.js, React, and Tailwind CSS." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sage-devs.vercel.app" />
        <meta property="og:image" content="https://sage-devs.vercel.app/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sage Devs — Full Stack Software Agency & UI/UX Studio" />
        <meta name="twitter:description" content="Sage Devs builds modern, reliable, and scalable digital solutions with a focus on web development and UI/UX design." />
        <meta name="twitter:image" content="https://sage-devs.vercel.app/og-image.png" />

        {/* Theme color (browser bar + PWA style) */}
        <meta name="theme-color" content="#0f172a" />

        {/* Canonical (avoid SEO duplicate issues) */}
        <link rel="canonical" href="https://sage-devs.vercel.app" />
      </head>

      {/*
        FIXED: Added suppressHydrationWarning to the body tag.
        This tells React to suppress the hydration warning for differences
        in attributes on this element. This is commonly used for attributes
        injected by browser extensions (like "cz-shortcut-listen=true")
        which are outside of your control and cause hydration mismatches.
      */}
      <body className={baseBodyClasses} suppressHydrationWarning={true}>
        {/* Background Threads/Lines - Fixed z-index to be behind everything */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ minHeight: "100vh" }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="threadGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(34, 197, 94, 0.05)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.05)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.05)" />
              </linearGradient>
              <linearGradient
                id="threadGradient2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.05)" />
                <stop offset="50%" stopColor="rgba(245, 101, 101, 0.05)" />
                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.05)" />
              </linearGradient>
            </defs>

            {/* Static lines for SSR - animations added client-side */}
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="url(#threadGradient)"
              strokeWidth="0.5"
              opacity="1"
            />
            <line
              x1="100%"
              y1="0"
              x2="0"
              y2="100%"
              stroke="url(#threadGradient2)"
              strokeWidth="0.5"
              opacity="1"
            />
            <line
              x1="0"
              y1="30%"
              x2="100%"
              y2="30%"
              stroke="rgba(99, 102, 241, 0.05)"
              strokeWidth="0.5"
              opacity="1"
            />
            <line
              x1="0"
              y1="70%"
              x2="100%"
              y2="70%"
              stroke="rgba(16, 185, 129, 0.05)"
              strokeWidth="0.5"
              opacity="1"
            />
            <line
              x1="25%"
              y1="0"
              x2="25%"
              y2="100%"
              stroke="rgba(245, 101, 101, 0.05)"
              strokeWidth="0.5"
              opacity="1"
            />
            <line
              x1="75%"
              y1="0"
              x2="75%"
              y2="100%"
              stroke="rgba(168, 85, 247, 0.05)"
              strokeWidth="0.5"
              opacity="1"
            />
          </svg>
        </div>

        {/* Client-side enhanced background animations */}
        {isClient && (
          <div className="fixed inset-0 z-[-1] pointer-events-none">
            <svg
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ minHeight: "100vh" }}
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="url(#threadGradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.line
                x1="100%"
                y1="0"
                x2="0"
                y2="100%"
                stroke="url(#threadGradient2)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.line
                x1="0"
                y1="30%"
                x2="100%"
                y2="30%"
                stroke="rgba(99, 102, 241, 0.05)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
              />
              <motion.line
                x1="0"
                y1="70%"
                x2="100%"
                y2="70%"
                stroke="rgba(16, 185, 129, 0.05)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
              />
              <motion.line
                x1="25%"
                y1="0"
                x2="25%"
                y2="100%"
                stroke="rgba(245, 101, 101, 0.05)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.8 }}
              />
              <motion.line
                x1="75%"
                y1="0"
                x2="75%"
                y2="100%"
                stroke="rgba(168, 85, 247, 0.05)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 1.5 }}
              />
            </svg>
          </div>
        )}

        {/* Header - NO conditional classes for SSR consistency */}
        <header className={headerClasses}>
          {/* Client-side header background overlay */}
          {isClient && (
            <div
              className={`absolute inset-0 transition-all duration-200 ${
                scrolled || mobileMenuOpen
                  ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
                  : ""
              }`}
            />
          )}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-between h-20 lg:h-24 relative">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 z-[10000]">
                <Image
                  src="/logo/logofixxed.svg"
                  alt="Sage Devs Logo"
                  width={200}
                  height={200}
                  priority
                  fetchPriority="high"
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
                />
              </Link>

              {/* Desktop Navigation - Perfectly centered (matches CTA baseline) */}
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-[10000] pointer-events-none">
                <div className="relative pointer-events-auto" style={{ height: "60px", width: "min(600px, 80vw)", maxWidth: "720px" }}>
                  {isClient && (
                    <GooeyNav
                      items={items}
                      initialActiveIndex={activeIndex !== -1 ? activeIndex : 0}
                    />
                  )}
                  {/* Fallback navigation for SSR */}
                  {!isClient && (
                    <nav className="flex items-center space-x-4">
                      {items.map((item) => {
                        const isActive = item.href
                          ? item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href)
                          : false;
                        return item.href ? (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-medium transition-all duration-200 hover:text-cyan-400 whitespace-nowrap px-3 py-2 rounded-md ${
                              isActive ? "text-cyan-400 bg-cyan-400/10" : "text-white"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span
                            key={item.label}
                            className="text-sm font-medium text-white/80 whitespace-nowrap px-3 py-2 rounded-md"
                          >
                            {item.label}
                          </span>
                        );
                      })}
                    </nav>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 relative w-auto z-[10001]">
                {/* Mobile Hamburger - No animations during SSR */}
                <button
                  className="lg:hidden relative z-[10000] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span
                      className={`w-full h-0.5 bg-white block transform origin-center transition-all duration-200 ${
                        mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    />
                    <span
                      className={`w-full h-0.5 bg-white block transition-all duration-200 ${
                        mobileMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <span
                      className={`w-full h-0.5 bg-white block transform origin-center transition-all duration-200 ${
                        mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Overlay Menu - Consistent for SSR */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-[9998] transition-opacity duration-200 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="h-full overflow-y-auto pt-24 pb-12 px-6">
            {/* Mobile grouped menu */}
            <div className="space-y-8 max-w-xl mx-auto">
              <div>
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl font-semibold">Home</Link>
              </div>

              <div>
                <div className="text-gray-300 uppercase tracking-wider text-xs mb-3">Services</div>
                <div className="space-y-3">
                  <Link href="/services/web-app-development" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Web & App Development</Link>
                  <Link href="/services/ui-ux-design" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">UI/UX Design</Link>
                  <Link href="/services/ecommerce" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">E-commerce (WordPress & Shopify)</Link>
                  <Link href="/services/saas-product" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">SaaS & Product Dev</Link>
                  <Link href="/services/cloud-devops" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Cloud & DevOps</Link>
                  <Link href="/services/maintenance-support" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Maintenance & Support</Link>
                </div>
              </div>

              <div>
                <div className="text-gray-300 uppercase tracking-wider text-xs mb-3">Case Studies</div>
                <div className="space-y-3">
                  <Link href="/case-studies/web-apps" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Web Apps</Link>
                  <Link href="/case-studies/saas" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">SaaS</Link>
                  <Link href="/case-studies/ecommerce" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">E-commerce</Link>
                  <Link href="/case-studies/enterprise" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Enterprise</Link>
                </div>
              </div>

              <div>
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl font-semibold">Pricing</Link>
              </div>

              <div>
                <div className="text-gray-300 uppercase tracking-wider text-xs mb-3">Resources</div>
                <div className="space-y-3">
                  <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Blog / Insights</Link>
                  <Link href="/resources/guides-templates" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Guides & Templates</Link>
                  <Link href="/resources/webinars" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Webinars / Talks</Link>
                </div>
              </div>

              <div>
                <div className="text-gray-300 uppercase tracking-wider text-xs mb-3">Company</div>
                <div className="space-y-3">
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">About Us</Link>
                  <Link href="/company/team" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Team</Link>
                  <Link href="/company/careers" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Careers</Link>
                </div>
              </div>

              <div>
                <div className="text-gray-300 uppercase tracking-wider text-xs mb-3">Contact</div>
                <div className="space-y-3">
                  <Link href="/Contact" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">Get in Touch (form)</Link>
                  <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="block text-white text-xl">FAQs</Link>
                  <a href="https://calendly.com/abdul-ahadt732" target="_blank" rel="noopener noreferrer" className="block text-white text-xl">Book a Call ↗</a>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/Contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold border border-white/10 hover:border-cyan-300/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="pt-20 lg:pt-24 relative z-[1]">{children}</main>

        {/* Social Icons - Consistent for SSR */}
        <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-[100]">
          <div className="bg-black/70 border border-white/20 border-dashed rounded-full p-3 lg:p-4 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 lg:space-y-5">
              {socialLinks.map((link) => (
                <div key={link.platform}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-all duration-200 hover:scale-105 hover:rotate-6"
                  >
                    <Image
                      src={link.iconPath}
                      alt={`${link.platform} icon`}
                      width={24}
                      height={24}
                      className="w-5 h-5 lg:w-6 lg:h-6 object-contain opacity-80 hover:opacity-100"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
        <Analytics />
        
      </body>
    </html>
  );
}
