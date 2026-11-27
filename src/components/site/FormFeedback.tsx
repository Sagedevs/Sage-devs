import Link from 'next/link';
import { ArrowUpRight, Check, Mail } from 'lucide-react';
import { business } from '@/lib/business';

export default function FormFeedback({ onReset }: { onReset: () => void }) {
  return <div className="contact-confirmation">
    <span className="confirmation-mark" aria-hidden="true"><Check size={28} strokeWidth={1.5}/></span>
    <p className="section-label">MESSAGE RECEIVED</p>
    <h2>You’re in good hands.</h2>
    <p>Your message is with the Sage Devs team. We’ll review your project and reply to the email you provided.</p>
    <div className="confirmation-next"><Mail size={20} strokeWidth={1.5}/><div><strong>What happens next</strong><p>We’ll talk through your goals, clarify the scope, and help you choose a practical next step.</p></div></div>
    <div className="confirmation-actions"><a className="button button-glass" href={business.bookingUrl} target="_blank" rel="noopener noreferrer">Book a conversation <ArrowUpRight size={16}/></a><button type="button" className="text-link" onClick={onReset}>Send another message</button></div>
    <p className="confirmation-note">In the meantime, <Link className="text-link" href="/projects">explore our work</Link>.</p>
  </div>;
}
