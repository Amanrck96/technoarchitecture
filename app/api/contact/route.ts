import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    // Persist to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        message,
      },
    })

    // Trigger email via Resend asynchronously (non-blocking)
    try {
      await sendContactEmail({ name, email, phone, message })
    } catch (err) {
      console.warn('Resend notification skipped/failed:', err)
    }

    return NextResponse.json({ success: true, submission })
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json({ error: 'Failed to process inquiry.' }, { status: 500 })
  }
}
