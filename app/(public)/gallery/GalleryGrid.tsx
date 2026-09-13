'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Maximize2 } from 'lucide-react'
import type { SampleGalleryImage } from '@/lib/sample-data'

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Conceptual']

export default function GalleryGrid({ images }: { images: SampleGalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const filtered = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory)

  const slides = filtered.map((img) => ({
    src: img.imageUrl,
    title: img.caption,
    description: img.projectTitle,
  }))

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-12 pb-4 border-b border-[#E5E5E5]">
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          const count = cat === 'All'
            ? images.length
            : images.filter((img) => img.category === cat).length

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                isActive
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-[#FAF9F7] text-[#767676] hover:text-[#1A1A1A] hover:bg-[#F0F0F0]'
              }`}
            >
              <span>{cat}</span>
              <span className="ml-2 font-mono text-[10px] opacity-70">({count})</span>
            </button>
          )
        })}
      </div>

      {/* Responsive Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filtered.map((img, i) => (
          <div
            key={img.id}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="break-inside-avoid overflow-hidden bg-[#FAF9F7] border border-[#E5E5E5] group cursor-pointer relative"
          >
            <div className="relative overflow-hidden">
              <Image
                src={img.imageUrl}
                alt={img.caption}
                width={900}
                height={650}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-black/60 backdrop-blur-xs">
                    {img.category}
                  </span>
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div>
                  {img.projectTitle && (
                    <span className="block text-[11px] uppercase tracking-wider text-white/70 font-mono">
                      {img.projectTitle}
                    </span>
                  )}
                  <p className="text-sm font-serif text-white font-light mt-1">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-[#E5E5E5] flex items-center justify-between text-xs">
              <span className="font-mono text-[#767676] text-[11px]">{img.category}</span>
              <span className="text-[10px] font-mono text-[#9B9B9B]">Plate 0{img.order}</span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  )
}
