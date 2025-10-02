// app/faq/page.tsx
"use client";
import React from "react";
import FAQ from '@/components/faq';
import metadata from './metadata';

export { metadata };

// Structured Data Schemas
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://sagedevs.tech/faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Sage Devs offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs offers comprehensive software development services including custom web and mobile application development, AI-powered automation solutions, SaaS platform development, e-commerce solutions, cloud infrastructure and DevOps services, WordPress development, UI/UX design, brand identity creation, digital strategy consulting, and 24/7 technical support and maintenance."
      }
    },
    {
      "@type": "Question",
      name: "How much does it cost to build a custom web application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of a custom web application varies based on complexity, features, and scope. Simple applications typically range from $5,000-$15,000, medium complexity projects from $15,000-$50,000, and enterprise-level applications from $50,000+. We provide detailed estimates after understanding your specific requirements. Use our free project cost calculator for an instant estimate."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a software project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development timelines depend on project complexity. Simple MVPs take 4-8 weeks, medium complexity applications 8-16 weeks, and complex enterprise solutions 16-24+ weeks. We use agile methodology with 2-week sprints, providing regular updates and demos. Timeline estimates are provided during the initial consultation phase."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after project completion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer comprehensive 24/7 technical support and maintenance services with a 99.9% uptime guarantee. Our support includes proactive monitoring, security updates, performance optimization, bug fixes, feature enhancements, and priority response times. We offer flexible support packages tailored to your needs."
      }
    },
    {
      "@type": "Question",
      name: "What technologies and frameworks do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in modern technologies including React, Next.js, Node.js, TypeScript, Python, React Native, Flutter for mobile, TensorFlow and PyTorch for AI, PostgreSQL and MongoDB for databases, AWS, Google Cloud, and Azure for infrastructure, Docker and Kubernetes for containerization, and various other cutting-edge frameworks and tools."
      }
    },
    {
      "@type": "Question",
      name: "Can you help integrate AI into our existing application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We specialize in AI integration including GPT-4 and OpenAI API integration, custom machine learning models, natural language processing, computer vision, predictive analytics, and intelligent automation. We can seamlessly add AI capabilities to your existing applications through APIs, microservices, or direct integration without disrupting current operations."
      }
    },
    {
      "@type": "Question",
      name: "Do you work with startups or only established companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with businesses of all sizes, from startups to enterprise organizations. We have extensive experience helping startups build MVPs, validate ideas, and scale their products. We offer flexible engagement models, startup-friendly pricing, and strategic guidance to help early-stage companies succeed. Over 150+ clients have trusted us with their digital transformation."
      }
    },
    {
      "@type": "Question",
      name: "What is your development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our development process includes: 1) Discovery & Planning - Understanding requirements and creating detailed roadmaps, 2) Design - Wireframing, prototyping, and UI/UX design, 3) Development - Agile sprints with regular updates and demos, 4) Testing - Comprehensive QA, security audits, and user testing, 5) Deployment - Smooth launch with monitoring, 6) Support - Ongoing maintenance and optimization. We maintain transparent communication throughout."
      }
    },
    {
      "@type": "Question",
      name: "Can you work with our existing development team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer flexible engagement models including staff augmentation, team extension, and collaborative development. We can integrate with your existing team, follow your processes and workflows, use your preferred tools, and adapt to your coding standards. We've successfully collaborated with in-house teams at numerous companies."
      }
    },
    {
      "@type": "Question",
      name: "Do you sign NDAs and protect intellectual property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we take intellectual property protection very seriously. We sign NDAs before any project discussions, ensure all code and assets belong to you upon completion, implement strict security measures for data protection, follow industry best practices for confidentiality, and can accommodate custom legal agreements as needed."
      }
    },
    {
      "@type": "Question",
      name: "What industries do you have experience in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have experience across diverse industries including healthcare, fintech and finance, e-commerce and retail, education and EdTech, real estate and PropTech, logistics and supply chain, SaaS and B2B platforms, entertainment and media, legal services, manufacturing, and more. We adapt our solutions to meet industry-specific regulations and requirements."
      }
    },
    {
      "@type": "Question",
      name: "How do you ensure code quality and security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain high standards through code reviews, automated testing (unit, integration, and e2e tests), security audits and penetration testing, adherence to OWASP security guidelines, regular dependency updates, static code analysis, performance monitoring, and following industry best practices. All code is documented and follows clean code principles."
      }
    },
    {
      "@type": "Question",
      name: "Can you help with cloud migration and DevOps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer comprehensive cloud and DevOps services including cloud migration from on-premise to AWS, Azure, or Google Cloud, infrastructure as code with Terraform and CloudFormation, CI/CD pipeline setup, container orchestration with Docker and Kubernetes, automated deployment workflows, monitoring and alerting setup, and cost optimization strategies."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide training for our team after project completion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide comprehensive training including detailed documentation, video tutorials, live training sessions for your team, admin panel walkthroughs, best practices guides, and ongoing knowledge transfer. We ensure your team can confidently manage and maintain the application after handover."
      }
    },
    {
      "@type": "Question",
      name: "What is your payment structure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible payment structures based on project type: Fixed Price for well-defined projects with clear scope, Time & Material for projects requiring flexibility, Milestone-based payments throughout the project lifecycle, and Retainer agreements for ongoing development and support. We discuss and agree on payment terms during contract negotiation."
      }
    },
    {
      "@type": "Question",
      name: "How do you handle project changes and scope adjustments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use agile methodology which allows for flexibility. Minor adjustments within sprint scope are accommodated. For significant changes, we provide change requests with impact analysis on timeline and cost, obtain approval before proceeding, update project documentation, and maintain transparent communication about all changes."
      }
    },
    {
      "@type": "Question",
      name: "Can you scale applications as our business grows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We build applications with scalability in mind using microservices architecture where appropriate, horizontal and vertical scaling capabilities, load balancing and caching strategies, database optimization, CDN integration, and cloud-native solutions. We also provide ongoing optimization and scaling support as your user base grows."
      }
    },
    {
      "@type": "Question",
      name: "What makes Sage Devs different from other development agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs stands out through: 100+ successfully delivered projects, 150+ satisfied clients worldwide, 99.9% uptime guarantee, 24/7 technical support, expertise in cutting-edge technologies like AI and cloud, transparent communication and agile methodology, competitive pricing with high quality, dedicated project management, and commitment to long-term partnerships rather than just project completion."
      }
    },
    {
      "@type": "Question",
      name: "How do I get started with Sage Devs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is easy: 1) Contact us via email at contact@sagedevs.tech or call +923259684493, 2) Schedule a free consultation to discuss your project, 3) Receive a detailed proposal with timeline and cost estimate, 4) Sign agreement and begin discovery phase, 5) Start development with regular updates and demos. We typically respond within 24 hours."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer maintenance packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer flexible maintenance packages including Basic (monthly updates and bug fixes), Standard (24/7 monitoring, security updates, and performance optimization), and Premium (proactive optimization, feature enhancements, and dedicated support). All packages include regular backups, security patches, and priority support based on the tier."
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
      name: "FAQ",
      item: "https://sagedevs.tech/faq"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sagedevs.tech/faq",
  name: "Frequently Asked Questions | Sage Devs",
  description: "Common questions about our software development services, pricing, process, technologies, and support. Get answers to your questions about working with Sage Devs.",
  url: "https://sagedevs.tech/faq",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://sagedevs.tech/#website",
    url: "https://sagedevs.tech",
    name: "Sage Devs"
  },
  about: [
    {
      "@type": "Thing",
      name: "Software Development"
    },
    {
      "@type": "Thing",
      name: "Web Development Services"
    },
    {
      "@type": "Thing",
      name: "AI Solutions"
    },
    {
      "@type": "Thing",
      name: "Technical Support"
    }
  ],
  publisher: {
    "@type": "Organization",
    name: "Sage Devs",
    url: "https://sagedevs.tech"
  },
  inLanguage: "en-US"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sagedevs.tech/#organization",
  name: "Sage Devs",
  url: "https://sagedevs.tech",
  logo: "https://sagedevs.tech/logo/logofixxed.svg",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "contact@sagedevs.tech",
      telephone: "+923259684493",
      availableLanguage: ["English"],
      areaServed: "Worldwide"
    }
  ]
};

const FAQPage: React.FC = () => {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Page Content */}
      <main>
        <FAQ />
      </main>
    </>
  );
};

export default FAQPage;