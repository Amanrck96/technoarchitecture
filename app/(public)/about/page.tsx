import { prisma } from '@/lib/prisma'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Techno Architecture — our vision, mission, core values, and what sets us apart.',
}

export default async function AboutPage() {
  const blocks = await prisma.contentBlock.findMany({
    where: { key: { in: ['vision', 'mission', 'why-us'] } },
  })
  const blockMap = Object.fromEntries(blocks.map((b) => [b.key, b]))

  const values = [
    { label: 'Excellence', description: 'We pursue the highest standard in design and delivery, never settling for the ordinary.' },
    { label: 'Integrity', description: 'Transparent communication and honest practice form the bedrock of every client relationship.' },
    { label: 'Innovation', description: 'We embrace new ideas, materials, and methods to push the boundaries of what architecture can achieve.' },
    { label: 'Sustainability', description: 'Responsible design is non-negotiable. We build for today without compromising tomorrow.' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Who We Are</p>
          <h1 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] max-w-3xl leading-tight">
            Architecture as a dialogue between form and purpose.
          </h1>
        </ScrollReveal>
      </section>

      {/* Vision */}
      {blockMap['vision'] && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Vision</p>
              <h2 className="text-2xl lg:text-3xl font-light text-[#1A1A1A]">{blockMap['vision'].title || 'Our Vision'}</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-[#4A4A4A] leading-relaxed text-lg mt-8 lg:mt-0">{blockMap['vision'].body}</p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Mission */}
      {blockMap['mission'] && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Mission</p>
              <h2 className="text-2xl lg:text-3xl font-light text-[#1A1A1A]">{blockMap['mission'].title || 'Our Mission'}</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-[#4A4A4A] leading-relaxed text-lg mt-8 lg:mt-0">{blockMap['mission'].body}</p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Core Values</p>
            <h2 className="text-3xl lg:text-5xl font-light text-white mb-16">What We Stand For</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.label} delay={i * 100}>
                <div className="border-t border-white/20 pt-6">
                  <h3 className="text-lg font-medium text-white mb-3">{value.label}</h3>
                  <p className="text-sm text-[#9B9B9B] leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* USP */}
      {blockMap['why-us'] && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Our Edge</p>
              <h2 className="text-2xl lg:text-3xl font-light text-[#1A1A1A]">Why Choose Techno?</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-[#4A4A4A] leading-relaxed text-lg mt-8 lg:mt-0">{blockMap['why-us'].body}</p>
            </ScrollReveal>
          </div>
        </section>
      )}
    </div>
  )
}
