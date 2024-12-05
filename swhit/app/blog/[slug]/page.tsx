'use client'

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { useParams } from 'next/navigation'

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
    title: "Wheat-Sol ($SWHIT): What We've Come to Do",
    content: `
      <h2>We are Wheat-Sol, and we're here to redefine the crypto landscape.</h2>
      
      <p>We're not just another token – we're a utility coin with a clear mission and a commitment to longevity. Here's what we've come to do:</p>

      <ol>
        <li><strong>Revolutionize Social Engagement:</strong> We're bridging the gap between social interaction and decentralized finance. Our platform rewards users for their contributions and engagement, creating a truly user-centric ecosystem.</li>
        
        <li><strong>Deliver Real Utility:</strong> $SWHIT is no meme coin. It's the backbone of our ecosystem, powering a range of DeFi features from staking to lending, all integrated seamlessly with our social platform.</li>
        
        <li><strong>Ensure Long-Term Profitability:</strong> We're not here for quick gains. Our tokenomics and development roadmap are designed to create sustainable value for all participants in the Wheat-Sol ecosystem.</li>
        
        <li><strong>Build a Lasting Community:</strong> We're here to stay, forever. Our goal is to foster a strong, engaged community that grows and evolves with our platform.</li>
        
        <li><strong>Innovate in the DeFi Space:</strong> From our current home on the Linea blockchain to our future plans for WheatChain, we're committed to pushing the boundaries of what's possible in decentralized finance.</li>
        
        <li><strong>Educate and Empower:</strong> We believe in transparency and education. We're here to explain, to clarify, and to help everyone understand the potential of our project and the broader DeFi landscape.</li>
        
        <li><strong>Create Win-Win Scenarios:</strong> Our success is your success. We've structured Wheat-Sol so that as we grow, our entire community benefits.</li>
      </ol>

      <p>In the coming weeks, we'll be diving deeper into each aspect of our project. From our innovative reward system to our plans for WheatChain, we'll break down how Wheat-Sol is set to make a lasting impact in the world of crypto.</p>

      <p>Stay tuned, engage with us, and be part of the Wheat-Sol revolution. Together, we're cultivating a new era of decentralized social finance.</p>

      <p>#WheatSol #SWHIT #DeFi #CryptoUtility</p>
    `,
    date: "2024-12-05"
  }
}

export default function BlogPost() {
  const params = useParams()
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const post = blogPosts[slug]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-16">
        <article className="prose prose-invert lg:prose-xl max-w-3xl">
          <h1>{post.title}</h1>
          <p className="text-gray-400">Published on {post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </div>
  )
}

