import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, caseStudySlug } from '@/data/caseStudies';
import { pageMetadata, siteUrl } from '@/lib/seo';
import { business } from '@/lib/business';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/StructuredData';
export const dynamicParams = false;
export function generateStaticParams() { return caseStudies.map(study=>({slug:caseStudySlug(study)})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const study=caseStudies.find(item=>caseStudySlug(item)===slug);
  if(!study) return {};
  const metadata=pageMetadata(study.title,study.subtitle,`/case-studies/${slug}`);
  return {...metadata,openGraph:{...metadata.openGraph,images:[{url:study.image,alt:study.imageAlt??`${study.title} project preview`}]},twitter:{...metadata.twitter,images:[study.image]}};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const study=caseStudies.find(item=>caseStudySlug(item)===slug);
  if(!study) notFound();
  const service=study.id===12?['E-commerce development','ecommerce']:study.id===11?['WordPress development','wordpress']:['Web & app development','web-app'];
  return <>
    <section className="route-opening project-opening"><div className="shell">
      <nav className="project-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span aria-current="page">{study.title}</span></nav>
      <p className="section-label">{study.category}</p><h1>{study.title}</h1><p className="opening-description">{study.subtitle}</p>
      <a className="button button-glass" href={study.link} target="_blank" rel="noopener noreferrer">Visit live website<span className="sr-only"> (opens in a new tab)</span></a>
      <figure className="project-feature-image"><Image src={study.image} alt={study.imageAlt??`${study.title} website presentation`} width={1400} height={900} priority sizes="(max-width: 760px) 100vw, 1200px"/></figure>
    </div></section>
    <section className="shell section project-story"><aside><p className="section-label">PROJECT OVERVIEW</p><h2>{study.scope}</h2><div className="tags">{study.technologies.map(tech=><span key={tech}>{tech}</span>)}</div><Link className="text-link" href={`/services#${service[1]}`}>{service[0]}</Link></aside><div><h2>The context</h2><p>{study.challenge}</p><h2>The experience</h2><p>{study.solution}</p><a className="text-link" href={study.link} target="_blank" rel="noopener noreferrer">Explore {study.title}</a></div></section>
    <section className="shell project-next"><div><p className="section-label">HAVE SOMETHING IN MIND?</p><h2>Let’s shape your next project.</h2></div><div className="project-actions"><a className="premium-button" href={business.bookingUrl} target="_blank" rel="noopener noreferrer">Book a call</a><Link className="button button-glass" href="/projects">View all projects</Link></div></section>
    <BreadcrumbSchema items={[{name:'Projects',path:'/projects'},{name:study.title,path:`/case-studies/${slug}`}]}/>
    <JsonLd data={{'@context':'https://schema.org','@type':'WebPage','@id':`${siteUrl}/case-studies/${slug}#webpage`,url:`${siteUrl}/case-studies/${slug}`,name:study.title,description:study.subtitle,isPartOf:{'@id':`${siteUrl}/#website`},about:{'@type':'WebSite',name:study.title,url:study.link},image:`${siteUrl}${study.image}`}}/>
  </>;
}
