// app/resources/page.tsx
"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled where needed
const ProjectCalculator = dynamic(
  () => import("@/components/resources/ProjectCalculator"),
  { ssr: false }
);

const HeroSection = dynamic(() => import("@/components/resources/HeroSection"));
const GuidesTemplates = dynamic(() => import("@/components/resources/GuidesTemplates"));
const TechnologyStack = dynamic(() => import("@/components/resources/TechnologyStack"));
const WebinarsTalks = dynamic(() => import("@/components/resources/WebinarsTalks"));
const SupportCenter = dynamic(() => import("@/components/resources/SupportCenter"));

// Structured Data Schemas
const resourcesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://sagedevs.tech/resources#collection",
  name: "Sage Devs Developer Resources & Tools",
  description: "Free developer resources, guides, templates, webinars, and tools for web development, AI integration, and software engineering best practices.",
  url: "https://sagedevs.tech/resources",
  mainEntity: {
    "@type": "ItemList",
    name: "Developer Resources",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "CreativeWork",
          "@id": "https://sagedevs.tech/resources#guides-templates",
          name: "Development Guides & Templates",
          description: "Comprehensive guides, code templates, and best practices for modern web development, React, Next.js, AI integration, and full-stack development.",
          author: {
            "@type": "Organization",
            name: "Sage Devs"
          }
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "TechArticle",
          "@id": "https://sagedevs.tech/resources#technology-stack",
          name: "Technology Stack Recommendations",
          description: "Expert recommendations on modern technology stacks, frameworks, tools, and libraries for scalable web applications.",
          author: {
            "@type": "Organization",
            name: "Sage Devs"
          }
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "VideoObject",
          "@id": "https://sagedevs.tech/resources#webinars-talks",
          name: "Webinars & Technical Talks",
          description: "Educational webinars and technical presentations on web development, AI, software architecture, and industry best practices.",
          author: {
            "@type": "Organization",
            name: "Sage Devs"
          }
        }
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          "@id": "https://sagedevs.tech/resources#project-calculator",
          name: "Project Cost Calculator",
          description: "Free tool to estimate software development project costs, timelines, and resource requirements for web and mobile applications.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          }
        }
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "WebPage",
          "@id": "https://sagedevs.tech/resources#support-center",
          name: "Developer Support Center",
          description: "Technical support, documentation, FAQs, and community resources for developers working with modern web technologies.",
          author: {
            "@type": "Organization",
            name: "Sage Devs"
          }
        }
      }
    ]
  },
  publisher: {
    "@type": "Organization",
    name: "Sage Devs",
    url: "https://sagedevs.tech"
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
      name: "Resources",
      item: "https://sagedevs.tech/resources"
    }
  ]
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Project Cost Calculator by Sage Devs",
  description: "Free online calculator to estimate software development project costs, timelines, and resource requirements. Get instant estimates for web apps, mobile apps, AI solutions, and SaaS platforms.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "124",
    bestRating: "5",
    worstRating: "1"
  },
  author: {
    "@type": "Organization",
    name: "Sage Devs",
    url: "https://sagedevs.tech"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What resources does Sage Devs offer for developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs offers comprehensive developer resources including free development guides and templates, technology stack recommendations, educational webinars and technical talks, a project cost calculator tool, and a complete support center with documentation and FAQs. All resources are designed to help developers build better web and mobile applications."
      }
    },
    {
      "@type": "Question",
      name: "Is the project cost calculator free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the project cost calculator is completely free to use. It helps you estimate development costs, timelines, and resource requirements for various project types including web applications, mobile apps, AI solutions, SaaS platforms, and e-commerce sites. No registration or payment required."
      }
    },
    {
      "@type": "Question",
      name: "What topics do the development guides cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our development guides cover a wide range of topics including React and Next.js best practices, full-stack development patterns, AI integration tutorials, API design and development, database optimization, cloud deployment strategies, security best practices, performance optimization, and modern DevOps workflows."
      }
    },
    {
      "@type": "Question",
      name: "How accurate is the project cost calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The project cost calculator provides estimates based on industry standards and our experience with over 100 completed projects. While it gives accurate ballpark figures, actual costs may vary based on specific requirements, complexity, and scope changes. We recommend scheduling a consultation for precise quotes on your specific project."
      }
    },
    {
      "@type": "Question",
      name: "Are the webinars and talks recorded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our webinars and technical talks are recorded and available on-demand. You can access them anytime to learn about the latest developments in web technologies, AI integration, software architecture, and industry best practices. New content is added regularly."
      }
    },
    {
      "@type": "Question",
      name: "Can I download the templates and guides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all templates and guides are available for download. You can use them in your projects without restrictions. We provide code templates, project starters, documentation templates, and comprehensive guides in various formats including PDF, Markdown, and source code repositories."
      }
    },
    {
      "@type": "Question",
      name: "What technology stacks do you recommend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend modern, battle-tested technology stacks based on project requirements. For web applications: React/Next.js with Node.js and PostgreSQL/MongoDB. For mobile: React Native or Flutter. For AI: Python with TensorFlow/PyTorch and OpenAI. For infrastructure: AWS/GCP with Docker and Kubernetes. We provide detailed stack recommendations in our resources section."
      }
    },
    {
      "@type": "Question",
      name: "How do I access technical support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical support is available through our Support Center, which includes comprehensive documentation, FAQs, community forums, and direct contact options. For project-specific support, clients receive dedicated support channels with guaranteed response times. General inquiries can be submitted through our contact form."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer training or workshops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer custom training and workshops for teams looking to upskill in modern web development, AI integration, or specific technologies. Our webinars are also available as interactive sessions. Contact us to discuss custom training programs tailored to your team's needs."
      }
    },
    {
      "@type": "Question",
      name: "How often is new content added to resources?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We regularly update our resources with new guides, templates, and webinars. New content is typically added monthly, covering the latest trends, technologies, and best practices in software development. Subscribe to our newsletter to stay updated on new resources and tools."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Estimate Your Software Development Project Cost",
  description: "Step-by-step guide to estimating software development costs using project parameters",
  totalTime: "PT15M",
  tool: {
    "@type": "HowToTool",
    name: "Project Cost Calculator"
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Define Project Type",
      text: "Select your project type: web application, mobile app, AI solution, SaaS platform, or e-commerce site. Each type has different complexity levels and resource requirements."
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify Required Features",
      text: "List all features and functionalities needed: user authentication, payment processing, real-time updates, admin dashboards, API integrations, etc. More features increase development time and cost."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Assess Complexity Level",
      text: "Determine complexity based on features, integrations, and technical requirements. Simple projects have basic CRUD operations. Complex projects involve AI, real-time processing, or advanced algorithms."
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Choose Technology Stack",
      text: "Select appropriate technologies based on requirements. Modern stacks like React/Next.js are efficient for web apps, while React Native works well for cross-platform mobile development."
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Calculate Timeline",
      text: "Estimate development timeline based on features and complexity. Simple apps take 4-8 weeks, medium complexity 8-16 weeks, and complex enterprise solutions 16-24+ weeks."
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Factor in Additional Costs",
      text: "Include costs for design, testing, deployment, infrastructure, third-party services, and ongoing maintenance. These typically add 30-40% to base development costs."
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Review and Refine",
      text: "Review the estimate and adjust based on budget constraints. Prioritize must-have features for MVP and plan phased rollouts for additional features to manage costs effectively."
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sagedevs.tech/resources",
  name: "Developer Resources & Tools | Sage Devs",
  description: "Free developer resources, guides, templates, project calculator, and technical support for modern web development and AI integration.",
  url: "https://sagedevs.tech/resources",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://sagedevs.tech/#website",
    url: "https://sagedevs.tech",
    name: "Sage Devs"
  },
  about: {
    "@type": "Thing",
    name: "Software Development Resources"
  },
  publisher: {
    "@type": "Organization",
    name: "Sage Devs",
    url: "https://sagedevs.tech"
  }
};

export default function ResourcesIndexPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Page Content */}
      <main>
        <HeroSection />
        <section id="guides-templates">
          <GuidesTemplates />
        </section>
        <TechnologyStack />
        <section id="webinars-talks">
          <WebinarsTalks />
        </section>
        <ProjectCalculator />
        <SupportCenter />
      </main>
    </>
  );
}