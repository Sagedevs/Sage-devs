'use client';
import { useEffect, useState } from 'react';
import { business, usBusinessHours } from '@/lib/business';

export default function BusinessHours() {
  // A stable EST fallback hydrates safely; the displayed clock follows Eastern DST.
  const [range, setRange] = useState<string>(business.hours.usStandardRange);
  useEffect(() => {
    const update = () => setRange(usBusinessHours(new Date()));
    update();
    const timer = window.setInterval(update, 60 * 60 * 1000);
    window.addEventListener('focus', update);
    return () => { window.clearInterval(timer); window.removeEventListener('focus', update); };
  }, []);
  return <div className="business-hours"><p>{business.hours.displayDays}</p><strong>{range}</strong><small>{business.hours.usTimezone}</small></div>;
}
