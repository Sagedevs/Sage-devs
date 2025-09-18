'use client';

import CaseStudyHero from '@/components/casestudy/hero';
import CaseStudyGrid from '@/components/casestudy/casestudy';
import EcommerceGrowth from '@/components/casestudy/ecommercegrowth';
import CaseStudyCTA from '@/components/casestudy/cta';

export default function CaseStudiesPage() {
  return (
    <div>
      <CaseStudyHero />
      <CaseStudyGrid />
      <EcommerceGrowth />
      <CaseStudyCTA />
    </div>
  );
}