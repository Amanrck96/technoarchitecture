import Image from 'next/image'
import Link from 'next/link'
import { getHomePageData } from '@/lib/data'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata = {
  title: 'Home | Techno Architecture',
  description: 'Techno Architecture — Designing Spaces. Defining Futures.',
}

export default async function HomePage() {
  const { featuredProjects, testimonials, heroTagline, heroSubtext, whyUs } = await getHomePageData()

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-16 lg:pb-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Techno Architecture hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight max-w-3xl">
              {heroTagline?.body || 'Designing Spaces. Defining Futures.'}
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-lg">
              {heroSubtext?.body || 'We craft meaningful architectural experiences that endure.'}
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-[#9B9B9B] hover:text-white transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      {featuredProjects.length > 0 && (
        <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-3">Selected Work</p>
                <h2 className="text-3xl lg:text-5xl font-light text-[#1A1A1A]">Projects</h2>
              </div>
              <Link href="/projects" className="text-sm font-medium tracking-wider uppercase text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors underline underline-offset-4">
                View All
              </Link>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                        <Image
                          src={project.coverImageUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <span className="text-6xl lg:text-8xl font-light text-[#9B9B9B]/30 leading-none block mb-4">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-light text-[#1A1A1A] mb-4 group-hover:text-[#4A4A4A] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-4 text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">
                        <span>{project.year}</span>
                        <span>·</span>
                        <span>{project.location}</span>
                        <span>·</span>
                        <span>{project.status === 'COMPLETED' ? 'Completed' : 'Ongoing'}</span>
                      </div>
                      <p className="text-sm text-[#4A4A4A] leading-relaxed line-clamp-3">{project.description}</p>
                      <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#1A1A1A] group-hover:gap-4 transition-all">
                        View Project <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* WHY TECHNO */}
      {whyUs && (
        <section className="bg-[#1A1A1A] py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-3">Why Us</p>
              <h2 className="text-3xl lg:text-5xl font-light text-white mb-8 max-w-2xl">
                Why Techno?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                {whyUs.body}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 border border-white text-white px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors"
              >
                Learn More About Us
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-3">What Clients Say</p>
            <h2 className="text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-16">Testimonials</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <ScrollReveal key={t.id} delay={index * 100}>
                <div className="border border-gray-100 p-8 hover:border-gray-300 transition-colors">
                  <p className="text-lg font-light text-[#1A1A1A] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-medium text-sm text-[#1A1A1A]">{t.clientName}</p>
                    {t.company && <p className="text-xs text-[#9B9B9B] mt-1">{t.company}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-6">
              Let&apos;s create something remarkable.
            </h2>
            <p className="text-[#9B9B9B] mb-8 max-w-md mx-auto">
              Have a project in mind? We&apos;d love to hear about it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-[#4A4A4A] transition-colors"
            >
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
