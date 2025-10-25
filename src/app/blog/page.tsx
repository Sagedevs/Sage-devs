"use client";
import React, { useState } from "react";
import Image from "next/image";

// Define types for better TypeScript support
interface BlogPost {
  id: number;
  title: string;
  image: string;
  href: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Custom AI or Off-the-Shelf AI – Which Is the Right Solution for Your Business?",
    image: "/blog/1.webp",
    href: "/blog/custom-vs-off-shelf-ai",
    category: "AI Strategy",
    excerpt: "Explore the key differences between custom and off-the-shelf AI solutions to make the right choice for your business needs.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    content: `# Understanding AI Solutions for Your Business

Making the right choice between custom AI and off-the-shelf solutions can determine the success of your AI initiative. This comprehensive guide will help you understand the key differences and make an informed decision based on your specific business needs.

## The Current AI Landscape

The artificial intelligence market has evolved rapidly over the past few years, offering businesses two primary paths for implementation. Organizations can either develop custom AI solutions tailored to their specific requirements or implement pre-built, off-the-shelf AI tools that offer immediate functionality.

### Custom AI Solutions: Complete Control

Custom AI development involves building machine learning models and systems specifically designed for your business requirements. This approach offers several key advantages:

- Complete Control: Full ownership of the algorithm, data processing, and model architecture
- Perfect Fit: Solutions designed exactly for your use case and business logic
- Competitive Advantage: Unique capabilities that competitors cannot easily replicate
- Scalability: Built to grow with your business needs and requirements
- Data Security: Complete control over how your sensitive data is processed and stored

However, custom AI requires significant investment in time, resources, and specialized expertise. Organizations must consider the long-term commitment required for development, maintenance, and continuous improvement.

### Off-the-Shelf AI Solutions: Rapid Implementation

Pre-built AI tools and platforms offer ready-to-use functionality with minimal setup time. These solutions provide:

- Quick Implementation: Deploy proven solutions in days or weeks rather than months
- Lower Initial Cost: Avoid development expenses and technical hiring overhead
- Proven Reliability: Battle-tested systems with established track records
- Regular Updates: Continuous improvements without internal development resources
- Support Infrastructure: Dedicated customer support and documentation

The trade-off is less customization and potential dependency on external vendors for critical business functions.

## Key Decision Factors

The decision between custom and off-the-shelf AI depends on several critical factors:

1. Budget and Timeline: Custom solutions require higher upfront investment and longer development cycles
2. Technical Expertise: Consider your team's AI development capabilities and available resources
3. Business Requirements: Unique or highly specialized needs may necessitate custom development
4. Competitive Advantage: How critical is AI differentiation to your overall business strategy?
5. Data Sensitivity: Regulatory requirements or proprietary data may favor custom solutions
6. Integration Needs: Compatibility with existing systems and workflows

## Making the Right Choice

For most businesses, a hybrid approach often works best. Start with off-the-shelf solutions for standard functionality and gradually move to custom development for critical, differentiating features. This allows you to gain experience with AI while minimizing initial risk and investment.

## Conclusion

Both custom and off-the-shelf AI solutions have their place in modern business strategy. The key is to clearly define your requirements, timeline, and budget constraints before making a decision. Remember that this choice isn't permanent – many successful organizations evolve their AI strategy over time as their needs and capabilities mature.`
  },
  {
    id: 2,
    title: "10 Ways AI is Revolutionizing Mining Operations in Australia",
    image: "/blog/2.webp",
    href: "/blog/ai-mining-operations",
    category: "Industry Applications",
    excerpt: "Discover how artificial intelligence is transforming mining operations across Australia with innovative solutions.",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    content: `# AI Revolution in Australian Mining

Australia's mining sector is experiencing a technological transformation, with artificial intelligence leading the charge in improving efficiency, safety, and sustainability across operations.

## The Mining AI Landscape

From the Pilbara's iron ore mines to Queensland's coal operations, AI is reshaping how Australia extracts and processes its natural resources. This transformation represents billions of dollars in potential savings and significant improvements in worker safety.

### Key AI Applications

1. Predictive Maintenance: AI algorithms analyze equipment data to predict failures before they occur
2. Autonomous Vehicles: Self-driving trucks and drilling equipment increase efficiency and safety
3. Exploration Optimization: Machine learning identifies promising exploration sites
4. Supply Chain Management: AI optimizes logistics and resource allocation
5. Environmental Monitoring: Real-time analysis of environmental impact
6. Quality Control: Computer vision systems inspect ore quality and processing efficiency
7. Resource Planning: AI-driven forecasting for production scheduling
8. Safety Monitoring: Real-time hazard detection and worker safety systems
9. Energy Optimization: Smart systems reduce energy consumption across operations
10. Cost Management: AI analytics identify cost-saving opportunities

## Real-World Implementations

Major Australian mining companies like Rio Tinto and BHP have already deployed AI systems that manage entire mining operations remotely, resulting in significant cost savings and improved safety records.

### Success Stories

Rio Tinto's autonomous truck fleet in the Pilbara region operates 24/7, reducing operational costs by 15% while improving safety outcomes. BHP's predictive maintenance systems have reduced unplanned downtime by 25% across their operations.

## The Future of AI in Mining

As AI technology continues to evolve, we can expect even more sophisticated applications, including fully autonomous mining operations and advanced environmental protection systems. The integration of IoT sensors, machine learning, and robotics will create smart mines that operate with minimal human intervention.`
  },
  {
    id: 3,
    title: "15 Use Cases and Examples of How AI Is Transforming the Fitness Industry",
    image: "/blog/3.webp",
    href: "/blog/ai-fitness-industry",
    category: "Healthcare & Fitness",
    excerpt: "From personalized workout plans to injury prevention, see how AI is reshaping the fitness landscape.",
    date: "Mar 10, 2024",
    readTime: "10 min read",
    content: `# AI Transformation in the Fitness Industry

The fitness industry is experiencing a revolutionary change as artificial intelligence transforms how we approach health, exercise, and wellness. From personalized training programs to advanced injury prevention, AI is making fitness more effective, accessible, and engaging than ever before.

## The Rise of Smart Fitness

Traditional one-size-fits-all fitness approaches are becoming obsolete as AI enables hyper-personalized experiences that adapt to individual needs, preferences, and progress in real-time.

### Key AI Applications in Fitness

1. Personalized Training Programs: AI algorithms create customized workout plans based on individual fitness levels, goals, and preferences
2. Form Correction: Computer vision technology provides real-time feedback on exercise form and technique
3. Injury Prevention: Predictive models identify potential injury risks before they occur
4. Nutrition Optimization: AI-powered meal planning based on fitness goals and dietary restrictions
5. Recovery Monitoring: Advanced analytics track recovery metrics and optimize rest periods
6. Virtual Personal Trainers: AI-powered coaches provide 24/7 guidance and motivation
7. Wearable Integration: Smart devices collect and analyze biometric data for insights
8. Workout Adaptation: Real-time adjustments based on performance and fatigue levels
9. Progress Tracking: Comprehensive analysis of fitness improvements over time
10. Social Fitness: AI-powered matching for workout partners and group activities
11. Sleep Optimization: AI analyzes sleep patterns to improve recovery
12. Mental Health Support: Mood tracking and stress management recommendations
13. Equipment Optimization: Smart gym equipment that adapts to user preferences
14. Rehabilitation Programs: AI-assisted physical therapy and recovery protocols
15. Fitness Gamification: AI creates engaging challenges and rewards systems

### Real-World Examples

Leading fitness apps and platforms are already implementing AI to deliver superior user experiences. Companies like Mirror, Tonal, and Peloton use AI to provide personalized coaching and real-time adjustments. Fitbit and Apple Watch leverage AI for comprehensive health monitoring and insights.

## The Future of AI Fitness

As AI technology continues to advance, we can expect even more sophisticated applications, including virtual personal trainers, predictive health monitoring, and fully integrated wellness ecosystems that connect fitness, nutrition, sleep, and mental health.

## Conclusion

AI is not just changing the fitness industry – it's revolutionizing how we think about health and wellness. By embracing these technologies, fitness professionals and enthusiasts can achieve better results while reducing the risk of injury and improving overall quality of life.`
  },
  {
    id: 4,
    title: "15 AI Business Ideas in Australia to Kickstart Your Entrepreneurial Journey",
    image: "/blog/4.webp",
    href: "/blog/ai-business-ideas",
    category: "Business Innovation",
    excerpt: "Innovative AI business opportunities specifically tailored for the Australian market and ecosystem.",
    date: "Mar 8, 2024",
    readTime: "12 min read",
    content: `# AI Business Opportunities in Australia

Australia's thriving tech ecosystem and government support for AI innovation create unique opportunities for entrepreneurs looking to build AI-powered businesses. This comprehensive guide explores 15 promising AI business ideas specifically tailored for the Australian market.

## The Australian AI Landscape

With significant government investment and a supportive startup ecosystem, Australia is positioning itself as a global AI hub. The Australian government's AI Action Plan and various state-level initiatives provide substantial support for AI startups.

### Promising AI Business Sectors

1. AgTech Solutions: AI-powered farming and livestock management systems
2. Mining Technology: Autonomous systems for Australia's massive mining industry
3. Healthcare AI: Telemedicine and diagnostic tools for rural and remote areas
4. Smart Cities: Urban planning and infrastructure optimization
5. Financial Services: AI-powered fintech solutions for banking and investment
6. Tourism Intelligence: AI-powered travel recommendations and experience personalization
7. Wildlife Conservation: AI monitoring systems for endangered species protection
8. Renewable Energy: Smart grid optimization and energy management
9. Aquaculture: AI systems for sustainable fish farming and ocean monitoring
10. Retail Analytics: Personalized shopping experiences and inventory optimization
11. Transport Logistics: Route optimization for Australia's vast distances
12. Educational Technology: Personalized learning platforms for remote education
13. Cybersecurity: AI-powered threat detection for critical infrastructure
14. Weather Prediction: Enhanced meteorological services for agriculture and mining
15. Carbon Management: AI systems for emissions tracking and reduction

### Market Opportunities

Australia's unique challenges, from vast distances to extreme weather conditions, create specific market needs that AI can address effectively. The country's strong regulatory framework and stable economy make it an ideal testing ground for AI innovations.

## Funding and Support

The Australian startup ecosystem offers numerous funding opportunities, from government grants like the Entrepreneurs' Programme to venture capital firms specializing in AI startups. The CSIRO and various universities provide research partnerships and technical support.

## Getting Started

Success in the Australian AI market requires understanding local regulations, market needs, and available resources. Building partnerships with local universities and research institutions can provide valuable support and expertise. Consider joining AI meetups and accelerator programs to build your network.`
  },
  {
    id: 5,
    title: "How to Scale Your AI Project without Overspending?",
    image: "/blog/5.webp",
    href: "/blog/scale-ai-project",
    category: "Project Management",
    excerpt: "Learn cost-effective strategies to scale your AI initiatives while maintaining quality and performance.",
    date: "Mar 5, 2024",
    readTime: "7 min read",
    content: `# Scaling AI Projects Cost-Effectively

One of the biggest challenges in AI development is scaling projects efficiently without breaking the budget. Many organizations struggle with exponentially increasing costs as their AI initiatives grow. This guide provides proven strategies to scale your AI projects while maintaining fiscal responsibility.

## Understanding AI Scaling Costs

AI projects face unique scaling challenges that differ from traditional software development. Compute costs, data storage, and model training expenses can quickly spiral out of control without proper planning and optimization strategies.

### Common Cost Pitfalls

1. Unoptimized Model Training: Running inefficient training processes that waste computational resources
2. Over-Provisioned Infrastructure: Paying for more compute power than actually needed
3. Data Storage Inefficiencies: Poor data management practices leading to unnecessary storage costs
4. Lack of Monitoring: Not tracking resource usage and costs in real-time
5. Redundant Processing: Duplicate computations and unnecessary data transfers
6. Poor Resource Planning: Inadequate capacity planning leading to over or under-provisioning

### Cost Optimization Strategies

**Infrastructure Management**: Use cloud services efficiently by implementing auto-scaling and choosing the right instance types for your workloads. Consider spot instances for non-critical workloads and reserved instances for predictable usage patterns.

**Model Optimization**: Implement techniques like model pruning, quantization, and knowledge distillation to reduce computational requirements. Use transfer learning to leverage pre-trained models and reduce training costs.

**Data Management**: Implement effective data lifecycle management and use appropriate storage tiers for different data types. Archive old data to cheaper storage options and implement data compression where possible.

**Resource Monitoring**: Deploy comprehensive monitoring solutions to track costs and usage patterns in real-time. Set up alerts for unusual spending patterns and implement automated cost controls.

## Best Practices for Scaling

Start small with proof-of-concept projects and gradually scale based on proven results. Implement proper cost monitoring from day one and regularly review and optimize your resource usage. Consider hybrid cloud approaches for maximum flexibility and cost control.

### Scaling Methodology

1. Prototype Phase: Start with minimal resources and basic functionality
2. Pilot Phase: Scale to handle real-world data volumes with cost monitoring
3. Production Phase: Implement full-scale deployment with optimization
4. Optimization Phase: Continuous improvement and cost reduction

## Conclusion

Successful AI scaling requires careful planning, continuous optimization, and smart resource management. By following these strategies, organizations can achieve their AI goals without overspending on infrastructure and development costs. Remember that cost optimization is an ongoing process, not a one-time activity.`
  },
  {
    id: 6,
    title: "React vs Vue.js in 2024: A Complete Developer's Guide",
    image: "/blog/6.webp",
    href: "/blog/react-vs-vue-2024",
    category: "Web Development",
    excerpt: "An in-depth comparison of React and Vue.js frameworks to help you choose the right tool for your next project.",
    date: "Mar 3, 2024",
    readTime: "9 min read",
    content: `# React vs Vue.js in 2024: The Ultimate Comparison

Choosing between React and Vue.js in 2024 requires understanding their current state, ecosystem, and how they fit into modern web development. This comprehensive guide will help you make an informed decision for your next project.

## Core Differences

### React
- **Maintained by**: Facebook
- **Learning Curve**: Moderate to Steep
- **Performance**: Virtual DOM
- **Popularity**: Higher market share
- **Ecosystem**: Larger, more mature

### Vue.js
- **Maintained by**: Open-source community (originally Evan You)
- **Learning Curve**: Gentle
- **Performance**: Virtual DOM (similar to React)
- **Popularity**: Growing steadily
- **Ecosystem**: Smaller but well-maintained

## When to Choose Which?

### Choose React if:
- You're building a large-scale application
- You need maximum flexibility
- You want access to a vast ecosystem of libraries
- You're working in a team that already knows React
- You need strong TypeScript support

### Choose Vue if:
- You're new to frontend frameworks
- You prefer a more structured approach
- You want something lightweight
- You value simplicity and ease of integration
- You're working on smaller to medium-sized projects

## Performance Comparison

Both frameworks offer excellent performance with some key differences:

- **Initial Load**: Vue typically has a smaller bundle size
- **Updates**: Both use virtual DOM, but React's Fiber architecture offers better scheduling
- **Memory Usage**: Similar, but Vue can be more efficient in some scenarios

## Future Outlook

- **React**: Continues to evolve with concurrent features and server components
- **Vue**: Vue 3's Composition API brings it closer to React's flexibility

## Conclusion

Both React and Vue.js are excellent choices in 2024. React offers more job opportunities and a larger ecosystem, while Vue provides a gentler learning curve and cleaner syntax. Your choice should depend on your specific project requirements and team expertise.`
  },
  {
    id: 7,
    title: "Building Scalable APIs with Node.js and Express: Best Practices",
    image: "/blog/7.webp",
    href: "/blog/scalable-nodejs-apis",
    category: "Backend Development",
    excerpt: "Master the art of creating robust, scalable APIs using Node.js and Express with industry best practices.",
    date: "Mar 1, 2024",
    readTime: "11 min read",
    content: `# Building Scalable APIs with Node.js and Express

Creating scalable APIs is crucial for modern web applications. This guide covers the best practices for building production-ready Node.js and Express APIs that can handle growth and high traffic.

## Project Structure

A well-organized project structure is essential for maintainability:

\`\`\`
src/
  ├── config/         # Configuration files
  ├── controllers/    # Route controllers
  ├── middleware/     # Custom middleware
  ├── models/         # Database models
  ├── routes/         # Route definitions
  ├── services/       # Business logic
  ├── utils/          # Helper functions
  ├── validations/    # Request validations
  └── app.js          # Express app setup
\`\`\`

## Essential Middleware

### 1. Body Parser
\`\`\`javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
\`\`\`

### 2. CORS
\`\`\`javascript
const cors = require('cors');
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*'
}));
\`\`\`

### 3. Rate Limiting
\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
\`\`\`

## Error Handling

### Global Error Handler
\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});
\`\`\`

## Security Best Practices

1. **Helmet.js**: Secure your app by setting various HTTP headers
2. **Input Validation**: Always validate and sanitize user input
3. **Authentication**: Use JWT with refresh tokens
4. **HTTPS**: Enforce HTTPS in production

## Performance Optimization

1. **Response Compression**
2. **Caching** with Redis
3. **Database Optimization**
   - Use connection pooling
   - Implement proper indexing
   - Use transactions for multiple operations

## Testing

1. **Unit Tests**: Test individual functions and methods
2. **Integration Tests**: Test API endpoints
3. **E2E Tests**: Test complete user flows

## Monitoring and Logging

- Use Winston or Pino for logging
- Implement request logging middleware
- Set up monitoring with tools like PM2 or New Relic

## Deployment

1. **Environment Variables**: Use dotenv for local development
2. **Process Manager**: Use PM2 or similar
3. **Containerization**: Dockerize your application
4. **CI/CD**: Set up automated testing and deployment

## Conclusion

Building scalable APIs with Node.js and Express requires careful planning and adherence to best practices. By following these guidelines, you can create robust, secure, and performant APIs that can handle growth and high traffic.`
  },
  {
    id: 8,
    title: "CSS Grid vs Flexbox: When to Use Which",
    image: "/blog/8.webp",
    href: "/blog/css-grid-vs-flexbox",
    category: "Frontend Development",
    excerpt: "Understand the differences between CSS Grid and Flexbox to make informed layout decisions in your projects.",
    date: "Feb 28, 2024",
    readTime: "6 min read",
    content: `# CSS Grid vs Flexbox: When to Use Which

Understanding when to use CSS Grid versus Flexbox is crucial for modern web development. Both are powerful layout tools, but they serve different purposes and work best in different scenarios.

## Key Differences

### CSS Grid
- **Two-dimensional** layout system (rows and columns)
- **Grid-based** approach for complex layouts
- **Explicit** control over both rows and columns
- **Ideal for** page layouts and complex designs
- **Better for** overall page structure

### Flexbox
- **One-dimensional** layout system (either rows OR columns)
- **Content-based** approach
- **Implicit** sizing based on content
- **Ideal for** components and smaller UI elements
- **Better for** aligning items within a container

## When to Use Grid

1. **Complex Layouts** - When you need both rows and columns
2. **Precise Control** - When you need exact placement of elements
3. **Asymmetrical Designs** - For non-uniform layouts
4. **Overlapping Elements** - When elements need to overlap
5. **Responsive Design** - Great for responsive layouts with media queries

## When to Use Flexbox

1. **Single Dimension** - When working in one dimension (row OR column)
2. **Content Distribution** - For distributing space among items
3. **Alignment** - For aligning items within a container
4. **Dynamic Content** - When content size is unknown or dynamic
5. **Navigation Bars** - Perfect for responsive navigation

## Can They Work Together?

Absolutely! Grid and Flexbox work great together:
- Use **Grid** for the overall page layout
- Use **Flexbox** for components within grid cells
- Nest Flexbox inside Grid or vice versa as needed

## Performance Considerations

- **Grid** can be more performant for large-scale layouts
- **Flexbox** might be better for small components
- Test performance with your specific use case

## Browser Support

- Both have excellent modern browser support
- Use feature queries for progressive enhancement
- Consider autoprefixer for better cross-browser compatibility

## Conclusion

Choose **Grid** when you need control over both rows and columns. Choose **Flexbox** when you need to align items in a single dimension. For most projects, you'll likely use both in combination to create flexible, responsive layouts.`
  },
  {
    id: 9,
    title: "Progressive Web Apps: The Complete Guide",
    image: "/blog/9.webp",
    href: "/blog/progressive-web-apps-guide",
    category: "Mobile Development",
    excerpt: "Learn how to build fast, reliable, and engaging Progressive Web Apps that work across all devices.",
    date: "Feb 25, 2024",
    readTime: "13 min read",
    content: `# Progressive Web Apps (PWAs): The Complete Guide

Progressive Web Apps combine the best of web and mobile apps, offering users an app-like experience directly from their browsers. This guide covers everything you need to know about building modern PWAs.

## What Makes a PWA?

1. **Progressive** - Work for every user, regardless of browser choice
2. **Responsive** - Fit any form factor: desktop, mobile, tablet
3. **Connectivity Independent** - Service workers enable offline functionality
4. **App-like** - Feel like a native app with app-style interactions
5. **Fresh** - Always up-to-date thanks to service workers
6. **Safe** - Served via HTTPS to prevent snooping
7. **Discoverable** - Identifiable as "applications" thanks to W3C manifests
8. **Re-engageable** - Make re-engagement easy through features like push notifications
9. **Installable** - Allow users to add apps to their home screens
10. **Linkable** - Easily share via URL, no complex installation required

## Core Technologies

### 1. Service Workers
- JavaScript files that run in the background
- Handle network requests programmatically
- Enable offline functionality
- Support push notifications

### 2. Web App Manifest
- JSON file that controls how your app appears
- Defines home screen icons, splash screens, and more
- Enables "Add to Home Screen" functionality

### 3. Application Shell Architecture
- Loads the minimal HTML, CSS, and JavaScript
- Provides a fast first paint
- Caches the shell for instant loading on subsequent visits

## Building a Basic PWA

### 1. Create a Web App Manifest
\`\`\`json
{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/blog/1.webp",
      "sizes": "192x192",
      "type": "image/webp"
    },
    {
      "src": "/blog/2.webp",
      "sizes": "512x512",
      "type": "image/webp"
    }
  ]
}
\`\`\`

### 2. Register a Service Worker
\`\`\`javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
\`\`\`

### 3. Create a Basic Service Worker
\`\`\`javascript
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js',
  '/blog/1.webp',
  '/blog/2.webp',
  '/blog/3.webp',
  '/blog/4.webp',
  '/blog/5.webp',
  '/blog/6.webp',
  '/blog/7.webp',
  '/blog/8.webp',
  '/blog/9.webp',
  '/blog/10.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
\`\`\`

## Advanced PWA Features

### 1. Background Sync
- Sync data when connection is restored
- Great for forms and offline content

### 2. Push Notifications
- Re-engage users with timely updates
- Requires user permission

### 3. Web Share API
- Native sharing capabilities
- Works with the device's share dialog

### 4. Web App Install Banners
- Prompt users to install your PWA
- Customizable install experience

## Performance Optimization

1. **Critical Rendering Path** - Optimize for first meaningful paint
2. **Code Splitting** - Load only what's needed
3. **Asset Optimization** - Compress images and minify code
4. **Caching Strategies** - Implement effective caching
5. **Lazy Loading** - Defer non-critical resources

## Testing and Debugging

- Use Lighthouse in Chrome DevTools
- Test on multiple devices and networks
- Monitor Web Vitals
- Check browser compatibility

## Deployment

1. **HTTPS** - Required for service workers
2. **Manifest** - Link in HTML head
3. **Service Worker** - Register on your pages
4. **Icons** - Provide multiple sizes
5. **Splash Screens** - For better mobile experience

## Conclusion

PWAs represent the future of web development, offering app-like experiences with the reach of the web. By implementing the core PWA technologies and following best practices, you can create fast, engaging, and reliable applications that work across all devices and platforms.`
  },
  {
    id: 10,
    title: "Web Performance Optimization: From 3s to 300ms Load Times",
    image: "/blog/10.webp",
    href: "/blog/web-performance-optimization",
    category: "Performance",
    excerpt: "Proven techniques and strategies to dramatically improve your website's loading speed and user experience.",
    date: "Feb 22, 2024",
    readTime: "8 min read",
    content: `# Web Performance Optimization: From 3s to 300ms Load Times

In today's fast-paced digital world, website performance is not just a technical metric-it directly impacts user experience, conversion rates, and search engine rankings. This guide will help you optimize your website's performance to achieve lightning-fast load times.

## Why Performance Matters

- **User Experience**: 53% of mobile site visits are abandoned if pages take longer than 3 seconds to load
- **Conversion Rates**: A 1-second delay can result in a 7% reduction in conversions
- **SEO Impact**: Google uses page speed as a ranking factor in search results
- **Bounce Rates**: Slow-loading sites have significantly higher bounce rates

## Critical Rendering Path Optimization

1. **Minimize Critical Resources**
   - Eliminate render-blocking resources
   - Defer non-critical CSS and JavaScript
   - Inline critical CSS

2. **Optimize CSS**
   - Minify CSS files
   - Remove unused CSS
   - Use media queries to load CSS conditionally

3. **JavaScript Optimization**
   - Defer non-essential JavaScript
   - Minify and compress JavaScript
   - Use code splitting and dynamic imports

## Image Optimization

1. **Choose the Right Format**
   - WebP for most images (with fallbacks)
   - SVG for icons and logos
   - Consider AVIF for better compression

2. **Responsive Images**
   - Use srcset and sizes attributes
   - Serve appropriately sized images for different viewports
   - Use modern image formats

3. **Lazy Loading**
   - Native lazy loading with loading="lazy"
   - Implement intersection observer for custom lazy loading
   - Consider low-quality image placeholders (LQIP)

## Network Optimization

1. **HTTP/2 and HTTP/3**
   - Enable HTTP/2 for multiplexing
   - Consider HTTP/3 for improved performance
   - Implement server push carefully

2. **CDN Implementation**
   - Distribute content globally
   - Cache static assets
   - Reduce latency with edge locations

3. **Caching Strategies**
   - Set proper cache headers
   - Implement service workers for offline support
   - Use versioned URLs for cache busting

## Advanced Techniques

1. **Preloading and Prefetching**
   - Use rel="preload" for critical resources
   - Implement resource hints (preconnect, dns-prefetch)
   - Predictive prefetching for user navigation

2. **Code Splitting**
   - Split code by routes
   - Dynamic imports for on-demand loading
   - React.lazy() for React applications

3. **Performance Budgets**
   - Set limits for page weight
   - Monitor third-party scripts
   - Regularly audit performance

## Monitoring and Maintenance

1. **Performance Metrics**
   - Track Core Web Vitals
   - Monitor First Contentful Paint (FCP)
   - Measure Time to Interactive (TTI)

2. **Tools**
   - Lighthouse for audits
   - WebPageTest for detailed analysis
   - Real User Monitoring (RUM)

## Conclusion

Achieving sub-300ms load times requires a combination of techniques and ongoing optimization. Start with the critical rendering path, optimize your assets, implement smart loading strategies, and continuously monitor performance. Remember that performance is a feature that directly impacts your bottom line.`
  }
];

const categories = ["All", "AI Strategy", "Industry Applications", "Healthcare & Fitness", "Business Innovation", "Project Management", "Web Development", "Backend Development", "Frontend Development", "Mobile Development", "Performance"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentView, setCurrentView] = useState("list");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Function to handle post navigation
  const navigateToPostById = (postId: number) => {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      setSelectedPost(post);
      setCurrentView("single");
      // Update the URL without causing a page reload
      window.history.pushState({}, '', `#blog-post-${postId}`);
      // Scroll to top when opening a post
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle hash-based navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#'
      if (!hash) {
        setCurrentView("list");
        return;
      }
      
      // Check if the hash matches a blog post ID (e.g., 'blog-post-1')
      const postMatch = hash.match(/blog-post-(\d+)/);
      if (postMatch) {
        const postId = parseInt(postMatch[1], 10);
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
          setSelectedPost(post);
          setCurrentView("single");
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      // If no post found, ensure we're in list view
      setCurrentView("list");
    };

    // Also handle popstate for back/forward navigation
    const handlePopState = () => {
      handleHashChange();
    };

    // Check hash on initial load
    handleHashChange();

    // Add event listeners
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []); // Empty dependency array as we don't need blogPosts here

  // State for copy link feedback
  const [showCopied, setShowCopied] = useState(false);

  // Social sharing functions
  const shareOnTwitter = () => {
    if (!selectedPost) return;
    const url = `${window.location.origin}${window.location.pathname}#blog-post-${selectedPost.id}`;
    const text = encodeURIComponent(`Check out this article: ${selectedPost.title} by @SageDevs`);
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    if (!selectedPost) return;
    const url = `${window.location.origin}${window.location.pathname}#blog-post-${selectedPost.id}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const copyToClipboard = async () => {
    if (!selectedPost) return;
    const url = `${window.location.origin}${window.location.pathname}#blog-post-${selectedPost.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000); // Hide after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000); // Hide after 2 seconds
      } catch (err) {
        console.error('Fallback copy failed: ', err);
      }
      document.body.removeChild(textArea);
    }
  };

  // Navigation functions
  const getNextPost = () => {
    if (!selectedPost) return null;
    const currentIndex = blogPosts.findIndex(post => post.id === selectedPost.id);
    return currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  };

  const getPreviousPost = () => {
    if (!selectedPost) return null;
    const currentIndex = blogPosts.findIndex(post => post.id === selectedPost.id);
    return currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  };

  const navigateToPost = (post: BlogPost) => {
    navigateToPostById(post.id);
  };


  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-500/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        {/* Dark gradient waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-950/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="relative z-10 pt-28 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Blog & Insights
          </h1>
          <p className="text-blue-300/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest in AI, web development, and technology. 
            Expert insights, tutorials, and industry analysis to fuel your growth.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 bg-black/40 border border-blue-500/20 rounded-full text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-black/30 text-blue-300 hover:bg-black/50 backdrop-blur-sm border border-blue-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid or Single Post */}
        {currentView === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => navigateToPost(post)}
                className="blog-post group bg-black/20 backdrop-blur-lg border border-blue-500/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-black/50">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/blog/${post.id % 5 + 1}.webp`;
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={post.id <= 5}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-blue-400/70 text-sm mb-3 space-x-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-white text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-blue-300/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-500 text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          // Single Blog Post View
          <div className="blog-post-detail max-w-4xl mx-auto mb-16">
            {/* Navigation Bar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => {
                  setCurrentView("list");
                  setSelectedPost(null);
                  window.history.pushState({}, '', '#');
                }}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                ← Back to Articles
              </button>
              
              {/* Post Navigation */}
              <div className="flex items-center space-x-4">
                {getPreviousPost() && (
                  <button
                    onClick={() => navigateToPost(getPreviousPost()!)}
                    className="flex items-center px-4 py-2 bg-black/30 hover:bg-black/50 text-blue-300 rounded-lg transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
                  >
                    ← Previous
                  </button>
                )}
                
                <span className="text-blue-400/70 text-sm">
                  {blogPosts.findIndex(post => post.id === selectedPost?.id) + 1} of {blogPosts.length}
                </span>
                
                {getNextPost() && (
                  <button
                    onClick={() => navigateToPost(getNextPost()!)}
                    className="flex items-center px-4 py-2 bg-black/30 hover:bg-black/50 text-blue-300 rounded-lg transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>

            {/* Single Post Content */}
            <article className="bg-black/20 backdrop-blur-lg border border-blue-500/10 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-black/80 flex items-center justify-center">
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={selectedPost?.image || `/blog/${(selectedPost?.id || 1 % 5) + 1}.webp`}
                      alt={selectedPost?.title || 'Blog post image'}
                      fill
                      className="object-cover opacity-50"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/blog/${(selectedPost?.id || 1 % 5) + 1}.webp`;
                      }}
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <div className="relative z-10 text-blue-400/40 text-6xl font-bold opacity-30">
                    {selectedPost?.category.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    {selectedPost?.category}
                  </span>
                </div>
                
                {/* Article Metadata */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center text-blue-300/90 text-sm space-x-4">
                    <span>{selectedPost?.date}</span>
                    <span>•</span>
                    <span>{selectedPost?.readTime}</span>
                    <span>•</span>
                    <span>By Sage Devs Team</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  {selectedPost?.title}
                </h1>

                {/* Table of Contents */}
                {selectedPost?.content && (
                  <div className="bg-black/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 mb-8">
                    <h3 className="text-white text-lg font-semibold mb-4">📖 Table of Contents</h3>
                    <div className="space-y-2 text-sm">
                      {selectedPost.content.match(/^#{1,3}\s.+$/gm)?.slice(1).map((heading: string, index: number) => {
                        const level = heading.match(/^#+/)?.[0].length || 1;
                        const text = heading.replace(/^#+\s/, '');
                        return (
                          <div key={index} className={`${level === 2 ? 'ml-0' : level === 3 ? 'ml-4' : 'ml-8'}`}>
                            <a href={`#${text.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                              {text}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Article Body */}
                {selectedPost?.content ? (
                  <div className="prose prose-invert prose-blue max-w-none">
                    <div className="text-blue-200/80 leading-relaxed space-y-6">
                      {selectedPost.content.split('\n\n').map((paragraph: string, index: number) => {
                        if (paragraph.startsWith('#')) {
                          const level = paragraph.match(/^#+/)?.[0].length || 1;
                          const text = paragraph.replace(/^#+\s/, '');
                          const headingLevel = Math.min(level + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6;
                          const HeadingTag = `h${headingLevel}` as const;
                          const classes = level === 1 ? 'text-2xl md:text-3xl font-bold text-white mb-6 mt-12 border-b border-blue-500/20 pb-4' :
                                         level === 2 ? 'text-xl md:text-2xl font-bold text-white mb-4 mt-8' :
                                         'text-lg font-semibold text-white mb-3 mt-6';
                          
                          const props = {
                            key: index,
                            className: classes,
                            id: text.toLowerCase().replace(/\s+/g, '-')
                          };
                          
                          return React.createElement(HeadingTag, props, text);
                        } else if (paragraph.startsWith('- ')) {
                          return (
                            <ul key={index} className="list-disc list-inside space-y-2 text-blue-200/80 bg-black/20 p-4 rounded-lg border-l-4 border-blue-500/30">
                              {paragraph.split('\n').filter((line: string) => line.startsWith('- ')).map((item: string, i: number) => (
                                <li key={i} className="leading-relaxed">{item.replace('- ', '')}</li>
                              ))}
                            </ul>
                          );
                        } else if (paragraph.match(/^\d+\./)) {
                          return (
                            <ol key={index} className="list-decimal list-inside space-y-2 text-blue-200/80 bg-black/20 p-4 rounded-lg border-l-4 border-blue-500/30">
                              {paragraph.split('\n').filter((line: string) => line.match(/^\d+\./)).map((item: string, i: number) => (
                                <li key={i} className="leading-relaxed">{item.replace(/^\d+\.\s/, '')}</li>
                              ))}
                            </ol>
                          );
                        } else if (paragraph.trim()) {
                          return (
                            <p key={index} className="text-blue-200/80 leading-relaxed text-lg">
                              {paragraph}
                            </p>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="text-blue-200/80 leading-relaxed text-lg">
                    <p>Content for this article is coming soon. Check back later for the full article.</p>
                  </div>
                )}

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-blue-500/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Share this article</h4>
                      <div className="flex space-x-3">
                        <button 
                          onClick={shareOnTwitter}
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                          Twitter
                        </button>
                        <button 
                          onClick={shareOnLinkedIn}
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          LinkedIn
                        </button>
                        <div className="relative">
                          {showCopied && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Link copied!
                            </div>
                          )}
                          <button 
                            onClick={copyToClipboard}
                            className="flex items-center px-4 py-2 bg-black/40 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-black/60 transition-all duration-300"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            Copy Link
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-blue-400/70 text-sm mb-2">Published on</div>
                      <div className="text-white font-medium">{selectedPost?.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            
          </div>
        )}

        {/* No Results State */}
        {currentView === "list" && filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-blue-400/60 text-6xl mb-6">🔍</div>
            <h3 className="text-white text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-blue-300/70 mb-6">Try adjusting your search or filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        {currentView === "list" && (
          <div className="bg-black/30 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8 text-center mb-16">
            <h3 className="text-white text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-300/70 mb-6 max-w-2xl mx-auto">
              Get the latest insights delivered directly to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-black/40 border border-blue-500/30 rounded-full text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}