'use client'

import { useState } from 'react'
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Github, Twitter, Send, ArrowRight, Wallet, Info } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function BuyPage() {
  const [selectedNetwork, setSelectedNetwork] = useState('linea')
  const [amount, setAmount] = useState('')
  const [swhitAmount, setSwhitAmount] = useState('')

  const networks = {
    linea: {
      name: 'Linea',
      price: 3469.66,
      currency: 'ETH',
      swhitPrice: 0.0005 / 3469.66, // Price in ETH
      contractAddress: '0x741f2fc08125a86d452d54ef77e24a9ca6da4cb2',
      explorer: 'https://lineascan.build/address/0x741f2fc08125a86d452d54ef77e24a9ca6da4cb2'
    },
    sui: {
      name: 'SUI',
      price: 4.72,
      currency: 'SUI',
      swhitPrice: 0.0005 / 4.72, // Price in SUI
      contractAddress: '0xe17180ee2271edd6f60d39e04d4fd7983d2e03d1cd908e1eee4eb812bab3929d',
      explorer: 'https://suiscan.xyz/mainnet/coin/0xe17180ee2271edd6f60d39e04d4fd7983d2e03d1cd908e1eee4eb812bab3929d::wheat_sol::WHEAT_SOL/txs'
    }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAmount(value)
    const network = networks[selectedNetwork as keyof typeof networks]
    setSwhitAmount((parseFloat(value) / network.swhitPrice).toString())
  }

  const handleSwhitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSwhitAmount(value)
    const network = networks[selectedNetwork as keyof typeof networks]
    setAmount((parseFloat(value) * network.swhitPrice).toString())
  }

  const calculateUSDValue = (amount: string) => {
    const network = networks[selectedNetwork as keyof typeof networks]
    return (parseFloat(amount || '0') * network.price).toFixed(2)
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
                    <span>Linea ETH Price:</span>
                    <span className="font-bold">${networks.linea.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SUI Price:</span>
                    <span className="font-bold">${networks.sui.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SWHIT Price:</span>
                    <span className="font-bold">$0.0005</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Supply:</span>
                    <span className="font-bold">50,000,000,000 SWHIT</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Network Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Linea Transaction Speed:</span>
                    <span className="font-bold">{"<"}3s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SUI Transaction Speed:</span>
                    <span className="font-bold">Instant</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Gas Fees:</span>
                    <span className="font-bold">Ultra Low</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <Tabs defaultValue="linea" onValueChange={(value) => setSelectedNetwork(value)}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="linea">Linea Network</TabsTrigger>
                  <TabsTrigger value="sui">SUI Network</TabsTrigger>
                </TabsList>

                <TabsContent value="linea" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Buy on Linea</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Purchase SWHIT using Linea ETH</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="Enter ETH amount"
                    />
                    <div className="flex justify-between text-sm">
                      <span>≈ ${calculateUSDValue(amount)} USD</span>
                      <span>Balance: 0 ETH</span>
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
                      <span>1 SWHIT = {networks.linea.swhitPrice.toFixed(10)} ETH</span>
                      <Link href={networks.linea.explorer} target="_blank" className="text-primary hover:underline">
                        View Contract
                      </Link>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sui" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Buy on SUI</h3>
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
                      <span>1 SWHIT = {networks.sui.swhitPrice.toFixed(10)} SUI</span>
                      <Link href={networks.sui.explorer} target="_blank" className="text-primary hover:underline">
                        View Contract
                      </Link>
                    </div>
                  </div>
                </TabsContent>

                <div className="mt-6 space-y-4">
                  <Button className="w-full" size="lg">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                  <p className="text-sm text-center text-white/60">
                    Make sure you have sufficient {networks[selectedNetwork as keyof typeof networks].currency} balance and gas fees
                  </p>
                </div>
              </Tabs>
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
                href="https://x.com/wheat_linea?t=VzMVVaKnp45pv4a_TsC5TQ&s=09"
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

                        
