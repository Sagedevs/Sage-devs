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
      { label: "Let's Talk AI", href: "/Letstalkai" },
      {
        label: "Services",
        href: "/services",
        children: [
          { label: "Web & App Development", href: "/services/web-app-development" },
          { label: "UI/UX Design", href: "/services/ui-ux-design" },
          { label: "E-commerce (WordPress & Shopify)", href: "/services/ecommerce" },
          { label: "SaaS & Product Dev", href: "/services/saas-product" },
          { label: "Cloud & DevOps", href: "/services/cloud-devops" },
          { label: "Maintenance & Support", href: "/services/maintenance-support" },
        ],
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        children: [
          { label: "Web Apps", href: "/case-studies/web-apps" },
          { label: "SaaS", href: "/case-studies/saas" },
          { label: "E-commerce", href: "/case-studies/ecommerce" },
          { label: "Enterprise", href: "/case-studies/enterprise" },
        ],
      },
      { label: "Pricing & Plans", href: "/pricing" },
      {
        label: "Resources",
        href: "/resources",
        children: [
          { label: "Blog / Insights", href: "/blog" },
          { label: "Guides & Templates", href: "/resources#guides-templates" },
          { label: "Webinars / Talks", href: "/resources#webinars-talks" },
        ],
      },
      {
        label: "About Us",
        href: "/about",
        children: [
          { label: "Team", href: "/about#team" },
          { label: "Careers", href: "/about#careers" },
        ],
      },
      {
        label: "Contact",
        href: "/contact",
        children: [
          { label: "Get in Touch (form)", href: "/contact#contact-form" },
          { label: "FAQs", href: "/faq" },
        ],
      },
    ];

    const cleanRoutes = [];

    function extractRoutes(routes) {
      routes.forEach((r) => {
        // Skip anchors (#) and external links
        if (r.href && !r.href.startsWith("http") && !r.href.includes("#")) {
          cleanRoutes.push(r.href);
        }
        if (r.children) extractRoutes(r.children);
      });
    }

    extractRoutes(navRoutes);

    return cleanRoutes.map((page) => ({
      loc: page,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
