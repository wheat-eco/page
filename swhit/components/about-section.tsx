import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          About WheatChain
        </h2>
        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <p className="text-white/80 text-lg leading-relaxed">
              WheatChain is redefining the future of Decentralized Finance (DeFi) with its innovative ecosystem powered by Wheat-sol ($SWHIT). Our mission is to create a sustainable financial platform where users can secure their wealth, participate in transparent systems, and build towards a future of stability and growth. By blending blockchain technology with real-world financial use cases, WheatChain empowers individuals globally to take control of their financial journeys. Whether you're staking, transacting, or leveraging GeoInstant solutions for fast and borderless financial operations, WheatChain is your gateway to a decentralized, secure, and equitable financial future.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
