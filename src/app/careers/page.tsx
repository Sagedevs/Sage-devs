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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },

  // Alternate Languages (if applicable)
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

// JSON-LD Structured Data for Job Postings
const jobPostingsSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  'title': 'Multiple Positions Available',
  'description': 'Sage Devs is hiring talented developers, designers, and digital marketing specialists to join our elite team building cutting-edge digital solutions.',
  'identifier': {
    '@type': 'PropertyValue',
    'name': 'Sage Devs',
    'value': 'careers-2025'
  },
  'datePosted': '2025-01-01',
  'validThrough': '2025-12-31',
  'employmentType': ['FULL_TIME', 'PART_TIME', 'CONTRACTOR'],
  'hiringOrganization': {
    '@type': 'Organization',
    'name': 'Sage Devs',
    'sameAs': 'https://sagedevs.tech',
    'logo': 'https://sagedevs.tech/logo.png',
    'url': 'https://sagedevs.tech'
  },
  'jobLocation': {
    '@type': 'Place',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Lahore',
      'addressRegion': 'Punjab',
      'addressCountry': 'PK'
    }
  },
  'baseSalary': {
    '@type': 'MonetaryAmount',
    'currency': 'PKR',
    'value': {
      '@type': 'QuantitativeValue',
      'minValue': 80000,
      'maxValue': 300000,
      'unitText': 'MONTH'
    }
  },
  'jobBenefits': [
    'Health insurance',
    'Flexible work hours',
    'Remote work options',
    'Learning and development budget',
    'Paid time off',
    'Latest tech equipment',
    'Performance bonuses'
  ],
  'workHours': 'Flexible',
  'applicationContact': {
    '@type': 'ContactPoint',
    'contactType': 'Recruitment',
    'email': 'careers@sagedevs.tech'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Sage Devs',
  'url': 'https://sagedevs.tech',
  'logo': 'https://sagedevs.tech/logo.png',
  'description': 'Full Stack Software Agency & UI/UX Studio specializing in AI integration, React, Next.js, and modern web development',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Lahore',
    'addressRegion': 'Punjab',
    'addressCountry': 'PK'
  },
  'sameAs': [
    'https://www.linkedin.com/company/sagedevs',
    'https://twitter.com/sagedevs',
    'https://github.com/sagedevs'
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Customer Service',
    'email': 'careers@sagedevs.tech',
    'availableLanguage': ['English', 'Urdu']
  }
};

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

export default function CareersPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen">
        <CareerApplication />
      </main>
    </>
  );
}