import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface GooeyNavChildItem {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
}

interface GooeyNavItem {
  label: string;
  href?: string;
  children?: GooeyNavChildItem[];
  cta?: boolean;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  initialActiveIndex?: number;
  scrolled: boolean;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  children?: React.ReactNode;
}

interface MegaMenuCategory {
  title: string;
  items: GooeyNavChildItem[];
}

interface MegaMenuCTA {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface MegaMenuFeatured {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

interface MegaMenuArticle {
  title: string;
  image: string;
  href: string;
  category?: string;
}

interface MegaMenuShowcase {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  stats?: Array<{ label: string; value: string }>;
  features?: string[];
  results?: Array<{ metric: string; value: string }>;
}

interface MegaMenuItemContent {
  title: string;
  subtitle: string;
  categories?: MegaMenuCategory[];
  cta: MegaMenuCTA;
  featured: MegaMenuFeatured;
  articles?: MegaMenuArticle[];
  leftSidebar?: {
    title: string;
    items: { label: string; href: string; }[];
  };
  showcase?: MegaMenuShowcase;
}

type MegaMenuContentMap = {
  [key: string]: MegaMenuItemContent;
};

// Enhanced Mega Menu Content Data - AppInventiv Style
const megaMenuContent: MegaMenuContentMap = {
  "Let's Talk AI": {
    title: "Explore AI Tech Solutions",
    subtitle: "Discover cutting-edge AI solutions and insights",
    leftSidebar: {
      title: "AI Knowledge Hub",
      items: [
        { label: "AI Consultation", href: "/ai-consultation" },
        { label: "Machine Learning", href: "/machine-learning" },
        { label: "Natural Language Processing", href: "/nlp" },
        { label: "Computer Vision", href: "/computer-vision" },
        { label: "AI Strategy", href: "/ai-strategy" }
      ]
    },
    articles: [
      {
        title: "Custom AI or Off-the-Shelf AI – Which Is the Right Solution for Your Business?",
        image: "/blog/download (1).webp",
        href: "/blog/custom-vs-off-shelf-ai",
        category: "AI Strategy"
      },
      {
        title: "10 Ways AI is Revolutionizing Mining Operations in Australia",
        image: "/blog/download (2).webp",
        href: "/blog/ai-mining-operations",
        category: "Industry Applications"
      },
      {
        title: "15 Use Cases and Examples of How AI Is Transforming the Fitness Industry",
        image: "/blog/download (3).webp",
        href: "/blog/ai-fitness-industry",
        category: "Healthcare & Fitness"
      },
      {
        title: "15 AI Business Ideas in Australia to Kickstart Your Entrepreneurial Journey",
        image: "/blog/download (4).webp",
        href: "/blog/ai-business-ideas",
        category: "Business Innovation"
      },
      {
        title: "How to Scale Your AI Project without Overspending?",
        image: "/blog/download (5).webp",
        href: "/blog/scale-ai-project",
        category: "Project Management"
      }
    ],
    cta: {
      title: "See what's possible when AI empowers your enterprise.",
      description: "Transform your business with cutting-edge AI solutions tailored to your needs.",
      buttonText: "Let's Discuss AI",
      buttonHref: "/ai-consultation"
    },
    featured: {
      title: "AI Innovation Hub",
      subtitle: "Transform Your Business",
      description: "From machine learning to computer vision, discover how AI can revolutionize your operations and drive unprecedented growth.",
      image: "/images/ai-innovation.jpg",
      href: "/ai-transformation-guide"
    },
    showcase: {
      title: "AI Success Story",
      subtitle: "300% Efficiency Increase",
      description: "See how we helped a manufacturing company automate their quality control process using computer vision.",
      image: "/images/ai-showcase.jpg",
      href: "/case-studies/ai-manufacturing",
      stats: [
        { label: "Accuracy", value: "99.5%" },
        { label: "Time Saved", value: "75%" },
        { label: "Cost Reduction", value: "40%" }
      ]
    }
  },
  "Services": {
    title: "Our Services",
    subtitle: "Comprehensive solutions for your digital transformation",
    categories: [
      {
        title: "Development Services",
        items: [
          { label: "Web & App Development", href: "/services/web-app-development", description: "Custom web and mobile applications" },
          { label: "SaaS & Product Dev", href: "/services/saas-product", description: "Scalable software solutions" },
          { label: "E-commerce Solutions", href: "/services/ecommerce", description: "WordPress & Shopify stores" },
          { label: "Cloud & DevOps", href: "/services/cloud-devops", description: "Infrastructure & deployment" },
          {
            label: "WordPress Services",
            href: "/services/wordpress",
            description: "Custom WordPress sites, themes, plugins & maintenance"
          }
          
        ]
      },
      {
        title: "Design & Strategy",
        items: [
          { label: "UI/UX Design", href: "/services/ui-ux-design", description: "User-centered design approach" },
          { label: "Digital Strategy", href: "/services/digital-strategy", description: "Business transformation planning" },
          { label: "Brand Identity", href: "/services/brand-identity", description: "Complete brand solutions" },
          { label: "Maintenance & Support", href: "/services/maintenance-support", description: "Ongoing technical support" }
        ]
      }
    ],
    cta: {
      title: "Ready to Transform Your Business?",
      description: "Let's discuss how our expertise can drive your digital success.",
      buttonText: "Get Started Today",
      buttonHref: "/Contact"
    },
    featured: {
      title: "Featured Service",
      subtitle: "Full-Stack Development",
      description: "End-to-end development solutions using cutting-edge technologies like React, Next.js, and cloud infrastructure.",
      image: "🚀",
      href: "/services/full-stack-development"
    },
    showcase: {
      title: "Service Spotlight",
      subtitle: "E-commerce Excellence",
      description: "Custom e-commerce solutions that drive sales and enhance user experience. From Shopify to custom builds.",
      image: "/images/ecommerce-showcase.jpg",
      href: "/services/ecommerce",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Mobile Optimization",
        "SEO Ready"
      ]
    }
  },
  "Case Studies": {
    title: "Success Stories",
    subtitle: "Real results from real clients across industries",
    categories: [
      {
        title: "By Industry",
        items: [
          { label: "Web Apps", href: "/case-studies/web-apps", description: "Custom web applications" },
          { label: "SaaS Platforms", href: "/case-studies/saas", description: "Scalable software solutions" },
          { label: "E-commerce", href: "/case-studies/ecommerce", description: "Online retail success" },
          { label: "Enterprise", href: "/case-studies/enterprise", description: "Large-scale implementations" },
          { label: "WordPress Projects", href: "/case-studies/wordpress", description: "Custom WordPress sites & plugins" } // Added WordPress
        ]
      },
      {
        title: "By Technology",
        items: [
          { label: "React & Next.js", href: "/case-studies/react", description: "Modern web frameworks" },
          { label: "Mobile Apps", href: "/case-studies/mobile", description: "iOS & Android development" },
          { label: "AI & ML", href: "/case-studies/ai-ml", description: "Machine learning projects" },
          { label: "Blockchain", href: "/case-studies/blockchain", description: "Decentralized solutions" },
          { label: "WordPress & PHP", href: "/case-studies/wordpress-php", description: "WordPress, plugins & theme development" }, // Added WordPress tech
          { label: "Frontend Web", href: "/case-studies/frontend-web", description: "HTML, CSS, JS, and modern frameworks" } // Added general web
        ]
      }
      
    ],
    cta: {
      title: "See Your Project Here?",
      description: "Join our growing list of successful digital transformations.",
      buttonText: "Start Your Project",
      buttonHref: "/Contact"
    },
    featured: {
      title: "Latest Success",
      subtitle: "SaaS Platform: 10x Growth",
      description: "How we helped a startup scale their SaaS platform to serve 100,000+ users with 99.9% uptime.",
      image: "📊",
      href: "/case-studies/saas-growth"
    },
    showcase: {
      title: "Featured Case Study",
      subtitle: "FinTech Revolution",
      description: "A complete digital transformation for a financial services company, resulting in 500% user growth.",
      image: "/images/fintech-case.jpg",
      href: "/case-studies/fintech-transformation",
      results: [
        { metric: "User Growth", value: "500%" },
        { metric: "Load Time", value: "-60%" },
        { metric: "Conversion", value: "+250%" }
      ]
    }
  },
  // "Resources": {
  //   title: "Knowledge Hub",
  //   subtitle: "Insights, guides, and resources to fuel your growth",
  //   categories: [
  //     {
  //       title: "Learning Resources",
  //       items: [
  //         { label: "Blog / Insights", href: "/blog", description: "Latest industry trends & tips" },
  //         { label: "Guides & Templates", href: "/resources/guides-templates", description: "Free downloadable resources" },
  //         { label: "Webinars / Talks", href: "/resources/webinars", description: "Expert-led sessions" },
  //         { label: "Case Studies", href: "/case-studies", description: "Real-world success stories" }
  //       ]
  //     },
  //     {
  //       title: "Tools & Support",
  //       items: [
  //         { label: "Project Calculator", href: "/resources/calculator", description: "Estimate your project cost" },
  //         { label: "Technology Stack", href: "/resources/tech-stack", description: "Our preferred technologies" },
  //         { label: "FAQs", href: "/faq", description: "Frequently asked questions" },
  //         { label: "Support Center", href: "/support", description: "Get help when you need it" }
  //       ]
  //     }
  //   ],
  //   cta: {
  //     title: "Stay Updated",
  //     description: "Subscribe to our newsletter for the latest insights and updates.",
  //     buttonText: "Subscribe Now",
  //     buttonHref: "/newsletter"
  //   },
  //   featured: {
  //     title: "Featured Guide",
  //     subtitle: "Digital Transformation Roadmap",
  //     description: "A comprehensive guide to planning your digital transformation journey.",
  //     image: "🗺️",
  //     href: "/resources/transformation-guide"
  //   }
  // },
  // "About Us": {
  //   title: "About Our Company",
  //   subtitle: "Your trusted partner in digital innovation",
  //   categories: [
  //     {
  //       title: "Our Company",
  //       items: [
  //         { label: "Our Story", href: "/about", description: "How we got started" },
  //         { label: "Team", href: "/about/team", description: "Meet our experts" },
  //         { label: "Careers", href: "/about/careers", description: "Join our growing team" },
  //         { label: "Culture", href: "/about/culture", description: "Our values & approach" }
  //       ]
  //     },
  //     {
  //       title: "Why Choose Us",
  //       items: [
  //         { label: "Our Process", href: "/about/process", description: "How we work with clients" },
  //         { label: "Technologies", href: "/about/technologies", description: "Our tech expertise" },
  //         { label: "Testimonials", href: "/about/testimonials", description: "What clients say" },
  //         { label: "Awards", href: "/about/awards", description: "Recognition & achievements" }
  //       ]
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to Work Together?",
  //     description: "Let's discuss how we can help achieve your goals.",
  //     buttonText: "Get In Touch",
  //     buttonHref: "/Contact"
  //   },
  //   featured: {
  //     title: "Join Our Team",
  //     subtitle: "We're Hiring!",
  //     description: "Exciting opportunities for developers, designers, and digital strategists.",
  //     image: "👥",
  //     href: "/about/careers"
  //   }
  // },
  // "Contact": {
  //   title: "Get In Touch",
  //   subtitle: "Ready to start your next project? Let's talk!",
  //   categories: [
  //     {
  //       title: "Contact Options",
  //       items: [
  //         { label: "Get in Touch (form)", href: "/contact#contact-form", description: "Send us a message" },
  //         { label: "Book a Call", href: "https://calendly.com/abdul-ahadt732", external: true, description: "Schedule a consultation" },
  //         { label: "FAQs", href: "/faq", description: "Common questions answered" },
  //         { label: "Support", href: "/support", description: "Technical assistance" }
  //       ]
  //     },
  //     {
  //       title: "Quick Links",
  //       items: [
  //         { label: "Project Quote", href: "/quote", description: "Get instant pricing" },
  //         { label: "Partnership", href: "/partnership", description: "Collaborate with us" },
  //         { label: "Press & Media", href: "/press", description: "Media resources" },
  //         { label: "Office Locations", href: "/locations", description: "Find us worldwide" }
  //       ]
  //     }
  //   ],
  //   cta: {
  //     title: "Start Your Project Today",
  //     description: "Transform your ideas into reality with our expert team.",
  //     buttonText: "Let's Get Started",
  //     buttonHref: "/Contact"
  //   },
  //   featured: {
  //     title: "Quick Response",
  //     subtitle: "We Reply Within 24 Hours",
  //     description: "Get expert consultation and project estimates quickly.",
  //     image: "⚡",
  //     href: "/contact#contact-form"
  //   }
  // }
};

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = 0,
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);
  const [filterPosition, setFilterPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);

  // Close mega menu function
  const closeMegaMenu = useCallback(() => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
    }
    setMegaMenuOpen(null);
  }, [megaMenuTimeout]);

  const closeMegaMenuWithDelay = useCallback(() => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
    }
    const timeout = setTimeout(() => {
      setMegaMenuOpen(null);
    }, 100); // Very short delay - 100ms instead of default
    setMegaMenuTimeout(timeout);
  }, [megaMenuTimeout]);

  const handleMouseEnter = useCallback((index: number, itemLabel: string) => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
      setMegaMenuTimeout(null);
    }
    setHoverIndex(index);
    if (megaMenuContent[itemLabel as keyof typeof megaMenuContent]) {
      setMegaMenuOpen(itemLabel);
    }
  }, [megaMenuTimeout]);

  // AppInventiv-style mega menu renderer
  const renderAppInventivMegaMenu = useCallback((content: MegaMenuItemContent) => (
    <div className="appinventiv-layout">
      {/* Left Sidebar */}
      <div className="mega-menu-left-sidebar">
        <h3>{content.leftSidebar?.title || content.title}</h3>
        <p className="subtitle">{content.subtitle}</p>
        
        {content.leftSidebar?.items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="sidebar-nav-item"
            onClick={closeMegaMenu}
          >
            {item.label}
          </Link>
        ))}

        <div className="cta-section">
          <h4>{content.cta.title}</h4>
          <p>{content.cta.description}</p>
          <Link
            href={content.cta.buttonHref}
            className="cta-button"
            onClick={closeMegaMenu}
          >
            {content.cta.buttonText}
          </Link>
        </div>
      </div>

      {/* Center Articles */}
      <div className="mega-menu-articles">
        {content.articles?.map((article) => (
          <Link
            key={article.title}
            href={article.href}
            className="article-card"
            onClick={closeMegaMenu}
          >
            <div className="article-image">
              <Image src={article.image} alt={article.title} width={80} height={80} className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="article-content">
              <h5>{article.title}</h5>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Showcase */}
      <div className="mega-menu-right-sidebar">
        {content.showcase && (
          <div className="mega-menu-showcase">
            <div className="showcase-image">
              {content.showcase.image.startsWith('/') ? (
                <Image 
                  src={content.showcase.image} 
                  alt={content.showcase.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
              ) : (
                <div className="text-6xl mb-4 text-center">
                  {content.showcase.image}
                </div>
              )}
            </div>
            
            <h4 className="showcase-title">{content.showcase.title}</h4>
            <h5 className="showcase-subtitle">{content.showcase.subtitle}</h5>
            <p className="showcase-description">{content.showcase.description}</p>
            
            {/* Stats for AI showcase */}
            {content.showcase.stats && (
              <div className="showcase-stats">
                {content.showcase.stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
            
            <Link
              href={content.showcase.href}
              onClick={closeMegaMenu}
              className="showcase-button"
            >
              View Details →
            </Link>
          </div>
        )}
      </div>
    </div>
  ), [closeMegaMenu]);

  // Standard mega menu renderer
  const renderStandardMegaMenu = useCallback((content: MegaMenuItemContent) => (
    <div className="mega-menu-content">
      {/* Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {content.categories?.map((category) => (
          <div key={category.title} className="mega-menu-category">
            <h4>{category.title}</h4>
            {category.items.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mega-menu-item"
                  onClick={closeMegaMenu}
                >
                  <h5>{item.label} ↗</h5>
                  <p>{item.description}</p>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="mega-menu-item"
                  onClick={closeMegaMenu}
                >
                  <h5>{item.label}</h5>
                  <p>{item.description}</p>
                </Link>
              )
            ))}
          </div>
        ))}
      </div>

      {/* Right Column with Featured and Showcase */}
      <div>
        {/* Featured Section */}
        <div className="mega-menu-featured">
          <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            {content.featured.title}
          </h4>
          <h5 style={{ color: '#60a5fa', fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>
            {content.featured.subtitle}
          </h5>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
            {content.featured.description}
          </p>
          <Link
            href={content.featured.href}
            onClick={closeMegaMenu}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              color: '#1e293b',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
            }}
          >
            Learn More →
          </Link>
        </div>

        {/* Showcase Section */}
        {content.showcase && (
          <div className="mega-menu-showcase" style={{ marginTop: '1.5rem' }}>
            <div className="showcase-image">
              {content.showcase.image.startsWith('/') ? (
                <Image 
                  src={content.showcase.image} 
                  alt={content.showcase.title} 
                  width={280} 
                  height={180} 
                  className="w-full h-32 object-cover rounded-lg mb-3" 
                />
              ) : (
                <div className="text-4xl mb-3 text-center">
                  {content.showcase.image}
                </div>
              )}
            </div>
            
            <h4 className="showcase-title">{content.showcase.title}</h4>
            <h5 className="showcase-subtitle">{content.showcase.subtitle}</h5>
            <p className="showcase-description">{content.showcase.description}</p>
            
            {/* Features for Services */}
            {content.showcase.features && (
              <ul className="showcase-features">
                {content.showcase.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            
            {/* Results for Case Studies */}
            {content.showcase.results && (
              <div className="showcase-results">
                {content.showcase.results.map((result, index) => (
                  <div key={index} className="result-item">
                    <div className="result-value">{result.value}</div>
                    <div className="result-metric">{result.metric}</div>
                  </div>
                ))}
              </div>
            )}
            
            <Link
              href={content.showcase.href}
              onClick={closeMegaMenu}
              className="showcase-button"
            >
              View Details →
            </Link>
          </div>
        )}

        {/* CTA Section */}
        <div className="mega-menu-cta" style={{ marginTop: '1rem' }}>
          <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            {content.cta.title}
          </h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>
            {content.cta.description}
          </p>
          <Link
            href={content.cta.buttonHref}
            onClick={closeMegaMenu}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              width: '100%',
            }}
          >
            {content.cta.buttonText}
          </Link>
        </div>
      </div>
    </div>
  ), [closeMegaMenu]);

  const updateFilterPosition = useCallback((element: HTMLElement) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    setFilterPosition({
      left: elementRect.left - containerRect.left,
      top: elementRect.top - containerRect.top,
      width: elementRect.width,
      height: elementRect.height,
    });
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>, index: number) => {
      if (activeIndex === index) return;
      const liEl = e.currentTarget;
      setActiveIndex(index);
      updateFilterPosition(liEl);
    },
    [activeIndex, updateFilterPosition]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const liEl = e.currentTarget.parentElement;
        if (liEl) {
          handleClick(
            { currentTarget: liEl } as React.MouseEvent<HTMLLIElement>,
            index
          );
        }
      }
    },
    [handleClick]
  );

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex] as HTMLElement;
    if (activeLi) {
      updateFilterPosition(activeLi);
    }
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex] as HTMLElement;
        if (currentActiveLi) {
          updateFilterPosition(currentActiveLi);
        }
      }, 150);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);
    return () => {
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, [activeIndex, updateFilterPosition]);

  const memoizedStyles = useMemo(
    () => ({
      __html: `
      :root {
        --color-1: #8B5CF6;
        --color-2: #3B82F6;
        --color-3: #FFFFFF;
        --color-4: #000000;
      }
      
      /* Animated gradient background */
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .gooey-nav-container {
        contain: layout style;
        isolation: isolate;
        position: relative;
        z-index: 10;
      }
      .gooey-nav-ul {
        background: linear-gradient(to right, rgba(20, 0, 40, 0.8), rgba(0, 10, 30, 0.8));
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      }
      .gooey-filter {
        position: absolute;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        contain: layout style;
        opacity: 1;
        background: linear-gradient(to right, var(--color-1), var(--color-2));
        border-radius: 9999px;
      }
      .gooey-filter::before {
        content: "";
        position: absolute;
        inset: -20px;
        z-index: -1;
        background: transparent;
      }
      .gooey-nav-item {
        position: relative;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        contain: layout style;
        z-index: 1;
        color: var(--color-3);
        padding: 0.4em 0.7em;
        border-radius: 9999px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }
      .gooey-nav-item:hover {
        color: var(--color-3);
        background: linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      }
      .gooey-nav-item.active {
        color: var(--color-4);
        text-shadow: none;
        background: linear-gradient(to right, var(--color-3), rgba(255,255,255,0.9));
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
      }
      .gooey-nav-item.active::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 9999px;
        background: transparent;
        opacity: 0;
        transform: scale(1);
        transition: none;
        z-index: -1;
      }
      .gooey-nav-link {
        display: block;
        text-decoration: none;
        color: inherit;
        outline: none;
        white-space: nowrap;
        position: relative;
        z-index: 1;
      }
      .gooey-nav-link:focus-visible {
        outline: 2px solid var(--color-3);
        outline-offset: 2px;
      }
      
      /* Enhanced Mega Menu Styles with Animated Background */
      .mega-menu {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: linear-gradient(-45deg, #0a0e1a, #1a1f2e, #0f1729, #1e2337);
        background-size: 400% 400%;
        animation: gradientShift 15s ease infinite;
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        z-index: 50;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        max-height: 60vh;
        overflow-y: auto;
      }
      
      .mega-menu.open {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
        width: 77rem;
        transform: translate(-205px, 20px);
        border-radius: 20px;
        box-shadow: 2px 2px 10px #fff;
      }
      
      /* Custom Scrollbar for Mega Menu */
      .mega-menu::-webkit-scrollbar {
        width: 5px; /* Adjust as needed */
        height: 3px; /* For horizontal scrollbar, if any */
      }

      .mega-menu::-webkit-scrollbar-track {
        background: #2a334a; /* Darker track */
        border-radius: 10px;
      }

      .mega-menu::-webkit-scrollbar-thumb {
        background-color: #60a5fa; /* Blue thumb */
        border-radius: 10px;
        border: 1px solid #2a334a; /* Padding around thumb */
      }

      .mega-menu::-webkit-scrollbar-thumb:hover {
        background-color: #3b82f6; /* Darker blue on hover */
      }
      
      /* AppInventiv Style Layout */
      .appinventiv-layout {
        max-width: 1400px;
        margin: 0 auto;
        padding: 2.5rem;
        display: grid;
        grid-template-columns: 250px 1fr 350px;
        gap: 1.5rem;
        min-height: 500px;
        position: relative;
      }
      
      .mega-menu-right-sidebar {
        position: sticky;
        top: 2.5rem;
        height: fit-content;
      }
      
      /* Standard 3-column layout */
      .mega-menu-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr 300px;
        gap: 2rem;
      }
      
      .mega-menu-left-sidebar {
        background: rgba(15, 22, 41, 0.6);
        border-radius: 16px;
        padding: 2rem;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      
      .mega-menu-left-sidebar h3 {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      
      .mega-menu-left-sidebar .subtitle {
        color: #94a3b8;
        font-size: 0.9rem;
        margin-bottom: 2rem;
        line-height: 1.5;
      }
      
      .mega-menu-left-sidebar .cta-section {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 12px;
        padding: 1.5rem;
        margin-top: 2rem;
        text-align: center;
      }
      
      .mega-menu-left-sidebar .cta-section h4 {
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        line-height: 1.3;
      }
      
      .mega-menu-left-sidebar .cta-section p {
        color: #cbd5e1;
        font-size: 0.85rem;
        margin-bottom: 1.25rem;
        line-height: 1.4;
      }
      
      .mega-menu-left-sidebar .cta-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 500;
        font-size: 0.9rem;
        white-space: nowrap;
        transition: all 0.2s ease;
        border: none;
        cursor: pointer;
        width: 100%;
      }
      
      .mega-menu-left-sidebar .cta-button:hover {
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      }
      
      .sidebar-nav-item {
        display: block;
        padding: 0.75rem 0;
        color: #e2e8f0;
        text-decoration: none;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.2s ease;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
      
      .sidebar-nav-item:hover {
        color: #60a5fa;
        transform: translateX(4px);
        border-bottom-color: rgba(96, 165, 250, 0.3);
      }
      
      .sidebar-nav-item:last-child {
        border-bottom: none;
      }
      
      .mega-menu-articles {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem;
        padding: 0;
      }
      
      .article-card {
        display: flex;
        gap: 1rem;
        padding: 1.25rem;
        background: rgba(30, 41, 59, 0.4);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;
        text-decoration: none;
        backdrop-filter: blur(10px);
      }
      
      .article-card:hover {
        background: rgba(30, 41, 59, 0.6);
        border-color: rgba(96, 165, 250, 0.3);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }
      
      .article-image {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        overflow: hidden; /* Ensure image corners are rounded */
        flex-shrink: 0;
      }
      .article-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .article-content {
        flex: 1;
      }
      
      .article-content h5 {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: 0.5rem;
      }
      
      .article-content p {
        color: #94a3b8;
        font-size: 0.85rem;
        line-height: 1.4;
      }
      
      .mega-menu-category h4 {
        color: #60a5fa;
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      
      /* Showcase Styles */
      .mega-menu-showcase {
        background: rgba(15, 22, 41, 0.7);
        border-radius: 16px;
        padding: 1.5rem;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;
        height: 100%;
        position: sticky;
        top: 2.5rem;
        margin-left: auto;
        width: 100%;
        max-width: 350px;
      }
      
      .mega-menu-showcase:hover {
        background: rgba(15, 22, 41, 0.9);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }
      
      .showcase-image {
        margin-bottom: 1.25rem;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
      }
      
      .showcase-image img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        transition: transform 0.3s ease;
      }
      
      .mega-menu-showcase:hover .showcase-image img {
        transform: scale(1.02);
      }
      
      .showcase-title {
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        line-height: 1.3;
      }
      
      .showcase-subtitle {
        color: #60a5fa;
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      
      .showcase-description {
        color: #cbd5e1;
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
      }
      
      .showcase-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      
      .stat-item {
        background: rgba(96, 165, 250, 0.1);
        padding: 0.75rem;
        border-radius: 8px;
        text-align: center;
      }
      
      .stat-value {
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
      }
      
      .stat-label {
        color: #94a3b8;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .showcase-features h5,
      .showcase-results h5 {
        color: #ffffff;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
      }
      
      .showcase-features h5::before,
      .showcase-results h5::before {
        content: '→';
        color: #60a5fa;
        margin-right: 0.5rem;
        font-size: 1.1em;
      }
      
      .feature-list {
        list-style: none;
        padding: 0;
        margin: 0 0 1.5rem 0;
      }
      
      .feature-item {
        color: #e2e8f0;
        font-size: 0.9rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        align-items: center;
      }
      
      .feature-item::before {
        content: '✓';
        color: #60a5fa;
        margin-right: 0.5rem;
        font-size: 0.8em;
      }
      
      .result-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
      
      .result-metric {
        color: #e2e8f0;
        font-size: 0.9rem;
      }
      
      .result-value {
        color: #60a5fa;
        font-weight: 600;
        background: rgba(96, 165, 250, 0.1);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.8rem;
      }
      
      .showcase-cta {
        display: inline-flex;
        align-items: center;
        color: #60a5fa;
        font-weight: 500;
        font-size: 0.9rem;
        text-decoration: none;
        margin-top: 1rem;
        transition: all 0.2s ease;
      }
      
      .showcase-cta:hover {
        color: #3b82f6;
        transform: translateX(4px);
      }
      
      .showcase-cta::after {
        content: '→';
        margin-left: 0.5rem;
        transition: transform 0.2s ease;
      }
      
      .showcase-cta:hover::after {
        transform: translateX(4px);
      }
      
      /* Responsive Adjustments */
      @media (max-width: 1024px) {
        .appinventiv-layout {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .mega-menu-showcase {
          margin-top: 2rem;
        }
      }
      
      .mega-menu-item {
        display: block;
        padding: 0.75rem 0;
        text-decoration: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.2s ease;
      }
      
      .mega-menu-item:hover {
        color: #60a5fa;
        transform: translateX(8px);
        border-bottom-color: rgba(96, 165, 250, 0.3);
      }
      
      .mega-menu-item h5 {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.25rem;
      }
      
      .mega-menu-item p {
        color: #94a3b8;
        font-size: 0.875rem;
        line-height: 1.4;
      }
      
      .mega-menu-cta {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        text-align: center;
      }
      
      .mega-menu-featured {
        background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);
        border-radius: 12px;
        padding: 1.5rem;
        text-align: center;
        margin-bottom: 1rem;
      }
      
      @media (max-width: 1024px) {
        .appinventiv-layout {
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 1.5rem;
        }
        
        .mega-menu-content {
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding: 1.5rem;
        }
        
        .mega-menu-articles {
          grid-template-columns: 1fr;
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        .gooey-filter,
        .gooey-nav-item,
        .gooey-nav-item::after,
        .mega-menu,
        .mega-menu-item,
        .article-card {
          animation: none !important;
          transition: none !important;
        }
      }
      `
    }),
    []
  );

  return (
    <>
      <style dangerouslySetInnerHTML={memoizedStyles} />
      <div className="gooey-nav-container" ref={containerRef}>
        {/* Hamburger Toggle Button (visible on mobile and tablet, hidden on desktop) */}
        <button
          className="lg:hidden flex items-center px-3 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6 transition-all duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6 M6 6L18 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16 M4 12h16 M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav */}
        <nav>
          <ul
            ref={navRef}
            className={`
              gooey-nav-ul
              flex-col
              ${mobileMenuOpen ? "flex" : "hidden"}
              lg:flex lg:flex-row
              gap-2 md:gap-3 lg:gap-4 xl:gap-6 list-none p-0 m-0
              absolute lg:static top-12 left-0 right-0 mx-auto w-max
              z-20
              transition-all duration-200
              bg-transparent
            `}
          >
            {items.map((item, index) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              const hasMegaMenu = megaMenuContent[item.label as keyof typeof megaMenuContent];
              
              return (
                <li
                  key={`${item.label}-${index}`}
                  className={`group relative gooey-nav-item text-xs sm:text-sm md:text-base cursor-pointer ${
                    item.href && activeIndex === index ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index, item.label)}
                  onMouseLeave={() => {
                    setHoverIndex((prev) => (prev === index ? null : prev));
                    closeMegaMenuWithDelay();
                  }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onClick={(e) => {
                        const liEl = e.currentTarget.parentElement as HTMLLIElement | null;
                        if (liEl) {
                          setActiveIndex(index);
                          updateFilterPosition(liEl);
                        }
                      }}
                      className={`gooey-nav-link flex items-center gap-1`}
                    >
                      {item.label}
                      {(hasChildren || hasMegaMenu) && <span className="text-[10px] opacity-80">▾</span>}
                    </Link>
                  ) : (
                    <span className={`gooey-nav-link flex items-center gap-1`}>
                      {item.label}
                      {(hasChildren || hasMegaMenu) && <span className="text-[10px] opacity-80">▾</span>}
                    </span>
                  )}

                  {/* Simple Dropdown for items without mega menu content - desktop hover */}
                  {hasChildren && !hasMegaMenu && hoverIndex === index && (
                    <ul
                      className="hidden lg:flex absolute top-[110%] left-1/2 -translate-x-1/2 min-w-[220px] flex-col bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl z-30"
                    >
                      {item.children!.map((child) => (
                        <li key={child.label}>
                          {child.external ? (
                            <a
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full text-left px-3 py-2 rounded-lg text-sm text-white/90 hover:text-cyan-300 hover:bg-white/5"
                            >
                              {child.label} ↗
                            </a>
                          ) : (
                            <Link
                              href={child.href}
                              className="block w-full text-left px-3 py-2 rounded-lg text-sm text-white/90 hover:text-cyan-300 hover:bg-white/5"
                            >
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Submenu for mobile/tablet when nav is open (stacked) */}
                  {hasChildren && (
                    <ul className="lg:hidden mt-2 space-y-1">
                      {item.children!.map((child) => (
                        <li key={child.label}>
                          {child.external ? (
                            <a
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 rounded-lg text-sm text-white/90 hover:text-cyan-300 hover:bg-white/5"
                            >
                              {child.label} ↗
                            </a>
                          ) : (
                            <Link
                              href={child.href}
                              className="block px-3 py-2 rounded-lg text-sm text-white/90 hover:text-cyan-300 hover:bg-white/5"
                            >
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`gooey-filter`}
          style={{
            left: `${filterPosition.left}px`,
            top: `${filterPosition.top}px`,
            width: `${filterPosition.width}px`,
            height: `${filterPosition.height}px`,
          }}
        />
      </div>

      {/* Enhanced Mega Menu Overlay */}
      {megaMenuOpen && megaMenuContent[megaMenuOpen as keyof typeof megaMenuContent] && (
        <div 
          className={`mega-menu ${megaMenuOpen ? 'open' : ''} hidden lg:block`}
          onMouseEnter={() => {
            if (megaMenuTimeout) {
              clearTimeout(megaMenuTimeout);
              setMegaMenuTimeout(null);
            }
          }}
          onMouseLeave={closeMegaMenu}
        >
          {(() => {
            const content = megaMenuContent[megaMenuOpen as keyof typeof megaMenuContent];
            // Use AppInventiv style for "Let's Talk AI", standard style for others
            return megaMenuOpen === "Let's Talk AI" 
              ? renderAppInventivMegaMenu(content)
              : renderStandardMegaMenu(content);
          })()}
        </div>
      )}
    </>
  );
};

const GooeyNavWithHeader: React.FC<GooeyNavProps> = ({
  items,
  scrolled,
  mobileMenuOpen,
  toggleMobileMenu,
  children,
}) => {
  const pathname = usePathname();
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<{[key: string]: boolean}>({});

  // Debugging: Log mobileMenuOpen state
  useEffect(() => {
    console.log("mobileMenuOpen:", mobileMenuOpen);
  }, [mobileMenuOpen]);

  // Reset open dropdowns when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setOpenMobileDropdowns({});
    }
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = useCallback((label: string) => {
    setOpenMobileDropdowns(prev => ({ ...prev, [label]: !prev[label] }));
  }, []);

  // Base classes that don't change based on state - CONSISTENT FOR SSR
  const headerClasses = `fixed top-0 left-0 right-0 z-[9999] transition-all duration-200 bg-transparent`;

  const activeIndex = useMemo(() => {
    const index = items.findIndex((item) => {
      if (item.href) {
        const currentPath = pathname || '';
        return item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
      }
      if ((item as any).children) {
        const currentPath = pathname || '';
        return (item as any).children.some((c: any) => c.href && currentPath.startsWith(c.href));
      }
      return false;
    });
    return index === -1 ? 0 : index;
  }, [pathname, items]);

  return (
    <header className={headerClasses}>
      {/* Client-side header background overlay with enhanced gradient */}
      <div
        className={`absolute inset-0 transition-all duration-200 ${
          scrolled || mobileMenuOpen
            ? "bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-xl border-b border-white/10"
            : ""
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20 lg:h-24 relative">
          {/* Logo - moved to left */}
          <div className="flex-shrink-0 z-[10000] ml-[-1rem] lg:ml-0 lg:-translate-x-10">
            <Link href="/" className="block">
              {children}
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 ml-12 z-[10000]" style={{ transform: 'translateX(60px)' }}>
            <GooeyNav
              items={items}
              initialActiveIndex={activeIndex !== -1 ? activeIndex : 0}
              scrolled={scrolled}
              mobileMenuOpen={mobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>

          {/* CTA Button / Mobile Menu Toggle */}
          <div className="flex items-center gap-3 relative z-[10001]">
            {/* CTA Button for Desktop */}
            <div className="hidden lg:block">
              
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden relative z-[10000] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${
                  mobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Overlay Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-br from-slate-900/98 via-blue-900/95 to-slate-900/98 backdrop-blur-lg z-[9998] transition-opacity duration-200 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto pt-24 pb-12 px-6">
          {/* Mobile Menu Content */}
          <div className="space-y-8 max-w-xl mx-auto">
            {/* Home Link */}
            <div>
              <Link 
                href="/" 
                onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                className="text-white text-2xl font-semibold hover:text-cyan-300 transition-colors"
              >
                Home
              </Link>
            </div>

            {/* Dynamic Menu Items */}
            {items.map((item) => {
              if (item.label === "Home") return null; // Already handled above

              const hasChildren = (item.children && item.children.length > 0) || megaMenuContent[item.label as keyof typeof megaMenuContent];
              const isDropdownOpen = openMobileDropdowns[item.label];

              // Handle CTA items
              if (item.cta || item.label === "Let's Talk AI" || item.label === "Contact") {
                return (
                  <div key={item.label}>
                    <Link 
                      href={item.href || "#"} 
                      onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                      className="text-white text-2xl font-semibold hover:text-cyan-300 transition-colors"
                    >
                      {item.label === "Let's Talk AI" ? "Let's Talk AI" : item.label}
                    </Link>
                  </div>
                );
              }

              // Handle Pricing separately
              if (item.label === "Pricing & Plans") {
                return (
                  <div key={item.label}>
                    <Link 
                      href={item.href || "#"} 
                      onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                      className="text-white text-2xl font-semibold hover:text-cyan-300 transition-colors"
                    >
                      Pricing
                    </Link>
                  </div>
                );
              }

              // Handle items with children (mega menu items)
              return (
                <div key={item.label} className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Main text - NOT clickable for dropdown */}
                    {item.href ? (
                      <Link 
                        href={item.href}
                        onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                        className="text-white text-2xl font-semibold hover:text-cyan-300 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white text-2xl font-semibold">
                        {item.label}
                      </span>
                    )}
                    
                    {/* Arrow - ONLY this opens dropdown */}
                    {hasChildren && (
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="p-2 text-white hover:text-cyan-300 transition-colors"
                        aria-label={`Toggle ${item.label} dropdown`}
                      >
                        <svg
                          className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {/* Conditional Dropdown Content */}
                  {isDropdownOpen && (
                    <div className="space-y-6 mt-4">
                      {/* Render categories for mega menu or regular children */}
                      {megaMenuContent[item.label as keyof typeof megaMenuContent] ? (
                        megaMenuContent[item.label as keyof typeof megaMenuContent].categories?.map((category) => (
                          <div key={category.title} className="space-y-3">
                            <div className="text-cyan-400 text-sm font-medium">
                              {category.title}
                            </div>
                            <div className="space-y-2">
                              {category.items.map((categoryItem) => (
                                categoryItem.external ? (
                                  <a
                                    key={categoryItem.label}
                                    href={categoryItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                                    className="block text-white text-lg hover:text-cyan-300 transition-colors"
                                  >
                                    {categoryItem.label} ↗
                                  </a>
                                ) : (
                                  <Link
                                    key={categoryItem.label}
                                    href={categoryItem.href}
                                    onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                                    className="block text-white text-lg hover:text-cyan-300 transition-colors"
                                  >
                                    {categoryItem.label}
                                  </Link>
                                )
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        item.children?.map((child) => (
                          child.external ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                              className="block text-white text-xl hover:text-cyan-300 transition-colors"
                            >
                              {child.label} ↗
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                              className="block text-white text-xl hover:text-cyan-300 transition-colors"
                            >
                              {child.label}
                            </Link>
                          )
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Mobile CTA */}
            <div className="pt-6 border-t border-gray-700">
              <Link
                href="/Contact"
                onClick={() => { toggleMobileMenu(); setOpenMobileDropdowns({}); }}
                className="inline-flex w-full items-center justify-center h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold border border-white/10 hover:border-cyan-300/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GooeyNavWithHeader;