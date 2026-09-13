'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
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
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo-horizontal.png"
              alt="Techno Architecture"
              width={240}
              height={32}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-medium tracking-widest uppercase transition-colors ${
                    scrolled ? 'text-[#4A4A4A] hover:text-[#1A1A1A]' : 'text-white/90 hover:text-white'
                  } ${pathname === link.href ? (scrolled ? 'text-[#1A1A1A]' : 'text-white') : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${
              scrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1A1A] transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-8">
          <ul className="space-y-6">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ transitionDelay: `${i * 50}ms` }}>
                <Link
                  href={link.href}
                  className="text-3xl font-light text-white tracking-wide hover:text-[#9B9B9B] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-2 text-[#9B9B9B] text-sm">
            <p>info@technoarchitecture.in</p>
            <p>+91 00000 00000</p>
          </div>
        </div>
      </div>
    </>
  )
}
