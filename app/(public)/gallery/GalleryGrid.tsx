'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type GalleryImage = {
  id: string
  imageUrl: string
  caption?: string | null
  category?: string | null
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const categories = ['All', ...Array.from(new Set(images.map(i => i.category).filter(Boolean))) as string[]]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? images : images.filter(i => i.category === activeCategory)
  const slides = filtered.map(i => ({ src: i.imageUrl, title: i.caption || undefined }))

  return (
    <>
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium tracking-widest uppercase border transition-colors ${
                activeCategory === cat
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-white text-[#9B9B9B] border-gray-200 hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            onClick={() => { setIndex(i); setOpen(true) }}
            className="w-full overflow-hidden group cursor-pointer break-inside-avoid"
          >
            <div className="relative overflow-hidden">
              <Image
                src={img.imageUrl}
                alt={img.caption || 'Gallery image'}
                width={800}
                height={600}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              {img.caption && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm">{img.caption}</p>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  )
}
