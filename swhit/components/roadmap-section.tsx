export function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "Q4 2024",
      items: [
        "Launch social distribution web app",
        "Complete core smart contract development",
        "Initiate community building efforts",
        "Conduct initial security audits"
      ]
    },
    {
      phase: "Phase 2",
      title: "Growth",
      timeline: "Q1-Q2 2025",
      items: [
        "List SWHIT on decentralized exchanges",
        "Implement basic DeFi features (staking, yield farming)",
        "Release mobile apps for iOS and Android",
        "Expand community engagement initiatives"
      ]
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      timeline: "Q3-Q4 2025",
      items: [
        "Launch advanced DeFi protocols",
        "Establish strategic partnerships",
        "Begin development of WheatChain",
        "Implement cross-chain interoperability features"
      ]
    },
    {
      phase: "Phase 4",
      title: "Innovation",
      timeline: "2026",
      items: [
        "Beta release of WheatChain testnet",
        "Implement cross-chain interoperability features",
        "Explore institutional adoption strategies",
        "Enhance security measures for long-term value storage"
      ]
    },
    {
      phase: "Phase 5",
      title: "Maturity",
      timeline: "2027-2028",
      items: [
        "Launch WheatChain mainnet",
        "Migrate SWHIT to native WheatChain token",
        "Pursue integration with traditional financial systems",
        "Implement advanced features (e.g., quantum-resistant cryptography)"
      ]
    },
    {
      phase: "Phase 6",
      title: "Global Adoption",
      timeline: "2029 and beyond",
      items: [
        "Establish SWHIT as a recognized global store of value",
        "Continuous innovation in blockchain technology",
        "Potential to surpass Bitcoin in market cap and utility",
        "Foster widespread adoption in developing economies"
      ]
    }
  ]

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          Roadmap
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item, index) => (
            <div key={index} className="glass-card p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                <span className="text-sm font-bold">{item.phase}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 mt-4 text-center">{item.title}</h3>
              <p className="text-center text-white/70 text-sm mb-4">{item.timeline}</p>
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

