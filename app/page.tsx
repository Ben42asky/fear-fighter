import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Fear Fighter</h1>
      <p className="text-xl text-green-500 mb-12">Face Your Fears, One Step at a Time!</p>
      <div className="space-y-6">
        <Link href="/how-to-play" className="block">
          <Button className="w-64 h-14 text-lg bg-green-600 hover:bg-green-700">How to Play</Button>
        </Link>
        <Link href="/choose-fear" className="block">
          <Button className="w-64 h-14 text-lg bg-green-600 hover:bg-green-700">Start Game</Button>
        </Link>
      </div>
    </div>
  )
}

