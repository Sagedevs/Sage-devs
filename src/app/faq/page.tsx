import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import FAQ from '@/components/faq';
import { faqCategories } from '@/data/faq';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Frequently Asked Questions', 'Answers about Sage Devs development services, technology, project management, support and collaboration.', '/faq');
export default function FAQPage() {
  return <><FAQ/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqCategories.flatMap(category => category.items.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))) }).replace(/</g, '\\u003c') }}/><BreadcrumbSchema items={[{name:'FAQs',path:'/faq'}]}/></>;
}
