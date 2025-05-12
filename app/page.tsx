'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <motion.main
        initial="hidden"
        animate="show"
        variants={pageTransition}
        className="min-h-screen"
      >
        <motion.div variants={sectionVariant}>
          <Hero />
        </motion.div>
        
        <motion.div variants={sectionVariant}>
          <About />
        </motion.div>
        
        <motion.div variants={sectionVariant}>
          <Projects />
        </motion.div>
        
        <motion.div variants={sectionVariant}>
          <Experience />
        </motion.div>
        
        <motion.div variants={sectionVariant}>
          <Certifications />
        </motion.div>
        
        <motion.div variants={sectionVariant}>
          <Contact />
        </motion.div>
      </motion.main>
      <ScrollToTop />
    </div>
  );
}
