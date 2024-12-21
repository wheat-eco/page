import { Card, CardContent } from "@/components/ui/card"

export function TokenomicsSection() {
  const tokenomics = [
    { 
      label: "Social Distribution Pool", 
      value: "40%", 
      description: "Released through social tasks over 5 years" 
    },
    { 
      label: "Long-Term Storage Vault", 
      value: "30%", 
      description: "10-year linear release for stability" 
    },
    { 
      label: "Development Fund", 
      value: "15%", 
      description: "5-year vesting, released quarterly" 
    },
    { 
      label: "Community Treasury", 
      value: "10%", 
      description: "Controlled by DAO governance" 
    },
    { 
      label: "Ecosystem Growth", 
      value: "5%", 
      description: "Used for partnerships and marketing" 
    }
  ]

  return (
    <section id="tokenomics" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          Token Economics
        </h2>
        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <p className="text-white/80 text-lg mb-6">
              SWHIT has a total supply of 50,000,000,000 tokens, with an initial circulating supply of 500,000,000 (1%). Our tokenomics are designed for long-term value appreciation and community-driven growth:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tokenomics.map((item, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                  <p className="text-2xl font-bold text-white/90">{item.value}</p>
                  {item.description && (
                    <p className="text-sm text-white/70 mt-1">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              <p className="text-white/80 text-lg">
                SWHIT implements a 1% burn mechanism on every transaction and offers up to 10% APY for long-term holders through staking rewards.
              </p>
              <div className="space-y-2">
                <p className="text-white/80 text-lg">
                  Contract Addresses:
                </p>
                <p className="text-white/80 text-lg">
                  Linea: <a href="https://lineascan.build/address/0x741f2fc08125a86d452d54ef77e24a9ca6da4cb2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Lineascan</a>
                </p>
                <p className="text-white/80 text-lg">
                  SUI: <a href="https://suiscan.xyz/mainnet/coin/0xe17180ee2271edd6f60d39e04d4fd7983d2e03d1cd908e1eee4eb812bab3929d::wheat_sol::WHEAT_SOL/txs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Suiscan</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

