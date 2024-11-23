import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card bg-opacity-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/wheatsol.jpg"
              alt="WheatSol Logo"
              width={40}
              height={40}
              className="wheat-icon"
            />
            <span className="text-xl font-bold glow-text">WHEAT-SOL</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm hover:text-white/80 transition-colors">
              About
            </Link>
            <Link href="#features" className="text-sm hover:text-white/80 transition-colors">
              Features
            </Link>
            <Link href="#roadmap" className="text-sm hover:text-white/80 transition-colors">
              Roadmap
            </Link>
            <Link href="#ecosystem" className="text-sm hover:text-white/80 transition-colors">
              Ecosystem
            </Link>
          </div>

          <Button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
            Launch App
          </Button>
        </div>
      </div>
    </nav>
  )
}

