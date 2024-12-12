'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  image: string
  githubLink?: string
  projectLink?: string
}

const projects: Project[] = [
  {
    title: "Rebecca Yeoh Music Website",
    description: "Designed and deployed a professional music website using Next.js, React.js in TypeScript with Framer Motion, and Next UI for a seamless, visually engaging user experience.",
    image: "/projects/rebeccayeohmusic.png?height=300&width=400",
    projectLink: "https://www.rebeccayeohmusic.com.au/",
    githubLink: "https://github.com/YSPlop/rebeccayeoh-music",
  },
  {
    title: "OpenAI Integrated Chatbot",
    description: "Interactive chatbot built with Next JS, React, and OpenAI.",
    image: "/projects/AIChatBot-overlay.jpg?height=300&width=400",
    projectLink: "#"
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "Used CouchDB and MapReduce for large-scale sentiment data processing.",
    image: "/projects/SocialMediaAnalysis-overlay.svg?height=300&width=400",
    projectLink: "#"
  },
  {
    title: "Safe Circle Android App",
    description: "Mobile safety app with Firebase, Google Maps API, Kotlin, and Jetpack Compose.",
    image: "/projects/Safecircle-overlay.png?height=300&width=400",
    projectLink: "#"
  },
  {
    title: "Tic Tac Toe",
    description: "Developed with React, Next JS and framer motion.",
    image: "/projects/tictactoe-overlay.png?height=300&width=400",
    projectLink: "#"
  }
]

export default function Projects() {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 pt-28 font-mono overflow-auto">
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
              className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 group-hover:opacity-75"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

