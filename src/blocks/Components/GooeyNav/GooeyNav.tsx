"use client";
import { caseStudies, caseStudySlug, featuredCaseIds } from '@/data/caseStudies';
import { portfolio } from '@/data/portfolio';
import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface GooeyNavChildItem {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  id?: number;
  image?: string;
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
  children?: React.ReactNode;
}

interface GooeyNavWithHeaderProps {
  items: GooeyNavItem[];
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
  id: number;
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
  cta?: MegaMenuCTA;
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

// Enhanced Mega Menu Content Data - AI knowledge
const megaMenuContent: MegaMenuContentMap = {
  "Let's Talk AI": {
    title: "Explore AI Tech Solutions",
    subtitle: "Discover cutting-edge AI solutions and insights",
    leftSidebar: {
      title: "AI Knowledge Hub",
      items: [
        { label: "AI Consultation", href: "/letstalkai#ai-consultation" },
        { label: "Machine Learning", href: "/letstalkai#machine-learning" },
        { label: "Natural Language Processing", href: "/letstalkai#nlp" },
        { label: "Computer Vision", href: "/letstalkai#computer-vision" },
        { label: "AI Strategy", href: "/letstalkai#ai-strategy" }
      ]
    },
    articles: [
      {
        title: "Custom AI or Off-the-Shelf AI – Which Is the Right Solution for Your Business?",
        image: "/blog/1.webp",
        href: "/blog#blog-post-1",
        category: "AI Strategy",
        id: 1
      },
      {
        title: "10 Ways AI is Revolutionizing Mining Operations in Australia",
        image: "/blog/2.webp",
        href: "/blog#blog-post-2",
        category: "Industry Applications",
        id: 2
      },
      {
        title: "15 Use Cases and Examples of How AI Is Transforming the Fitness Industry",
        image: "/blog/3.webp",
        href: "/blog#blog-post-3",
        category: "Healthcare & Fitness",
        id: 3
      },
      {
        title: "15 AI Business Ideas in Australia to Kickstart Your Entrepreneurial Journey",
        image: "/blog/4.webp",
        href: "/blog#blog-post-4",
        category: "Business Innovation",
        id: 4
      },
      {
        title: "How to Scale Your AI Project without Overspending?",
        image: "/blog/5.webp",
        href: "/blog#blog-post-5",
        category: "Project Management",
        id: 5
      }
    ],
    cta: {
      title: "See what's possible when AI empowers your enterprise.",
      description: "Transform your business with cutting-edge AI solutions tailored to your needs.",
      buttonText: "Let's Discuss AI",
      buttonHref: "/letstalkai#ai-consultation"
    },
    featured: {
      title: "AI Innovation Hub",
      subtitle: "Transform Your Business",
      description: "From machine learning to computer vision, discover how AI can revolutionize your operations and drive unprecedented growth.",
      image: "/images/ai-innovation.jpg",
      href: "/letstalkai#ai-transformation-guide"
    },
    showcase: {
      title: "AI Resume Analyzer",
      subtitle: "AI-Powered Resume Analysis & Optimization Tool",
      description: "Automated resume analysis with 95% accuracy, providing instant feedback and optimization suggestions.",
      image: "/proj/resume.webp",
      href: "https://ai-resume-analyzer-generator.vercel.app/",
      stats: [
        { label: "Accuracy", value: "95%" },
        { label: "Resume Quality", value: "+80%" },
        { label: "Monthly Users", value: "5000+" },
        { label: "Analysis Time", value: "<3s" }
      ],
      features: [
        "Multi-format Support (PDF, DOC, DOCX, TXT)",
        "Instant Feedback",
        "Optimization Suggestions",
        "AI-Powered Analysis"
      ]
    }
  },
  "Services": {
    title: "Our Services",
    subtitle: "Comprehensive solutions for your digital transformation",
    categories: [
      {
        title: "Development & Commerce",
        items: [
          { label: "Web & App Development", href: "/services/web-development", description: "Custom web and mobile applications" },
          { label: "SaaS & Product Dev", href: "/services/saas-development", description: "Scalable software solutions" },
          { label: "Shopify Development", href: "/services/shopify-development", description: "Branded stores & commerce integrations" },
          { label: "Cloud & DevOps", href: "/services#cloud", description: "Infrastructure & deployment" },
          {
            label: "WordPress Services",
            href: "/services/wordpress-development",
            description: "Custom WordPress sites, themes, plugins & maintenance"
          }
        ]
      },
      {
        title: "Web Development Resources",
        items: [
          { 
            label: "React vs Vue.js in 2024", 
            href: "/blog#blog-post-6",
            description: "Complete developer's guide to choosing the right framework",
            image: "/blog/6.webp"
          },
          { 
            label: "Building Scalable APIs", 
            href: "/blog#blog-post-7",
            description: "Node.js and Express best practices",
            image: "/blog/7.webp"
          },
          { 
            label: "CSS Grid vs Flexbox", 
            href: "/blog#blog-post-8",
            description: "When to use which layout system",
            image: "/blog/8.webp"
          },
          { 
            label: "Progressive Web Apps", 
            href: "/blog#blog-post-9",
            description: "The complete guide to PWAs",
            image: "/blog/9.webp"
          },
          { 
            label: "Web Performance Optimization", 
            href: "/blog#blog-post-10",
            description: "From 3s to 300ms load times",
            image: "/blog/10.webp"
          }
        ]
      },
      {
        title: "AI Solutions",
        items: [
          { 
            label: "AI Solutions", 
            href: "/services/ai-automation",
            description: "Expert guidance for your AI journey"
          },
          { 
            label: "AI Consultation", 
            href: "/letstalkai#ai-consultation",
            description: "Expert guidance for your AI journey"
          },
          { 
            label: "Machine Learning", 
            href: "/letstalkai#machine-learning",
            description: "Custom ML models for your business needs"
          },
          { 
            label: "Computer Vision", 
            href: "/letstalkai#computer-vision",
            description: "Image and video analysis solutions"
          },
          { 
            label: "AI Strategy", 
            href: "/letstalkai#ai-strategy",
            description: "Comprehensive AI roadmap for your business"
          },
        ]
      },
      {
        title: "Design & Strategy",
        items: [
          { label: "UI/UX Design", href: "/services/ui-ux-design", description: "User-centered design approach" },
          { label: "Digital Strategy", href: "/services#digital-strategy", description: "Business transformation planning" },
          { label: "Brand Identity", href: "/services#brand-identity", description: "Complete brand solutions" },
          { label: "Maintenance & Support", href: "/services#maintenance-support", description: "Ongoing technical support" }
        ]
      }
    ],
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
      image: "/proj/ecomerce.webp",
      href: "/services#ecommerce",
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
          { label: "Web Apps", href: "/case-studies#case-studies-grid", description: "Custom web applications" },
          { label: "SaaS Platforms", href: "/case-studies#case-studies-grid", description: "Scalable software solutions" },
          { label: "E-commerce", href: "/case-studies#case-studies-grid", description: "Online retail success" },
          { label: "Enterprise", href: "/case-studies#case-studies-grid", description: "Large-scale implementations" },
          { label: "WordPress Projects", href: "/case-studies#case-studies-grid", description: "Custom WordPress sites & plugins" }
        ]
      },
      {
        title: "By Technology",
        items: [
          { label: "React & Next.js", href: "/case-studies#case-studies-grid", description: "Modern web frameworks" },
          { label: "Mobile Apps", href: "/case-studies#case-studies-grid", description: "iOS & Android development" },
          { label: "AI & ML", href: "/case-studies#case-studies-grid", description: "Machine learning projects" },
          { label: "Blockchain", href: "/case-studies#case-studies-grid", description: "Decentralized solutions" },
          { label: "WordPress & PHP", href: "/case-studies#case-studies-grid", description: "WordPress, plugins & theme development" },
          { label: "Frontend Web", href: "/case-studies#case-studies-grid", description: "HTML, CSS, JS, and modern frameworks" }
        ]
      }
    ],
    featured: {
      title: "Latest Success",
      subtitle: "SaaS Platform: 10x Growth",
      description: "How we helped a startup scale their SaaS platform to serve 100,000+ users with 99.9% uptime.",
      image: "📊",
      href: "/case-studies#case-studies-grid"
    },
    showcase: {
  title: "14islands Creative Agency",
  subtitle: "Design & Technology Agency for Digital Products & Experiences",
  description: "Creative agency that designs and builds lovable digital products, brands, and experiences from vision to launch.",
  image: "/proj/14island.webp",
  href: "https://14islands.com/",
  results: [
    { metric: "Client Sectors", value: "Luxury, Web3, Gaming, AI" },
    { metric: "Project Approach", value: "Vision to Launch" },
    { metric: "Client Portfolio", value: "25+ Leading Brands" },
    { metric: "Service Quality", value: "Outstanding Experiences" }
  ],
  features: [
    "Digital Product Design",
    "Brand Development",
    "Web3 & Blockchain",
    "AR/VR/XR Technologies",
    "AI Integration",
    "E-commerce Solutions",
    "Gaming Platforms",
    "No-Code Products"
  ]
}
  }
};

const navigationLabel = (label: string) => ({ 'Case Studies': 'Work', 'Pricing & Plans': 'Pricing', 'About Us': 'Studio' }[label] ?? label);
megaMenuContent.Services.categories = megaMenuContent.Services.categories?.filter(category => category.title !== 'Web Development Resources');
megaMenuContent.Services.title = 'Design. Develop. Go further.';
megaMenuContent.Services.showcase = { title: 'KLMNKO', subtitle: 'A considered digital experience.', description: 'Explore the design and development behind this project.', image: '/proj/klmnko.webp', href: '/case-studies#case-3' };
megaMenuContent['Case Studies'].title = 'Different businesses. Shared craft.';
megaMenuContent['Case Studies'].categories = [
 {title:'Selected work',items:featuredCaseIds.map(id=>{const study=caseStudies.find(item=>item.id===id)!;return {label:study.title,href:`/case-studies/${caseStudySlug(study)}`,description:study.category,image:study.image};})},
 {title:'Explore the portfolio',items:[{label:'Home',href:'/',description:'Back to the studio homepage'},{label:'View All Projects',href:'/projects',description:'Every industry. The complete collection.'},{label:'Case studies',href:'/case-studies',description:'A closer look at the work'},{label:'Lingua Nova Institute',href:'/case-studies/lingua-nova-institute',description:'Latest · Education'},{label:'Elite Creations PK',href:'/case-studies/elite-creations-pk',description:'Latest · E-commerce'}]}
];


const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = 0,
}) => {
  const reduceMotion = useReducedMotion();
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const focusPanelOnOpen = useRef(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);
  const [filterPosition, setFilterPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const cancelClose = useCallback(() => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    megaMenuTimeout.current = null;
  }, []);

  const closeMenus = useCallback(() => {
    cancelClose();
    setMegaMenuOpen(null);
    setHoverIndex(null);
  }, [cancelClose]);

  const closeMegaMenu = useCallback(() => closeMenus(), [closeMenus]);
  const closeMegaMenuWithDelay = useCallback(() => {
    cancelClose();
    megaMenuTimeout.current = setTimeout(closeMenus, 180);
  }, [cancelClose, closeMenus]);

  const handleMouseEnter = useCallback((index: number, itemLabel: string) => {
    cancelClose();
    setHoverIndex(index);
    setMegaMenuOpen(megaMenuContent[itemLabel] ? itemLabel : null);
  }, [cancelClose]);

  useEffect(() => {
    closeMenus();
    setActiveIndex(items.findIndex(item => (item.label === 'Case Studies' && pathname?.startsWith('/case-studies')) || item.href === pathname || (item.href !== '/' && pathname?.startsWith(`${item.href}/`))));
  }, [pathname, items, closeMenus]);

  useEffect(() => {
    if (focusPanelOnOpen.current) {
      const panel = megaMenuRef.current ?? navigationRef.current?.querySelector('.sage-simple-dropdown');
      panel?.querySelector<HTMLAnchorElement>('a[href]')?.focus();
      focusPanelOnOpen.current = false;
    }
  }, [megaMenuOpen, hoverIndex]);

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) closeMenus();
    };
    const resize = () => { if (window.innerWidth < 1200) closeMenus(); };
    document.addEventListener('pointerdown', outside);
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('pointerdown', outside);
      window.removeEventListener('resize', resize);
      cancelClose();
    };
  }, [closeMenus, cancelClose]);

  const toggleMenu = (index: number, label: string, focus = false) => {
    cancelClose();
    focusPanelOnOpen.current = focus;
    if (megaMenuOpen === label || (hoverIndex === index && !megaMenuContent[label])) {
      if (focus) {
        (megaMenuRef.current ?? navigationRef.current?.querySelector('.sage-simple-dropdown'))?.querySelector<HTMLAnchorElement>('a[href]')?.focus();
      } else closeMenus();
    } else handleMouseEnter(index, label);
  };

  const renderWorkMenu = () => <div className="work-menu-layout">
    <div className="work-menu-directory"><p>{new Set(Object.values(portfolio).flat().map(project=>project.url)).size} projects across {Object.keys(portfolio).length} industries. Explore the full collection or start with a selected collaboration.</p><Link className="button button-glass" href="/projects" onClick={closeMegaMenu}>View All Projects</Link><nav aria-label="Work discovery"><Link href="/" onClick={closeMegaMenu}>Home</Link><Link href="/case-studies" onClick={closeMegaMenu}>Case studies</Link><Link href="/case-studies/lingua-nova-institute" onClick={closeMegaMenu}>Lingua Nova Institute <small>Latest</small></Link><Link href="/case-studies/elite-creations-pk" onClick={closeMegaMenu}>Elite Creations PK <small>Latest</small></Link></nav></div>
    <div className="work-menu-projects">{featuredCaseIds.map(id=>{const study=caseStudies.find(item=>item.id===id)!;return <Link href={`/case-studies/${caseStudySlug(study)}`} onClick={closeMegaMenu} key={id}><div><Image src={study.image} alt={`${study.title} website preview`} width={600} height={400} sizes="240px"/></div><span>{study.category}</span><strong>{study.title}</strong></Link>;})}</div>
  </div>;

  // Original AI mega menu renderer
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

        {content.cta && (
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
        )}
      </div>

      {/* Center Articles */}
      <div className="mega-menu-articles">
        {content.articles?.map((article) => (
          <Link
            key={article.title}
            href={article.href}
            className="article-card block"
            onClick={closeMegaMenu}
            scroll={false}
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
              View details
            </Link>
          </div>
        )}
      </div>
    </div>
  ), [closeMegaMenu]);

  // Standard mega menu renderer
  const renderStandardMegaMenu = useCallback((content: MegaMenuItemContent) => (
    <div className="standard-mega-menu-layout">
      {/* Left Column - Categories */}
      <div className="mega-menu-categories grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-4 -ml-2">
        {content.categories?.map((category) => (
          <div key={category.title} className="mega-menu-category">
            <h4 className="text-lg font-semibold text-white mb-3">{category.title}</h4>
            <div className="category-items space-y-2">
              {category.items.map((item: GooeyNavChildItem) => (
                <div key={item.label} className="mega-menu-item-container flex items-start gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                  {item.image && (
                    <div className="menu-item-image flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.label} 
                        width={48} 
                        height={48} 
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    </div>
                  )}
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mega-menu-item"
                      onClick={closeMegaMenu}
                    >
                      <h5>{item.label} ↗</h5>
                      {item.description && <p>{item.description}</p>}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="mega-menu-item flex-1 min-w-0"
                      onClick={closeMegaMenu}
                    >
                      <h5 className="text-white text-sm font-medium leading-tight">{item.label}</h5>
                      {item.description && <p className="text-gray-400 text-xs mt-1 leading-tight">{item.description}</p>}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column with Featured and Showcase */}
      <div className="mega-menu-right-sidebar">
        {content.showcase && (
          <div className="mega-menu-showcase">
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
              target="_blank"
  rel="noopener noreferrer"
            >
              View details
            </Link>
          </div>
        )}

        {content.cta && (
          <div className="mega-menu-cta">
            <h4 className="cta-title">{content.cta.title}</h4>
            <p className="cta-description">{content.cta.description}</p>
            <Link
              href={content.cta.buttonHref}
              onClick={closeMegaMenu}
              className="cta-button"
            >
              {content.cta.buttonText}
            </Link>
          </div>
        )}
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

  const memoizedStyles = useMemo(() => ({ __html: `.sage-header{position:sticky;top:0;z-index:110;height:110px;padding:18px 24px;color:var(--sd-ivory);font-family:var(--font-body),sans-serif;pointer-events:none}
.sage-header-shell{width:min(1440px,100%);margin:auto;position:relative;pointer-events:auto}
.sage-header-bar{height:74px;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:0 24px;background:linear-gradient(115deg,rgb(var(--sd-graphite-secondary-rgb) / .94),rgb(var(--sd-graphite-rgb) / .92));border:1px solid rgb(var(--sd-platinum-rgb) / 0.180);border-radius:14px;box-shadow:inset 0 1px 0 rgb(var(--sd-white-rgb) / 0.071),0 16px 48px rgb(var(--sd-obsidian-rgb) / 0.122);backdrop-filter:blur(24px);transition:background .25s,box-shadow .25s}
.sage-header.is-scrolled .sage-header-bar{background:rgb(var(--sd-graphite-rgb) / 0.961);box-shadow:0 12px 35px rgb(var(--sd-obsidian-rgb) / 0.188)}
.sage-header-brand{flex-shrink:0}.sage-header-brand a{display:flex;align-items:center}.sage-header-brand img,.sage-mobile-panel-heading img{width:138px;height:44px;object-fit:contain}
.sage-header-desktop{flex:1;display:flex;justify-content:flex-end;min-width:0}.sage-navigation{min-width:0}.sage-header .gooey-nav-container{position:relative}.sage-header .gooey-nav-ul{display:flex;align-items:center;gap:5px;list-style:none;padding:0;margin:0}
.sage-header .gooey-nav-item{display:flex;align-items:center;position:relative;color:var(--sd-platinum);border:1px solid transparent;border-radius:8px;white-space:nowrap;transition:background .2s,color .2s}
.sage-header .gooey-nav-item.active{background:rgb(var(--sd-platinum-rgb) / 0.051);border-color:rgb(var(--sd-platinum-rgb) / 0.094);color:var(--sd-white)}.sage-header .gooey-nav-item:hover{background:rgb(var(--sd-platinum-rgb) / 0.059);color:var(--sd-white)}
.sage-header .gooey-nav-link{padding:12px 9px;font-size:.875rem;letter-spacing:-.02em;line-height:1.5}.sage-header .gooey-nav-item:last-child{background:var(--sd-platinum);color:var(--sd-graphite-secondary);margin-left:6px;border-color:var(--sd-ivory)}.sage-header .gooey-nav-item:last-child:hover{background:var(--sd-white)}
.sage-header .sage-nav-disclosure{display:grid;place-items:center;align-self:stretch;width:27px;min-height:44px;border:0;border-radius:6px;background:transparent;color:inherit}.sage-header .sage-nav-disclosure svg{transition:transform .22s}.sage-header .sage-nav-disclosure[aria-expanded=true] svg{transform:rotate(180deg)}.sage-header .sage-nav-disclosure:hover{background:rgb(var(--sd-silver-rgb) / 0.169)}
.sage-header .gooey-filter{position:absolute;bottom:0;height:1px!important;background:rgb(var(--sd-subtle-rgb) / 0.502);pointer-events:none;transition:left .25s,width .25s;opacity:0}
.sage-header :is(a,button):focus-visible{outline:2px solid var(--sd-subtle);outline-offset:3px}.sage-header .sage-simple-dropdown{position:absolute;top:calc(100% + 14px);right:0;min-width:245px;display:flex;flex-direction:column;gap:4px;list-style:none;padding:12px;background:rgb(var(--sd-graphite-rgb) / 0.969);backdrop-filter:blur(24px);border:1px solid rgb(var(--sd-platinum-rgb) / 0.188);border-radius:12px;box-shadow:0 20px 50px rgb(var(--sd-obsidian-rgb) / 0.271);animation:sage-menu-reveal .2s ease-out}.sage-simple-dropdown a{font-size:.875rem;min-height:44px;display:flex;align-items:center}
.sage-header .mega-menu{position:absolute;left:0;right:0;top:calc(100% + 12px);width:100%;max-height:calc(100dvh - 130px);overflow-y:auto;overscroll-behavior:contain;background:radial-gradient(ellipse at 95% 5%,rgb(var(--sd-graphite-secondary-rgb) / 0.533),transparent 65%),linear-gradient(120deg,rgb(var(--sd-graphite-rgb) / 0.988),rgb(var(--sd-ink-rgb) / 0.988));backdrop-filter:blur(28px);border:1px solid rgb(var(--sd-platinum-rgb) / 0.188);border-radius:18px;box-shadow:inset 0 1px 0 rgb(var(--sd-ivory-rgb) / 0.071),0 28px 75px rgb(var(--sd-obsidian-rgb) / 0.333);color:var(--sd-ivory);animation:sage-menu-reveal .22s cubic-bezier(.2,.8,.2,1);scrollbar-color:var(--sd-graphite-secondary) transparent;scrollbar-width:thin}
.sage-header .mega-menu-heading{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:28px 32px 23px;border-bottom:1px solid rgb(var(--sd-platinum-rgb) / 0.094)}.sage-header .mega-menu-heading span{font-size:.75rem;text-transform:uppercase;letter-spacing:.14em;color:var(--sd-subtle)}.sage-header .mega-menu-heading h2{font-size:1.75rem;font-weight:500;letter-spacing:-.035em;color:var(--sd-ivory);margin:7px 0 0}.sage-header .mega-menu-heading>a{font-size:.875rem;color:var(--sd-platinum);border-bottom:1px solid var(--sd-silver);padding:9px 0}
.sage-header .standard-mega-menu-layout{display:grid;grid-template-columns:minmax(0,1fr) 285px;gap:32px;padding:28px 32px 32px}.sage-header .mega-menu-categories{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:26px 26px;margin:0}.sage-header .mega-menu-category h4{font-size:.75rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--sd-silver);margin:0 0 12px;line-height:1.5}.sage-header .category-items{display:flex;flex-direction:column;gap:0}.sage-header .mega-menu-item-container{padding:0 8px;border-radius:7px;transition:background .2s;margin:0;gap:12px;align-items:center}.sage-header .mega-menu-item-container:hover{background:rgb(var(--sd-platinum-rgb) / 0.035)}.sage-header .mega-menu-item{padding:10px 0;display:block;flex:1;min-width:0}.sage-header .mega-menu-item h5{font-size:.9375rem;font-weight:500;line-height:1.4;color:var(--sd-ivory);margin:0}.sage-header .mega-menu-item p{font-size:.8125rem;line-height:1.5;color:var(--sd-subtle);margin:4px 0 0}.sage-header .menu-item-image{width:46px;flex-shrink:0}.sage-header .menu-item-image img{width:46px;height:46px;object-fit:cover;border-radius:6px}
.sage-header .mega-menu-right-sidebar{align-self:start;min-width:0}.sage-header .mega-menu-showcase{padding:18px;border:1px solid rgb(var(--sd-platinum-rgb) / 0.149);border-radius:12px;background:linear-gradient(145deg,rgb(var(--sd-platinum-rgb) / 0.051),rgb(var(--sd-platinum-rgb) / 0.012));box-shadow:inset 0 1px 0 rgb(var(--sd-ivory-rgb) / 0.039)}.sage-header .showcase-image{overflow:hidden;border-radius:8px;margin-bottom:18px}.sage-header .showcase-image img{width:100%;height:155px;object-fit:cover;margin:0;border-radius:8px;transition:transform .4s}.sage-header .mega-menu-showcase:hover .showcase-image img{transform:scale(1.025)}.sage-header .showcase-title{font-size:1.25rem;line-height:1.2;color:var(--sd-ivory);margin:0 0 10px}.sage-header .showcase-subtitle{font-size:.875rem;line-height:1.5;font-weight:500;color:var(--sd-subtle);margin:0 0 10px}.sage-header .showcase-description{font-size:.8125rem;line-height:1.65;color:var(--sd-subtle);margin:0 0 16px}.sage-header .showcase-features{list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:16px 0}.sage-header .feature-item{font-size:.75rem;line-height:1.4;border:1px solid rgb(var(--sd-platinum-rgb) / 0.102);border-radius:4px;padding:6px 8px;color:var(--sd-platinum)}.sage-header .feature-check{display:none}.sage-header .showcase-button{display:inline-flex;justify-content:center;align-items:center;min-height:44px;padding:10px 16px;border-radius:6px;border:1px solid rgb(var(--sd-platinum-rgb) / 0.251);color:var(--sd-ivory);background:rgb(var(--sd-platinum-rgb) / 0.039);font-size:.875rem;width:100%;margin-top:12px}.sage-header .showcase-button:hover{background:rgb(var(--sd-platinum-rgb) / 0.125)}.sage-header .showcase-stats,.sage-header .showcase-results{display:grid;grid-template-columns:1fr 1fr;gap:12px;border-top:1px solid rgb(var(--sd-platinum-rgb) / 0.102);padding-top:16px;margin-top:16px}.sage-header .stat-value,.sage-header .result-value{font-size:1rem;color:var(--sd-ivory)}.sage-header .stat-label,.sage-header .result-metric{font-size:.75rem;color:var(--sd-subtle);line-height:1.5;margin-top:4px}
.sage-header .appinventiv-layout{display:grid;grid-template-columns:240px minmax(0,1fr) 285px;gap:28px;padding:28px 32px 32px}.sage-header .mega-menu-left-sidebar{padding-right:20px;border-right:1px solid rgb(var(--sd-platinum-rgb) / 0.094)}.sage-header .mega-menu-left-sidebar h3{font-size:1.2rem;line-height:1.3;margin:0 0 12px;color:var(--sd-ivory)}.sage-header .subtitle{font-size:.875rem;color:var(--sd-subtle);line-height:1.6;margin:0 0 16px}.sage-header .sidebar-nav-item{display:block;padding:11px 0;color:var(--sd-platinum);font-size:.875rem;border-bottom:1px solid rgb(var(--sd-platinum-rgb) / 0.071)}.sage-header .sidebar-nav-item:hover{color:var(--sd-white)}.sage-header .cta-section,.sage-header .mega-menu-cta{margin-top:24px}.sage-header .cta-section h4,.sage-header .cta-title{font-size:1.05rem;line-height:1.5;color:var(--sd-ivory);margin:0 0 10px}.sage-header .cta-section p,.sage-header .cta-description{font-size:.8125rem;line-height:1.6;color:var(--sd-subtle)}.sage-header .cta-button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;font-size:.875rem;color:var(--sd-graphite-secondary);background:var(--sd-platinum);padding:11px 16px;border-radius:6px;width:100%}.sage-header .cta-button:hover{background:var(--sd-white)}
.sage-header .mega-menu-articles{display:flex;flex-direction:column;gap:12px;min-width:0}.sage-header .article-card{display:flex;align-items:center;gap:16px;padding:12px;border:1px solid rgb(var(--sd-platinum-rgb) / 0.082);border-radius:10px;background:rgb(var(--sd-platinum-rgb) / 0.016);transition:background .2s,border-color .2s}.sage-header .article-card:hover{background:rgb(var(--sd-platinum-rgb) / 0.043);border-color:rgb(var(--sd-platinum-rgb) / 0.208)}.sage-header .article-image{width:80px;height:70px;flex-shrink:0;overflow:hidden;box-shadow:none;border:0}.sage-header .article-image img{width:100%;height:100%;object-fit:cover}.sage-header .article-content h5{font-size:.9375rem;line-height:1.5;color:var(--sd-ivory);margin:0;font-weight:500}
.sage-mobile-toggle{display:none;align-items:center;gap:12px;min-height:44px;border:1px solid rgb(var(--sd-platinum-rgb) / 0.188);background:rgb(var(--sd-platinum-rgb) / 0.043);border-radius:7px;padding:8px 12px;color:var(--sd-ivory);font-size:.875rem}.sage-mobile-toggle svg{width:19px;height:19px}
.sage-mobile-panel{position:fixed;inset:0;width:100%;height:100dvh;z-index:120;display:flex;flex-direction:column;visibility:hidden;opacity:0;transform:translateY(-12px);transition:opacity .25s,transform .25s,visibility .25s;pointer-events:none;background:rgb(var(--sd-ink-rgb) / 0.973);backdrop-filter:blur(24px)}.sage-mobile-panel.is-open{visibility:visible;opacity:1;transform:none;pointer-events:auto}.sage-mobile-panel-heading{position:relative;z-index:2;display:flex;flex-shrink:0;align-items:center;justify-content:space-between;gap:20px;padding:20px 24px;border-bottom:1px solid rgb(var(--sd-platinum-rgb) / 0.145)}.sage-mobile-panel-heading button{border-radius:8px;background:rgb(var(--sd-platinum-rgb) / 0.043);padding:10px;border:1px solid rgb(var(--sd-platinum-rgb) / 0.188)}.sage-mobile-panel-heading svg{width:20px;height:20px}.sage-mobile-panel .mobile-menu-scroll{position:relative;overflow-y:auto;overscroll-behavior:contain;flex:1;min-height:0;padding:16px 0 40px}.sage-mobile-items>div{border-bottom:1px solid rgb(var(--sd-platinum-rgb) / 0.094);padding:6px 0}.sage-mobile-items>div>div>a{font-size:1.25rem;font-weight:400;letter-spacing:-.03em;padding:15px 0;color:var(--sd-ivory)}.sage-mobile-items>div>div>button{width:44px;min-height:44px;display:grid;place-items:center;border-radius:7px;background:rgb(var(--sd-platinum-rgb) / 0.031)}.sage-mobile-group{margin:6px 0 20px 0;padding-left:20px;border-color:rgb(var(--sd-silver-rgb) / 0.302)}.sage-mobile-group a{font-size:.9375rem;line-height:1.5;padding:10px 0;color:var(--sd-subtle);display:block}.sage-mobile-group .text-cyan-400{color:var(--sd-subtle);font-size:.75rem;text-transform:uppercase;letter-spacing:.09em;padding-top:14px}.sage-mobile-items .pt-6>a{border-radius:7px;background:var(--sd-platinum);color:var(--sd-graphite-secondary);font-weight:500}.sage-mobile-items [aria-current=page]{color:var(--sd-platinum)}

.sage-header .sage-brand-asset{display:block;width:54px;height:54px;position:relative;overflow:hidden;flex-shrink:0}.sage-header .sage-brand-asset img{position:absolute;width:110px;height:110px;max-width:none;left:-28px;top:-28px}.sage-header .sage-brand-name{font-family:var(--font-display),sans-serif;color:var(--sd-ivory);font-size:1.2rem;font-weight:500;letter-spacing:-.055em;white-space:nowrap}.sage-header .sage-header-brand>a,.sage-header .sage-mobile-panel-heading a{display:flex;align-items:center;gap:6px}
@media(min-width:1280px){.sage-header .mega-menu[aria-label="Services menu"] .standard-mega-menu-layout{grid-template-columns:minmax(0,1fr) 240px;gap:24px}.sage-header .mega-menu[aria-label="Services menu"] .mega-menu-categories{grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}.sage-header .mega-menu[aria-label="Services menu"] .mega-menu-category h4{min-height:36px}}
@keyframes sage-menu-reveal{from{opacity:0;transform:translateY(-7px)}to{opacity:1;transform:none}}
@media(min-width:1500px){.sage-header .mega-menu-categories{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:1199px){.sage-header-desktop{display:none}.sage-mobile-toggle{display:flex}.sage-header{height:100px;padding:14px 20px}.sage-header-bar{height:72px;padding:0 20px}.sage-header .mega-menu{display:none}}
@media(max-width:600px){.sage-header{height:94px;padding:12px}.sage-header-bar{height:70px;padding:0 16px;border-radius:11px}.sage-header-brand img,.sage-mobile-panel-heading img{width:120px;height:40px}.sage-mobile-panel-heading{padding:17px 24px}.sage-mobile-panel .max-w-xl{padding:0 24px}}
@media(prefers-reduced-motion:reduce){.sage-header *,.sage-header *::before,.sage-header *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
` }), []);

  return (
    <div className="sage-navigation" ref={navigationRef}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) closeMenus(); }}
      onKeyDown={event => {
        if (event.key === 'Escape') {
          const index = items.findIndex(item => item.label === megaMenuOpen);
          closeMenus();
          triggerRefs.current[index >= 0 ? index : hoverIndex ?? 0]?.focus();
        }
      }}>
      <style dangerouslySetInnerHTML={memoizedStyles} />
      <div className="gooey-nav-container" ref={containerRef}>

        {/* Nav */}
        <nav aria-label="Main navigation">
          <ul
            ref={navRef}
            className="gooey-nav-ul"
          >
            {items.map((item, index) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              const hasMegaMenu = megaMenuContent[item.label as keyof typeof megaMenuContent];
              
              return (
                <li
                  key={`${navigationLabel(item.label)}-${index}`}
                  className={`group relative gooey-nav-item text-xs sm:text-sm md:text-base cursor-pointer ${
                    item.href && activeIndex === index ? "active" : ""
                  }`}
                  onMouseEnter={() => { cancelClose(); megaMenuTimeout.current = setTimeout(() => handleMouseEnter(index, item.label), 120); }}
                  onMouseLeave={closeMegaMenuWithDelay}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-current={activeIndex === index ? 'page' : undefined}
                      onKeyDown={event => {
                        if (event.key === 'ArrowDown' && (hasChildren || hasMegaMenu)) {
                          event.preventDefault(); toggleMenu(index, item.label, true);
                        }
                      }}
                      onClick={(e) => {
                        closeMenus();
                        const liEl = e.currentTarget.parentElement as HTMLLIElement | null;
                        if (liEl) {
                          setActiveIndex(index);
                          updateFilterPosition(liEl);
                        }
                      }}
                      className={`gooey-nav-link flex items-center gap-1`}
                    >
                      {navigationLabel(item.label)}

                    </Link>
                  ) : (
                    <span className={`gooey-nav-link flex items-center gap-1`}>
                      {navigationLabel(item.label)}

                    </span>
                  )}

                  {(hasChildren || hasMegaMenu) && <button
                    ref={node => { triggerRefs.current[index] = node; }}
                    type="button" className="sage-nav-disclosure"
                    aria-label={`Explore ${navigationLabel(item.label)}`}
                    aria-expanded={hasMegaMenu ? megaMenuOpen === item.label : hoverIndex === index}
                    aria-controls={`sage-menu-${index}`}
                    onClick={() => toggleMenu(index, item.label)}
                    onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); toggleMenu(index, item.label, true); } }}
                  ><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5"/></svg></button>}

                  {/* Simple Dropdown for items without mega menu content - desktop hover */}
                  {hasChildren && !hasMegaMenu && hoverIndex === index && (
                    <ul
                      id={`sage-menu-${index}`} className="sage-simple-dropdown"
                    >
                      {item.children!.map((child) => (
                        <li key={child.label}>
                          {child.external ? (
                            <a
                              href={child.href}
                              onClick={closeMegaMenu}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full text-left px-3 py-2 rounded-lg text-sm text-white/90 hover:text-cyan-300 hover:bg-white/5"
                            >
                              {child.label} ↗
                            </a>
                          ) : (
                            <Link
                              href={child.href}
                              onClick={closeMegaMenu}
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
                              onClick={closeMegaMenu}
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
      <AnimatePresence>
      {megaMenuOpen && megaMenuContent[megaMenuOpen as keyof typeof megaMenuContent] && (
        <motion.div
          key={megaMenuOpen}
          initial={{ opacity: 0, y: reduceMotion ? 0 : -8, scale: reduceMotion ? 1 : .985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -5, transition: { duration: .12 } }}
          transition={{ duration: reduceMotion ? 0 : .24, ease: [.22, 1, .36, 1] }}
          ref={megaMenuRef}
          className={`mega-menu ${megaMenuOpen ? 'open' : ''} hidden lg:block`}
          id={`sage-menu-${items.findIndex(item => item.label === megaMenuOpen)}`}
          role="region" aria-label={`${megaMenuOpen} menu`}
          onMouseEnter={cancelClose}
          onMouseLeave={closeMegaMenuWithDelay}
          style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
            touchAction: 'pan-y',
          }}
          tabIndex={-1}
        >
          <div className="mega-menu-heading"><div><h2>{megaMenuContent[megaMenuOpen].title}</h2></div><Link href={items.find(item => item.label === megaMenuOpen)?.href ?? '/'} onClick={closeMegaMenu}>{megaMenuOpen === 'Case Studies' ? 'View All Projects' : `View all ${megaMenuOpen === "Let's Talk AI" ? 'AI capabilities' : navigationLabel(megaMenuOpen).toLowerCase()}`}</Link></div>
          {(() => {
            const content = megaMenuContent[megaMenuOpen as keyof typeof megaMenuContent];
            return megaMenuOpen === "Case Studies" ? renderWorkMenu() : megaMenuOpen === "Let's Talk AI"
              ? renderAppInventivMegaMenu(content)
              : renderStandardMegaMenu(content);
          })()}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

const GooeyNavWithHeader: React.FC<GooeyNavWithHeaderProps> = ({
  items,
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen(open => !open), []);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<{[key: string]: boolean}>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();


  // Reset open dropdowns when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setOpenMobileDropdowns({});
    }
  }, [mobileMenuOpen]);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    const resize = () => { if (window.innerWidth >= 1200) setMobileMenuOpen(false); };
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('scroll', scroll); window.removeEventListener('resize', resize); };
  }, []);

  // Only the modal mobile drawer locks scrolling; desktop menus use native scrolling.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = mobileTriggerRef.current;
    const main = document.getElementById('main-content');
    const previousInert = main?.inert ?? false;
    document.body.style.overflow = 'hidden';
    if (main) main.inert = true;
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = previousInert;
      trigger?.focus();
    };
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = useCallback((label: string) => {
    setOpenMobileDropdowns((prev: {[key: string]: boolean}) => ({ 
      ...prev, 
      [label]: !prev[label] 
    }));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenMobileDropdowns({});
  }, []);

  // Get mega menu content for mobile
  const getMobileMegaMenuContent = useCallback((label: string) => {
    const content = megaMenuContent[label as keyof typeof megaMenuContent];
    if (!content) return null;

    return {
      leftSidebar: content.leftSidebar,
      categories: content.categories,
      articles: content.articles,
      cta: content.cta,
      showcase: content.showcase
    };
  }, []);

  const headerClasses = `sage-header ${scrolled ? 'is-scrolled' : ''} ${mobileMenuOpen ? 'is-open' : ''}`;

  const activeIndex = useMemo(() => {
    const currentPath = pathname || '';
    const index = items.findIndex((item) => {
      if (item.label === 'Case Studies' && currentPath.startsWith('/case-studies')) return true;
      if (item.href) {
        return item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
      }
      if (item.children) {
        return item.children.some((child) => child.href && currentPath.startsWith(child.href));
      }
      return false;
    });
    return index;
  }, [pathname, items]);

  return (
    <header className={headerClasses}>
      <div className="sage-header-shell">
        <div className="sage-header-bar">
          {/* Logo */}
          <div className="sage-header-brand">
            <Link href="/" className="block">
              {children}
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="sage-header-desktop">
            <GooeyNav
              items={items}
              initialActiveIndex={activeIndex}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 relative z-[10001]">
            {/* Mobile Hamburger */}
            <button
              ref={mobileTriggerRef} className="sage-mobile-toggle"
              aria-expanded={mobileMenuOpen} aria-controls="sage-mobile-navigation"
              onClick={toggleMobileMenu}
              aria-label="Open navigation"
            >
              <span>Menu</span><svg
                className="h-6 w-6 transition-all duration-300 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6 M6 6L18 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16 M4 12h16 M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Overlay Menu */}
      <div
        ref={mobileMenuRef}
        id="sage-mobile-navigation" role="dialog" aria-modal={mobileMenuOpen ? true : undefined}
        aria-label="Mobile navigation" aria-hidden={!mobileMenuOpen} inert={!mobileMenuOpen}
        className={`sage-mobile-panel ${mobileMenuOpen ? 'is-open' : ''}`}
        onKeyDown={event => {
          if (event.key === 'Escape') { event.stopPropagation(); closeMobileMenu(); }
          if (event.key === 'Tab') {
            const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button')).filter(node => node.getClientRects().length);
            const first = focusable[0], last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
          }
        }}
      >
        {/* Background Overlay */}
        <div className="sage-mobile-backdrop" />
        
        {/* Fixed Header with Logo and Close Button */}
        <div className="sage-mobile-panel-heading">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMobileMenu} className="block">
              {children}
            </Link>
          </div>
          
          {/* Close button - FIXED VISIBILITY */}
          <button
            ref={closeButtonRef} onClick={closeMobileMenu}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200 shadow-lg"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Menu Content */}
        <div 
          className="mobile-menu-scroll"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
            overscrollBehavior: 'contain',
          }}
        >
          <div className="max-w-xl mx-auto px-6">
            {/* Mobile Menu Content */}
            <div className="sage-mobile-items">
              {/* Render ALL menu items including Home */}
              {items.map((item, index) => {
                const hasChildren = (item.children && item.children.length > 0) || 
                  (megaMenuContent[item.label as keyof typeof megaMenuContent] !== undefined);
                const isDropdownOpen = openMobileDropdowns[item.label] || false;
                const megaContent = getMobileMegaMenuContent(item.label);

                return (
                  <div key={navigationLabel(item.label)} className="space-y-2">
                    <div className="flex items-center justify-between">
                      {item.href ? (
                        <Link 
                          href={item.href}
                          onClick={closeMobileMenu} aria-current={pathname === item.href ? 'page' : undefined}
                          className="text-white text-xl font-semibold hover:text-cyan-300 transition-colors flex-1 py-3 px-4 rounded-lg hover:bg-white/5"
                        >
                          {navigationLabel(item.label)}
                        </Link>
                      ) : (
                        <span className="text-white text-xl font-semibold flex-1 py-3 px-4">{navigationLabel(item.label)}</span>
                      )}
                      
                      {/* Dropdown toggle button - only show if has children */}
                      {hasChildren && (
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="p-2 text-white hover:text-cyan-300 transition-colors ml-2"
                          aria-label={`Explore ${navigationLabel(item.label)}`}
                          aria-expanded={isDropdownOpen} aria-controls={`sage-mobile-group-${index}`}
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
                    
                    {/* Dropdown Content - FIXED FOR "Let's Talk AI" */}
                    {isDropdownOpen && hasChildren && (
                      <div id={`sage-mobile-group-${index}`} className="sage-mobile-group space-y-4 mt-2 ml-4 pl-4 border-l border-gray-700">
                        {/* For regular children without mega menu */}
                        {!megaContent && item.children && item.children.map((child) => (
                          child.external ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMobileMenu}
                              className="block text-white text-lg hover:text-cyan-300 transition-colors py-1"
                            >
                              {child.label} ↗
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="block text-white text-lg hover:text-cyan-300 transition-colors py-1"
                            >
                              {child.label}
                            </Link>
                          )
                        ))}

                        {/* For mega menu content like "Let's Talk AI" */}
                        {megaContent && (
                          <>
                            {/* Left Sidebar Items */}
                            {megaContent.leftSidebar && (
                              <div className="space-y-2">
                                <div className="text-cyan-400 text-sm font-medium pt-2">
                                  {megaContent.leftSidebar.title}
                                </div>
                                <div className="space-y-1">
                                  {megaContent.leftSidebar.items.map((sidebarItem) => (
                                    <Link
                                      key={sidebarItem.label}
                                      href={sidebarItem.href}
                                      onClick={closeMobileMenu}
                                      className="block text-white text-lg hover:text-cyan-300 transition-colors py-1"
                                    >
                                      {sidebarItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Categories */}
                            {megaContent.categories?.map((category) => (
                              <div key={category.title} className="space-y-2">
                                <div className="text-cyan-400 text-sm font-medium pt-2">
                                  {category.title}
                                </div>
                                <div className="space-y-1">
                                  {category.items.map((categoryItem) => (
                                    categoryItem.external ? (
                                      <a
                                        key={categoryItem.label}
                                        href={categoryItem.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMobileMenu}
                                        className="block text-white text-lg hover:text-cyan-300 transition-colors py-1"
                                      >
                                        {categoryItem.label} ↗
                                      </a>
                                    ) : (
                                      <Link
                                        key={categoryItem.label}
                                        href={categoryItem.href}
                                        onClick={closeMobileMenu}
                                        className="block text-white text-lg hover:text-cyan-300 transition-colors py-1"
                                      >
                                        {categoryItem.label}
                                      </Link>
                                    )
                                  ))}
                                </div>
                              </div>
                            ))}

                            {/* Articles */}
                            {megaContent.articles && (
                              <div className="space-y-2">
                                <div className="text-cyan-400 text-sm font-medium pt-2">
                                  Featured Articles
                                </div>
                                <div className="space-y-1">
                                  {megaContent.articles.map((article) => (
                                    <Link
                                      key={article.id}
                                      href={article.href}
                                      onClick={closeMobileMenu}
                                      className="block text-white text-lg hover:text-cyan-300 transition-colors py-1"
                                    >
                                      {article.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-6 mt-6 border-t border-gray-700">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="inline-flex w-full items-center justify-center h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold border border-white/10 hover:border-cyan-300/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GooeyNavWithHeader;