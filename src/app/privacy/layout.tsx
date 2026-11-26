import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Privacy Policy', 'Read how Sage Devs describes its handling of personal information and privacy.', '/privacy');
export default function Layout({children}:{children:React.ReactNode}){return <div className="legacy-page">{children}</div>;}
