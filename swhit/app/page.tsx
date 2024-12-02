import { Whitepaper } from "@/components/whitepaper";
import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { FeaturesSection } from "@/components/features";
import { TokenomicsSection } from "@/components/tokenomics";
import { RoadmapSection } from "@/components/roadmap";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TokenomicsSection />
      <RoadmapSection />
      <Whitepaper />
    </main>
  );
}

