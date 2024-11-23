import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, RefreshCw, Network } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 mb-4 text-white/90" />,
      title: "Secure Infrastructure",
      description: "Built on Linea with advanced security protocols and audited smart contracts."
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-white/90" />,
      title: "High Performance",
      description: "Lightning-fast transactions with minimal fees and maximum efficiency."
    },
    {
      icon: <RefreshCw className="w-10 h-10 mb-4 text-white/90" />,
      title: "Sustainable Design",
      description: "Eco-friendly blockchain solutions optimized for long-term scalability."
    },
    {
      icon: <Network className="w-10 h-10 mb-4 text-white/90" />,
      title: "Cross-Chain Integration",
      description: "Seamless interoperability with major blockchain networks and DeFi protocols."
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          Why Choose WheatSol
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

