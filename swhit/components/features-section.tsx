import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, RefreshCw, Network, Users, Lock, Sprout, Clock, Coins } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: <Sprout className="w-10 h-10 mb-4 text-white/90" />,
      title: "Digital Wheat Storage",
      description: "Inspired by ancient practices, SWHIT reimagines wheat storage for the digital age, aiming for exponential long-term growth."
    },
    {
      icon: <Users className="w-10 h-10 mb-4 text-white/90" />,
      title: "Social Distribution Model",
      description: "40% of tokens distributed through a unique social engagement model, fostering community growth from day one."
    },
    {
      icon: <RefreshCw className="w-10 h-10 mb-4 text-white/90" />,
      title: "Deflationary Mechanics",
      description: "1% burn on every transaction and up to 10% APY for staking, designed for long-term value appreciation."
    },
    {
      icon: <Lock className="w-10 h-10 mb-4 text-white/90" />,
      title: "Long-Term Value Storage",
      description: "30% of tokens locked in a 10-year linear release vault, ensuring stability and long-term growth."
    },
    {
      icon: <Network className="w-10 h-10 mb-4 text-white/90" />,
      title: "Multi-Chain Presence",
      description: "Available on Linea and SUI, with plans to develop the standalone WheatChain for optimized value storage."
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-white/90" />,
      title: "DeFi Integration",
      description: "Yield farming, lending, and borrowing protocols to maximize value growth within the ecosystem."
    },
    {
      icon: <Shield className="w-10 h-10 mb-4 text-white/90" />,
      title: "Community Governance",
      description: "DAO structure empowers token holders to shape the future of the WheatChain ecosystem."
    },
    {
      icon: <Clock className="w-10 h-10 mb-4 text-white/90" />,
      title: "Intergenerational Wealth",
      description: "Designed for multi-generational value storage and transfer, with smart contract-based inheritance mechanisms."
    },
    {
      icon: <Coins className="w-10 h-10 mb-4 text-white/90" />,
      title: "Ambitious Vision",
      description: "Starting from a modest valuation with the long-term goal of surpassing Bitcoin in value and utility."
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          Why Choose WheatChain 
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-0">
              <CardHeader>
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle className="text-center text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

