"use client";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const FinalSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formDataToSend = new FormData(event.currentTarget);

    try {
      const response = await axios.post(
        'https://formspree.io/f/xldpndqz',
        formDataToSend,
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        formRef.current?.reset();
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-40 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-sky-300 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x / 20}px ${mousePosition.y / 20}px, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/20 to-transparent transform rotate-12"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent via-cyan-500/20 to-transparent transform -rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                Let&apos;s Create Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-2xl">
                READY TO
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">ELEVATE?</span>
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Interactive Form */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              
              <div className="relative bg-black/95 backdrop-blur-2xl rounded-3xl p-10 border border-blue-500/30 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3">
                    Start Your Journey
                  </h3>
                  <p className="text-gray-300 text-base">Transform your vision into reality</p>
                </div>

                <form onSubmit={handleSubmit} ref={formRef} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group/input">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition duration-300 text-white placeholder-gray-400 text-base font-medium"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-focus-within/input:opacity-100 transition duration-300 pointer-events-none"></div>
                    </div>
                    <div className="relative group/input">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        required
                        className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition duration-300 text-white placeholder-gray-400 text-base font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone (Optional)"
                      className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition duration-300 text-white placeholder-gray-400 text-base font-medium"
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition duration-300 text-white text-base font-medium"
                    >
                      <option value="">Select Service</option>
                      <option value="web-development">Web & App Development</option>
                      <option value="saas-development">SaaS & Product Development</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                      <option value="cloud-devops">Cloud & DevOps</option>
                      <option value="wordpress">WordPress Services</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="digital-strategy">Digital Strategy</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="ai-solutions">AI Solutions</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project vision, goals, and requirements. What challenges are you facing? What success looks like to you?"
                    rows={5}
                    required
                    className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition duration-300 text-white placeholder-gray-400 resize-none text-base font-medium leading-relaxed"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className={`relative w-full group/btn overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-8 py-5 rounded-2xl font-black text-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-blue-500/25 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 opacity-100"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition duration-500"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          LAUNCH PROJECT
                          <span className="group-hover/btn:translate-x-2 transition duration-300 text-xl">→</span>
                        </span>
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-400/30 rounded-xl">
                      <div className="flex items-center gap-3 text-green-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Message sent successfully! We&apos;ll contact you within 24 hours.</span>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-400/30 rounded-xl">
                      <div className="flex items-center gap-3 text-red-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Failed to send message. Please try again.</span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Side - Visual Content */}
            <div className="space-y-10">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  <span className="text-white drop-shadow-lg">WHERE</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-lg">
                    INNOVATION
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg">MEETS EXECUTION</span>
                </h3>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6">
                <div className="group relative overflow-hidden bg-gradient-to-r from-blue-900/40 to-black/60 rounded-2xl p-6 border border-blue-500/40 hover:border-cyan-400/60 transition duration-500 cursor-pointer backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 translate-x-full group-hover:translate-x-0 transition duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">⚡</div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Lightning Speed Delivery</h4>
                        <p className="text-gray-300 text-sm">We don&apos;t just meet deadlines, we beat them</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-r from-cyan-900/40 to-black/60 rounded-3xl p-8 border border-cyan-500/40 hover:border-blue-400/60 transition duration-500 cursor-pointer backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 translate-x-full group-hover:translate-x-0 transition duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="text-5xl">🎯</div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">Precision Engineering</h4>
                        <p className="text-gray-300 text-lg">Every detail crafted to perfection</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-r from-blue-800/40 to-black/60 rounded-3xl p-8 border border-blue-400/40 hover:border-cyan-300/60 transition duration-500 cursor-pointer backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 translate-x-full group-hover:translate-x-0 transition duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="text-5xl">🚀</div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">Scalable Solutions</h4>
                        <p className="text-gray-300 text-lg">Built to grow exponentially with your success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="relative mt-16">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative bg-black/90 backdrop-blur-2xl rounded-3xl p-10 border border-blue-400/50 text-center shadow-2xl">
                  <h4 className="text-3xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    The Future Is Now
                  </h4>
                  <p className="text-2xl text-white font-bold mb-4">STOP WAITING.</p>
                  <p className="text-xl text-white font-bold mb-2">START BUILDING.</p>
                  <p className="text-gray-300 text-lg">Your breakthrough moment is one conversation away.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .3;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalSection;