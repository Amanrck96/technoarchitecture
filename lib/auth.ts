import { cookies } from 'next/headers'
import { getIronSession } from 'iron-session'
import { sessionOptions, SessionData } from './session'

export async function getSession() {
  const cookieStore = await cookies()
  return getIronSession<SessionData>(cookieStore, sessionOptions)
}

export async function requireAdmin() {
  const session = await getSession()
  if (!session.isLoggedIn) {
    throw new Error('Unauthorized')
  }
  return session
}
