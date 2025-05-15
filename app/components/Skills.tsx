'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiPytorch,
  SiJupyter,
  SiDocker,
  SiGit,
  SiAmazon,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMatplotlib,
  SiSeaborn
} from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';

interface Skill {
  icon: JSX.Element;
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    icon: <SiPython className="w-12 h-12" />,
    name: 'Python',
    color: '#3776AB'
  },
  {
    icon: <SiJavascript className="w-12 h-12" />,
    name: 'JavaScript',
    color: '#F7DF1E'
  },
  {
    icon: <SiTypescript className="w-12 h-12" />,
    name: 'TypeScript',
    color: '#3178C6'
  },
  {
    icon: <SiTailwindcss className="w-12 h-12" />,
    name: 'Tailwind',
    color: '#06B6D4'
  },
  {
    icon: <SiTensorflow className="w-12 h-12" />,
    name: 'TensorFlow',
    color: '#FF6F00'
  },
  {
    icon: <SiScikitlearn className="w-12 h-12" />,
    name: 'Scikit-learn',
    color: '#F7931E'
  },
  {
    icon: <SiPytorch className="w-12 h-12" />,
    name: 'PyTorch',
    color: '#EE4C2C'
  },
  {
    icon: <TbBrain className="w-12 h-12" />,
    name: 'Deep Learning',
    color: '#00A3E0'
  },
  {
    icon: <SiPandas className="w-12 h-12" />,
    name: 'Pandas',
    color: '#150458'
  },
  {
    icon: <SiNumpy className="w-12 h-12" />,
    name: 'NumPy',
    color: '#013243'
  },
  {
    icon: <SiMatplotlib className="w-12 h-12" />,
    name: 'Matplotlib',
    color: '#0072B2'
  },
  {
    icon: <SiSeaborn className="w-12 h-12" />,
    name: 'Seaborn',
    color: '#5A9CA7'
  },
  {
    icon: <SiPostgresql className="w-12 h-12" />,
    name: 'PostgreSQL',
    color: '#336791'
  },
  {
    icon: <SiMongodb className="w-12 h-12" />,
    name: 'MongoDB',
    color: '#47A248'
  },
  {
    icon: <SiDocker className="w-12 h-12" />,
    name: 'Docker',
    color: '#2496ED'
  },
  {
    icon: <SiGit className="w-12 h-12" />,
    name: 'Git',
    color: '#F05032'
  },
  {
    icon: <SiAmazon className="w-12 h-12" />,
    name: 'AWS',
    color: '#FF9900'
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 py-8"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
              style={{
                paddingLeft: "100%",
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center gap-4 min-w-[120px]"
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div 
                    className="transition-transform duration-300"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 