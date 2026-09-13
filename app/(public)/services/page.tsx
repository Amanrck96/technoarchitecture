import { prisma } from '@/lib/prisma'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the architectural services offered by Techno Architecture.',
}

export default async function ServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { order: 'asc' } })

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">What We Do</p>
          <h1 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] max-w-2xl leading-tight mb-16">
            Services
          </h1>
        </ScrollReveal>

        {services.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[#9B9B9B] text-sm">Services will be listed here soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <div className="border border-gray-100 p-8 hover:border-gray-300 transition-colors group">
                  <span className="text-4xl font-light text-gray-200 block mb-4">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-medium text-[#1A1A1A] mb-3 group-hover:text-[#4A4A4A] transition-colors">{service.title}</h3>
                  <p className="text-sm text-[#9B9B9B] leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-light text-white mb-6">Have a project in mind?</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors">
              Discuss Your Brief
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
