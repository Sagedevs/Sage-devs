import React from 'react';

export default function TermsOfService() {
  return (
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
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                      Custom software solutions are provided "as-is" after delivery and acceptance. Bug fixes within the warranty period (typically 30-90 days) are included at no additional cost.
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
                    <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Sage Devs reserves the right to modify these terms at any time. Clients will be notified of significant changes, and continued use of our services constitutes acceptance of modified terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 13 - Contact */}
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-950/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-300 font-bold">
                    13
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      For questions regarding these Terms of Service, please contact us at:
                    </p>
                    <div className="bg-black/40 border border-blue-900/30 rounded-xl p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400 font-semibold min-w-[80px]">Email:</span>
                        <a href="mailto:contact@sagedevs.tech" className="text-gray-300 hover:text-blue-400 transition-colors">
                          contact@sagedevs.tech
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400 font-semibold min-w-[80px]">Website:</span>
                        <a href="https://sagedevs.tech" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                          https://sagedevs.tech
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-950/50 to-slate-950/50 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-8">
                <p className="text-gray-400 mb-4">
                  By using our services, you acknowledge that you have read and understood these terms.
                </p>
                <a 
                  href="https://sagedevs.tech" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}