'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  id: string
  title: string
  slug: string
  location: string
  year: number
  status: string
  coverImageUrl: string
  description: string
}

const filters = [
  { value: 'ALL', label: 'All' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'ONGOING', label: 'Ongoing' },
]

export default function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filtered = activeFilter === 'ALL' ? projects : projects.filter(p => p.status === activeFilter)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex gap-1 mb-16 border-b border-gray-100">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-6 py-3 text-xs font-medium tracking-widest uppercase transition-colors border-b-2 -mb-px ${
              activeFilter === f.value
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent text-[#9B9B9B] hover:text-[#4A4A4A]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      {filtered.length === 0 ? (
        <p className="text-[#9B9B9B] text-sm py-16 text-center">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filtered.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                <Image
                  src={project.coverImageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-medium tracking-widest uppercase">
                  {project.status === 'COMPLETED' ? 'Completed' : 'Ongoing'}
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-5xl font-light text-gray-200 leading-none block mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-medium text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mt-2">
                    <span>{project.year}</span>
                    <span>·</span>
                    <span>{project.location}</span>
                  </div>
                </div>
                <span className="text-[#9B9B9B] group-hover:text-[#1A1A1A] transition-colors mt-6">→</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
