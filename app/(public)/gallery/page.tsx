import { prisma } from '@/lib/prisma'
import GalleryGrid from './GalleryGrid'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A visual collection of Techno Architecture projects and spaces.',
}

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({ orderBy: { order: 'asc' } })

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Visual Archive</p>
          <h1 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-12">Gallery</h1>
        </ScrollReveal>
        {images.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[#9B9B9B] text-sm">Gallery images will appear here.</p>
          </div>
        ) : (
          <GalleryGrid images={images} />
        )}
      </section>
    </div>
  )
}
