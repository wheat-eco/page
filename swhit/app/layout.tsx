import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WheatSol - Building the Future of WheatChain',
  description: 'Revolutionizing DeFi on Linea with sustainable, efficient, and secure blockchain solutions. Join us in shaping the future of decentralized finance.',
  metadataBase: new URL('https://swhit.vercel.app'),
  openGraph: {
    title: 'WheatSol - Building the Future of WheatChain',
    description: 'Revolutionizing DeFi on Linea with sustainable, efficient, and secure blockchain solutions. Join us in shaping the future of decentralized finance.',
    url: 'https://swhit.vercel.app',
    siteName: 'WheatSol',
    images: [
      {
        url: '/wheatsol.jpg',
        width: 800,
        height: 800,
        alt: 'WheatSol Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WheatSol - Building the Future of WheatChain',
    description: 'Revolutionizing DeFi on Linea with sustainable, efficient, and secure blockchain solutions.',
    images: ['/wheatsol.jpg'],
    creator: '@wheat_linea',
  },
  icons: {
    icon: '/wheatsol.jpg',
    shortcut: '/wheatsol.jpg',
    apple: '/wheatsol.jpg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/wheatsol.jpg',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

