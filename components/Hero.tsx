'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Github, Linkedin, FileDown } from 'lucide-react'

const TypedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      const animateTyping = (index: number) => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index))
          setTimeout(() => animateTyping(index + 1), 100)
        }
      }
      animateTyping(0)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return <span>{displayedText}</span>
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/my_resume.pdf'
    link.download = 'Yukash_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const name = "Yukash Sivaraj";

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-900 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/matrix-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: y1,
        }}
      />
      <motion.div
        className="relative z-10 text-center text-green-400 flex flex-col items-center"
        style={{ y: y2 }}
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
        >
          <Image
            src="/hacker-avatar.png"
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full border-4 border-green-400 shadow-lg"
          />
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          <TypedText text={name} />
        </h1>
        <h2 className="text-xl sm:text-3xl mb-8">
          <TypedText text="Software Developer | Engineer" delay={1500} />
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/about" className="bg-green-400 text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold hover:bg-green-300 transition-colors">
            Decrypt Profile
          </Link>
          <button
            onClick={handleDownload}
            className="bg-gray-700 text-green-400 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold hover:bg-gray-600 transition-colors flex items-center"
          >
            <FileDown className="mr-2" />
            Download CV
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="mt-8 flex gap-6"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
            <Linkedin size={32} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

