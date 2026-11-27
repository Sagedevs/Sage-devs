import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Terms of Service', 'Review the Sage Devs terms of service, including project agreements, responsibilities, delivery expectations and the conditions of working together.', '/terms');
export default function Layout({children}:{children:React.ReactNode}){return <div className="legacy-page">{children}</div>;}
