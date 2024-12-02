'use client'

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Github, Twitter, Send } from 'lucide-react'
import Link from "next/link"

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-32">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Buy SWHIT Token
        </h1>
        <div className="max-w-2xl text-center">
          <p className="text-xl text-gray-400 mb-6">
            The pre-sale for SWHIT tokens has not commenced yet.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            We are currently waiting for Linea to officially add our token to their list. The pre-sale will commence shortly after this process is complete. Thank you for your patience and interest in Wheat-Sol.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            For the latest updates and more information, please check our social media channels:
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            href="https://github.com/wheat-eco"
            className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            target="_blank"
          >
            <Github className="w-6 h-6 text-white" />
          </Link>
          <Link
            href="https://x.com/wheat_linea?t=VzMVVaKnp45pv4a_TsC5TQ&s=09"
            className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            target="_blank"
          >
            <Twitter className="w-6 h-6 text-white" />
          </Link>
          <Link
            href="https://t.me/swhit_tg"
            className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            target="_blank"
          >
            <Send className="w-6 h-6 text-white" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

