'use server'

import { prisma } from '@/lib/prisma'
import { sendContactEmail } from '@/lib/resend'

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string | undefined
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    throw new Error('Missing required fields')
  }

  // Save to database (non-blocking if database is temporarily down)
  try {
    await prisma.contactSubmission.create({
      data: { name, email, phone: phone || null, message },
    })
  } catch (dbErr) {
    console.warn('[DB Offline] Could not persist contact submission to database:', (dbErr as Error).message)
  }

  // Send email notification (non-blocking failure)
  try {
    await sendContactEmail({ name, email, phone, message })
  } catch (err) {
    console.error('Failed to send contact email:', err)
  }
}
