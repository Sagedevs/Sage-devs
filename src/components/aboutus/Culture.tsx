"use client";
import React from 'react';
import { Users, Heart, Target, Shield, Zap, Award } from 'lucide-react';

const values = [
  {
    title: 'Innovation',
    subtitle: 'Forward-Thinking Solutions',
    description: 'We stay ahead of the curve by embracing new technologies and modern development practices. Our team continuously learns and adapts to deliver cutting-edge solutions.',
    icon: Zap,
    stats: 'Always Learning',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Collaboration',
    subtitle: 'Team Success',
    description: 'We believe great work comes from great teamwork. Our collaborative approach ensures every project benefits from diverse perspectives and collective expertise.',
    icon: Users,
    stats: '20 Team Members',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Quality',
    subtitle: 'Excellence in Delivery',
    description: 'We take pride in delivering high-quality work that exceeds expectations. Every line of code, every design element is crafted with attention to detail.',
    icon: Award,
    stats: '98% Client Satisfaction',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    title: 'Integrity',
    subtitle: 'Trust & Transparency',
    description: 'Honest communication and ethical practices guide everything we do. We build lasting relationships through transparency and reliability.',
    icon: Shield,
    stats: '100% Transparency',
    color: 'from-orange-500 to-orange-600'
  }
];

const perks = [
  { name: 'Flexible Hours', description: 'Work-life balance', icon: Users, category: 'Lifestyle' },
  { name: 'Remote Options', description: 'Hybrid work model', icon: Users, category: 'Freedom' },
  { name: 'Learning Budget', description: 'Course & book allowance', icon: Target, category: 'Growth' },
  { name: 'Team Events', description: 'Monthly meetups', icon: Users, category: 'Culture' },
  { name: 'Health Coverage', description: 'Medical insurance', icon: Heart, category: 'Wellness' },
  { name: 'Career Growth', description: 'Clear advancement paths', icon: Target, category: 'Growth' },
  { name: 'Modern Tools', description: 'Latest tech stack', icon: Zap, category: 'Tools' },
  { name: 'Project Variety', description: 'Diverse client work', icon: Award, category: 'Experience' }
];

const achievements = [
  { number: '20+', label: 'Team Members', description: 'Growing team', trend: 'Lahore, Pakistan' },
  { number: '500+', label: 'Projects Delivered', description: 'Since 2023', trend: 'Enterprise Grade' },
  { number: '98%', label: 'Client Satisfaction', description: 'Verified reviews', trend: 'Top Rated' },
  { number: '4+', label: 'Years Strong', description: 'Founded 2023', trend: 'Growing Fast' }
];

const testimonials = [
  {
    quote: "Working here has accelerated my growth as a developer. The projects are challenging, the team is supportive, and there's real opportunity to make an impact.",
    author: "Team Member",
    role: "Full Stack Developer",
    years: "3+ year"
  },
  {
    quote: "What I love most is the collaborative environment. Everyone's opinion matters, and we're genuinely working together to build something great.",
    author: "Team Member",
    role: "UI/UX Designer",
    years: "5+ years"
  }
];

const Culture = () => {
  return (
    <section className="relative min-h-screen py-12 md:py-20 bg-black px-4 md:px-8 lg:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-2 border-white/20 shadow-lg shadow-blue-600/30 mb-6 md:mb-8">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
            <span className="block text-gray-200 mb-2">Our</span>
            <span className="bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 bg-clip-text text-transparent">
              Culture
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            A <span className="font-semibold text-gray-100">growing team of passionate developers and designers</span> in Lahore, building enterprise-grade solutions with modern technology and genuine care for quality.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-gray-300">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-100">2023</div>
              <div className="text-xs text-gray-400">Founded</div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-blue-600 to-transparent"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-100">20+</div>
              <div className="text-xs text-gray-400">Team Members</div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-blue-600 to-transparent"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-100">50+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-8 md:mb-12">
            Our <span className="text-blue-400">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl border border-white/20 shadow-lg`}>
                        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5">
                        <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                          {value.stats}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-100">
                        {value.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-400">
                        {value.subtitle}
                      </p>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
              By the <span className="text-blue-400">Numbers</span>
            </h3>
            <p className="text-sm md:text-base text-gray-300">Real metrics from our journey</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group text-center bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 md:p-6 hover:border-white/20 transition-all duration-300">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-gray-100">
                    {achievement.number}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-gray-300">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {achievement.description}
                  </div>
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {achievement.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Life at Company Section */}
        <div className="relative mb-16 md:mb-24">
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 md:mb-12">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-2 border-white/20 shadow-lg shadow-blue-600/30">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-100 mb-2">
                  Life at <span className="text-blue-400">Sage Devs</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-white to-blue-600 mx-auto md:mx-0 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-10 md:mb-12">
              We&apos;re building a workplace where talented developers and designers can do their best work. 
              Growth opportunities, modern tools, and a supportive team culture.
            </p>
            
            {/* Perks Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 md:mb-12">
              {perks.map((perk, i) => {
                const IconComponent = perk.icon;
                return (
                  <div 
                    key={i} 
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="absolute -top-2 left-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-2 py-0.5">
                      <span className="text-[10px] font-semibold text-blue-400">
                        {perk.category}
                      </span>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="text-center space-y-1">
                        <h4 className="text-sm font-bold text-gray-200">
                          {perk.name}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Note about team photos */}
            <div className="bg-blue-950/20 border border-blue-500/30 rounded-lg p-4 mb-10 text-center">
              <p className="text-sm text-blue-300">
                📸 <span className="font-semibold">Team photos coming soon!</span> We&apos;re scheduling a professional photoshoot to showcase our amazing team.
              </p>
            </div>
            
            {/* Employee Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-100">{testimonial.author}</h3>
                        <p className="text-gray-400 text-xs">{testimonial.role} • {testimonial.years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-gray-950/80 to-transparent"></div>
    </section>
  );
};

export default Culture;