import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Compass, Eye, Target, Award, Sparkles, Check } from 'lucide-react'
import { getAboutData } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'About the Studio | Techno Architecture',
  description: 'Learn about Techno Architecture — our history, architectural philosophy, vision, mission, and core practice values.',
}

export default async function AboutPage() {
  const { studioAbout, team } = await getAboutData()

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Editorial Header */}
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Monograph</span>
              <span>&bull;</span>
              <span>About Studio Practice</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] max-w-4xl tracking-tight leading-[1.08]">
              Architecture as a quiet dialogue between terrain, material, and human memory.
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-[#4A4A4A] font-light max-w-2xl leading-relaxed">
              Founded in Bengaluru, our studio operates at the nexus of technical precision and poetic intuition — crafting spaces that elevate everyday existence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio Narrative & Full Bleed Imagery */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#767676] block">
                Studio Genesis & Philosophy
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-normal text-[#1A1A1A] leading-tight">
                Fifteen years of resisting transient trends in pursuit of timeless permanence.
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-4 bg-[#FAF9F7] border-l-2 border-[#1A1A1A] text-xs text-[#767676] font-mono leading-relaxed">
                [Sample Placeholder Copy — Replace with finalized studio monograph copy in Phase 2]
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#E5E5E5]">
                {studioAbout.statistics.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-3xl font-serif text-[#1A1A1A]">{stat.value}</span>
                    <span className="text-[11px] uppercase tracking-wider text-[#767676] font-mono">{stat.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-[#4A4A4A] font-light leading-relaxed">
            <ScrollReveal direction="up" delay={0.1}>
              {studioAbout.story.map((paragraph, i) => (
                <p key={i} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&auto=format&fit=crop&q=85"
                  alt="Techno Architecture Studio Workspace"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A]">
                  Design Studio & Materials Workshop
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split Section */}
      <section className="py-20 lg:py-32 bg-[#FAF9F7] border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-white p-10 lg:p-12 border border-[#E5E5E5] h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#FAF9F7] flex items-center justify-center text-[#1A1A1A] mb-8 border border-[#E5E5E5]">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#767676] block mb-2">
                    Our Vision
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-serif text-[#1A1A1A] font-light mb-6">
                    A Benchmark for Conscious Spatial Stewardship
                  </h3>
                  <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                    {studioAbout.vision}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E5E5E5] text-[11px] font-mono text-[#9B9B9B] uppercase">
                  Long-term studio charter
                </div>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white p-10 lg:p-12 border border-[#E5E5E5] h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#FAF9F7] flex items-center justify-center text-[#1A1A1A] mb-8 border border-[#E5E5E5]">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#767676] block mb-2">
                    Our Mission
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-serif text-[#1A1A1A] font-light mb-6">
                    Harmonizing Built Forms with Living Ecologies
                  </h3>
                  <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                    {studioAbout.mission}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E5E5E5] text-[11px] font-mono text-[#9B9B9B] uppercase">
                  Everyday studio mandate
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-36 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 lg:mb-24">
            <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#9B9B9B] block mb-3">
              Internal Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white">
              Core Practice Values
            </h2>
            <p className="mt-4 text-[#9B9B9B] font-light text-sm">
              The ethical compass guiding every specification, contractor conversation, and client presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studioAbout.values.map((v, i) => (
              <ScrollReveal key={v.title} direction="up" delay={i * 0.1}>
                <div className="border-t border-white/20 pt-8 space-y-4">
                  <span className="text-xs font-mono text-[#9B9B9B]">0{i + 1} //</span>
                  <h3 className="text-xl font-serif font-normal text-white">{v.title}</h3>
                  <p className="text-xs text-[#9B9B9B] font-light leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction Bridge */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-[#E5E5E5] pb-8 mb-12 gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#767676] block mb-2">
              Studio Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1A1A1A]">
              The Architects Behind the Work
            </h2>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] hover:text-[#767676] transition-colors"
          >
            <span>Meet All Principals & Associates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.slice(0, 4).map((member, i) => (
            <ScrollReveal key={member.id} direction="up" delay={i * 0.1}>
              <Link href="/team" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-base font-serif font-semibold text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-[#767676] mt-0.5">{member.role}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
