import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  icon: React.ReactNode;
  gradient: string;
  items: FAQItem[];
}

// Simple SVG icons to replace lucide-react
const PlusIcon = () => (
  <svg
    className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

const HelpIcon = () => (
  <svg
    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const LayersIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
    />
  </svg>
);

const CloudIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);
const WhatsAppIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);
const SettingsIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ZapIcon = () => (
  <svg
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-purple-400 mx-auto mb-4 sm:mb-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set<number>());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData: FAQCategory[] = [
    {
      category: "Full-Stack Development & Architecture",
      icon: <LayersIcon />,
      gradient: "from-purple-500 to-indigo-600",
      items: [
        {
          question: "What full-stack technologies do you specialize in?",
          answer:
            "I specialize in the MERN/MEAN stack (MongoDB, Express.js, React/Angular, Node.js) and modern alternatives like Next.js with TypeScript, PostgreSQL, and cloud services. I&apos;m also proficient in Python (Django/Flask), PHP (Laravel), and Java (Spring Boot) for backend development, with expertise in both SQL and NoSQL databases.",
        },
        {
          question: "How do you architect scalable full-stack applications?",
          answer:
            "I design applications using microservices architecture, implement proper separation of concerns with clean architecture patterns, use containerization with Docker, and leverage cloud-native solutions on AWS, Azure, or GCP. I also implement proper caching strategies, database sharding, and load balancing for optimal scalability.",
        },
        {
          question:
            "Can you handle both frontend and backend development equally well?",
          answer:
            "Absolutely! I have deep expertise in both domains. On the frontend, I create responsive, interactive UIs with React, Vue, or Angular, implementing state management, routing, and modern UI/UX patterns. On the backend, I build robust APIs, handle authentication, manage databases, and ensure security and performance optimization.",
        },
        {
          question: "What&apos;s your approach to API design and integration?",
          answer:
            "I design RESTful and GraphQL APIs following industry standards, implement proper versioning, comprehensive documentation with Swagger/OpenAPI, and ensure backward compatibility. I also handle third-party integrations, webhooks, real-time communications with WebSockets, and implement proper error handling and rate limiting.",
        },
      ],
    },
    {
      category: "Database Design & Management",
      icon: <DatabaseIcon />,
      gradient: "from-emerald-500 to-teal-600",
      items: [
        {
          question: "What database technologies do you work with?",
          answer:
            "I work with both SQL databases (PostgreSQL, MySQL, SQLite) and NoSQL solutions (MongoDB, DynamoDB, Redis). I also have experience with specialized databases like Elasticsearch for search functionality, Neo4j for graph data, and time-series databases like InfluxDB for analytics applications.",
        },
        {
          question: "How do you ensure database performance and scalability?",
          answer:
            "I implement proper database indexing, query optimization, connection pooling, and caching strategies using Redis or Memcached. For scalability, I design database schemas with normalization principles, implement read replicas, database sharding, and use CDNs for static content delivery.",
        },
        {
          question: "Do you handle database migrations and data modeling?",
          answer:
            "Yes, I create comprehensive data models, design efficient database schemas, and implement automated migration scripts. I use tools like Prisma, Sequelize, or Mongoose for ORM/ODM, ensure data integrity with proper constraints, and handle complex relationships and transactions effectively.",
        },
      ],
    },
    {
      category: "DevOps & Cloud Infrastructure",
      icon: <CloudIcon />,
      gradient: "from-blue-500 to-cyan-600",
      items: [
        {
          question: "What cloud platforms and DevOps tools do you use?",
          answer:
            "I deploy on AWS, Azure, and Google Cloud Platform using services like EC2, Lambda, RDS, S3, and Kubernetes. For DevOps, I implement CI/CD pipelines with GitHub Actions, GitLab CI, or Jenkins, use Docker for containerization, and Terraform for infrastructure as code.",
        },
        {
          question: "How do you handle application deployment and monitoring?",
          answer:
            "I set up automated deployment pipelines with blue-green or rolling deployments, implement comprehensive monitoring with tools like DataDog, New Relic, or CloudWatch, and establish logging systems with ELK stack. I also configure auto-scaling, load balancers, and disaster recovery procedures.",
        },
        {
          question: "Can you implement serverless architectures?",
          answer:
            "Absolutely! I build serverless applications using AWS Lambda, Azure Functions, or Vercel Functions, implement event-driven architectures, and use serverless databases like DynamoDB or FaunaDB. This approach reduces costs, improves scalability, and simplifies maintenance for many use cases.",
        },
      ],
    },
    {
      category: "Security & Performance Optimization",
      icon: <ShieldIcon />,
      gradient: "from-red-500 to-pink-600",
      items: [
        {
          question: "How do you ensure application security?",
          answer:
            "I implement comprehensive security measures including JWT authentication, OAuth 2.0, input validation and sanitization, SQL injection prevention, XSS protection, CSRF tokens, and secure headers. I also conduct security audits, implement rate limiting, and follow OWASP security guidelines.",
        },
        {
          question:
            "What performance optimization techniques do you implement?",
          answer:
            "I optimize applications through code splitting, lazy loading, image optimization, CDN implementation, database query optimization, caching strategies, and bundle size reduction. I also implement server-side rendering (SSR) or static site generation (SSG) when appropriate for SEO and performance benefits.",
        },
        {
          question: "How do you handle application monitoring and debugging?",
          answer:
            "I implement comprehensive logging with structured logs, error tracking with Sentry or Bugsnag, performance monitoring with APM tools, and real-time analytics. I also set up alerts for critical issues, implement health checks, and use profiling tools to identify bottlenecks.",
        },
      ],
    },
    {
      category: "Modern Development Practices",
      icon: <RocketIcon />,
      gradient: "from-orange-500 to-yellow-600",
      items: [
        {
          question: "What development methodologies do you follow?",
          answer:
            "I follow Agile/Scrum methodologies with sprint planning, daily standups, and retrospectives. I practice Test-Driven Development (TDD), implement comprehensive testing with Jest, Cypress, and Playwright, and maintain high code coverage with automated testing pipelines.",
        },
        {
          question: "How do you ensure code quality and maintainability?",
          answer:
            "I write clean, documented code following SOLID principles, implement proper Git workflows with feature branches and pull requests, use code linters (ESLint, Prettier), conduct thorough code reviews, and maintain comprehensive documentation for APIs and system architecture.",
        },
        {
          question: "Do you work with modern development tools and workflows?",
          answer:
            "Yes, I use modern IDEs like VS Code with extensions, implement hot reloading for development, use package managers like npm/yarn, work with monorepos using tools like Nx or Lerna, and leverage AI-assisted development tools while maintaining code quality and security standards.",
        },
      ],
    },
    {
      category: "Project Management & Collaboration",
      icon: <SettingsIcon />,
      gradient: "from-violet-500 to-purple-600",
      items: [
        {
          question:
            "How do you manage full-stack projects from start to finish?",
          answer:
            "I start with requirements gathering and technical architecture planning, create detailed project roadmaps with milestones, provide regular progress updates with demos, and maintain transparent communication throughout development. I use tools like Jira, Linear, or Notion for project management.",
        },
        {
          question:
            "What&apos;s your process for handling project requirements and scope changes?",
          answer:
            "I begin with thorough requirement analysis and technical specifications, create user stories and acceptance criteria, and implement proper change management processes. I accommodate reasonable scope changes while maintaining timeline transparency and budget considerations through detailed documentation.",
        },
        {
          question: "Do you provide post-launch support and maintenance?",
          answer:
            "Yes, I offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, feature enhancements, server maintenance, and database optimization. I also provide documentation, training, and can establish long-term maintenance contracts based on your needs.",
        },
      ],
    },
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden w-screen ml-[calc(-50vw+50%)]">
      {/* Simplified Background - reduced blur and opacity */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-5"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-7"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-r from-emerald-500 to-blue-400 rounded-full blur-xl opacity-5"></div>{" "}
        {/* Adjusted opacity and blur */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Simplified Header - removed shadow and excessive hover effects */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl mb-6 relative overflow-hidden">
            <HelpIcon />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4 leading-tight">
            Full-Stack Developer
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              FAQ
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about my full-stack development
            expertise, from frontend to backend, DevOps to deployment.
            <span className="block sm:inline text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text sm:ml-1 mt-2 sm:mt-0 font-semibold">
              Let&apos;s build the future together! 🚀
            </span>
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`transition-none`}>
              {/* Category Header - simplified hover effects */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                <div
                  className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg relative overflow-hidden`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex-shrink">
                  {category.category}
                </h3>
                <div
                  className={`flex-1 h-0.5 bg-gradient-to-r ${category.gradient} opacity-30 sm:opacity-40 md:opacity-50 ml-2 sm:ml-3`}
                ></div>
              </div>

              {/* FAQ Items */}
              <div className="grid gap-3 sm:gap-4 md:gap-5">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.has(globalIndex);

                  return (
                    <div
                      key={itemIndex}
                      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-white/8 transition-colors duration-300 hover:border-purple-500/30"
                    >
                      <button
  onClick={() => toggleItem(globalIndex)}
  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4"
>
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-white leading-relaxed flex-1 pr-2">
                          {item.question}
                        </span>
                        <div
                          className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full transition-all duration-300 mt-0.5 sm:mt-0 ${
                            isOpen
                              ? `bg-gradient-to-r ${category.gradient}`
                              : `bg-white/10 border border-white/20`
                          }`}
                        >
                          {isOpen ? <MinusIcon /> : <PlusIcon />}
                        </div>
                      </button>

                      {/* Answer Content */}
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "max-h-[500px] pb-4 sm:pb-5 md:pb-6 opacity-100"
                            : "max-h-0 pb-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <div
  className={`border-t border-gradient-to-r ${category.gradient} opacity-20 pt-4 sm:pt-5 px-4 sm:px-6 md:px-8 relative`}
>
  <div
    className={`absolute top-0 left-4 sm:left-6 md:left-8 w-16 h-0.5 bg-gradient-to-r ${category.gradient} opacity-60`}
  ></div>
  <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
  {item.answer}
</p>
</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - reduced animations */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div className="relative bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md overflow-hidden">
            <ZapIcon />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-lg sm:max-w-xl mx-auto leading-relaxed">
              Let&apos;s discuss your full-stack development needs and bring
              your vision to life with cutting-edge technology and best
              practices.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6 justify-center items-center max-w-4xl mx-auto">
              <a
                href="mailto:abdul.ahadt732@gmail.com"
                className="group w-full sm:w-auto min-w-[200px] lg:min-w-[220px] px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white text-sm sm:text-base font-bold rounded-xl hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 transform cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MailIcon />
                <span className="relative z-10">Let&apos;s Build Together</span>
              </a>

              <a
                href="https://wa.me/923259684493?text=Hi%20there!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto min-w-[200px] lg:min-w-[220px] px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm sm:text-base font-bold rounded-xl hover:from-green-600 hover:to-green-700 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 transform cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <WhatsAppIcon />
                <span className="relative z-10">WhatsApp Chat</span>
              </a>

              <a
                href="src/portfolios"
                className="group w-full sm:w-auto min-w-[200px] lg:min-w-[220px] px-8 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-bold rounded-xl border border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 transform cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <EyeIcon />
                <span className="relative z-10">View My Work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
