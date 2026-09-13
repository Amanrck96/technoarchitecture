'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = images.map(src => ({ src }))

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setOpen(true) }}
            className="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer"
          >
            <Image
              src={src}
              alt={`${title} — ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
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
