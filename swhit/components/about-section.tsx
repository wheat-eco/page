import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          About Wheat-Sol (SWHIT)
        </h2>
        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Wheat-Sol (SWHIT) is an innovative ERC-20 token designed to revolutionize social engagement and decentralized finance (DeFi) on the Linea blockchain. As the native cryptocurrency of the WheatChain ecosystem, SWHIT serves as the backbone for a user-centric platform that directly rewards participation and contribution.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              With a total supply of 500,000,000 SWHIT, the token powers a comprehensive reward system, governance mechanisms, and various DeFi features. Users can earn SWHIT through content creation, engagement, community challenges, and by providing liquidity to DeFi pools.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              SWHIT token holders can participate in platform governance, access premium features, use the token for tipping creators, stake for additional rewards, and leverage it within the ecosystem's DeFi protocols. As WheatChain evolves, SWHIT will play a crucial role in bridging social interaction with financial empowerment in the Web3 space.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

