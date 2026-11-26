"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Play, X, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
// Keep the original testimonials and videos; curate the homepage presentation.
function videoId(url:string){try{const u=new URL(url);return u.hostname==='youtu.be'?u.pathname.slice(1):u.searchParams.get('v')||u.pathname.split('/').pop();}catch{return null;}}
function VideoDialog({id,onClose}:{id:string;onClose:()=>void}){
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const dialog=ref.current;const previous=document.activeElement as HTMLElement;const overflow=document.body.style.overflow;dialog?.showModal();document.body.style.overflow='hidden';return()=>{dialog?.close();document.body.style.overflow=overflow;requestAnimationFrame(()=>previous?.focus({preventScroll:true}));};},[]);
 return <dialog ref={ref} className="video-dialog" aria-label="Client video testimonial" onCancel={onClose} onClick={event=>{if(event.target===event.currentTarget)onClose();}}><div><button className="round-control" aria-label="Close video" onClick={onClose}><X size={20}/></button><iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} title="Sage Devs client testimonial" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div></dialog>;
}
function VideoPreview({id,author,onPlay}:{id:string;author:string;onPlay:()=>void}){
 const [imageFailed,setImageFailed]=useState(false);
 return <button className="client-video detail-reveal" onClick={onPlay} aria-label={`Watch ${author}’s video testimonial`}>
   {!imageFailed&&<Image src={`/testimonials/${id}.webp`} alt={`${author}’s video testimonial thumbnail`} width={480} height={360} unoptimized onError={()=>setImageFailed(true)}/>}
   <span className="video-shade"/><span className="video-play"><Play size={21} fill="currentColor"/></span><span className="video-caption"><small>A CLIENT CONVERSATION</small><strong>Hear it from {author}.</strong><span>Watch testimonial <Play size={11}/></span></span>
 </button>;
}
export default function TestimonialsSection(){
 const [active,setActive]=useState(1);
 const [popup,setPopup]=useState<string|null>(null);
 const touchStart=useRef<{x:number;y:number}|null>(null);
 const selected=testimonials[active];
 const video=selected.video?videoId(selected.video):null;
 const move=(direction:number)=>setActive(index=>(index+direction+testimonials.length)%testimonials.length);
 return <section id="client-stories" className="premium-section client-stories"><div className="premium-shell">
   <div className="section-topline"><p className="section-label">CLIENT PERSPECTIVES</p><div className="review-provenance"><Image src="/brand/providers/google.png" alt="Google" width={22} height={22}/><span>Client reviews</span></div></div>
   <div className="section-heading-row"><h2>Good work.<br/><em>In their words.</em></h2><p>Different projects. Lasting partnerships.<br/>Hear from the people we’ve worked with.</p></div>
   <div className={`testimonial-layout testimonial-feature glass-panel${video?' has-video':' text-only'}`} role="region" aria-roledescription="carousel" aria-label="Client testimonials" tabIndex={0}
     onKeyDown={event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowLeft'?-1:1);}}}
     onTouchStart={event=>{const t=event.touches[0];touchStart.current={x:t.clientX,y:t.clientY};}}
     onTouchEnd={event=>{const start=touchStart.current;touchStart.current=null;if(!start)return;const end=event.changedTouches[0];if(Math.abs(end.clientX-start.x)>60&&Math.abs(end.clientY-start.y)<40)move(end.clientX<start.x?1:-1);}}>
     <div className="testimonial-quote">
       <div className="testimonial-rating"><span className="quote-mark" aria-hidden="true">“</span><span className="review-stars" aria-label={`${selected.stars} out of 5 stars`}>{Array.from({length:5},(_,index)=><Star key={index} size={14} fill={index<selected.stars?'currentColor':'none'} aria-hidden="true"/>)}</span></div>
       <div className="quote-content" aria-live="polite" aria-atomic="true"><blockquote key={selected.author} className="detail-reveal">{selected.text}</blockquote><div className="quote-author"><span className="author-monogram" aria-hidden="true">{selected.author.split(' ').map(part=>part[0]).slice(0,2).join('')}</span><strong>{selected.author}</strong></div></div>
       <div className="quote-navigation"><span aria-live="polite">{String(active+1).padStart(2,'0')}<i>/ {String(testimonials.length).padStart(2,'0')}</i></span><div><button className="round-control" aria-label="Previous testimonial" onClick={()=>move(-1)}><ArrowLeft size={18}/></button><button className="round-control" aria-label="Next testimonial" onClick={()=>move(1)}><ArrowRight size={18}/></button></div></div>
     </div>
     {video&&<VideoPreview key={video} id={video} author={selected.author} onPlay={()=>setPopup(video)}/>}
   </div>
 </div>{popup&&<VideoDialog id={popup} onClose={()=>setPopup(null)}/>}</section>;
}
