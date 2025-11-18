import React from 'react';

export const metadata = {
  title: 'Terms of Service | Sage Devs - Legal Agreement & Service Terms',
  description: 'Read Sage Devs Terms of Service. Comprehensive legal agreement covering software development, web development, payment terms, intellectual property rights, and client responsibilities.',
  keywords: 'terms of service, legal agreement, software development terms, web development contract, Sage Devs TOS, service agreement, client terms, development agreement, Pakistan software company',
  openGraph: {
    title: 'Terms of Service | Sage Devs - Legal Agreement',
    description: 'Comprehensive Terms of Service for Sage Devs covering software development, payment terms, intellectual property, and client responsibilities.',
    url: 'https://sagedevs.tech/terms-of-service',
    siteName: 'Sage Devs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sagedevs.tech/og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Sage Devs Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Sage Devs',
    description: 'Read our comprehensive Terms of Service covering software development, web development, and digital services.',
    creator: '@Abdul_Ahadt1',
    images: [
      {
        url: 'https://sagedevs.tech/og-banner.webp',
        alt: 'Sage Devs Terms of Service',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sagedevs.tech/terms-of-service',
  },
};

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Sage Devs",
    "description": "Comprehensive Terms of Service for Sage Devs software development, web development, UI/UX design, and digital services. Read our legal agreement before using our services.",
    "url": "https://sagedevs.tech/terms-of-service",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "provider": {
      "@type": "Organization",
      "name": "Sage Devs",
      "url": "https://sagedevs.tech",
      "logo": "https://sagedevs.tech/og-banner.webp",
      "sameAs": [
        "https://www.instagram.com/abdul_ahadt",
        "https://www.facebook.com/share/16PkdAEeVW/",
        "https://www.tiktok.com/@abdul_ahadt",
        "https://x.com/Abdul_Ahadt1"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@sagedevs.tech",
        "contactType": "Customer Service"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }} />

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-black"></div>
          
          {/* Animated Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-950/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.05)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-blue-400 text-sm font-medium">Legal Agreement</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent leading-tight">
                Terms of Service
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Please read these terms carefully before using our services
              </p>
              <p className="text-blue-400/60 mt-4 text-sm">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="container mx-auto px-4 pb-20">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">

                {/* Section 1 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                      <p className="text-gray-300 leading-relaxed">
                        By accessing and using Sage Devs services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service constitute the entire agreement between you and Sage Devs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Sage Devs provides software development, web development, UI/UX design, and related digital services including but not limited to:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Full-stack web application development',
                          'Mobile application development',
                          'UI/UX design and prototyping',
                          'E-commerce solutions (WordPress & Shopify)',
                          'SaaS product development',
                          'Cloud and DevOps solutions',
                          'Maintenance and support services'
                        ].map((service, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Project Timeline and Delivery</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Project timelines are estimates and may vary based on project complexity, client responsiveness, and unforeseen technical challenges.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We strive to meet agreed-upon deadlines but cannot guarantee specific delivery dates. Delays caused by client-side factors (late feedback, delayed content provision, etc.) may result in timeline adjustments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                      <div className="bg-blue-950/40 border border-blue-900/30 rounded-xl p-6 mb-4">
                        <p className="text-blue-300 font-semibold mb-3">Payment Schedule:</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300">50% upfront payment before project commencement</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300">25% at project midpoint/milestone</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300">25% upon project completion and delivery</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        All payments are due within 15 days of invoice date. Late payments may incur a 1.5% monthly fee. Projects may be paused or terminated for non-payment exceeding 30 days.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>
                      <div className="space-y-4">
                        <div>
                          <p className="text-blue-300 font-semibold mb-2">Client retains ownership of:</p>
                          <p className="text-gray-300">All content, data, and materials provided by the client for the project.</p>
                        </div>
                        <div>
                          <p className="text-blue-300 font-semibold mb-2">Sage Devs retains ownership of:</p>
                          <p className="text-gray-300">Development methodologies, reusable code components, design systems, and project templates created during development.</p>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          Upon full payment, clients receive a non-exclusive license to use the delivered software/application for their intended purpose. Source code may be provided based on project agreement and additional licensing terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      6
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">Clients are responsible for:</p>
                      <div className="space-y-2">
                        {[
                          'Providing accurate project requirements and specifications',
                          'Timely provision of content, feedback, and approvals',
                          'Securing necessary licenses for third-party tools/services',
                          'Maintaining backup of their data and content',
                          'Complying with applicable laws and regulations'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      7
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
                      <p className="text-gray-300 leading-relaxed">
                        Both parties agree to maintain confidentiality of proprietary information shared during the project. This includes but is not limited to business plans, customer data, and technical specifications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 8 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      8
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                      <p className="text-gray-300 leading-relaxed">
                        Sage Devs shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or any interruption of service. Our total liability shall not exceed the amount paid for the specific service in question.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 9 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      9
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Warranties</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        We warrant that our services will be performed in a professional manner consistent with industry standards. We do not warrant that our services will be uninterrupted or error-free.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Custom software solutions are provided &quot;as-is&quot; after delivery and acceptance. Bug fixes within the warranty period (typically 30-90 days) are included at no additional cost.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 10 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      10
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Either party may terminate a project with written notice. Upon termination:
                      </p>
                      <div className="space-y-2">
                        {[
                          'Client shall pay for all work completed up to the termination date',
                          'In-progress work may be delivered in its current state',
                          'Both parties shall return or destroy confidential information'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 11 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      11
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
                      <p className="text-gray-300 leading-relaxed">
                        Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the rules of a mutually agreed-upon arbitration service. The prevailing party shall be entitled to recover reasonable attorney fees and costs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 12 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      12
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
                      <p className="text-gray-300 leading-relaxed">
                        We do not guarantee profits, results, or success from using our services. Outcomes vary based on numerous factors including but not limited to market conditions, implementation, and user engagement. Past performance or case studies do not guarantee future results. All business decisions remain the sole responsibility of the client.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 13 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      13
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Governing Law and Jurisdiction</h2>
                      <p className="text-gray-300 leading-relaxed">
                        These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Lahore, Pakistan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 14 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      14
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Privacy and Data Protection</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        For information on how we collect, use, and protect your personal data, please see our{' '}
                        <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                          Privacy Policy
                        </a>
                        . By using our services, you also agree to the terms outlined in our Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 15 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      15
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                      <p className="text-gray-300 leading-relaxed">
                        Sage Devs reserves the right to modify these terms at any time. Clients will be notified of significant changes, and continued use of our services constitutes acceptance of modified terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 16 - Contact */}
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-950/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-300 font-bold">
                      16
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        For questions regarding these Terms of Service, please contact us at:
                      </p>
                      <div className="bg-black/40 border border-blue-900/30 rounded-xl p-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400 font-semibold min-w-[80px]">Email:</span>
                          <a href="mailto:info@sagedevs.tech" className="text-gray-300 hover:text-blue-400 transition-colors">
                            info@sagedevs.tech
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400 font-semibold min-w-[80px]">Website:</span>
                          <a href="https://sagedevs.tech" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                            https://sagedevs.tech
                          </a>
                        </div>
                        <div className="border-t border-blue-900/30 pt-3 mt-3">
                          <p className="text-blue-400 font-semibold mb-3">Connect with us:</p>
                          <div className="flex flex-wrap gap-3">
                            <a 
                              href="https://www.instagram.com/abdul_ahadt?igsh=MzZmY3plbHRqajk3" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg hover:border-purple-400/50 transition-all duration-300 group"
                            >
                              <svg className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                              <span className="text-gray-300 group-hover:text-white transition-colors">Instagram</span>
                            </a>
                            
                            <a 
                              href="https://www.facebook.com/share/16PkdAEeVW/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-lg hover:border-blue-400/50 transition-all duration-300 group"
                            >
                              <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                              <span className="text-gray-300 group-hover:text-white transition-colors">Facebook</span>
                            </a>
                            
                            <a 
                              href="https://www.tiktok.com/@abdul_ahadt?_t=ZS-90AC0x8ERGO&_r=1" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800/40 to-gray-700/40 border border-gray-600/30 rounded-lg hover:border-gray-500/50 transition-all duration-300 group"
                            >
                              <svg className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                              </svg>
                              <span className="text-gray-300 group-hover:text-white transition-colors">TikTok</span>
                            </a>
                            
                            <a 
                              href="https://x.com/Abdul_Ahadt1?t=g6Ur-Lys3io2gavWU0TXCQ&s=09" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900/40 to-black/40 border border-gray-700/30 rounded-lg hover:border-gray-600/50 transition-all duration-300 group"
                            >
                              <svg className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                              </svg>
                              <span className="text-gray-300 group-hover:text-white transition-colors">X (Twitter)</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="container mx-auto px-4 pb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  By proceeding with our services, you agree to these Terms of Service. Let&apos;s build something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://sagedevs.tech/#contact" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a 
                    href="https://sagedevs.tech/privacy-policy" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    View Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}