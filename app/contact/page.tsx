'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { sendEmail } from './actions'

export interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  location: string
  services: {
    websiteDevelopment: boolean
    appDevelopment: boolean
    designSystem: boolean
    websiteMigration: boolean
    ecommerceSite: boolean
    performanceEvaluation: boolean
  }
  budget: string
  description: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    location: 'VIC',
    services: {
      websiteDevelopment: false,
      appDevelopment: false,
      designSystem: false,
      websiteMigration: false,
      ecommerceSite: false,
      performanceEvaluation: false
    },
    budget: '',
    description: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await sendEmail(formData)
      console.log('Email sent successfully')
      // Reset form or show success message
    } catch (error) {
      console.error('Failed to send email:', error)
      // Show error message to user
    }
  }

  const handleServiceChange = (service: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }))
  }

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-green-400 mb-6"
        >
          Your contact information
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-gray-900 border-b-2 border-green-400/50 px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 transition-colors"
                placeholder="First name"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-gray-900 border-b-2 border-green-400/50 px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 transition-colors"
                placeholder="Last name"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-900 border-b-2 border-green-400/50 px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 transition-colors"
                placeholder="Email address"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-gray-900 border-b-2 border-green-400/50 px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 transition-colors"
                placeholder="Company Name"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-gray-900 border-b-2 border-green-400/50 px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 transition-colors"
                placeholder="Phone Number"
              />
            </motion.div>

            <motion.div className="relative">
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-gray-900 border-b-2 border-green-400/50 px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 transition-colors appearance-none"
              >
                <option value="VIC">VIC</option>
                <option value="NSW">NSW</option>
                <option value="QLD">QLD</option>
                <option value="WA">WA</option>
                <option value="SA">SA</option>
                <option value="TAS">TAS</option>
                <option value="NT">NT</option>
                <option value="ACT">ACT</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-green-400 pointer-events-none" />
            </motion.div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">What services do you need?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.services.websiteDevelopment}
                  onChange={() => handleServiceChange('websiteDevelopment')}
                  className="form-checkbox h-5 w-5 text-green-400 rounded border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">Website Development</span>
              </motion.label>

              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.services.appDevelopment}
                  onChange={() => handleServiceChange('appDevelopment')}
                  className="form-checkbox h-5 w-5 text-green-400 rounded border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">App Development</span>
              </motion.label>

              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.services.designSystem}
                  onChange={() => handleServiceChange('designSystem')}
                  className="form-checkbox h-5 w-5 text-green-400 rounded border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">Design System</span>
              </motion.label>

              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.services.websiteMigration}
                  onChange={() => handleServiceChange('websiteMigration')}
                  className="form-checkbox h-5 w-5 text-green-400 rounded border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">Website Migration</span>
              </motion.label>

              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.services.ecommerceSite}
                  onChange={() => handleServiceChange('ecommerceSite')}
                  className="form-checkbox h-5 w-5 text-green-400 rounded border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">E-commerce Site</span>
              </motion.label>

              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.services.performanceEvaluation}
                  onChange={() => handleServiceChange('performanceEvaluation')}
                  className="form-checkbox h-5 w-5 text-green-400 rounded border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">Performance Evaluation</span>
              </motion.label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">How much is the anticipated budget?</h3>
            <div className="space-y-2">
              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="budget"
                  value="less-than-2000"
                  checked={formData.budget === 'less-than-2000'}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="form-radio h-5 w-5 text-green-400 border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">Less than $2,000</span>
              </motion.label>

              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="budget"
                  value="2000-10000"
                  checked={formData.budget === '2000-10000'}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="form-radio h-5 w-5 text-green-400 border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">$2,000 - $10,000</span>
              </motion.label>

              <motion.label
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="budget"
                  value="more-than-10000"
                  checked={formData.budget === 'more-than-10000'}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="form-radio h-5 w-5 text-green-400 border-green-400/50 bg-gray-900 focus:ring-offset-gray-900 focus:ring-green-400"
                />
                <span className="text-green-400">More than $10,000</span>
              </motion.label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">Tell me about your project or others you've seen that you like</h3>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={6}
              className="w-full bg-gray-900 border-2 border-green-400/50 rounded-lg px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 transition-colors"
              placeholder="Some description"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 overflow-hidden text-lg font-bold text-black transition-all duration-500 bg-green-400 rounded-lg group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="relative">Submit</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-green-300/30"></div>
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

