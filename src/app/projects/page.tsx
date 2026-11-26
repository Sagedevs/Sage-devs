import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { ContactCTA } from '@/components/site/Editorial';
import Portfolio from '@/components/site/Portfolio';
export const metadata = pageMetadata('Projects', 'Explore the Sage Devs portfolio across commerce, hospitality, professional services and digital products.', '/projects');
const selected=[{name:'KhanJee Canada',image:'/proj/khanjee.webp',category:'Hospitality',href:'/case-studies#case-8'},{name:'KLMNKO',image:'/proj/klmnko.webp',category:'Digital agency',href:'/case-studies#case-3'},{name:'Kelvin Melgar',image:'/proj/kelvin.webp',category:'Photography',href:'/case-studies#case-9'}];
export default function ProjectsPage(){return <><section className="route-opening projects-opening"><div className="shell"><div className="portfolio-opening-heading"><div><p className="section-label">THE PORTFOLIO</p><h1>Different worlds.<br/><span>One standard of craft.</span></h1></div><div><p className="opening-description">Digital experiences shaped around the people and businesses behind them.</p><a className="quiet-link" href="#portfolio">Find your inspiration <ArrowDown size={16}/></a></div></div><div className="portfolio-contact-sheet">{selected.map((project,index)=><Link key={project.name} href={project.href}><div><Image src={project.image} alt={`${project.name} project`} width={800} height={448} sizes="(max-width:760px) 80vw, 33vw" priority={index===0}/><span className="contact-sheet-index">0{index+1}</span></div><p><span>{project.name}<small>{project.category}</small></span><ArrowUpRight size={18}/></p></Link>)}</div></div></section><Portfolio/><ContactCTA/><BreadcrumbSchema items={[{name:'Projects',path:'/projects'}]}/></>}
