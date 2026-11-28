import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Privacy Policy', 'Read how Sage Devs handles information submitted through this website, including project enquiries, contact details, data use and your privacy choices.', '/privacy');
export default function Layout({children}:{children:React.ReactNode}){return <div className="legacy-page">{children}</div>;}
