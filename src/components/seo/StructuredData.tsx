type OrganizationSchema = {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email?: string;
    contactOption?: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
  };
  sameAs: string[];
  address?: {
    '@type': string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
};

type VideoObjectSchema = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  thumbnailUrl: string | string[];
  uploadDate: string;
  contentUrl: string;
  embedUrl: string;
  duration?: string;
  interactionStatistic?: {
    '@type': string;
    interactionType: string;
    userInteractionCount: number;
  };
  publisher?: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
      width: string;
      height: string;
    };
  };
};

export function VideoStructuredData() {
  // Replace these values with your actual video details
  const videoSchema: VideoObjectSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Sage Devs - Our Development Process',
    description: 'Learn about our software development process and how we deliver high-quality solutions.',
    thumbnailUrl: [
      'https://sagedevs.tech/images/video-thumbnail.jpg',
      'https://sagedevs.tech/images/video-thumbnail-large.jpg'
    ],
    uploadDate: '2024-01-15T08:00:00+08:00', // Replace with actual upload date
    contentUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // Replace with actual video URL
    embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // Replace with actual embed URL
    duration: 'PT3M45S', // ISO 8601 duration format (3 minutes 45 seconds)
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: 1234 // Replace with actual view count
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sage Devs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sagedevs.tech/logo.png',
        width: '600',
        height: '60'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
}

export function OrganizationStructuredData() {
  const organizationSchema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sage Devs',
    url: 'https://sagedevs.tech',
    logo: 'https://sagedevs.tech/logo.png',
    description: 'Full Stack Software Agency & UI/UX Studio specializing in modern web development and design.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0199', // Replace with actual phone number
      contactType: 'customer service',
      email: 'contact@sagedevs.tech',
      contactOption: 'TollFree',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://github.com/SageDevs',
      'https://twitter.com/SageDevs',
      'https://www.linkedin.com/company/sage-devs',
      'https://www.instagram.com/sagedevs',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94107',
      addressCountry: 'US'
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
