"use client";
import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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

// Enhanced Mega Menu Content Data - AppInventiv Style
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
        title: "Web Development",
        items: [
          { label: "Web & App Development", href: "/services#web-app", description: "Custom web and mobile applications" },
          { label: "SaaS & Product Dev", href: "/services#saas", description: "Scalable software solutions" },
          { label: "E-commerce Solutions", href: "/services#ecommerce", description: "WordPress & Shopify stores" },
          { label: "Cloud & DevOps", href: "/services#cloud", description: "Infrastructure & deployment" },
          {
            label: "WordPress Services",
            href: "/services#wordpress",
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
            href: "/services#ai-solutions",
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
          { label: "UI/UX Design", href: "/services#ui-design", description: "User-centered design approach" },
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

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = 0,
}) => {
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<NodeJS.Timeout | null>(null);
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
  const router = useRouter();

  // Simplified scroll lock - prevents layout shifts
  useEffect(() => {
    if (megaMenuOpen) {
      // Simply prevent scrolling without changing layout
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [megaMenuOpen]);

  // Handle wheel events for the mega menu
  useEffect(() => {
    if (!megaMenuRef.current || !megaMenuOpen) return;
    const megaMenuEl = megaMenuRef.current;

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      const canScrollUp = megaMenuEl.scrollTop > 0;
      const canScrollDown = megaMenuEl.scrollTop + megaMenuEl.clientHeight < megaMenuEl.scrollHeight - 1;

      if ((delta > 0 && canScrollDown) || (delta < 0 && canScrollUp)) {
        megaMenuEl.scrollTop += delta;
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    megaMenuEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      megaMenuEl.removeEventListener("wheel", handleWheel as EventListener);
    };
  }, [megaMenuOpen]);

  // Close mega menu function
  const closeMegaMenu = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target || !target.closest) return;

    const articleCard = target.closest('.article-card');
    if (articleCard) {
      e.preventDefault();
      const href = (articleCard as HTMLAnchorElement).getAttribute('href');
      if (href) {
        void router.push(href);
        setMegaMenuOpen(null);
        window.scrollTo(0, 0);
      }
    } else {
      setMegaMenuOpen(null);
    }
  }, [router]);

  const closeMegaMenuWithDelay = useCallback(() => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
    }
    const timeout = setTimeout(() => {
      setMegaMenuOpen(null);
    }, 200); // Increased delay for better hover experience
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
            shallow={true}
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
              View Details →
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
              View Details →
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
        -webkit-overflow-scrolling: touch;
        overscroll-behavior: contain;
      }
      
      .mega-menu.open {
        opacity: 1;
        transform: translate(-215px, 10px);
        pointer-events: auto;
        width: 77rem;
        border-radius: 20px;
        box-shadow: 2px 2px 10px #fff;
      }
      
      /* Mobile menu scroll improvements */
      .mobile-menu-scroll {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        overscroll-behavior: contain;
      }

      /* Hide scrollbar for mobile but keep functionality */
      .mobile-menu-scroll::-webkit-scrollbar {
        display: none;
      }

      .mobile-menu-scroll {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      /* Custom Scrollbar for Mega Menu */
      .mega-menu::-webkit-scrollbar {
        width: 5px;
        height: 3px;
      }

      .mega-menu::-webkit-scrollbar-track {
        background: #2a334a;
        border-radius: 10px;
      }

      .mega-menu::-webkit-scrollbar-thumb {
        background-color: #60a5fa;
        border-radius: 10px;
        border: 1px solid #2a334a;
      }

      .mega-menu::-webkit-scrollbar-thumb:hover {
        background-color: #3b82f6;
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
      
      /* Standard mega menu layout */
      .standard-mega-menu-layout {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr 350px;
        gap: 2rem;
        position: relative;
      }
      
      .mega-menu-categories {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 0.5rem;
      }
      
      .category-items {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
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
        overflow: hidden;
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
      
      /* CTA Styles */
      .mega-menu-cta {
        background: transparent;
        padding: 0;
        margin-top: 1.5rem;
      }
      
      .cta-title {
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      
      .cta-description {
        color: #cbd5e1;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        line-height: 1.4;
      }
      
      .cta-button {
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
        transition: all 0.2s ease;
        width: 100%;
        border: none;
        cursor: pointer;
        margin-top: 0.5rem;
      }
      
      .cta-button:hover {
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
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
        .appinventiv-layout,
        .standard-mega-menu-layout {
          height: auto;
          min-height: 100%;
          grid-template-columns: 1fr;
          gap: 2rem;
          overflow-y: scroll;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.1) rgba(0, 0, 0, 0.1);
        }
        
        .mega-menu-showcase,
        .mega-menu-right-sidebar {
          margin-top: 2rem;
        }
        
        .mega-menu-categories {
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

        {/* Nav */}
        <nav>
          <ul
            ref={navRef}
            className={`
              gooey-nav-ul
              flex-col
              hidden
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
          ref={megaMenuRef}
          className={`mega-menu ${megaMenuOpen ? 'open' : ''} hidden lg:block`}
          onMouseEnter={() => {
            if (megaMenuTimeout) {
              clearTimeout(megaMenuTimeout);
              setMegaMenuTimeout(null);
            }
          }}
          onMouseLeave={closeMegaMenu}
          style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
            touchAction: 'pan-y',
          }}
          tabIndex={-1}
        >
          {(() => {
            const content = megaMenuContent[megaMenuOpen as keyof typeof megaMenuContent];
            return megaMenuOpen === "Let's Talk AI" 
              ? renderAppInventivMegaMenu(content)
              : renderStandardMegaMenu(content);
          })()}
        </div>
      )}
    </>
  );
};

const GooeyNavWithHeader: React.FC<GooeyNavWithHeaderProps> = ({
  items,
  scrolled,
  mobileMenuOpen,
  toggleMobileMenu,
  children,
}) => {
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<{[key: string]: boolean}>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Reset open dropdowns when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setOpenMobileDropdowns({});
    }
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        toggleMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen, toggleMobileMenu]);

  // Prevent body scrolling when mobile menu is open - FIXED VERSION
  useEffect(() => {
    if (mobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Apply styles to prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      // Cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = useCallback((label: string) => {
    setOpenMobileDropdowns((prev: {[key: string]: boolean}) => ({ 
      ...prev, 
      [label]: !prev[label] 
    }));
  }, []);

  const closeMobileMenu = useCallback(() => {
    toggleMobileMenu();
    setOpenMobileDropdowns({});
  }, [toggleMobileMenu]);

  const handleMobileLinkClick = useCallback((href: string, hasChildren: boolean = false) => {
    if (!hasChildren) {
      closeMobileMenu();
      router.push(href);
    }
  }, [closeMobileMenu, router]);

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

  // Base classes that don't change based on state
  const headerClasses = `fixed top-0 left-0 right-0 z-[9999] transition-all duration-200 ${
    scrolled || mobileMenuOpen
      ? "bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-xl border-b border-white/10"
      : "bg-transparent"
  }`;

  const activeIndex = useMemo(() => {
    const currentPath = pathname || '';
    const index = items.findIndex((item) => {
      if (item.href) {
        return item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
      }
      if (item.children) {
        return item.children.some((child) => child.href && currentPath.startsWith(child.href));
      }
      return false;
    });
    return index === -1 ? 0 : index;
  }, [pathname, items]);

  return (
    <header className={headerClasses}>
      {/* Client-side header background overlay */}
      <div
        className={`absolute inset-0 transition-all duration-200 ${
          scrolled || mobileMenuOpen
            ? "bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-xl border-b border-white/10"
            : ""
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20 lg:h-24 relative">
          {/* Logo */}
          <div className="flex-shrink-0 z-[10000] ml-4 lg:ml-0 lg:-translate-x-10">
            <Link href="/" className="block">
              {children}
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 ml-12 z-[10000]" style={{ transform: 'translateX(60px)' }}>
            <GooeyNav
              items={items}
              initialActiveIndex={activeIndex !== -1 ? activeIndex : 0}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 relative z-[10001]">
            {/* Mobile Hamburger */}
            <button
              className={`lg:hidden absolute top-1/2 right-4 transform -translate-y-1/2 z-[10002] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200 ${
                mobileMenuOpen 
                  ? 'bg-black/30 backdrop-blur-sm border border-white/20 shadow-lg' 
                  : 'bg-transparent'
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
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
        className={`lg:hidden fixed inset-0 z-[99999] transition-all duration-300 transform ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-blue-900/95 to-slate-900/98 backdrop-blur-xl" />
        
        {/* Fixed Header with Logo and Close Button */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-xl border-b border-white/10 h-20 flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMobileMenu} className="block">
              {children}
            </Link>
          </div>
          
          {/* Close button - FIXED VISIBILITY */}
          <button
            onClick={closeMobileMenu}
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
          className="relative h-full w-full overflow-y-auto mobile-menu-scroll pt-20 pb-8"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
            overscrollBehavior: 'contain',
          }}
        >
          <div className="max-w-xl mx-auto px-6">
            {/* Mobile Menu Content */}
            <div className="space-y-2 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-4">
              {/* Render ALL menu items including Home */}
              {items.map((item) => {
                const hasChildren = (item.children && item.children.length > 0) || 
                  (megaMenuContent[item.label as keyof typeof megaMenuContent] !== undefined);
                const isDropdownOpen = openMobileDropdowns[item.label] || false;
                const megaContent = getMobileMegaMenuContent(item.label);

                return (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      {item.href ? (
                        <Link 
                          href={item.href}
                          onClick={() => handleMobileLinkClick(item.href!, hasChildren)}
                          className="text-white text-xl font-semibold hover:text-cyan-300 transition-colors flex-1 py-3 px-4 rounded-lg hover:bg-white/5"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-white text-xl font-semibold flex-1 py-3 px-4">{item.label}</span>
                      )}
                      
                      {/* Dropdown toggle button - only show if has children */}
                      {hasChildren && (
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="p-2 text-white hover:text-cyan-300 transition-colors ml-2"
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
                    
                    {/* Dropdown Content - FIXED FOR "Let's Talk AI" */}
                    {isDropdownOpen && hasChildren && (
                      <div className="space-y-4 mt-2 ml-4 pl-4 border-l border-gray-700">
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