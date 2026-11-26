import Image from 'next/image';
const clientLogos = [
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605025/migrated/GSK-Group-Logo_443e8358.png", alt: "GSK Group" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605028/migrated/sara-smith-logo-300x300_7fc99b2b.png", alt: "Sara Smith" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605030/migrated/A1-Taxis-300x274_015aafa2.png", alt: "A1 Taxis" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605033/migrated/supplement-logo_bdaa0098.png", alt: "Supplement" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605036/migrated/justroofinc-logo-removebg-preview-300x193_ec226fbd.png", alt: "JustRoof Inc" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605038/migrated/eb_logo_b5964641.png", alt: "EB Logo" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605040/migrated/logos-300x110_e4c50b2a.png", alt: "Logos" },
  { src: "https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605043/migrated/unnamed-file_900cf23f.png", alt: "Unnamed" },
];


export default function TrustedBySection() {
 return <section className="trust-strip premium-shell" aria-label="Selected client brands"><p>Good company.<br/><strong>Great collaborations.</strong></p><div className="trust-logos">{clientLogos.slice(0, 4).map(logo=><div key={logo.src}><Image src={logo.src} alt={logo.alt} width={120} height={60} sizes="120px" className="client-mark"/></div>)}</div></section>;
}
