'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Company Name',
    period: 'June 2023 - August 2023',
    description: [
      'Developed and maintained full-stack applications using React and Node.js',
      'Implemented responsive UI components following modern design principles',
      'Collaborated with senior developers on optimizing database queries'
    ]
  },
  {
    title: 'Open Source Contributor',
    company: 'Various Projects',
    period: 'January 2023 - Present',
    description: [
      'Contributed to multiple open-source projects in the React ecosystem',
      'Fixed bugs and implemented new features in popular libraries',
      'Collaborated with global developers through GitHub'
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-gray-800" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? 'right-0 md:left-auto' : 'left-0'
                } md:left-1/2 transform md:-translate-x-1/2 -translate-y-px w-4 h-4 bg-blue-500 rounded-full border-4 border-black`}
              />

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {experience.title}
                </h3>
                <div className="text-blue-400 mb-2">{experience.company}</div>
                <div className="text-gray-500 text-sm mb-4">{experience.period}</div>
                <ul className="space-y-2">
                  {experience.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-400">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 