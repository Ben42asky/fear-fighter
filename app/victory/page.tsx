import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Victory() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-[#0d3c26] mb-6">Congratulations!</h1>
      <p className="text-xl text-[#0d3c26] mb-8">You've conquered your fear!</p>
      <Link href="/choose-fear">
        <Button className="bg-[#0d3c26] hover:bg-[#0d3c26]/90">Face Another Fear</Button>
      </Link>
    </div>
  )
}

