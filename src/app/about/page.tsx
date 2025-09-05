// Make sure this file is named page.tsx (not page.ts)
import React from "react";
import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-96 right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-10 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
                About Me
              </h1>
              <p className="text-xl md:text-2xl bg-gradient-to-r from-gray-300 to-purple-200 bg-clip-text text-transparent leading-relaxed">
                Full Stack Developer & E-commerce Specialist
              </p>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hello! I&apos;m a passionate web developer with expertise in
                creating comprehensive digital solutions. From full-stack
                development to e-commerce platforms and content management
                systems, I specialize in building scalable, user-friendly
                applications that drive business growth.
              </p>

              <p className="text-lg">
                I bring together technical excellence in modern web technologies
                like React and Next.js with deep expertise in e-commerce
                platforms, CMS management, and UX/UI design. Whether it&apos;s
                crafting seamless shopping experiences or designing intuitive
                user interfaces, I create solutions that combine functionality
                with exceptional user experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Based in Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-black rounded-2xl p-8 border border-purple-400/20 shadow-2xl shadow-purple-500/10">
                <Image
                  src="/photos/tiltedcard.webp"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="bg-gradient-to-br from-gray-900 via-purple-900/10 to-black rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-200 transition-colors duration-300">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React & Next.js (App Router, SSR, ISR)</li>
                <li>• TypeScript & JavaScript (ES6+)</li>
                <li>• Tailwind CSS & CSS Modules</li>
                <li>• Responsive Design & Animations</li>
                <li>• State Management (Redux, Zustand)</li>
              </ul>
            </div>

            {/* E-commerce & CMS */}
            <div className="bg-gradient-to-br from-gray-900 via-pink-900/10 to-black rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-pink-200 transition-colors duration-300">
                E-commerce & CMS
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Shopify & Shopify Plus Development</li>
                <li>• WordPress & Custom Theme Development</li>
                <li>• WooCommerce Integration</li>
                <li>• Payment Gateway Integration</li>
                <li>• Content Management Systems</li>
              </ul>
            </div>

            {/* UX/UI Design */}
            <div className="bg-gradient-to-br from-gray-900 via-indigo-900/10 to-black rounded-2xl p-8 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 group">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-indigo-200 transition-colors duration-300">
                UX/UI Design
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• User Experience Design</li>
                <li>• Interface Design & Prototyping</li>
                <li>• Design Systems & Style Guides</li>
                <li>• User Research & Testing</li>
                <li>• Figma & Adobe Creative Suite</li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="bg-gradient-to-br from-gray-900 via-emerald-900/10 to-black rounded-2xl p-8 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-emerald-200 transition-colors duration-300">
                Backend Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js & Express.js</li>
                <li>• REST & GraphQL APIs</li>
                <li>• Database Design (SQL & NoSQL)</li>
                <li>• Authentication & Security</li>
                <li>• Cloud Services (AWS, Vercel)</li>
              </ul>
            </div>

            {/* Platform Development */}
            <div className="bg-gradient-to-br from-gray-900 via-blue-900/10 to-black rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-200 transition-colors duration-300">
                Platform Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Custom Shopify Apps & Themes</li>
                <li>• WordPress Plugin Development</li>
                <li>• Headless CMS Solutions</li>
                <li>• Multi-vendor Marketplaces</li>
                <li>• API Integrations & Webhooks</li>
              </ul>
            </div>

            {/* Tools & Workflow */}
            <div className="bg-gradient-to-br from-gray-900 via-yellow-900/10 to-black rounded-2xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-yellow-200 transition-colors duration-300">
                Tools & Workflow
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git & GitHub/GitLab</li>
                <li>• Docker & Containerization</li>
                <li>• Testing (Jest, Cypress)</li>
                <li>• CI/CD Pipelines</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* TestimonialSlider Section */}
      <TestimonialSlider />
      {/* Experience & Journey Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Timeline */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>

                <div className="relative pl-12 pb-8 group">
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                    Started Coding Journey
                  </h3>
                  <p className="text-gray-300">
                    Began with curiosity about how websites work, diving into
                    HTML, CSS, and JavaScript fundamentals.
                  </p>
                </div>

                <div className="relative pl-12 pb-8 group">
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/50 group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
                    E-commerce Specialization
                  </h3>
                  <p className="text-gray-300">
                    Discovered passion for e-commerce, mastering Shopify,
                    WooCommerce, and building custom online stores that drive
                    sales.
                  </p>
                </div>

                <div className="relative pl-12 pb-8 group">
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-200 transition-colors duration-300">
                    UX/UI Design Integration
                  </h3>
                  <p className="text-gray-300">
                    Expanded into design, learning to create user-centered
                    interfaces that combine beautiful aesthetics with optimal
                    functionality.
                  </p>
                </div>

                <div className="relative pl-12 group">
                  <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50 group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                    Full-Stack Mastery
                  </h3>
                  <p className="text-gray-300">
                    Now delivering complete digital solutions - from concept and
                    design to development and deployment of scalable
                    applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Philosophy */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-900/30 via-gray-900 to-blue-900/30 rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
                  My Philosophy
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Business-Driven Development:
                    </strong>{" "}
                    Every feature should contribute to business goals and user
                    satisfaction, whether it&apos;s increasing conversions or
                    improving user experience.
                  </p>
                  <p>
                    <strong className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      Design-First Approach:
                    </strong>{" "}
                    Great functionality means nothing without intuitive design.
                    I believe in creating interfaces that users love to interact
                    with.
                  </p>
                  <p>
                    <strong className="text-white">User-Centric Design:</strong>{" "}
                    Great software isn&apos;t just about clean code—it&apos;s
                    about creating experiences that users love and find
                    valuable.
                  </p>
                  <p>
                    <strong className="text-white">Collaboration:</strong> The
                    best products are built by teams that communicate
                    effectively and support each other&apos;s growth.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 via-gray-900 to-purple-900/30 rounded-2xl p-8 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-6">
                  When I&apos;m Not Coding
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I enjoy exploring emerging e-commerce trends, studying user
                    behavior patterns, and experimenting with new design tools.
                    I&apos;m also passionate about helping businesses understand
                    the digital landscape.
                  </p>
                  <p>
                    Outside of tech, I love analyzing successful online stores,
                    reading about conversion optimization, and discovering
                    innovative design patterns that enhance user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to transform your business with a stunning online presence?
            Whether you need a high-converting e-commerce store, a powerful CMS
            solution, or a complete digital transformation, I&apos;m here to
            bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Contact"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50"
            >
              Get In Touch
            </a>
            <a
              href="/portfolios"
              className="border border-purple-400/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:border-purple-400/70 transition-all duration-300 backdrop-blur-sm"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
