import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  )
}

