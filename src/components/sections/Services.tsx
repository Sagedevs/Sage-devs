"use client";
import { useState } from 'react';
import type React from 'react';
import Link from 'next/link';
import { Code, Cloud, ShoppingCart, Globe, Palette, Sparkles, Wrench, Zap, Brain, ArrowUpRight, Plus } from 'lucide-react';
interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ElementType;
  href: string;
  stats: string;
}

const services: ServiceItem[] = [
  {
    title: "Web & App Development",
    subtitle: "Custom Digital Solutions",
    description: "Full-stack web applications and mobile apps built with modern frameworks like React, Next.js, Node.js, and React Native for scalable business solutions.",
    features: ["Progressive Web Apps", "Cross-platform Mobile", "API Development", "Real-time Features"],
    technologies: ["React", "Next.js", "Node.js", "React Native"],
    icon: Code,
    href: "/services#web-app",
    stats: "100+ Projects"
  },
  {
    title: "AI-Powered Automation",
    subtitle: "Work Smarter, Not Harder",
    description: "Automate repetitive tasks and workflows with AI-driven solutions tailored to your business processes.",
    features: ["Workflow Automation", "Predictive Analytics", "AI Assistants", "Custom ML Models"],
    technologies: ["OpenAI", "TensorFlow", "LangChain", "Python"],
    icon: Brain,
    href: "/services#ai-solutions",
    stats: "10x Productivity"
  },
  {
    title: "SaaS & Product Development",
    subtitle: "Scalable Software Solutions",
    description: "End-to-end SaaS platforms with subscription management, user authentication, and advanced analytics built for enterprise scale.",
    features: ["Multi-tenant Architecture", "Subscription Billing", "Analytics Dashboard", "API Integration"],
    technologies: ["AWS", "Stripe", "PostgreSQL", "Redis"],
    icon: Zap,
    href: "/services#saas",
    stats: "50+ SaaS Apps"
  },
  {
    title: "E-commerce Solutions",
    subtitle: "Digital Commerce Platforms",
    description: "High-converting online stores with advanced inventory management, payment processing, and comprehensive customer analytics.",
    features: ["Payment Integration", "Inventory Management", "SEO Optimization", "Mobile Commerce"],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    icon: ShoppingCart,
    href: "/services#ecommerce",
    stats: "150+ Stores"
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure & Deployment",
    description: "Robust cloud infrastructure with automated deployment, monitoring, and scaling for maximum performance and reliability.",
    features: ["CI/CD Pipelines", "Auto Scaling", "Monitoring", "Security"],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
    icon: Cloud,
    href: "/services#cloud",
    stats: "99.9% Uptime"
  },
  {
    title: "WordPress Development",
    subtitle: "Custom WordPress Solutions",
    description: "Custom WordPress websites, themes, and plugins with advanced functionality, performance optimization, and seamless user experience.",
    features: ["Custom Themes", "Plugin Development", "Performance Optimization", "Security Hardening"],
    technologies: ["WordPress", "PHP", "MySQL", "WP CLI"],
    icon: Globe,
    href: "/services#wordpress",
    stats: "200+ WP Sites"
  },
  {
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description: "Intuitive interfaces and seamless user experiences backed by extensive research, testing, and data-driven design decisions.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
    icon: Palette,
    href: "/services#ui-design",
    stats: "98% User Satisfaction"
  },
  {
    title: "Brand Identity",
    subtitle: "Complete Brand Solutions",
    description: "Cohesive brand identity systems including logos, guidelines, and digital assets that resonate deeply with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    technologies: ["Illustrator", "Photoshop", "Figma", "Brand Tools"],
    icon: Sparkles,
    href: "/services#brand-identity",
    stats: "150+ Brands"
  },
  {
    title: "Technical Support",
    subtitle: "24/7 Expert Assistance",
    description: "Round-the-clock technical support with proactive monitoring, security updates, performance optimization, and backup management.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Tuning", "Backup Management"],
    technologies: ["Monitoring Tools", "Security Suites", "Backup Systems"],
    icon: Wrench,
    href: "/services#maintenance-support",
    stats: "24/7 Support"
  }
];


const groups = [
 { name: 'Design & brand', note: 'Make a lasting first impression.', indices: [6,7], headline: 'Make every interaction feel considered.' },
 { name: 'Web & mobile', note: 'Beautiful on the surface. Solid underneath.', indices: [0,2,5], headline: 'From ambitious idea to exceptional product.' },
 { name: 'Commerce', note: 'An experience worth coming back to.', indices: [3], headline: 'Turn browsers into your next customers.' },
 { name: 'AI & automation', note: 'Put intelligence to work.', indices: [1], headline: 'Less busywork. More possibility.' },
 { name: 'Cloud & support', note: 'Built for what comes next.', indices: [4,8], headline: 'Keep your business moving, reliably.' },
];
export default function Services() {
 const [active,setActive]=useState(0);
 const group=groups[active];
 const selected=group.indices.map(index=>services[index]);
 return <section id="services" className="premium-section services-studio"><div className="premium-shell">
  <div className="section-topline"><p className="section-label">01 / WHAT WE DO</p><Link href="/services" className="quiet-link">All capabilities <ArrowUpRight size={17}/></Link></div>
  <div className="section-heading-row"><h2>Big-picture thinking.<br/><em>Every-detail execution.</em></h2><p>One team, from the first sketch to the next release. Explore how we can help you build something that matters.</p></div>
  <div className="service-explorer glass-panel"><div className="service-options" role="tablist" aria-label="Service categories" aria-orientation="vertical">{groups.map((item,index)=><button key={item.name} id={`service-tab-${index}`} role="tab" aria-selected={active===index} aria-controls="service-panel" tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={event=>{let next=index;if(event.key==='ArrowDown')next=(index+1)%groups.length;else if(event.key==='ArrowUp')next=(index-1+groups.length)%groups.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=groups.length-1;else return;event.preventDefault();setActive(next);document.getElementById(`service-tab-${next}`)?.focus();}}><span className="service-number">0{index+1}</span><span><strong>{item.name}</strong><small>{item.note}</small></span><ArrowUpRight size={20}/></button>)}</div>
  <div id="service-panel" className="service-detail" role="tabpanel" tabIndex={0} aria-labelledby={`service-tab-${active}`}><div key={active} className="detail-reveal"><div className="service-symbol" aria-hidden="true">{(()=>{const Icon=selected[0].icon;return <Icon size={38} strokeWidth={1}/>;})()}</div><p className="section-label">{group.name}</p><h3>{group.headline}</h3><p>{selected[0].description}</p><div className="service-features">{selected.flatMap(service=>service.features).slice(0,6).map(feature=><span key={feature}><Plus size={13}/>{feature}</span>)}</div><div className="service-detail-links">{selected.map(service=><Link className="quiet-link" key={service.title} href={service.href}>{service.title}<ArrowUpRight size={15}/></Link>)}</div><div className="service-stack">{[...new Set(selected.flatMap(service=>service.technologies))].slice(0,5).join(' / ')}</div></div></div></div>
 </div></section>;
}
