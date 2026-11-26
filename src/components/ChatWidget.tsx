'use client';
import { business } from '@/lib/business';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUp, ArrowUpRight, CalendarDays, CheckCircle2, FileText, Mail, MessageCircle, Minus, X } from 'lucide-react';
import { brand } from '@/lib/brand';

type Message = { text: string; sender: 'user' | 'assistant'; error?: boolean };

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [lead, setLead] = useState(false);
  const [busy, setBusy] = useState(false);
  const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const leadName = useRef<HTMLInputElement>(null);
  const launch = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pending = useRef(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const modal = dialog.current;
    modal?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      modal?.close();
      document.body.style.overflow = overflow;
      if (previous?.isConnected) previous.focus({ preventScroll: true });
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    if (lead) leadName.current?.focus();
    else inputRef.current?.focus({ preventScroll: true });
  }, [lead, open]);
  useEffect(() => {
    if (scrollRef.current && !lead) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, busy, open, lead]);

  function close() {
    setOpen(false);
    requestAnimationFrame(() => launch.current?.focus({ preventScroll: true }));
  }
  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current || !input.trim()) return;
    const message = input.trim();
    const history = messages.filter(item => !item.error).slice(-8).map(item => ({ role: item.sender === 'user' ? 'user' : 'assistant', content: item.text.slice(0, 2000) }));
    pending.current = true; setBusy(true); setInput('');
    setMessages(previous => [...previous, { sender: 'user', text: message }]);
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message, history }), signal: AbortSignal.timeout(20000) });
      const data = await response.json();
      const text = typeof data.reply === 'string' ? data.reply : typeof data.error === 'string' ? data.error : 'The assistant is unavailable. Please try again or contact our team.';
      setMessages(previous => [...previous, { sender: 'assistant', text, error: !response.ok }]);
    } catch {
      setMessages(previous => [...previous, { sender: 'assistant', text: 'I couldn’t connect just now. Try your message again, or email info@sagedevs.tech.', error: true }]);
    } finally { pending.current = false; setBusy(false); }
  }
  async function sendLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true; setLeadStatus('sending');
    const form = event.currentTarget;
    try {
      const response = await fetch('https://formspree.io/f/xldpndqz', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(20000) });
      if (!response.ok) throw new Error('Request failed');
      form.reset(); setLeadStatus('sent');
    } catch { setLeadStatus('error'); }
    finally { pending.current = false; }
  }

  if (!open) return <button ref={launch} className="assistant-launch" onClick={() => setOpen(true)} aria-label="Open Sage assistant"><MessageCircle size={17} strokeWidth={1.5}/>Let’s chat <span aria-hidden="true">＋</span></button>;
  return <dialog className="sage-chat" ref={dialog} aria-labelledby="sage-chat-title" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close(); } }}>
    <header className="chat-header"><span className="chat-brand-icon"><Image src={brand.emblem} alt="" width={26} height={32}/></span><div><h2 id="sage-chat-title">Sage</h2><span>Studio assistant</span></div><button type="button" aria-label="Minimize assistant" onClick={close}><Minus size={18}/></button><button type="button" aria-label="Close assistant" onClick={close}><X size={18}/></button></header>
    <div className="chat-scroll" ref={scrollRef}>
      {lead ? <div className="chat-lead-view"><button className="chat-back" onClick={() => setLead(false)} disabled={leadStatus === 'sending'}><ArrowLeft size={14}/>Back to conversation</button>{leadStatus === 'sent' ? <div className="chat-lead-success" role="status"><CheckCircle2 size={34} strokeWidth={1.2}/><h3>You’re on our radar.</h3><p>Your quote request has been sent to the team. We’ll use your email to follow up.</p><button className="chat-secondary" onClick={() => { setLead(false); setLeadStatus('idle'); }}>Back to Sage <ArrowUpRight size={15}/></button></div> : <form className="chat-lead" onSubmit={sendLead}><p className="section-label">A CONVERSATION WITH THE TEAM</p><h3>Let’s talk about<br/>your project.</h3><p>Leave your details and a little context. The team will help you shape the next step.</p><input type="hidden" name="source" value="SageDevs Website Chatbot"/><div className="field"><label htmlFor="chat-name">Your name *</label><input ref={leadName} id="chat-name" name="name" autoComplete="name" required maxLength={100} placeholder="Full name" disabled={leadStatus === 'sending'}/></div><div className="field"><label htmlFor="chat-email">Email address *</label><input id="chat-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" disabled={leadStatus === 'sending'}/></div><div className="field"><label htmlFor="chat-project">What are you thinking? <span>Optional</span></label><textarea id="chat-project" name="message" rows={3} maxLength={3000} placeholder="A website, an app, a question…" disabled={leadStatus === 'sending'}/></div><button className="chat-primary" disabled={leadStatus === 'sending'}>{leadStatus === 'sending' ? 'Sending request…' : 'Request a conversation'}<ArrowUpRight size={16}/></button>{leadStatus === 'error' && <p role="alert" className="chat-error">We couldn’t send your request. Your details are still here. Please retry or email info@sagedevs.tech.</p>}<p className="chat-lead-privacy">We’ll use these details to respond to your inquiry. <Link href="/privacy" onClick={close}>Privacy policy</Link></p></form>}</div> : <>
        {!messages.length && <div className="chat-welcome"><p className="section-label">A GOOD PLACE TO START</p><h3>A little clarity.<br/><span>A next step.</span></h3><p>I’m Sage, the studio’s AI assistant. Tell me what you’re working on, or take a look around.</p><div className="chat-actions"><button onClick={() => setLead(true)}><FileText size={18} strokeWidth={1.3}/><span>Discuss a project<small>Get in touch with the team</small></span><ArrowUpRight size={15}/></button><Link href="/projects" onClick={close}><span className="chat-work-symbol" aria-hidden="true">↗</span><span>Explore our work<small>Real projects, considered details</small></span><ArrowUpRight size={15}/></Link></div><div className="chat-quick-links"><a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"><CalendarDays size={14}/>Book a call</a><a href="mailto:info@sagedevs.tech"><Mail size={14}/>Email the team</a></div></div>}
        <div className="chat-transcript" role="log" aria-label="Conversation with Sage" aria-live="polite" aria-relevant="additions" aria-busy={busy}>{messages.map((message, index) => <div className={`chat-message ${message.sender} ${message.error ? 'chat-message-error' : ''}`} key={index}><span>{message.sender === 'user' ? 'YOU' : 'SAGE'}</span><p>{message.text}</p>{message.error && <button className="chat-retry" onClick={() => { setInput(messages.slice(0, index).reverse().find(item => item.sender === 'user')?.text || ''); inputRef.current?.focus(); }}>Edit and retry <ArrowUpRight size={13}/></button>}</div>)}</div>{busy && <div className="chat-thinking" role="status"><span aria-hidden="true"><i/><i/><i/></span>Sage is thinking</div>}{messages.length > 0 && <div className="chat-conversation-actions"><button onClick={() => setLead(true)} disabled={busy}>Talk with the team <ArrowUpRight size={14}/></button><Link href="/projects" onClick={close}>View work <ArrowUpRight size={14}/></Link></div>}
      </>}
    </div>
    {!lead && <div className="chat-compose"><form onSubmit={send} className="chat-input"><label className="sr-only" htmlFor="chat-message">Message to Sage assistant</label><textarea ref={inputRef} id="chat-message" value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }} maxLength={2000} rows={2} placeholder="Tell me what you have in mind…" aria-describedby="chat-disclosure"/><button disabled={busy || !input.trim() || leadStatus === 'sending'} aria-label="Send message"><ArrowUp size={18}/></button></form><p id="chat-disclosure" className="chat-disclosure">AI guidance. Confirm scope and pricing with our team.</p></div>}
  </dialog>;
}
