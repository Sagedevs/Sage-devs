import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const isProduction = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Only runs if you explicitly set ANALYZE=true
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
    register: true,
    skipWaiting: true,
    disable: !isProduction, // only enable PWA in production
  })(nextConfig)
);
