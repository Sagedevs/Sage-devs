import Image from 'next/image';
import Link from 'next/link';
import { brand } from '@/lib/brand';
export default function Brand({ surface = 'dark' }: { surface?: 'dark' | 'light' }) { return <Link className={`brand${surface === 'light' ? ' brand-on-light' : ''}`} href="/" aria-label="Sage Devs home"><Image className="official-wordmark" src={brand.logo} width={900} height={257} alt="Sage Devs" /></Link>; }
