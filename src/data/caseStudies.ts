// Preserved from the original case-study component.
export interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
  outcome: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration?: string;
  scope: string;
  imageAlt?: string;
  sourceNote?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "14islands Creative Agency",
    subtitle: "Award-Winning Digital Products & Brand Experiences",
    category: "Creative Technology Agency",
    image: "/proj/14island.webp",
    link: "https://14islands.com",
    outcome: "300% increase in qualified client inquiries",
    challenge: "Creating a sophisticated portfolio platform showcasing work with high-profile clients including Cartier, Google, United Nations, and Web3/AI companies while reflecting their culture of craft, collaboration, and creativity across diverse industries.",
    solution: "Developed a minimalist yet impactful portfolio featuring clean typography-focused design, strategic client showcase organized by industry verticals (Luxury, Web3, Sustainability, AR/VR, AI, Gaming), dedicated culture section, and comprehensive services architecture with 'vision to launch' methodology.",
    results: [
      "Tripled qualified client inquiries from ~30 to ~120 monthly within first quarter",
      "Session duration jumped from 2:34 to 4:43 minutes (85% improvement)",
      "Featured as Site of the Day on Awwwards and won CSS Design Awards",
      "Enterprise client conversions increased 45% with Fortune 500 acquisitions including Google partnership",
      "Generated $8.4M in new business pipeline attributed to website in first year",
      "Achieved 92% user satisfaction score and 73% of visitors explored 3+ case studies",
      "Reduced recruitment costs by 56% while receiving 420% more designer applications",
      "Successfully positioned as leading Nordic creative technology agency across 14 industry verticals"
    ],
    technologies: ["React/Next.js", "Framer Motion", "Advanced CSS", "Headless CMS", "Progressive Web App", "Server-side Rendering"],
    duration: "8-10 weeks",
    scope: "Full agency website redesign with portfolio system"
  },
  {
    id: 2,
    title: "Abhishek Jha Portfolio",
    subtitle: "Award-Winning Freelance Designer & Developer",
    category: "Personal Portfolio",
    image: "/proj/abhishek.webp",
    link: "https://abhishekjha.me",
    outcome: "420% increase in project inquiries",
    challenge: "Standing out in saturated freelance design market while communicating complex design philosophy ('Functionality is foundation, but art makes design stand out'), balancing artistic expression with professional credibility, and demonstrating personality in increasingly standardized landscape.",
    solution: "Crafted distinctive portfolio with bold artistic landing page, custom typography and unique visual language, thoughtful micro-interactions, case studies as storytelling narratives, integrated design process documentation, and philosophy-driven content emphasizing craft and personality.",
    results: [
      "Project inquiries skyrocketed 420% within first 3 months of launch",
      "Secured 23 high-value clients in year one, generating $180K in project revenue directly from portfolio",
      "Featured in top design communities: Dribbble, Behance, and Awwwards showcases",
      "Average project value surged by 65%, now commanding premium rates for design work",
      "Prospective clients gave 94% positive feedback, specifically mentioning portfolio's unique artistic approach",
      "Built following of 8,500+ design community members drawn to philosophical design approach"
    ],
    technologies: ["React", "GSAP Animation", "Custom CSS", "Intersection Observer API", "Progressive Enhancement"],
    duration: "4-5 weeks",
    scope: "Complete personal brand development and portfolio"
  },
  {
    id: 3,
    title: "KLMNKO Digital Agency",
    subtitle: "High-End Web Design & Digital Marketing Platform",
    category: "German Digital Agency",
    image: "/proj/klmnko.webp",
    link: "https://klmnko.de",
    outcome: "340% increase in qualified German-speaking inquiries",
    challenge: "Communicating complex integrated services (web design, brand strategy, e-commerce, SEO, performance marketing) clearly in German market, demonstrating 'synergetisches Marketing' approach combining organic and paid strategies, and establishing premium positioning while maintaining transparency.",
    solution: "Developed comprehensive platform with clear service architecture, educational content on synergetic marketing methodology, transparent fixed pricing model (50% upfront), detailed FAQ, 'Alles aus einer Hand' value proposition, GDPR-compliant tracking, and maintenance program presentation.",
    results: [
      "Qualified German-speaking inquiries increased 340% in first 6 months",
      "Built €420,000 new business pipeline with focus on premium projects",
      "78% of website visitors actively engaged with service explanation content and educational materials",
      "Premium project requests (€15K+ budgets) grew by 45% as positioning attracted quality-focused clients",
      "Maintained exceptional 4.8/5 client satisfaction rating across all service lines",
      "Achieved 89% client retention rate through comprehensive maintenance packages",
      "Established as top Trier-region digital agency with 'synergetisches Marketing' becoming key differentiator",
      "Average client lifetime value increased significantly through integrated service approach"
    ],
    technologies: ["German-optimized CMS", "GDPR Analytics", "Advanced Forms", "German Typography", "Performance Optimization"],
    duration: "6-7 weeks",
    scope: "Complete agency website with German market optimization"
  },
  {
    id: 4,
    title: "Alaro Craft Brewery",
    subtitle: "Sacramento's Most Awarded Brewery & Restaurant",
    category: "Hospitality & Food Service",
    image: "/proj/alaro.webp",
    link: "https://alarobrewing.com",
    outcome: "285% increase in online reservations",
    challenge: "Communicating triple identity (brewery, restaurant, cocktail bar), showcasing 90+ beer awards including GABF Gold Medal, presenting complex Spanish-inspired farm-to-fork menu, highlighting local partnerships, capturing Midtown Sacramento energy, and driving reservations near Golden 1 Center and convention venues.",
    solution: "Created comprehensive platform with prominent award showcase, three distinct sections (brewery/restaurant/cocktails), detailed Spanish tapas menu, brewery story emphasizing 30+ years experience, local partnerships (Admiral Maltings, UC Sustainable Agriculture), wine program education, event calendar with Sunday Brunch and Industry Mondays.",
    results: [
      "Online reservations surged 285% with seamless booking experience",
      "Sunday Brunch program exploded with 450% growth, becoming signature weekly event",
      "Private and corporate event inquiries jumped 340% from convention center proximity",
      "Achieved stellar 4.8/5 Google rating with 1,200+ reviews praising food, beer, and atmosphere",
      "Pre-show dining bookings near Golden 1 Center and venues increased 67%",
      "Generated $380,000 in additional annual revenue directly attributed to website conversions",
      "Industry Monday program grew from concept to 150+ regular hospitality professionals",
      "Castillo IPA (GABF Gold Medal winner) sales increased 42% after prominent website feature",
      "Spanish wine education section drove 56% increase in wine program sales",
      "Positioned as Sacramento's most awarded brewery and premier farm-to-fork destination"
    ],
    technologies: ["WordPress", "OpenTable/Resy Integration", "Image Optimization", "Google Maps Integration", "Email Marketing", "Menu Management"],
    duration: "7-8 weeks",
    scope: "Full hospitality website with reservation system"
  },
  {
    id: 5,
    title: "Roberto Coin Jewelry",
    subtitle: "Luxury Italian Fine Jewelry E-commerce",
    category: "Luxury E-commerce",
    image: "/proj/robertocoin.webp",
    link: "https://robertocoin.com",
    outcome: "420% increase in online jewelry sales",
    challenge: "Creating luxury e-commerce matching high-end boutiques, showcasing intricate jewelry details, presenting multiple collections (Art Deco, Venetian Princess, Navarra, Jasmine), integrating celebrity endorsements (Dakota Johnson, Kate Hudson, Jenna Ortega), communicating 'Art of Dreaming' philosophy, and maintaining exclusivity while enabling online purchasing.",
    solution: "Developed elegant platform with Dakota Johnson campaign prominently featured, collection spotlights, high-resolution photography with zoom and 360-degree views, celebrity spotlight sections, Stories blog covering craftsmanship, 'Explorer of Beauty' brand narrative, concierge service, 'Send a Hint' functionality, and store locator.",
    results: [
      "Online jewelry sales exploded by 420% in first year of new platform",
      "Generated €4.2M in e-commerce revenue, transforming digital channel into major revenue driver",
      "Customer satisfaction reached 89% with online experience matching in-boutique luxury",
      "Newsletter subscriber base grew to 2,800+ monthly new arrivals, creating engaged community",
      "Average order value jumped to €3,100 (€2,400 increase) through enhanced product presentation",
      "Cart abandonment reduced by 67% through streamlined luxury checkout experience",
      "Celebrity collaboration pieces (Dakota Johnson, Jenna Ortega) sold out 3x faster than previous launches",
      "'Send a Hint' feature generated significant engagement, becoming popular for special occasions",
      "Featured in Vogue and Harper's Bazaar for digital luxury innovation",
      "Concierge service converted 45% of inquiries into high-value consultations",
      "Successfully maintained luxury positioning in digital space where many high-end jewelers struggle"
    ],
    technologies: ["Shopify Plus/Custom", "High-res Image Rendering", "Multi-currency Support", "Headless CMS", "CRM Integration", "Email Automation"],
    duration: "12-14 weeks",
    scope: "Complete luxury e-commerce with global capabilities"
  },
  {
    id: 6,
    title: "Reech Agency",
    subtitle: "ROI-Focused Full-Service Marketing Agency",
    category: "Marketing Agency",
    image: "/proj/reech.webp",
    link: "https://reech.agency",
    outcome: "380% increase in qualified agency inquiries",
    challenge: "Proving marketing ROI with credible metrics, showcasing diverse client work (Canon 20% organic growth, Visit Shropshire +58% form submissions, Midland Computers +10% clicks), communicating '360 method' combining creativity and performance, and differentiating in crowded full-service market.",
    solution: "Created results-focused platform with prominent case studies showing measurable outcomes, '360 Method' explanation connecting strategy/creativity/performance, 'Trusted by clients' social proof, service architecture for scaling businesses, ROI tools, clear retainer pathways, and transparent methodology.",
    results: [
      "Qualified agency inquiries increased 380% with better-fit prospects",
      "Built £2.4M new business pipeline within first year, significantly ahead of projections",
      "73% of prospects engaged deeply with case studies before reaching out, arriving pre-qualified",
      "Average client lifetime value reached £145,000 (89% increase) through emphasis on long-term partnerships",
      "Maintained exceptional 4.9/5 client satisfaction rating across marketing services",
      "85% case study completion rate showed prospects valued concrete results over creative-only portfolios",
      "Successfully attracted 12 enterprise clients in technology and tourism sectors",
      "67% of new clients specifically referenced data-driven case studies in discovery calls"
    ],
    technologies: ["Modern CMS", "Data Visualization", "Lead Qualification Forms", "Analytics Integration", "Client Portal", "CRM Integration"],
    duration: "6-8 weeks",
    scope: "Agency website with case study showcase system"
  },
  {
    id: 8,
    title: "KhanJee Canada",
    subtitle: "Authentic Pakistani Cuisine & Catering in Montreal",
    category: "Restaurant & Food Service",
    image: "/proj/khanjee.webp",
    link: "https://khanjeecanada.com",
    outcome: "250% increase in online reservations",
    challenge: "Creating appetizing digital experience reflecting authentic Pakistani culture, showcasing extensive menu (40+ dishes: Karahis, charcoal BBQ, Halal Chinese), building reservation system, promoting franchise opportunities (Montreal, Laval, Brossard, Ottawa, Toronto, Mississauga), integrating 40K+ Instagram followers, highlighting Ramadan Iftar Buffet and weekly specials.",
    solution: "Developed vibrant platform with high-quality food photography, comprehensive menu organization (BBQ, Breakfast, Traditional, Karahi, Halal Chinese), reservation system, franchise section, Instagram feed integration, special events promotion (Ramadan Buffet: Weekdays $24.99, Weekends $29.99), weekly specials (Monday/Wednesday Biryani $9.99), testimonials, and cultural storytelling about Hunza inspiration.",
    results: [
      "Online reservations increased 250% with seamless booking experience for authentic Pakistani dining",
      "Catering inquiries and bookings grew 300% as corporate and event clients discovered offerings",
      "Successfully integrated 40,000+ Instagram followers, creating vibrant social proof and community",
      "Ramadan Iftar Buffet achieved 180+ daily reservations throughout Ramadan 2025",
      "Received 12 serious franchise inquiries within 4 months for expansion across Canada",
      "Generated $340,000 in additional annual revenue directly from website conversions",
      "Maintained strong 4.7/5 Google rating with 340+ reviews praising authenticity and flavors",
      "Weekly specials (Monday Chicken Biryani, Wednesday Veal Biryani at $9.99) drove 67% increase in weekday traffic",
      "BOGO promotion generated 2,100+ takeout orders, building loyal customer base",
      "Secured major catering contracts including Académie Nour sponsorship and 3 corporate clients",
      "Positioned for successful franchise expansion into Toronto and Mississauga markets",
      "Became community gathering point celebrating Pakistani culture beyond just dining"
    ],
    technologies: ["WordPress", "Custom PHP", "MySQL", "Instagram API", "Reservation System", "Google Maps", "Email Marketing"],
    duration: "5-6 weeks",
    scope: "Restaurant website with social integration"
  },
  {
    id: 9,
    title: "Kelvin Melgar Photography",
    subtitle: "Professional Photography in Boulder, Colorado",
    category: "Photography Services",
    image: "/proj/kelvin.webp",
    link: "https://kelvinmelgar.com",
    outcome: "380% increase in photography inquiries",
    challenge: "Differentiating in saturated Boulder market, showcasing diverse services (quinceañeras, weddings, senior portraits, business portraits, corporate, product photography) without diluting brand, communicating 'every photograph tells a story' philosophy, creating emotional connection before contact, and balancing artistic expression with commercial appeal.",
    solution: "Crafted emotionally-driven portfolio with 'Art of Timeless Photography' positioning, service-specific sections emphasizing cultural celebration (quinceañeras), authentic love stories (weddings), milestone portraits (seniors), professional confidence (business), leadership storytelling (corporate), and unique 'Let's Connect' approach inviting personal conversation about pets, coffee spots, travel, movies instead of forms.",
    results: [
      "Photography inquiries increased 380% as emotional storytelling resonated with quality-seeking clients",
      "Generated $280,000 in bookings within first year across all service categories",
      "Wedding packages averaged $4,200, commanding 85% premium above Colorado market average",
      "Achieved remarkable 94% conversion rate from consultation to booking through genuine connection approach",
      "Secured 23 quinceañera bookings in first 8 months, successfully penetrating Hispanic community market",
      "Landed 12 corporate photography contracts with Boulder tech companies",
      "Maintained exceptional 4.9/5 average client rating across all photography services",
      "Featured in Colorado bride and family magazines for distinctive storytelling approach",
      "'Let's Connect' personal approach generated 67% more meaningful conversations than traditional forms",
      "76% of website visitors spent 3+ minutes exploring portfolio, indicating deep engagement",
      "Senior portrait bookings surged 340% during graduation season through cinematic milestone approach",
      "Clients consistently mentioned feeling 'known and understood' before first meeting, leading to more relaxed sessions"
    ],
    technologies: ["WordPress", "High-resolution Image Optimization", "Lightbox Gallery", "Mobile-responsive Viewing", "SEO Optimization", "Client Gallery System"],
    duration: "4-5 weeks",
    scope: "Professional photography portfolio with client experience focus"
  },
  {
    id: 10,
    title: "Good Looking Design",
    subtitle: "UK-Based Creative Design Studio",
    category: "Design Agency",
    image: "/proj/goodlooking.webp",
    link: "https://goodlookingdesign.co.uk",
    outcome: "Enhanced brand visibility and client acquisition",
    challenge: "Establishing strong presence in competitive UK design market, showcasing creative excellence across multiple design disciplines, communicating unique design approach, attracting premium clients seeking quality over cost, and building reputation as go-to studio for brands prioritizing aesthetics and functionality.",
    solution: "Developed sophisticated design-forward website emphasizing visual impact, curated portfolio showcasing best-in-class work across branding, digital, and print, clear design process explanation, client success stories from UK and international brands, services breakdown (brand identity, digital design, creative direction), and emphasis on 'good looking' as both aesthetic quality and strategic advantage.",
    results: [
      "Significantly enhanced brand visibility across competitive UK design market",
      "Premium client inquiries increased substantially as quality-focused positioning attracted right-fit prospects",
      "Portfolio featured in leading UK and international design publications",
      "Successfully expanded client base across UK and Europe through strong digital presence",
      "Average project values increased as studio commanded premium rates for design excellence",
      "Established reputation as quality-focused design partner for brands prioritizing aesthetics and strategy",
      "'Good looking' positioning resonated as both aesthetic quality and competitive business advantage"
    ],
    technologies: ["Modern JavaScript Framework", "Advanced CSS Grid", "Animation Libraries", "CMS Integration", "Performance Optimization", "Responsive Design"],
    duration: "6-8 weeks",
    scope: "Creative agency website with portfolio showcase"
  }
];


// Client additions: descriptions and technologies checked against public sites on 2026-11-25.
caseStudies.push(
  {
    id: 11, title: 'Lingua Nova Institute',
    subtitle: 'Online language learning, with a clear path from discovery to enrollment.',
    category: 'Education & language learning', image: '/proj/lingua-nova-cover.webp',
    imageAlt: 'Lingua Nova Institute project cover with language-learning photography',
    link: 'https://linguanovainstitute.com/', outcome: '', results: [],
    challenge: 'Help prospective students explore English, German, Japanese and Chinese programs and understand the available course levels before getting in touch.',
    solution: 'The website brings program information, instructor introductions, student stories and pricing together, with direct enrollment and WhatsApp contact options. A blog adds language-learning resources alongside the course directory.',
    technologies: ['WordPress', 'Elementor'],
    scope: 'Language institute website · Program discovery · Enrollment inquiries',
    sourceNote: 'The editorial project cover uses photography from the live institute website. Platform details were confirmed in its public page source.'
  },
  {
    id: 12, title: 'Elite Creations PK',
    subtitle: 'A personalized gifting storefront for pieces made to be remembered.',
    category: 'E-commerce & personalized gifts', image: '/proj/elite-creations-cover.webp',
    imageAlt: 'Elite Creations PK project cover featuring personalized photo frames',
    link: 'https://elitecreationspk.com/', outcome: '', results: [],
    challenge: 'Make a broad collection of personalized gifts easy to browse, from mugs and keychains to photo frames, apparel and wedding keepsakes.',
    solution: 'The storefront groups products into clear categories, presents product options and PKR pricing, and connects shoppers to product pages, the cart and contact information. Collection imagery gives each category a distinct visual presence.',
    technologies: ['WordPress', 'WooCommerce', 'Elementor'],
    scope: 'Online storefront · Product categories · Product options & cart',
    sourceNote: 'The editorial project cover uses product photography from the live store. WordPress, WooCommerce and Elementor were confirmed in its public page source.'
  }
);

export const featuredCaseIds = [8, 1, 9] as const;
export function caseStudySlug(study: CaseStudy): string {
  return study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
