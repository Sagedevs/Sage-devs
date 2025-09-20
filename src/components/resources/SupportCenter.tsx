"use client";
import React, { useState } from 'react';
import { 
  Headset, FileText, Video, MessageSquare, BookOpen, Zap, 
  Clock, Users, ChevronDown, ChevronRight, Search, Phone,
  Mail, Globe, Shield, Star, CheckCircle, AlertCircle
} from 'lucide-react';

const SupportCenter = () => {
  const [activeTab, setActiveTab] = useState('live-support');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const supportTabs = [
    { id: 'live-support', label: 'Live Support', icon: <Headset className="w-5 h-5" /> },
    { id: 'documentation', label: 'Documentation', icon: <FileText className="w-5 h-5" /> },
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
        languages: ['English', 'Spanish', 'French'],
        status: 'online'
      },
      {
        type: 'Phone Support',
        icon: <Phone className="w-6 h-6" />,
        availability: 'Mon-Fri 9AM-6PM EST',
        responseTime: 'Immediate',
        languages: ['English'],
        status: 'online',
        number: '+1 (555) 123-4567'
      },
      {
        type: 'Email Support',
        icon: <Mail className="w-6 h-6" />,
        availability: '24/7',
        responseTime: '< 4 hours',
        languages: ['English', 'Spanish', 'French', 'German'],
        status: 'online',
        email: 'support@company.com'
      }
    ]
  };

  const documentation = {
    sections: [
      {
        title: 'Getting Started',
        items: [
          'Quick Start Guide',
          'Installation Instructions',
          'Basic Configuration',
          'First API Call'
        ]
      },
      {
        title: 'API Reference',
        items: [
          'Authentication',
          'Endpoints Overview',
          'Request/Response Format',
          'Error Codes'
        ]
      },
      {
        title: 'Integration Guides',
        items: [
          'JavaScript SDK',
          'Python SDK',
          'REST API',
          'Webhooks'
        ]
      },
      {
        title: 'Best Practices',
        items: [
          'Security Guidelines',
          'Performance Optimization',
          'Error Handling',
          'Rate Limiting'
        ]
      }
    ]
  };

  const tutorials = {
    categories: [
      {
        title: 'Beginner',
        videos: [
          { title: 'Platform Overview', duration: '5:30', views: '12K' },
          { title: 'Setting Up Your Account', duration: '8:15', views: '8.5K' },
          { title: 'Making Your First Request', duration: '12:45', views: '15K' }
        ]
      },
      {
        title: 'Intermediate',
        videos: [
          { title: 'Advanced Configuration', duration: '18:20', views: '5.2K' },
          { title: 'Error Handling Strategies', duration: '14:10', views: '7.8K' },
          { title: 'Performance Optimization', duration: '22:35', views: '4.1K' }
        ]
      },
      {
        title: 'Advanced',
        videos: [
          { title: 'Custom Integrations', duration: '28:45', views: '2.8K' },
          { title: 'Enterprise Features', duration: '35:12', views: '1.9K' },
          { title: 'Scaling Best Practices', duration: '31:20', views: '3.4K' }
        ]
      }
    ]
  };

  const community = {
    forums: [
      { name: 'General Discussion', posts: '1,247', members: '8,932' },
      { name: 'API Help', posts: '892', members: '5,671' },
      { name: 'Feature Requests', posts: '456', members: '3,298' },
      { name: 'Bug Reports', posts: '234', members: '2,156' }
    ],
    recentTopics: [
      { title: 'How to handle rate limiting?', replies: 23, solved: true },
      { title: 'Best practices for authentication', replies: 17, solved: true },
      { title: 'Integration with React', replies: 8, solved: false },
      { title: 'Webhook setup issues', replies: 12, solved: true }
    ]
  };

  const faqs = [
    {
      question: 'How do I get started with the API?',
      answer: 'Getting started is simple! First, sign up for an account and get your API key. Then follow our Quick Start Guide to make your first API call. We provide SDKs for JavaScript, Python, and other popular languages.'
    },
    {
      question: 'What are the rate limits?',
      answer: 'Our rate limits vary by plan: Free tier allows 1,000 requests/hour, Pro allows 10,000 requests/hour, and Enterprise has custom limits. Rate limit headers are included in all responses.'
    },
    {
      question: 'How can I authenticate my requests?',
      answer: 'We support API key authentication and OAuth 2.0. Include your API key in the Authorization header: "Bearer YOUR_API_KEY". For OAuth, follow our authentication guide.'
    },
    {
      question: 'What support do you offer?',
      answer: 'We offer 24/7 live chat support, email support with <4 hour response time, phone support during business hours, comprehensive documentation, video tutorials, and an active community forum.'
    },
    {
      question: 'How do I report a bug?',
      answer: 'You can report bugs through our support chat, email support@company.com, or post in our Bug Reports forum. Please include steps to reproduce, expected vs actual behavior, and any error messages.'
    },
    {
      question: 'Is there a sandbox environment?',
      answer: 'Yes! We provide a full sandbox environment that mirrors production. Use sandbox API keys to test your integration without affecting live data or incurring charges.'
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

            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
              {channel.type === 'Live Chat' ? 'Start Chat' : 
               channel.type === 'Phone Support' ? 'Call Now' : 'Send Email'}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Enterprise Support</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">What's Included:</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Dedicated support manager
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                99.9% SLA guarantee
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Priority queue access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Custom integration support
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentation = () => (
    <div className="space-y-6">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {documentation.sections.map((section, index) => (
          <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors">
                  <ChevronRight className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <Star className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">Quick Start Guide</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Get up and running in under 5 minutes with our comprehensive quick start guide.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
          Start Now
        </button>
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
              <div key={videoIndex} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Forums</h3>
          <div className="space-y-3">
            {community.forums.map((forum, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <div>
                  <h4 className="text-white font-medium">{forum.name}</h4>
                  <div className="text-sm text-gray-400">
                    {forum.posts} posts • {forum.members} members
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Topics</h3>
          <div className="space-y-3">
            {community.recentTopics.map((topic, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-3">Join Our Community</h3>
        <p className="text-gray-300 mb-4">
          Connect with over 50,000 developers, share knowledge, and get help from experts.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
          Join Now
        </button>
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
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'live-support': return renderLiveSupport();
      case 'documentation': return renderDocumentation();
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
            Comprehensive support resources, detailed documentation, live assistance, and community help - all in one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">50K+</div>
            <div className="text-gray-400 text-sm">Community Members</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">1000+</div>
            <div className="text-gray-400 text-sm">Documentation Articles</div>
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