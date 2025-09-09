"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" className="w-full bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/20 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-blue-500/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Ready to build something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              great?
            </span>
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s transform your ideas into powerful digital experiences that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            {/* Start Your Project Button */}
            <motion.a
              href="mailto:sagedevs.network@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-flex items-center justify-center h-16 px-12 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white text-lg font-bold transition-all duration-500 border border-blue-400/30 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start Your Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-blue-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.a>

            {/* Book a Call Button */}
            <motion.a
              href="https://calendly.com/sagedevs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-transparent text-white text-lg font-semibold transition-all duration-500 border-2 border-white/20 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.a>
          </div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm mb-6">
              Prefer to reach out directly? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href="mailto:sagedevs.network@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sagedevs.network@gmail.com
              </a>
              <a 
                href="https://wa.me/923137732732"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-300 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp: +92 313 7732732
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
