import { brand } from './brand';
import { business, openingHoursSpecification } from './business';
import { siteUrl } from './seo';
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'], '@id': `${siteUrl}/#organization`,
      name: 'Sage Devs', url: siteUrl,
      description: 'Software development, web design and AI automation from Lahore, Pakistan, for businesses worldwide.',
      logo: { '@type': 'ImageObject', url: `${siteUrl}${brand.logo}`, width: 2700, height: 771 },
      image: `${siteUrl}${brand.socialImage}`,
      email: business.email, telephone: business.telephone,
      address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
      areaServed: 'Worldwide',
      openingHoursSpecification,
      contactPoint: { '@type':'ContactPoint',contactType:'Project inquiries',email:business.email,telephone:business.telephone,url:`${siteUrl}/contact`,availableLanguage:['English','Urdu'],hoursAvailable:openingHoursSpecification },
      founder: {'@id':`${siteUrl}/about#founder`},
      sameAs: ['https://www.linkedin.com/company/sagedevs/'],
    },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Sage Devs', url: siteUrl, inLanguage: 'en', publisher: { '@id': `${siteUrl}/#organization` } },
  ],
};
