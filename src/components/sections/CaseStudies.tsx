import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredCaseStudies } from "@/data/featuredCaseStudies";

export default function CaseStudies() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-900/50 to-gray-900/30 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-teal-900/15" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from real projects that made a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="aspect-video overflow-hidden">
                <Image 
                  src={study.image} 
                  alt={study.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 rounded-full mb-3">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-emerald-300 text-sm font-medium mb-4">{study.outcome}</p>
                
                <Link href={study.link} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="text-white hover:text-emerald-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Read Case Study →
                  </motion.button>
                </Link>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/case-studies">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 text-emerald-300 text-base font-semibold border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
            >
              View All Case Studies →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
