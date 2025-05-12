'use client';

import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Google Cybersecurity Certificate',
    description: 'Risk management, threat detection, and SIEM tools implementation. Comprehensive training in cybersecurity fundamentals and best practices.',
    link: 'https://www.linkedin.com/posts/srish-bansal_cybersecurity-googlecertification-digitaldefense-activity-7254393268006703104-YpXt'
  },
  {
    title: 'Google AI Essentials Certificate',
    description: 'Core AI concepts and ethical implementation. Focused on practical applications and responsible AI development.',
    link: 'https://www.linkedin.com/posts/srish-bansal_aiessentials-googleai-certification-activity-7289334214492733440-2iY2'
  },
  {
    title: 'Diploma in Data Analysis',
    description: 'NSDC Certification in comprehensive data analysis methodologies and tools.',
    link: 'https://www.linkedin.com/posts/srish-bansal_dataanalysis-nsdc-certification-activity-7279577718429345792-UTUL'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          Certifications
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Credential
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 