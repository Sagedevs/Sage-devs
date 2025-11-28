"use client";
import React, { useState } from 'react';

type Project = {
  name: string;
  url: string;
  desc: string;
  tech: string[];
  image: string;
};

type Projects = {
  food: Project[];
  home: Project[];
  ecommerce: Project[];
  creative: Project[];
  professional: Project[];
  healthcare: Project[];
  technology: Project[];
  local: Project[];
  education: Project[];
  hospitality: Project[];
};

type CategoryId = keyof Projects;

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('food');

  const categories: { id: CategoryId; name: string }[] = [
    { id: 'food', name: 'Food & Beverage' },
    { id: 'home', name: 'Home & Building Services' },
    { id: 'ecommerce', name: 'E-Commerce & Retail' },
    { id: 'creative', name: 'Creative Services & Design' },
    { id: 'professional', name: 'Professional Services' },
    { id: 'healthcare', name: 'Healthcare & Wellness' },
    { id: 'technology', name: 'Technology & Digital' },
    { id: 'local', name: 'Local Service Businesses' },
    { id: 'education', name: 'Education & Training' },
    { id: 'hospitality', name: 'Hospitality & Entertainment' }
  ];

  const projects = {
    food: [
      { 
        name: 'Khanjee Canada', 
        url: 'khanjeecanada.com', 
        desc: 'Khanjee Canada brings authentic Pakistani cuisine to the heart of Toronto with an elegant dining experience. Our website showcases their extensive menu featuring traditional dishes crafted with generations-old recipes. The platform highlights their catering services for weddings, corporate events, and family gatherings. Online ordering system ensures fresh meals delivered across the GTA with real-time tracking and secure payment processing.', 
        tech: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'MySQL'],
        image: '/proj/khanjee.webp'
      },
      { 
        name: 'The Mehfil', 
        url: 'themehfil.ca', 
        desc: 'The Mehfil represents premium Indian and Pakistani fine dining with a sophisticated event hall perfect for celebrations. Our digital presence captures the luxurious ambiance through high-quality visuals and virtual tours. The website features an interactive event booking system, detailed menu exploration, and gallery of past successful events. Customer testimonials and chef profiles build trust and showcase their culinary expertise in authentic South Asian cuisine.', 
        tech: ['WordPress', 'Elementor', 'JavaScript', 'CSS3'],
        image: '/proj/mehfil.webp'
      },
      { 
        name: 'Chip City Cookies', 
        url: 'chipcitycookies.com', 
        desc: 'Chip City Cookies delivers America\'s favorite gourmet cookies through a modern e-commerce platform. The website features their daily rotating menu of innovative cookie flavors with mouth-watering photography. Integrated inventory management ensures real-time availability updates across multiple locations. Customer loyalty programs and seasonal promotions drive engagement while the seamless checkout process maximizes conversion rates for cookie lovers nationwide.', 
        tech: ['Shopify', 'JavaScript', 'Liquid', 'HTML5'],
        image: '/proj1/Chip-City-Cookies__1_-removebg-preview.webp'
      },
      { 
        name: 'Intense Meals', 
        url: 'intensemeals.com', 
        desc: 'Intense Meals provides performance-focused meal preparation services designed specifically for athletes and fitness enthusiasts. The platform offers customized nutrition plans based on individual fitness goals and dietary requirements. Weekly menu rotations feature macro-balanced meals prepared by professional chefs using premium ingredients. Subscription management allows flexible delivery schedules while the user dashboard tracks nutritional intake and progress toward fitness objectives.', 
        tech: ['WordPress', 'WooCommerce', 'Elementor', 'MySQL'],
        image: '/proj1/Intense-Meals-removebg-preview-1.webp'
      },
      { 
        name: 'Marchand Biere', 
        url: 'marchand-biere.bzh', 
        desc: 'Marchand Biere celebrates the art of craft brewing through their curated beer cave and specialty bottle shop. The website showcases their extensive collection of local and international craft beers with detailed tasting notes and brewery stories. Interactive beer pairing guides help customers discover perfect matches for their meals. Online reservation system for beer tasting events and workshop registrations enhances community engagement around craft beer culture.', 
        tech: ['WordPress', 'Elementor', 'WooCommerce', 'PHP'],
        image: '/proj1/Gemini_Generated_Image_enj6pfenj6pfenj6-removebg-preview.webp'
      },
      { 
        name: 'Alaro Brewing', 
        url: 'alarobrewing.com', 
        desc: 'Alaro Brewing combines craft brewery excellence with full-service restaurant and creative cocktail bar experiences. The digital platform highlights their brewing process, seasonal releases, and chef-curated food pairings. Event calendar manages brewery tours, live music nights, and special tasting events. Online merchandise store features branded apparel and limited edition glassware, while the reservation system streamlines table bookings for dining experiences.', 
        tech: ['WordPress', 'JavaScript', 'CSS3', 'PHP'],
        image: '/proj/alaro.webp'
      }
    ],
    home: [
      { 
        name: 'Benjamin Franklin Plumbing', 
        url: 'benjaminfranklinplumbing.com', 
        desc: 'Benjamin Franklin Plumbing delivers trusted national plumbing services with professional residential and commercial solutions. The website features emergency service request systems with real-time technician dispatch tracking. Comprehensive service catalog covers everything from minor repairs to major installations with transparent pricing. Customer portal manages service history, scheduled maintenance, and warranty information while educational resources help homeowners prevent common plumbing issues.', 
        tech: ['WordPress', 'Elementor', 'JavaScript', 'CSS3'],
        image: '/proj1/benjaminfranklinplumbing-removebg-preview.webp'
      },
      { 
        name: 'Horizon HVAC Inc', 
        url: 'horizonhvacinc.com', 
        desc: 'Horizon HVAC Inc provides professional heating, ventilation, and air conditioning services with focus on energy efficiency and indoor air quality. The platform offers smart home integration compatibility assessments and seasonal maintenance scheduling. Detailed service descriptions help customers understand complex HVAC systems while the cost calculator provides accurate project estimates. Emergency repair services feature same-day response guarantees for urgent climate control needs.', 
        tech: ['WordPress', 'Elementor', 'Contact Form 7'],
        image: '/proj1/horizonhvacinc-removebg-preview.webp'
      },
      { 
        name: 'The Irish Plumber', 
        url: 'theirishplumber.com', 
        desc: 'The Irish Plumber brings reliable local plumbing services with emergency response capabilities and quality repair workmanship. The website emphasizes their community-focused approach with neighborhood service areas clearly mapped. Customer testimonials highlight quick response times and fair pricing structures. Online booking system allows scheduling flexibility while the blog provides DIY maintenance tips and water conservation advice for homeowners.', 
        tech: ['WordPress', 'Elementor', 'Google Maps API'],
        image: '/proj1/theirishplumber-removebg-preview.webp'
      },
      { 
        name: 'Absolute Plumbing', 
        url: 'absoluteplumbing.com', 
        desc: 'Absolute Plumbing delivers comprehensive plumbing solutions from routine maintenance to complex commercial installations. The digital platform features video diagnostics where customers can upload issues for preliminary assessment. Interactive pricing guides help budget planning while the project portfolio showcases completed commercial and residential work. 24/7 customer support chat handles emergency inquiries and schedules immediate service dispatch when required.', 
        tech: ['WordPress', 'JavaScript', 'CSS3', 'PHP'],
        image: '/proj1/Absolute-Plumbing-removebg-preview.webp'
      },
      { 
        name: 'Picton Civil', 
        url: 'pictoncivil.com.au', 
        desc: 'Picton Civil specializes in sophisticated civil construction projects including earthworks, infrastructure development, and land management solutions. The website showcases their heavy equipment fleet and technical capabilities through detailed project case studies. Client portal provides real-time project progress updates and documentation access. Safety compliance information and environmental management policies demonstrate their commitment to sustainable construction practices.', 
        tech: ['WordPress', 'Elementor', 'Project Management'],
        image: '/proj/14island.webp'
      }
    ],
    ecommerce: [
      { 
        name: 'Roberto Coin', 
        url: 'robertocoin.com', 
        desc: 'Roberto Coin presents luxury Italian jewelry collections known for exquisite craftsmanship and timeless elegance. The e-commerce platform features high-resolution product imagery with 360-degree views and zoom capabilities. Virtual try-on technology allows customers to preview jewelry pieces while the gemstone education section provides valuable purchasing guidance. Secure international shipping and lifetime warranty information build consumer confidence in their luxury investment pieces.', 
        tech: ['Shopify', 'JavaScript', 'CSS', 'Liquid'],
        image: '/proj1/Roberto-Coin-removebg-preview.webp'
      },
      { 
        name: 'Stained Concept', 
        url: 'stainedconcept.com', 
        desc: 'Stained Concept embodies urban streetwear culture with bold designs and contemporary fashion apparel for the modern generation. The online store features limited edition drops and collaborative collections with emerging artists. Size guides and fabric technology information help customers make informed purchases while the lookbook provides styling inspiration. Social media integration showcases user-generated content and builds community around the brand identity.', 
        tech: ['Shopify', 'JavaScript', 'HTML5'],
        image: '/proj/14island.webp'
      },
      { 
        name: 'Terzetto Stone', 
        url: 'terzettostone.co.uk', 
        desc: 'Terzetto Stone offers premium natural stone and porcelain tiles for luxury residential and commercial projects across the United Kingdom. The website features extensive product catalogs with high-resolution imagery and detailed technical specifications. Sample ordering system allows designers and homeowners to evaluate materials firsthand while the project visualizer tool helps envision finished spaces. Trade professional program provides exclusive pricing and dedicated support for contractors.', 
        tech: ['WordPress', 'WooCommerce', 'Elementor'],
        image: '/proj1/Terzetto-removebg-preview.webp'
      },
      { 
        name: 'Eli Burch Jewelry', 
        url: 'eliburchjewelry.com', 
        desc: 'Eli Burch Jewelry showcases artisan-crafted jewelry pieces with unique designs and meticulous attention to detail. The online platform tells the story behind each collection and the inspiration driving their creative process. Custom design consultation requests allow personalized jewelry creation while the ring sizing guide ensures perfect fits. Ethical sourcing information and craftsmanship details highlight their commitment to quality and sustainable practices.', 
        tech: ['Shopify', 'JavaScript', 'CSS3'],
        image: '/proj/14island.webp'
      },
      { 
        name: 'Jake Matluck', 
        url: 'jakematluck.com', 
        desc: 'Jake Matluck features curated lifestyle products and trending goods through a seamless e-commerce experience. The website employs sophisticated product recommendation algorithms based on browsing behavior and purchase history. Seasonal collections and limited inventory alerts create urgency while customer reviews and unboxing videos build social proof. Multi-channel integration synchronizes inventory across online and pop-up retail locations.', 
        tech: ['Shopify', 'JavaScript', 'Analytics'],
        image: '/proj/14island.webp'
      },
      { 
        name: 'Bavalle', 
        url: 'bavalle.myshopify.com', 
        desc: 'Bavalle delivers modern Shopify store experiences with premium products and intuitive shopping journeys. The platform features advanced filtering options and intelligent search functionality for product discovery. Abandoned cart recovery systems and personalized email marketing campaigns increase conversion rates. Mobile-optimized design ensures seamless shopping across all devices while integrated analytics provide valuable customer behavior insights.', 
        tech: ['Shopify', 'Liquid', 'JavaScript'],
        image: '/proj/14island.webp'
      },
      { 
        name: 'Eagle Lights Automotive', 
        url: 'eaglelightsautomotive.com', 
        desc: 'Eagle Lights Automotive specializes in high-performance lighting solutions and accessories for motorcycles and specialty vehicles. The e-commerce platform features vehicle-specific fitment guides and installation video tutorials. Product comparison tools help customers select optimal lighting configurations while the technical support section addresses common installation challenges. Wholesale program services commercial clients and automotive repair shops nationwide.', 
        tech: ['Shopify', 'JavaScript', 'Video Integration'],
        image: '/proj1/Eagle-Lights-2-removebg-preview-1.webp'
      }
    ],
    creative: [
      { 
        name: 'Reech Agency', 
        url: 'reech.agency', 
        desc: 'Reech Agency delivers comprehensive branding and marketing solutions through innovative digital strategies and creative execution. The website showcases their portfolio across various industries with detailed case studies highlighting measurable results. Interactive service calculators help potential clients estimate project scope while the blog provides valuable marketing insights and industry trends. Client portal facilitates seamless communication and project management throughout engagement periods.', 
        tech: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
        image: '/proj/reech.webp'
      },
      { 
        name: '14 Islands', 
        url: '14islands.com', 
        desc: '14 Islands represents award-winning creative design and technology agency pushing boundaries in digital experiences. The platform demonstrates their technical prowess through interactive web animations and immersive storytelling. Project showcases highlight collaborations with global brands and innovative startups alike. Team expertise section introduces their multidisciplinary approach while the blog shares insights on emerging web technologies and design methodologies.', 
        tech: ['React', 'Three.js', 'WebGL', 'GSAP'],
        image: '/proj/14island.webp'
      },
      { 
        name: 'Barrel Marketing', 
        url: 'barrelmarketing.com', 
        desc: 'Barrel Marketing specializes in professional video production and strategic brand storytelling that resonates with target audiences. The website features their production capabilities through showreels and behind-the-scenes content. Client success stories demonstrate campaign effectiveness across various platforms and media channels. Service breakdowns explain their creative process from concept development to final delivery and performance analytics.', 
        tech: ['WordPress', 'JavaScript', 'Video Hosting'],
        image: '/proj1/barrelmarketing-removebg-preview.webp'
      },
      { 
        name: 'Kelvin Melgar', 
        url: 'kelvinmelgar.com', 
        desc: 'Kelvin Melgar showcases professional photography services capturing life\'s most precious moments through artistic vision and technical excellence. The online portfolio organizes work by photography genres including weddings, portraits, and commercial projects. Booking system manages session scheduling and client consultations while the blog shares photography tips and equipment reviews. Client gallery portal provides secure access to purchased images and print ordering options.', 
        tech: ['WordPress', 'Elementor', 'Gallery Plugins'],
        image: '/proj/kelvin.webp'
      },
      { 
        name: 'KLMNKO', 
        url: 'klmnko.de', 
        desc: 'KLMNKO represents innovative web design and digital marketing services creating modern online experiences for European clients. The website features minimalist design principles with focus on usability and conversion optimization. Project case studies detail their design thinking process and problem-solving approaches. Service packages cater to businesses of different sizes while the resources section provides valuable digital marketing guides and tools.', 
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        image: '/proj1/klmnko-removebg-preview.webp'
      },
      { 
        name: 'Abhishek Jha', 
        url: 'abhishekjha.me', 
        desc: 'Abhishek Jha presents freelance design and development services building elegant websites and digital products for global clients. The portfolio showcases diverse projects across e-commerce, SaaS platforms, and creative agencies. Technical blog shares coding tutorials and design insights while the client testimonials build credibility. Project inquiry form collects detailed requirements to provide accurate proposals and timeline estimates for potential engagements.', 
        tech: ['React', 'Next.js', 'Tailwind', 'Node.js'],
        image: '/proj1/abhishekjha-removebg-preview.webp'
      },
      { 
        name: 'Olha Lazarieva', 
        url: 'olhalazarieva.com', 
        desc: 'Olha Lazarieva displays creative design expertise through an innovative portfolio showcasing experimental projects and commercial work. The website features interactive elements that demonstrate her technical skills and artistic sensibilities. Project breakdowns explain design decisions and creative processes behind each piece. Contact system facilitates collaboration inquiries while the blog documents her creative journey and design philosophy evolution.', 
        tech: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
        image: '/proj1/olhalazarieva-removebg-preview.webp'
      },
      { 
        name: 'Good Looking Design', 
        url: 'goodlookingdesign.co.uk', 
        desc: 'Good Looking Design Agency specializes in comprehensive brand identity development and digital marketing solutions for UK businesses. The platform showcases their design system approach through consistent visual language across all projects. Client transformation stories highlight brand evolution and business growth outcomes. Service packages range from basic website design to complete digital marketing campaigns with performance tracking and optimization.', 
        tech: ['WordPress', 'Elementor', 'SEO Plugins'],
        image: '/proj1/goodlookingdesign-removebg-preview.webp'
      }
    ],
    professional: [
      { 
        name: 'Igor Vainshtein', 
        url: 'igorvainshtein.com', 
        desc: 'Igor Vainshtein offers expert leadership coaching and keynote speaking services driving business transformation and executive development. The website features his methodology through interactive content and client success stories. Booking system manages speaking engagement requests and corporate workshop scheduling while the resources section provides leadership development materials. Video library showcases past keynote presentations and training session excerpts across various industries.', 
        tech: ['WordPress', 'Elementor', 'Booking Systems'],
        image: '/proj/igor.webp'
      },
      { 
        name: 'Priority IB', 
        url: 'priorityib.com.au', 
        desc: 'Priority IB delivers trusted business insurance brokerage services providing comprehensive coverage solutions for Australian companies. The platform features insurance product comparisons and risk assessment tools helping businesses make informed decisions. Client portal manages policy documents, claims history, and renewal reminders. Educational resources explain complex insurance concepts while the broker matching system connects clients with specialized expertise.', 
        tech: ['WordPress', 'JavaScript', 'Client Portal'],
        image: '/proj/priotize.webp'
      },
      { 
        name: 'AIDN', 
        url: 'aidn.org.au', 
        desc: 'AIDN serves as the Industry and Defence Network association fostering collaboration and growth within Australian defence sectors. The website manages member directories, event registrations, and industry news dissemination. Resource library provides research papers and policy documents while the collaboration platform facilitates networking among members. Government liaison section keeps members informed about defence procurement opportunities and regulatory changes.', 
        tech: ['WordPress', 'Elementor', 'Membership System'],
        image: '/proj/australia.webp'
      },
    ],
    healthcare: [
      { 
        name: 'Adivo Vet', 
        url: 'adivo.vet', 
        desc: 'Adivo Vet pioneers advanced veterinary therapeutic antibodies revolutionizing animal healthcare through biotechnology innovation. The website details their research pipeline and scientific publications validating treatment efficacy. Veterinary professional portal provides clinical trial data and prescribing information while investor relations section communicates company milestones. Educational resources help pet owners understand innovative treatment options for companion animals.', 
        tech: ['WordPress', 'Elementor', 'Scientific Data'],
        image: '/proj1/Adivo-removebg-preview.webp'
      },
      { 
        name: 'Jules Pharma', 
        url: 'julespharma.com', 
        desc: 'Jules Pharma focuses on pharmaceutical development dedicated to creating quality healthcare solutions addressing unmet medical needs. The platform showcases their drug development pipeline and regulatory approval progress. Healthcare professional section provides clinical study results and prescribing guidelines while patient resources offer disease education and treatment information. Research collaboration portal facilitates partnerships with medical institutions and research organizations.', 
        tech: ['WordPress', 'JavaScript', 'Regulatory Compliance'],
        image: '/proj1/Julus-Pharma-removebg-preview.webp'
      },
      { 
        name: 'Intense Meals', 
        url: 'intensemeals.com', 
        desc: 'Intense Meals provides nutritional meal preparation services supporting health and fitness goals through scientifically formulated meals. The platform offers personalized nutrition plans developed by registered dietitians based on individual health objectives. Meal customization options accommodate dietary restrictions and preferences while delivery scheduling ensures fresh meals arrive according to consumption patterns. Progress tracking tools monitor health metrics and adjust meal plans accordingly.', 
        tech: ['WordPress', 'WooCommerce', 'Nutrition Database'],
        image: '/proj1/Intense-Meals-removebg-preview-1.webp'
      },
      { 
        name: 'Caxlbogg', 
        url: 'caxlbogg.elementor.cloud', 
        desc: 'Caxlbogg operates as a nurturing early childhood education center focused on developmental learning and holistic child development. The website features their educational philosophy and curriculum overview through engaging visuals and parent testimonials. Enrollment process guides parents through application and assessment stages while the parent portal communicates daily activities and developmental progress. Event calendar manages parent-teacher meetings and community engagement activities.', 
        tech: ['WordPress', 'Elementor', 'Parent Portal'],
        image: '/proj/14island.webp'
      }
    ],
    technology: [
      
      { 
        name: '14 Islands', 
        url: '14islands.com', 
        desc: '14 Islands demonstrates technology-driven creative agency capabilities pushing boundaries in web development and interactive experiences. Their technical expertise spans progressive web applications, real-time data visualization, and immersive 3D environments. The platform showcases experimental projects exploring new web technologies while maintaining robust, scalable architecture for enterprise clients. Development blog shares technical insights and open-source contributions to the web development community.', 
        tech: ['React', 'Three.js', 'WebGL', 'Node.js'],
        image: '/proj/14island.webp'
      },
      { 
        name: 'KLMNKO', 
        url: 'klmnko.de', 
        desc: 'KLMNKO leverages latest web technologies to create sophisticated digital solutions for clients across various industries. The website demonstrates responsive design principles and performance optimization techniques ensuring fast loading times across all devices. Technical portfolio highlights complex backend systems and database architectures while frontend implementations showcase modern JavaScript frameworks and CSS innovations. Code quality and maintainability remain central to their development philosophy.', 
        tech: ['HTML', 'CSS', 'JavaScript', 'Modern Frameworks'],
        image: '/proj1/klmnko-removebg-preview.webp'
      },
      { 
        name: 'Abhishek Jha', 
        url: 'abhishekjha.me', 
        desc: 'Abhishek Jha develops modern web applications and digital solutions using full-stack JavaScript technologies and cloud infrastructure. The platform showcases projects ranging from single-page applications to complex enterprise systems with scalable architecture. Technical writing section shares coding best practices and architecture patterns while open-source contributions demonstrate commitment to developer community. Client work emphasizes clean code, testing methodologies, and deployment automation.', 
        tech: ['React', 'Next.js', 'Tailwind', 'Cloud Services'],
        image: '/proj1/abhishekjha-removebg-preview.webp'
      }
    ],
    local: [
      { 
        name: 'Khanjee Canada', 
        url: 'khanjeecanada.com', 
        desc: 'Khanjee Canada serves as a local favorite restaurant bringing authentic Pakistani cuisine to Toronto communities with warm hospitality. The website highlights their neighborhood presence through location-specific content and community event participation. Local delivery radius checker ensures accurate service areas while the catering section serves local businesses and community celebrations. Customer loyalty program rewards regular patrons with exclusive offers and early access to new menu items.', 
        tech: ['WordPress', 'WooCommerce', 'Elementor', 'Local SEO'],
        image: '/proj/khanjee.webp'
      },
      { 
        name: 'The Mehfil', 
        url: 'themehfil.ca', 
        desc: 'The Mehfil operates as a community restaurant and event venue hosting special occasions for local families and organizations. The website features neighborhood testimonials and local partnership highlights strengthening community ties. Event planning resources help local residents organize celebrations while the venue tour provides virtual previews of event spaces. Community bulletin section shares local news and supports neighborhood initiatives through sponsorship and participation.', 
        tech: ['WordPress', 'Elementor', 'Community Features'],
        image: '/proj/mehfil.webp'
      },
      { 
        name: 'Benjamin Franklin Plumbing', 
        url: 'benjaminfranklinplumbing.com', 
        desc: 'Benjamin Franklin Plumbing provides trusted local plumbing services through franchise locations serving residential and commercial clients in their communities. The website features localized content for each service area with team introductions and neighborhood-specific promotions. Emergency service maps show coverage boundaries while local licensing and insurance information builds trust within communities. Community involvement section highlights participation in local events and charitable initiatives.', 
        tech: ['WordPress', 'Elementor', 'Local Services'],
        image: '/proj1/benjaminfranklinplumbing-removebg-preview.webp'
      },
      { 
        name: 'The Irish Plumber', 
        url: 'theirishplumber.com', 
        desc: 'The Irish Plumber delivers reliable local plumbing services with emergency response capabilities serving neighborhood households and businesses. The website emphasizes their community roots through local team profiles and neighborhood service history. Same-day service guarantees address urgent plumbing needs while the preventive maintenance programs help local homeowners avoid emergency situations. Community recommendations and local business partnerships strengthen their neighborhood presence.', 
        tech: ['WordPress', 'Elementor', 'Local Directories'],
        image: '/proj1/theirishplumber-removebg-preview.webp'
      },
      { 
        name: 'Jayee Cars', 
        url: 'jayeecars.co.uk', 
        desc: 'Jayee Cars operates as a local car dealership providing quality vehicles and automotive services to community members across the UK. The website features their local inventory with detailed vehicle histories and inspection reports. Financing calculators help local buyers understand payment options while the service department manages maintenance schedules for community customers. Local customer testimonials and vehicle sourcing requests cater to specific community automotive needs.', 
        tech: ['WordPress', 'JavaScript', 'Inventory Management'],
        image: '/proj1/Jayecars.webp'
      },
      { 
        name: 'Kelvin Melgar', 
        url: 'kelvinmelgar.com', 
        desc: 'Kelvin Melgar offers local professional photography services capturing life\'s special moments for families and businesses within his community. The website showcases local landmarks and familiar settings in portfolio work creating relatable content for area residents. Session booking system accommodates local weather conditions and seasonal opportunities while community event coverage documents neighborhood celebrations. Local business collaboration highlights partnerships with area venues and vendors.', 
        tech: ['WordPress', 'Elementor', 'Local Portfolio'],
        image: '/proj/kelvin.webp'
      }
    ],
    education: [
      { 
        name: 'Igor Vainshtein', 
        url: 'igorvainshtein.com', 
        desc: 'Igor Vainshtein provides entrepreneurship training and business leadership development programs through workshops, courses, and corporate training sessions. The platform features learning management systems delivering course content and tracking participant progress. Interactive exercises and case studies reinforce learning objectives while certification programs validate skill acquisition. Corporate training portal manages enterprise client engagements with customized curriculum development and performance metrics.', 
        tech: ['WordPress', 'Elementor', 'LMS Integration'],
        image: '/proj/igor.webp'
      },
      { 
        name: 'Caxlbogg', 
        url: 'caxlbogg.elementor.cloud', 
        desc: 'Caxlbogg focuses on early childhood education with comprehensive learning programs supporting developmental milestones and school readiness. The website details their educational approach through curriculum overviews and learning methodology explanations. Parent communication systems share daily activities and developmental progress while enrollment management handles applications and waitlist processing. Resource library provides parenting guidance and educational activities for home reinforcement.', 
        tech: ['WordPress', 'Elementor', 'Educational Content'],
        image: '/proj/14island.webp'
      },
      { 
        name: 'BizWorld', 
        url: 'bizworld.org', 
        desc: 'BizWorld delivers business education programs teaching entrepreneurship fundamentals to young learners through experiential activities and project-based learning. The platform provides educator resources including lesson plans, activity materials, and assessment tools. Student project galleries showcase young entrepreneur accomplishments while the program registration system manages school participation and teacher training workshops. Donor and volunteer portals support program expansion and community engagement.', 
        tech: ['WordPress', 'JavaScript', 'Educational Technology'],
        image: '/proj1/bizzworld-removebg-preview.webp'
      },
      { 
        name: 'AIDN', 
        url: 'aidn.org.au', 
        desc: 'AIDN offers industry network training and professional development programs supporting career advancement within defence and technology sectors. The website manages course catalogs and workshop registrations with certification tracking systems. Learning pathways guide professional development while industry expert webinars provide continuing education opportunities. Skills assessment tools help members identify development areas and track progress toward career objectives.', 
        tech: ['WordPress', 'Elementor', 'Professional Development'],
        image: '/proj/australia.webp'
      }
    ],
    hospitality: [
      { 
        name: 'Alaro Brewing', 
        url: 'alarobrewing.com', 
        desc: 'Alaro Brewing creates memorable hospitality experiences combining craft brewery operations with full-service restaurant and creative cocktail bar environments. The website features their tasting room atmosphere through virtual tours and ambiance videos. Event calendar manages live music performances, brewery tours, and special tasting events while the reservation system streamlines table bookings. Loyalty program rewards repeat visitors with exclusive beer releases and member-only events.', 
        tech: ['WordPress', 'JavaScript', 'Reservation Systems'],
        image: '/proj/alaro.webp'
      },
      { 
        name: 'Khanjee Canada', 
        url: 'khanjeecanada.com', 
        desc: 'Khanjee Canada delivers warm hospitality through authentic Pakistani cuisine and attentive service creating memorable dining experiences for guests. The website captures their restaurant ambiance through professional photography and customer experience stories. Online reservation system manages table bookings while the catering portal handles event planning inquiries. Seasonal menu updates and chef specials keep the dining experience fresh and encourage repeat visits from loyal customers.', 
        tech: ['WordPress', 'WooCommerce', 'Elementor', 'Hospitality'],
        image: '/proj/khanjee.webp'
      },
      { 
        name: 'The Mehfil', 
        url: 'themehfil.ca', 
        desc: 'The Mehfil provides exceptional hospitality through restaurant dining and event hall services perfect for celebrations, gatherings, and special occasions. The website showcases their event capabilities through gallery showcases and client testimonials. Integrated event planning tools help organize celebrations while the menu customization portal accommodates diverse dietary needs and preferences. Venue booking system manages availability and provides virtual tours of event spaces.', 
        tech: ['WordPress', 'Elementor', 'Event Management'],
        image: '/proj/mehfil.webp'
      },
      { 
        name: 'Marchand Biere', 
        url: 'marchand-biere.bzh', 
        desc: 'Marchand Biere offers specialty beer shop hospitality with curated selections and expert guidance creating educational tasting experiences for customers. The website features their beer cave atmosphere and knowledgeable staff introductions. Tasting event registrations manage limited seating while the beer club membership program provides exclusive access to rare releases. Educational content helps customers explore beer styles and brewing techniques enhancing their appreciation journey.', 
        tech: ['WordPress', 'Elementor', 'Tasting Events'],
        image: '/proj1/Gemini_Generated_Image_enj6pfenj6pfenj6-removebg-preview.webp'
      },
      { 
        name: 'Chip City Cookies', 
        url: 'chipcitycookies.com', 
        desc: 'Chip City Cookies brings fresh-baked goodness and warm hospitality to communities through their cookie bakery chain locations. The website creates anticipation for daily cookie flavors with countdown timers and sold-out notifications. Location finder helps customers discover nearest bakeries while the catering portal manages large orders for office events and parties. Birthday club and cookie subscription services create recurring hospitality experiences for cookie enthusiasts.', 
        tech: ['Shopify', 'JavaScript', 'Bakery Tech'],
        image: '/proj1/Chip-City-Cookies__1_-removebg-preview.webp'
      }
    ]
  };

  const getDisplayProjects = () => {
    console.log('Active category:', activeCategory);
    console.log('Projects for category:', projects[activeCategory]);
    return projects[activeCategory] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl top-0 -left-48 animate-float"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl bottom-0 -right-48 animate-float-delayed"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across multiple industries
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/50 scale-105 border border-blue-400/30'
                  : 'bg-slate-800/70 backdrop-blur-sm text-gray-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects - Alternating Layout */}
        <div className="space-y-20">
          {getDisplayProjects().map((project, index) => (
            <div
              key={`${project.url}-${index}`}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 group`}
            >
              {/* Project Image with Fixed Height */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 group-hover:shadow-blue-600/40 transition-all duration-500 h-80 md:h-96">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Button */}
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/40 hover:shadow-blue-500/60 hover:scale-105 group/btn"
                >
                  Visit Site
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translate(20px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translate(-30px, 30px) scale(1.15);
            opacity: 0.4;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;