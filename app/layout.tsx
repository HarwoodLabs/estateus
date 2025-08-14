import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estateus - Your Gateway to Premium Real Estate',
  description: 'Discover, invest, and prosper with Estateus. Find your dream property, explore investment opportunities, and navigate the real estate market with confidence.',
  keywords: 'real estate, property, investment, homes for sale, real estate platform, property search, real estate investment',
  authors: [{ name: 'Estateus Team' }],
  creator: 'Estateus',
  publisher: 'Estateus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://estateus.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://estateus.com',
    siteName: 'Estateus',
    title: 'Estateus - Your Gateway to Premium Real Estate',
    description: 'Discover, invest, and prosper with Estateus. Find your dream property, explore investment opportunities, and navigate the real estate market with confidence.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Estateus - Premium Real Estate Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estateus - Your Gateway to Premium Real Estate',
    description: 'Discover, invest, and prosper with Estateus. Find your dream property, explore investment opportunities, and navigate the real estate market with confidence.',
    images: ['/og-image.png'],
    creator: '@estateus',
    site: '@estateus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Real Estate',
  classification: 'Business',
  other: {
    'msapplication-TileColor': '#3b82f6',
    'theme-color': '#3b82f6',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
