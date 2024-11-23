export function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Token Launch",
      items: [
        "Deploy $SWHIT on Linea Testnet",
        "Set up smart contracts",
        "Build foundational community across social platforms"
      ]
    },
    {
      phase: "Phase 2",
      title: "Presale and Airdrop",
      items: [
        "Launch presale with clear structure",
        "Maximize participation",
        "Distribute airdrops to early adopters and contributors"
      ]
    },
    {
      phase: "Phase 3",
      title: "Mainnet Deployment",
      items: [
        "Transition $SWHIT to Linea Mainnet",
        "Lock liquidity",
        "Launch DEX listings",
        "Initial marketing campaigns"
      ]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Expansion",
      items: [
        "Introduce integrations with other blockchains (e.g., Aptos)",
        "Develop real-world use cases for $SWHIT",
        "Expand partnerships and collaborations"
      ]
    }
  ]

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          Roadmap
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <div key={index} className="glass-card p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                <span className="text-sm font-bold">{item.phase}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-center">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="text-white/70 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2" />
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

