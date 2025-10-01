// app/services/page.tsx
import type { Metadata } from "next";
import ServicesIndexPage from "./ServicesIndexPage";

export const metadata: Metadata = {
  title: "Software Development Services | Web, Mobile, AI & Cloud Solutions | Sage Devs",
  description: "Expert software development services: Custom web & mobile apps, AI automation, SaaS platforms, e-commerce solutions, cloud infrastructure, WordPress development, and UI/UX design. 24/7 support with 99.9% uptime guarantee.",
  keywords: [
    "software development services",
    "custom web development",
    "mobile app development services",
    "AI automation solutions",
    "machine learning development",
    "SaaS development services",
    "cloud computing services",
    "DevOps consulting",
    "e-commerce development services",
    "WordPress development",
    "UI UX design services",
    "React development services",
    "Next.js development",
    "Node.js backend development",
    "API development services",
    "enterprise software development",
    "digital transformation services",
    "MVP development services",
    "software consulting services",
    "technical support services",
    "brand identity design",
    "digital strategy consulting",
    "AWS cloud services",
    "Docker Kubernetes services",
    "website maintenance services"
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
    canonical: "https://sagedevs.tech/services",
  },
  openGraph: {
    description: "End-to-end software development services: Web & mobile apps, AI solutions, SaaS platforms, e-commerce, cloud infrastructure, and UI/UX design. Trusted by 150+ clients worldwide.",
    url: "https://sagedevs.tech/services",
    siteName: "Sage Devs",
    images: [
      {
        url: "https://sagedevs.tech/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sage Devs Software Development Services",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Software Development Services | Sage Devs",
    description: "Expert web & mobile development, AI automation, SaaS platforms, cloud infrastructure, and UI/UX design. 100+ projects delivered with 99.9% uptime.",
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
  category: "Technology Services",
  classification: "Software Development Services",
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://sagedevs.tech/services#servicelist",
  name: "Sage Devs Software Development Services",
  description: "Comprehensive software development and design services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#web-app",
        name: "Custom Web & Mobile Application Development",
        description: "Build high-performance, scalable web and mobile applications using React, Next.js, Node.js, React Native, and modern frameworks. Full-stack development with responsive design and seamless user experiences.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#web-app"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web & Mobile Development",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Progressive Web Apps (PWA)",
                description: "Fast, reliable, and engaging web applications that work offline"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Single Page Applications (SPA)",
                description: "Dynamic web apps with React, Vue.js, and Angular"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cross-Platform Mobile Apps",
                description: "iOS and Android apps with React Native and Flutter"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise Web Applications",
                description: "Scalable business solutions with advanced features"
              }
            }
          ]
        }
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#ai-solutions",
        name: "AI-Powered Automation & Machine Learning Solutions",
        description: "Intelligent automation solutions using OpenAI GPT-4, TensorFlow, PyTorch, LangChain, and custom ML models. Natural language processing, computer vision, predictive analytics, and AI chatbots.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#ai-solutions"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI & ML Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Chatbot Development",
                description: "Intelligent conversational AI with GPT-4 and custom training"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Process Automation",
                description: "Workflow automation and intelligent document processing"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Predictive Analytics",
                description: "Machine learning models for forecasting and insights"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Computer Vision",
                description: "Image recognition and video analysis solutions"
              }
            }
          ]
        }
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#saas",
        name: "SaaS Platform & Product Development",
        description: "End-to-end SaaS development with multi-tenant architecture, subscription billing, user management, analytics dashboards, and scalable infrastructure. Launch your SaaS product from MVP to market leader.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#saas"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SaaS Development",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Multi-Tenant Architecture",
                description: "Scalable SaaS infrastructure with tenant isolation"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Subscription Management",
                description: "Stripe/PayPal integration with automated billing"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Analytics Dashboards",
                description: "Real-time metrics and business intelligence"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "API Development",
                description: "RESTful and GraphQL APIs for third-party integrations"
              }
            }
          ]
        }
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#ecommerce",
        name: "E-commerce Development Solutions",
        description: "High-converting online stores with Shopify, WooCommerce, Magento, and custom e-commerce platforms. Payment gateway integration, inventory management, and conversion optimization.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#ecommerce"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "E-commerce Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Development",
                description: "Custom Shopify stores with advanced features"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce Development",
                description: "WordPress e-commerce with custom functionality"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom E-commerce Platforms",
                description: "Bespoke online stores with unique requirements"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Payment Integration",
                description: "Secure payment gateways and checkout optimization"
              }
            }
          ]
        }
      }
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#cloud",
        name: "Cloud Infrastructure & DevOps Services",
        description: "AWS, Google Cloud, and Azure infrastructure with Docker, Kubernetes, CI/CD pipelines, automated deployments, monitoring, and 99.9% uptime guarantee. Scalable and secure cloud solutions.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#cloud"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cloud & DevOps",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cloud Migration",
                description: "Seamless migration to AWS, Azure, or Google Cloud"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Container Orchestration",
                description: "Docker and Kubernetes deployment and management"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CI/CD Pipelines",
                description: "Automated testing and deployment workflows"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Infrastructure as Code",
                description: "Terraform and CloudFormation automation"
              }
            }
          ]
        }
      }
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#wordpress",
        name: "WordPress Development & Custom Solutions",
        description: "Custom WordPress websites, themes, plugins, and WooCommerce stores. Advanced functionality, performance optimization, and security hardening for enterprise-grade WordPress solutions.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#wordpress"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "WordPress Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Theme Development",
                description: "Bespoke WordPress themes from design to deployment"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plugin Development",
                description: "Custom WordPress plugins for unique functionality"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WordPress Optimization",
                description: "Speed optimization and performance tuning"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WordPress Security",
                description: "Security audits and hardening services"
              }
            }
          ]
        }
      }
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#ui-design",
        name: "UI/UX Design Services",
        description: "User-centered design with wireframing, prototyping, usability testing, and design systems. Create intuitive interfaces that delight users and drive conversions with data-driven design decisions.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#ui-design"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "UI/UX Design",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "User Research",
                description: "User interviews, surveys, and persona development"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wireframing & Prototyping",
                description: "Interactive prototypes with Figma and Adobe XD"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Design Systems",
                description: "Scalable component libraries and style guides"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Usability Testing",
                description: "A/B testing and conversion rate optimization"
              }
            }
          ]
        }
      }
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#brand-identity",
        name: "Brand Identity & Visual Design",
        description: "Complete brand solutions with logo design, brand guidelines, visual identity systems, marketing materials, and brand strategy. Build memorable brands that stand out.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#brand-identity"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Brand Identity",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Logo Design",
                description: "Unique, memorable logos that represent your brand"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Brand Guidelines",
                description: "Comprehensive brand standards and usage rules"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Visual Identity",
                description: "Color palettes, typography, and design elements"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketing Collateral",
                description: "Business cards, brochures, and promotional materials"
              }
            }
          ]
        }
      }
    },
    {
      "@type": "ListItem",
      position: 9,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#digital-strategy",
        name: "Digital Strategy & Consulting",
        description: "Strategic consulting for digital transformation, technology roadmaps, product strategy, market analysis, and growth planning. Make informed decisions with expert guidance.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#digital-strategy"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 10,
      item: {
        "@type": "Service",
        "@id": "https://sagedevs.tech/services#maintenance-support",
        name: "Technical Support & Maintenance Services",
        description: "24/7 technical support with proactive monitoring, security updates, performance optimization, bug fixes, and feature enhancements. 99.9% uptime SLA with dedicated support team.",
        provider: {
          "@type": "Organization",
          name: "Sage Devs",
          url: "https://sagedevs.tech"
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sagedevs.tech/services#maintenance-support",
          availableLanguage: ["English"],
          serviceType: "24/7 Technical Support"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Support Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "24/7 Monitoring",
                description: "Proactive system monitoring and alerting"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Security Updates",
                description: "Regular security patches and vulnerability fixes"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Performance Optimization",
                description: "Speed optimization and resource management"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Priority Support",
                description: "Dedicated support with guaranteed response times"
              }
            }
          ]
        }
      }
    }
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
      name: "Services",
      item: "https://sagedevs.tech/services"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What software development services does Sage Devs offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs offers comprehensive software development services including custom web and mobile application development, AI-powered automation, SaaS platform development, e-commerce solutions, cloud infrastructure and DevOps, WordPress development, UI/UX design, brand identity, digital strategy consulting, and 24/7 technical support and maintenance."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a custom web application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development timelines vary based on project complexity. A simple MVP typically takes 4-8 weeks, while complex enterprise applications may require 3-6 months. We provide detailed project timelines during the planning phase and maintain transparent communication throughout development."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after project completion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer 24/7 technical support and maintenance services with 99.9% uptime guarantee. Our support includes proactive monitoring, security updates, performance optimization, bug fixes, and feature enhancements to ensure your application runs smoothly."
      }
    },
    {
      "@type": "Question",
      name: "What technologies do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in modern technologies including React, Next.js, Node.js, React Native, TypeScript, Python, TensorFlow, OpenAI, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, and more. We select the best technology stack based on your specific project requirements."
      }
    },
    {
      "@type": "Question",
      name: "Can you help with AI integration into existing applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We specialize in integrating AI solutions into existing applications, including chatbots, automation workflows, predictive analytics, natural language processing, and computer vision. We work with your current tech stack to seamlessly add AI capabilities."
      }
    },
    {
      "@type": "Question",
      name: "What is your development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our process includes: 1) Discovery & Planning - Understanding requirements and creating roadmaps, 2) Design - Wireframes and UI/UX design, 3) Development - Agile sprints with regular updates, 4) Testing - Comprehensive QA and user testing, 5) Deployment - Launch and monitoring, 6) Support - Ongoing maintenance and optimization."
      }
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesIndexPage />
    </>
  );
}