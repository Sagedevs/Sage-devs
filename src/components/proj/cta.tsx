"use client";

import React from 'react';

const ProjectCTA: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl top-0 -left-48 animate-float"></div>
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl bottom-0 -right-48 animate-float-delayed"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 backdrop-blur-xl mb-8">
            <div className="relative flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <div className="absolute inset-0 h-2 w-2 rounded-full bg-sky-400 animate-ping" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Ready to Start?
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Create Something
            <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mt-2">
              Amazing Together
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your vision deserves exceptional execution. Let's transform your ideas into 
            a digital experience that captivates your audience and drives results.
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Project Discussion Card */}
          <div className="group relative rounded-3xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-xl p-8 transition-all duration-500 hover:bg-slate-900/60 hover:border-sky-400/40 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-sky-500/20 border border-sky-400/30 group-hover:bg-sky-500/30 transition-colors duration-300">
                  <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Start a Project</h3>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Ready to bring your vision to life? Let's discuss your project requirements, 
                timeline, and goals to create a solution that exceeds your expectations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Free consultation & project assessment</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Detailed proposal & timeline</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Transparent pricing & regular updates</span>
                </div>
              </div>

              <button className="group w-full px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-sky-600 hover:to-blue-700 hover:shadow-2xl hover:shadow-sky-500/30">
                <span className="flex items-center justify-center gap-2">
                  Discuss Your Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Quick Start Card */}
          <div className="group relative rounded-3xl border border-indigo-400/20 bg-slate-900/40 backdrop-blur-xl p-8 transition-all duration-500 hover:bg-slate-900/60 hover:border-indigo-400/40 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 group-hover:bg-indigo-500/30 transition-colors duration-300">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Quick Start</h3>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Need a rapid solution? Our quick start packages get your project 
                launched faster with optimized processes and proven templates.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">2-week delivery for standard projects</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Fixed-price packages available</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Dedicated project manager</span>
                </div>
              </div>

              <button className="group w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-indigo-500/30">
                <span className="flex items-center justify-center gap-2">
                  Explore Quick Start
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 max-w-4xl mx-auto">
            <div className="text-left flex-1">
              <h4 className="text-2xl font-bold text-white mb-2">Still Exploring Options?</h4>
              <p className="text-slate-400">
                Download our project planning guide or schedule a 15-minute discovery call
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-6 py-3 border-2 border-sky-400/40 text-sky-400 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-sky-400/10 hover:border-sky-400 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Guide
                </span>
              </button>
              
              <button className="group px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-sky-600 hover:to-blue-700 hover:shadow-lg hover:shadow-sky-500/30">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Call
                </span>
              </button>
            </div>
          </div>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translate(20px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translate(-30px, 30px) scale(1.15);
            opacity: 0.4;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectCTA;