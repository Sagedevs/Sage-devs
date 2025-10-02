// app/page.tsx
import type { Metadata } from "next";

// Import all components directly (no lazy loading)
import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialSlider from "@/components/TestimonialSlider";
import Tabs from "@/components/sections/tabs";
import Extra from "@/components/sections/extra";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Sage Devs — Full Stack Software Agency & UI/UX Studio | Custom Web & AI Development",
  description: "Leading full-stack development agency specializing in scalable web applications, AI-powered automation, SaaS platforms, and mobile apps. 100+ projects delivered, 150+ satisfied clients worldwide. Expert React, Next.js, Node.js, and AI solutions.",
  keywords: [
    "full stack development agency",
    "custom software development",
    "web application development",
    "mobile app development",
    "AI development services",
    "SaaS development company",
    "React development agency",
    "Next.js development",
    "Node.js developers",
    "UI UX design agency",
    "e-commerce development",
    "enterprise software solutions",
    "cloud infrastructure services",
    "DevOps consulting",
    "WordPress development agency",
    "digital transformation services",
    "software consulting firm",
    "MVP development",
    "startup technology partner",
    "custom API development"
  ],
  authors: [{ name: "Sage Devs" }],
  creator: "Sage Devs",
  publisher: "Sage Devs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sagedevs.tech"),
  alternates: {
    canonical: "https://sagedevs.tech",
  },
  openGraph: {
    description: "Premium full-stack development agency with 100+ projects delivered. Expert web & mobile development, AI automation, and SaaS solutions. 99.9% uptime guarantee.",
    url: "https://sagedevs.tech",
    siteName: "Sage Devs",
    images: [
      {
        url: "https://sagedevs.tech/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sage Devs - Full Stack Software Development Agency",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage Devs — Full Stack Software Agency & UI/UX Studio",
    description: "Transform ideas into digital excellence. 100+ projects delivered with cutting-edge tech. Expert React, Next.js, AI & SaaS development.",
    images: ["https://sagedevs.tech/og-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  classification: "Software Development",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sagedevs.tech/#organization",
  name: "Sage Devs",
  alternateName: "SageDevs",
  url: "https://sagedevs.tech",
  logo: {
    "@type": "ImageObject",
    url: "https://sagedevs.tech/logo/logofixxed.svg",
    width: "200",
    height: "200"
  },
  description: "Premium full-stack development agency creating scalable web applications, AI solutions, and award-winning user experiences that drive measurable growth.",
  foundingDate: "2023",
  slogan: "Transform Ideas Into Digital Excellence",
  email: "contact@sagedevs.tech",
  telephone: "+923259684493",
  sameAs: [
    "https://www.linkedin.com/in/sage-devs-9a1855384/",
    "https://github.com/abdulahad-2",
    "https://www.instagram.com/abdul_ahadt",
    "https://www.facebook.com/share/16PkdAEeVW/",
    "https://www.tiktok.com/@abdul_ahadt"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "contact@sagedevs.tech",
      telephone: "+923259684493",
      availableLanguage: ["English"],
      areaServed: "Worldwide"
    },
    {
      "@type": "ContactPoint",
      contactType: "Technical Support",
      email: "contact@sagedevs.tech",
      telephone: "+923259684493",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
      hoursAvailable: "24/7"
    }
  ],
  areaServed: {
    "@type": "Place",
    name: "Worldwide"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1"
  }
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://sagedevs.tech/#service",
  name: "Sage Devs - Software Development Agency",
  image: "https://sagedevs.tech/logo/logofixxed.svg",
  description: "Full-stack software development agency specializing in web applications, mobile apps, AI solutions, SaaS platforms, and digital transformation services.",
  priceRange: "$$$$",
  url: "https://sagedevs.tech",
  email: "contact@sagedevs.tech",
  telephone: "+923259684493",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & Mobile App Development",
          description: "Custom web applications and mobile apps using React, Next.js, Node.js, and React Native",
          url: "https://sagedevs.tech/services#web-app",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Automation Solutions",
          description: "Intelligent automation using OpenAI, TensorFlow, LangChain, and custom ML models",
          url: "https://sagedevs.tech/services#ai-solutions",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS & Product Development",
          description: "End-to-end SaaS platforms with multi-tenant architecture and subscription billing",
          url: "https://sagedevs.tech/services#saas",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Development",
          description: "High-converting online stores with Shopify, WooCommerce, and custom solutions",
          url: "https://sagedevs.tech/services#ecommerce",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud & DevOps Services",
          description: "AWS infrastructure, Docker, Kubernetes, CI/CD pipelines, and 99.9% uptime",
          url: "https://sagedevs.tech/services#cloud",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WordPress Development",
          description: "Custom WordPress websites, themes, and plugins with advanced functionality",
          url: "https://sagedevs.tech/services#wordpress",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design Services",
          description: "User-centered design with wireframing, prototyping, and usability testing",
          url: "https://sagedevs.tech/services#ui-design",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Identity",
          description: "Complete brand solutions with logo design, guidelines, and visual identity",
          url: "https://sagedevs.tech/services#brand-identity",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical Support & Maintenance",
          description: "24/7 technical support with monitoring, security updates, and performance optimization",
          url: "https://sagedevs.tech/services#maintenance-support",
          provider: {
            "@id": "https://sagedevs.tech/#organization"
          }
        }
      }
    ]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sagedevs.tech/#website",
  url: "https://sagedevs.tech",
  name: "Sage Devs",
  description: "Full Stack Software Agency & UI/UX Studio",
  publisher: {
    "@id": "https://sagedevs.tech/#organization"
  },
  inLanguage: "en-US"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sagedevs.tech"
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Schema markup - renders on server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="flex-grow flex flex-col items-center h-full relative w-full">
        <HeroSection />
        <TrustedBySection />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
        <TestimonialSlider />
        <Tabs />
        <Extra />
        <FinalCTA />
      </main>
    </>
  );
}