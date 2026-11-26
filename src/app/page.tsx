import { pageMetadata } from '@/lib/seo';
import HeroSection from '@/components/sections/HeroSection';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TestimonialSlider from '@/components/TestimonialSlider';
import Tabs from '@/components/sections/tabs';
import FinalCTA from '@/components/sections/FinalCTA';
import { HomepageFAQ } from '@/components/faq';
export const metadata = pageMetadata('Web & Software Development Company in Lahore', 'Sage Devs builds custom web applications, SaaS products, online stores and AI automation. A Lahore-based software team working with clients worldwide.', '/');
export default function Home() {
 return <div className="original-home"><HeroSection/><Services/><CaseStudies/><WhyChooseUs/><TestimonialSlider/><Tabs/><HomepageFAQ/><FinalCTA/></div>;
}
