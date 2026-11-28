'use client';
import { useEffect, useRef, useState } from 'react';
import FormFeedback from './FormFeedback';
import { recordConversion } from '@/lib/conversions';
export default function ContactForm({ ai = false }: { ai?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const pending = useRef(false);
  const confirmation = useRef<HTMLDivElement>(null);
  useEffect(() => { if (status === 'success') { const node = confirmation.current; node?.focus({ preventScroll: true }); node?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); } }, [status]);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    pending.current = true; setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${ai ? 'xeorkowb' : 'xeorkorj'}`, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(20000) });
      if (!response.ok) throw new Error('Submission failed');
      form.reset(); setStatus('success');
      recordConversion('contact_submission', { form: ai ? 'ai' : 'contact' });
    } catch { setStatus('error'); } finally { pending.current = false; }
  }
  if (status === 'success') return <div id="contact-form" ref={confirmation} tabIndex={-1} role="region" aria-label="Your message was sent"><FormFeedback onReset={() => { setStatus('idle'); requestAnimationFrame(() => document.getElementById('name')?.focus()); }}/></div>;
  return <form id="contact-form" onSubmit={submit} aria-busy={status === 'sending'}><div className="form-grid"><div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></div><div className="field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></div></div>
    {ai ? <><div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" /></div><div className="field"><label htmlFor="aiInterest">What are you exploring?</label><select id="aiInterest" name="aiInterest"><option>Custom AI Solutions</option><option>Machine Learning</option><option>Natural Language Processing</option><option>Computer Vision</option><option>Predictive Analytics</option><option>Automation & Robotics</option><option>Data Intelligence</option></select></div><div className="form-grid"><div className="field"><label htmlFor="projectScale">Project scale</label><select id="projectScale" name="projectScale"><option>Startup/Small Business</option><option>Mid-size Company</option><option>Enterprise</option><option>Government/Institution</option><option>Research/Academic</option></select></div><div className="field"><label htmlFor="timeline">Timeline</label><select id="timeline" name="timeline"><option>Just exploring</option><option>Immediate (1-3 months)</option><option>Short-term (3-6 months)</option><option>Medium-term (6-12 months)</option><option>Long-term (12+ months)</option></select></div></div></> : <div className="field"><label htmlFor="subject">What can we help with?</label><input id="subject" name="subject" maxLength={200} placeholder="A new website, an app, a question…" /></div>}
    <div className="field"><label htmlFor="message">Tell us about your project *</label><textarea id="message" name="message" required maxLength={8000} placeholder="The idea, the challenge, and what you’d like to achieve." /></div><p className="small">Your details will be used to respond to your inquiry. <a className="text-link" href="/privacy">Privacy policy</a></p><button className="button" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send your message'}</button><div aria-live="polite" aria-atomic="true">{status === 'error' && <p role="alert" className="form-status error">We couldn’t send your message. Please try again or email <a href="mailto:info@sagedevs.tech">info@sagedevs.tech</a>. Your message is still here.</p>}</div></form>;
}
