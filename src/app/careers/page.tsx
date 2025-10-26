import { Metadata } from 'next';
import CareerApplication from '@/components/Careers';

export const metadata: Metadata = {
  title: 'Careers at Sage Devs | Join Our Elite Digital Innovation Team',
  description: 'Join Sage Devs, a leading full-stack software agency in Pakistan. We\'re hiring talented developers, designers, and digital marketers. Work on cutting-edge AI projects with competitive benefits, flexible hours, and remote options.',
  keywords: [
    'Sage Devs careers',
    'software developer jobs Pakistan',
    'frontend developer jobs',
    'backend developer jobs',
    'UI/UX designer jobs',
    'digital marketing jobs',
    'remote developer jobs',
    'tech jobs Lahore',
    'React jobs Pakistan',
    'Next.js developer jobs',
    'full stack developer careers',
    'AI integration jobs',
    'web development careers',
    'tech startup jobs Pakistan'
  ],
  authors: [{ name: 'Sage Devs' }],
  creator: 'Sage Devs',
  publisher: 'Sage Devs',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sagedevs.tech/careers',
    siteName: 'Sage Devs',
    title: 'Careers at Sage Devs | Join Our Elite Team',
    description: 'Join our team of 11+ specialized experts building cutting-edge digital solutions. Competitive salary, flexible work culture, and innovative projects await.',
    images: [
      {
        url: '/og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Sage Devs Careers - Join Our Team',
        type: 'image/webp',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Sage Devs | Join Our Elite Team',
    description: 'Join our team of 11+ specialized experts building cutting-edge digital solutions. Competitive salary, flexible work culture, and innovative projects.',
    images: ['/og-banner.webp'],
    creator: '@sagedevs',
    site: '@sagedevs',
  },

  // Additional Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification
  verification: {
    google: 'googleb45aa620d0bc55ca', // Your actual verification code
  },

  // Alternate Languages
  alternates: {
    canonical: 'https://sagedevs.tech/careers',
    languages: {
      'en-US': 'https://sagedevs.tech/careers',
    },
  },

  // Category
  category: 'Careers',

  // Other
  applicationName: 'Sage Devs',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Organization Schema - Single source of truth
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Sage Devs',
  'url': 'https://sagedevs.tech',
  'logo': 'https://sagedevs.tech/logo.png',
  'description': 'Full Stack Software Agency & UI/UX Studio specializing in AI integration, React, Next.js, and modern web development',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Wapda town',
    'addressLocality': 'Lahore',
    'addressRegion': 'Punjab',
    'postalCode': '54400',
    'addressCountry': 'PK'
  },
  'sameAs': [
    'https://www.linkedin.com/company/sagedevs',
    'https://twitter.com/sagedevs',
    'https://github.com/sagedevs'
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Recruitment',
    'email': 'careers@sagedevs.tech',
    'availableLanguage': ['English', 'Urdu']
  },
  'foundingDate': '2023',
  'numberOfEmployees': {
    '@type': 'QuantitativeValue',
    'value': 11
  }
};

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://sagedevs.tech'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Careers',
      'item': 'https://sagedevs.tech/careers'
    }
  ]
};

// Note: For individual job posting schemas (handled in your CareerApplication component),
// make sure to include these missing fields in each job posting:
// - baseSalary
// - validThrough
// - jobLocation.address with all required fields (streetAddress, addressLocality, addressRegion, postalCode, addressCountry)

export default function CareersPage() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Individual Job Posting schemas are now handled in the component */}
      <main className="min-h-screen">
        <CareerApplication />
      </main>
    </>
  );
}