'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGoogle, FaAward, FaCertificate } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  platform: string;
  date: string;
  icon: JSX.Element;
  platformIcon: JSX.Element;
  image: string;
  verificationLink: string;
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Google Cybersecurity Specialization',
      issuer: 'Google',
      platform: 'Coursera',
      date: '2024',
      icon: <FaGoogle className="text-3xl text-blue-400" />,
      platformIcon: <span className="text-blue-400 text-xl font-bold">C</span>,
      image: '/images/cert1.jpg',
      verificationLink: 'https://www.coursera.org/account/accomplishments/specialization/SHF3E7WVL3M4'
    },
    {
      id: 3,
      title: 'Timechain Blockchain developer',
      issuer: 'Timechain labs',
      platform: 'Timechain labs',
      date: '2024',
      icon: <FaGoogle className="text-3xl text-blue-400" />,
      platformIcon: <span className="text-red-400 text-xl font-bold">Tc</span>,
      image: '/images/cert3.jpg',
      verificationLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7285989654942638081/'
    },
    {
      id: 4,
      title: 'Google AI Essentials',
      issuer: 'Google',
      platform: 'Coursera',
      date: '2023',
      icon: <FaGoogle className="text-3xl text-blue-400" />,
      platformIcon: <span className="text-blue-400 text-xl font-bold">C</span>,
      image: '/images/cert4.jpg',
      verificationLink: 'https://www.coursera.org/account/accomplishments/verify/R68PYFXY3ZEF'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Certifications 🎓
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative bg-blue-900/10 rounded-xl overflow-hidden hover:bg-blue-900/20 transition-all">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-white">{cert.platformIcon}</span>
                        <span className="text-sm text-white">{cert.platform}</span>
                      </div>
                      <span className="text-sm text-gray-300">{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">{cert.title}</h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                    <div className="p-2 bg-blue-900/20 rounded-lg">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full px-6 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors inline-flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Certificate</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-blue-900/30 p-4 rounded-lg max-w-4xl w-full backdrop-blur-lg"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
                    onClick={() => setSelectedCert(null)}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-white">{selectedCert.platformIcon}</span>
                        <span className="text-white">{selectedCert.platform}</span>
                      </div>
                      <a
                        href={selectedCert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors backdrop-blur-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Verify Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 