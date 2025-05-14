'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Music Recommendation System',
    description: 'A personalized music recommendation system built using Spotify API and Gradio for a sleek, Netflix-inspired UI.',
    techStack: ['Python', 'Gradio', 'Spotify API', 'SQLite'],
    githubLink: 'https://github.com/SrishBansal/Music-Recommendation-System',
    image: '/images/project-music.jpg'
  },
  {
    title: 'Fake QR Code Detection',
    description: 'An innovative software that detects fake QR codes to ensure security.',
    techStack: ['Python', 'OpenCV', 'Machine Learning'],
    githubLink: 'https://github.com/SrishBansal/Fake_QR_Code_Detection',
    image: '/images/project-qr.webp'
  },
  {
    title: 'Timechain NFT Platform',
    description: 'An MVP allowing artists to store their content and issue a single NFT for ownership.',
    techStack: ['Python', 'Smart Contracts', 'Blockchain'],
    githubLink: 'https://github.com/SrishBansal/Tsoc-_24_H1',
    image: '/images/project-nft.png'
  },
  {
    title: 'Insurance Verification System',
    description: 'A system designed for verifying the authenticity of insurance claims using automated checks.',
    techStack: ['Python', 'SQL', 'Web Development'],
    githubLink: 'https://github.com/SrishBansal/OrbitEdge_Codex',
    image: '/images/project-insurance.png'
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              {project.image && (
                <img 
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-blue-900/30 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <CodeBracketIcon className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
