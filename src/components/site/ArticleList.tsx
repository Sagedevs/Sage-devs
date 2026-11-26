'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { articles } from '@/data/articles';
export default function ArticleList(){
 const [category,setCategory]=useState('All');const [search,setSearch]=useState('');const router=useRouter();
 useEffect(()=>{function legacyLink(){const match=window.location.hash.match(/^#blog-post-(\d+)$/);const post=match&&articles.find(a=>a.id===Number(match[1]));if(post)router.replace(post.href);}legacyLink();window.addEventListener('hashchange',legacyLink);return()=>window.removeEventListener('hashchange',legacyLink);},[router]);
 const visible=articles.filter(a=>(category==='All'||a.category===category)&&`${a.title} ${a.excerpt}`.toLowerCase().includes(search.toLowerCase()));
 return <section id="journal" className="shell section journal-directory"><div className="field"><label htmlFor="article-search">Search the journal</label><input id="article-search" type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by topic or title"/></div><div className="filter-bar" aria-label="Article categories">{['All',...new Set(articles.map(a=>a.category))].map(c=><button aria-pressed={c===category} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div><p role="status" className="small">{visible.length} {visible.length===1?'article':'articles'}</p><div className="article-grid">{visible.map(a=><article key={a.id}><Link href={a.href} className="article-image"><Image src={a.image} alt="" width={800} height={500} sizes="(max-width:760px) 100vw, 50vw"/></Link><p className="eyebrow">{a.category} · {a.readTime}</p><h2><Link href={a.href}>{a.title}</Link></h2><p>{a.excerpt}</p><p className="small">{a.date}</p><Link href={a.href} className="text-link">Read article</Link></article>)}</div>{!visible.length&&<p>No articles match your search. Try another topic or choose All.</p>}</section>
}
