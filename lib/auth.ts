import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getIronSession } from 'iron-session'
import { sessionOptions, SessionData } from './session'

export async function getSession() {
  const cookieStore = await cookies()
  return getIronSession<SessionData>(cookieStore, sessionOptions)
}

export async function requireAdmin(shouldRedirect: boolean = false) {
  const session = await getSession()
  if (!session.isLoggedIn) {
    if (shouldRedirect) {
      redirect('/admin/login')
    }
    throw new Error('Unauthorized')
  }
  return session
}
