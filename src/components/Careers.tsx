"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Upload, X, Briefcase, Clock, CheckCircle, ChevronDown, ChevronUp, ArrowLeft, Search, MapPin, Users, Zap, Heart, TrendingUp } from 'lucide-react';

interface JobPosting {
  title: string;
  description: string;
  techStack: string[];
  type: 'Full-time' | 'Part-time' | 'Contract';
  location: string;
}

export default function CareerApplication() {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    location: string;
    position: string;
    experience: string;
    currentRole: string;
    currentCompany: string;
    portfolio: string;
    linkedin: string;
    github: string;
    availability: string;
    expectedSalary: string;
    noticePeriod: string;
    coverLetter: string;
    skills: string;
    education: string;
    referral: string;
    [key: string]: string;
  }>({
    fullName: '', email: '', phone: '', location: '', position: '',
    experience: '', currentRole: '', currentCompany: '', portfolio: '',
    linkedin: '', github: '', availability: '', expectedSalary: '',
    noticePeriod: '', coverLetter: '', skills: '', education: '', referral: ''
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    position: true,
    links: false,
    employment: false,
    skills: false,
    coverLetter: false
  });

  const jobPostings: JobPosting[] = [
    {
      title: 'Creative Director',
      description: 'Lead creative vision and strategy for client projects. Manage design team, establish brand guidelines, and deliver innovative visual solutions.',
      techStack: ['Adobe Creative Suite', 'Figma', 'Brand Strategy', 'Team Leadership'],
      type: 'Full-time',
      location: 'Lahore / Remote'
    },
    {
      title: 'Brand Strategist',
      description: 'Develop comprehensive brand strategies, conduct market research, and create positioning frameworks that drive business growth.',
      techStack: ['Market Research', 'Brand Positioning', 'Content Strategy', 'Analytics'],
      type: 'Full-time',
      location: 'Lahore / Hybrid'
    },
    {
      title: 'UX/UI Designer',
      description: 'Design mobile and web interfaces with focus on user experience. Create wireframes, prototypes, and conduct user testing.',
      techStack: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Responsive Design'],
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'Execute digital campaigns across multiple channels. Manage SEO/SEM, social media marketing, and analyze campaign performance.',
      techStack: ['Google Ads', 'SEO', 'Social Media', 'Analytics', 'Content Marketing'],
      type: 'Full-time',
      location: 'Lahore / Hybrid'
    },
    {
      title: 'Full Stack Developer',
      description: 'Build scalable web applications end-to-end. Work with modern frameworks and cloud infrastructure to deliver high-performance solutions.',
      techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Frontend Developer',
      description: 'Create responsive, performant user interfaces. Collaborate with designers to implement pixel-perfect designs with modern frameworks.',
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Backend Developer',
      description: 'Design and implement robust APIs and server-side logic. Optimize database performance and ensure application scalability.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'Microservices'],
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Product Manager',
      description: 'Define product roadmap, gather requirements, and coordinate with cross-functional teams to deliver exceptional products.',
      techStack: ['Agile/Scrum', 'Product Strategy', 'Jira', 'User Stories', 'Analytics'],
      type: 'Full-time',
      location: 'Lahore / Hybrid'
    },
    {
      title: 'WordPress Developer',
      description: 'Develop and maintain WordPress websites, customize themes and plugins, optimize site performance, and ensure security best practices.',
      techStack: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript', 'WooCommerce'],
      type: 'Full-time',
      location: 'Remote / Hybrid'
    },
    {
      title: 'Shopify Developer',
      description: 'Build and customize Shopify stores, implement apps and integrations, optimize UX/UI, and improve e-commerce performance.',
      techStack: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript', 'Shopify Apps'],
      type: 'Full-time',
      location: 'Remote / Hybrid'
    }
  ];

  const filteredJobs = jobPostings.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setFormData(prev => ({ ...prev, position: jobTitle }));
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    if (file) {
      formDataToSend.append('resume', file);
    }

    try {
      const response = await fetch('https://formspree.io/f/xzzjgdbq', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          fullName: '', email: '', phone: '', location: '', position: '',
          experience: '', currentRole: '', currentCompany: '', portfolio: '',
          linkedin: '', github: '', availability: '', expectedSalary: '',
          noticePeriod: '', coverLetter: '', skills: '', education: '', referral: ''
        });
        setFile(null);
        setTimeout(() => {
          setSubmitSuccess(false);
          setShowForm(false);
          scrollToTop();
        }, 5000);
      }
    } catch {
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Join Sage Devs</h1>
              <p className="text-blue-200 mt-1 text-sm sm:text-base">Shape the future of digital innovation</p>
            </div>
            {showForm && (
              <button
                onClick={() => {
                  setShowForm(false);
                  scrollToTop();
                }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Positions</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {!showForm ? (
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Left Section - Career Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why Join Us */}
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Join Sage Devs?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Cutting-Edge Projects</h3>
                      <p className="text-gray-300 text-sm">Work on innovative solutions that push technological boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Flexible Work Culture</h3>
                      <p className="text-gray-300 text-sm">Remote options and flexible hours for work-life balance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Growth Opportunities</h3>
                      <p className="text-gray-300 text-sm">Continuous learning and clear career progression paths</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Collaborative Environment</h3>
                      <p className="text-gray-300 text-sm">Work with talented professionals in a supportive team culture</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perks */}
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Perks & Benefits</h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-black/20 rounded-lg border border-white/5">
                    <Heart className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <p className="text-gray-300 text-xs sm:text-sm font-medium">Health Coverage</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-black/20 rounded-lg border border-white/5">
                    <Briefcase className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-300 text-xs sm:text-sm font-medium">Learning Budget</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-black/20 rounded-lg border border-white/5">
                    <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-gray-300 text-xs sm:text-sm font-medium">Flexible PTO</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-black/20 rounded-lg border border-white/5">
                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <p className="text-gray-300 text-xs sm:text-sm font-medium">Tech Equipment</p>
                  </div>
                </div>
              </div>

              {/* Hiring Process */}
              <div className="bg-gradient-to-br from-slate-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Our Hiring Process</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-semibold text-sm">1</div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Application Review</h4>
                      <p className="text-gray-400 text-xs mt-1">We review your application within 3-5 business days</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-semibold text-sm">2</div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Initial Screening</h4>
                      <p className="text-gray-400 text-xs mt-1">30-minute call to discuss your background and goals</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-semibold text-sm">3</div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Technical/Portfolio Review</h4>
                      <p className="text-gray-400 text-xs mt-1">Assess your skills through practical evaluation</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-semibold text-sm">4</div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Team Interview</h4>
                      <p className="text-gray-400 text-xs mt-1">Meet your potential team members and leadership</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-semibold text-sm">5</div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Offer</h4>
                      <p className="text-gray-400 text-xs mt-1">Receive your offer and join the team!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Open Positions */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-slate-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Open Positions</h2>
                    <p className="text-gray-300 text-sm mt-1">{filteredJobs.length} positions available</p>
                  </div>
                  <div className="relative flex-1 sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search positions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredJobs.map((job, index) => (
                    <div key={index} className="bg-black/20 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all overflow-hidden">
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium">
                                <Briefcase className="w-3 h-3" />
                                {job.type}
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs font-medium">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.techStack.map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleApplyClick(job.title)}
                          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No positions found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div id="application-form" className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Application Form</h2>
                <p className="text-gray-300 text-sm">Applying for: <span className="text-blue-400 font-semibold">{selectedJob}</span></p>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-200 font-semibold mb-1">Application Submitted Successfully!</p>
                      <p className="text-green-300 text-sm">Thank you for applying. We&apos;ll review your application and reach out within 1-2 weeks if your profile matches our requirements.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-black/20 rounded-xl p-4 sm:p-6 border border-white/5">
                  <button
                    type="button"
                    onClick={() => toggleSection('personal')}
                    className="w-full flex items-center justify-between mb-4"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white">Personal Information</h3>
                    {expandedSections.personal ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {expandedSections.personal && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Location *</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="Lahore, Pakistan"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Position Details */}
                <div className="bg-black/20 rounded-xl p-4 sm:p-6 border border-white/5">
                  <button
                    type="button"
                    onClick={() => toggleSection('position')}
                    className="w-full flex items-center justify-between mb-4"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white">Position & Experience</h3>
                    {expandedSections.position ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {expandedSections.position && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience *</label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select experience</option>
                          <option value="0-1">0-1 years</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Current Role</label>
                        <input
                          type="text"
                          name="currentRole"
                          value={formData.currentRole}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="Senior Developer"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Current Company</label>
                        <input
                          type="text"
                          name="currentCompany"
                          value={formData.currentCompany}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="Tech Company Inc."
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Professional Links */}
                <div className="bg-black/20 rounded-xl p-4 sm:p-6 border border-white/5">
                  <button
                    type="button"
                    onClick={() => toggleSection('links')}
                    className="w-full flex items-center justify-between mb-4"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white">Professional Links</h3>
                    {expandedSections.links ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {expandedSections.links && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Portfolio URL</label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="https://portfolio.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn Profile</label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">GitHub Profile</label>
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="https://github.com/..."
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Employment Details */}
                <div className="bg-black/20 rounded-xl p-4 sm:p-6 border border-white/5">
                  <button
                    type="button"
                    onClick={() => toggleSection('employment')}
                    className="w-full flex items-center justify-between mb-4"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white">Employment Details</h3>
                    {expandedSections.employment ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {expandedSections.employment && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Availability *</label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select availability</option>
                          <option value="immediate">Immediate</option>
                          <option value="2-weeks">2 Weeks</option>
                          <option value="1-month">1 Month</option>
                          <option value="2-months">2 Months</option>
                          <option value="3-months">3+ Months</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Expected Salary (PKR) *</label>
                        <input
                          type="text"
                          name="expectedSalary"
                          value={formData.expectedSalary}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="150,000 - 200,000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Notice Period</label>
                        <input
                          type="text"
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="1 month"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Skills & Education */}
                <div className="bg-black/20 rounded-xl p-4 sm:p-6 border border-white/5">
                  <button
                    type="button"
                    onClick={() => toggleSection('skills')}
                    className="w-full flex items-center justify-between mb-4"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white">Skills & Education</h3>
                    {expandedSections.skills ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {expandedSections.skills && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Key Skills *</label>
                        <input
                          type="text"
                          name="skills"
                          value={formData.skills}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="React, Node.js, TypeScript, UI/UX Design..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Education *</label>
                        <input
                          type="text"
                          name="education"
                          value={formData.education}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="Bachelor's in Computer Science"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Cover Letter */}
                <div className="bg-black/20 rounded-xl p-4 sm:p-6 border border-white/5">
                  <button
                    type="button"
                    onClick={() => toggleSection('coverLetter')}
                    className="w-full flex items-center justify-between mb-4"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white">Cover Letter & Resume</h3>
                    {expandedSections.coverLetter ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {expandedSections.coverLetter && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Why Sage Devs? *
                        </label>
                        <textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                          placeholder="Tell us why you're interested in joining Sage Devs and what makes you a great fit for this role..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Resume/CV (Optional)
                        </label>
                        <div className="relative">
                          {!file ? (
                            <label className="flex flex-col items-center justify-center w-full px-4 py-8 bg-black/30 border-2 border-dashed border-blue-500/30 rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
                              <Upload className="w-10 h-10 text-blue-400 mb-3" />
                              <p className="text-sm text-gray-300 text-center">Click to upload or drag and drop</p>
                              <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                              <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                              />
                            </label>
                          ) : (
                            <div className="flex items-center justify-between px-4 py-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Upload className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                  <p className="text-white text-sm font-medium break-all">{file.name}</p>
                                  <p className="text-gray-400 text-xs">{(file.size / 1024).toFixed(2)} KB</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={removeFile}
                                className="p-2 hover:bg-red-500/20 rounded-lg transition-colors flex-shrink-0"
                              >
                                <X className="w-5 h-5 text-red-400" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Referral */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="website">Company Website</option>
                    <option value="referral">Employee Referral</option>
                    <option value="job-board">Job Board</option>
                    <option value="social-media">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/30 backdrop-blur-sm border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            Questions about the application process? Contact us at{' '}
            <a href="mailto:contact@sagedevs.tech" className="text-blue-400 hover:text-blue-300 transition-colors">
              contact@sagedevs.tech
            </a>
          </p>
        </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          hiringOrganization: {
            "@type": "Organization",
            name: "Sage Devs",
            sameAs: "https://sagedevs.tech"
          },
          jobLocation: jobPostings.map(job => ({
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location.split('/')[0].trim(),
              addressCountry: "PK"
            }
          })),
          title: jobPostings.map(job => job.title),
          description: jobPostings.map(job => job.description),
          employmentType: jobPostings.map(job => job.type.toUpperCase().replace('-', '_')),
          datePosted: new Date().toISOString()
        })}
      </script>
    </div>
  );
}