'use client'

import { useState } from 'react'
import { deleteSubmission } from './actions'
import { Trash2 } from 'lucide-react'

type Submission = {
  id: string
  name: string
  email: string
  phone: string | null
  message: string
  createdAt: Date
}

export default function SubmissionsTable({
  submissions
}: {
  submissions: Submission[]
}) {
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) return
    
    setIsDeleting(id)
    try {
      await deleteSubmission(id)
    } catch (err) {
      console.error('Failed to delete', err)
      alert('Failed to delete submission')
    } finally {
      setIsDeleting(null)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#E5E5E5]">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">Contact Details</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">Message</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#E5E5E5]">
            {submissions.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4A4A4A] align-top">
                  {new Date(sub.createdAt).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm align-top">
                  <div className="font-medium text-[#1A1A1A]">{sub.name}</div>
                  <div className="text-[#4A4A4A]"><a href={`mailto:${sub.email}`} className="hover:underline">{sub.email}</a></div>
                  {sub.phone && <div className="text-[#9B9B9B]">{sub.phone}</div>}
                </td>
                <td className="px-6 py-4 text-sm text-[#4A4A4A] align-top max-w-md">
                  <div className="whitespace-pre-wrap">{sub.message}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium align-top">
                  <button
                    onClick={() => handleDelete(sub.id)}
                    disabled={isDeleting === sub.id}
                    className="text-red-600 hover:text-red-900 disabled:opacity-50 transition-colors p-2 rounded-md hover:bg-red-50"
                    title="Delete submission"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-[#4A4A4A]">
                  No contact submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
