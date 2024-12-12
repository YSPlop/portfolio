import React from 'react'
import { motion } from 'framer-motion'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiNuxtdotjs, SiFigma, SiNodedotjs, SiFirebase, SiAmazonalexa, SiMongodb, SiPython, SiGo, SiPrisma, SiSupabase, SiNetlify } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  level: number
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Front-End Development & UI/UX Design",
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, level: 5 },
      { name: "HTML5", icon: <SiHtml5 />, level: 4 },
      { name: "CSS", icon: <SiCss3 />, level: 3 },
      { name: "React", icon: <SiReact />, level: 4 },
      { name: "Vue", icon: <SiVuedotjs />, level: 4 },
      { name: "Angular", icon: <SiAngular />, level: 2 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 4 },
      { name: "Nuxt3", icon: <SiNuxtdotjs />, level: 3 },
      { name: "Figma", icon: <SiFigma />, level: 3 },
    ]
  },
  {
    name: "Back-End Development & Database (Middlewares) & Cloud",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 3 },
      { name: "Firebase", icon: <SiFirebase />, level: 3 },
      { name: "AWS", icon: <SiAmazonalexa />, level: 3 },
      { name: "MongoDB", icon: <SiMongodb />, level: 4 },
      { name: "Python", icon: <SiPython />, level: 4 },
      { name: "Go", icon: <SiGo />, level: 2 },
      { name: "Prisma", icon: <SiPrisma />, level: 2 },
      { name: "Supabase", icon: <SiSupabase />, level: 4 },
      { name: "Netlify", icon: <SiNetlify />, level: 2 },
    ]
  }
]

const SkillLevel = ({ level }: { level: number }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-sm ${
            i <= level ? 'bg-blue-500' : 'bg-gray-700'
          }`}
        />
      ))}
    </div>
  )
}

const Skills = () => {
  return (
    <div className="bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Skills</h2>
      <div className="max-w-5xl mx-auto space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400 border-l-4 border-green-400 pl-3">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-3">
                  <div className="text-2xl text-green-400">{skill.icon}</div>
                  <div className="flex-grow">
                    <div className="text-sm font-medium text-gray-300">{skill.name}</div>
                    <SkillLevel level={skill.level} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className=" bg-gray-900 text-white">
      <main>
        <Skills />
      </main>
    </div>
  )
}

