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
