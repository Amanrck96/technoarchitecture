'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { SampleProject } from '@/lib/sample-data'

const filters = [
  { value: 'ALL', label: 'All Projects' },
  { value: 'COMPLETED', label: 'Completed Works' },
  { value: 'ONGOING', label: 'In Construction' },
]

export default function ProjectsFilter({ projects }: { projects: SampleProject[] }) {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.status === activeFilter)

  return (
    <div>
      {/* Editorial Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-16 pb-4 border-b border-[#E5E5E5]">
        {filters.map((f) => {
          const isActive = activeFilter === f.value
          const count = f.value === 'ALL'
            ? projects.length
            : projects.filter((p) => p.status === f.value).length

          return (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all relative ${
                isActive
                  ? 'text-[#1A1A1A] bg-[#FAF9F7] border border-[#1A1A1A]'
                  : 'text-[#767676] hover:text-[#1A1A1A] border border-transparent'
              }`}
            >
              <span>{f.label}</span>
              <span className="ml-2 font-mono text-[10px] text-[#9B9B9B]">({count})</span>
            </button>
          )
        })}
      </div>

      {/* Projects Grid with Smooth Animations */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <AnimatePresence>
          {filtered.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, '0')

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group block"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  {/* Card Media */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F0F0F0] mb-6 border border-[#E5E5E5]">
                    <Image
                      src={project.coverImageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Status Pill in Corner */}
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/95 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-xs">
                      {project.status === 'COMPLETED' ? 'Completed' : 'In Construction'}
                    </div>

                    {/* Hover Inspect Badge */}
                    <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-[#1A1A1A] text-white text-[10px] font-semibold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl lg:text-4xl font-serif font-light text-[#9B9B9B]/40">
                        {projectNumber}
                      </span>
                      <span className="text-xs font-mono text-[#767676]">
                        {project.typology}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-normal text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-3 text-xs font-mono text-[#767676] pt-1">
                      <span>{project.location}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                      <span>&bull;</span>
                      <span>{project.area}</span>
                    </div>

                    <p className="text-xs text-[#4A4A4A] font-light leading-relaxed line-clamp-2 pt-1">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[#767676] text-sm">
          No projects found in this classification.
        </div>
      )}
    </div>
  )
}
