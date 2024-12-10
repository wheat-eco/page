'use client'

import { useState } from 'react'
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Wallet, Timer, ArrowRightLeft, Info, ChevronDown, EclipseIcon as Ethereum } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function BuyPage() {
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum')
  const [amount, setAmount] = useState('')
  const [progress] = useState(15) // Example progress percentage
  
  // Example ETH price - In production this would come from an API
  const ethPrice = 2300 // USD
  const tokenPriceUSDT = 0.0025
  const tokenPriceETH = tokenPriceUSDT / ethPrice

  const calculateTokens = (amount: string) => {
    if (!amount) return '0'
    return (parseFloat(amount) / tokenPriceETH).toFixed(2)
  }

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-8">
            <img 
              src="/placeholder.svg" 
              alt="WHEAT-SOL" 
              className="w-16 h-16 rounded-full"
            />
            <h1 className="text-5xl font-bold text-white">Buy $SWHIT</h1>
          </div>
          
          {/* Timer Section */}
          <Card className="w-full max-w-3xl bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Presale Launches In</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-center">
                {['20', '13', '37', '11'].map((value, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg">
                    <span className="text-3xl font-bold text-white block">{value}</span>
                    <span className="text-gray-400 text-sm">
                      {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Purchase Card */}
          <Card className="w-full max-w-3xl bg-gray-900/50 border-gray-800">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <CardTitle className="text-xl text-white">Presale Information</CardTitle>
                <Button variant="outline" className="gap-2">
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </Button>
              </div>
              <CardDescription>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Total Supply:</span>
                    <span>50,000,000 SWHIT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span>0.0025 USDT (≈ {tokenPriceETH.toFixed(8)} ETH)</span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>0 SWHIT</span>
                  <span>50,000,000 SWHIT</span>
                </div>
              </div>

              {/* Network Selection */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Select Network</label>
                <Select 
                  value={selectedNetwork}
                  onValueChange={setSelectedNetwork}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum Network</SelectItem>
                    <SelectItem value="linea">Linea Network</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Amount Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white"
                    placeholder="0.0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Ethereum className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">ETH</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>You will receive:</span>
                  <span>{calculateTokens(amount)} SWHIT</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Buy SWHIT Tokens
              </Button>

              <div className="text-sm text-gray-400 flex items-start gap-2">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>
                  You can buy using Ethereum or Linea ETH. Connect your wallet to proceed with the purchase.
                  Tokens will be automatically sent to your wallet after the purchase.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

