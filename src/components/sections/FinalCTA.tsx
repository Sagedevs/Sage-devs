"use client";
import BusinessHours from '@/components/site/BusinessHours';
import { business } from '@/lib/business';
import React, { useState, ChangeEvent, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import axios from 'axios';
export default function AgencyCTA(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus('');

    const formDataToSend = new FormData(event.currentTarget);

    try {
      const response = await axios.post(
        'https://formspree.io/f/mdkwzkzj',
        formDataToSend,
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        formRef.current?.reset();
        setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


 return <section id="contact" className="premium-section inquiry-section"><div className="premium-shell inquiry-layout"><div className="inquiry-copy"><p className="section-label">06 / YOUR NEXT CHAPTER</p><h2>Something great<br/>starts with<br/><em>a conversation.</em></h2><p>Tell us what you have in mind. We’ll help you shape the scope, find the right approach, and take the next step.</p><a className="inquiry-email" href="mailto:info@sagedevs.tech">info@sagedevs.tech <ArrowUpRight size={20}/></a><div className="inquiry-alternative"><span>Prefer to talk it through?</span><a className="quiet-link" href={business.bookingUrl} target="_blank" rel="noopener noreferrer">Book a discovery call <ArrowUpRight size={15}/></a></div><BusinessHours/></div><form className="inquiry-form glass-panel" ref={formRef} onSubmit={handleSubmit} aria-label="Project inquiry"><p className="section-label">TELL US ABOUT YOUR PROJECT</p><div className="inquiry-fields"><div className="field"><label htmlFor="inquiry-name">Your name <span>*</span></label><input id="inquiry-name" name="name" autoComplete="name" value={formData.name} onChange={handleInputChange} placeholder="Alex Morgan" maxLength={120} required/></div><div className="field"><label htmlFor="inquiry-email">Email address <span>*</span></label><input id="inquiry-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleInputChange} placeholder="alex@company.com" maxLength={254} required/></div><div className="field"><label htmlFor="inquiry-company">Company <small>optional</small></label><input id="inquiry-company" name="company" autoComplete="organization" value={formData.company} onChange={handleInputChange} placeholder="Your company" maxLength={150}/></div><div className="field"><label htmlFor="inquiry-budget">Budget <small>optional</small></label><select id="inquiry-budget" name="budget" value={formData.budget} onChange={handleInputChange}><option value="">Select a range</option><option value="5k-10k">$5k – $10k</option><option value="10k-25k">$10k – $25k</option><option value="25k-50k">$25k – $50k</option><option value="50k+">$50k+</option></select></div><div className="field inquiry-message"><label htmlFor="inquiry-message">What are you looking to build? <span>*</span></label><textarea id="inquiry-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="A little about your idea, your goals, and where you’d like our help…" rows={4} minLength={10} maxLength={5000} required/></div></div><button className="premium-button" type="submit" disabled={isSubmitting}>{isSubmitting?'Sending your inquiry…':'Send project inquiry'}<ArrowUpRight size={17}/></button><div role="status" aria-live="polite">{submitStatus==='success'&&<p className="form-feedback">Thank you. Your inquiry has been sent.</p>}{submitStatus==='error'&&<p className="form-feedback error">Your inquiry couldn’t be sent. Please try again or email us directly.</p>}</div><p className="inquiry-privacy">We’ll use your details to respond to your inquiry. <Link href="/privacy">Privacy policy</Link></p></form></div></section>;
}
