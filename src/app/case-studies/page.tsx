// app/case-studies/page.tsx
'use client';

import CaseStudyHero from '@/components/casestudy/hero';
import CaseStudyGrid from '@/components/casestudy/casestudy';
import EcommerceGrowth from '@/components/casestudy/ecommercegrowth';
import CaseStudyCTA from '@/components/casestudy/cta';

// Structured Data Schemas
const caseStudiesCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://sagedevs.tech/case-studies",
  name: "Software Development Case Studies & Success Stories | Sage Devs",
  description: "Real-world case studies showcasing successful web applications, mobile apps, AI solutions, SaaS platforms, and e-commerce projects. See how we've helped 150+ clients achieve their digital transformation goals.",
  url: "https://sagedevs.tech/case-studies",
  publisher: {
    "@type": "Organization",
    name: "Sage Devs",
    url: "https://sagedevs.tech"
  },
  about: [
    {
      "@type": "Thing",
      name: "Software Development"
    },
    {
      "@type": "Thing",
      name: "Web Application Development"
    },
    {
      "@type": "Thing",
      name: "AI Solutions"
    },
    {
      "@type": "Thing",
      name: "E-commerce Development"
    }
  ]
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://sagedevs.tech/case-studies#list",
  name: "Featured Case Studies",
  description: "Portfolio of successful software development projects",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        "@id": "https://sagedevs.tech/case-studies#ecommerce-growth",
        name: "E-commerce Platform Growth Case Study",
        description: "How we helped an e-commerce business achieve 300% revenue growth through custom platform development, performance optimization, and AI-powered recommendations.",
        author: {
          "@type": "Organization",
          name: "Sage Devs"
        },
        about: {
          "@type": "Thing",
          name: "E-commerce Development"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "SaaS Platform Development",
        description: "Building a scalable multi-tenant SaaS platform from MVP to 10,000+ users with automated billing and analytics.",
        author: {
          "@type": "Organization",
          name: "Sage Devs"
        },
        about: {
          "@type": "Thing",
          name: "SaaS Development"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "AI-Powered Business Automation",
        description: "Implementing intelligent automation that reduced manual processing time by 70% using machine learning and NLP.",
        author: {
          "@type": "Organization",
          name: "Sage Devs"
        },
        about: {
          "@type": "Thing",
          name: "AI Automation"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "Healthcare Mobile App",
        description: "Developing a HIPAA-compliant telemedicine platform connecting 50,000+ patients with healthcare providers.",
        author: {
          "@type": "Organization",
          name: "Sage Devs"
        },
        about: {
          "@type": "Thing",
          name: "Healthcare Technology"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "Fintech Payment Solution",
        description: "Building a secure payment processing system handling $10M+ monthly transactions with real-time fraud detection.",
        author: {
          "@type": "Organization",
          name: "Sage Devs"
        },
        about: {
          "@type": "Thing",
          name: "Financial Technology"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "CreativeWork",
        name: "Real Estate Platform",
        description: "Creating an intelligent property marketplace with virtual tours, AI-powered matching, and instant messaging.",
        author: {
          "@type": "Organization",
          name: "Sage Devs"
        },
        about: {
          "@type": "Thing",
          name: "PropTech"
        }
      }
    }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sagedevs.tech/#organization",
  name: "Sage Devs",
  url: "https://sagedevs.tech",
  logo: "https://sagedevs.tech/logo/logofixxed.svg",
  description: "Premium full-stack development agency with 100+ projects delivered and 150+ satisfied clients worldwide.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1"
  }
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
      name: "Case Studies",
      item: "https://sagedevs.tech/case-studies"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of projects are featured in your case studies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our case studies showcase diverse projects including e-commerce platforms with significant revenue growth, SaaS applications scaled to thousands of users, AI-powered automation solutions, healthcare and telemedicine apps, fintech payment systems, real estate platforms, educational technology, and enterprise web applications across various industries."
      }
    },
    {
      "@type": "Question",
      name: "How do you measure project success in your case studies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We measure success through quantifiable metrics including revenue growth, user acquisition and retention rates, performance improvements (load times, uptime), cost savings through automation, conversion rate optimization, user satisfaction scores, scalability achievements, and ROI for clients. Each case study includes specific metrics and outcomes."
      }
    },
    {
      "@type": "Question",
      name: "Can you share client testimonials from these projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many of our case studies include direct client testimonials and feedback. We've received over 150 reviews from satisfied clients praising our technical expertise, communication, project management, and ability to deliver results that exceed expectations. Client confidentiality is maintained where required through NDAs."
      }
    },
    {
      "@type": "Question",
      name: "What industries do your case studies cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our case studies span multiple industries including e-commerce and retail, healthcare and telemedicine, financial services and fintech, real estate and PropTech, education and EdTech, logistics and supply chain, SaaS and B2B platforms, entertainment and media, legal services, and manufacturing. We adapt our solutions to industry-specific needs."
      }
    },
    {
      "@type": "Question",
      name: "How long did these projects typically take to complete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary based on complexity. MVPs typically take 4-8 weeks, medium-sized applications 8-16 weeks, and complex enterprise solutions 16-24+ weeks. We use agile methodology with iterative releases, allowing clients to launch early versions and scale based on user feedback. Specific timelines are detailed in each case study."
      }
    },
    {
      "@type": "Question",
      name: "What technologies were used in these successful projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use modern, proven technology stacks including React and Next.js for frontend, Node.js and Python for backend, PostgreSQL and MongoDB for databases, AWS and Google Cloud for infrastructure, React Native and Flutter for mobile, TensorFlow and OpenAI for AI features, Docker and Kubernetes for deployment, and various other frameworks based on project requirements."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support for the projects featured in case studies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many of the projects in our case studies include ongoing support and maintenance agreements. We provide 24/7 monitoring, regular updates, security patches, performance optimization, and feature enhancements. Long-term partnerships with clients ensure continued success and growth of their platforms."
      }
    },
    {
      "@type": "Question",
      name: "Can you replicate similar success for my project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While every project is unique, we apply the same proven methodologies, technical expertise, and best practices that led to the success stories in our case studies. We begin with thorough discovery, create detailed roadmaps, use agile development, maintain quality standards, and focus on measurable outcomes. Schedule a consultation to discuss how we can achieve similar results for your project."
      }
    },
    {
      "@type": "Question",
      name: "How do you handle scalability challenges shown in these case studies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build applications with scalability in mind from day one using microservices architecture, horizontal scaling capabilities, efficient database design, caching strategies, CDN integration, load balancing, and cloud-native solutions. Our case studies demonstrate applications that successfully scaled from hundreds to hundreds of thousands of users without performance degradation."
      }
    },
    {
      "@type": "Question",
      name: "What was the ROI for clients in your case studies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROI varies by project but includes significant achievements such as 300% revenue growth for e-commerce platforms, 70% reduction in manual processing through automation, 40-60% decrease in operational costs, 10x increase in user engagement, faster time-to-market for new features, and substantial cost savings from reduced infrastructure expenses. Specific ROI metrics are detailed in individual case studies."
      }
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sagedevs.tech/case-studies",
  name: "Case Studies & Success Stories | Sage Devs",
  description: "Explore our portfolio of successful software development projects with measurable results and client testimonials.",
  url: "https://sagedevs.tech/case-studies",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://sagedevs.tech/#website",
    url: "https://sagedevs.tech",
    name: "Sage Devs"
  },
  publisher: {
    "@type": "Organization",
    name: "Sage Devs",
    url: "https://sagedevs.tech"
  },
  inLanguage: "en-US"
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Page Content */}
      <div>
        <CaseStudyHero />
        <section id="case-studies-grid" className="scroll-mt-20">
          <CaseStudyGrid />
        </section>
        <section id="ecommerce-growth">
          <EcommerceGrowth />
        </section>
        <CaseStudyCTA />
      </div>
    </>
  );
}