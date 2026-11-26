import { siteUrl } from '@/lib/seo';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}/>;
}
export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  return <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{name:'Home',path:'/'},...items].map((item,index)=>({'@type':'ListItem',position:index+1,name:item.name,item:`${siteUrl}${item.path}`})) }}/>;
}
