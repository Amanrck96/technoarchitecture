'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Lazy-load the Three.js Canvas to prevent blocking initial paint and avoid SSR hydration issues
const ArchitecturalCanvas = dynamic(
  () => import('./ArchitecturalCanvas'),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
)

function HeroFallback() {
  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[560px] bg-gradient-to-b from-[#F9F9F9] to-white flex items-center justify-center overflow-hidden border border-[#E5E5E5]/60 rounded-sm">
      {/* Subtle architectural grid guidelines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Abstract geometric massing placeholder */}
      <div className="relative flex flex-col items-center">
        <div className="w-48 h-32 bg-[#1A1A1A]/90 shadow-2xl relative">
          <div className="absolute -top-8 -left-8 w-40 h-24 bg-[#4A4A4A] shadow-lg opacity-80" />
          <div className="absolute -bottom-6 -right-6 w-36 h-20 bg-[#9B9B9B] shadow-md opacity-60" />
        </div>
        <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#767676]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] animate-ping" />
          <span>Loading Spatial Model...</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-[460px] md:h-[540px] lg:h-[620px] overflow-hidden">
      <ArchitecturalCanvas />
    </div>
  )
}
