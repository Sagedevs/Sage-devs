import type { Metadata } from 'next';

const faqMetadata: Metadata = {
  title: 'Frequently Asked Questions | Sage Devs - Software Development',
  description: 'Get answers to common questions about our software development services, pricing, process, and more. Learn how Sage Devs can help bring your ideas to life.',
  keywords: 'software development FAQ, web development questions, app development process, pricing information, project timeline, technology stack, support services, hiring process, Sage Devs FAQ',
  openGraph: {
    title: 'Frequently Asked Questions | Sage Devs',
    description: 'Find answers to common questions about our development process, services, pricing, and more. Everything you need to know about working with Sage Devs.',
    url: 'https://sagedevs.tech/faq',
    siteName: 'Sage Devs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sagedevs.tech/og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Sage Devs FAQ - Frequently Asked Questions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Sage Devs',
    description: 'Get answers to common questions about our development services, process, and support. Learn how we can help with your next project.',
    creator: '@Abdul_Ahadt1',
    images: ['https://sagedevs.tech/og-banner.webp'],
  },
};

export default faqMetadata;
