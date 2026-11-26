// App Router owns navigation and scrolling; this entrance never delays routing.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="route-transition">{children}</div>;
}
