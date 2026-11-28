import type { ServicePage } from './servicePages';
export const supportingServicePages: ServicePage[] = [
  {
    slug:'ecommerce-development',capability:'ecommerce',title:'E-commerce Development',heading:'Online stores. Built around the way you sell.',
    description:'E-commerce development with Shopify, WooCommerce and custom integrations. Sage Devs builds clear shopping journeys for businesses in Pakistan and worldwide.',
    intro:'A good store connects product discovery with the work behind every order. We help you choose the right platform, shape the shopping journey and connect the systems your business needs.',
    blueprint:'An experience for shoppers. A system for your team.',stages:['Catalog & collections','Products, options & pricing','Cart, checkout & payments','Orders, inventory & fulfilment'],technologies:['Shopify','WooCommerce','WordPress','Payment & shipping integrations'],
    scope:[
      {title:'Platform planning',text:'Compare Shopify, WooCommerce and a custom approach against your catalog, markets and internal operations. Include recurring platform fees, app dependencies and maintenance responsibilities in the decision.'},
      {title:'Storefront development',text:'Create navigation, collection pages and product templates that help shoppers understand the offer. Plan variants, personalization, delivery information and mobile usability before connecting checkout.'},
      {title:'Store integrations',text:'Connect the approved payment, shipping, inventory and marketing services. Define what happens when an external service is slow or unavailable, and how the team can recover an incomplete workflow.'},
    ],
    process:[
      {title:'Understand the operation',text:'Inventory products, variants, delivery regions and existing systems. Identify who owns product data and how changes reach the store.'},
      {title:'Design the buying journey',text:'Work from category discovery to a product decision and cart. Use actual product content to review layouts and clarify the information customers need.'},
      {title:'Build and integrate',text:'Implement the agreed storefront and connect platform-supported services. Separate configuration from custom development so ongoing ownership stays clear.'},
      {title:'Validate the complete order flow',text:'Test representative products, supported payment methods and order notifications. Check redirects and product metadata, then hand over the agreed administration guidance.'},
    ],
    faqs:[
      {question:'Which e-commerce platform should we use?',answer:'Shopify is a managed commerce platform; WooCommerce integrates with WordPress. The right choice depends on your catalog, customization needs, existing systems and ongoing ownership. We compare those requirements before recommending a platform.'},
      {question:'Can you migrate an existing store?',answer:'Yes. We first review product, customer and order data, URL structure and integrations. The migration plan identifies what the source and destination platforms support and how redirects and testing will work.'},
      {question:'Do you include product photography and copywriting?',answer:'These are separate deliverables unless explicitly included in the proposal. We identify content and imagery requirements early so they do not become a launch-day blocker.'},
    ],cases:[12,5],portfolioDomains:['chipcitycookies.com','stainedconcept.com','eliburchjewelry.com','terzettostone.co.uk'],related:['shopify-development','wordpress-development','ui-ux-design'],
  },
  {
    slug:'cloud-devops',capability:'cloud',title:'Cloud & DevOps Services',heading:'Cloud infrastructure. Confidence in every release.',
    description:'Cloud and DevOps services from Sage Devs: deployment workflows, environment configuration, monitoring and infrastructure improvements for digital products.',
    intro:'Dependable delivery starts long before deployment. We help teams make environments understandable, releases repeatable and system health visible, with an approach that fits the product.',
    blueprint:'From a reviewed change to a monitored release.',stages:['Source control & review','Build, checks & staging','Deployment & rollback','Monitoring, backups & response'],technologies:['AWS','Docker','CI/CD','GitHub Actions','Monitoring'],
    scope:[
      {title:'Environments & infrastructure',text:'Review the application, dependencies and expected usage before choosing hosting and environment boundaries. Document configuration, access ownership and the services the product relies on.'},
      {title:'Build & deployment workflows',text:'Automate repeatable build and release steps with appropriate checks. Keep secrets out of source control and agree how staging, production and rollback are managed.'},
      {title:'Operational visibility',text:'Define useful logs, alerts and health checks around the actual application. Plan backup and recovery responsibilities and make incident ownership clear before an urgent issue occurs.'},
    ],
    process:[
      {title:'Assess the current delivery path',text:'Inspect repositories, infrastructure and deployment steps. Identify fragile manual actions, unclear access and missing recovery procedures.'},
      {title:'Agree the operating model',text:'Set environment boundaries and ownership. Choose a practical hosting and delivery approach based on usage, budget and the team that will maintain it.'},
      {title:'Automate and verify',text:'Implement the agreed pipeline and configuration. Test a release and its rollback path, and verify that checks fail clearly when a dependency is unavailable.'},
      {title:'Document and hand over',text:'Provide the agreed runbooks and operational guidance. Confirm who receives alerts, manages access and handles changes after the engagement.'},
    ],
    faqs:[
      {question:'Can you work with our existing hosting?',answer:'Yes. We assess the current platform and access arrangements before recommending changes. A migration is only useful when it solves a concrete operational or technical problem.'},
      {question:'Do you guarantee a particular uptime?',answer:'Availability commitments depend on the chosen infrastructure and support agreement. Any service levels, response windows and exclusions must be explicitly agreed in the proposal.'},
      {question:'Are cloud provider fees included?',answer:'Provider usage and third-party subscriptions are separate unless stated otherwise. We clarify the expected services and ownership of billing before setup.'},
    ],cases:[],portfolioDomains:['reech.agency','14islands.com','abhishekjha.me','olhalazarieva.com'],workLabel:'Web experiences from the studio',related:['web-development','saas-development','maintenance-support'],
  },
  {
    slug:'maintenance-support',capability:'maintenance-support',title:'Website Maintenance & Support',heading:'Keep your website ready for what comes next.',
    description:'Website maintenance and support from Sage Devs. Plan updates, backups, bug fixes and performance improvements for WordPress, commerce and custom websites.',
    intro:'Launching is a milestone, not the end of ownership. We help businesses keep their websites useful through an agreed maintenance plan, clear priorities and a dependable way to request help.',
    blueprint:'A practical rhythm for ongoing care.',stages:['Monitor & review','Prioritize & scope','Update, test & release','Document & improve'],technologies:['WordPress','WooCommerce','Shopify','Custom applications','Backups & monitoring'],
    scope:[
      {title:'Routine maintenance',text:'Plan applicable platform, theme and dependency updates. Check compatibility in a suitable environment and agree backup and rollback arrangements before changing a live system.'},
      {title:'Troubleshooting & repairs',text:'Investigate reported issues with clear reproduction steps and context. Prioritize by impact, communicate the proposed fix and test the affected journey after the change.'},
      {title:'Ongoing improvement',text:'Turn recurring problems and customer feedback into a manageable backlog. Scope usability, performance and content improvements separately from routine maintenance where appropriate.'},
    ],
    process:[
      {title:'Review the existing system',text:'Inspect the code or platform, hosting, integrations and available access. Establish a baseline of known issues and dependencies.'},
      {title:'Agree responsibilities',text:'Define what is covered, the communication channel and response windows. Clarify who owns licenses, backups, content and third-party support.'},
      {title:'Make controlled changes',text:'Work from a prioritized request or maintenance schedule. Use staging where available and check the affected functionality before release.'},
      {title:'Keep the history clear',text:'Record meaningful changes and unresolved items. Review priorities periodically so ongoing effort follows the needs of the business.'},
    ],
    faqs:[
      {question:'Will you maintain a website another team built?',answer:'We can assess an existing website before taking on support. Access, documentation, code quality and third-party dependencies determine the scope and any initial stabilization work.'},
      {question:'Is emergency support available?',answer:'Response times and out-of-hours coverage depend on an agreed support arrangement. The studio’s published working hours are not a promise of continuous human coverage.'},
      {question:'Are new features part of maintenance?',answer:'Routine maintenance and new development are different types of work. The agreement defines any included development capacity; larger features are estimated separately.'},
    ],cases:[8,9,11,12],workLabel:'Websites from our portfolio',related:['wordpress-development','ecommerce-development','cloud-devops'],
  },
  {
    slug:'brand-identity',capability:'brand-identity',title:'Brand Identity & Digital Design',heading:'A brand identity with a point of view.',
    description:'Brand identity and digital design by Sage Devs. Shape a coherent visual language, practical brand guidelines and assets for your website and digital presence.',
    intro:'An identity should remain recognizable wherever people encounter your business. We connect the visual direction with the interfaces, content and assets your team uses every day.',
    blueprint:'One identity. A consistent expression.',stages:['Positioning & audience','Typography, color & identity','Digital applications','Guidelines & asset handover'],technologies:['Figma','Illustrator','Brand guidelines','Digital assets'],
    scope:[
      {title:'Identity direction',text:'Understand the audience, positioning and existing brand equity. Explore a focused visual direction with typography, color and composition that reflects the business.'},
      {title:'Brand assets & applications',text:'Develop the agreed logo or identity assets and demonstrate how they behave in relevant digital contexts. Consider small sizes, light and dark backgrounds, and real content.'},
      {title:'Practical guidelines',text:'Document the rules that help other people apply the identity consistently. Agree the asset formats and usage examples your team needs for its day-to-day work.'},
    ],
    process:[
      {title:'Understand what should carry forward',text:'Review the existing identity, audience and brand materials. Identify what is recognized already and what is making the presentation inconsistent.'},
      {title:'Develop the visual direction',text:'Explore a considered route with examples in context. Review the design against the brief rather than evaluating isolated decorative choices.'},
      {title:'Test the applications',text:'Apply the direction to representative website and digital touchpoints. Check legibility, proportions and consistency across sizes.'},
      {title:'Deliver a usable system',text:'Prepare the agreed files and guidance. Make naming, variants and usage clear so the identity can be maintained after the engagement.'},
    ],
    faqs:[
      {question:'Can you work with our existing logo?',answer:'Yes. A brand engagement can refine the surrounding typography, layout and digital presentation while preserving the supplied logo and its geometry.'},
      {question:'Does this include a complete rebrand?',answer:'Only when that is the agreed scope. Logo design, naming, strategy, guidelines and website design are distinct deliverables that are specified in the proposal.'},
      {question:'Which files will we receive?',answer:'The proposal lists the required formats and variations. We plan exports around intended use, such as scalable artwork for a logo and optimized assets for the website.'},
    ],cases:[2,3,9,10],workLabel:'Identity in digital experiences',related:['ui-ux-design','web-development','digital-strategy'],
  },
  {
    slug:'digital-strategy',capability:'digital-strategy',title:'Digital Strategy & Product Planning',heading:'Digital strategy. A clearer way forward.',
    description:'Digital strategy and product planning with Sage Devs. Assess your website, clarify priorities and build a practical roadmap for design and development.',
    intro:'Before investing in a rebuild or a new product, make the decision clearer. We help teams understand the current experience, define the problem and turn competing ideas into a practical plan.',
    blueprint:'From an open question to an actionable brief.',stages:['Business goals & user needs','Current systems & constraints','Options, priorities & trade-offs','Scope, roadmap & next steps'],technologies:['Technical discovery','Experience audits','Platform evaluation','Product roadmaps'],
    scope:[
      {title:'Website & product assessment',text:'Review how the existing experience supports key tasks and business goals. Combine content, usability and technical observations into a set of prioritized issues.'},
      {title:'Platform & approach selection',text:'Compare practical options such as WordPress, Shopify or custom development. Consider ownership, integrations, recurring cost and the skills available to maintain the result.'},
      {title:'A delivery-ready roadmap',text:'Translate priorities into a focused scope with dependencies and decision points. Separate essential requirements from later opportunities and identify what still needs validation.'},
    ],
    process:[
      {title:'Frame the decision',text:'Agree the business question, the people involved and the evidence available. Set clear boundaries for the discovery engagement.'},
      {title:'Inspect the current experience',text:'Review priority journeys, content and systems. Gather the agreed stakeholder input and record assumptions that need further validation.'},
      {title:'Evaluate the options',text:'Compare approaches against the brief, operational constraints and expected ownership. Make trade-offs visible rather than treating one technology as the answer to every problem.'},
      {title:'Agree the next investment',text:'Deliver the agreed findings and roadmap. Define a sensible first phase and the information needed before committing to later work.'},
    ],
    faqs:[
      {question:'Can we commission discovery before a build?',answer:'Yes. Discovery can be a separate engagement with its own scope and deliverables. It can help your team decide whether and how to proceed with implementation.'},
      {question:'Will you recommend a complete rebuild?',answer:'Only if the assessment supports it. Improving an existing system, replacing a specific component or changing the content structure may be more appropriate.'},
      {question:'Can you guarantee more leads?',answer:'No. Enquiries depend on the offer, audience, traffic quality and ongoing marketing as well as the website. We can make conversion paths clearer and define useful measurements to evaluate the work.'},
    ],cases:[3,6,8,10],workLabel:'Explore the businesses behind the work',related:['web-development','ui-ux-design','ecommerce-development'],
  },
];
