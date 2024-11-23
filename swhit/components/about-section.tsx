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
              Welcome to WheatChain, where innovation meets decentralization. WheatChain is the cornerstone of a new financial ecosystem powered by our native token, $SWHIT. Designed for long-term sustainability and growth, $SWHIT bridges blockchain technology with real-world applications. Our mission is to empower communities through transparent, equitable tokenomics and a robust roadmap focused on delivering tangible value.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

