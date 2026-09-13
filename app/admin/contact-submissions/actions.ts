'use server'

import { requireAdmin } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deleteSubmission(id: string) {
  await requireAdmin()
  await prisma.contactSubmission.delete({
    where: { id }
  })
  revalidatePath('/admin/contact-submissions')
}
