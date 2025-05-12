'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'OrbitEdge - Insurance Claims Analysis Dashboard',
    description: 'Led the design and implementation of an analytics dashboard that processed 10,000+ insurance claims, delivering 8 interactive visualizations. Deployed a RAG system with 95% mapping accuracy.',
    techStack: ['Python', 'FastAPI', 'Streamlit', 'RAG', 'AI'],
    image: '/project1.jpg',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'MusicMatch',
    description: 'Developed a comprehensive music recommendation system processing 10,000+ songs with Gradio UI and playlist management. Optimized recommendation algorithms with 30% faster loading times.',
    techStack: ['Python', 'Gradio', 'Spotify API', 'SQLite', 'Pandas'],
    image: '/project2.jpg',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Fake QR Code Detection System',
    description: 'Designed and deployed a machine learning model achieving 88% accuracy in detecting fraudulent QR codes. Processed over 2,500 QR code images, securing 5th place among 80+ teams.',
    techStack: ['Python', 'TensorFlow', 'Transfer Learning'],
    image: '/project3.jpg',
    demoLink: '#',
    githubLink: '#',
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
              className="bg-blue-900/20 rounded-lg overflow-hidden hover:bg-blue-900/30 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-blue-600/50 transition-colors"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
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
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 