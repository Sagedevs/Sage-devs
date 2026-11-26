'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowUpRight, Briefcase, Check, CheckCircle2, Clock3, Search, X, MapPin, Heart, BookOpen, Laptop } from 'lucide-react';
import { team } from '@/data/team';
import { founderPortrait } from '@/lib/founder';

interface JobPosting {
  title: string;
  description: string;
  techStack: string[];
  type: 'Full-time' | 'Part-time' | 'Contract';
  location: string;
}

export const jobPostings: JobPosting[] = [
    {
  title: 'Sales Consultant',
  description: 'Find and connect with potential clients, pitch Sage Devs’ web and digital solutions, and help close deals. You’ll identify leads, build relationships, and coordinate with the tech team once clients are ready to start projects. Commission-based with potential for fixed + commission after proven success.',
  techStack: ['Client Communication', 'Sales Pitching', 'Lead Generation', 'Negotiation', 'CRM Tools'],
  type: 'Full-time',
  location: 'Lahore / Remote'
},

  
   
   
    {
      title: 'Digital Marketing Specialist',
      description: 'Execute digital campaigns across multiple channels. Manage SEO/SEM, social media marketing, and analyze campaign performance.',
      techStack: ['Google Ads', 'SEO', 'Social Media', 'Analytics', 'Content Marketing'],
      type: 'Full-time',
      location: 'Lahore / Hybrid'
    },
    {
      title: 'Full Stack Developer',
      description: 'Build scalable web applications end-to-end. Work with modern frameworks and cloud infrastructure to deliver high-performance solutions.',
      techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
      type: 'Full-time',
      location: 'Remote'
    },
   
    {
      title: 'Backend Developer',
      description: 'Design and implement robust APIs and server-side logic. Optimize database performance and ensure application scalability.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'Microservices'],
      type: 'Full-time',
      location: 'Remote'
    },
  
    {
      title: 'WordPress Developer',
      description: 'Develop and maintain WordPress websites, customize themes and plugins, optimize site performance, and ensure security best practices.',
      techStack: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript', 'WooCommerce'],
      type: 'Full-time',
      location: 'Remote / Hybrid'
    }
  
  ];

type ApplicationData = Record<'fullName' | 'email' | 'phone' | 'location' | 'position' | 'experience' | 'currentRole' | 'currentCompany' | 'portfolio' | 'linkedin' | 'github' | 'availability' | 'expectedSalary' | 'noticePeriod' | 'coverLetter' | 'skills' | 'education' | 'referral', string>;
const emptyApplication: ApplicationData = { fullName: '', email: '', phone: '', location: '', position: '', experience: '', currentRole: '', currentCompany: '', portfolio: '', linkedin: '', github: '', availability: '', expectedSalary: '', noticePeriod: '', coverLetter: '', skills: '', education: '', referral: '' };
type ApplicationField = { name: keyof ApplicationData; label: string; type?: string; required?: boolean; placeholder?: string; autoComplete?: string; options?: [string, string][]; wide?: boolean };
const applicationSections: { title: string; note: string; fields: ApplicationField[] }[] = [
  { title: 'A little about you', note: 'Start with the essentials.', fields: [
    { name: 'fullName', label: 'Full name', required: true, autoComplete: 'name' },
    { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
    { name: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: 'tel' },
    { name: 'location', label: 'Location', required: true, placeholder: 'City, country', autoComplete: 'address-level2' },
  ] },
  { title: 'Your experience', note: 'Help us understand your background.', fields: [
    { name: 'position', label: 'Position', required: true, options: jobPostings.map(job => [job.title, job.title]) },
    { name: 'experience', label: 'Years of experience', required: true, options: [['0-1', '0–1 years'], ['1-3', '1–3 years'], ['3-5', '3–5 years'], ['5-10', '5–10 years'], ['10+', '10+ years']] },
    { name: 'currentRole', label: 'Current role', autoComplete: 'organization-title' },
    { name: 'currentCompany', label: 'Current company', autoComplete: 'organization' },
    { name: 'skills', label: 'Key skills', required: true, placeholder: 'The tools and skills you work with', wide: true },
    { name: 'education', label: 'Education', required: true, placeholder: 'Your education or relevant qualifications', wide: true },
  ] },
  { title: 'Your work, in your words', note: 'Share what you’d like us to know.', fields: [
    { name: 'portfolio', label: 'Portfolio URL', type: 'url', placeholder: 'https://' },
    { name: 'linkedin', label: 'LinkedIn profile', type: 'url', placeholder: 'https://linkedin.com/in/' },
    { name: 'github', label: 'GitHub profile', type: 'url', placeholder: 'https://github.com/' },
    { name: 'coverLetter', label: 'Why Sage Devs?', type: 'textarea', required: true, wide: true, placeholder: 'Tell us why this role interests you and what you would bring to the team.' },
  ] },
  { title: 'The practical details', note: 'Availability and expectations.', fields: [
    { name: 'availability', label: 'Availability', required: true, options: [['immediate', 'Immediate'], ['2-weeks', '2 weeks'], ['1-month', '1 month'], ['2-months', '2 months'], ['3-months', '3+ months']] },
    { name: 'expectedSalary', label: 'Expected salary (PKR)', required: true, placeholder: 'Your expected range' },
    { name: 'noticePeriod', label: 'Notice period', placeholder: 'e.g. 1 month' },
    { name: 'referral', label: 'How did you hear about us?', options: [['linkedin', 'LinkedIn'], ['website', 'Company website'], ['referral', 'Employee referral'], ['job-board', 'Job board'], ['social-media', 'Social media'], ['other', 'Other']] },
  ] },
];
const hiringSteps = [
  ['Application review', 'We review your experience, skills, and interest in the role.'],
  ['Initial screening', 'A 30-minute conversation about your background and goals.'],
  ['Technical / portfolio review', 'An opportunity to show your work through practical evaluation.'],
  ['Meet the team', 'Get to know the people you could be working with.'],
  ['The offer', 'Discuss the role, expectations, and next steps together.'],
];

export default function CareerApplication() {
  const [formData, setFormData] = useState<ApplicationData>({ ...emptyApplication });
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const pending = useRef(false);
  const applicationRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<HTMLElement>(null);
  const returnFocus = useRef<HTMLButtonElement | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const filteredJobs = jobPostings.filter(job => `${job.title} ${job.description} ${job.techStack.join(' ')}`.toLowerCase().includes(searchQuery.trim().toLowerCase()) && (location === 'all' || job.location.toLowerCase().includes(location)));
  const selectedJob = jobPostings.find(job => job.title === formData.position);

  useEffect(() => {
    if (showForm) {
      applicationRef.current?.focus({ preventScroll: true });
      applicationRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  }, [showForm]);

  function apply(job: JobPosting, trigger: HTMLButtonElement) {
    returnFocus.current = trigger;
    setFormData(previous => ({ ...previous, position: job.title }));
    setSubmitSuccess(false); setSubmitError(''); setShowForm(true);
  }
  function backToPositions() {
    setShowForm(false);
    requestAnimationFrame(() => {
      const button = positionsRef.current?.querySelector<HTMLButtonElement>(`[data-role-index="${jobPostings.findIndex(job => job.title === formData.position)}"]`);
      (button || returnFocus.current)?.focus({ preventScroll: true });
      positionsRef.current?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    if (!event.currentTarget.reportValidity()) return;
    pending.current = true; setIsSubmitting(true); setSubmitError('');
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch('https://formspree.io/f/mnnggbpp', { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(20000) });
      if (!response.ok) throw new Error('Submission failed');
      setSubmitSuccess(true);
      setFormData(previous => ({ ...emptyApplication, position: previous.position }));
      applicationRef.current?.focus({ preventScroll: true });
      applicationRef.current?.scrollIntoView({ block: 'start', behavior: 'auto' });
    } catch {
      setSubmitError('We couldn’t send your application. Your information is still here. Please try again or email info@sagedevs.tech.');
    } finally { pending.current = false; setIsSubmitting(false); }
  }

  return <div className="careers-page">
    <section className="route-opening careers-opening"><div className="shell careers-intro-grid"><div><p className="section-label">CAREERS AT SAGE DEVS</p><h1>Bring your curiosity.<br/><span>Build your next chapter.</span></h1><p className="opening-description">For people who care about the details. Join a team working across design, engineering, and the business of building better digital experiences.</p><a href="#positions" className="premium-button" onClick={() => { if (showForm) backToPositions(); }}>Explore open roles <ArrowDown size={16}/></a><div className="careers-intro-meta"><span><MapPin size={13}/>Lahore & beyond</span><span>Remote and hybrid opportunities</span></div></div><div className="careers-studio-note"><div className="career-team-portraits">{team.slice(0, 3).map(member => <Image key={member.name} src={member.image} alt={member.name} width={120} height={150} sizes="120px"/>)}</div><p className="section-label">THE PEOPLE BEHIND THE WORK</p><h2>Good work starts<br/>with good people.</h2><p>Different disciplines. Shared attention to craft. Get to know the team you could be part of.</p><Link className="quiet-link" href="/about#team">Meet the studio <ArrowUpRight size={16}/></Link><div className="career-open-count"><span>{String(jobPostings.length).padStart(2, '0')}</span><div>Open roles<br/><small>Find where you fit</small></div><ArrowDown size={19}/></div></div></div></section>
    {!showForm ? <>
      <section className="shell career-board" id="positions" ref={positionsRef} aria-labelledby="positions-title"><div className="career-board-heading"><div><p className="section-label">YOUR NEXT OPPORTUNITY</p><h2 id="positions-title">Find your place.</h2></div><p>Explore the roles.<br/>Bring your perspective.</p></div><div className="career-filters"><div className="career-search"><Search size={18}/><label className="sr-only" htmlFor="career-search">Search careers</label><input ref={searchRef} id="career-search" type="search" placeholder="Search by role or skill" value={searchQuery} onChange={event => setSearchQuery(event.target.value)}/>{searchQuery && <button aria-label="Clear career search" onClick={() => { setSearchQuery(''); searchRef.current?.focus(); }}><X size={16}/></button>}</div><div className="career-location-filter"><label htmlFor="career-location-filter">Location</label><select id="career-location-filter" value={location} onChange={event => setLocation(event.target.value)}><option value="all">All locations</option><option value="remote">Remote</option><option value="lahore">Lahore</option><option value="hybrid">Hybrid</option></select></div><p role="status" aria-live="polite">{filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'} available</p></div><div className="career-jobs">{filteredJobs.map(job => <article className="career-job" key={job.title} id={`role-${jobPostings.indexOf(job)}`}><div className="career-job-title"><span className="career-role-number">{String(jobPostings.indexOf(job) + 1).padStart(2, '0')}</span><h3>{job.title}</h3><div><span><Briefcase size={13}/>{job.type}</span><span><MapPin size={13}/>{job.location}</span></div></div><div className="career-job-detail"><p>{job.description}</p><ul>{job.techStack.map(skill => <li key={skill}>{skill}</li>)}</ul></div><button className="career-apply" data-role-index={jobPostings.indexOf(job)} onClick={event => apply(job, event.currentTarget)} aria-label={`Apply for ${job.title}`}>Apply for role <ArrowUpRight size={17}/></button></article>)}</div>{!filteredJobs.length && <div className="career-empty"><h3>No roles match just yet.</h3><p>Try another skill or broaden the location filter.</p><button className="quiet-link" onClick={() => { setSearchQuery(''); setLocation('all'); }}>Show all open roles <ArrowUpRight size={15}/></button></div>}</section>
      <section className="career-culture"><div className="shell"><div className="career-culture-heading"><p className="section-label">ROOM TO DO YOUR BEST WORK</p><h2>The work matters.<br/><span>So does how we work.</span></h2></div><div className="career-values">{[['Projects that stretch you', 'Work across software and design challenges, with space to learn as you build.'], ['Flexibility with purpose', 'Remote options and flexible hours that make room for focused work.'], ['Keep moving forward', 'Continuous learning and opportunities to grow your skills and responsibilities.'], ['Better, together', 'Share ideas, ask questions, and work alongside people who care about the outcome.']].map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="career-benefits"><p className="section-label">PERKS & BENEFITS</p>{[{ label: 'Health coverage', icon: Heart }, { label: 'Learning budget', icon: BookOpen }, { label: 'Flexible PTO', icon: Clock3 }, { label: 'Tech equipment', icon: Laptop }].map(benefit => <div key={benefit.label}><benefit.icon size={20} strokeWidth={1.3}/>{benefit.label}</div>)}</div></div></section>
      <section className="shell career-process"><div><p className="section-label">HOW WE GET TO KNOW YOU</p><h2>A conversation.<br/><span>Then the next step.</span></h2><p>Here’s what our hiring process looks like.</p><Link className="career-founder-link" href="/about#founder"><Image src={founderPortrait.compact} alt="Abdul Ahad" width={72} height={72} sizes="72px" loading="lazy"/><span><strong>Abdul Ahad</strong><small>Founder &amp; CEO</small><span>Meet our founder <ArrowUpRight size={13}/></span></span></Link></div><ol>{hiringSteps.map(([title, description], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></section>
    </> : <section className="shell career-application" id="application-form"><div ref={applicationRef} tabIndex={-1} className="career-application-heading"><button className="quiet-link" disabled={isSubmitting} onClick={backToPositions}><ArrowLeft size={16}/>Back to positions</button><p className="section-label">YOUR NEXT CHAPTER</p><h2>{submitSuccess ? 'Application received.' : 'Let’s get to know you.'}</h2><p>{submitSuccess ? 'Thank you for taking the time to introduce yourself.' : 'A few details about you, your experience, and the work you want to do.'}</p></div>{submitSuccess ? <div className="career-success" role="status"><CheckCircle2 size={36} strokeWidth={1.2}/><h3>Thank you for applying.</h3><p>Your application for {formData.position} has been sent. The team will review it and reach out if your profile matches the role.</p><button className="premium-button" onClick={backToPositions}>Back to open roles <ArrowUpRight size={16}/></button></div> : <div className="career-application-grid"><aside><p className="section-label">YOU’RE APPLYING FOR</p><h3>{formData.position}</h3><p><MapPin size={14}/>{selectedJob?.location}</p><p><Briefcase size={14}/>{selectedJob?.type}</p><div className="career-application-note"><Check size={16}/><span>Required fields are marked with an asterisk. You can return to the roles without losing your draft.</span></div></aside><form onSubmit={handleSubmit} aria-label="Career application"><fieldset disabled={isSubmitting} className="career-form-fields">{applicationSections.map((section, index) => <fieldset key={section.title} className="career-form-section"><legend><span>0{index + 1}</span>{section.title}</legend><p>{section.note}</p><div className="career-field-grid">{section.fields.map(field => <div className={`field ${field.wide ? 'career-field-wide' : ''}`} key={field.name}><label htmlFor={`career-${field.name}`}>{field.label}{field.required ? ' *' : <span>Optional</span>}</label>{field.options ? <select id={`career-${field.name}`} name={field.name} required={field.required} value={formData[field.name]} onChange={event => setFormData(previous => ({ ...previous, [field.name]: event.target.value }))}><option value="">Select an option</option>{field.options.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select> : field.type === 'textarea' ? <textarea id={`career-${field.name}`} name={field.name} required={field.required} value={formData[field.name]} onChange={event => setFormData(previous => ({ ...previous, [field.name]: event.target.value }))} rows={6} maxLength={6000} placeholder={field.placeholder}/> : <input id={`career-${field.name}`} name={field.name} type={field.type || 'text'} required={field.required} value={formData[field.name]} onChange={event => setFormData(previous => ({ ...previous, [field.name]: event.target.value }))} autoComplete={field.autoComplete} maxLength={field.type === 'url' ? 2000 : field.type === 'email' ? 254 : 500} placeholder={field.placeholder}/>}</div>)}</div></fieldset>)}</fieldset>{submitError && <p className="form-status error" role="alert">{submitError}</p>}<div className="career-submit"><button type="submit" className="premium-button" disabled={isSubmitting}>{isSubmitting ? 'Sending application…' : 'Send application'}<ArrowUpRight size={17}/></button><p>By submitting, you agree to our <Link href="/privacy">privacy policy</Link> and <Link href="/terms">terms of service</Link>.</p></div></form></div>}</section>}
    <section className="shell career-questions"><span>Questions about joining us?</span><a href="mailto:info@sagedevs.tech">info@sagedevs.tech <ArrowUpRight size={17}/></a></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Open roles at Sage Devs', itemListElement: jobPostings.map((job, index) => ({ '@type': 'ListItem', position: index + 1, name: job.title, url: `https://sagedevs.tech/careers#role-${index}` })) }).replace(/</g, '\\u003c') }}/>
  </div>;
}
