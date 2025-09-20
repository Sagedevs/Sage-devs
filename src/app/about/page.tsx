import React from 'react';
import HeroSection from '@/components/aboutus/HeroSection';
import OurStory from '@/components/aboutus/OurStory';
import OurProcess from '@/components/aboutus/OurProcess';
import Team from '@/components/aboutus/Team';
import Technologies from '@/components/aboutus/Technologies';
import Culture from '@/components/aboutus/Culture';
import Careers from '@/components/aboutus/Careers';
import CTASection from '@/components/aboutus/CTASection';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <OurStory />
      <OurProcess />
      <Team />
      <Technologies />
      <Culture />
      <Careers />
      <CTASection />
    </main>
  );
}
      