import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Insights', 'Articles from Sage Devs on web development, AI, technology and digital products.', '/blog');
export default function Layout({children}:{children:React.ReactNode}){return <div>{children}</div>;}
