import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import CareerApplication from '@/components/Careers';
export default function CareersPage(){return <><CareerApplication/><BreadcrumbSchema items={[{name:'Careers',path:'/careers'}]}/></>;}
