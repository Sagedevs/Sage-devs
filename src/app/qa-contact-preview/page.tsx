'use client';
// Temporary local verification harness. Removed before build/commit.
import { useEffect, useState } from 'react';
import ContactForm from '@/components/site/ContactForm';
export default function Preview() {
  const [ready,setReady] = useState(false);
  useEffect(() => {
    const original = window.fetch;
    window.fetch = async (input, init) => String(input).startsWith('https://formspree.io/') ? new Response(JSON.stringify({ok:true}),{status:200,headers:{'Content-Type':'application/json'}}) : original(input,init);
    setReady(true);
    return () => { window.fetch = original; };
  }, []);
  return <section className="shell section"><h1>Local form verification</h1><p>Submissions on this temporary page are simulated locally.</p>{ready&&<div className="contact-form-surface" style={{maxWidth:650,margin:'40px auto'}}><ContactForm/></div>}</section>;
}
