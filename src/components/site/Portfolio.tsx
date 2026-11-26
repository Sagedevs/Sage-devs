'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { portfolio, portfolioCategories, portfolioDisplayOrder, type CategoryId } from '@/data/portfolio';
import { caseStudies, caseStudySlug } from '@/data/caseStudies';
const allProjects = portfolioDisplayOrder();
export default function Portfolio() {
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [search,setSearch]=useState('');
  const visible=(category==='all'?allProjects:portfolio[category]).filter(project=>`${project.name} ${project.desc} ${project.tech.join(' ')}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <div id="portfolio" className="shell section portfolio-directory">
    <div className="portfolio-directory-heading"><div><p className="section-label">EXPLORE THE PORTFOLIO</p><h2>A broader perspective.</h2></div><div className="field"><label htmlFor="project-search">Search projects</label><input id="project-search" type="search" placeholder="Name or technology" value={search} onChange={event=>setSearch(event.target.value)}/></div></div>
    <div className="filter-bar" aria-label="Project categories"><button aria-pressed={category==='all'} onClick={()=>setCategory('all')}>All projects</button>{portfolioCategories.map(item => <button key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id as CategoryId)}>{item.name}</button>)}</div>
    <p className="small" role="status">{visible.length} projects{category!=='all'&&` in ${portfolioCategories.find(item => item.id === category)?.name}`}</p>
    {!visible.length&&<div className="empty-state"><p>No projects match your search. Try another phrase or category.</p><button className="button button-glass" onClick={()=>{setSearch('');setCategory('all');}}>Show all projects</button></div>}
    <div className="portfolio-grid">{visible.map(project => {
      const study=caseStudies.find(item=>new URL(item.link).hostname.replace(/^www\./,'')===project.url.replace(/^www\./,''));
      return <article key={project.url}>
        <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="project-visual" aria-label={`Visit ${project.name} (opens in a new tab)`}><Image src={project.image} alt={study?.imageAlt ?? `${project.name} portfolio presentation`} width={1000} height={700} sizes="(max-width: 760px) 100vw, 50vw" /></a>
        <h3>{study?<Link href={`/case-studies/${caseStudySlug(study)}`}>{project.name}</Link>:project.name}</h3><p>{project.desc.split('. ')[0]}.</p><div className="tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions"><a className="text-link" href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">Visit website<span className="sr-only"> (opens in a new tab)</span></a></div>
      </article>;
    })}</div>
  </div>;
}
