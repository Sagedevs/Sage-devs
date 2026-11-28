import { supportingServicePages } from './supportingServicePages';
export interface ServicePage {
  slug: string; capability: string; title: string; heading: string; description: string;
  intro: string; blueprint: string; stages: string[]; technologies: string[];
  scope: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  cases: number[]; related: string[]; portfolioDomains?: string[]; workLabel?: string;
}
export const servicePages: ServicePage[] = [
  {
    slug: 'web-development', capability: 'web-app', title: 'Custom Web Development',
    heading: 'Custom web development. Built around you.',
    description: 'Custom web development from Sage Devs in Lahore. Plan, design and build business websites, web applications and APIs for teams worldwide.',
    intro: 'When a template cannot support your product, build around the people and processes that matter. We bring interface design, application development and integrations into one delivery process.',
    blueprint: 'One product. Connected from end to end.', stages: ['The customer experience', 'Application & business rules', 'APIs, data & integrations', 'Release, monitoring & support'],
    technologies: ['React', 'Next.js', 'Node.js', 'APIs', 'PostgreSQL'],
    scope: [
      { title: 'Websites with a purpose', text: 'Marketing sites and content platforms with a clear information structure, accessible interfaces and an editing workflow your team can use. We choose the platform around your content and operational needs.' },
      { title: 'Applications for real workflows', text: 'Customer portals, dashboards and business tools that connect everyday tasks. Permissions, validation and error states belong in the specification alongside the main user journey.' },
      { title: 'Systems that work together', text: 'Connect your application with payment, CRM and other business systems through documented APIs. Agree data ownership, failure handling and access rules before implementing an integration.' },
    ],
    process: [
      { title: 'Map the problem', text: 'Identify users, critical workflows and existing systems. Turn the brief into a prioritized scope with acceptance criteria and a practical release plan.' },
      { title: 'Prototype the important journeys', text: 'Work through navigation, forms and key screens before committing to development. Review mobile layouts and the states users see when something goes wrong.' },
      { title: 'Build in reviewable increments', text: 'Develop the interface and application logic together. Demonstrate working features, test integrations and document decisions as the product takes shape.' },
      { title: 'Prepare for ownership', text: 'Check responsive behavior, accessibility, metadata and production configuration. Handover the agreed source, documentation and operational instructions; define ongoing support separately.' },
    ],
    faqs: [
      { question: 'Should I choose a custom application or WordPress?', answer: 'WordPress is often appropriate for content-led websites. A custom application makes sense when your permissions, data model or workflows go beyond a content management system. We compare both against your requirements during discovery.' },
      { question: 'Can you improve an existing website?', answer: 'Yes. We first inspect the code, hosting and integrations, then recommend improvements or a phased migration. Working functionality and useful content form part of that assessment.' },
      { question: 'How are cost and delivery dates decided?', answer: 'The scope, integrations, content readiness and review process determine the estimate. We agree deliverables and milestones in a proposal before development starts.' },
    ], cases: [1, 2, 3, 6, 10], portfolioDomains: ['olhalazarieva.com'], related: ['wordpress-development', 'saas-development', 'ui-ux-design'],
  },
  {
    slug: 'wordpress-development', capability: 'wordpress', title: 'WordPress Website Development',
    heading: 'WordPress websites. Yours to shape.',
    description: 'WordPress development for businesses, institutes and online stores. Custom websites, WooCommerce, migrations and ongoing improvements by Sage Devs.',
    intro: 'A capable website should be straightforward to manage. We build WordPress experiences around your brand, content and customers, with considered design and a practical publishing workflow.',
    blueprint: 'Your content. Your team. In control.', stages: ['Brand & page structure', 'Reusable templates & content', 'WordPress & WooCommerce', 'Training, updates & maintenance'],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Elementor where appropriate'],
    scope: [
      { title: 'Custom websites & themes', text: 'Build an appropriate page system for your services, editorial content and enquiries. Theme development and carefully selected page-building tools are options, chosen around how your team will maintain the site.' },
      { title: 'Commerce & integrations', text: 'Create product discovery and purchasing workflows with WooCommerce. Scope product variants, payments, shipping and integrations around the markets you actually serve.' },
      { title: 'Migrations & improvements', text: 'Review the existing content, plugins and hosting before moving a site. Preserve important URLs with a redirect plan, and address image weight, caching and avoidable plugin complexity.' },
    ],
    process: [
      { title: 'Audit content and requirements', text: 'Inventory pages, products, forms and existing integrations. Decide what must carry over, what needs improvement and who will own the content after launch.' },
      { title: 'Design a usable page system', text: 'Create layouts for real content, including long headings, product variations and mobile navigation. Agree the editing experience before building every page.' },
      { title: 'Build and connect', text: 'Implement the agreed templates, content fields and integrations in a staging environment. Check editor permissions, form validation and the actual customer journey.' },
      { title: 'Launch with a handover', text: 'Test links, redirects, forms and responsive layouts. Provide agreed editing guidance and discuss backups, plugin updates and maintenance responsibilities.' },
    ],
    faqs: [
      { question: 'Can we edit the website ourselves?', answer: 'Yes. The editing workflow is part of the scope. We choose templates and content fields your team can use without needing to change the underlying code for routine updates.' },
      { question: 'Do you build WooCommerce stores?', answer: 'Yes. We scope the catalog, payment options, delivery rules and integrations before building. Third-party fees and plugin licenses are clarified in the proposal.' },
      { question: 'Are hosting and maintenance included?', answer: 'That depends on the selected package and agreed proposal. Hosting, licenses, backups and ongoing maintenance are itemized so you know which responsibilities sit with each team.' },
    ], cases: [8, 9, 11, 12, 4, 10], related: ['shopify-development', 'web-development', 'ui-ux-design'],
  },
  {
    slug: 'shopify-development', capability: 'shopify', title: 'Shopify Store Development',
    heading: 'Shopify stores. Made to move.',
    description: 'Shopify development by Sage Devs: branded storefronts, product discovery, theme customization and integrations for businesses selling online.',
    intro: 'Make it easy for customers to understand your products and move toward a purchase. We design and develop Shopify storefronts with a clear catalog, a strong brand and a dependable shopping experience.',
    blueprint: 'From discovery to a confident purchase.', stages: ['Collections & navigation', 'Product pages & variants', 'Cart, checkout & payments', 'Fulfilment & store operations'],
    technologies: ['Shopify', 'Liquid', 'Theme customization', 'Store integrations'],
    scope: [
      { title: 'A storefront with identity', text: 'Translate your brand into collection pages, product templates and navigation. Keep mobile shopping, image proportions and readable product information central to the design.' },
      { title: 'Product & shopping workflows', text: 'Structure products, variants and collections around how customers shop. Review cart behavior, delivery information and supported checkout options for your Shopify plan.' },
      { title: 'Connected store operations', text: 'Evaluate the apps and integrations your business needs for fulfilment, marketing and reporting. Favor a smaller, maintainable stack over adding an app for every feature.' },
    ],
    process: [
      { title: 'Understand the catalog', text: 'Review products, variants, target markets and existing store data. Agree migration requirements and identify constraints in shipping, tax and payment providers.' },
      { title: 'Design the shopping journey', text: 'Work from discovery through product detail and cart. Prototype priority templates using actual product photography and realistic content.' },
      { title: 'Develop the storefront', text: 'Customize the theme, configure the agreed store features and connect approved integrations. Review app impact and responsive behavior as features are added.' },
      { title: 'Test before launch', text: 'Use test transactions where supported to check the buying flow. Review redirects, metadata and store administration, then hand over the agreed operational guidance.' },
    ],
    faqs: [
      { question: 'Should we use Shopify or WooCommerce?', answer: 'Shopify offers a managed commerce platform; WooCommerce suits teams that want commerce within WordPress and more control over hosting. Catalog complexity, existing systems and ongoing ownership help determine the choice.' },
      { question: 'Can you customize the checkout?', answer: 'Available checkout customizations depend on your Shopify plan and supported platform features. We confirm the options before promising a specific checkout behavior.' },
      { question: 'Are Shopify subscriptions and app fees included?', answer: 'Platform subscriptions, paid apps and transaction fees are separate from development unless the proposal explicitly includes them. We identify expected third-party costs during scoping.' },
    ], cases: [5], portfolioDomains: ['chipcitycookies.com','stainedconcept.com','eliburchjewelry.com','jakematluck.com','eaglelightsautomotive.com'], related: ['wordpress-development', 'ui-ux-design', 'web-development'],
  },
  {
    slug: 'saas-development', capability: 'saas', title: 'SaaS & Product Development',
    heading: 'SaaS development. From idea to product.',
    description: 'SaaS development for founders and growing teams. Shape an MVP, build core workflows, integrate subscriptions and plan the next release with Sage Devs.',
    intro: 'A useful first release is focused. We help you turn a product idea into a clear scope, a working application and a foundation for learning from real users.',
    blueprint: 'A focused release. A deliberate roadmap.', stages: ['Users & core workflows', 'Accounts, roles & permissions', 'Billing, data & integrations', 'Feedback & the next release'],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    scope: [
      { title: 'MVP planning & delivery', text: 'Choose the smallest complete workflow that tests your product proposition. Separate launch requirements from the longer roadmap and define what a useful pilot should tell you.' },
      { title: 'Product foundations', text: 'Plan accounts, roles, organization boundaries and data access. Multi-tenant architecture, subscription billing and reporting are scoped according to your product rather than included by default.' },
      { title: 'Iteration after launch', text: 'Improve the product from observed usage and customer feedback. Prioritize reliability, usability and support needs alongside new capabilities.' },
    ],
    process: [
      { title: 'Define the first customer', text: 'Identify a concrete user and the job they need to complete. Agree a problem statement, essential workflows and acceptance criteria for the first release.' },
      { title: 'Test the product flow', text: 'Prototype onboarding and the primary task. Clarify account boundaries, empty states and permissions before development makes those choices expensive to change.' },
      { title: 'Deliver a usable increment', text: 'Build complete workflows in stages, with regular reviews. Test data isolation, billing events and failure recovery where these are part of the scope.' },
      { title: 'Learn from the release', text: 'Handover the product with a prioritized backlog. Agree monitoring and support arrangements, then evaluate subsequent investment against what users actually need.' },
    ],
    faqs: [
      { question: 'Can you start with an MVP?', answer: 'Yes. A focused MVP is often the right starting point. We agree which workflows are essential for a useful release and move lower-priority features to a later roadmap.' },
      { question: 'Can you work with an existing product team?', answer: 'Yes. We can contribute a defined part of the product or work across design and engineering. Responsibilities, repository access and review practices are agreed before work starts.' },
      { question: 'Will the first release support unlimited growth?', answer: 'No architecture removes the need for ongoing capacity planning. We design for the expected usage and revisit performance, infrastructure and data decisions as the product develops.' },
    ], cases: [], portfolioDomains: ['reech.agency','14islands.com','linguanovainstitute.com','elitecreationspk.com'], workLabel: 'More websites from the studio', related: ['web-development', 'ui-ux-design', 'ai-automation'],
  },
  {
    slug: 'ai-automation', capability: 'ai-solutions', title: 'AI Automation & Integration',
    heading: 'AI automation. With a purpose.',
    description: 'Practical AI automation and integrations from Sage Devs. Evaluate a workflow, build a controlled pilot and connect useful AI capabilities to your systems.',
    intro: 'Start with a specific task, not a model. We help teams evaluate where AI can support their work, test it against real examples and integrate it with clear limits and human oversight.',
    blueprint: 'A measured path from input to action.', stages: ['Source information & permissions', 'Retrieval, rules & model', 'Validation & human review', 'Action, monitoring & evaluation'],
    technologies: ['Python', 'Language model APIs', 'Workflow integrations', 'Evaluation datasets'],
    scope: [
      { title: 'Workflow assessment', text: 'Identify repetitive tasks and the information they depend on. Check whether a conventional integration, rules-based automation or an AI-assisted step is the best fit.' },
      { title: 'Assistants & integrations', text: 'Build scoped assistants, document workflows and connections to existing tools. Define what the system may read, what it may change and which actions require a person to approve them.' },
      { title: 'Evaluation & operational controls', text: 'Test representative and difficult examples before release. Plan costs, rate limits, failure handling and a useful fallback when a provider is unavailable or an answer is uncertain.' },
    ],
    process: [
      { title: 'Select a bounded use case', text: 'Choose a task with a clear owner and a measurable baseline. Document data access and decide where human review is required.' },
      { title: 'Build an evaluation set', text: 'Collect representative examples with permission and define what acceptable output looks like. Include missing information, ambiguous requests and failure cases.' },
      { title: 'Pilot with safeguards', text: 'Connect the model and workflow behind appropriate permissions. Add output checks, timeouts and cost controls before enabling actions against business systems.' },
      { title: 'Measure and improve', text: 'Compare the pilot with the original workflow. Review errors, operating costs and human effort before expanding the scope.' },
    ],
    faqs: [
      { question: 'Do we need to train a custom model?', answer: 'Often an existing model with the right context and integrations is enough. We compare that approach with rules-based automation and custom training against your data, privacy and quality requirements.' },
      { question: 'How do you handle incorrect AI answers?', answer: 'The workflow needs explicit limits, evaluation and fallback behavior. High-impact decisions should have suitable human review; a fluent response alone is not evidence that an answer is correct.' },
      { question: 'What determines the operating cost?', answer: 'Request volume, context size, model choice, retries and connected services all affect cost. We estimate these during the pilot and define limits before wider use.' },
    ], cases: [], portfolioDomains: ['reech.agency','14islands.com','linguanovainstitute.com','elitecreationspk.com'], workLabel: 'More websites from the studio', related: ['web-development', 'saas-development', 'wordpress-development'],
  },
  {
    slug: 'mobile-app-development', capability: 'mobile', title: 'Mobile App Development',
    heading: 'Mobile apps. Built for everyday.',
    description: 'Mobile app development with Sage Devs. Plan and build React Native apps, connected interfaces and mobile-first product experiences for your customers.',
    intro: 'Mobile products have to work in the moments people need them. We design around the essential journey, then connect the interface, data and services behind it.',
    blueprint: 'A complete experience in your pocket.', stages: ['The essential user journey', 'Touch, navigation & device states', 'Accounts, APIs & local data', 'Device testing & release preparation'],
    technologies: ['React Native', 'TypeScript', 'APIs', 'Progressive web apps'],
    scope: [
      { title: 'Cross-platform applications', text: 'Build mobile interfaces with React Native where a shared codebase fits the product. Device-specific requirements are reviewed early so they can be scoped explicitly.' },
      { title: 'Connected product experiences', text: 'Integrate authentication and backend services with considered loading, error and reconnect states. Offline functionality and notifications are planned when the workflow needs them.' },
      { title: 'Mobile web alternatives', text: 'A responsive web app or progressive web app can be a better starting point for some products. We compare distribution, device access and maintenance needs before choosing an approach.' },
    ],
    process: [
      { title: 'Choose the right delivery route', text: 'Define users, target devices and the features that depend on device capabilities. Compare native distribution with a mobile web experience.' },
      { title: 'Prototype touch interactions', text: 'Review screen hierarchy, navigation and input behavior on realistic device sizes. Include empty states, permissions and interrupted connections.' },
      { title: 'Connect and test', text: 'Build the screens and integrate the agreed APIs. Test data flows, account behavior and accessibility on the devices included in the project scope.' },
      { title: 'Prepare the release', text: 'Plan ownership of signing credentials, store listings and support. Store approval is controlled by the platform; submission and subsequent fixes are scoped transparently.' },
    ],
    faqs: [
      { question: 'Can one app support iOS and Android?', answer: 'React Native can share substantial application code across both. Device integrations and platform-specific requirements still need their own implementation and testing where appropriate.' },
      { question: 'Do you guarantee app-store approval?', answer: 'No. Apple and Google control their review processes. We can prepare the agreed release materials and address technical feedback within the project scope.' },
      { question: 'Can the app connect to our existing backend?', answer: 'Yes, subject to reviewing the available APIs, authentication and data permissions. Any backend changes are identified during discovery.' },
    ], cases: [], portfolioDomains: ['reech.agency','14islands.com','linguanovainstitute.com','elitecreationspk.com'], workLabel: 'More websites from the studio', related: ['web-development', 'ui-ux-design', 'saas-development'],
  },
  {
    slug: 'ui-ux-design', capability: 'ui-design', title: 'UI/UX Design Services',
    heading: 'UI/UX design. Clarity in every detail.',
    description: 'UI/UX design for websites and digital products. Sage Devs connects user journeys, prototypes and practical design systems with development.',
    intro: 'Good interfaces make the next step clear. We work from the content and tasks your users actually face, shaping a visual system that your engineering team can build and maintain.',
    blueprint: 'Clarity at every level of the interface.', stages: ['Users, content & tasks', 'Journeys & information structure', 'Prototypes & visual language', 'Components & development handover'],
    technologies: ['Figma', 'Interactive prototypes', 'Design systems', 'Accessibility review'],
    scope: [
      { title: 'Product & website structure', text: 'Map the pages, screens and relationships a visitor needs to understand. Resolve priorities in wireframes before styling every element.' },
      { title: 'A coherent visual language', text: 'Develop typography, spacing, color and component treatments around the brand. Design for small screens and content variation rather than a single ideal mockup.' },
      { title: 'Interfaces ready to implement', text: 'Document component states, responsive behavior and interaction details. Include focus, error, loading and empty states so important behavior is not left to guesswork.' },
    ],
    process: [
      { title: 'Understand the context', text: 'Review the audience, existing experience and business priorities. Agree the questions research or stakeholder feedback should resolve.' },
      { title: 'Explore the user journey', text: 'Map navigation and the main task. Use wireframes to review content order and remove unnecessary steps before refining visuals.' },
      { title: 'Prototype and refine', text: 'Build interactive prototypes for important flows. Gather the agreed feedback and review contrast, readable type and touch targets.' },
      { title: 'Handover with intent intact', text: 'Deliver the agreed design files and component guidance. Collaborate with engineering on responsive details and review the implemented experience.' },
    ],
    faqs: [
      { question: 'Can you design without developing the website?', answer: 'Yes. Design can be a defined engagement with an agreed set of screens, prototypes and handover materials, or part of a combined design and development project.' },
      { question: 'What if we already have a brand identity?', answer: 'We use your existing brand assets and guidelines as the starting point, then adapt them into an interface system that works across content and screen sizes.' },
      { question: 'How are revisions managed?', answer: 'The proposal sets the review stages and included revisions. We consolidate feedback at each stage and agree changes that introduce new scope before proceeding.' },
    ], cases: [1, 2, 3, 9, 10], portfolioDomains: ['olhalazarieva.com'], related: ['web-development', 'wordpress-development', 'shopify-development'],
  },
];
servicePages.push(...supportingServicePages);

export const serviceHref = (capability: string) => {
  const page = servicePages.find(item => item.capability === capability);
  return page ? `/services/${page.slug}` : `/services#${capability}`;
};
