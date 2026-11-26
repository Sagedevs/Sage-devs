'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Code2, Database, Cloud, ShieldCheck, GitBranch, Users, Search, Plus, X } from 'lucide-react';
import { faqCategories } from '@/data/faq';

const topics = [
  { label: 'Development', icon: Code2, description: 'Applications, architecture & APIs' },
  { label: 'Data', icon: Database, description: 'Databases, models & migrations' },
  { label: 'Cloud & DevOps', icon: Cloud, description: 'Infrastructure & deployment' },
  { label: 'Security', icon: ShieldCheck, description: 'Protection & performance' },
  { label: 'Our process', icon: GitBranch, description: 'Tools, testing & code quality' },
  { label: 'Working together', icon: Users, description: 'Planning, delivery & support' },
];

// The homepage reuses the original FAQ data without its full-page navigation.
export function HomepageFAQ() {
  const [opened, setOpened] = useState<number | null>(null);
  const questions = [...faqCategories[5].items, faqCategories[0].items[0]];
  return <section id="home-faq" className="premium-section home-faq" aria-labelledby="home-faq-title">
    <div className="premium-shell home-faq-layout">
      <div className="home-faq-intro"><p className="section-label">BEFORE WE BEGIN</p><h2 id="home-faq-title">A little clarity.<br/><em>A better start.</em></h2><p>Scope, collaboration, and what comes after launch. A few things you might be wondering.</p><Link href="/faq" className="button button-glass">Explore all FAQs</Link></div>
      <div className="home-faq-list">{questions.map((item, index) => {
        const open = opened === index;
        return <div className={`home-faq-item${open ? ' is-open' : ''}`} key={item.question}>
          <h3><button id={`home-question-${index}`} aria-expanded={open} aria-controls={`home-answer-${index}`} onClick={() => setOpened(open ? null : index)}><span>{item.question}</span><Plus size={20} aria-hidden="true"/></button></h3>
          <div id={`home-answer-${index}`} className="home-faq-answer" role="region" aria-labelledby={`home-question-${index}`} aria-hidden={!open} inert={!open}><div><p>{item.answer}</p></div></div>
        </div>;
      })}</div>
    </div>
  </section>;
}

export default function FAQ() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<number | null>(null);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const resultsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const results = faqCategories.map((group, index) => ({
    ...group, index,
    items: group.items.map((item, itemIndex) => ({ ...item, id: `${index}-${itemIndex}` }))
      .filter(item => `${item.question} ${item.answer}`.toLocaleLowerCase().includes(normalizedQuery)),
  })).filter(group => (category === null || category === group.index) && group.items.length);
  const count = results.reduce((total, group) => total + group.items.length, 0);

  function selectTopic(index: number | null) {
    setCategory(index);
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
  }
  function toggleItem(id: string) {
    setOpenItems(previous => { const next = new Set(previous); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  }

  return <div className="faq-page">
    <section className="route-opening faq-opening">
      <div className="shell">
        <div className="faq-opening-heading">
          <div><p className="section-label">THE DETAILS, EXPLAINED</p><h1>Good questions.<br/><span>Clear answers.</span></h1></div>
          <div><p className="opening-description">From the first conversation to life after launch. Get to know how we build, collaborate, and support your work.</p><a className="quiet-link" href="#faq-answers">Find your answer <ArrowDown size={16}/></a></div>
        </div>
        <div className="faq-search"><Search size={21} aria-hidden="true"/><label className="sr-only" htmlFor="faq-search">Search questions and answers</label><input ref={searchRef} id="faq-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try “support”, “security”, or “project scope”" autoComplete="off" aria-controls="faq-answers"/>{query && <button aria-label="Clear FAQ search" onClick={() => { setQuery(''); searchRef.current?.focus(); }}><X size={17}/></button>}</div>
        <nav className="faq-topic-grid" aria-label="FAQ topics">{topics.map((topic, index) => <button key={topic.label} aria-pressed={category === index} onClick={() => selectTopic(category === index ? null : index)}><topic.icon size={23} strokeWidth={1.3}/><span><strong>{topic.label}</strong><small>{topic.description}</small></span><ArrowUpRight size={15}/></button>)}</nav>
      </div>
    </section>
    <div className="shell faq-directory" id="faq-answers" ref={resultsRef}>
      <aside className="faq-sidebar"><p className="section-label">BROWSE THE DETAILS</p><button className={category === null ? 'is-active' : ''} aria-pressed={category === null} onClick={() => setCategory(null)}>All questions <span>{faqCategories.reduce((sum, group) => sum + group.items.length, 0)}</span></button>{topics.map((topic, index) => <button key={topic.label} className={category === index ? 'is-active' : ''} aria-pressed={category === index} onClick={() => setCategory(index)}>{topic.label}<span>{faqCategories[index].items.length}</span></button>)}<div className="faq-personal-note"><p>Something more specific?</p><Link href="/contact" className="quiet-link">Talk with our team <ArrowUpRight size={15}/></Link></div></aside>
      <div className="faq-results"><div className="faq-results-heading"><p role="status" aria-live="polite">{count} {count === 1 ? 'answer' : 'answers'}{normalizedQuery ? ` for “${query.trim()}”` : category === null ? ' to help you get started' : ` about ${topics[category].label.toLowerCase()}`}</p>{(query || category !== null) && <button onClick={() => { setQuery(''); setCategory(null); }}>Reset filters <X size={13}/></button>}</div>
        {results.map(group => <section className="faq-category" key={group.category} aria-labelledby={`faq-category-${group.index}`}><div className="faq-category-heading"><span>{String(group.index + 1).padStart(2, '0')}</span><h2 id={`faq-category-${group.index}`}>{group.category}</h2></div><div>{group.items.map(item => {
          const open = openItems.has(item.id);
          return <div className={`faq-answer ${open ? 'is-open' : ''}`} key={item.id}><h3><button id={`faq-question-${item.id}`} aria-expanded={open} aria-controls={`faq-answer-${item.id}`} onClick={() => toggleItem(item.id)}><span>{item.question}</span><Plus size={19} strokeWidth={1.4} aria-hidden="true"/></button></h3><div id={`faq-answer-${item.id}`} className="faq-answer-body" role="region" aria-labelledby={`faq-question-${item.id}`} hidden={!open}><p>{item.answer}</p></div></div>;
        })}</div></section>)}
        {!count && <div className="faq-empty"><Search size={28} strokeWidth={1}/><h2>No matching answers.</h2><p>Try a broader phrase or browse all topics. We’re happy to help with a specific question.</p><button className="premium-button" onClick={() => { setQuery(''); setCategory(null); searchRef.current?.focus(); }}>Show all answers <ArrowUpRight size={16}/></button></div>}
      </div>
    </div>
    <section className="shell faq-next"><div><p className="section-label">LET’S MAKE IT SPECIFIC</p><h2>Your project has<br/><span>its own questions.</span></h2></div><div><p>Tell us what you have in mind. We’ll help you understand the approach, the scope, and the next step.</p><Link href="/contact" className="premium-button">Discuss your project <ArrowUpRight size={16}/></Link><div className="faq-next-links"><a href="https://wa.me/923259684493?text=Hi%20there!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a><a href="mailto:info@sagedevs.tech">Email the team <ArrowUpRight size={14}/></a><Link href="/case-studies">Explore our work <ArrowUpRight size={14}/></Link></div></div></section>
  </div>;
}
