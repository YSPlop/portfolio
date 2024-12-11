'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

const experiences = [
  {
    title: "Software Developer",
    company: "PS Design Studio",
    date: "May 2024 – August 2024",
    description: [
      "Developed seven custom websites from scratch, using HTML, Tailwind CSS, and JavaScript, all delivered with a CMS backend.",
      "Engineered front-end components and custom APIs, integrating data from Runway and Statamic CMS using Vue.js, Nuxt.js, GraphQL, Tailwind CSS, PHP, and Laravel.",
      "Reorganized a complex Laravel Nova database, reducing query complexity by 50%, enhancing site performance and client data access."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "SideChef",
    date: "February 2024 - May 2024",
    description: [
      "Built 220+ test case automations for web and mobile, using Playwright, TypeScript, WebDriver IO, Appium, Android Studio, and Xcode.",
      "Developed usability solutions using Vertex AI and Claude 3, collaborating closely with a seven-person agile team."
    ]
  },
  {
    title: "Project Supervisor/Tutor",
    company: "University of Melbourne",
    date: "February 2024 - May 2024",
    description: [
      "Mentored four agile student teams, guiding them through real-world software projects with external clients.",
      "Evaluated student projects and coached teams on tools like Confluence, GitHub, Trello, and Jira."
    ]
  }
]

export default function Experience() {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 text-green-400 font-mono overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 glitch" data-text="Work Experience">Work Experience</h1>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-400"
            >
              <div className="flex items-center mb-4">
                <Terminal className="mr-2 text-green-400" />
                <h3 className="text-xl sm:text-2xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm sm:text-base">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.05) }}
                    >
                      {item}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

