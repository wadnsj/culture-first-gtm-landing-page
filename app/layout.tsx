import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'A Step-by-Step GTM System for Founders So They Win the Right Customers',
  description:
    'A Step-by-Step GTM System for Founders So They Win the Right Customers',
  openGraph: {
    title: 'A Step-by-Step GTM System for Founders So They Win the Right Customers',
    description:
      'A Step-by-Step GTM System for Founders So They Win the Right Customers',
  },
  twitter: {
    title: 'A Step-by-Step GTM System for Founders So They Win the Right Customers',
    description:
      'A Step-by-Step GTM System for Founders So They Win the Right Customers',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f2ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
