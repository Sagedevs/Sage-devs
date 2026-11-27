import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { servicePages } from '@/data/servicePages';
export const metadata = pageMetadata('Sitemap', 'Find every page on the Sage Devs website: services, projects, company information, resources and contact.', '/sitemap');
const groups = [
  { title: 'Explore the studio', note: 'People, purpose, and possibilities.', links: [['Home', '/'], ['About us', '/about'], ['Careers', '/careers'], ['Contact', '/contact']] },
  { title: 'What we do', note: 'Capabilities and work in the world.', links: [['Services', '/services'], ['AI solutions', '/letstalkai'], ['Projects', '/projects'], ['Case studies', '/case-studies'], ['Pricing', '/pricing']] },
  { title: 'Development & design', note: 'Find the right approach for your project.', links: servicePages.map(service => [service.title, `/services/${service.slug}`]) },
  { title: 'A little more insight', note: 'Useful tools and considered answers.', links: [['Resources', '/resources'], ['The journal', '/blog'], ['FAQs', '/faq']] },
  { title: 'The details', note: 'Our policies and terms.', links: [['Privacy policy', '/privacy'], ['Terms of service', '/terms']] },
];
export default function SitemapPage() { return <section className="shell site-directory"><header><p className="section-label">SAGE DEVS / DIRECTORY</p><h1>Find your way.</h1><p>Every corner of the studio, at a glance.</p></header><nav aria-label="Sitemap">{groups.map((group, index) => <section key={group.title}><div><span>0{index + 1}</span><h2>{group.title}</h2><p>{group.note}</p></div><div>{group.links.map(([title, href]) => <Link key={href} href={href}>{title}<ArrowUpRight size={18}/></Link>)}</div></section>)}</nav><BreadcrumbSchema items={[{name:'Sitemap',path:'/sitemap'}]}/></section>; }
