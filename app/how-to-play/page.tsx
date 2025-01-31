import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowToPlay() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-[#0d3c26] mb-6">How to Play Fear Fighter</h1>
      <div className="bg-[#daf2ce] rounded-lg shadow-lg p-6 max-w-md">
        <ol className="list-decimal list-inside space-y-4 mb-8">
          <li>Choose a fear you want to conquer</li>
          <li>Start with the easiest level and progress through harder challenges</li>
          <li>Select options that will lower your anxiety in the long-term</li>
          <li>Avoid strategies that only provide short-term relief but maintain anxiety in the long-term</li>
          <li>Correct choices reduce your fear level, while incorrect ones increase it</li>
          <li>You have 3 attempts per level - use them wisely</li>
          <li>Complete all levels to conquer your fear!</li>
        </ol>
        <p className="mb-4 text-[#0d3c26] font-semibold">
          Remember: The goal is to develop healthy coping strategies that will help you overcome your fears in the long
          run!
        </p>
        <Link href="/choose-fear">
          <Button className="w-full bg-[#0d3c26] hover:bg-[#0d3c26]/90">Start Your Journey</Button>
        </Link>
      </div>
    </div>
  )
}

