import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, RefreshCw, Network, Users, Lock } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 mb-4 text-white/90" />,
      title: "Decentralized and Transparent",
      description: "Built on Linea, $SWHIT ensures fast, low-cost transactions while maintaining transparency."
    },
    {
      icon: <Users className="w-10 h-10 mb-4 text-white/90" />,
      title: "Community-Centric Approach",
      description: "20% of our supply is reserved for airdrops and rewards, fostering an active and engaged community."
    },
    {
      icon: <RefreshCw className="w-10 h-10 mb-4 text-white/90" />,
      title: "Sustainable Growth",
      description: "With a fixed supply and structured allocation, $SWHIT is designed for long-term value creation."
    },
    {
      icon: <Lock className="w-10 h-10 mb-4 text-white/90" />,
      title: "Locked Liquidity",
      description: "A large percentage of liquidity is locked, ensuring stability and protecting investor interests."
    },
    {
      icon: <Network className="w-10 h-10 mb-4 text-white/90" />,
      title: "Multi-Chain Future",
      description: "Starting on Linea, we aim to expand $SWHIT's utility across other prominent blockchains like Aptos."
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-white/90" />,
      title: "High Performance",
      description: "Lightning-fast transactions with minimal fees and maximum efficiency."
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

