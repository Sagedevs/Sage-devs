import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/15" />
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Simple <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent, fixed pricing with no hidden costs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
            <p className="text-4xl font-black text-purple-400 mb-2">Starting at $2,999</p>
            <p className="text-gray-400 text-sm mb-6">Perfect for small businesses & startups</p>
            <ul className="text-left text-gray-300 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span> Custom website design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span> Responsive development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span> SEO optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span> 3 months support
              </li>
            </ul>
            <button className="w-full h-12 rounded-xl bg-purple-600/20 text-purple-300 font-semibold border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300">
              Get Started
            </button>
          </motion.div>

          {/* Professional Package */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/30 backdrop-blur-sm border-2 border-blue-400/50 text-center transform scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
            <p className="text-4xl font-black text-blue-400 mb-2">Starting at $7,999</p>
            <p className="text-gray-400 text-sm mb-6">Ideal for growing businesses</p>
            <ul className="text-left text-gray-300 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Everything in Starter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Web application development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Database integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> 6 months support
              </li>
            </ul>
            <button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              Get Started
            </button>
          </motion.div>

          {/* Enterprise Package */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <p className="text-4xl font-black text-emerald-400 mb-2">Custom Quote</p>
            <p className="text-gray-400 text-sm mb-6">For large-scale applications</p>
            <ul className="text-left text-gray-300 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Everything in Professional
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Dedicated team
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Priority support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Ongoing maintenance
              </li>
            </ul>
            <button className="w-full h-12 rounded-xl bg-emerald-600/20 text-emerald-300 font-semibold border border-emerald-500/30 hover:bg-emerald-600/30 transition-all duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-base font-semibold border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
            >
              View Detailed Pricing →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
