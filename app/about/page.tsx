'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Skills from '@/components/Skills'

export default function About() {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 font-mono overflow-auto pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-green-400 glitch" data-text="About_Me">About_Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Your Name"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-base sm:text-lg mb-6">
              A dedicated Software Developer with comprehensive experience in both front-end and back-end development, recently focused on private client projects using modern frameworks and design tools.
            </p>
            <p className="text-base sm:text-lg mb-6">
              Known for a strong problem-solving mindset and a commitment to leveraging technology for impactful solutions, with experience developing secure, scalable software in agile environments.
            </p>
            <p className="text-base sm:text-lg">
              Enthusiastic about contributing expertise in software engineering to innovative projects that drive meaningful change.
            </p>
          </motion.div>
        </div>
        
        <Skills />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-green-400 glitch" data-text="Personal_Interests">Personal_Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-neon">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">Traveling</h3>
              <p className="text-sm sm:text-base">Exploring new cultures and cuisines around the world.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-neon">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">Photography</h3>
              <p className="text-sm sm:text-base">Capturing moments and telling stories through images.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-neon">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">Coding Challenges</h3>
              <p className="text-sm sm:text-base">Solving complex problems and improving algorithmic skills.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-green-400 glitch" data-text="Featured_Video">Featured_Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-neon"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

