"use client";

import Script from "next/script";

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
// Memoize static data to prevent re-creation on every render
const items = [
  { label: "Home", href: "/" },
  { label: "Achievements", href: "/Achievements" },
  { label: "About Me", href: "/about" },
  { label: "Pricing & Plans", href: "/pricing" },
  { label: "Portfolio", href: "/portfolios" },
  { label: "Contact", href: "/Contact" },
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
    href: "mailto:abdul.ahadt732@gmail.com",
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

  // Memoize activeIndex calculation
  const activeIndex = useMemo(() => {
    const index = items.findIndex((item) => {
      return item.href === "/"
        ? pathname === "/"
        : pathname.startsWith(item.href);
    });
    return index;
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
        <meta name="theme-color" content="#000000" />
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://plausible.io" />
        <title>Abdul Ahad - Full Stack Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Abdul Ahad's portfolio: A Full Stack Developer and UI/UX Designer crafting seamless digital experiences with Next.js, React, Tailwind CSS, and more. Explore projects, experience, and services."
        />
        {/* Plausible Analytics */}
        <Script
          defer
          data-domain="portfolio-prei.vercel.app"
          src="https://plausible.io/js/script.file-downloads.outbound-links.pageview-props.tagged-events.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible = window.plausible || function() {
              (window.plausible.q = window.plausible.q || []).push(arguments)
            }
          `}
        </Script>
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
            <div className="flex items-center justify-between h-20 lg:h-24">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 z-[10000]">
                <Image
                  src="/logo/logofixxed.svg"
                  alt="Sage Devs Logo"
                  width={200}
                  height={200}
                  priority
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 transition-all duration-200 hover:scale-105 hover:rotate-3 hover:brightness-110"
                />
              </Link>

              {/* Desktop Navigation - Only render GooeyNav on client */}
              <div className="hidden lg:flex items-center justify-center flex-1 z-[10000]">
                <div
                  className="relative"
                  style={{
                    height: "70px",
                    width: "min(500px, 80vw)",
                    maxWidth: "650px",
                  }}
                >
                  {isClient && (
                    <GooeyNav
                      items={items}
                      initialActiveIndex={activeIndex !== -1 ? activeIndex : 0}
                    />
                  )}
                  {/* Fallback navigation for SSR */}
                  {!isClient && (
                    <nav className="flex items-center space-x-4">
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`text-sm font-medium transition-all duration-200 hover:text-cyan-400 whitespace-nowrap px-3 py-2 rounded-md ${
                            pathname === item.href ||
                            (item.href !== "/" &&
                              pathname.startsWith(item.href))
                              ? "text-cyan-400 bg-cyan-400/10"
                              : "text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  )}
                </div>
              </div>

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
        </header>

        {/* Mobile Overlay Menu - Consistent for SSR */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-[9998] transition-opacity duration-200 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col items-center space-y-8">
              {items.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-white text-2xl md:text-3xl font-medium transition-all duration-200 ${
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))
                        ? "text-cyan-400"
                        : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
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
