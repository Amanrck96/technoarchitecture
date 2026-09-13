'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Maximize2 } from 'lucide-react'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = images.map((src) => ({ src }))

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="relative aspect-[16/10] overflow-hidden bg-[#F0F0F0] group cursor-pointer border border-[#E5E5E5] text-left block w-full"
          >
            <Image
              src={src}
              alt={`${title} — View ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
            
            {/* Hover Expand Icon */}
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs p-2 text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-[#1A1A1A]">
              View 0{i + 1}
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
