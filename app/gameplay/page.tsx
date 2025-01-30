"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import confetti from "canvas-confetti"
import { getFearData } from "@/lib/fearData"

export default function Gameplay() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <GameplayContent />
    </Suspense>
  )
}

function GameplayContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [currentLevel, setCurrentLevel] = useState(0)
  const [fearMeter, setFearMeter] = useState(100)
  const [feedback, setFeedback] = useState("")
  const [fear, setFear] = useState<any>(null)
  const [showCongrats, setShowCongrats] = useState(false)
  const [showLevelComplete, setShowLevelComplete] = useState(false)
  const [showFailure, setShowFailure] = useState(false)
  const [points, setPoints] = useState(0)
  const [clickedOptions, setClickedOptions] = useState<Set<number>>(new Set())
  const [remainingAttempts, setRemainingAttempts] = useState(3)

  const fearId = searchParams.get("fearId")

  useEffect(() => {
    const loadFearData = async () => {
      if (fearId) {
        const fearData = await getFearData(fearId)
        if (fearData) {
          setFear(fearData)
        } else {
          router.push("/choose-fear")
        }
      } else {
        router.push("/choose-fear")
      }
    }
    loadFearData()
  }, [fearId, router])

  const handleOptionClick = (index: number, correct: boolean) => {
    if (clickedOptions.has(index)) return

    setClickedOptions((prev) => new Set(prev).add(index))

    if (correct) {
      const newFearMeter = Math.max(fearMeter - 25, 0)
      setFearMeter(newFearMeter)
      setFeedback("Great job! You're making progress.")
      setPoints((prevPoints) => prevPoints + 5)

      if (newFearMeter <= 0) {
        setShowLevelComplete(true)
      }
    } else {
      const newFearMeter = Math.min(fearMeter + 25, 100)
      setFearMeter(newFearMeter)
      setRemainingAttempts((prev) => prev - 1)
      setFeedback("That's okay, try again!")

      if (remainingAttempts <= 1) {
        setShowFailure(true)
      }
    }
  }

  const handleRetry = () => {
    setShowFailure(false)
    setFearMeter(100)
    setRemainingAttempts(3)
    setClickedOptions(new Set())
    setFeedback("")
  }

  const handleNextLevel = () => {
    setShowLevelComplete(false)
    if (currentLevel < fear.levels.length - 1) {
      setCurrentLevel((prevLevel) => prevLevel + 1)
      setFearMeter(100)
      setRemainingAttempts(3)
      setFeedback("")
      setClickedOptions(new Set())
    } else {
      confetti()
      setShowCongrats(true)
    }
  }

  const handleNextFear = () => {
    setShowCongrats(false)
    router.push("/choose-fear")
  }

  if (!fear) {
    return <div>Loading...</div>
  }

  const currentLevelData = fear.levels[currentLevel]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-green-600 mb-6">{fear.name} Challenge</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          Level {currentLevel + 1}: {currentLevelData.difficulty}
        </h2>
        <Progress value={fearMeter} className="mb-4" />
        <div className="flex justify-between mb-4">
          <p className="text-sm text-gray-600">Fear Level: {Math.round(fearMeter)}%</p>
          <p className="text-sm text-gray-600">Attempts Left: {remainingAttempts}</p>
        </div>
        <div
          className="text-6xl mb-4 flex justify-center transition-all duration-500 ease-in-out"
          style={{ fontSize: `${6 * (fearMeter / 100)}rem` }}
        >
          {currentLevelData.content}
        </div>
        <p className="mb-4 text-lg">{currentLevelData.description}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {currentLevelData.options.map((option: any, index: number) => (
            <Button
              key={index}
              onClick={() => handleOptionClick(index, option.correct)}
              disabled={clickedOptions.has(index)}
              className="w-full h-auto min-h-[60px] whitespace-normal text-sm p-3"
            >
              {option.text}
            </Button>
          ))}
        </div>
        {feedback && <p className="text-green-600 mb-4">{feedback}</p>}
      </div>

      <Dialog open={showFailure} onOpenChange={setShowFailure}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-500">Challenge Failed</DialogTitle>
            <DialogDescription>
              Don't give up! You can overcome your fears with practice and patience.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleRetry}>Try Again</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={showLevelComplete} onOpenChange={setShowLevelComplete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Level Complete!</DialogTitle>
            <DialogDescription>
              You've completed level {currentLevel + 1}! Great job facing your fear.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleNextLevel}>
            {currentLevel < fear.levels.length - 1 ? "Next Level" : "Complete Challenge"}
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={showCongrats} onOpenChange={setShowCongrats}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Congratulations!</DialogTitle>
            <DialogDescription>
              You've completed the {fear.name} challenge! You've earned {points} points.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleNextFear}>Face Another Fear</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

