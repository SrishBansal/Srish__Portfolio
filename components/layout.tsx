'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout() {
  return (
    <div className={`${inter.className} bg-black text-white min-h-screen`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
} 