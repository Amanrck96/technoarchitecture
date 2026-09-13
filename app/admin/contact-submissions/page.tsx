import { requireAdmin } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import SubmissionsTable from './SubmissionsTable'

export const dynamic = 'force-dynamic'

export default async function ContactSubmissionsPage() {
  await requireAdmin()

  let submissions: any[] = []
  try {
    submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' }
    })
  } catch (e) {
    console.warn('Contact submissions DB error:', e)
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-[#1A1A1A]">Inquiries</h1>
        <p className="mt-2 text-sm text-[#4A4A4A]">Manage contact form submissions from the public website.</p>
      </div>

      <SubmissionsTable submissions={submissions} />
    </div>
  )
}
