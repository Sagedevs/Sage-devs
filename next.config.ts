import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    domains: ['api.uifaces.co', 'images.unsplash.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: !isProduction,
})(nextConfig);
