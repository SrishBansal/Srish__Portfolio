'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Taxicity',
    description: 'A real-time Indian tax optimization engine that extracts transactions using Gemini API, computes tax spanning 10 brackets across both fiscal regimes in FastAPI, and features a reactive Next.js dashboard.',
    techStack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Gemini API'],
    githubLink: 'https://github.com/SrishBansal/Taxicity',
    liveLink: 'https://taxicity-nine.vercel.app/',
    image: '/images/project-taxicity.png'
  },
  {
    title: 'Manas Mitra',
    description: 'An anonymous, multilingual AI mental health companion for Indian students. Features a CBT-based RAG pipeline via ChromaDB, zero-latency crisis interception, and a 3-tier API fallback system.',
    techStack: ['Next.js', 'FastAPI', 'ChromaDB', 'Gemini 2.0', 'PEFT'],
    githubLink: 'https://github.com/SrishBansal/Manas-Mitra-Optimal-',
    liveLink: 'https://manas-mitra-hahu.vercel.app/',
    image: '/images/project-manas-mitra.png'
  },
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

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 rounded-lg overflow-hidden hover:bg-blue-900/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden aspect-video">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-blue-600 transition-colors shadow-lg"
                        title="View GitHub Repository"
                      >
                        <FaGithub className="text-white text-xl" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-blue-600 transition-colors shadow-lg"
                        title="View Live Site"
                      >
                        <FaExternalLinkAlt className="text-white text-base" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex gap-4">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium shadow-md shadow-blue-600/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 