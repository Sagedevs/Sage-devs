"use client";
import React, { useState } from 'react';
import { 
  Headset, FileText, Video, MessageSquare, BookOpen, Zap, 
  Clock, Users, ChevronDown, ChevronRight, Search, Phone,
  Mail, Star, CheckCircle, ExternalLink
} from 'lucide-react';

const SupportCenter = () => {
  const [activeTab, setActiveTab] = useState('live-support');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Updated with actual URLs from sagedevs.tech
  const LINKS = {
    liveChat: 'https://wa.me/923259684493', // WhatsApp link
    phone: 'tel:+923259684493',
    email: 'mailto:contact@sagedevs.tech',
    enterprise: 'mailto:contact@sagedevs.tech',
    quickStart: '/resources',
    contact: '/contact',
    community: '#', // Placeholder since not specified
    tutorials: '#', // Placeholder since not specified
  };

  const supportTabs = [
    { id: 'live-support', label: 'Live Support', icon: <Headset className="w-5 h-5" /> },
    { id: 'tutorials', label: 'Tutorials', icon: <Video className="w-5 h-5" /> },
    { id: 'community', label: 'Community', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'faq', label: 'FAQ', icon: <BookOpen className="w-5 h-5" /> }
  ];

  const liveSupport = {
    channels: [
      {
        type: 'Live Chat',
        icon: <MessageSquare className="w-6 h-6" />,
        availability: '24/7',
        responseTime: '< 2 minutes',
        languages: ['English', 'Urdu'],
        status: 'online',
        link: LINKS.liveChat,
        buttonText: 'Start Chat on WhatsApp'
      },
      {
        type: 'Phone Support',
        icon: <Phone className="w-6 h-6" />,
        availability: 'Mon-Sun 9AM-11PM PKT',
        responseTime: 'Immediate',
        languages: ['English', 'Urdu'],
        status: 'online',
        number: '+92 325 9684493',
        link: LINKS.phone,
        buttonText: 'Call Now'
      },
      {
        type: 'Email Support',
        icon: <Mail className="w-6 h-6" />,
        availability: '24/7',
        responseTime: '< 4 hours',
        languages: ['English', 'Urdu'],
        status: 'online',
        email: 'contact@sagedevs.tech',
        link: LINKS.email,
        buttonText: 'Send Email'
      }
    ]
  };

  const tutorials = {
    categories: [
      {
        title: 'Beginner',
        videos: [
          { title: 'Platform Overview', duration: '5:30', views: '12K', link: LINKS.tutorials },
          { title: 'Setting Up Your Account', duration: '8:15', views: '8.5K', link: LINKS.tutorials },
          { title: 'Making Your First Request', duration: '12:45', views: '15K', link: LINKS.tutorials }
        ]
      },
      {
        title: 'Intermediate',
        videos: [
          { title: 'Advanced Configuration', duration: '18:20', views: '5.2K', link: LINKS.tutorials },
          { title: 'Error Handling Strategies', duration: '14:10', views: '7.8K', link: LINKS.tutorials },
          { title: 'Performance Optimization', duration: '22:35', views: '4.1K', link: LINKS.tutorials }
        ]
      },
      {
        title: 'Advanced',
        videos: [
          { title: 'Custom Integrations', duration: '28:45', views: '2.8K', link: LINKS.tutorials },
          { title: 'Enterprise Features', duration: '35:12', views: '1.9K', link: LINKS.tutorials },
          { title: 'Scaling Best Practices', duration: '31:20', views: '3.4K', link: LINKS.tutorials }
        ]
      }
    ]
  };

  const community = {
    forums: [
      { name: 'General Discussion', posts: '1,247', members: '8,932', link: LINKS.community },
      { name: 'API Help', posts: '892', members: '5,671', link: LINKS.community },
      { name: 'Feature Requests', posts: '456', members: '3,298', link: LINKS.community },
      { name: 'Bug Reports', posts: '234', members: '2,156', link: LINKS.community }
    ],
    recentTopics: [
      { title: 'How to handle rate limiting?', replies: 23, solved: true, link: LINKS.community },
      { title: 'Best practices for authentication', replies: 17, solved: true, link: LINKS.community },
      { title: 'Integration with React', replies: 8, solved: false, link: LINKS.community },
      { title: 'Webhook setup issues', replies: 12, solved: true, link: LINKS.community }
    ]
  };

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is simple! Check out our resources page for comprehensive guides and documentation. We provide everything you need to begin your project quickly.'
    },
    {
      question: 'What are your working hours?',
      answer: 'We offer 24/7 email support with <4 hour response time. Phone support is available from 9AM to 11PM Pakistan Time, 7 days a week. Live chat via WhatsApp is available 24/7.'
    },
    {
      question: 'How can I contact your team?',
      answer: 'You can reach us through multiple channels: WhatsApp chat, phone call at +92 325 9684493, or email at contact@sagedevs.tech. We typically respond within minutes during business hours.'
    },
    {
      question: 'What support do you offer?',
      answer: 'We offer 24/7 WhatsApp support, email support with <4 hour response time, phone support during extended hours, comprehensive resources, and personalized consultation for your projects.'
    },
    {
      question: 'How do I report a bug or issue?',
      answer: 'You can report issues through our WhatsApp support, email at contact@sagedevs.tech. Please include detailed steps to reproduce, expected vs actual behavior, and any relevant error messages or screenshots.'
    },
    {
      question: 'Do you offer custom development services?',
      answer: 'Yes! We specialize in custom software development, web applications, and digital solutions. Contact us at contact@sagedevs.tech to discuss your specific requirements and get a personalized quote.'
    }
  ];

  const renderLiveSupport = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {liveSupport.channels.map((channel, index) => (
          <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-400">{channel.icon}</div>
              <h3 className="text-lg font-semibold text-white">{channel.type}</h3>
              <div className={`w-2 h-2 rounded-full ${channel.status === 'online' ? 'bg-green-400' : 'bg-red-400'}`} />
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400">Availability: </span>
                <span className="text-white">{channel.availability}</span>
              </div>
              <div>
                <span className="text-gray-400">Response Time: </span>
                <span className="text-white">{channel.responseTime}</span>
              </div>
              <div>
                <span className="text-gray-400">Languages: </span>
                <span className="text-white">{channel.languages.join(', ')}</span>
              </div>
              {channel.number && (
                <div>
                  <span className="text-gray-400">Phone: </span>
                  <span className="text-blue-400">{channel.number}</span>
                </div>
              )}
              {channel.email && (
                <div>
                  <span className="text-gray-400">Email: </span>
                  <span className="text-blue-400">{channel.email}</span>
                </div>
              )}
            </div>

            <a 
              href={channel.link}
              className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors text-center"
              target={channel.link.startsWith('http') ? '_blank' : '_self'}
              rel={channel.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              {channel.buttonText}
            </a>
          </div>
        ))}
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Enterprise & Custom Solutions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">What We Offer:</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Custom software development
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Dedicated project management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Priority support access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Custom integration services
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a 
              href={LINKS.enterprise}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Contact for Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTutorials = () => (
    <div className="space-y-6">
      {tutorials.categories.map((category, index) => (
        <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
          <div className="space-y-3">
            {category.videos.map((video, videoIndex) => (
              <a
                key={videoIndex}
                href={video.link}
                className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                    <Video className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{video.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{video.duration}</span>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">More Resources Available</h3>
        <p className="text-gray-300 mb-4">
          Explore our complete library of tutorials, guides, and documentation.
        </p>
        <a 
          href={LINKS.quickStart}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Visit Resources <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Discussion Areas</h3>
          <div className="space-y-3">
            {community.forums.map((forum, index) => (
              <a
                key={index}
                href={forum.link}
                className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div>
                  <h4 className="text-white font-medium">{forum.name}</h4>
                  <div className="text-sm text-gray-400">
                    {forum.posts} posts • {forum.members} members
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Discussions</h3>
          <div className="space-y-3">
            {community.recentTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.link}
                className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm">{topic.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                    <span>{topic.replies} replies</span>
                    {topic.solved && (
                      <div className="flex items-center gap-1 text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        Solved
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">Get in Touch</h3>
        <p className="text-gray-300 mb-4">
          Have questions? Reach out to our team directly for personalized assistance.
        </p>
        <a 
          href={LINKS.contact}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Contact Us <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
          <button
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
          >
            <h3 className="text-white font-medium">{faq.question}</h3>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
          </button>
          {expandedFaq === index && (
            <div className="px-6 pb-6">
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 text-center mt-8">
        <h3 className="text-xl font-semibold text-white mb-3">Still have questions?</h3>
        <p className="text-gray-300 mb-4">
          Our team is here to help you get the answers you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={LINKS.liveChat}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Chat
          </a>
          <a 
            href={LINKS.contact}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'live-support': return renderLiveSupport();
      case 'tutorials': return renderTutorials();
      case 'community': return renderCommunity();
      case 'faq': return renderFAQ();
      default: return renderLiveSupport();
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,64,175,0.1),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
            Complete Support Center
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Everything You Need
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-white bg-clip-text">
              Right Here
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive support resources, direct communication channels, and personalized assistance - all in one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400 text-sm">WhatsApp Support</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">&lt;2min</div>
            <div className="text-gray-400 text-sm">Average Response</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {supportTabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default SupportCenter;