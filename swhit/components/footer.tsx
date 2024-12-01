import { GithubIcon, Twitter, Send } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="gri
d grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/wheatsol.jpg"
                alt="WheatSol Logo"
                width={32}
                height={32}
                className="wheat-icon"
              />
              <span className="text-lg font-bold">WHEAT-SOL</span>
            </Link>
            <p className="text-sm text-white/70">
              Building the future of decentralized finance on Linea.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-sm text-white/70 hover:text-white">Features</Link></li>
              <li><Link href="#roadmap" className="text-sm text-white/70 hover:text-white">Roadmap</Link></li>
              <li><Link href="https://github.com/wheat-eco/wheat-eco" className="text-sm text-white/70 hover:text-white">Whitepapaer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm text-white/70 hover:text-white">About</Link></li>
              <li><Link href="#" className="text-sm text-white/70 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-sm text-white/70 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/wheat-eco/wheat-eco" target="_blank" rel="noopener noreferrer" 
                 className="p-2 glass-card hover:bg-white/10 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com/wheat_linea?t=FybI6aWhBAc8pnX0tFn4NA&s=09" target="_blank" rel="noopener noreferrer" 
                 className="p-2 glass-card hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://t.me/swhit_tg" target="_blank" rel="noopener noreferrer" 
                 className="p-2 glass-card hover:bg-white/10 transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} WheatSol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

