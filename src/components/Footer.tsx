"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

// Type definitions
interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
}

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  progress: number;
  speed: number;
  opacity: number;
}

interface LinkItem {
  label: string;
  href: string;
}

interface SocialLink extends LinkItem {
  platform: string;
  iconPath: string;
}

interface ContactInfo {
  label: string;
  value: string;
  href: string;
}

interface LinkComponentProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const animationFrameRef = useRef<number>(null);

  // Memoized navigation data
  const mainNavigation: LinkItem[] = useMemo(() => [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Let's Talk AI", href: "/Letstalkai" },
    { label: "Contact", href: "/contact" },
    { label: "Pricing & Plans", href: "/pricing" },
  ], []);

  const services: LinkItem[] = useMemo(() => [
    { label: "Web & App Development", href: "/services#web-app-development" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "E-commerce (WordPress & Shopify)", href: "/services#ecommerce" },
    { label: "SaaS & Product Dev", href: "/services#saas-product" },
    { label: "Cloud & DevOps", href: "/services#cloud-devops" },
    { label: "Maintenance & Support", href: "/services#maintenance-support" },
  ], []);

  const caseStudies: LinkItem[] = useMemo(() => [
    { label: "Web Apps", href: "/case-studies#case-studies-grid" },
    { label: "SaaS", href: "/case-studies#case-studies-grid" },
    { label: "E-commerce", href: "/case-studies#case-studies-grid" },
    { label: "Enterprise", href: "/case-studies#case-studies-grid" },
  ], []);

  const resources: LinkItem[] = useMemo(() => [
    { label: "Blog / Insights", href: "/blog" },
    { label: "Guides & Templates", href: "/resources#guides-templates" },
    { label: "Webinars / Talks", href: "/resources#webinars-talks" },
    { label: "FAQs", href: "/faq" },
  ], []);

  const aboutSections: LinkItem[] = useMemo(() => [
    { label: "Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
  ], []);

  const contactOptions: LinkItem[] = useMemo(() => [
    { label: "Get in Touch", href: "/contact#contact-form" },
    { label: "Book a Call", href: "https://calendly.com/sagedevs-network/" },
  ], []);

  const socialLinks: SocialLink[] = useMemo(() => [
    
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/company/sagedevs/",
      iconPath: "/icons/linkedin_icon.svg",
      label: "LinkedIn"
    },
    {
      platform: "Email",
      href: "mailto:contact@sagedevs.tech",
      iconPath: "/icons/gmail_icon.svg",
      label: "Email"
    }
  ], []);

  const contactInfo: ContactInfo[] = useMemo(() => [
    {
      label: "Email",
      value: "contact@sagedevs.tech",
      href: "mailto:contact@sagedevs.tech",
    },
    {
      label: "Phone",
      value: "+92 3259684493",
      href: "tel:+923259684493",
    },
    {
      label: "Location",
      value: "Gulberg, Lahore",
      href: "#",
    },
  ], []);

  // Optimized canvas animation with RAF cleanup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let connections: Connection[] = [];
    
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Reinitialize particles and connections on resize
      initializeParticles();
      initializeConnections();
    };

    const initializeParticles = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const initializeConnections = () => {
      connections = [];
      for (let i = 0; i < 8; i++) {
        connections.push({
          x1: Math.random() * canvas.width,
          y1: Math.random() * canvas.height,
          x2: Math.random() * canvas.width,
          y2: Math.random() * canvas.height,
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.003,
          opacity: 0,
        });
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background (cached)
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#030712');
      gradient.addColorStop(0.3, '#0c1220');
      gradient.addColorStop(0.7, '#111827');
      gradient.addColorStop(1, '#0c1220');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate particles with batching
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#3b82f6';
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });
      
      ctx.shadowBlur = 0;

      // Draw connections with optimized rendering
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#22c55e';
      
      connections.forEach(c => {
        c.progress += c.speed;
        if (c.progress > 1) {
          c.progress = 0;
          c.x1 = Math.random() * canvas.width;
          c.y1 = Math.random() * canvas.height;
          c.x2 = Math.random() * canvas.width;
          c.y2 = Math.random() * canvas.height;
        }
        
        const currentX = c.x1 + (c.x2 - c.x1) * c.progress;
        const currentY = c.y1 + (c.y2 - c.y1) * c.progress;
        const fadeProgress = c.progress < 0.5 ? c.progress * 2 : (1 - c.progress) * 2;
        c.opacity = fadeProgress * 0.3;
        
        ctx.beginPath();
        ctx.moveTo(c.x1, c.y1);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = `rgba(34, 197, 94, ${c.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Draw nodes
        ctx.beginPath();
        ctx.arc(c.x1, c.y1, 2, 0, Math.PI * 2);
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${c.opacity + 0.3})`;
        ctx.fill();
      });
      
      ctx.shadowBlur = 0;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleNewsletterSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
  }, [email]);

  // Simplified animation variants
  const containerVariants: Variants = useMemo(() => ({
    visible: { opacity: 1 },
  }), []);

  const itemVariants: Variants = useMemo(() => ({
    visible: { opacity: 1 },
  }), []);

  const LinkComponent = React.memo<LinkComponentProps>(({ href, children, className = "" }) => (
    <Link
      href={href}
      className={`group relative overflow-hidden ${className}`}
    >
      <span className="relative z-10 transition-all duration-300">
        {children}
      </span>
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 w-0 group-hover:w-full transition-all duration-500 ease-out" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  ));
  LinkComponent.displayName = 'LinkComponent';

  return (
    <footer className="relative bg-slate-950 border-t border-blue-500/20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: 'transparent' }}
      />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-cyan-900/15 via-transparent to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-indigo-900/15 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
              <div>
                <div className="inline-block mb-8">
                  <Link href="/" className="block">
                    <Image
                      src="/logo/logofixxed.svg"
                      alt="Sage Devs Logo"
                      width={160}
                      height={160}
                      className="rounded-2xl shadow-2xl"
                      loading="lazy"
                    />
                  </Link>
                </div>

                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    Sage Devs
                  </span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                  Professional software development agency specializing in modern web applications, mobile solutions, and digital experiences that drive business growth.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
                <div className="space-y-6">
                  <h3 className="text-white font-bold text-lg mb-6 relative">
                    <span className="relative z-10">Company</span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {mainNavigation.map((link) => (
                      <li key={link.href}>
                        <LinkComponent
                          href={link.href}
                          className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        >
                          {link.label}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-white font-bold text-lg mb-6 relative">
                    <span className="relative z-10">Services</span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {services.map((service) => (
                      <li key={service.href}>
                        <LinkComponent
                          href={service.href}
                          className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        >
                          {service.label}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-white font-bold text-lg mb-6 relative">
                    <span className="relative z-10">Case Studies</span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {caseStudies.map((caseStudy) => (
                      <li key={caseStudy.href}>
                        <LinkComponent
                          href={caseStudy.href}
                          className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        >
                          {caseStudy.label}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-white font-bold text-lg mb-6 relative">
                    <span className="relative z-10">Resources</span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {resources.map((resource) => (
                      <li key={resource.href}>
                        <LinkComponent
                          href={resource.href}
                          className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        >
                          {resource.label}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-white font-bold text-lg mb-6 relative">
                    <span className="relative z-10">About</span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {aboutSections.map((about) => (
                      <li key={about.href}>
                        <LinkComponent
                          href={about.href}
                          className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        >
                          {about.label}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-white font-bold text-lg mb-6 relative">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {contactOptions.map((contact) => (
                      <li key={contact.href}>
                        <LinkComponent
                          href={contact.href}
                          className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        >
                          {contact.label}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-12 mt-12">
              <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-between items-start w-full">

                  <motion.div variants={itemVariants} className="footer-section-stay-updated">
                    <h3 className="text-white font-bold text-lg mb-4 relative">
                      <span className="relative z-10">Stay Updated</span>
                      <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Subscribe to our newsletter for the latest insights, exclusive offers, and industry news.
                    </p>
                    <form 
                      ref={formRef}
                      onSubmit={handleNewsletterSubmit}
                      className="flex flex-col gap-3"
                    >
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </button>
                      {submitStatus === 'success' && (
                        <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
                      )}
                      {submitStatus === 'error' && (
                        <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
                      )}
                    </form>
                  </motion.div>

                  <motion.div variants={itemVariants} className="footer-section-follow-us">
                    <h3 className="text-white font-bold text-lg mb-4 relative">
                      <span className="relative z-10">Contact Us</span>
                      <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                    </h3>
                    <div className="flex items-center space-x-4">
                      {socialLinks.map((link) => (
                        <div key={link.platform}>
                          <Link
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 ${link.platform === "GitHub" ? "" : "bg-white/5 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-400/50 hover:scale-110"}`}
                            aria-label={link.platform}
                          >
                            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${link.platform === "GitHub" ? "" : "bg-gradient-to-r from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20"}`} />
                            <Image
                              src={link.iconPath}
                              alt={`${link.platform} icon`}
                              width={24}
                              height={24}
                              loading="lazy"
                              className={`relative z-10 ${link.platform === "GitHub" ? "" : "filter brightness-0 invert group-hover:filter-none"} transition-all duration-300`}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="footer-section-get-in-touch">
                    <h3 className="text-white font-bold text-lg mb-4 relative">
                      <span className="relative z-10">Get In Touch</span>
                      <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                    </h3>
                    <div className="space-y-3">
                      {contactInfo.map((info) => (
                        <div key={info.label}>
                          <LinkComponent
                            href={info.href}
                            className="block text-gray-400 hover:text-white transition-colors duration-300"
                          >
                            <span className="text-sm font-medium text-blue-300 block mb-1">
                              {info.label}:
                            </span>
                            <span className="text-sm block">{info.value}</span>
                          </LinkComponent>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          className="py-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              <span className="bg-gradient-to-r from-gray-400 to-slate-200 bg-clip-text text-transparent">
                © {currentYear} Sage Devs. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <LinkComponent
                href="/privacy"
                className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
              >
                Privacy Policy
              </LinkComponent>
              <LinkComponent
                href="/terms"
                className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
              >
                Terms of Service
              </LinkComponent>
              <LinkComponent
                href="/sitemap-0.xml"
                className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
              >
                Sitemap
              </LinkComponent>
            </div>
          </div>
        </motion.div>
        
        <div className="h-4 lg:h-8"></div>

        <style jsx>{`
          @media (min-width: 1024px) {
            .footer-section-stay-updated {
              flex-basis: 40%;
              max-width: 40%;
            }
            .footer-section-follow-us {
              flex-basis: 25%;
              max-width: 25%;
            }
            .footer-section-get-in-touch {
              flex-basis: 25%;
              max-width: 25%;
            }
          }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;