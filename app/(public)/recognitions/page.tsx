import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recognitions',
  description: 'Awards, press, and recognitions earned by Techno Architecture.',
}

export default async function RecognitionsPage() {
  const recognitions = await prisma.recognition.findMany({ orderBy: [{ year: 'desc' }, { order: 'asc' }] })

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Accolades</p>
          <h1 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-16">Recognitions</h1>
        </ScrollReveal>

        {recognitions.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[#9B9B9B] text-sm">Recognitions and awards will be listed here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recognitions.map((rec, i) => (
              <ScrollReveal key={rec.id} delay={i * 80}>
                <div className="border border-gray-100 p-8 hover:border-gray-300 transition-colors">
                  {rec.imageUrl && (
                    <div className="relative h-16 mb-6">
                      <Image src={rec.imageUrl} alt={rec.issuingBody} fill className="object-contain object-left" />
                    </div>
                  )}
                  <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-2">{rec.year}</p>
                  <h3 className="text-lg font-medium text-[#1A1A1A] mb-1">{rec.title}</h3>
                  <p className="text-sm text-[#9B9B9B]">{rec.issuingBody}</p>
                  {rec.link && (
                    <a href={rec.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-xs text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors underline">
                      View →
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
