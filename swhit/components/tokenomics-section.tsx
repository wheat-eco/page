import { Card, CardContent } from "@/components/ui/card"

export function TokenomicsSection() {
  const tokenomics = [
    {
      label: "Community Rewards and Ecosystem Growth",
      value: "40%",
      description: "Linear vesting over 6 years, released monthly"
    },
    {
      label: "Development Fund",
      value: "25%",
      description: "Linear vesting over 5 years, released quarterly"
    },
    {
      label: "Team and Advisors",
      value: "15%",
      description: "6-month cliff, then linear vesting over 4 years, released semi-annually"
    },
    {
      label: "Treasury Reserve",
      value: "10%",
      description: "Linear vesting over 10 years, released annually"
    },
    {
      label: "Initial Circulation (DEX Liquidity + Airdrop)",
      value: "5%",
      description: "Immediately available at launch"
    },
    {
      label: "Strategic Partnerships",
      value: "5%",
      description: "Linear vesting over 3 years, released quarterly"
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
              SWHIT has a total supply of 100,000,000,000 tokens distributed across multiple chains (Sui, Aptos, and future TON network). Our tokenomics are designed for long-term value appreciation and multi-chain ecosystem growth:
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
                SWHIT is designed to facilitate seamless value transfer and community engagement across multiple high-performance blockchains.
              </p>
              <div className="space-y-2">
                <p className="text-white/80 text-lg">
                  Contract Addresses:
                </p>
                <p className="text-white/80 text-lg">
                  SUI: <a href="https://suiscan.xyz/mainnet/coin/0x4eaaef2c74b1793e1c63e5f3843087921aebc815a36e9993958e199885c327b2::swhit::SWHIT//txs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Suiscan</a>
                </p>
                <p className="text-white/80 text-lg">
                  Aptos: <span className="text-gray-400">Coming soon</span>
                </p>
                <p className="text-white/80 text-lg">
                  TON: <span className="text-gray-400">Coming soon</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}