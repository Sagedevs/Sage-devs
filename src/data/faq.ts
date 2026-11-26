import { businessHoursAnswer } from '@/lib/business';
export const faqCategories = [
    {
      category: "Full-Stack Development & Architecture",
      gradient: "from-purple-500 to-indigo-600",
      items: [
        {
          question: "What full-stack technologies do you specialize in?",
          answer:
            "We specialize in the MERN/MEAN stack (MongoDB, Express.js, React/Angular, Node.js) and modern alternatives like Next.js with TypeScript, PostgreSQL, and cloud services. We're also proficient in Python (Django/Flask), PHP (Laravel), and Java (Spring Boot) for backend development, with expertise in both SQL and NoSQL databases.",
        },
        {
          question: "How do you architect scalable full-stack applications?",
          answer:
            "We design applications using microservices architecture, implement proper separation of concerns with clean architecture patterns, use containerization with Docker, and leverage cloud-native solutions on AWS, Azure, or GCP. We also implement proper caching strategies, database sharding, and load balancing for optimal scalability.",
        },
        {
          question:
            "Can you handle both frontend and backend development equally well?",
          answer:
            "Absolutely! We have deep expertise in both domains. On the frontend, we create responsive, interactive UIs with React, Vue, or Angular, implementing state management, routing, and modern UI/UX patterns. On the backend, we build robust APIs, handle authentication, manage databases, and ensure security and performance optimization.",
        },
        {
          question: "What's your approach to API design and integration?",
          answer:
            "We design RESTful and GraphQL APIs following industry standards, implement proper versioning, comprehensive documentation with Swagger/OpenAPI, and ensure backward compatibility. We also handle third-party integrations, webhooks, real-time communications with WebSockets, and implement proper error handling and rate limiting.",
        },
      ],
    },
    {
      category: "Database Design & Management",
      gradient: "from-emerald-500 to-teal-600",
      items: [
        {
          question: "What database technologies do you work with?",
          answer:
            "We work with both SQL databases (PostgreSQL, MySQL, SQLite) and NoSQL solutions (MongoDB, DynamoDB, Redis). We also have experience with specialized databases like Elasticsearch for search functionality, Neo4j for graph data, and time-series databases like InfluxDB for analytics applications.",
        },
        {
          question: "How do you ensure database performance and scalability?",
          answer:
            "We implement proper database indexing, query optimization, connection pooling, and caching strategies using Redis or Memcached. For scalability, we design database schemas with normalization principles, implement read replicas, database sharding, and use CDNs for static content delivery.",
        },
        {
          question: "Do you handle database migrations and data modeling?",
          answer:
            "Yes, we create comprehensive data models, design efficient database schemas, and implement automated migration scripts. We use tools like Prisma, Sequelize, or Mongoose for ORM/ODM, ensure data integrity with proper constraints, and handle complex relationships and transactions effectively.",
        },
      ],
    },
    {
      category: "DevOps & Cloud Infrastructure",
      gradient: "from-blue-500 to-cyan-600",
      items: [
        {
          question: "What cloud platforms and DevOps tools do you use?",
          answer:
            "We deploy on AWS, Azure, and Google Cloud Platform using services like EC2, Lambda, RDS, S3, and Kubernetes. For DevOps, we implement CI/CD pipelines with GitHub Actions, GitLab CI, or Jenkins, use Docker for containerization, and Terraform for infrastructure as code.",
        },
        {
          question: "How do you handle application deployment and monitoring?",
          answer:
            "We set up automated deployment pipelines with blue-green or rolling deployments, implement comprehensive monitoring with tools like DataDog, New Relic, or CloudWatch, and establish logging systems with ELK stack. We also configure auto-scaling, load balancers, and disaster recovery procedures.",
        },
        {
          question: "Can you implement serverless architectures?",
          answer:
            "Absolutely! We build serverless applications using AWS Lambda, Azure Functions, or Vercel Functions, implement event-driven architectures, and use serverless databases like DynamoDB or FaunaDB. This approach reduces costs, improves scalability, and simplifies maintenance for many use cases.",
        },
      ],
    },
    {
      category: "Security & Performance Optimization",
      gradient: "from-red-500 to-pink-600",
      items: [
        {
          question: "How do you ensure application security?",
          answer:
            "We implement comprehensive security measures including JWT authentication, OAuth 2.0, input validation and sanitization, SQL injection prevention, XSS protection, CSRF tokens, and secure headers. We also conduct security audits, implement rate limiting, and follow OWASP security guidelines.",
        },
        {
          question:
            "What performance optimization techniques do you implement?",
          answer:
            "We optimize applications through code splitting, lazy loading, image optimization, CDN implementation, database query optimization, caching strategies, and bundle size reduction. We also implement server-side rendering (SSR) or static site generation (SSG) when appropriate for SEO and performance benefits.",
        },
        {
          question: "How do you handle application monitoring and debugging?",
          answer:
            "We implement comprehensive logging with structured logs, error tracking with Sentry or Bugsnag, performance monitoring with APM tools, and real-time analytics. We also set up alerts for critical issues, implement health checks, and use profiling tools to identify bottlenecks.",
        },
      ],
    },
    {
      category: "Modern Development Practices",
      gradient: "from-orange-500 to-yellow-600",
      items: [
        {
          question: "What development methodologies do you follow?",
          answer:
            "We follow Agile/Scrum methodologies with sprint planning, daily standups, and retrospectives. We practice Test-Driven Development (TDD), implement comprehensive testing with Jest, Cypress, and Playwright, and maintain high code coverage with automated testing pipelines.",
        },
        {
          question: "How do you ensure code quality and maintainability?",
          answer:
            "We write clean, documented code following SOLID principles, implement proper Git workflows with feature branches and pull requests, use code linters (ESLint, Prettier), conduct thorough code reviews, and maintain comprehensive documentation for APIs and system architecture.",
        },
        {
          question: "Do you work with modern development tools and workflows?",
          answer:
            "Yes, we use modern IDEs like VS Code with extensions, implement hot reloading for development, use package managers like npm/yarn, work with monorepos using tools like Nx or Lerna, and leverage AI-assisted development tools while maintaining code quality and security standards.",
        },
      ],
    },
    {
      category: "Project Management & Collaboration",
      gradient: "from-violet-500 to-purple-600",
      items: [
        { question: "What are your working hours and timezone?", answer: businessHoursAnswer },
        {
          question:
            "How do you manage full-stack projects from start to finish?",
          answer:
            "We start with requirements gathering and technical architecture planning, create detailed project roadmaps with milestones, provide regular progress updates with demos, and maintain transparent communication throughout development. We use tools like Jira, Linear, or Notion for project management.",
        },
        {
          question:
            "What's your process for handling project requirements and scope changes?",
          answer:
            "We begin with thorough requirement analysis and technical specifications, create user stories and acceptance criteria, and implement proper change management processes. We accommodate reasonable scope changes while maintaining timeline transparency and budget considerations through detailed documentation.",
        },
        {
          question: "Do you provide post-launch support and maintenance?",
          answer:
            "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, feature enhancements, server maintenance, and database optimization. We also provide documentation, training, and can establish long-term maintenance contracts based on your needs.",
        },
      ],
    },
  ];
