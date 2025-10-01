"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import GooeyNavWithHeader from "@/blocks/Components/GooeyNav/GooeyNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/customcursor";
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';
import OptimizedGalaxy from "@/components/Galaxy";
import DisableDevTools from '@/components/shortcuts';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import Footer from "@/components/Footer"; // Assuming this path is correct
import Image from "next/image"; // Import Image for the logo
const items = [
  { label: "Home", href: "/" },
  { label: "Let's Talk AI", href: "/Letstalkai" },
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
      { label: "Careers", href: "/about#careers" },  
    ],
  },
  {
    label: "Contact",
    href: "/Contact",   
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
    href: "mailto:contact@sagedevs.tech",
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
  const pathname = usePathname(); // Move usePathname to top level

  // Ensure client-side rendering is complete
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);
  }, []);

  useEffect(() => {
    if (!isClient) return;
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
  }, [handleScroll, isClient]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]); // Use pathname variable here

  // Handle body overflow - only on client
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

  const baseBodyClasses = `${geistSans.variable} ${geistMono.variable} antialiased font-gilroy relative`;

  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MZ5HHWRT7M" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZ5HHWRT7M');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KFR5TDDQ');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="My Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="google-site-verification" content="googleb45aa620d0bc55ca" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sage Devs",
            "url": "https://sagedevs.tech",
            "logo": "https://sagedevs.tech/logo/logofixxed.svg",
            "sameAs": [
              "https://github.com/abdulahad-2",
              "https://www.linkedin.com/in/abdulahad-2",
              "https://x.com/Abdul_Ahadt1"
            ]
          })
        }} />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Logo and Social Media Meta Tags */}
        <link rel="icon" href="/logo/logofixxed.svg" type="image/svg+xml" />
        
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
        <meta property="og:url" content="https://sagedevs.tech" />
        <meta property="og:image" content="https://sagedevs.tech/logo/logofixxed.svg" />
        <meta name="twitter:image" content="https://sagedevs.tech/logo/logofixxed.svg" />
        <meta property="og:site_name" content="Sage Devs" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sage Devs — Full Stack Software Agency & UI/UX Studio" />
        <meta name="twitter:description" content="Sage Devs builds modern, reliable, and scalable digital solutions with a focus on web development and UI/UX design." />
        <meta name="twitter:image" content="https://sagedevs.tech/logo/logofixxed.svg" />
        <meta name="twitter:site" content="@SageDevs" />

        {/* Theme color (browser bar + PWA style) */}
        <meta name="theme-color" content="#0f172a" />

        {/* Canonical (avoid SEO duplicate issues) */}
        <link rel="canonical" href="https://sagedevs.tech/" />
      </head>
      <body className={baseBodyClasses} suppressHydrationWarning={true}>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KFR5TDDQ"
          height="0" 
          width="0" 
          style={{display:'none', visibility: 'hidden'}}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <DisableDevTools />
      <GoogleAnalytics />
        {/* cursor global overlay */}
        <CustomCursor />
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

        {/* Galaxy Background */}
        <OptimizedGalaxy
          starCount={60}
          animationSpeed={0.6}
          enableMouseInteraction={true}
          enableTwinkle={true}
          className="fixed inset-0"
        />

        <GooeyNavWithHeader
          items={items}
          scrolled={scrolled}
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        >
          <Image
            src="/logo/logofixxed.svg"
            alt="Sage Devs Logo"
            width={200}
            height={200}
            priority
            fetchPriority="high"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
          />
        </GooeyNavWithHeader>

        {/* Main Content */}
        <main className="pt-20 lg:pt-24 relative z-[1]">{children}</main>

        {/* Social Icons - Consistent for SSR */}
        <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50">
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
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
