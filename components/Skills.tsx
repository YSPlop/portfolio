'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Python', level: 70 },
]

export default function Skills() {
  return (
    <div className="py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Skills</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800 rounded-lg p-4 shadow-md border border-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-green-400">{skill.name}</span>
              <span className="text-green-400">{skill.level}%</span>
            </div>
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green-400"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

