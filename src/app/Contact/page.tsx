"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { 
  Zap, 
  Target, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  HelpCircle,
  Rocket,
  PhoneCall
} from "lucide-react";
import Squares from "@/blocks/Backgrounds/Squares/Squares";

const socialLinks = [
  {
    platform: "GitHub",
    href: "https://github.com/abdulahad-2",
    iconPath: "/icons/github_icon.svg",
  },
  {
    href: "https://www.linkedin.com/in/abdul-ahad-7908a82b4/",
    iconPath: "/icons/linkedin_icon.svg",
  },
  {
    platform: "Gmail",
    href: "mailto:contact@sagedevs.tech",
    iconPath: "/icons/gmail_icon.svg",
  },
];

const contactInfo = {
  email: "contact@sagedevs.tech",
  phone: "+92 3259684493",
  location: "Lahore, Punjab, Pakistan"
};

const workingHours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const contactMethods = [
  {
    title: "Quick Response",
    description: "Get a response within 24 hours",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Professional Support",
    description: "Expert guidance for your projects",
    icon: Target,
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Flexible Communication",
    description: "Multiple ways to reach out",
    icon: MessageSquare,
    color: "from-cyan-500 to-blue-500",
  },
];

const faqs = [
  {
    question: "What's your typical response time?",
    answer: "I usually respond within 24 hours during business days.",
  },
  {
    question: "Do you work on weekends?",
    answer:
      "Limited availability on weekends, but urgent matters are addressed.",
  },
  {
    question: "What services do you offer?",
    answer: "Full-stack development, UI/UX design, and technical consulting.",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    console.log("Contact component mounted!");
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await axios.post(
        'https://formspree.io/f/xeorkorj',
        formData,
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        formRef.current?.reset();
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
    <>
      {/* Hero Section with Background */}
      <section className="flex flex-col items-center justify-center min-h-screen py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          .delay-300 {
            animation-delay: 0.3s;
            opacity: 0;
          }
          .delay-500 {
            animation-delay: 0.5s;
            opacity: 0;
          }
          .delay-700 {
            animation-delay: 0.7s;
            opacity: 0;
          }
        `}</style>
        
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-15">
          <Squares
            speed={0.5}
            squareSize={50}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>
        
        {/* Additional animated background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse delay-700"></div>

        <div className="text-center mb-12 md:mb-16 z-10">
          <div className="mb-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-center bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent animate-fade-in-up">
              Get In Touch
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full animate-fade-in delay-300"></div>
          <p className="mt-6 text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in delay-500">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project and create something amazing together.
          </p>
          <div className="flex justify-center mt-8 animate-fade-in delay-700">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/70 text-sm">Available for projects</span>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl z-10">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {method.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Contact Section with Same Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-10">
          <Squares
            speed={0.3}
            squareSize={40}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>

        <div className="w-full max-w-md md:max-w-3xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-cyan-400 transition-colors duration-300 text-lg font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white text-lg font-medium">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Connect with Me
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <Link
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-white/10 to-white/5 rounded-xl flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300 group-hover:scale-110 border border-white/20 group-hover:border-transparent">
                      <Image
                        src={link.iconPath}
                        alt={`${link.platform} icon`}
                        width={24}
                        height={24}
                        className="object-contain filter invert group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {link.platform}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Send a Message
            </h2>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              ref={formRef}
              className="space-y-6 scroll-mt-28"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white/80 text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Mail className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-400/30 rounded-xl mt-4">
                  <div className="flex items-center gap-3 text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Message sent successfully! We&apos;ll get back to you soon.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-400/30 rounded-xl mt-4">
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
      </section>
      {/* Working Hours & FAQ Section with Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-8">
          <Squares
            speed={0.2}
            squareSize={60}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Working Hours */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Working Hours
              </h3>
            </div>
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <span className="text-white font-medium">
                    {schedule.day}
                  </span>
                  <span className="text-white/70">{schedule.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-sm text-white/80">
                  <span className="text-blue-400 font-medium">Pro Tip:</span> For urgent
                  matters, mention it in your subject line!
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Frequently Asked
              </h3>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {faq.question}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                  {index < faqs.length - 1 && (
                    <hr className="mt-4 border-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section with Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-12">
          <Squares
            speed={0.4}
            squareSize={45}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Ready to Start?
          </h3>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Don&apos;t let your ideas stay as just ideas. Let&apos;s turn them
            into reality together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Rocket className="w-5 h-5" />
              Start a Project
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <PhoneCall className="w-5 h-5" />
              Quick Call
            </a>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>
    </>
  );
}