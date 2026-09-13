import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the talented team behind Techno Architecture.',
}

export default async function TeamPage() {
  const team = await prisma.teamMember.findMany({ orderBy: { order: 'asc' } })

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">The People</p>
          <h1 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] max-w-2xl leading-tight mb-16">
            Our Team
          </h1>
        </ScrollReveal>

        {team.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[#9B9B9B] text-sm">Team members will be listed here soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 100}>
                <div className="group">
                  {member.photoUrl ? (
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                      <Image
                        src={member.photoUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[3/4] bg-gray-100 mb-6 flex items-center justify-center">
                      <span className="text-4xl text-gray-300">{member.name.charAt(0)}</span>
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-[#1A1A1A]">{member.name}</h3>
                  <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mt-1">{member.role}</p>
                  {member.bio && <p className="text-sm text-[#4A4A4A] leading-relaxed mt-3">{member.bio}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
