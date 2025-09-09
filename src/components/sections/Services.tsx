import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
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
          Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          From concept to deployment, we handle every aspect of your digital transformation
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.benefit}</p>
            
            <Link href={`/services${service.anchor}`}>
              <motion.button
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
