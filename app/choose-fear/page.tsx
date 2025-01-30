"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const fears = [
  { id: "spiders", name: "Spiders", emoji: "🕷️" },
  { id: "water", name: "Water", emoji: "💧" },
  { id: "heights", name: "Heights", emoji: "🏔️" },
  { id: "public_speaking", name: "Public Speaking", emoji: "🎤" },
  { id: "darkness", name: "Darkness", emoji: "🌑" },
  { id: "social_anxiety", name: "Social Anxiety", emoji: "😰" },
]

export default function ChooseFear() {
  const [selectedFear, setSelectedFear] = useState("")
  const router = useRouter()

  const handleSelectFear = (fearId: string) => {
    setSelectedFear(fearId)
  }

  const handleStartGame = () => {
    if (selectedFear) {
      router.push(`/gameplay?fearId=${selectedFear}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-10">Choose Your Fear</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl">
        {fears.map((fear) => (
          <Card
            key={fear.id}
            className={`cursor-pointer transition-all ${selectedFear === fear.id ? "ring-2 ring-green-500" : ""}`}
            onClick={() => handleSelectFear(fear.id)}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-4xl mb-2">{fear.emoji}</CardTitle>
              <CardTitle>{fear.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Button
        onClick={handleStartGame}
        disabled={!selectedFear}
        className="w-48 h-12 text-lg bg-green-600 hover:bg-green-700"
      >
        Start Challenge
      </Button>
    </div>
  )
}

