// app/Letstalkai/page.tsx
import type { Metadata } from "next";
import React from 'react';
import LetsTalkAIHero from '@/components/lets-talk-ai/LetsTalkAIHero';
import LetsTalkAISecondSection from '@/components/lets-talk-ai/LetsTalkAISecondSection';
import AIConsultation from '@/components/lets-talk-ai/AIConsultation';
import MachineLearning from '@/components/lets-talk-ai/MachineLearning';
import NaturalLanguageProcessing from '@/components/lets-talk-ai/NaturalLanguageProcessing';
import ComputerVision from '@/components/lets-talk-ai/ComputerVision';
import AIStrategy from '@/components/lets-talk-ai/AIStrategy';
import LetsTalkAIFinalSection from '@/components/lets-talk-ai/LetsTalkAIFinalSection';
import AITransformationGuide from '@/components/lets-talk-ai/AITransformationGuide';

// JSONLDSchema Helper Component
const JSONLDSchema: React.FC<{ schema: any }> = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export const metadata: Metadata = {
  title: "AI Solutions & Machine Learning Services | Custom AI Development | Sage Devs",
  description: "Expert AI development services: Machine learning, natural language processing, computer vision, AI chatbots, and intelligent automation. Transform your business with GPT-4, TensorFlow, and custom AI solutions.",
  keywords: [
    "AI development services",
    "machine learning solutions",
    "natural language processing",
    "computer vision",
    "AI chatbot development",
    "predictive analytics",
    "intelligent automation",
    "GPT-4 integration",
    "TensorFlow development",
    "AI consulting",
    "artificial intelligence services",
    "custom AI solutions",
    "NLP development",
    "computer vision services",
    "AI automation",
    "machine learning consulting",
    "AI integration services",
    "custom AI models",
    "AI strategy consulting",
    "enterprise AI solutions"
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
    canonical: "https://sagedevs.tech/Letstalkai",
  },
  openGraph: {
    title: "AI Solutions & Machine Learning Services | Sage Devs",
    description: "Transform your business with cutting-edge AI solutions including machine learning, NLP, computer vision, and intelligent automation using GPT-4, TensorFlow, and PyTorch.",
    url: "https://sagedevs.tech/Letstalkai",
    siteName: "Sage Devs",
    images: [
      {
        url: "https://sagedevs.tech/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sage Devs AI Solutions & Machine Learning Services",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Machine Learning Services | Sage Devs",
    description: "Expert AI development: Machine learning, NLP, computer vision, and intelligent automation with GPT-4 and TensorFlow.",
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
  classification: "AI Development Services",
};

const aiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://sagedevs.tech/Letstalkai#aiservice",
  name: "Sage Devs - AI Solutions & Machine Learning Services",
  alternateName: "AI Development Agency",
  image: "https://sagedevs.tech/og-banner.webp",
  description: "Leading AI development agency specializing in machine learning, natural language processing, computer vision, AI chatbots, predictive analytics, and intelligent automation solutions using GPT-4, TensorFlow, PyTorch, and LangChain.",
  url: "https://sagedevs.tech/Letstalkai",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5204,
    longitude: 74.3587
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide"
  },
  serviceType: "Artificial Intelligence Development",
  provider: {
    "@type": "Organization",
    name: "Sage Devs",
    url: "https://sagedevs.tech"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI & Machine Learning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://sagedevs.tech/Letstalkai#ai-consultation",
          name: "AI Consulting & Strategy",
          description: "Strategic AI consulting to identify opportunities, assess feasibility, and create roadmaps for AI transformation. Expert guidance on AI adoption, implementation strategies, and ROI optimization.",
          provider: {
            "@id": "https://sagedevs.tech/Letstalkai#aiservice"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://sagedevs.tech/Letstalkai#machine-learning",
          name: "Machine Learning Development",
          description: "Custom machine learning models for predictive analytics, recommendation systems, anomaly detection, time series forecasting, and classification using TensorFlow, PyTorch, and scikit-learn.",
          provider: {
            "@id": "https://sagedevs.tech/Letstalkai#aiservice"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://sagedevs.tech/Letstalkai#nlp",
          name: "Natural Language Processing (NLP)",
          description: "Advanced NLP solutions including AI chatbots, sentiment analysis, text classification, named entity recognition, language translation, and content generation using GPT-4, BERT, and LangChain.",
          provider: {
            "@id": "https://sagedevs.tech/Letstalkai#aiservice"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://sagedevs.tech/Letstalkai#computer-vision",
          name: "Computer Vision Solutions",
          description: "Image and video analysis solutions including object detection, facial recognition, OCR, quality inspection, medical imaging, and autonomous systems using OpenCV, YOLO, and custom CNN models.",
          provider: {
            "@id": "https://sagedevs.tech/Letstalkai#aiservice"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://sagedevs.tech/Letstalkai#ai-strategy",
          name: "AI Implementation & Integration",
          description: "End-to-end AI implementation including model deployment, API integration, monitoring, and optimization. Seamlessly integrate AI capabilities into existing applications and workflows.",
          provider: {
            "@id": "https://sagedevs.tech/Letstalkai#aiservice"
          }
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1"
  }
};

const aiTechnologiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://sagedevs.tech/Letstalkai#technologies",
  name: "AI Technologies & Frameworks",
  description: "Cutting-edge AI technologies and frameworks we specialize in",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "GPT-4 & OpenAI",
        description: "Advanced language models for conversational AI, content generation, and intelligent automation",
        applicationCategory: "AI Platform"
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "TensorFlow",
        description: "Open-source machine learning framework for building and deploying ML models",
        applicationCategory: "Machine Learning Framework"
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "PyTorch",
        description: "Deep learning framework for research and production",
        applicationCategory: "Deep Learning Framework"
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "LangChain",
        description: "Framework for developing applications with large language models",
        applicationCategory: "LLM Framework"
      }
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "SoftwareApplication",
        name: "Hugging Face Transformers",
        description: "State-of-the-art NLP models and tools",
        applicationCategory: "NLP Library"
      }
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "SoftwareApplication",
        name: "OpenCV",
        description: "Computer vision and image processing library",
        applicationCategory: "Computer Vision"
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
      name: "AI Solutions",
      item: "https://sagedevs.tech/Letstalkai"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI services does Sage Devs provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sage Devs provides comprehensive AI services including AI consulting and strategy, machine learning development, natural language processing (NLP), computer vision solutions, AI chatbot development, predictive analytics, intelligent automation, and AI implementation and integration. We work with cutting-edge technologies like GPT-4, TensorFlow, PyTorch, LangChain, and custom AI models."
      }
    },
    {
      "@type": "Question",
      name: "How can AI transform my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can transform your business by automating repetitive tasks, providing intelligent insights from data, improving customer experiences through personalized interactions, optimizing operations, reducing costs, and enabling data-driven decision making. Our AI solutions help businesses increase efficiency by 40-60%, reduce operational costs by 30-50%, and improve customer satisfaction through 24/7 intelligent support."
      }
    },
    {
      "@type": "Question",
      name: "What is the process for developing custom AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI development process includes: 1) Discovery - Understanding your business challenges and identifying AI opportunities, 2) Strategy - Creating an AI roadmap and defining success metrics, 3) Data Assessment - Evaluating data quality and preparing datasets, 4) Model Development - Building and training custom AI models, 5) Testing - Rigorous testing and validation, 6) Deployment - Seamless integration into your systems, 7) Monitoring - Continuous optimization and performance tracking."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to implement an AI solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementation timelines vary based on complexity. Simple AI chatbots or automation tools can be deployed in 4-6 weeks. Custom machine learning models typically take 8-12 weeks. Complex computer vision or enterprise AI solutions may require 3-6 months. We provide detailed timelines during the consultation phase and maintain transparent communication throughout the project."
      }
    },
    {
      "@type": "Question",
      name: "Do I need a lot of data to build AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. While more data generally improves AI model accuracy, we can leverage transfer learning, pre-trained models, and data augmentation techniques to build effective solutions with limited data. For GPT-4 and other large language models, we can create powerful applications with minimal training data. We assess your data during consultation and recommend the best approach for your situation."
      }
    },
    {
      "@type": "Question",
      name: "Can you integrate AI into our existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in seamlessly integrating AI capabilities into existing applications and workflows. Whether you're using custom software, enterprise systems, or popular platforms, we can add AI features through APIs, microservices, or direct integration. Our solutions are designed to work with your current tech stack without disrupting operations."
      }
    },
    {
      "@type": "Question",
      name: "What industries do you serve with AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve diverse industries including healthcare, finance, e-commerce, manufacturing, logistics, education, real estate, legal services, marketing, and more. Our AI solutions are customized for industry-specific challenges such as medical diagnosis assistance, fraud detection, inventory optimization, quality control, personalized learning, document analysis, and customer service automation."
      }
    },
    {
      "@type": "Question",
      name: "How do you ensure AI model accuracy and reliability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We ensure accuracy through rigorous testing, cross-validation, performance monitoring, and continuous optimization. Our process includes data quality checks, model validation on test datasets, A/B testing, bias detection and mitigation, and real-world performance monitoring. We also implement fallback mechanisms and human-in-the-loop systems for critical applications to maintain reliability."
      }
    },
    {
      "@type": "Question",
      name: "What is the ROI of implementing AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROI varies by use case, but our clients typically see significant returns including 40-60% reduction in manual tasks, 30-50% cost savings in operations, 25-40% improvement in customer satisfaction, 20-35% increase in revenue through personalization, and faster decision-making. We help define clear KPIs and track metrics to measure and optimize your AI investment returns."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Transform Your Business with AI",
  description: "Step-by-step guide to implementing AI solutions in your business",
  totalTime: "P12W",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discovery & Assessment",
      text: "Identify business challenges and evaluate AI opportunities. Assess current data, infrastructure, and readiness for AI adoption.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Conduct stakeholder interviews to understand pain points"
        },
        {
          "@type": "HowToDirection",
          text: "Analyze existing data sources and quality"
        },
        {
          "@type": "HowToDirection",
          text: "Identify high-impact use cases for AI implementation"
        }
      ]
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Strategy & Planning",
      text: "Create a comprehensive AI roadmap with clear objectives, timelines, and success metrics aligned with business goals.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Define specific AI use cases and expected outcomes"
        },
        {
          "@type": "HowToDirection",
          text: "Establish KPIs and ROI measurement framework"
        },
        {
          "@type": "HowToDirection",
          text: "Create phased implementation plan"
        }
      ]
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Data Preparation",
      text: "Collect, clean, and prepare data for AI model training. Ensure data quality, security, and compliance.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Gather and consolidate relevant data sources"
        },
        {
          "@type": "HowToDirection",
          text: "Clean and normalize data for consistency"
        },
        {
          "@type": "HowToDirection",
          text: "Implement data governance and security measures"
        }
      ]
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "AI Model Development",
      text: "Build and train custom AI models using appropriate algorithms, frameworks, and best practices.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Select optimal AI models and algorithms"
        },
        {
          "@type": "HowToDirection",
          text: "Train models with prepared datasets"
        },
        {
          "@type": "HowToDirection",
          text: "Fine-tune and optimize model performance"
        }
      ]
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Testing & Validation",
      text: "Rigorously test AI models for accuracy, reliability, and bias. Validate against real-world scenarios.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Conduct comprehensive accuracy testing"
        },
        {
          "@type": "HowToDirection",
          text: "Perform bias detection and mitigation"
        },
        {
          "@type": "HowToDirection",
          text: "Validate with stakeholder feedback"
        }
      ]
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Deployment & Integration",
      text: "Deploy AI solutions and integrate seamlessly with existing systems and workflows.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Set up production infrastructure"
        },
        {
          "@type": "HowToDirection",
          text: "Integrate with existing applications via APIs"
        },
        {
          "@type": "HowToDirection",
          text: "Implement monitoring and logging systems"
        }
      ]
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Monitoring & Optimization",
      text: "Continuously monitor AI performance, gather insights, and optimize models for improved results.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Track performance metrics and KPIs"
        },
        {
          "@type": "HowToDirection",
          text: "Collect user feedback and usage data"
        },
        {
          "@type": "HowToDirection",
          text: "Regularly retrain and update models"
        }
      ]
    }
  ]
};

const LetsTalkAIPage: React.FC = () => {
  return (
    <>
      <JSONLDSchema schema={aiServiceSchema} />
      <JSONLDSchema schema={aiTechnologiesSchema} />
      <JSONLDSchema schema={breadcrumbSchema} />
      <JSONLDSchema schema={faqSchema} />
      <JSONLDSchema schema={howToSchema} />

      {/* Page Content */}
      <main>
        <LetsTalkAIHero />
        <LetsTalkAISecondSection />
        <section id="ai-consultation">
          <AIConsultation />
        </section>
        <section id="machine-learning">
          <MachineLearning />
        </section>
        <section id="nlp">
          <NaturalLanguageProcessing />
        </section>
        <section id="computer-vision">
          <ComputerVision />
        </section>
        <section id="ai-strategy">
          <AIStrategy />
        </section>
        <section id="ai-transformation-guide">
          <AITransformationGuide />
        </section>
        <LetsTalkAIFinalSection />
      </main>
    </>
  );
};

export default LetsTalkAIPage;