import { getSession } from '@/lib/auth'
import Link from 'next/link'
import Image from 'next/image'
import LogoutButton from './LogoutButton'
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  Briefcase,
  MessageSquare,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  Award,
  Box,
  Mail,
  ExternalLink
} from 'lucide-react'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session.isLoggedIn) {
    return <>{children}</>
  }

  const navLinks = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: FolderOpen },
    { name: 'Team', href: '/admin/team', icon: Users },
    { name: 'Services', href: '/admin/services', icon: Briefcase },
    { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
    { name: 'Blog', href: '/admin/blog', icon: FileText },
    { name: 'FAQ', href: '/admin/faq', icon: HelpCircle },
    { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
    { name: 'Recognitions', href: '/admin/recognitions', icon: Award },
    { name: 'Content Blocks', href: '/admin/content-blocks', icon: Box },
    { name: 'Inquiries', href: '/admin/contact-submissions', icon: Mail },
  ]

  return (
    <div className="flex h-screen bg-[#F9F9F9] text-[#1A1A1A] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#E5E5E5] flex flex-col h-full shrink-0">
        <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-center">
          <Link href="/admin/dashboard" className="block relative w-40 h-10">
            <Image
              src="/logo/logo-horizontal.png"
              alt="Techno Architecture"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 text-sm text-[#4A4A4A] hover:text-[#1A1A1A] hover:bg-gray-50 rounded-md transition-colors"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-[#E5E5E5]">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 text-sm text-[#4A4A4A] hover:text-[#1A1A1A] hover:bg-gray-50 rounded-md transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Public Website
            </a>
          </div>
        </nav>

        <div className="p-4 border-t border-[#E5E5E5]">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          {children}
        </div>
      </main>
    </div>
  )
}
