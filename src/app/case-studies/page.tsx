import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { ContactCTA } from '@/components/site/Editorial';
import CaseStudies from '@/components/sections/CaseStudies';
export const metadata=pageMetadata('Case Studies','The thinking and engineering behind Sage Devs projects, including KhanJee, KLMNKO and Kelvin Melgar.','/case-studies');
export default function CaseStudiesPage(){return <><section className="route-opening case-opening"><div className="shell case-opening-grid"><div className="case-cover"><Image src="/proj/khanjee.webp" alt="KhanJee Canada brand and website" width={1100} height={616} priority sizes="(max-width:760px) 100vw, 60vw"/><div><span>FEATURED COLLABORATION</span><strong>KhanJee Canada</strong><small>Hospitality · WordPress · Reservations</small></div></div><div className="case-opening-copy"><p className="section-label">BEHIND THE WORK</p><h1>The brief.<br/>The thinking.<br/><span>The result.</span></h1><p className="opening-description">A closer look at the challenges, decisions, and details behind our digital experiences.</p><a className="quiet-link" href="#case-studies-grid">Explore the case studies <ArrowDown size={16}/></a></div></div></section><CaseStudies all/><ContactCTA/><BreadcrumbSchema items={[{name:'Case studies',path:'/case-studies'}]}/></>}
