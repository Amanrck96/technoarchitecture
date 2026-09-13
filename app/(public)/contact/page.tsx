import React from 'react'
import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import { getContactDetails } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Initiate a Dialogue | Techno Architecture',
  description: 'Discuss a new residential, commercial, or masterplan architectural commission with Techno Architecture.',
}

export default async function ContactPage() {
  const contact = await getContactDetails()

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Inquiries</span>
              <span>&bull;</span>
              <span>Commission Intake</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] max-w-4xl tracking-tight leading-[1.08]">
              Let&apos;s co-create spaces that endure.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light max-w-2xl leading-relaxed">
              We welcome new project commissions, site appraisals, and collaborative ventures across India and internationally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Grid: Info + Visual Form */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Studio Directory Info */}
          <div className="lg:col-span-5 space-y-10">
            <ScrollReveal direction="up">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#767676] block mb-2">
                  Headquarters & Workshop
                </span>
                <h2 className="text-2xl font-serif font-normal text-[#1A1A1A]">
                  {contact.address.line1}
                </h2>
                <div className="mt-4 text-sm text-[#4A4A4A] font-light leading-relaxed space-y-1">
                  <p>{contact.address.line2}</p>
                  <p>{contact.address.area}</p>
                  <p>{contact.address.state}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-[#E5E5E5] space-y-4">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#9B9B9B] mb-1">
                    Direct Studio Lines
                  </span>
                  <p className="text-sm font-sans text-[#1A1A1A]">{contact.phone}</p>
                  <p className="text-sm font-sans text-[#4A4A4A]">{contact.phoneDirect}</p>
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#9B9B9B] mb-1">
                    Electronic Mail
                  </span>
                  <p className="text-sm font-sans text-[#1A1A1A]">
                    New Inquiries: <a href={`mailto:${contact.inquiriesEmail}`} className="underline underline-offset-2">{contact.inquiriesEmail}</a>
                  </p>
                  <p className="text-xs font-sans text-[#767676]">
                    General: <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#9B9B9B] mb-1">
                    Operating Hours
                  </span>
                  <p className="text-xs font-mono text-[#4A4A4A]">{contact.hours}</p>
                </div>
              </div>

              {/* Prototype Notice Box */}
              <div className="p-5 bg-[#FAF9F7] border border-[#E5E5E5] text-xs text-[#767676] font-mono space-y-1">
                <span className="font-semibold text-[#1A1A1A] block uppercase tracking-wider">
                  [Phase 1 Prototype Note]
                </span>
                <p>
                  This form is a static interactive prototype for design review. Submitting demonstrates visual validation and the completed confirmation state without sending live emails or saving to a database.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Complete Visual Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-white p-8 sm:p-12 border border-[#1A1A1A] shadow-xl shadow-black/5">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#767676] block mb-2">
                  Commission Brief
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-light mb-8">
                  Initiate a Project Discussion
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
