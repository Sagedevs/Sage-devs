"use client";
import React from 'react';
import { Code, Zap, ArrowRight, Users, Globe, Target, Heart, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const positions = [
  {
    title: 'Senior Full-Stack Developer',
    type: 'Full-time',
    location: 'Remote / Lahore',
    description: 'Build scalable web applications using cutting-edge technologies. Lead development of enterprise-grade solutions with React, Next.js, and Node.js for global clients.',
    requirements: ['5+ years full-stack development', 'Expert in React, Next.js, Node.js', 'Experience with cloud platforms (AWS/Azure)', 'Strong problem-solving abilities'],
    skills: ['React & Next.js', 'Node.js & Express', 'PostgreSQL/MongoDB', 'RESTful APIs & GraphQL'],
    benefits: ['Competitive Salary', 'Remote Work', 'Health Insurance', 'Learning Budget'],
    salary: '$40K - $55K'
  },
  {
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'Remote / Lahore',
    description: 'Develop AI-powered automation solutions and intelligent systems. Work with OpenAI, TensorFlow, and LangChain to build custom ML models that solve real business challenges.',
    requirements: ['3+ years AI/ML experience', 'Proficiency in Python & TensorFlow', 'Experience with LangChain/OpenAI', 'Strong mathematical foundation'],
    skills: ['Machine Learning', 'Natural Language Processing', 'Python & TensorFlow', 'Model Deployment'],
    benefits: ['AI Tools Access', 'Research Time', 'Conference Budget', 'Flexible Hours'],
    salary: '$35K - $50K'
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Remote / Lahore',
    description: 'Design beautiful, user-centered interfaces for web and mobile applications. Create comprehensive design systems and conduct user research to drive product decisions.',
    requirements: ['4+ years UI/UX design', 'Expert in Figma/Adobe XD', 'Strong portfolio of digital products', 'User research experience'],
    skills: ['User Interface Design', 'Prototyping & Wireframing', 'Design Systems', 'User Research'],
    benefits: ['Design Tools License', 'Creative Freedom', 'Portfolio Projects', 'Skill Development'],
    salary: '$30K - $45K'
  },
  {
    title: 'WordPress Developer',
    type: 'Full-time',
    location: 'Remote / Lahore',
    description: 'Build custom WordPress solutions with advanced functionality. Develop themes, plugins, and optimize performance for high-traffic websites serving global audiences.',
    requirements: ['3+ years WordPress development', 'Custom theme/plugin expertise', 'PHP & MySQL proficiency', 'Performance optimization skills'],
    skills: ['WordPress Core', 'PHP Development', 'MySQL Database', 'WooCommerce'],
    benefits: ['Remote Work', 'Project Variety', 'Skill Enhancement', 'Team Collaboration'],
    salary: '$25K - $38K'
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote / Lahore',
    description: 'Manage cloud infrastructure and automate deployment pipelines. Ensure 99.9% uptime with robust monitoring, scaling, and security implementations for client projects.',
    requirements: ['3+ years DevOps experience', 'AWS/Azure expertise', 'Docker & Kubernetes knowledge', 'CI/CD pipeline experience'],
    skills: ['Cloud Infrastructure', 'Docker & Kubernetes', 'CI/CD Automation', 'Monitoring Tools'],
    benefits: ['Certification Support', 'Tool Access', 'Career Growth', 'Tech Conferences'],
    salary: '$35K - $48K'
  },
  {
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Hybrid / Lahore',
    description: 'Lead technical projects from conception to delivery. Coordinate cross-functional teams, manage client relationships, and ensure timely delivery of high-quality solutions.',
    requirements: ['4+ years project management', 'Technical background preferred', 'Agile/Scrum certification', 'Client management experience'],
    skills: ['Project Planning', 'Team Leadership', 'Agile Methodologies', 'Client Communication'],
    benefits: ['Leadership Training', 'Team Events', 'Performance Bonuses', 'Career Advancement'],
    salary: '$30K - $42K'
  }
];

const Careers = () => {
  const handleApplyClick = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-black"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-600/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-blue-400/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/20 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-cyan-500/20 rounded-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '6s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-16 lg:mb-24">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30 mb-6 animate-fade-in">
                  <Zap className="w-4 h-4" />
                  We&apos;re Hiring
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Build The Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 animate-gradient">
                  Digital Excellence
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                Join Sage Devs and work on cutting-edge web applications, AI solutions, and digital platforms 
                that empower businesses worldwide to achieve their boldest ambitions.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                {[
                  { value: '500+', label: 'Projects Delivered' },
                  { value: '20+', label: 'Team Members' },
                  { value: '50+', label: 'Industries Served' },
                  { value: '24/7', label: 'Support Available' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions Header */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">Open Positions</h2>
              <p className="text-gray-400 text-base">Join our team and help build digital solutions that make a real impact</p>
            </div>

            {/* Positions Grid */}
            <div className="grid gap-6 lg:gap-8 mb-20">
              {positions.map((position, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1">
                    
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/30">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs font-medium rounded-full flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            {position.location}
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 text-xs font-semibold rounded-full border border-green-500/30">
                            {position.salary}
                          </span>
                        </div>
                        
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {position.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed mb-4 text-base">
                          {position.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-3 gap-6 mt-6">
                          <div>
                            <h5 className="text-blue-300 font-bold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-1 h-4 bg-blue-400 rounded"></div>
                              Requirements
                            </h5>
                            <ul className="space-y-2">
                              {position.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-2 text-gray-300 text-xs">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-cyan-300 font-bold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-1 h-4 bg-cyan-400 rounded"></div>
                              Key Skills
                            </h5>
                            <ul className="space-y-2">
                              {position.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-green-300 font-bold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                              <div className="w-1 h-4 bg-green-400 rounded"></div>
                              Benefits
                            </h5>
                            <ul className="space-y-2">
                              {position.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <Link 
                          href="/careers/apply"
                          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 flex items-center gap-2 justify-center text-sm"
                        >
                          Apply Now
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Company Values */}
            <div className="mb-20 lg:mb-32">
              <h4 className="text-center text-2xl lg:text-3xl font-bold text-white mb-3">Why Join Sage Devs?</h4>
              <p className="text-center text-gray-400 text-base mb-8 max-w-2xl mx-auto">
                We&apos;re building the future of digital experiences with cutting-edge technology and a passionate team
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Code, title: 'Cutting-Edge Tech', desc: 'Work with React, Next.js, AI/ML, and the latest technologies shaping the digital landscape' },
                  { icon: TrendingUp, title: 'Real Impact', desc: 'Build solutions that drive measurable growth for startups, enterprises, and global brands' },
                  { icon: Users, title: 'Collaborative Team', desc: 'Join 20+ talented developers, designers, and innovators pushing boundaries together' },
                  { icon: Heart, title: 'Growth Culture', desc: 'Continuous learning with access to courses, certifications, and mentorship programs' }
                ].map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="group text-center p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-blue-400" />
                        </div>
                      </div>
                      <h5 className="text-white font-bold mb-2 text-base">{value.title}</h5>
                      <p className="text-gray-400 text-xs leading-relaxed">{value.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="relative bg-gradient-to-br from-blue-900/30 via-slate-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-10 lg:p-16 max-w-5xl mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 animate-pulse"></div>
                <div className="relative z-10">
                  <Target className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                    Don&apos;t See Your Perfect Role?
                  </h3>
                  <p className="text-gray-300 mb-8 text-base leading-relaxed max-w-3xl mx-auto">
                    We&apos;re always looking for talented developers, designers, and innovators who share our passion 
                    for building exceptional digital experiences. Share your portfolio and let&apos;s explore opportunities together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact/portfolio"
                      className="px-8 py-3 text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 flex items-center gap-2 justify-center"
                    >
                      Send Your Portfolio
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="/contact"
                      className="px-8 py-3 text-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 justify-center"
                    >
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Careers;