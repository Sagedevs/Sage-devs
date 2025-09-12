"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function AgencyCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsSubmitting(true);
    
    // Create email content
    const emailSubject = `New Project Inquiry from ${formData.name}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}

Project Details:
${formData.message}

---
This message was sent from the SageDevs contact form.
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:sagedevs.network@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black overflow-hidden flex items-center w-screen ml-[calc(-50vw+50%)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/10" />
        
        {/* Animated floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-blue-600/6 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '3s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
        
        {/* Subtle moving lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"
               style={{ animationDuration: '3s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse"
               style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
                <span className="text-blue-300 text-sm font-medium">Ready to Transform Your Business?</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let's Build Your
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>
              
              <p className="text-gray-300 text-xl leading-relaxed max-w-lg">
                Partner with our expert team to create cutting-edge software solutions that drive growth and innovation for your business.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                'Enterprise-grade development',
                '24/7 support & maintenance',
                'Scalable cloud solutions',
                'AI-powered applications'
              ].map((feature, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-all duration-300">
                    <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="mailto:sagedevs.network@gmail.com"
                className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">sagedevs.network@gmail.com</span>
              </a>
              
            </div>

            {/* Additional CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href="https://calendly.com/sagedevs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
              </a>
              <a 
                href="https://sage-devs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent border-2 border-blue-400/30 hover:border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400/10 font-semibold transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                <p className="text-gray-400">Tell us about your vision and we'll make it reality.</p>
              </div>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/30 rounded-xl text-white focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                    >
                      <option value="" className="bg-gray-900">Select Range</option>
                      <option value="5k-10k" className="bg-gray-900">$5k - $10k</option>
                      <option value="10k-25k" className="bg-gray-900">$10k - $25k</option>
                      <option value="25k-50k" className="bg-gray-900">$25k - $50k</option>
                      <option value="50k+" className="bg-gray-900">$50k+</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Opening Email Client...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-blue-500/10 border border-blue-400/30 rounded-xl">
                    <div className="flex items-center gap-3 text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Email client opened! Please send the message from your email app.</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}