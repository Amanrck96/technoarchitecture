import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://technoarchitecture.in'),
  title: {
    default: 'Techno Architecture',
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
