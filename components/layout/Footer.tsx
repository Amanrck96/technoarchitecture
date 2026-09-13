'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { STUDIO_CONTACT } from '@/lib/sample-data'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-black">
      {/* Upper Editorial Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#9B9B9B] block mb-3">
              Spatial Inquiry
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight max-w-xl leading-tight">
              Have a site, a vision, or a challenge in mind?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#E5E5E5] transition-all group"
          >
            <span>Let&apos;s Co-Create</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Col 1: Brand Stacked Logo & Studio Statement */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo/logo-stacked.png"
                alt="Techno Architecture"
                width={180}
                height={90}
                className="h-16 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-sm text-[#9B9B9B] font-light leading-relaxed max-w-sm">
              An architectural practice committed to contextual honesty, structural clarity, and spatial poetry. Crafting enduring residential, commercial, and civic landmarks.
            </p>
            <div className="mt-8 flex items-center gap-6 text-xs text-[#9B9B9B] uppercase tracking-[0.2em]">
              <a
                href={STUDIO_CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={STUDIO_CONTACT.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Col 2: Studio Directory */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white mb-6">
              Studio
            </h3>
            <ul className="space-y-3 text-sm text-[#9B9B9B]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Practice</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Disciplines</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">Design Leadership</Link>
              </li>
              <li>
                <Link href="/recognitions" className="hover:text-white transition-colors">Citations & Press</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Archives */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white mb-6">
              Archives
            </h3>
            <ul className="space-y-3 text-sm text-[#9B9B9B]">
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Visual Archive</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Journal / Essays</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">Client FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Office Location</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Office Contact */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white mb-6">
              Headquarters
            </h3>
            <div className="space-y-2 text-sm text-[#9B9B9B]">
              <p className="text-white">{STUDIO_CONTACT.address.line1}</p>
              <p>{STUDIO_CONTACT.address.line2}</p>
              <p>{STUDIO_CONTACT.address.area}</p>
              <p>{STUDIO_CONTACT.address.state}</p>
              <div className="pt-4 space-y-1">
                <p className="text-white font-mono text-xs">{STUDIO_CONTACT.phone}</p>
                <p className="text-white text-xs">{STUDIO_CONTACT.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#767676]">
          <p>© {new Date().getFullYear()} Techno Architecture Studio. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>Design Prototype Phase 1</span>
            <span className="w-1 h-1 rounded-full bg-[#767676]" />
            <span>Static Client Presentation</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
