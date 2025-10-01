import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Sage Devs',
  description: 'Privacy Policy for Sage Devs - Full Stack Software Agency & UI/UX Studio. How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-200">

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>
                  At Sage Devs ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
                  use our services, or interact with us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-medium text-white mb-3">Personal Information</h3>
                <p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and specifications</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-medium text-white mb-3">Automatically Collected Information</h3>
                <p className="mb-4">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use collected information for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Processing project requests and deliveries</li>
                  <li>Communicating about projects and updates</li>
                  <li>Processing payments and maintaining financial records</li>
                  <li>Improving our website and services</li>
                  <li>Sending relevant marketing communications (with consent)</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
                <p className="mt-4">
                  You can control cookie settings through your browser preferences. Note that disabling certain cookies
                  may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Information Sharing and Disclosure</h2>
                <p className="mb-4">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                  <li><strong>Service providers:</strong> With trusted third-party vendors who assist our operations</li>
                  <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
                <p className="mt-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes
                  without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. These measures include encryption,
                  secure servers, access controls, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
                <p>
                  We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
                  comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary depending
                  on the type of information and the purpose for which it was collected.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Services</h2>
                <p className="mb-4">
                  Our website may contain links to third-party websites or integrate with third-party services.
                  We are not responsible for the privacy practices of these external sites or services.
                </p>
                <p>
                  Third-party services we may use include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Google Analytics for website analytics</li>
                  <li>Payment processors for transaction handling</li>
                  <li>Cloud storage providers for data backup</li>
                  <li>Communication tools for project management</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Your Rights and Choices</h2>
                <p className="mb-4">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                  <li><strong>Restriction:</strong> Request limitation of processing under certain circumstances</li>
                  <li><strong>Objection:</strong> Object to processing for direct marketing purposes</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and maintained on servers located outside of your country or region.
                  By using our services, you consent to such transfers in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                  information from children under 18. If you are a parent or guardian and believe your child has provided
                  us with personal information, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy
                  Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <p><strong>Email:</strong> contact@sagedevs.tech</p>
                  <p><strong>Website:</strong> https://sagedevs.tech</p>
                  <p><strong>Response Time:</strong> We aim to respond to privacy inquiries within 30 days</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
