import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = 'September 18, 2026'; // Date of the preserved original repository snapshot.

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Sage Devs",
    "description": "Comprehensive Terms of Service for Sage Devs software development, web development, UI/UX design, and digital services. Read our legal agreement before using our services.",
    "url": "https://sagedevs.tech/terms",
    "dateModified": "2026-09-18",
    "inLanguage": "en-US",
    "provider": {
      "@type": "Organization",
      "name": "Sage Devs",
      "url": "https://sagedevs.tech",
      "logo": "https://sagedevs.tech/brand/sage-devs-wordmark.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@sagedevs.tech",
        "telephone": "+923259684493",
        "url": "https://wa.me/923259684493",
        "contactType": "Customer Service"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }} />

      <div className="legal-page terms-document">
        {/* Content */}
        <div className="relative z-10">

          <header className="shell legal-opening terms-opening">
            <div><p className="section-label">THE BASIS OF WORKING TOGETHER</p><h1>Terms of service.</h1><p className="legal-summary">Please read these terms carefully before using our services.</p></div>
            <div className="legal-document-meta"><span>SAGE DEVS / LEGAL</span><time dateTime="2026-09-18">Last updated: {lastUpdated}</time><a href="/privacy">Read the privacy policy ↗</a></div>
          </header>
          <nav className="shell legal-contents" aria-label="Terms of service sections"><span>QUICK REFERENCE</span><a href="#terms-2">Services</a><a href="#terms-3">Delivery</a><a href="#terms-4">Payment</a><a href="#terms-5">Ownership</a><a href="#terms-16">Contact</a></nav>
          {/* Terms Content */}
          <div className="shell legal-article">
            <div className="legal-reading">
              <div className="space-y-12">

                {/* Section 1 */}
                <div className="bg-gradient-to-br from-blue-950/30 to-slate-950/30 backdrop-blur-sm border border-blue-900/20 rounded-2xl p-8 hover:border-blue-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h2 id="terms-1">Acceptance of Terms</h2>
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
                      <h2 id="terms-2">Services</h2>
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
                      <h2 id="terms-3">Project Timeline and Delivery</h2>
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
                      <h2 id="terms-4">Payment Terms</h2>
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
                      <h2 id="terms-5">Intellectual Property Rights</h2>
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
                      <h2 id="terms-6">Client Responsibilities</h2>
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
                      <h2 id="terms-7">Confidentiality</h2>
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
                      <h2 id="terms-8">Limitation of Liability</h2>
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
                      <h2 id="terms-9">Warranties</h2>
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
                      <h2 id="terms-10">Termination</h2>
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
                      <h2 id="terms-11">Dispute Resolution</h2>
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
                      <h2 id="terms-12">Disclaimer</h2>
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
                      <h2 id="terms-13">Governing Law and Jurisdiction</h2>
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
                      <h2 id="terms-14">Privacy and Data Protection</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        For information on how we collect, use, and protect your personal data, please see our{' '}
                        <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline transition-colors">
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
                      <h2 id="terms-15">Changes to Terms</h2>
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
                      <h2 id="terms-16">Contact Information</h2>
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
                        <div className="border-t border-white/10 pt-3 mt-3">
                          <a
                            href="https://wa.me/923259684493"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="legal-whatsapp"
                          >
                            <MessageCircle size={18} strokeWidth={1.5} aria-hidden="true" />
                            <span>Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span></span>
                            <ArrowUpRight size={16} aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="shell legal-article">
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
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href="/privacy"
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
    <BreadcrumbSchema items={[{name:'Terms of service',path:'/terms'}]}/></>
  );
}
