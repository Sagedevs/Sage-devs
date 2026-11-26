import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import ArticleList from '@/components/site/ArticleList';
import { articles } from '@/data/articles';
const featured=articles[0];
export default function BlogPage(){return <><section className="route-opening journal-opening"><div className="shell"><div className="journal-masthead"><div><p className="section-label">IDEAS / PERSPECTIVES / PRACTICE</p><h1>The journal.</h1></div><p>Notes on design, technology,<br/>and building useful things.</p></div><div className="journal-lead"><Link className="journal-lead-image" href={featured.href}><Image src={featured.image} alt="" width={1000} height={625} priority sizes="(max-width:760px) 100vw, 60vw"/></Link><div><p className="section-label">FROM THE ARCHIVE / {featured.category}</p><h2><Link href={featured.href}>{featured.title}</Link></h2><p>{featured.excerpt}</p><div className="journal-article-meta"><span>{featured.date} · {featured.readTime}</span><Link href={featured.href} className="quiet-link">Read the story <ArrowUpRight size={17}/></Link></div></div></div><a className="quiet-link" href="#journal">Explore all articles <ArrowDown size={15}/></a></div></section><ArticleList/><BreadcrumbSchema items={[{name:'Journal',path:'/blog'}]}/></>}
