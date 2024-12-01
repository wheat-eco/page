export function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation",
      items: [
        "Complete core smart contract development",
        "Launch website and social media channels",
        "Conduct initial security audits",
        "Develop and test basic social features"
      ]
    },
    {
      phase: "Phase 2",
      title: "Token Launch",
      items: [
        "Token presale event",
        "Public token launch",
        "Initial exchange listings",
        "Implement basic reward mechanisms"
      ]
    },
    {
      phase: "Phase 3",
      title: "Platform Beta",
      items: [
        "Launch beta version of Wheat-Sol platform",
        "Introduce content creation and sharing features",
        "Implement user profiles and following system",
        "Begin community building initiatives"
      ]
    },
    {
      phase: "Phase 4",
      title: "DeFi Integration",
      items: [
        "Launch decentralized exchange (DEX)",
        "Implement staking and yield farming features",
        "Introduce lending and borrowing protocols",
        "Develop and launch mobile applications"
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

