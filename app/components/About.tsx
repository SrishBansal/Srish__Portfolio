'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiTensorflow,
  SiScikitlearn,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiJupyter,
  SiOpencv,
  SiHtml5,
  SiCss3,
  SiC
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
    icon: <SiTypescript className="w-12 h-12" />,
    name: 'TypeScript',
    color: '#3178C6'
  },
  {
    icon: <SiJavascript className="w-12 h-12" />,
    name: 'JavaScript',
    color: '#F7DF1E'
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
    icon: <SiNumpy className="w-12 h-12" />,
    name: 'NumPy',
    color: '#013243'
  },
  {
    icon: <SiPandas className="w-12 h-12" />,
    name: 'Pandas',
    color: '#150458'
  },
  {
    icon: <SiOpencv className="w-12 h-12" />,
    name: 'OpenCV',
    color: '#5C3EE8'
  },
  {
    icon: <SiPostgresql className="w-12 h-12" />,
    name: 'PostgreSQL',
    color: '#336791'
  },
  {
    icon: <SiMysql className="w-12 h-12" />,
    name: 'MySQL',
    color: '#4479A1'
  },
  {
    icon: <SiGit className="w-12 h-12" />,
    name: 'Git',
    color: '#F05032'
  },
  {
    icon: <SiJupyter className="w-12 h-12" />,
    name: 'Jupyter',
    color: '#F37626'
  },
  {
    icon: <SiHtml5 className="w-12 h-12" />,
    name: 'HTML',
    color: '#E34F26'
  },
  {
    icon: <SiCss3 className="w-12 h-12" />,
    name: 'CSS',
    color: '#1572B6'
  },
  {
    icon: <SiC className="w-12 h-12" />,
    name: 'C',
    color: '#A8B9CC'
  }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            About Me 👨‍💻
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-gray-300 mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Hey there! 👋 I'm a passionate Software Developer with a strong focus on machine learning
              and AI development. Currently contributing to innovative solutions using cutting-edge ML technologies
              and modern web development frameworks.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Recently, I've been working on projects involving deep learning models and data analysis,
              combining my expertise in Python and ML frameworks to create impactful solutions.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I've demonstrated leadership as a Team Lead for the Round Square and MUN society
              at BPS Pilani 🎯. I'm always excited to explore new technologies and contribute to projects
              that push the boundaries of what's possible with AI and web technologies.
            </p>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Skills
              </h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </motion.div>

            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />
              
              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-6 md:gap-8 lg:gap-12 py-6"
                  animate={{
                    x: ["0%", "-50%"]
                  }}
                  transition={{
                    x: {
                      duration: 20,
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
                      className="flex flex-col items-center justify-center gap-4"
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
        </motion.div>
      </div>
    </section>
  );
} 