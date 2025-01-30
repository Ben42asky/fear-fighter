import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowToPlay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-6">How to Play Fear Fighter</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <ol className="list-decimal list-inside space-y-4 mb-8">
          <li>Choose a fear you want to conquer</li>
          <li>Start with the easiest level and progress through harder challenges</li>
          <li>Select options that will lower your anxiety in the long-term</li>
          <li>Avoid strategies that only provide short-term relief but maintain anxiety in the long-term</li>
          <li>Correct choices reduce your fear level, while incorrect ones increase it</li>
          <li>You have 3 attempts per level - use them wisely</li>
          <li>Complete all levels to conquer your fear!</li>
        </ol>
        <p className="mb-4 text-green-700 font-semibold">
          Remember: The goal is to develop healthy coping strategies that will help you overcome your fears in the long
          run!
        </p>
        <Link href="/choose-fear">
          <Button className="w-full bg-green-600 hover:bg-green-700">Start Your Journey</Button>
        </Link>
      </div>
    </div>
  )
}

