'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "Rebecca Yeoh Music Website",
    description: "Designed and deployed a professional music website using Next.js, React.js in TypeScript with Framer Motion, and Next UI for a seamless, visually engaging user experience.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "OpenAI Integrated Chatbot",
    description: "Interactive chatbot built with Next JS, React, and OpenAI.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "Used CouchDB and MapReduce for large-scale sentiment data processing.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "Safe Circle Android App",
    description: "Mobile safety app with Firebase, Google Maps API, Kotlin, and Jetpack Compose.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "CRM Web Application",
    description: "Developed with React, Node.js, Express, and Google Calendar API.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  }
]

export default function Projects() {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 font-mono overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-green-400 glitch" data-text="Projects">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg shadow-neon overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-green-400 hover:underline text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

