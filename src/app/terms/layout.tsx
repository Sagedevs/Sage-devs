import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Terms of Service', 'Read the terms of service for working with Sage Devs.', '/terms');
export default function Layout({children}:{children:React.ReactNode}){return <div className="legacy-page">{children}</div>;}
