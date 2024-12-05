'use client'

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Github, Twitter, Send, Globe, MessageCircle, Book, ExternalLink } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-16 md:py-24">
        <div className="mb-8">
          <Image
            src="/wheat-logo.png"
            alt="Wheat-Sol Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Wheat-Sol ($SWHIT)
        </h1>
        <p className="text-lg text-gray-400 text-center mb-8 max-w-md">
          Revolutionizing social engagement and DeFi on Linea blockchain
        </p>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Link
            href="https://wheatchain.xyz"
            className="flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors w-full group"
            target="_blank"
          >
            <span className="text-white font-medium">Official Website</span>
            <Globe className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="https://t.me/swhit_tg"
            className="flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors w-full group"
            target="_blank"
          >
            <span className="text-white font-medium">Telegram Channel</span>
            <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="https://t.me/swhit_tgchat"
            className="flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors w-full group"
            target="_blank"
          >
            <span className="text-white font-medium">Telegram Chat</span>
            <MessageCircle className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="https://x.com/wheat_linea"
            className="flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors w-full group"
            target="_blank"
          >
            <span className="text-white font-medium">Twitter/X</span>
            <Twitter className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="https://github.com/wheat-eco"
            className="flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors w-full group"
            target="_blank"
          >
            <span className="text-white font-medium">GitHub</span>
            <Github className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/whitepaper"
            className="flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors w-full group"
          >
            <span className="text-white font-medium">Whitepaper</span>
            <Book className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="https://t.me/wheatsol_bot"
            className="flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors w-full group"
            target="_blank"
          >
            <span className="text-white font-medium">Telegram Mini App</span>
            <ExternalLink className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}


