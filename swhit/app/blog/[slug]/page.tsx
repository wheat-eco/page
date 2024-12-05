'use client'

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { useParams } from 'next/navigation'
import Link from 'next/link'

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
    title: "Wheat-Sol ($SWHIT): What We&apos;ve Come to Do",
    content: `
      <div class="space-y-8">
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white">We are Wheat-Sol, and we&apos;re here to redefine the crypto landscape.</h2>
          <p class="text-gray-300">We&apos;re not just another token &ndash; we&apos;re a utility coin with a clear mission and a commitment to longevity. Here&apos;s what we&apos;ve come to do:</p>
        </section>

        <section class="space-y-6">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">1. Revolutionize Social Engagement</h3>
            <p class="text-gray-300">We&apos;re bridging the gap between social interaction and decentralized finance. Our platform rewards users for their contributions and engagement, creating a truly user-centric ecosystem.</p>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">2. Deliver Real Utility</h3>
            <p class="text-gray-300">$SWHIT is no meme coin. It&apos;s the backbone of our ecosystem, powering a range of DeFi features from staking to lending, all integrated seamlessly with our social platform.</p>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">3. Ensure Long-Term Profitability</h3>
            <p class="text-gray-300">We&apos;re not here for quick gains. Our tokenomics and development roadmap are designed to create sustainable value for all participants in the Wheat-Sol ecosystem.</p>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">4. Build a Lasting Community</h3>
            <p class="text-gray-300">We&apos;re here to stay, forever. Our goal is to foster a strong, engaged community that grows and evolves with our platform.</p>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">5. Innovate in the DeFi Space</h3>
            <p class="text-gray-300">From our current home on the Linea blockchain to our future plans for WheatChain, we&apos;re committed to pushing the boundaries of what&apos;s possible in decentralized finance.</p>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">6. Educate and Empower</h3>
            <p class="text-gray-300">We believe in transparency and education. We&apos;re here to explain, to clarify, and to help everyone understand the potential of our project and the broader DeFi landscape.</p>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">7. Create Win-Win Scenarios</h3>
            <p class="text-gray-300">Our success is your success. We&apos;ve structured Wheat-Sol so that as we grow, our entire community benefits.</p>
          </div>
        </section>

        <section class="space-y-4">
          <p class="text-gray-300">In the coming weeks, we&apos;ll be diving deeper into each aspect of our project. From our innovative reward system to our plans for WheatChain, we&apos;ll break down how Wheat-Sol is set to make a lasting impact in the world of crypto.</p>
          
          <p class="text-gray-300">Stay tuned, engage with us, and be part of the Wheat-Sol revolution. Together, we&apos;re cultivating a new era of decentralized social finance.</p>
          
          <p class="text-blue-400">#WheatSol #SWHIT #DeFi #CryptoUtility</p>
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

