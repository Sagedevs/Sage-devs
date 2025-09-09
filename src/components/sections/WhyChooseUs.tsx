import React from "react";
import { motion } from "framer-motion";
import { differentiators } from "@/data/differentiators";

export default function WhyChooseUs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 py-20 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sage Devs</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We&apos;re not just developers—we&apos;re your strategic technology partners
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {differentiators.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-300 leading-relaxed">{point}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
