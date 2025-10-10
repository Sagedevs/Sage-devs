"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Upload, X, Briefcase, Clock, DollarSign, CheckCircle } from 'lucide-react';

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
    fullName: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    currentRole: '',
    currentCompany: '',
    portfolio: '',
    linkedin: '',
    github: '',
    availability: '',
    expectedSalary: '',
    noticePeriod: '',
    coverLetter: '',
    skills: '',
    education: '',
    referral: ''
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const positions = [
    'Creative Director',
    'Brand Strategist',
    'UX/UI Designer',
    'Digital Marketing Specialist',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Product Manager',
    'Other'
  ];
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
        setTimeout(() => setSubmitSuccess(false), 5000);
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
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-white">Join Sage Devs</h1>
          <p className="text-blue-200 mt-2">Shape the future of digital innovation with us</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Section - Career Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Why Join Us */}
            <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Why Join Sage Devs?</h2>
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
                    <DollarSign className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Competitive Benefits</h3>
                    <p className="text-gray-300 text-sm">Industry-leading compensation and comprehensive benefits package</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="bg-gradient-to-br from-slate-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
              <div className="space-y-3">
                {positions.slice(0, 4).map((position, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer">
                    <span className="text-gray-200">{position}</span>
                    <span className="text-blue-400 text-sm">Apply →</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Perks */}
            <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Perks & Benefits</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-black/20 rounded-lg border border-white/5">
                  <div className="text-2xl mb-2">🏥</div>
                  <p className="text-gray-300 text-sm font-medium">Health Coverage</p>
                </div>
                <div className="text-center p-4 bg-black/20 rounded-lg border border-white/5">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="text-gray-300 text-sm font-medium">Learning Budget</p>
                </div>
                <div className="text-center p-4 bg-black/20 rounded-lg border border-white/5">
                  <div className="text-2xl mb-2">🌴</div>
                  <p className="text-gray-300 text-sm font-medium">Flexible PTO</p>
                </div>
                <div className="text-center p-4 bg-black/20 rounded-lg border border-white/5">
                  <div className="text-2xl mb-2">💻</div>
                  <p className="text-gray-300 text-sm font-medium">Tech Equipment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Application Form */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-2">Application Form</h2>
              <p className="text-gray-300 mb-8">Fill out the form below to apply for a position at Sage Devs</p>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-200">Application submitted successfully! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Lahore, Pakistan"
                      />
                    </div>
                  </div>
                </div>

                {/* Position Details */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Position Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Position Applied For *
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Select a position</option>
                        {positions.map((pos, idx) => (
                          <option key={idx} value={pos}>{pos}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Years of Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Role
                      </label>
                      <input
                        type="text"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Senior Developer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Company
                      </label>
                      <input
                        type="text"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Tech Company Inc."
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Professional Links</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Portfolio URL
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="https://portfolio.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>
                </div>

                {/* Employment Details */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Employment Details</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Availability *
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Expected Salary (PKR) *
                      </label>
                      <input
                        type="text"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="150,000 - 200,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Notice Period
                      </label>
                      <input
                        type="text"
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="1 month"
                      />
                    </div>
                  </div>
                </div>

                {/* Skills & Education */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Skills & Education</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Key Skills *
                      </label>
                      <input
                        type="text"
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="React, Node.js, TypeScript, UI/UX Design..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Education *
                      </label>
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Bachelor's in Computer Science"
                      />
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cover Letter / Why Sage Devs? *
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    placeholder="Tell us why you&apos;re interested in joining Sage Devs and what makes you a great fit for this role..."
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Resume/CV (Optional)
                  </label>
                  <div className="relative">
                    {!file ? (
                      <label className="flex items-center justify-center w-full px-4 py-6 bg-black/30 border-2 border-dashed border-blue-500/30 rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-300">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
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
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Upload className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{file.name}</p>
                            <p className="text-gray-400 text-xs">{(file.size / 1024).toFixed(2)} KB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                        >
                          <X className="w-5 h-5 text-red-400" />
                        </button>
                      </div>
                    )}
                  </div>
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
                    className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-black/30 backdrop-blur-sm border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            Questions about the application process? Contact us at <span className="text-blue-400">contact@sagedevs.tech</span>
          </p>
        </div>
      </div>
    </div>
  );
}