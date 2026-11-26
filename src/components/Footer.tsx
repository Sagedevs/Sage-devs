"use client";
import { business } from '@/lib/business';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import axios from 'axios';
import BusinessHours from '@/components/site/BusinessHours';
import { brand } from '@/lib/brand';
interface LinkItem {label:string;href:string;}
export default function Footer(){
 const [email,setEmail]=useState('');
 const [isSubmitting,setIsSubmitting]=useState(false);
 const [submitStatus,setSubmitStatus]=useState('');
 const formRef=useRef<HTMLFormElement>(null);
  const mainNavigation: LinkItem[] = useMemo(() => [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Let's Talk AI", href: "/letstalkai" },
    { label: "Contact", href: "/contact" },
    { label: "Pricing & Plans", href: "/pricing" },
  ], []);

  const services: LinkItem[] = useMemo(() => [
    { label: "Web & App Development", href: "/services#web-app" },
    { label: "UI/UX Design", href: "/services#ui-design" },
    { label: "E-commerce (WordPress & Shopify)", href: "/services#ecommerce" },
    { label: "SaaS & Product Dev", href: "/services#saas" },
    { label: "Cloud & DevOps", href: "/services#cloud" },
    { label: "Maintenance & Support", href: "/services#maintenance-support" },
  ], []);


  const resources: LinkItem[] = useMemo(() => [
    { label: "Blog / Insights", href: "/blog" },
    { label: "Guides & Templates", href: "/resources#guides-templates" },
    { label: "FAQs", href: "/faq" },
  ], []);

  const aboutSections: LinkItem[] = useMemo(() => [
    { label: "Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Projects", href: "/projects" }, 
  ], []);

  const contactOptions: LinkItem[] = useMemo(() => [
    { label: "Get in Touch", href: "/contact#contact-form" },
    { label: "Book a Call", href: business.bookingUrl },
  ], []);

  const handleNewsletterSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus('');
    const formData = new FormData();
    formData.append('email', email);
    formData.append('_subject', 'New Newsletter Subscription');
    formData.append('_format', 'plain');

    try {
      const response = await axios.post(
        'https://formspree.io/f/xeorkowb',
        formData,
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setEmail('');
        formRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [email, isSubmitting]);


 const groups=[{title:'Studio',links:[...mainNavigation.filter(item=>item.label!=='Home'),...aboutSections]},{title:'Capabilities',links:services},{title:'Explore',links:[{label:'Case studies',href:'/case-studies'},...resources,...contactOptions]}];
 return <footer className="studio-footer"><div className="premium-shell"><div className="studio-footer-main"><div className="footer-brand-column"><Link href="/" aria-label="Sage Devs home"><Image src={brand.logo} alt="Sage Devs" width={900} height={257} className="official-wordmark"/></Link><p>Thoughtful design.<br/>Exceptional engineering.<br/>A little of what’s next.</p><div className="footer-location"><span className="status-dot"/>Lahore, Pakistan · Working worldwide</div><a href="tel:+923259684493" className="footer-phone">+92 325 9684493</a><BusinessHours/></div>{groups.map(group=><nav key={group.title} aria-label={`Footer ${group.title}`}><h2>{group.title}</h2>{group.links.map(link=><Link href={link.href} key={link.label} {...(link.href.startsWith('https')?{target:'_blank',rel:'noopener noreferrer'}:{})}>{link.label}</Link>)}</nav>)}</div><div className="footer-connect"><div><p className="section-label">OCCASIONAL NOTES FROM THE STUDIO</p><form ref={formRef} onSubmit={handleNewsletterSubmit}><label htmlFor="footer-newsletter-email" className="sr-only">Email for studio updates</label><input id="footer-newsletter-email" type="email" name="email" placeholder="Your email address" autoComplete="email" maxLength={254} required value={email} onChange={event=>setEmail(event.target.value)}/><button aria-label="Subscribe to studio updates" type="submit" disabled={isSubmitting}>{isSubmitting?'Sending…':<ArrowRight size={20}/>}</button></form><p className="newsletter-feedback" role="status">{submitStatus==='success'?'You’re subscribed. Thank you.':submitStatus==='error'?'We couldn’t subscribe you. Please try again.':''}</p></div><div className="footer-social"><a href="https://www.linkedin.com/company/sagedevs/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href="mailto:info@sagedevs.tech">Say hello <ArrowUpRight size={14}/></a></div></div><div className="studio-footer-bottom"><span>© {new Date().getFullYear()} Sage Devs</span><span>Made with purpose.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/sitemap">Sitemap</Link></div></div></div></footer>;
}
