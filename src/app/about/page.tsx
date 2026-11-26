import { BreadcrumbSchema, JsonLd } from '@/components/seo/StructuredData';
import BusinessHours from '@/components/site/BusinessHours';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { ContactCTA, Process } from '@/components/site/Editorial';
import { team } from '@/data/team';
import { founderPortrait } from '@/lib/founder';
export const metadata = pageMetadata('About the Team', 'Meet Sage Devs, a software development and design team based in Lahore, Pakistan, working with businesses worldwide.', '/about');
export default function AboutPage() { return <><section className="route-opening about-opening"><div className="shell"><div className="about-opening-top"><p className="section-label">SAGE DEVS / THE STUDIO</p><p>Lahore, Pakistan<br/><span>Collaborating worldwide</span></p></div><div className="about-opening-grid"><div><h1>Good people.<br/><span>Serious craft.</span></h1><p className="opening-description">Designers, developers, and problem solvers who care about the details. We bring different perspectives to one shared ambition: work we can stand behind.</p><a className="quiet-link" href="#team">Meet the people behind it <ArrowDown size={16}/></a></div><div className="team-contact-sheet">{team.slice(0,3).map(person=><a href="#team" key={person.name}><Image src={person.image} alt={person.name} width={350} height={500} sizes="(max-width:760px) 30vw, 180px"/><span>{person.name}<small>{person.role.split(' (')[0]}</small></span></a>)}</div></div><div className="about-studio-note"><span>EST. 2023</span><p>Independent thinking. Shared ownership. Care in the work.</p></div></div></section><section id="our-story" className="shell section founder-story" aria-labelledby="founder-story-title">
  <div id="founder" className="founder-story-grid">
    <figure className="founder-portrait">
      <Image
        src={founderPortrait.src}
        alt="Abdul Ahad, founder and CEO of Sage Devs, seated outdoors"
        width={founderPortrait.width}
        height={founderPortrait.height}
        sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1100px) 42vw, 490px"
        placeholder="blur"
        blurDataURL={founderPortrait.blurDataURL}
        loading="lazy"
        className="founder-portrait-image"
      />
      <figcaption><span>Abdul Ahad</span><span>Founder &amp; CEO</span></figcaption>
    </figure>
    <div className="founder-story-copy">
      <p className="section-label">OUR STORY</p>
      <h2 id="founder-story-title">From websites<br/>to what’s next.</h2>
      <p>Sage Devs began in 2023 with WordPress development and a belief that strong engineering and thoughtful design belong together. Our work has grown to include web applications, digital products and AI solutions.</p>
      <p>Based in Lahore, Pakistan, we work with businesses worldwide. We bring a practical approach: understand the problem, choose the right tools, and make every decision count.</p>
      <BusinessHours/><a className="text-link" href="mailto:abdul.ahadt732@gmail.com">Contact our founder</a>
    </div>
  </div>
</section><section id="team" className="shell section" style={{ paddingTop: 0 }}><div className="section-heading"><p className="eyebrow">The people behind the work</p><h2>A shared standard of care.</h2></div><div className="team-grid">{team.map(person => <article className="team-member" key={person.name}><Image src={person.image} alt={person.name} width={500} height={500} sizes="(max-width: 760px) 50vw, 33vw" /><h3>{person.name}</h3><p>{person.role}</p></article>)}</div></section><Process /><section id="technologies" className="shell section content-grid" style={{ paddingTop: 0 }}><div><p className="eyebrow">Our toolkit</p><h2>Technology with purpose.</h2></div><div><p>We choose tools around the project: React and Next.js for interfaces, Node.js, PHP and Python for backend systems, WordPress and Shopify for content and commerce, and cloud infrastructure to bring it together.</p><div className="tags">{['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'WordPress', 'Shopify', 'AWS', 'Docker'].map(t => <span key={t}>{t}</span>)}</div></div></section><section id="culture" className="shell section content-grid" style={{ paddingTop: 0 }}><h2>Stay curious.<br />Build together.</h2><div><p>Open communication, continuous learning, and respect for the craft guide how we collaborate.</p><Link href="/careers" className="text-link">Explore careers</Link></div></section><ContactCTA /><JsonLd data={{'@context':'https://schema.org','@type':'Person','@id':'https://sagedevs.tech/about#founder',name:'Abdul Ahad',jobTitle:'Founder & CEO',url:'https://sagedevs.tech/about#founder',image:`https://sagedevs.tech${founderPortrait.src}`,worksFor:{'@id':'https://sagedevs.tech/#organization'}}}/><BreadcrumbSchema items={[{name:'About the team',path:'/about'}]}/></>; }
