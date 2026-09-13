import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_for_build')

export async function sendContactEmail(data: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
    console.log('Email not configured (RESEND_API_KEY or CONTACT_EMAIL_TO missing), skipping email send')
    return
  }
  const client = new Resend(process.env.RESEND_API_KEY)
  await client.emails.send({
    from: 'Techno Architecture <no-reply@technoarchitecture.in>',
    to: process.env.CONTACT_EMAIL_TO,
    subject: `New Contact Enquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br/>')}</p>
    `,
  })
}
