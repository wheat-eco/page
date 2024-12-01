import { Card, CardContent } from "@/components/ui/card"

export function TokenomicsSection() {
  const tokenomics = [
    { label: "User Rewards Pool", value: "40%", description: "Released over time based on platform activity" },
    { label: "Team and Advisors", value: "15%", description: "1-year vesting with 6-months cliff" },
    { label: "Development Fund", value: "20%", description: "2-year vesting, released quarterly" },
    { label: "Community Treasury", value: "15%", description: "Controlled by DAO governance" },
    { label: "Presale", value: "10%", description: "2-month linear vesting after TGE" }
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
              Our tokenomics are designed to align with the long-term vision of WheatChain:
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
            <p className="text-white/80 text-lg mt-6">
              Liquidity will be locked, and contracts renounced for enhanced investor trust.
            </p>
            <p className="text-white/80 text-lg mt-4">
              Contract Renounced: <a href="https://lineascan.build/address/0x741f2fc08125a86d452d54ef77e24a9ca6da4cb2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Lineascan</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

