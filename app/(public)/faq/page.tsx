import { prisma } from '@/lib/prisma'
import FaqAccordion from './FaqAccordion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Techno Architecture.',
}

export default async function FaqPage() {
  const items = await prisma.faqItem.findMany({ orderBy: { order: 'asc' } })

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Questions</p>
          <h1 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-16">FAQ</h1>
        </ScrollReveal>
        <FaqAccordion items={items} />
      </section>
    </div>
  )
}
