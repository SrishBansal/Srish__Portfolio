'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaPen, FaGithub } from 'react-icons/fa';

interface Experience {
  id: number;
  title: string;
  organization: string;
  timeline: string;
  description: string[];
  link: string;
  linkText: string;
  icon: JSX.Element;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Contributor',
    organization: 'Timechain Labs – Summer of Code 2024',
    timeline: 'Present',
    description: [
      'Built a content rights management MVP using NFTs and DRM',
      'Developed artist upload system, NFT minting, and DRM access tokens',
      'Secure token-based access control'
    ],
    link: 'https://www.linkedin.com/posts/srish-bansal_blockchaindevelopment-nfts-drm-activity-7285989654942638081-uaYD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEAFqf4Bg2eb0iB1nfTutNfeArW3-YwVKZw',
    linkText: 'View Project Details',
    icon: <FaCode className="text-blue-400" />
  },
  {
    id: 2,
    title: 'Top 5 Finalist',
    organization: 'Clash of Titans – National Hackathon 2024',
    timeline: '2024',
    description: [
      'Built a Fake QR Code Detection System',
      'Used computer vision and validation techniques'
    ],
    link: 'https://www.linkedin.com/posts/srish-bansal_winners-of-clash-of-t-ai-tans-activity-7231899072847089664-dVZe?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEAFqf4Bg2eb0iB1nfTutNfeArW3-YwVKZw',
    linkText: 'View Project',
    icon: <FaTrophy className="text-yellow-400" />
  },
  {
    id: 3,
    title: 'Hacktoberfest Contributor',
    organization: 'Open Source Community',
    timeline: '2023',
    description: [
      'Contributed to Python and web tech projects',
      'Participated in reviews and community discussions'
    ],
    link: 'https://www.linkedin.com/posts/srish-bansal_hacktoberfest-opensource-growthmindset-activity-7259063254017052672-ud3C?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEAFqf4Bg2eb0iB1nfTutNfeArW3-YwVKZw',
    linkText: 'View Profile',
    icon: <FaGithub className="text-purple-400" />
  },
  {
    id: 4,
    title: 'Technical Author',
    organization: 'How Ethereum Works',
    timeline: '2023',
    description: [
      'Published article simplifying Ethereum fundamentals',
      'Positive feedback from beginner developers'
    ],
    link: 'https://www.linkedin.com/posts/srish-bansal_blockchain-ethereum-blockchaintechnology-activity-7168321838140342272-ZQ7g?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEAFqf4Bg2eb0iB1nfTutNfeArW3-YwVKZw',
    linkText: 'Read Article',
    icon: <FaPen className="text-green-400" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-blue-500/20 transform md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'right-0 md:left-auto' : 'left-0'
                } md:left-1/2 transform md:-translate-x-1/2 -translate-y-px w-12 h-12 rounded-full border-4 border-black flex items-center justify-center bg-blue-500/20`}
              >
                {exp.icon}
              </div>

              <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'}`}>
                <div className="bg-blue-900/10 rounded-xl p-6 hover:bg-blue-900/20 transition-all group">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center justify-between w-full mb-2">
                      <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                      <span className="text-sm text-gray-500">{exp.timeline}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.organization}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="mr-2 text-blue-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{exp.linkText}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 