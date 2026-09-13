import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://technoarchitecture.in'),
  title: {
    default: 'Techno Architecture | Architectural Studio',
    template: '%s | Techno Architecture',
  },
  description: 'Techno Architecture — Designing Spaces. Defining Futures. Award-winning architectural studio delivering innovative residential, commercial, and institutional projects.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://technoarchitecture.in',
    siteName: 'Techno Architecture',
    images: [{ url: '/logo/logo-horizontal.png', width: 1200, height: 630, alt: 'Techno Architecture' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

interface LayoutProps<T> {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#1A1A1A]">{children}</body>
    </html>
  )
}
