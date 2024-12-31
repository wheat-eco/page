import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          About WheatChain (SWHIT)
        </h2>
        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              WheatChain (SWHIT) is a revolutionary blockchain-based platform designed to redefine the concept of long-term value storage in the digital age. Inspired by the timeless practice of storing wheat for future generations, SWHIT aims to create a digital asset that starts with a modest valuation but has the potential to surpass even Bitcoin in long-term value and utility.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              With a total supply of 100,000,000,000 SWHIT, our token serves as the backbone for a comprehensive ecosystem that includes a unique social distribution model, DeFi features, and community-driven governance. SWHIT is designed to appreciate significantly in value over time, combining deflationary tokenomics with yield generation mechanisms.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              As we develop towards our future WheatChain, SWHIT token holders will play a crucial role in shaping the platform&apos;s future through DAO governance, while benefiting from features such as staking rewards, DeFi integrations, and exclusive access to ecosystem services. Join us in our mission to create a new paradigm for intergenerational wealth preservation and growth in the Web3 space.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

