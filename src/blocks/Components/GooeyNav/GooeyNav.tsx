import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface GooeyNavChildItem {
  label: string;
  href: string;
  external?: boolean;
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
  scrolled: boolean; // Add scrolled prop
  mobileMenuOpen: boolean; // Add mobileMenuOpen prop
  toggleMobileMenu: () => void; // Add toggleMobileMenu prop
  children?: React.ReactNode; // Add children prop
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = 0,
  scrolled,
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);
  const [filterPosition, setFilterPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  // Toggle state for mobile/tablet nav
  // const [open, setOpen] = useState(false); // Removed internal state
  // Track which dropdown is hovered on desktop
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
      // setOpen(false); // Close nav on mobile/tablet after click
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
      @media (prefers-reduced-motion: reduce) {
        .gooey-filter,
        .gooey-nav-item,
        .gooey-nav-item::after {
          transition: none !important;
        }
      }
    `,
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
            className={`h-6 w-6 transition-transform duration-200 ${mobileMenuOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              // X icon
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
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
              return (
                <li
                  key={`${item.label}-${index}`}
                  className={`group relative gooey-nav-item text-xs sm:text-sm md:text-base cursor-pointer ${
                    item.href && activeIndex === index ? "active" : ""
                  }`}
                  
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex((prev) => (prev === index ? null : prev))}
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
                          // setOpen(false); // Removed internal state
                        }
                      }}
                      className={`gooey-nav-link flex items-center gap-1`}
                    >
                      {item.label}
                      {hasChildren && <span className="text-[10px] opacity-80">▾</span>}
                    </Link>
                  ) : (
                    <span className={`gooey-nav-link flex items-center gap-1`}>
                      {item.label}
                      {hasChildren && <span className="text-[10px] opacity-80">▾</span>}
                    </span>
                  )}

                  {/* Dropdown - desktop hover */}
                  {hasChildren && hoverIndex === index && (
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
    </>
  );
};

const GooeyNavWithHeader: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = 0,
  scrolled,
  mobileMenuOpen,
  toggleMobileMenu,
  children,
}) => {
  const pathname = usePathname(); // Add usePathname here

  // Base classes that don't change based on state - CONSISTENT FOR SSR
  const headerClasses = `fixed top-0 left-0 right-0 z-[9999] transition-all duration-200 bg-transparent`;

  const activeIndex = useMemo(() => {
    const index = items.findIndex((item) => {
      if (item.href) {
        return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
      }
      if ((item as any).children) {
        return (item as any).children.some((c: any) => c.href && pathname.startsWith(c.href));
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
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : ""
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20 lg:h-24 relative">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-[10000]">
            {children}
          </Link>

          {/* Desktop Navigation - Perfectly centered (matches CTA baseline) */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center z-[10000] pointer-events-none">
            <div className="relative pointer-events-auto" style={{ height: "60px", width: "min(600px, 80vw)", maxWidth: "720px" }}>
              <GooeyNav
                items={items}
                initialActiveIndex={activeIndex !== -1 ? activeIndex : 0}
                scrolled={scrolled}
                mobileMenuOpen={mobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 relative w-auto z-[10001]">
            {/* Mobile Hamburger - No animations during SSR */}
            <button
              className="lg:hidden relative z-[10000] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white block transform origin-center transition-all duration-200 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white block transition-all duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white block transform origin-center transition-all duration-200 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu - Consistent for SSR */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-[9998] transition-opacity duration-200 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto pt-24 pb-12 px-6">
          {/* Mobile grouped menu */}
          <div className="space-y-8 max-w-xl mx-auto">
            <div>
              <Link href="/" onClick={() => toggleMobileMenu()} className="text-white text-2xl font-semibold">Home</Link>
            </div>

            {items.map((item) => {
              if (item.label === "Home") return null; // Already handled
              if (item.label === "Let's Talk AI") {
                return (
                  <div key={item.label}>
                    <Link href={item.href || "#"} onClick={() => toggleMobileMenu()} className="text-white text-2xl font-semibold">
                      {item.label}
                    </Link>
                  </div>
                );
              }
              if (item.label === "Pricing & Plans") {
                return (
                  <div key={item.label}>
                    <Link href={item.href || "#"} onClick={() => toggleMobileMenu()} className="text-white text-2xl font-semibold">
                      Pricing
                    </Link>
                  </div>
                );
              }
              if (item.children && item.children.length > 0) {
                const titleMap: { [key: string]: string } = {
                  "Services": "Services",
                  "Case Studies": "Case Studies",
                  "Resources": "Resources",
                  "About Us": "Company",
                  "Contact": "Contact",
                };
                const displayTitle = titleMap[item.label] || item.label;

                return (
                  <div key={item.label}>
                    <div className="text-gray-300 uppercase tracking-wider text-xs mb-3">{displayTitle}</div>
                    <div className="space-y-3">
                      {item.children.map((child) => (
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => toggleMobileMenu()}
                            className="block text-white text-xl"
                          >
                            {child.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => toggleMobileMenu()}
                            className="block text-white text-xl"
                          >
                            {child.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/Contact"
                onClick={() => toggleMobileMenu()}
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