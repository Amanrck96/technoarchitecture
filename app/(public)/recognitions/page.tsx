import React from 'react'
import type { Metadata } from 'next'
import { Award, ExternalLink } from 'lucide-react'
import { getRecognitions } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Accolades & Recognitions | Techno Architecture',
  description: 'National and international architectural citations, awards, and design publications earned by Techno Architecture.',
}

export default async function RecognitionsPage() {
  const recognitions = await getRecognitions()

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Accolades</span>
              <span>&bull;</span>
              <span>Peer Citations</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] max-w-4xl tracking-tight leading-[1.08]">
              Recognitions & Architectural Citations
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light max-w-xl">
              Honors received from design institutions, sustainable councils, and architectural publications.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Citations List */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-[#1A1A1A]">
          {recognitions.map((rec, i) => (
            <ScrollReveal key={rec.id} direction="up" delay={i * 0.08}>
              <div className="py-10 border-b border-[#E5E5E5] flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:bg-[#FAF9F7] px-4 transition-colors group">
                {/* Year + Category */}
                <div className="md:w-1/4">
                  <span className="text-3xl font-serif text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors">
                    {rec.year}
                  </span>
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#767676] mt-1">
                    {rec.category}
                  </span>
                </div>

                {/* Title + Issuing Body */}
                <div className="md:w-1/2 space-y-1">
                  <h3 className="text-2xl font-serif font-normal text-[#1A1A1A]">
                    {rec.title}
                  </h3>
                  <p className="text-sm text-[#4A4A4A] font-light">
                    Conferred by: <strong className="font-medium text-[#1A1A1A]">{rec.issuingBody}</strong>
                  </p>
                </div>

                {/* Project Reference */}
                <div className="md:w-1/4 text-left md:text-right">
                  {rec.projectRef ? (
                    <span className="inline-block px-3 py-1 bg-white border border-[#E5E5E5] text-[10px] font-mono uppercase tracking-widest text-[#767676]">
                      {rec.projectRef}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-[#9B9B9B]">Practice Recognition</span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
