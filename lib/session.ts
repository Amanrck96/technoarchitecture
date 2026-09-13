import { SessionOptions } from 'iron-session'

export interface SessionData {
  adminId?: string
  adminEmail?: string
  isLoggedIn: boolean
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET || 'complex_password_at_least_32_characters_long_techno_arch_secret_fallback',
  cookieName: 'techno-arch-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
  },
}
