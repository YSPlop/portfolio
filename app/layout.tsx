import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Hacker Portfolio',
  description: 'Professional portfolio showcasing software development projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-green-400`}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}

