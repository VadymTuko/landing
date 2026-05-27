import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vadym Tushchenko — Senior WordPress Developer',
  description: 'Senior Full-Stack WordPress Developer based in Portugal. Custom WordPress themes, plugins, WooCommerce, Gutenberg, ACF, performance, security and production support.',
  generator: 'v0.app',
  keywords: ['WordPress Developer', 'Full-Stack Developer', 'WooCommerce', 'Gutenberg', 'ACF', 'PHP Developer', 'Remote Developer', 'Portugal'],
  authors: [{ name: 'Vadym Tushchenko' }],
  openGraph: {
    title: 'Vadym Tushchenko — Senior WordPress Developer',
    description: 'Senior Full-Stack WordPress Developer based in Portugal. Custom WordPress themes, plugins, WooCommerce, Gutenberg, ACF, performance, security and production support.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1d2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
