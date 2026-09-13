import React from 'react'
import type { Metadata } from 'next'
import { getGalleryImages } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GalleryGrid from './GalleryGrid'

export const metadata: Metadata = {
  title: 'Visual Archive & Masonry Gallery | Techno Architecture',
  description: 'Curated architectural photography and spatial studies categorized across Residential, Commercial, Interior, and Conceptual domains.',
}

export default async function GalleryPage() {
  const images = await getGalleryImages()

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Visuals</span>
              <span>&bull;</span>
              <span>Media Archive</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] tracking-tight">
                  Visual Archive
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light max-w-xl">
                  A high-resolution photographic study of material textures, light wells, and finished spatial sequences.
                </p>
              </div>
              <div className="text-xs font-mono text-[#767676] uppercase tracking-widest">
                [ {images.length} Archival Plates &bull; Click to Expand ]
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <GalleryGrid images={images} />
      </section>
    </div>
  )
}
