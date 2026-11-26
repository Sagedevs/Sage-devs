/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sagedevs.tech',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  outDir: 'public',
  autoLastmod: false,
  exclude: ['/api/*', '/404', '/500', '/_not-found'],
  // Build output supplies the actual canonical pages, including dynamic static routes.
  // Do not imply every page was substantively updated on every build.
  transform: async (_config, path) => ({ loc: path }),
  robotsTxtOptions: { policies: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }] },
};
