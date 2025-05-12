'use client';

import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaCode, FaGitAlt, FaPalette, FaMobile } from 'react-icons/fa';

const skills = [
  {
    category: 'Programming',
    icon: <FaPython className="w-6 h-6" />,
    items: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 85 }
    ]
  },
  {
    category: 'Data Science',
    icon: <FaDatabase className="w-6 h-6" />,
    items: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Matplotlib', level: 75 },
      { name: 'Seaborn', level: 75 }
    ]
  },
  {
    category: 'Web Development',
    icon: <FaCode className="w-6 h-6" />,
    items: [
      { name: 'React', level: 75 },
      { name: 'Next.js', level: 70 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Node.js', level: 70 }
    ]
  },
  {
    category: 'Tools & Others',
    icon: <FaGitAlt className="w-6 h-6" />,
    items: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Terminal', level: 80 }
    ]
  },
  {
    category: 'Design',
    icon: <FaPalette className="w-6 h-6" />,
    items: [
      { name: 'UI Design', level: 75 },
      { name: 'UX Design', level: 70 },
      { name: 'Responsive Design', level: 85 },
      { name: 'Design Systems', level: 75 }
    ]
  },
  {
    category: 'Other Skills',
    icon: <FaMobile className="w-6 h-6" />,
    items: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Project Management', level: 80 },
      { name: 'Communication', level: 85 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600 dark:text-blue-400">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 dark:text-gray-400">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
