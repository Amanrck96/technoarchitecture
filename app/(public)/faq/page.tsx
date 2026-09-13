import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { getFaqItems } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FaqAccordion from './FaqAccordion'

export const metadata: Metadata = {
  title: 'Client Inquiries & Practice FAQ | Techno Architecture',
  description: 'Frequently asked questions regarding architectural collaboration, project timelines, fee structures, and sustainability at Techno Architecture.',
}

export default async function FaqPage() {
  const items = await getFaqItems()

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Advisory</span>
              <span>&bull;</span>
              <span>Practice FAQ</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#1A1A1A] tracking-tight leading-[1.08]">
              Frequently Addressed Inquiries
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light max-w-xl">
              Transparent answers regarding our studio methodology, commissioning process, timelines, and architectural fees.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordion Questions */}
      <section className="py-20 lg:py-32 max-w-4xl mx-auto px-6 lg:px-8">
        <FaqAccordion items={items} />

        {/* Contact Assistance Callout */}
        <div className="mt-20 p-10 bg-[#FAF9F7] border border-[#E5E5E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-normal text-[#1A1A1A]">
              Have a bespoke inquiry or specific site question?
            </h3>
            <p className="text-xs text-[#767676] mt-1 font-light">
              Our principal team is available for preliminary zoning and architectural appraisals.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#4A4A4A] transition-all shrink-0"
          >
            <span>Ask Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
