import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.uifaces.co',
        port: '',
        pathname: '/our-content/donated/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
        port: '',
        pathname: '/blocks/customers/**',
      },
      {
        protocol: "https",
        hostname: "wisdomcoders.us",
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'woocommerce.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's.w.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'strapi.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ghost.org',
        pathname: '/**',
      },
      
    ],
  },
  reactStrictMode: true,
};

// export default withPWA({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: !isProduction,
// })(nextConfig);

export default nextConfig;
