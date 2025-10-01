'use client';

import Script from 'next/script';
import { Suspense, useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Move the component logic to a separate component
function GoogleAnalyticsContent() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-MZ5HHWRT7M', {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ''),
        send_page_view: false,
        transport_url: 'https://www.google-analytics.com',
        first_party_collection: true
      });
    }
  }, [pathname]);

  return (
    <>
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

export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsContent />
    </Suspense>
  );
}