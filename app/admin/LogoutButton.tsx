'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' })
      if (res.ok) {
        router.push('/admin/login')
        router.refresh()
      }
    } catch (err) {
      console.error('Failed to logout', err)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  )
}
