'use client'

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  title: string
  content: string
  date: string
}

interface BlogPosts {
  [key: string]: BlogPost
}

const blogPosts: BlogPosts = {
  "wheat-sol-what-weve-come-to-do": {
    title: "Wheat-Sol ($SWHIT): Revolutionizing Social Engagement and DeFi",
    content: `
      <div class="space-y-8">
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white">Introducing Wheat-Sol: More Than Just an Airdrop</h2>
          <p class="text-gray-300">Wheat-Sol ($SWHIT) isn&apos;t just another token or a simple airdrop. We&apos;re a revolutionary platform designed for the entire community, aiming to redefine the intersection of social engagement and decentralized finance (DeFi).</p>
          <div class="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=256&width=512"
              alt="Wheat-Sol Platform Concept"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section class="space-y-6">
          <h3 class="text-xl font-semibold text-white">Our Vision and Mission</h3>
          <p class="text-gray-300">At Wheat-Sol, we recognize that we might not be perfect, but we&apos;re here with a clear purpose: to create positive change in the world of blockchain and beyond. Our mission is to build a platform that truly values and rewards its community while driving innovation in the blockchain industry.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-800 p-4 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-2">User-Centric Rewards</h4>
              <p class="text-gray-300">Earn SWHIT tokens for your contributions and engagement on the platform.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-2">Decentralized Governance</h4>
              <p class="text-gray-300">Participate in key decision-making processes that shape the future of Wheat-Sol.</p>
            </div>
          </div>
        </section>

        <section class="space-y-6">
          <h3 class="text-xl font-semibold text-white">Key Features of Wheat-Sol</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li>Blockchain-based social engagement platform</li>
            <li>Integrated DeFi features including DEX, yield farming, and lending</li>
            <li>Community-driven development and governance</li>
            <li>Robust security measures and compliance standards</li>
            <li>Future plans for WheatChain, our own blockchain</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h3 class="text-xl font-semibold text-white">Join the Wheat-Sol Revolution</h3>
          <p class="text-gray-300">We invite users, developers, investors, and partners to join us in shaping the future of social engagement and decentralized finance. Together, we can build a more equitable, transparent, and rewarding ecosystem for all.</p>
          <div class="flex space-x-4">
            <a href="https://t.me/swhit_tg" target="_blank" rel="noopener noreferrer" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join our Telegram
            </a>
            <a href="https://x.com/wheat_linea?t=uYAmigt6Zsaks7p0NeofPw&s=09" target="_blank" rel="noopener noreferrer" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Follow us on Twitter
            </a>
          </div>
        </section>

        <section class="space-y-4">
          <h3 class="text-xl font-semibold text-white">The Road Ahead</h3>
          <p class="text-gray-300">Our journey is just beginning. In the coming weeks and months, we&apos;ll be sharing more details about our innovative reward system, our plans for WheatChain, and how Wheat-Sol is set to make a lasting impact in the world of crypto.</p>
          <p class="text-gray-300">Stay tuned, engage with us, and be part of the Wheat-Sol revolution. Together, we&apos;re cultivating a new era of decentralized social finance.</p>
          <p class="text-blue-400">#WheatSol #SWHIT #DeFi #CryptoRevolution</p>
        </section>
      </div>
    `,
    date: "December 5, 2024"
  }
}

export default function BlogPost() {
  const params = useParams()
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <NavBar />
        <main className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/blog"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {post.title}
            </h1>
            <time className="block text-gray-400">
              Published on {post.date}
            </time>
          </header>
          
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <footer className="mt-12 pt-8 border-t border-gray-800">
            <Link 
              href="/blog"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Blog
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  )
}

