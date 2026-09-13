import { getProjects } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ProjectsFilter from './ProjectsFilter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore completed and ongoing architectural projects by Techno Architecture.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Portfolio</p>
          <h1 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-8">Projects</h1>
        </ScrollReveal>
        <ProjectsFilter projects={projects} />
      </section>
    </div>
  )
}
