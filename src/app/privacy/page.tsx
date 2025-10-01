'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  update(): void;
  draw(): void;
}

export default function PrivacyPolicy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Store canvas dimensions and context in an object to maintain references
    const canvasState = {
      width: window.innerWidth,
      height: window.innerHeight,
      context: ctx
    };
    
    // Set initial canvas dimensions
    canvas.width = canvasState.width;
    canvas.height = canvasState.height;

    const particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 80;

    class ParticleClass implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvasState.width;
        this.y = Math.random() * canvasState.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasState.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvasState.height) this.vy *= -1;
      }

      draw() {
        if (!canvasState.context) return;
        canvasState.context.fillStyle = 'rgba(59, 130, 246, 0.5)';
        canvasState.context.beginPath();
        canvasState.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        canvasState.context.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleClass());
    }

    let lastTime = 0;
    const fps = isMobile ? 30 : 60;
    const fpsInterval = 1000 / fps;

    let animationId: number;
    
    function animate(currentTime: number) {
      animationId = requestAnimationFrame(animate);
      
      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;
      
      lastTime = currentTime - (elapsed % fpsInterval);

      if (!canvasState.context) return;
      // Use a slightly more performant clear method with opacity for trail effect
      canvasState.context.globalCompositeOperation = 'source-over';
      canvasState.context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      canvasState.context.fillRect(0, 0, canvasState.width, canvasState.height);
      canvasState.context.globalCompositeOperation = 'lighter';

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = isMobile ? 80 : 120;
          if (distance < maxDistance && canvasState.context) {
            canvasState.context.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / maxDistance)})`;
            canvasState.context.lineWidth = 0.5;
            canvasState.context.beginPath();
            canvasState.context.moveTo(particle.x, particle.y);
            canvasState.context.lineTo(particles[j].x, particles[j].y);
            canvasState.context.stroke();
          }
        }
      });
    }

    animate(0);

    const handleResize = () => {
      if (!canvas) return;
      canvasState.width = window.innerWidth;
      canvasState.height = window.innerHeight;
      canvas.width = canvasState.width;
      canvas.height = canvasState.height;
    };

    // Start the animation
    animationId = requestAnimationFrame(animate);
    
    // Set up event listeners
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy Policy for Sage Devs - Full Stack Development & UI/UX Design Agency',
    url: 'https://sagedevs.tech/privacy',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Sage Devs',
      url: 'https://sagedevs.tech',
    },
    about: {
      '@type': 'Organization',
      name: 'Sage Devs',
      url: 'https://sagedevs.tech',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@sagedevs.tech',
        contactType: 'Customer Service',
      },
    },
    mainEntity: {
      '@type': 'Article',
      headline: 'Privacy Policy',
      datePublished: '2025-10-01',
      dateModified: '2025-10-01',
      author: {
        '@type': 'Organization',
        name: 'Sage Devs',
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://sagedevs.tech',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Privacy Policy',
          item: 'https://sagedevs.tech/privacy',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white overflow-x-hidden">
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <main className="container mx-auto px-4 py-12">
            <article className="max-w-4xl mx-auto">
             

              {/* Title */}
              <header className="mb-12 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Privacy Policy
                </h1>
                <p className="text-gray-400 text-lg">
                  <time dateTime="2025-10-01">Last updated: October 1, 2025</time>
                </p>
              </header>

              {/* Content */}
              <div className="space-y-10">
                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">1. Introduction</h2>
                  <p className="text-gray-200 leading-relaxed">
                    At Sage Devs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at sagedevs.tech, use our full-stack development and UI/UX design services, or interact with us in any capacity.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-6">2. Information We Collect</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-blue-300 mb-3">Personal Information</h3>
                    <p className="text-gray-200 mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
                    <ul className="space-y-2 text-gray-200 ml-6">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Name, email address, and phone number</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Company name, job title, and business information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Project requirements, specifications, and deliverables</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Payment and billing information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Communication preferences and marketing consent</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-blue-300 mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-200 mb-4">When you visit our website, we automatically collect:</p>
                    <ul className="space-y-2 text-gray-200 ml-6">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>IP address, browser type, and device information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Pages visited, time spent, and navigation patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Referring website and search terms used</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Usage data and interaction with our services</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-200 mb-4">We use collected information for the following purposes:</p>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Providing, maintaining, and improving our development and design services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Processing project requests, proposals, and deliveries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Communicating about projects, updates, and support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Processing payments and maintaining accurate financial records</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Analyzing website usage to enhance user experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Sending relevant marketing communications (with your consent)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Complying with legal obligations and protecting our rights</span>
                    </li>
                  </ul>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">4. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-200 mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our website:
                  </p>
                  <div className="space-y-3 text-gray-200 ml-6">
                    <div>
                      <strong className="text-blue-300">Essential Cookies:</strong> Required for basic website functionality and navigation
                    </div>
                    <div>
                      <strong className="text-blue-300">Analytics Cookies:</strong> Help us understand visitor behavior and improve our services
                    </div>
                    <div>
                      <strong className="text-blue-300">Preference Cookies:</strong> Remember your settings and personalization choices
                    </div>
                    <div>
                      <strong className="text-blue-300">Marketing Cookies:</strong> Used to deliver relevant advertisements and measure campaign effectiveness
                    </div>
                  </div>
                  <p className="text-gray-200 mt-4">
                    You can control cookie settings through your browser preferences. Please note that disabling certain cookies may affect website functionality and your user experience.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">5. Information Sharing and Disclosure</h2>
                  <p className="text-gray-200 mb-4">We may share your information in the following circumstances:</p>
                  <div className="space-y-3 text-gray-200 ml-6">
                    <div>
                      <strong className="text-blue-300">With Your Consent:</strong> When you explicitly agree to share information with third parties
                    </div>
                    <div>
                      <strong className="text-blue-300">Service Providers:</strong> With trusted third-party vendors who assist in our operations (hosting, analytics, payment processing)
                    </div>
                    <div>
                      <strong className="text-blue-300">Legal Requirements:</strong> When required by law, court order, or to protect our legal rights
                    </div>
                    <div>
                      <strong className="text-blue-300">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                    </div>
                  </div>
                  <p className="text-gray-200 mt-4">
                    We do not sell, trade, or rent your personal information to third parties for marketing purposes without your explicit consent.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">6. Data Security</h2>
                  <p className="text-gray-200 leading-relaxed">
                    We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include SSL/TLS encryption, secure cloud infrastructure, access controls, regular security audits, and employee training. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">7. Data Retention</h2>
                  <p className="text-gray-200 leading-relaxed">
                    We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary depending on the type of information and the purpose for which it was collected. Project-related data may be retained for the duration of the project and for a reasonable period thereafter for warranty and support purposes.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">8. Third-Party Services</h2>
                  <p className="text-gray-200 mb-4">
                    Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites or services. We encourage you to review their privacy policies.
                  </p>
                  <p className="text-gray-200 mb-3">Third-party services we may use include:</p>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Google Analytics for website analytics and performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Payment processors (Stripe, PayPal) for secure transaction handling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Cloud storage providers for data backup and infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Communication and project management tools</span>
                    </li>
                  </ul>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">9. Your Rights and Choices</h2>
                  <p className="text-gray-200 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
                  <div className="space-y-3 text-gray-200 ml-6">
                    <div>
                      <strong className="text-blue-300">Access:</strong> Request information about the personal data we hold about you
                    </div>
                    <div>
                      <strong className="text-blue-300">Correction:</strong> Request correction of inaccurate or incomplete information
                    </div>
                    <div>
                      <strong className="text-blue-300">Deletion:</strong> Request deletion of your personal information (right to be forgotten)
                    </div>
                    <div>
                      <strong className="text-blue-300">Portability:</strong> Request a copy of your data in a structured, machine-readable format
                    </div>
                    <div>
                      <strong className="text-blue-300">Restriction:</strong> Request limitation of processing under certain circumstances
                    </div>
                    <div>
                      <strong className="text-blue-300">Objection:</strong> Object to processing for direct marketing purposes
                    </div>
                    <div>
                      <strong className="text-blue-300">Withdraw Consent:</strong> Withdraw previously given consent at any time
                    </div>
                  </div>
                  <p className="text-gray-200 mt-4">
                    To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-200 leading-relaxed">
                    Your information may be transferred to and maintained on servers located outside of your country or region, where data protection laws may differ. By using our services, you consent to such transfers in accordance with this Privacy Policy. We take appropriate measures to ensure your information receives adequate protection in accordance with applicable data protection laws.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">11. Children&apos;s Privacy</h2>
                  <p className="text-gray-200 leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information from our systems.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">12. California Privacy Rights (CCPA)</h2>
                  <p className="text-gray-200 mb-4">
                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                  </p>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Right to know what personal information is collected, used, shared, or sold</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Right to delete personal information held by businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Right to opt-out of the sale of personal information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Right to non-discrimination for exercising CCPA rights</span>
                    </li>
                  </ul>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">13. GDPR Compliance (European Users)</h2>
                  <p className="text-gray-200 mb-4">
                    If you are located in the European Economic Area (EEA), we process your personal data based on the following legal grounds:
                  </p>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Contract performance: To provide our services to you</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Legitimate interests: To improve our services and communicate with you</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Consent: For marketing communications and non-essential cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Legal obligation: To comply with applicable laws and regulations</span>
                    </li>
                  </ul>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">14. Changes to This Privacy Policy</h2>
                  <p className="text-gray-200 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <h2 className="text-3xl font-semibold text-blue-400 mb-4">15. Contact Us</h2>
                  <p className="text-gray-200 mb-6">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-gradient-to-r from-blue-950/50 to-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                    <div className="space-y-3 text-gray-100">
                      <div className="flex items-center">
                        <span className="font-semibold text-blue-300 w-32">Company:</span>
                        <span>Sage Devs</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-blue-300 w-32">Email:</span>
                        <a href="mailto:contact@sagedevs.tech" className="text-blue-400 hover:text-blue-300 transition-colors">
                          contact@sagedevs.tech
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-blue-300 w-32">Website:</span>
                        <a href="https://sagedevs.tech" className="text-blue-400 hover:text-blue-300 transition-colors">
                          https://sagedevs.tech
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-blue-300 w-32">Response Time:</span>
                        <span>We aim to respond within 48-72 hours</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>  );
}
