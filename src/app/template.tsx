import SiteMotion from '@/components/site/SiteMotion';
// App Router owns navigation, focus and scroll restoration. No navigation interception.
export default function Template({ children }: { children: React.ReactNode }) {
  return <SiteMotion>{children}</SiteMotion>;
}
