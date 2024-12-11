'use server'

import { FormData } from './page'
import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const servicesRequested = Object.entries(formData.services)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(', ')

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sivarajyukash@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Company: ${formData.company}
      Phone: ${formData.phone}
      Location: ${formData.location}
      Services Requested: ${servicesRequested}
      Budget: ${formData.budget}
      Project Description: ${formData.description}
    `,
  }

  await transporter.sendMail(mailOptions)
}

