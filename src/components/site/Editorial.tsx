import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="shell"><p className="eyebrow">{eyebrow}</p><div className="page-intro-composition"><h1>{title}</h1><div className="intro-glass"><span className="glass-note-rule"/><p className="intro-copy">{description}</p></div></div></div></section>;
}
export function ContactCTA() {
  return <section className="contact-cta"><div className="shell cta-inner"><div><p className="eyebrow">A conversation worth having</p><h2>Your next project.<br />Our full attention.</h2></div><div><p>Tell us what you’re working on. We’ll bring the questions, the perspective, and a practical way forward.</p><Link className="button button-light" href="/contact">Start a conversation</Link></div></div></section>;
}
export function Process() {
  return <section className="shell section" id="our-process"><div className="section-heading"><p className="eyebrow">How we work</p><h2>A clear path.<br /><span className="muted">From idea to impact.</span></h2><p>Good work starts with understanding the problem. We keep you involved, make decisions together, and build in manageable steps.</p></div><div className="process-grid">{[
    ['Discover', 'We listen, ask questions, and define the scope, priorities, and measures of success.'],
    ['Design', 'We turn the brief into user journeys and prototypes, refining the details with your feedback.'],
    ['Develop', 'We build in reviewable stages, with careful attention to performance, accessibility, and reliability.'],
    ['Deliver', 'We test, prepare the handover, and agree on a launch and support plan that fits your team.'],
  ].map(([title, copy]) => <article key={title}><div className="process-rule" /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>;
}
export function SelectedWork() {
  const selected = [projects[5], projects[3]];
  return <section className="shell section" id="selected-work"><div className="section-heading inline-heading"><div><p className="eyebrow">Selected work</p><h2>Ideas made tangible.</h2></div><Link className="text-link" href="/projects">Explore the portfolio</Link></div><div className="work-grid">{selected.map((project, i) => <article className="work-item" key={project.id}><Link href={`/case-studies#${project.id}`} className={`work-image work-image-${i}`} aria-label={`Explore ${project.title}`}><Image src={i === 0 ? '/proj/khanjee.webp' : project.imageSrc} alt={i === 0 ? 'KhanJee restaurant brand and website presentation' : 'Conso programming language development environment'} width={1200} height={800} sizes="(max-width: 700px) 100vw, 50vw" /></Link><div className="work-caption"><h3>{i === 0 ? 'KhanJee Canada' : 'Conso'}</h3><span>{i === 0 ? 'WordPress · Hospitality' : 'Full stack · Developer tools'}</span></div></article>)}</div></section>;
}
