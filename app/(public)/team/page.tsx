import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowUpRight, Globe, Mail } from 'lucide-react'
import { getTeam } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Design Leadership & Team | Techno Architecture',
  description: 'Meet the architects, urban designers, and interior specialists guiding Techno Architecture.',
}

export default async function TeamPage() {
  const team = await getTeam()

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Editorial Header */}
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Studio</span>
              <span>&bull;</span>
              <span>Design Leadership</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] max-w-4xl tracking-tight leading-[1.08]">
              The minds, hands, and sensibilities shaping each space.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#4A4A4A] font-light max-w-2xl leading-relaxed">
              Our studio brings together architectural theorists, technical coordinators, and artisanal interior specialists united by an obsession with craftsmanship.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {team.map((member, i) => (
            <ScrollReveal key={member.id} direction="up" delay={i * 0.1}>
              <div className="group flex flex-col justify-between h-full border-b border-[#E5E5E5] pb-8">
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#F0F0F0] mb-6 border border-[#E5E5E5]">
                    <Image
                      src={member.photoUrl}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-[#1A1A1A]">
                      0{i + 1}
                    </div>
                  </div>

                  <h2 className="text-xl font-serif font-semibold text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors">
                    {member.name}
                  </h2>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#767676] mt-1">
                    {member.role}
                  </p>

                  {member.education && (
                    <span className="block text-[11px] text-[#9B9B9B] mt-2 font-mono">
                      {member.education}
                    </span>
                  )}

                  <p className="text-xs text-[#4A4A4A] font-light leading-relaxed mt-4">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                {member.socialLinks && (
                  <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#E5E5E5]/60 text-[#767676]">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#1A1A1A] transition-colors p-1"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92M7.85 18.5V10.13H5.06V18.5h2.79z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a
                        href={member.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#1A1A1A] transition-colors p-1"
                        aria-label={`${member.name} Instagram`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Studio Culture Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F7] border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#767676] block">
                Practice Culture
              </span>
              <h3 className="text-3xl font-serif text-[#1A1A1A] font-light">
                An interdisciplinary studio laboratory without corporate hierarchy.
              </h3>
              <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                From physical timber massing models to algorithmic environmental simulation, our design process thrives on intense critical debate, continuous sketch iterations, and regular visits to stone quarries and metal casting foundries.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 border border-[#E5E5E5]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
                  alt="Techno Architecture Studio Critique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
