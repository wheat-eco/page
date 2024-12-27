import { Button } from "@/components/ui/button"
import { GithubIcon, Twitter, Send } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/wheatsol.jpg"
            alt="Wheat-Sol Logo"
            width={120}
            height={120}
            className="mx-auto mb-8 wheat-icon"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            WheatChain (SWHIT): Sowing the Seeds of Digital Prosperity
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the future of long-term value storage with Wheat-Sol. Inspired by ancient wheat storage practices, SWHIT aims to surpass Bitcoin through innovative tokenomics, social distribution, and the development of WheatChain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-white text-black hover:bg-white/90"
              onClick={() => window.open('https://t.me/wheatsol_bot/app', '_blank')}
            >
              Earn SWHIT Tokens
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20"
              asChild
            >
              <Link href="/whitepaper">
                Whitepaper
              </Link>
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/wheat-eco" target="_blank" rel="noopener noreferrer" 
               className="p-2 glass-card hover:bg-white/10 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://x.com/wheat_linea?t=uYAmigt6Zsaks7p0NeofPw&s=09" target="_blank" rel="noopener noreferrer" 
               className="p-2 glass-card hover:bg-white/10 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://t.me/swhit_tg" target="_blank" rel="noopener noreferrer" 
               className="p-2 glass-card hover:bg-white/10 transition-colors">
              <Send className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}

