'use client';
import { useEffect } from 'react';
import { recordConversion } from '@/lib/conversions';

export default function ConversionEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const url = new URL(link.href, window.location.origin);
      const action = url.hostname === 'calendly.com' ? 'booking_click' : url.protocol === 'mailto:' ? 'email_click' : ['wa.me', 'api.whatsapp.com'].includes(url.hostname) ? 'whatsapp_click' : null;
      if (action) recordConversion(action, { page: window.location.pathname });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
