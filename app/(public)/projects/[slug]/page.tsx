import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Calendar, Layers, Maximize2 } from 'lucide-react'
import { getProjectBySlug, getProjectSlugs, getAllProjects } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ProjectGallery from './ProjectGallery'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params
  const project = await getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found | Techno Architecture' }

  return {
    title: `${project.title} | Techno Architecture`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Architectural Case Study`,
      description: project.description,
      images: [{ url: project.coverImageUrl }],
    },
  }
}

export default async function ProjectDetailPage(props: PageProps) {
  const { slug } = await props.params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const allProjects = await getAllProjects()
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#767676]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 hover:text-[#1A1A1A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Projects Catalog</span>
        </Link>
        <span className="hidden sm:inline">
          Ref: {project.slug}
        </span>
      </div>

      {/* Editorial Project Header */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#767676] mb-4">
          <span className="px-2.5 py-1 bg-[#1A1A1A] text-white">
            {project.status === 'COMPLETED' ? 'Completed' : 'In Construction'}
          </span>
          <span>&bull;</span>
          <span>{project.typology}</span>
          <span>&bull;</span>
          <span>{project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] tracking-tight leading-[1.08] max-w-4xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[#4A4A4A] font-light max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Full-Bleed Cover Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#F0F0F0] border border-[#E5E5E5]">
          <Image
            src={project.coverImageUrl}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]">
            Primary Exterior Perspective
          </div>
        </div>
      </section>

      {/* Specifications & Architectural Narrative */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Project Specs / Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-[#FAF9F7] border border-[#E5E5E5] space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] border-b border-[#E5E5E5] pb-3">
                Project Specifications
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="block text-[10px] uppercase text-[#9B9B9B]">Location</span>
                  <span className="text-[#1A1A1A] font-sans text-sm">{project.location}</span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase text-[#9B9B9B]">Typology</span>
                  <span className="text-[#1A1A1A] font-sans text-sm">{project.typology}</span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase text-[#9B9B9B]">Built-Up Area</span>
                  <span className="text-[#1A1A1A] font-sans text-sm">{project.area}</span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase text-[#9B9B9B]">Client Typology</span>
                  <span className="text-[#1A1A1A] font-sans text-sm">{project.client}</span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase text-[#9B9B9B]">Completion Timeline</span>
                  <span className="text-[#1A1A1A] font-sans text-sm">{project.year}</span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase text-[#9B9B9B]">Practice Stewardship</span>
                  <span className="text-[#1A1A1A] font-sans text-sm">Techno Architecture Studio</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5]">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#4A4A4A] transition-all"
                >
                  <span>Inquire Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Design Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#767676] block mb-2">
                Design Statement
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal leading-snug">
                Contextual Responses, Environmental Physics, and Spatial Sequence
              </h2>
            </div>

            <div className="space-y-6 text-base text-[#4A4A4A] font-light leading-relaxed">
              {project.narrative.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Photo Gallery with Interactive Lightbox */}
            {project.galleryImageUrls.length > 0 && (
              <div className="pt-8 border-t border-[#E5E5E5]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A1A1A]">
                    Visual Monograph ({project.galleryImageUrls.length} Views)
                  </h3>
                  <span className="text-[11px] font-mono text-[#767676]">
                    [Click photograph to enter full-screen lightbox]
                  </span>
                </div>
                <ProjectGallery images={project.galleryImageUrls} title={project.title} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next / Previous Project Navigation */}
      <section className="border-t border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 text-xs uppercase font-semibold tracking-[0.2em] text-[#767676] hover:text-[#1A1A1A] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="block text-[10px] text-[#9B9B9B]">Previous Project</span>
              <span className="text-sm font-serif text-[#1A1A1A]">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            href="/projects"
            className="text-xs font-mono uppercase tracking-widest text-[#767676] hover:text-[#1A1A1A]"
          >
            [ Back to All Projects ]
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 text-xs uppercase font-semibold tracking-[0.2em] text-[#767676] hover:text-[#1A1A1A] transition-colors group"
          >
            <div className="text-right">
              <span className="block text-[10px] text-[#9B9B9B]">Next Project</span>
              <span className="text-sm font-serif text-[#1A1A1A]">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
