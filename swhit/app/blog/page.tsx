'use client'

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Github, Twitter, Send } from 'lucide-react'
import Link from "next/link"
import { BlogPostPreview } from "@/components/blog-post-preview"

const recentPosts = [
  {
    id: 1,
    title: "Wheat-Sol ($SWHIT): What We've Come to Do",
    excerpt: "We are Wheat-Sol, and we're here to redefine the crypto landscape. We're not just another token – we're a utility coin with a clear mission and a commitment to longevity.",
    date: "December 5, 2024",
    slug: "wheat-sol-what-weve-come-to-do"
  },
  // Add more blog posts here as they become available
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wheat-Sol Blog
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, announcements, and insights from the Wheat-Sol ecosystem
          </p>
        </header>

        {recentPosts.length > 0 ? (
          <div className="space-y-8">
            {recentPosts.map((post) => (
              <BlogPostPreview key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center space-y-8">
            <p className="text-xl text-gray-400">
              Coming Soon
            </p>
            <p className="text-lg text-gray-400">
              Check out our latest updates on social media
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="https://github.com/wheat-eco"
                className="bg-gray-900/50 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                target="_blank"
              >
                <Github className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://x.com/wheat_linea?t=a0OLjaHbLzIaMGNNaDuUMg&s=09"
                className="bg-gray-900/50 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                target="_blank"
              >
                <Twitter className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://t.me/swhit_tg"
                className="bg-gray-900/50 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                target="_blank"
              >
                <Send className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

