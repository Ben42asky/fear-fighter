import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Victory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Congratulations!</h1>
      <p className="text-xl text-blue-500 mb-8">You've conquered your fear!</p>
      <Link href="/choose-fear">
        <Button>Face Another Fear</Button>
      </Link>
    </div>
  )
}

