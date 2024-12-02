import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function NavBar() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-between items-center p-4">
        <li>
          <Link href="/">
            <a className="text-white text-xl font-bold">My Website</a>
          </Link>
        </li>
        <li className="flex space-x-4">
          <Link href="/about">
            <a className="text-white hover:underline">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-white hover:underline">Contact</a>
          </Link>
          <Link href="/buy">
            <Button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
              BUY $SWHIT
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
