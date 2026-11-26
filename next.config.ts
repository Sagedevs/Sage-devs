import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const isProduction = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Only runs if you explicitly set ANALYZE=true
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'host', value: 'www.sagedevs.tech' }], destination: 'https://sagedevs.tech/:path*', permanent: true },
      { source: '/icons/icon-192x192.png', destination: '/brand/icon-192.png', permanent: true },
      { source: '/icons/icon-512x512.png', destination: '/brand/icon-512.png', permanent: true },
      { source: '/icons/logo.png', destination: '/brand/sage-devs-emblem.png', permanent: true },
      { source: '/logo.png', destination: '/brand/sage-devs-wordmark.png', permanent: true },
      { source: '/logo/logofixxed.svg', destination: '/brand/sage-devs-wordmark.svg', permanent: true },
      { source: '/og-banner.webp', destination: '/brand/social-card.png', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: '/:path*', headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ] },
      { source: '/api/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ];
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

// ✅ Wrap PWA inside Bundle Analyzer
module.exports = withBundleAnalyzer(
  withPWA({
    dest: 'public',
    publicExcludes: ['!noprecache/**/*', '!icons/icon-192x192.png', '!icons/icon-512x512.png', '!icons/logo.png', '!logo.png', '!logo/**', '!og-banner.webp', '!resources/**/*', '!proj/**/*', '!proj1/**/*', '!techstack/**/*', '!blog/**/*', '!people/**/*', '!tabs/**/*', '!fonts/**/*', '!brand/*.svg', '!brand/sage-devs-*.png', '!brand/social-card.png', '!brand/icon-1024.png', '!**/.DS_Store'],
    register: true,
    skipWaiting: true,
    disable: !isProduction, // only enable PWA in production
  })(nextConfig)
);
