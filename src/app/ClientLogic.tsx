// app/ClientLogic.tsx
'use client';

import { useEffect } from 'react';

// Preload function with error handling
const preloadComponent = (path: string) => {
  try {
    return import(/* webpackChunkName: "[request]" */ `@/components/${path}`);
  } catch (error) {
    console.error(`Failed to load component: ${path}`, error);
    return Promise.reject(error);
  }
};

// Component preloading priorities
const HIGH_PRIORITY = [
  'sections/TrustedBySection',
  'sections/Services',
  'sections/CaseStudies'
];

const MEDIUM_PRIORITY = [
  'sections/WhyChooseUs',
  'TestimonialSlider'
];

const LOW_PRIORITY = [
  'sections/tabs',
  'sections/extra',
  'sections/FinalCTA'
];

export default function ClientLogic() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Immediate load for high priority components
    const highPriorityLoad = Promise.all(
      HIGH_PRIORITY.map(comp => preloadComponent(comp))
    );

    // Medium priority loads after high priority completes
    const mediumPriorityLoad = highPriorityLoad
      .then(() => new Promise(resolve => setTimeout(resolve, 500)))
      .then(() => Promise.all(MEDIUM_PRIORITY.map(comp => preloadComponent(comp))));

    // Low priority loads after medium priority completes
    mediumPriorityLoad
      .then(() => new Promise(resolve => setTimeout(resolve, 500)))
      .then(() => Promise.all(LOW_PRIORITY.map(comp => preloadComponent(comp))))
      .catch(console.error);

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return null; // This component has no UI
}