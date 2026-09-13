'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/recognitions', label: 'Recognitions' },
  { href: '/blog', label: 'Journal' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 shadow-xs'
            : 'bg-white/80 backdrop-blur-xs py-5 border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo (Horizontal wordmark: TECHNO in dark charcoal, ARCHITECTURE in muted grey) */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo/logo-horizontal.png"
              alt="Techno Architecture"
              width={220}
              height={30}
              className="h-7 w-auto object-contain transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[11px] font-medium tracking-[0.2em] uppercase transition-colors py-1 ${
                      isActive ? 'text-[#1A1A1A] font-semibold' : 'text-[#767676] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1A1A1A]" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right Action / Consultation Trigger */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] bg-[#1A1A1A] text-white hover:bg-[#4A4A4A] transition-all rounded-none"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 text-[#1A1A1A] hover:text-[#4A4A4A] focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1A1A] transition-all duration-400 xl:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-between h-full px-8 pt-24 pb-12 overflow-y-auto">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9B9B] block mb-6">
              Studio Navigation
            </span>
            <ul className="space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-2xl font-serif tracking-wide block transition-colors ${
                        isActive ? 'text-white underline underline-offset-8' : 'text-[#9B9B9B] hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 space-y-3">
            <p className="text-xs text-[#9B9B9B] uppercase tracking-widest">Techno Architecture Studio</p>
            <p className="text-sm text-white">#42, 12th Main Road, Indiranagar, Bengaluru</p>
            <p className="text-sm text-white/70">info@technoarchitecture.in</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 px-5 py-3 text-xs uppercase tracking-widest bg-white text-[#1A1A1A] font-semibold"
            >
              <span>Initiate Collaboration</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
