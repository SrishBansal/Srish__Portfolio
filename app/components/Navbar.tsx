'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Update active section based on scroll position
      const sections = ['about', 'projects', 'experience', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Site Title (Optional) */}
          {/* <div className="text-white text-xl font-bold">Your Logo</div> */}

          {/* Mobile menu toggle button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 focus:outline-none">
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex space-x-8 items-center"
          >
            {['About', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-base font-medium tracking-wider transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-400 scale-105'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20, display: 'none' }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-md py-4`}
        >
          <div className="flex flex-col items-center space-y-4">
            {['About', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-lg font-medium tracking-wider transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)
                }
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
} 