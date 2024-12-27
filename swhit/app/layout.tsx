import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WheatChain (SWHIT) - Cultivating Digital Prosperity',
  description: 'WheatChain is a groundbreaking multi-chain digital asset protocol revolutionizing value creation and distribution in Web3. Join us in shaping the future of decentralized finance across multiple blockchains.',
  metadataBase: new URL('https://wheatchain.xyz'),
  openGraph: {
    title: 'WheatChain (SWHIT) - Cultivating Digital Prosperity',
    description: 'WheatChain is a groundbreaking multi-chain digital asset protocol revolutionizing value creation and distribution in Web3. Join us in shaping the future of decentralized finance across multiple blockchains.',
    url: 'https://wheatchain.xyz',
    siteName: 'WheatChain',
    images: [
      {
        url: '/wheatchain.png',
        width: 100,
        height: 100,
        alt: 'WheatChain Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WheatChain (SWHIT) - Cultivating Digital Prosperity',
    description: 'A multi-chain digital asset protocol revolutionizing value creation and distribution in Web3.',
    images: ['/wheatsol.jpg'],
    creator: '@WheatChain',
  },
  icons: {
    icon: '/wheatchain.png',
    shortcut: '/wheatchain.png',
    apple: '/wheatchain.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/wheatchain.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}