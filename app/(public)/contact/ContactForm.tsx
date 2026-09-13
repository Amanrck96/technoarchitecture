'use client'

import React, { useState } from 'react'
import { CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react'

const PROJECT_TYPES = [
  'Private Residential Villa',
  'Commercial Headquarters / Workplace',
  'Hospitality / Boutique Resort',
  'Civic / Cultural Pavilion',
  'Masterplanning & Enclave',
  'Interior Architecture & Styling',
  'Other Bespoke Commission',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Private Residential Villa',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In Phase 1 static prototype, log submission to client console and display visual confirmation state
    console.log('[Phase 1 Prototype] Contact submission received:', formData)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Private Residential Villa',
      message: '',
    })
  }

  if (submitted) {
    return (
      <div className="py-12 text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#767676]">
            Submission Acknowledged
          </span>
          <h4 className="text-2xl font-serif text-[#1A1A1A]">
            Thank you, {formData.name || 'valued client'}.
          </h4>
          <p className="text-sm text-[#4A4A4A] font-light max-w-md mx-auto leading-relaxed">
            Your project brief has been logged in this static design prototype. In the production deployment, our principal architects receive an instant dispatch and respond within 24–48 hours.
          </p>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#767676] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Prototype Form</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#767676] mb-2">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-[#D0D0D0] py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent rounded-none"
            placeholder="e.g. Vikram Malhotra"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#767676] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-[#D0D0D0] py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent rounded-none"
            placeholder="+91 98450 00000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#767676] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-[#D0D0D0] py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent rounded-none"
            placeholder="name@organization.com"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#767676] mb-2">
            Commission Typology *
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full border-b border-[#D0D0D0] py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent rounded-none cursor-pointer"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#767676] mb-2">
          Project Brief / Scope / Site Location *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-[#D0D0D0] py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors bg-transparent resize-none rounded-none"
          placeholder="Briefly describe your site, target square footage, timeline, and architectural aspirations..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#4A4A4A] transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Transmit Project Inquiry</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-[10px] font-mono text-[#9B9B9B] text-center mt-3">
          Confidential client consultation &bull; Non-disclosure guaranteed
        </p>
      </div>
    </form>
  )
}
