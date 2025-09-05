"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import Squares from "@/blocks/Backgrounds/Squares/Squares";

const socialLinks = [
  {
    platform: "GitHub",
    href: "https://github.com/abdulahad-2",
    iconPath: "/icons/github_icon.svg",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-ahad-7908a82b4/",
    iconPath: "/icons/linkedin_icon.svg",
  },
  {
    platform: "Gmail",
    href: "mailto:abdul.ahadt732@gmail.com",
    iconPath: "/icons/gmail_icon.svg",
  },
];

const contactInfo = {
  email: "abdul.ahadt732@gmail.com",
  phone: "+92 3259684493",
  location: "Lahore, Punjab, Pakistan",
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
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Professional Support",
    description: "Expert guidance for your projects",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Flexible Communication",
    description: "Multiple ways to reach out",
    icon: "💬",
    color: "from-purple-500 to-pink-500",
  },
];

const faqs = [
  {
    question: "What&apos;s your typical response time?",
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
  // This useEffect was added to ensure the component structure is valid,
  // addressing the "Expression expected" error if it was due to a missing block closure.
  useEffect(() => {
    // Optional: Add any logic that should run after component mounts
    console.log("Contact component mounted!");
  }, []); // Empty dependency array means this runs once after initial render

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);

    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-8 md:py-6 lg:py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16 z-10">
          <BlurText
            text="Get In Touch"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
          />
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project and create something amazing together.
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-4xl z-10">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-white/70">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-15">
          <Squares
            speed={0.5}
            squareSize={50}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-800/30">
        <div className="w-full max-w-md md:max-w-3xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.email && (
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">📧</span>
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
                )}

                {contactInfo.phone && (
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.location && (
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Location</p>
                      <p className="text-white text-lg font-medium">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                    <div className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300 group-hover:scale-110">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
              >
                Send Message ✨
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Working Hours & FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Working Hours */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Working Hours
              </h3>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <span className="text-white font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-white/70">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl border border-green-500/30">
                <p className="text-sm text-white/80">
                  <span className="text-green-400">💡 Pro Tip:</span> For urgent
                  matters, mention it in your subject line!
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Frequently Asked
              </h3>
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)]"></div>

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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start a Project 🚀
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Quick Call 📞
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>
    </>
  );
}
