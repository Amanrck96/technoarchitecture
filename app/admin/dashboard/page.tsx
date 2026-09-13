import { requireAdmin } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import {
  FolderOpen,
  Users,
  Briefcase,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  HelpCircle,
  Mail,
  Plus
} from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  await requireAdmin()

  let projectsCount = 0
  let teamMembersCount = 0
  let servicesCount = 0
  let blogPostsCount = 0
  let galleryImagesCount = 0
  let testimonialsCount = 0
  let faqsCount = 0
  let inquiriesCount = 0
  let recentInquiries: any[] = []

  try {
    const res = await Promise.all([
      prisma.project.count(),
      prisma.teamMember.count(),
      prisma.service.count(),
      prisma.blogPost.count(),
      prisma.galleryImage.count(),
      prisma.testimonial.count(),
      prisma.faqItem.count(),
      prisma.contactSubmission.count(),
      prisma.contactSubmission.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' }
      })
    ])
    projectsCount = res[0]
    teamMembersCount = res[1]
    servicesCount = res[2]
    blogPostsCount = res[3]
    galleryImagesCount = res[4]
    testimonialsCount = res[5]
    faqsCount = res[6]
    inquiriesCount = res[7]
    recentInquiries = res[8]
  } catch (e) {
    console.warn('Dashboard DB query error:', e)
  }

  const stats = [
    { name: 'Projects', value: projectsCount, icon: FolderOpen, href: '/admin/projects' },
    { name: 'Team Members', value: teamMembersCount, icon: Users, href: '/admin/team' },
    { name: 'Services', value: servicesCount, icon: Briefcase, href: '/admin/services' },
    { name: 'Blog Posts', value: blogPostsCount, icon: FileText, href: '/admin/blog' },
    { name: 'Gallery Images', value: galleryImagesCount, icon: ImageIcon, href: '/admin/gallery' },
    { name: 'Testimonials', value: testimonialsCount, icon: MessageSquare, href: '/admin/testimonials' },
    { name: 'FAQs', value: faqsCount, icon: HelpCircle, href: '/admin/faq' },
    { name: 'Inquiries', value: inquiriesCount, icon: Mail, href: '/admin/contact-submissions' },
  ]

  const quickActions = [
    { name: 'Create Project', href: '/admin/projects/new', icon: Plus },
    { name: 'Upload Gallery Image', href: '/admin/gallery/new', icon: Plus },
    { name: 'Write Blog Post', href: '/admin/blog/new', icon: Plus },
    { name: 'Add Team Member', href: '/admin/team/new', icon: Plus },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-[#1A1A1A]">Dashboard</h1>
        <p className="mt-2 text-sm text-[#4A4A4A]">Overview of your website content and recent activity.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="bg-white p-6 rounded-lg border border-[#E5E5E5] flex items-center hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-full bg-gray-50 text-[#1A1A1A]">
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#4A4A4A]">{stat.name}</p>
              <p className="text-2xl font-semibold text-[#1A1A1A]">{stat.value}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
            <div className="px-6 py-5 border-b border-[#E5E5E5] flex justify-between items-center">
              <h3 className="text-lg font-medium text-[#1A1A1A]">Recent Inquiries</h3>
              <Link href="/admin/contact-submissions" className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] underline underline-offset-4">
                View all
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#E5E5E5]">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#E5E5E5]">
                  {recentInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A1A1A]">{inquiry.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4A4A4A]">{inquiry.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#9B9B9B]">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                  {recentInquiries.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-sm text-[#4A4A4A] text-center">
                        No recent inquiries.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-6">
            <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="flex items-center p-3 border border-[#E5E5E5] rounded-md hover:border-[#1A1A1A] hover:bg-gray-50 transition-colors group"
                >
                  <action.icon className="w-5 h-5 text-[#9B9B9B] group-hover:text-[#1A1A1A] mr-3" />
                  <span className="text-sm font-medium text-[#4A4A4A] group-hover:text-[#1A1A1A]">
                    {action.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
