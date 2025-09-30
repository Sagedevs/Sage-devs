'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Add type definitions for gtag
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: Record<string, any>[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-MZ5HHWRT7M', {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ''),
        send_page_view: false,
        transport_url: 'https://www.google-analytics.com',
        first_party_collection: true
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Preconnect to Google domains */}
      <link 
        rel="preconnect" 
        href="https://www.googletagmanager.com" 
        crossOrigin="anonymous" 
      />
      <link 
        rel="preconnect" 
        href="https://www.google-analytics.com" 
        crossOrigin="anonymous"
      />
      
      {/* GTM Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MZ5HHWRT7M`}
      />
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZ5HHWRT7M', {
              page_path: window.location.pathname,
              send_page_view: false,
              transport_url: 'https://www.google-analytics.com',
              first_party_collection: true
            });
          `,
        }}
      />
    </>
  );
}