import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/recognitions', label: 'Recognitions' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/logo/logo-stacked.png"
              alt="Techno Architecture"
              width={160}
              height={80}
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-[#9B9B9B] text-sm leading-relaxed max-w-xs">
              Designing Spaces. Defining Futures.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-6">Contact</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>info@technoarchitecture.in</p>
              <p>+91 00000 00000</p>
              <p className="leading-relaxed">
                123 Design Street<br />
                Your City, State 000000
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#9B9B9B] hover:text-white transition-colors text-xs tracking-widest uppercase">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#9B9B9B] hover:text-white transition-colors text-xs tracking-widest uppercase">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#9B9B9B] text-xs">
            © {new Date().getFullYear()} Techno Architecture. All rights reserved.
          </p>
          <Link href="/admin" className="text-[#9B9B9B] hover:text-white text-xs transition-colors">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  )
}
