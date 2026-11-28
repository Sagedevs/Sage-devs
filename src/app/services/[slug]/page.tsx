import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { servicePages } from '@/data/servicePages';
import { caseStudies, caseStudySlug } from '@/data/caseStudies';
import { portfolioDisplayOrder } from '@/data/portfolio';
import { pageMetadata, siteUrl } from '@/lib/seo';
import { BreadcrumbSchema, JsonLd } from '@/components/seo/StructuredData';
import { ContactCTA } from '@/components/site/Editorial';

export const dynamicParams = false;
export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find(item => item.slug === slug);
  return service ? pageMetadata(service.title, service.description, `/services/${slug}`) : {};
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find(item => item.slug === slug);
  if (!service) notFound();
  const work = caseStudies.filter(item => service.cases.includes(item.id)).map(study => ({
    name: study.title, image: study.image, alt: study.imageAlt || `${study.title} website presentation`,
    href: `/case-studies/${caseStudySlug(study)}`, url: new URL(study.link).hostname.replace(/^www\./,''), external: false,
  }));
  for (const project of portfolioDisplayOrder()) {
    if (service.portfolioDomains?.includes(project.url) && !work.some(item => item.url === project.url)) {
      const study = caseStudies.find(item => new URL(item.link).hostname.replace(/^www\./,'') === project.url);
      work.push({ name: project.name, image: study?.image || project.image,
        alt: study?.imageAlt || `${project.name} website portfolio preview`,
        href: study ? `/case-studies/${caseStudySlug(study)}` : `https://${project.url}`, url: project.url, external: !study });
    }
  }
  return <>
    <section className={`route-opening service-landing service-${slug}`}><div className="shell">
      <nav className="project-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span aria-current="page">{service.title}</span></nav>
      <div className="service-landing-grid"><div><p className="section-label">{service.title}</p><h1>{service.heading}</h1><p className="opening-description">{service.intro}</p><div className="opening-actions"><Link className="premium-button" href="/contact#contact-form">Discuss your project <ArrowUpRight size={17}/></Link><a className="quiet-link" href="#scope">Explore the scope <ArrowDown size={15}/></a></div></div>
      <div className="service-blueprint"><p className="section-label">THE EXPERIENCE, CONNECTED</p><strong>{service.blueprint}</strong><ol>{service.stages.map((stage,index) => <li key={stage}>{stage}<span>{String(index+1).padStart(2,'0')}</span></li>)}</ol></div></div>
      <div className="opening-baseline"><span>LAHORE, PAKISTAN</span><span>WORKING WITH TEAMS WORLDWIDE</span></div>
    </div></section>
    <section id="scope" className="shell section"><p className="section-label">WHAT WE CAN BUILD</p><h2>{service.title}, shaped around your business.</h2><div className="service-scope-grid">{service.scope.map(item => <article key={item.title} data-reveal><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="tags">{service.technologies.map(item => <span key={item}>{item}</span>)}</div></section>
    <section className="shell section"><p className="section-label">HOW THE WORK TAKES SHAPE</p><h2>Clear decisions. Reviewable progress.</h2><ol className="service-process">{service.process.map((step,index) => <li key={step.title} data-reveal><span>{String(index+1).padStart(2,'0')}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></section>
    {work.length > 0 && <section className="shell section"><div className="section-topline"><p className="section-label">FROM THE PORTFOLIO</p><Link className="button button-glass" href="/projects">View all projects <ArrowUpRight size={16}/></Link></div><h2>{service.workLabel || 'Explore related work.'}</h2><div className="service-work">{work.map(project => <Link data-reveal key={project.url} href={project.href} {...(project.external ? {target:'_blank',rel:'noopener noreferrer'} : {})}><Image src={project.image} alt={project.alt} width={1200} height={675} sizes="(max-width:760px) 90vw, 550px"/><span>{project.name}<small>{project.external ? 'Visit website ↗' : 'View case study ↗'}</small></span></Link>)}</div></section>}
    <section className="shell section"><p className="section-label">BEFORE WE BEGIN</p><h2>A little clarity on the details.</h2><div className="service-faq">{service.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div><h3>Connected capabilities</h3><div className="service-related">{service.related.map(slug => { const related = servicePages.find(item => item.slug === slug)!; return <Link className="button button-glass" href={`/services/${slug}`} key={slug}>{related.title}<ArrowUpRight size={15}/></Link>; })}</div></section>
    <ContactCTA/>
    <BreadcrumbSchema items={[{ name:'Services',path:'/services' },{ name:service.title,path:`/services/${slug}` }]}/>
    <JsonLd data={{'@context':'https://schema.org','@type':'Service','@id':`${siteUrl}/services/${slug}#service`,name:service.title,description:service.description,url:`${siteUrl}/services/${slug}`,provider:{'@id':`${siteUrl}/#organization`},areaServed:'Worldwide'}}/>
  </>;
}
