'use client'

import { useState, useEffect } from 'react'
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Github, Twitter, Send, ArrowRight, Wallet, Info } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function BuyPage() {
  const [suiPrice, setSuiPrice] = useState(0)
  const [swhitPrice, setSwhitPrice] = useState(0.01) // Target price
  const [priceChange24h, setPriceChange24h] = useState(0)
  const [amount, setAmount] = useState('')
  const [swhitAmount, setSwhitAmount] = useState('')
  const [lastUpdate, setLastUpdate] = useState('')

  useEffect(() => {
    const fetchSuiPrice = async () => {
      try {
        const response = await fetch('/api/sui-price')
        const data = await response.json()
        setSuiPrice(data.price)
        setLastUpdate(new Date(data.lastUpdate).toLocaleString())
        // Simulate SWHIT price change based on Sui price
        const newSwhitPrice = 0.01 * (1 + (Math.random() - 0.5) * 0.1) // +/- 5% variation
        setSwhitPrice(newSwhitPrice)
        setPriceChange24h((Math.random() - 0.5) * 10) // Simulated 24h change, -5% to +5%
      } catch (error) {
        console.error('Failed to fetch Sui price:', error)
      }
    }

    fetchSuiPrice()
    const interval = setInterval(fetchSuiPrice, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const handleAmountChange = (e: React.ChangeEvent < HTMLInputElement > ) => {
    const value = e.target.value
    setAmount(value)
    setSwhitAmount((parseFloat(value) / swhitPrice * suiPrice).toString())
  }

  const handleSwhitChange = (e: React.ChangeEvent < HTMLInputElement > ) => {
    const value = e.target.value
    setSwhitAmount(value)
    setAmount((parseFloat(value) * swhitPrice / suiPrice).toString())
  }

  const calculateUSDValue = (amount: string) => {
    return (parseFloat(amount || '0') * suiPrice).toFixed(2)
  }

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8 glow-text">
            Buy SWHIT Token
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Network Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>SUI Price:</span>
                    <span className="font-bold">${suiPrice.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SWHIT Price:</span>
                    <span className="font-bold">${swhitPrice.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>24h Change:</span>
                    <span className={`font-bold ${priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {priceChange24h.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Supply:</span>
                    <span className="font-bold">100,000,000,000 SWHIT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Last Updated:</span>
                    <span className="font-bold">{lastUpdate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>SUI Network Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Transaction Speed:</span>
                    <span className="font-bold">Instant</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Gas Fees:</span>
                    <span className="font-bold">Ultra Low</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Scalability:</span>
                    <span className="font-bold">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Buy SWHIT on SUI Network</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Purchase SWHIT using SUI tokens</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter SUI amount"
                  />
                  <div className="flex justify-between text-sm">
                    <span>≈ ${calculateUSDValue(amount)} USD</span>
                    <span>Balance: 0 SUI</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 my-2" />
                  </div>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={swhitAmount}
                    onChange={handleSwhitChange}
                    placeholder="SWHIT to receive"
                  />
                  <div className="flex justify-between text-sm">
                    <span>1 SWHIT = {(swhitPrice / suiPrice).toFixed(10)} SUI</span>
                    <Link href="https://suiscan.xyz/mainnet/coin/0x4eaaef2c74b1793e1c63e5f3843087921aebc815a36e9993958e199885c327b2::swhit::SWHIT/txs" target="_blank" className="text-primary hover:underline">
                      View Contract
                    </Link>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Button className="w-full" size="lg">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                  <p className="text-sm text-center text-white/60">
                    Make sure you have sufficient SUI balance and gas fees
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
            <div className="flex justify-center gap-6">
              <Link
                href="https://github.com/wheat-eco"
                className="glass-card p-3 rounded-lg hover:bg-white/10 transition-colors"
                target="_blank"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/wheatchain_xyz?t=C42TbeLgEHcIxrcMt3K_tQ&s=09"
                className="glass-card p-3 rounded-lg hover:bg-white/10 transition-colors"
                target="_blank"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://t.me/swhit_tg"
                className="glass-card p-3 rounded-lg hover:bg-white/10 transition-colors"
                target="_blank"
              >
                <Send className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}