"use client";

import React, { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import SmoothScroll from "@/components/SmoothScroll";

// Lazy load heavy components
const GooeyNavWithHeader = lazy(() => import("@/blocks/Components/GooeyNav/GooeyNav"));
const CustomCursor = lazy(() => import("@/components/customcursor"));
const DisableDevTools = lazy(() => import("@/components/shortcuts"));
const Footer = lazy(() => import("@/components/Footer"));
const Analytics = lazy(() => import("@vercel/analytics/next").then(mod => ({ default: mod.Analytics })));
const VideoStructuredData = lazy(() => import("@/components/seo/StructuredData").then(mod => ({ default: mod.VideoStructuredData })));

const items = [
  { label: "Home", href: "/" },
  { label: "Let's Talk AI", href: "/letstalkai" },
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
      { label: "Guides & Templates", href: "/resources#guides-templates" },
      { label: "Webinars / Talks", href: "/resources#webinars-talks" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Team", href: "/about#team" },  
      { label: "Careers", href: "/careers" },  
    ],
  },
  {
    label: "Contact",
    href: "/contact",   
    cta: true,
    children: [
      { label: "Get in Touch (form)", href: "/contact#contact-form" },
      { label: "FAQs", href: "/faq" },
      { label: "Book a Call", href: "https://calendly.com/sagedevs-network/", external: true },
    ],
  }
];

const socialLinks = [
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/sagedevs/",
    iconPath: "/icons/linkedin_icon.svg",
  },
  {
    platform: "Gmail",
    href: "mailto:contact@sagedevs.tech",
    iconPath: "/icons/gmail_icon.svg",
  },
];

// Optimized font loading - optional display for better mobile performance
const geistSans = Geist({ 
  variable: "--font-geist-sans", 
  subsets: ["latin"],
  display: "optional", // Changed from "swap" for better mobile performance
  preload: true
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional", // Changed from "swap" for better mobile performance
  preload: true
});

// Responsive background - animated on desktop, simple on mobile
const StaticBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 1024); // Match your lg breakpoint
      };
      
      // Initial check
      checkIfMobile();
      
      // Add resize listener
      window.addEventListener('resize', checkIfMobile);
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  // Simple gradient for mobile
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
    );
  }

  // Full animation for desktop
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ minHeight: "100vh" }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.05)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.05)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.05)" />
          </linearGradient>
          <linearGradient id="tg2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.05)" />
            <stop offset="50%" stopColor="rgba(245, 101, 101, 0.05)" />
            <stop offset="100%" stopColor="rgba(251, 191, 36, 0.05)" />
          </linearGradient>
        </defs>
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#tg)" strokeWidth="0.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#tg2)" strokeWidth="0.5" />
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="0.5" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="0.5" />
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(245, 101, 101, 0.05)" strokeWidth="0.5" />
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // More aggressive debouncing for mobile (100ms instead of 10ms)
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    let timeoutId: NodeJS.Timeout;
    let rafId: number;
    
    const debouncedScroll = () => {
      // Use RAF for smoother performance
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      
      rafId = requestAnimationFrame(() => {
        timeoutId = setTimeout(handleScroll, 100); // Increased from 10ms to 100ms
      });
    };
    
    window.addEventListener("scroll", debouncedScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [handleScroll, isClient]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isClient) return;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, isClient]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sage Devs" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="google-site-verification" content="googleb45aa620d0bc55ca" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - Optimized */}
        <Suspense fallback={null}>
          <VideoStructuredData />
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Sage Devs",
                "url": "https://sagedevs.tech",
                "logo": "https://sagedevs.tech/logo/logofixxed.svg",
                "image": "https://sagedevs.tech/logo/logofixxed.svg",
                "description": "Full Stack Software Agency specializing in web development, UI/UX design, and scalable digital solutions",
                "foundingDate": "2023",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "contact@sagedevs.tech",
                  "contactType": "Customer Service"
                },
                "sameAs": [
                  "https://github.com/abdulahad-2",
                  "https://www.linkedin.com/company/sagedevs/",
                  "https://x.com/Sage_devs",
                  "https://www.instagram.com/sage_devs/"
                ],
                "founder": {
                  "@type": "Person",
                  "name": "Abdul Ahad"
                },
                "contact": {
                  "@type": "ContactPoint",
                  "email": "contact@sagedevs.tech",
                  "contactType": "Customer Service"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "PK"
                }
              })
            }}
          />
        </Suspense>
        
        {/* Icons - Fixed paths for public folder */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/logo/logofixxed.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="mask-icon" href="/logo/logofixxed.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* SEO Meta Tags */}
        <title>Sage Devs — Full Stack Software Agency & UI/UX Design Studio</title>
        <meta
          name="description"
          content="Sage Devs is a global software agency specializing in full stack web development, UI/UX design, and scalable digital solutions using Next.js, React, and modern technologies."
        />
        <meta
          name="keywords"
          content="software agency, full stack development, web development, UI/UX design, Next.js, React, Tailwind CSS, SaaS development, cloud services, DevOps"
        />
        <meta name="author" content="Sage Devs" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sage Devs — Full Stack Software Agency & UI/UX Studio" />
        <meta property="og:description" content="Global software agency delivering scalable web apps and exceptional UI/UX design with Next.js, React, and Tailwind CSS." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sagedevs.tech" />
        <meta property="og:image" content="https://sagedevs.tech/logo/logofixxed.svg" />
        <meta property="og:site_name" content="Sage Devs" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sage Devs — Full Stack Software Agency" />
        <meta name="twitter:description" content="Modern, reliable, and scalable digital solutions with focus on web development and UI/UX design." />
        <meta name="twitter:image" content="https://sagedevs.tech/logo/logofixxed.svg" />
        <meta name="twitter:site" content="@SageDevs" />
        
        {/* Theme & Canonical */}
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://sagedevs.tech/" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-gilroy relative`} suppressHydrationWarning>
      <SmoothScroll>
       
            <DisableDevTools />
         

        {/* Disable custom cursor on mobile for better performance */}
        {isClient && typeof window !== 'undefined' && window.innerWidth > 1024 && (
          <Suspense fallback={null}>
            <CustomCursor />
          </Suspense>
        )}

        {/* Lightweight static background */}
        <StaticBackground />

        {/* Navigation - Critical, but lazy load to reduce initial bundle */}
        <Suspense fallback={
          <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-black/50 backdrop-blur-sm" />
        }>
          <GooeyNavWithHeader
            items={items}
            scrolled={scrolled}
            mobileMenuOpen={mobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          >
            <Image
              src="/logo/logofixxed.svg"
              alt="Sage Devs Logo"
              width={128}
              height={128}
              priority
              fetchPriority="high"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
            />
          </GooeyNavWithHeader>
        </Suspense>

        {/* Main Content */}
        <main className="pt-20 lg:pt-24 relative z-[1]">{children}</main>

        {/* Social Icons - Optimized with will-change hint */}
        <aside className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50" aria-label="Social Media Links">
          <div className="bg-black/70 border border-white/20 border-dashed rounded-full p-3 lg:p-4 backdrop-blur-sm">
            <nav className="flex flex-col items-center space-y-4 lg:space-y-5">
              {socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.platform}`}
                  className="block transition-transform duration-200 hover:scale-105 hover:rotate-6"
                  style={{ willChange: 'transform' }}
                >
                  <Image
                    src={link.iconPath}
                    alt={`${link.platform} icon`}
                    width={24}
                    height={24}
                    loading="lazy"
                    className="w-5 h-5 lg:w-6 lg:h-6 object-contain opacity-80 hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* Only load analytics in production */}
        {process.env.NODE_ENV === 'production' && (
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        )}

        <div id="modal-root" />
        </SmoothScroll>
      </body>
    </html>
  );
}