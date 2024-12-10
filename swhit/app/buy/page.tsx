'use client'

import { useState } from 'react'
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Github, Twitter, Send } from 'lucide-react'
import Link from "next/link"

export default function BuyPage() {
  const [ethAmount, setEthAmount] = useState('')
  const [swhitAmount, setSwhitAmount] = useState('')

  const handleEthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEthAmount(value)
    setSwhitAmount((parseFloat(value) / 0.0025).toString())
  }

  const handleSwhitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSwhitAmount(value)
    setEthAmount((parseFloat(value) * 0.0025).toString())
  }

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Buy SWHIT Token
        </h1>
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Presale Information</h2>
            <p className="text-gray-400">Total Supply: 50,000,000 SWHIT</p>
            <p className="text-gray-400">Price: 0.0025 ETH per SWHIT</p>
          </div>
          <div className="mb-6">
            <label htmlFor="eth-amount" className="block text-sm font-medium text-gray-400 mb-2">
              Enter ETH Amount
            </label>
            <input
              type="number"
              id="eth-amount"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={ethAmount}
              onChange={handleEthChange}
              placeholder="0.0"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="swhit-amount" className="block text-sm font-medium text-gray-400 mb-2">
              SWHIT to Receive
            </label>
            <input
              type="number"
              id="swhit-amount"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={swhitAmount}
              onChange={handleSwhitChange}
              placeholder="0.0"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Buy SWHIT Tokens
          </button>
          <p className="text-sm text-gray-400 mt-4">
            You can buy using Ethereum or Linea ETH. Connect your wallet to proceed with the purchase.
          </p>
        </div>
        <div className="max-w-2xl text-center mt-8">
          <p className="text-lg text-gray-400 mb-4">
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

