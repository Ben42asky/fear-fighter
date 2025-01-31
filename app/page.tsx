import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-[#0d3c26] mb-4">Fear Fighter</h1>
      <p className="text-xl text-[#0d3c26] mb-12">Face Your Fears, One Step at a Time!</p>
      <div className="space-y-6">
        <Link href="/how-to-play" className="block">
          <Button className="w-64 h-14 text-lg bg-[#0d3c26] hover:bg-[#0d3c26]/90">How to Play</Button>
        </Link>
        <Link href="/choose-fear" className="block">
          <Button className="w-64 h-14 text-lg bg-[#0d3c26] hover:bg-[#0d3c26]/90">Start Game</Button>
        </Link>
      </div>
    </div>
  )
}

