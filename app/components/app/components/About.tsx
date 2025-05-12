'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            As a Computer Science and Business Systems student, I'm passionate about creating innovative solutions 
            that bridge technology and business needs. I'm actively seeking opportunities in startups, collaborative 
            projects, and open-source contributions where I can apply my skills and learn from diverse perspectives.
          </p>
          <motion.div
            className="mt-12 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600/20 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 