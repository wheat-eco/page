import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { Whitepaper } from "@/components/whitepaper"

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TokenomicsSection />
        <RoadmapSection />
        <Whitepaper />
      </main>
      <Footer />
    </div>
  )
}

