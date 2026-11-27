import { organizationSchema } from '@/lib/organization';
import { JsonLd } from '@/components/seo/StructuredData';
import { business } from '@/lib/business';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { brand } from '@/lib/brand';
const displayFont = localFont({src:'../../public/fonts/space-grotesk-latin-wght-normal.woff2',variable:'--font-display',display:'swap'});
const bodyFont = localFont({src:'../../public/fonts/manrope-latin-wght-normal.woff2',variable:'--font-body',display:'swap'});
import ConversionEvents from '@/components/site/ConversionEvents';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import './tokens.css';
import './premium.css';
import './routes.css';
import './support.css';
import GooeyNavWithHeader from '@/blocks/Components/GooeyNav/GooeyNav';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Assistant from '@/components/site/Assistant';
const items = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web & App Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "WordPress Development", href: "/services/wordpress-development" },
    { label: "Shopify Development", href: "/services/shopify-development" },
      { label: "SaaS & Product Dev", href: "/services/saas-development" },
      { label: "Cloud & DevOps", href: "/services#cloud" },
      { label: "Maintenance & Support", href: "/services#maintenance-support" },
    ],
  },
  {
    label: "Case Studies",
    href: "/projects",
    children: [
      { label: "Web Apps", href: "/case-studies#case-studies-grid" },
      { label: "SaaS", href: "/case-studies#case-studies-grid" },
      { label: "E-commerce", href: "/case-studies#case-studies-grid" },
      { label: "Enterprise", href: "/case-studies#case-studies-grid" },
    ],
  },
  { label: "Pricing & Plans", href: "/pricing" },
  { 
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog / Insights", href: "/blog" },
      { label: "Guides & Templates", href: "/resources#guides-templates" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Team", href: "/about#team" },  
      { label: "Careers", href: "/careers" }, 
      { label: "Projects", href: "/projects" },  
    ],
  },
  {
    label: "Contact",
    href: "/contact",   
    cta: true,
    children: [
      { label: "Get in Touch (form)", href: "/contact#contact-form" },
      { label: "FAQs", href: "/faq" },
      { label: "Book a Call", href: business.bookingUrl, external: true },
    ],
  }
];

export const metadata: Metadata = {
  metadataBase: new URL('https://sagedevs.tech'),
  title: { default: 'Sage Devs | Software Development & Design', template: '%s | Sage Devs' },
  description: 'Software development, web design and AI solutions from Sage Devs. Thoughtfully designed digital products, built with care.',
  // The existing HTML verification file remains at /googleb45aa620d0bc55ca.html.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {}),
  },
  applicationName: 'Sage Devs',
  appleWebApp: { capable: true, title: 'Sage Devs', statusBarStyle: 'black-translucent' },
  icons: { icon: [{ url: brand.favicon }, { url: '/brand/icon-32.png', type: 'image/png', sizes: '32x32' }], apple: brand.appleIcon },
  manifest: '/manifest.json',
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#101114' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}><body className="glass-site"><a className="skip-link" href="#main-content">Skip to content</a><GooeyNavWithHeader items={items}><Image className="official-wordmark" src={brand.logo} alt="Sage Devs" width={900} height={257} priority /></GooeyNavWithHeader><main id="main-content" tabIndex={-1}>{children}</main><Footer /><Assistant /><Analytics /><ConversionEvents/><JsonLd data={organizationSchema}/></body></html>;
}
