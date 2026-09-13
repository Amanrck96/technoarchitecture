import { prisma } from '@/lib/prisma'
import ContactForm from './ContactForm'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Techno Architecture to discuss your project.',
}

export default async function ContactPage() {
  const blocks = await prisma.contentBlock.findMany({
    where: { key: { in: ['contact-address', 'contact-phone', 'contact-email'] } },
  })
  const blockMap = Object.fromEntries(blocks.map(b => [b.key, b.body]))

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Reach Out</p>
              <h1 className="text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-8">Let&apos;s Talk</h1>
              <p className="text-[#4A4A4A] mb-12 leading-relaxed">
                Have a project in mind, or simply want to explore possibilities? We&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                {blockMap['contact-address'] && (
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-2">Address</p>
                    <p className="text-sm text-[#4A4A4A] whitespace-pre-line">{blockMap['contact-address']}</p>
                  </div>
                )}
                {blockMap['contact-phone'] && (
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-2">Phone</p>
                    <a href={`tel:${blockMap['contact-phone']}`} className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors">
                      {blockMap['contact-phone']}
                    </a>
                  </div>
                )}
                {blockMap['contact-email'] && (
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-2">Email</p>
                    <a href={`mailto:${blockMap['contact-email']}`} className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors">
                      {blockMap['contact-email']}
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={150}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
