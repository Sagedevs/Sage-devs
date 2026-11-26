import type { Metadata } from 'next';
import { brand } from './brand';
export const siteUrl = 'https://sagedevs.tech';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: `${title} | Sage Devs` }, description, alternates: { canonical: path },
    openGraph: { title: `${title} | Sage Devs`, description, url: path, siteName: 'Sage Devs', type: 'website', locale: 'en_US', images: [{ url: brand.socialImage, width: 1200, height: 630, alt: 'Sage Devs — software development and design' }] },
    twitter: { card: 'summary_large_image', title: `${title} | Sage Devs`, description, images: [brand.socialImage] },
  };
}
