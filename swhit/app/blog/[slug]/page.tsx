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
    title: "Wheat-Sol ($SWHIT): Building Trust and Revolutionizing DeFi",
    content: `
      <div class="space-y-8">
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white">Introducing Wheat-Sol: A Commitment to Transparency and Innovation</h2>
          <p class="text-gray-300">At Wheat-Sol, we understand that trust is the foundation of any successful blockchain project. That's why we're committed to complete transparency in everything we do. From our code to our communications, we believe in open, honest dialogue with our community.</p>
        </section>

        <section class="space-y-6">
          <h3 class="text-xl font-semibold text-white">Our Vision: Beyond Just Another Token</h3>
          <p class="text-gray-300">Wheat-Sol ($SWHIT) isn't just another token or a simple airdrop. We're building a comprehensive ecosystem that bridges social engagement with decentralized finance (DeFi). Here's how we're different:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Transparent Development: Our codebase is open-source, allowing for community review and contribution.</li>
            <li>Regular Updates: We commit to weekly development updates, keeping our community informed of our progress.</li>
            <li>Community-Driven Governance: Major decisions are put to community vote, ensuring your voice is heard.</li>
            <li>Sustainable Tokenomics: Our token distribution and emission schedule are designed for long-term stability.</li>
          </ul>
        </section>

        <section class="space-y-6">
          <h3 class="text-xl font-semibold text-white">Building Trust Through Action</h3>
          <p class="text-gray-300">We believe actions speak louder than words. Here are concrete steps we're taking to build and maintain your trust:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-800 p-4 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-2">Third-Party Audits</h4>
              <p class="text-gray-300">We've partnered with reputable security firms to conduct regular audits of our smart contracts and platform infrastructure.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-2">Transparent Treasury Management</h4>
              <p class="text-gray-300">Our treasury wallet addresses are public, and we provide monthly reports on fund allocation and usage.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-2">Gradual Token Unlocks</h4>
              <p class="text-gray-300">Team and advisor tokens are subject to a multi-year vesting schedule, aligning our interests with the community's long-term success.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
              <h4 class="text-lg font-semibold text-white mb-2">Community-First Development</h4>
              <p class="text-gray-300">We regularly host AMAs, developer calls, and community feedback sessions to ensure we're building what truly matters to you.</p>
            </div>
          </div>
        </section>

        <section class="space-y-6">
          <h3 class="text-xl font-semibold text-white">Our Roadmap: Committed to Delivery</h3>
          <p class="text-gray-300">We believe in setting realistic goals and consistently delivering on our promises. Here's a glimpse of our upcoming milestones:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Q1 2025: Launch of Wheat-Sol social engagement platform beta</li>
            <li>Q2 2025: Integration of DeFi features including staking and yield farming</li>
            <li>Q3 2025: Introduction of governance mechanisms for community-driven decision making</li>
            <li>Q4 2025: Initiation of WheatChain testnet, our proprietary blockchain solution</li>
          </ul>
          <p class="text-gray-300">We're committed to regular updates on our progress towards these goals, including any challenges we face along the way.</p>
        </section>

        <section class="space-y-4">
          <h3 class="text-xl font-semibold text-white">Join the Wheat-Sol Community</h3>
          <p class="text-gray-300">We invite you to be part of our journey. Whether you're a developer, investor, or crypto enthusiast, there's a place for you in the Wheat-Sol ecosystem. Here's how you can get involved:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Join our Telegram group for real-time updates and community discussions</li>
            <li>Follow us on Twitter for the latest news and announcements</li>
            <li>Participate in our upcoming community calls and AMAs</li>
            <li>Review our codebase on GitHub and contribute to our open-source initiatives</li>
          </ul>
          <div class="flex space-x-4 mt-4">
            <a href="https://t.me/swhit_tg" target="_blank" rel="noopener noreferrer" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join Telegram
            </a>
            <a href="https://x.com/wheat_linea?t=uYAmigt6Zsaks7p0NeofPw&s=09" target="_blank" rel="noopener noreferrer" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Follow on Twitter
            </a>
          </div>
        </section>

        <section class="space-y-4">
          <h3 class="text-xl font-semibold text-white">Conclusion: Building a Trustworthy Future Together</h3>
          <p class="text-gray-300">At Wheat-Sol, we're not just building a platform; we're cultivating a community based on trust, transparency, and shared success. We know that earning your trust is an ongoing process, and we're committed to that journey every step of the way.</p>
          <p class="text-gray-300">Join us as we work towards a more equitable, transparent, and rewarding future in decentralized finance. Together, we can redefine what's possible in the world of crypto.</p>
          <p class="text-blue-400">#WheatSol #SWHIT #TrustInDeFi #CommunityDriven</p>
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

