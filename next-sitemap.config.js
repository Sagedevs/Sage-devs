/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sagedevs.tech",
  generateRobotsTxt: true,
  outDir: "public",
  generateIndexSitemap: true,

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },

  additionalPaths: async () => {
    const navRoutes = [
      { label: "Home", href: "/" },
      { label: "Let's Talk AI", href: "/letstalkai" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing & Plans", href: "/pricing" },
      { label: "Resources", href: "/resources" },
      { label: "Blog / Insights", href: "/blog" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Terms", href: "/terms" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy", href: "/privacy" },
    ];

    // Use Set to avoid duplicates
    const cleanRoutes = new Set();

    function extractRoutes(routes) {
      routes.forEach((r) => {
        // Only include internal paths starting with / and no #
        if (r.href && r.href.startsWith("/") && !r.href.includes("#")) {
          cleanRoutes.add(r.href);
        }
        if (r.children) extractRoutes(r.children);
      });
    }

    extractRoutes(navRoutes);

    return Array.from(cleanRoutes).map((page) => ({
      loc: page,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
