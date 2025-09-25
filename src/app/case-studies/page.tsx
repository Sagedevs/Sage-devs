'use client';

import CaseStudyHero from '@/components/casestudy/hero';
import CaseStudyGrid from '@/components/casestudy/casestudy';
import EcommerceGrowth from '@/components/casestudy/ecommercegrowth';
import CaseStudyCTA from '@/components/casestudy/cta';

export default function CaseStudiesPage() {
  return (
    <div>
      <CaseStudyHero />
      <section id="case-studies-grid" className="scroll-mt-20">
        <CaseStudyGrid />
      </section>
      <EcommerceGrowth />
      <CaseStudyCTA />
    </div>
  );
}