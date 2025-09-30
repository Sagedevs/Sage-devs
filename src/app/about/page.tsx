// app/about/page.tsx
'use client';
import React from 'react';
import HeroSection from '@/components/aboutus/HeroSection';
import OurStory from '@/components/aboutus/OurStory';
import OurProcess from '@/components/aboutus/OurProcess';
import Team from '@/components/aboutus/Team';
import Technologies from '@/components/aboutus/Technologies';
import Culture from '@/components/aboutus/Culture';
import Careers from '@/components/aboutus/Careers';
import CTASection from '@/components/aboutus/CTASection';

// Structured Data Schemas
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://sagedevs.tech/about",
  name: "About Sage Devs - Software Development Agency",
  description: "Learn about Sage Devs, a leading full-stack development agency with 100+ projects delivered and 150+ satisfied clients worldwide. Our story, team, process, and culture.",
  url: "https://sagedevs.tech/about",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://sagedevs.tech/#organization",
    name: "Sage Devs",
    alternateName: "SageDevs",
    url: "https://sagedevs.tech",
    logo: "https://sagedevs.tech/logo/logofixxed.svg",
    description: "Premium full-stack development agency creating scalable web applications, AI solutions, and award-winning user experiences that drive measurable growth.",
    foundingDate: "2023",
    slogan: "Transform Ideas Into Digital Excellence",
    email: "contact@sagedevs.tech",
    telephone: "+923259684493",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressLocality: "Lahore",
      addressRegion: "Punjab"
    },
    sameAs: [
      "https://www.linkedin.com/in/sage-devs-9a1855384/",
      "https://github.com/abdulahad-2",
      "https://www.instagram.com/abdul_ahadt",
      "https://www.facebook.com/share/16PkdAEeVW/",
      "https://www.tiktok.com/@abdul_ahadt"
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
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "15-50"
    }
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sagedevs.tech/#organization",
  name: "Sage Devs",
  url: "https://sagedevs.tech",
  logo: {
    "@type": "ImageObject",
    url: "https://sagedevs.tech/logo/logofixxed.svg",
    width: "200",
    height: "200"
  },
  description: "Leading full-stack software development agency specializing in web applications, mobile apps, AI solutions, and SaaS platforms. 100+ projects delivered with 99.9% uptime guarantee.",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Sage Devs Team"
  },
  email: "contact@sagedevs.tech",
  telephone: "+923259684493",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressLocality: "Lahore",
    addressRegion: "Punjab"
  },
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
    },
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@sagedevs.tech",
      availableLanguage: ["English"],
      areaServed: "Worldwide"
    }
  ],
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "Machine Learning",
    "SaaS Development",
    "E-commerce Solutions",
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "Digital Transformation"
  ],
  award: [
    "100+ Projects Successfully Delivered",
    "150+ Satisfied Clients Worldwide",
    "99.9% Uptime Guarantee Achievement"
  ]
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
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://sagedevs.tech/about"
    }
  ]
};

const corporateContactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sage Devs",
  url: "https://sagedevs.tech",
  email: "contact@sagedevs.tech",
  telephone: "+923259684493",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressLocality: "Lahore",
    addressRegion: "Punjab"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When was Sage Devs founded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs was founded in 2023 with a mission to transform ideas into digital excellence. Despite being a relatively new agency, we've rapidly grown to deliver 100+ successful projects and serve 150+ satisfied clients worldwide through our expertise in modern technologies and commitment to quality."
      }
    },
    {
      "@type": "Question",
      name: "Where is Sage Devs located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs is based in Lahore, Punjab, Pakistan, but we serve clients worldwide. Our remote-first approach allows us to work with businesses across different time zones, providing 24/7 support and seamless collaboration regardless of location."
      }
    },
    {
      "@type": "Question",
      name: "What makes Sage Devs different from other development agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs stands out through our combination of cutting-edge technical expertise, transparent communication, agile methodology, 99.9% uptime guarantee, 24/7 support, competitive pricing, and genuine commitment to long-term partnerships. We focus on measurable results and business growth, not just code delivery. Our proven track record of 100+ successful projects demonstrates our ability to deliver excellence consistently."
      }
    },
    {
      "@type": "Question",
      name: "What is Sage Devs' development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our development process follows agile methodology with clear phases: Discovery & Planning (understanding requirements and creating roadmaps), Design (wireframing and UI/UX design), Development (iterative sprints with regular demos), Testing (comprehensive QA and security audits), Deployment (smooth launch with monitoring), and Support (ongoing optimization). We maintain transparent communication throughout with regular updates and demos."
      }
    },
    {
      "@type": "Question",
      name: "What technologies does Sage Devs specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in modern, proven technologies including React, Next.js, Node.js, TypeScript, Python for web development; React Native and Flutter for mobile; TensorFlow, PyTorch, and OpenAI for AI solutions; PostgreSQL and MongoDB for databases; AWS, Google Cloud, and Azure for cloud infrastructure; Docker and Kubernetes for containerization; and various other cutting-edge frameworks and tools based on project needs."
      }
    },
    {
      "@type": "Question",
      name: "How large is the Sage Devs team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs has a skilled team of developers, designers, project managers, and QA specialists. Our team size ranges from 15-50 professionals, allowing us to handle multiple projects simultaneously while maintaining high quality standards. We scale our team based on project requirements and can quickly onboard additional experts when needed."
      }
    },
    {
      "@type": "Question",
      name: "What is the company culture like at Sage Devs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs fosters a culture of innovation, continuous learning, collaboration, and excellence. We believe in transparent communication, work-life balance, professional growth, and empowering our team members. Our culture emphasizes quality over quantity, client success, staying current with technology trends, and building long-term relationships based on trust and mutual respect."
      }
    },
    {
      "@type": "Question",
      name: "Is Sage Devs hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we're always looking for talented developers, designers, and other professionals to join our growing team. Check our Careers section for current openings or send your resume to contact@sagedevs.tech. We value skills, passion for technology, problem-solving abilities, and cultural fit. We offer competitive compensation, growth opportunities, and a collaborative work environment."
      }
    },
    {
      "@type": "Question",
      name: "What industries does Sage Devs work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work across diverse industries including healthcare, fintech, e-commerce, education, real estate, logistics, SaaS, entertainment, legal services, manufacturing, and more. Our versatile expertise allows us to adapt solutions to industry-specific requirements, regulations, and best practices while leveraging our technical knowledge across different sectors."
      }
    },
    {
      "@type": "Question",
      name: "How can I contact Sage Devs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us via email at contact@sagedevs.tech or call us at +923259684493. We typically respond within 24 hours. You can also connect with us on LinkedIn, GitHub, Instagram, Facebook, or TikTok. For project inquiries, we offer free consultations to discuss your requirements and provide detailed proposals."
      }
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sagedevs.tech/about",
  name: "About Us | Sage Devs Software Development Agency",
  description: "Learn about our story, team, process, and culture. 100+ projects delivered, 150+ satisfied clients worldwide.",
  url: "https://sagedevs.tech/about",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://sagedevs.tech/#website",
    url: "https://sagedevs.tech",
    name: "Sage Devs"
  },
  about: [
    {
      "@type": "Thing",
      name: "Software Development Company"
    },
    {
      "@type": "Thing",
      name: "Technology Agency"
    }
  ],
  publisher: {
    "@type": "Organization",
    name: "Sage Devs",
    url: "https://sagedevs.tech"
  },
  inLanguage: "en-US"
};

export default function AboutPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateContactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Page Content */}
      <main className="bg-white text-gray-900">
        <HeroSection />
        <section id="our-story">
          <OurStory />
        </section>
        <section id="our-process">
          <OurProcess />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="culture">
          <Culture />
        </section>
        <section id="careers">
          <Careers />
        </section>
        <CTASection />
      </main>
    </>
  );
}