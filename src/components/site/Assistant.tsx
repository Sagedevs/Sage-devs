'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false, loading: () => <div className="assistant-launch" role="status">Opening assistant…</div> });
export default function Assistant() {
  const [loaded, setLoaded] = useState(false);
  return loaded ? <div className="assistant-surface"><ChatWidget /></div> : <button className="assistant-launch" onClick={() => setLoaded(true)} aria-label="Open Sage assistant">Let’s chat <span aria-hidden="true">＋</span></button>;
}
