'use client';

import dynamic from 'next/dynamic';
import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

const DynamicWhitepaper = dynamic(() => import('@/components/whitepaper').then(mod => mod.Whitepaper), {
  ssr: false,
  loading: () => <p>Loading whitepaper...</p>
})


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
        <DynamicWhitepaper />
      </main>
      <Footer />
    </div>
  )
}
