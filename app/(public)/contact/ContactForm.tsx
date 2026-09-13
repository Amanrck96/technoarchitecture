'use client'

import { useState, useTransition } from 'react'
import { submitContact } from './actions'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      try {
        await submitContact(formData)
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } catch {
        setStatus('error')
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">
          Thank you! We&apos;ll be in touch soon.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-2">Name *</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border-b border-gray-300 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full border-b border-gray-300 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-2">Email *</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border-b border-gray-300 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border-b border-gray-300 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#1A1A1A] text-white py-4 text-sm font-medium tracking-wider uppercase hover:bg-[#4A4A4A] transition-colors disabled:opacity-50"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
