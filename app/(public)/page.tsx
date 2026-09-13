import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Compass, Sparkles, Shield, Feather, CheckCircle2 } from 'lucide-react'
import { getHomePageData } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Hero3D from '@/components/hero/Hero3D'

export const metadata = {
  title: 'Techno Architecture | Designing Spaces. Defining Futures.',
  description:
    'Award-winning architectural studio dedicated to contextual honesty, structural clarity, and spatial poetry. Crafting high-performance residential, commercial, and civic landmarks.',
}

export default async function HomePage() {
  const { featuredProjects, pillars, testimonials, studioAbout } = await getHomePageData()

  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH INTERACTIVE 3D ARCHITECTURAL MASSING MODEL */}
      {/* ========================================================================= */}
      <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 border-b border-[#E5E5E5] bg-gradient-to-b from-[#FAF9F7] via-[#FAF9F7]/70 to-white overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
            {/* Left Col: Headline, Brand Philosophy & CTA */}
            <div className="lg:col-span-6 space-y-8">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#1A1A1A]/15 bg-white/80 backdrop-blur-xs text-[10px] uppercase font-semibold tracking-[0.25em] text-[#4A4A4A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                  <span>Architecture &bull; Urbanism &bull; Interiors</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light text-[#1A1A1A] tracking-tight leading-[1.08]">
                  Designing Spaces. <br />
                  <span className="italic font-normal text-[#4A4A4A]">Defining Futures.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-xl">
                  We craft contextual, climate-responsive architectural landmarks that balance structural poetry with technical rigor. Each project is an enduring testament to its site, climate, and human spirit.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-[0.22em] hover:bg-[#4A4A4A] transition-all shadow-xs group"
                  >
                    <span>Explore Selected Works</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.22em] hover:bg-[#1A1A1A] hover:text-white transition-all group"
                  >
                    <span>Initiate Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Studio Metrics Row */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E5E5E5] text-left">
                  <div>
                    <span className="block text-2xl lg:text-3xl font-serif text-[#1A1A1A]">15+</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#767676]">Years Practice</span>
                  </div>
                  <div>
                    <span className="block text-2xl lg:text-3xl font-serif text-[#1A1A1A]">45+</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#767676]">Completed Works</span>
                  </div>
                  <div>
                    <span className="block text-2xl lg:text-3xl font-serif text-[#1A1A1A]">12</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#767676]">Design Citations</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Col: Interactive 3D Turntable Architectural Element */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="left" delay={0.25} duration={0.9}>
                <div className="relative rounded-sm overflow-hidden bg-gradient-to-b from-white to-[#F6F5F2] border border-[#E5E5E5] shadow-xl shadow-black/5">
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#767676] bg-white/80 px-2.5 py-1 border border-[#E5E5E5]">
                    <span>FIG. 01</span>
                    <span>&mdash;</span>
                    <span>Massing Model Study</span>
                  </div>
                  
                  {/* Three.js Canvas Element */}
                  <Hero3D />

                  {/* Drag interaction guidance */}
                  <div className="absolute bottom-3 left-4 z-20 text-[10px] text-[#767676] font-mono tracking-wider hidden sm:block">
                    [Click + Drag to rotate 3D form]
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PHILOSOPHY TEASER (Inspired by 2plus.design & Studio Bomb) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#9B9B9B] block mb-3">
                Studio Creed
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">
                Techno Architecture &bull; Monograph
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white leading-snug">
                &ldquo;Architecture is not the imposition of arbitrary form upon nature; it is the discipline of listening to terrain, climate, and the human condition, then sculpting space with honesty and restraint.&rdquo;
              </p>
              <div className="flex items-center gap-4 text-xs text-[#9B9B9B] uppercase tracking-[0.2em] pt-4">
                <span className="w-8 h-px bg-white/30" />
                <span>Rajesh V., Principal Architect</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED PROJECTS SHOWCASE (Numbered editorial cards) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 pb-6 border-b border-[#E5E5E5] gap-4">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#767676] block mb-2">
              Curated Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
              Selected Works
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] hover:text-[#767676] transition-colors group"
          >
            <span>View Full Archive ({featuredProjects.length + 3})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-28 lg:space-y-40">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1
            const projectNumber = String(idx + 1).padStart(2, '0')

            return (
              <ScrollReveal key={project.id} direction="up" delay={0.1}>
                <div className="group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Media Container */}
                    <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <Link href={`/projects/${project.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[#F0F0F0]">
                        <Image
                          src={project.coverImageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                          priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                        
                        {/* Hover Overlay Pill */}
                        <div className="absolute bottom-5 right-5 z-10 px-4 py-2 bg-white/95 backdrop-blur-xs text-[#1A1A1A] text-[10px] font-semibold uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 shadow-md">
                          <span>Inspect Project</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </Link>
                    </div>

                    {/* Metadata & Narrative Container */}
                    <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
                        <span className="text-4xl lg:text-6xl font-serif text-[#9B9B9B]/40 font-light">
                          {projectNumber}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full ${
                            project.status === 'COMPLETED'
                              ? 'bg-[#1A1A1A] text-white'
                              : 'bg-[#9B9B9B]/20 text-[#4A4A4A]'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#767676] block mb-2">
                          {project.typology} &bull; {project.area}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-serif font-normal text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors">
                          <Link href={`/projects/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>
                      </div>

                      {/* Meta attributes */}
                      <div className="grid grid-cols-2 gap-4 py-2 text-xs text-[#767676] border-y border-[#E5E5E5]/60 font-mono">
                        <div>
                          <span className="block text-[10px] text-[#9B9B9B] uppercase">Location</span>
                          <span className="text-[#1A1A1A] font-sans text-xs">{project.location}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-[#9B9B9B] uppercase">Completion</span>
                          <span className="text-[#1A1A1A] font-sans text-xs">{project.year}</span>
                        </div>
                      </div>

                      <p className="text-sm text-[#4A4A4A] font-light leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="pt-2">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] group-hover:gap-3 transition-all"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "WHY TECHNO" — FOUR PILLARS ICON + TEXT GRID */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-36 bg-[#FAF9F7] border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 lg:mb-24">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#767676] block mb-2">
              Foundational Ethos
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
              The Four Pillars of Techno Practice
            </h2>
            <p className="mt-4 text-sm text-[#4A4A4A] font-light leading-relaxed">
              Every commission entrusted to our studio is filtered through these four non-negotiable architectural tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const icons = [Compass, Feather, Shield, Sparkles]
              const IconComponent = icons[index % icons.length]

              return (
                <ScrollReveal key={pillar.number} direction="up" delay={index * 0.1}>
                  <div className="bg-white p-8 border border-[#E5E5E5] h-full flex flex-col justify-between hover:border-[#1A1A1A] transition-all duration-300 group shadow-xs">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <span className="font-mono text-xs text-[#9B9B9B] tracking-widest">
                          [{pillar.number}]
                        </span>
                        <div className="w-10 h-10 rounded-full bg-[#FAF9F7] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-serif font-normal text-[#1A1A1A] mb-1">
                        {pillar.title}
                      </h3>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#767676] font-medium block mb-4">
                        {pillar.tagline}
                      </span>
                      <p className="text-xs text-[#4A4A4A] font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#E5E5E5]/60 flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#9B9B9B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                      <span>Studio Standard</span>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS (Clean architectural endorsements) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#767676] block mb-2">
            Client Voices
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
            Endorsements of Trust
          </h2>
          <p className="mt-4 text-sm text-[#4A4A4A] font-light">
            Insights from homeowners, civic patrons, and commercial partners who have inhabited our architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.id} direction="up" delay={idx * 0.12}>
              <div className="bg-[#FAF9F7] p-8 lg:p-10 border border-[#E5E5E5] flex flex-col justify-between h-full hover:border-[#1A1A1A] transition-colors">
                <div>
                  <span className="text-3xl font-serif text-[#1A1A1A]/20 block mb-4">&ldquo;</span>
                  <p className="text-sm font-light text-[#1A1A1A] leading-relaxed mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E5E5E5] flex items-center gap-4">
                  {t.photoUrl ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <Image
                        src={t.photoUrl}
                        alt={t.clientName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-base shrink-0">
                      {t.clientName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                      {t.clientName}
                    </h4>
                    <p className="text-[11px] text-[#767676]">{t.role}</p>
                    <p className="text-[10px] text-[#9B9B9B] font-mono mt-0.5">{t.projectRef}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BOTTOM CTA — "LET'S CO-CREATE" (Inspired by 2plus.design) */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-36 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#9B9B9B] block mb-4">
              Begin a Dialogue
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Let&apos;s co-create your next architectural milestone.
            </h2>
            <p className="text-[#9B9B9B] text-base lg:text-lg font-light max-w-xl mx-auto mt-6 leading-relaxed">
              Whether you are planning a private coastal residence, an urban commercial headquarters, or an institutional masterplan, our studio is ready to collaborate.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 bg-white text-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#E5E5E5] transition-all shadow-lg group"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.25em] hover:bg-white hover:text-[#1A1A1A] transition-all"
              >
                <span>Review Portfolio</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
