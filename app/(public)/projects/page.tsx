import React from 'react'
import type { Metadata } from 'next'
import { getAllProjects } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ProjectsFilter from './ProjectsFilter'

export const metadata: Metadata = {
  title: 'Architecture Portfolio | Techno Architecture',
  description: 'Explore completed and ongoing residential, commercial, and civic architectural works by Techno Architecture.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Archive</span>
              <span>&bull;</span>
              <span>Monograph Index</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] tracking-tight">
                  Selected Works
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light max-w-xl">
                  A chronological survey of built architecture, ongoing commissions, and research-led spatial explorations.
                </p>
              </div>
              <div className="text-sm font-mono text-[#767676] uppercase tracking-widest">
                [ Total Catalog: {projects.length} Works ]
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <ProjectsFilter projects={projects} />
      </section>
    </div>
  )
}
