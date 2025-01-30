const fears = {
    spiders: {
      name: "Spiders",
      emoji: "🕷️",
      levels: [
        {
          difficulty: "Easy",
          content: "🕷️",
          description: "A tiny spider appears in the corner of the room.",
          options: [
            { text: "Look closely at the spider", correct: true },
            { text: "Take a deep breath and stay calm", correct: true },
            { text: "Observe the spider from a distance", correct: true },
            { text: "Remind yourself that it's harmless", correct: true },
            { text: "Run away screaming", correct: false },
            { text: "Close your eyes and pretend it's not there", correct: false },
            { text: "Call for someone to kill it", correct: false },
            { text: "Panic and try to squash it", correct: false },
          ],
        },
        {
          difficulty: "Normal",
          content: "🕸️",
          description: "You notice a spider web in your workspace.",
          options: [
            { text: "Carefully remove the web", correct: true },
            { text: "Observe the intricate design", correct: true },
            { text: "Look for the spider that made it", correct: true },
            { text: "Leave the web and continue working", correct: true },
            { text: "Burn down the entire workspace", correct: false },
            { text: "Quit your job to avoid the web", correct: false },
            { text: "Scream and run away", correct: false },
            { text: "Spray the entire room with insecticide", correct: false },
          ],
        },
        {
          difficulty: "Hard",
          content: "🕷️🔀",
          description: "A spider is crawling on your desk.",
          options: [
            { text: "Gently guide it into a cup", correct: true },
            { text: "Observe its movements calmly", correct: true },
            { text: "Slowly move your things away", correct: true },
            { text: "Take a photo for identification", correct: true },
            { text: "Smash it with a heavy book", correct: false },
            { text: "Spray it with harmful chemicals", correct: false },
            { text: "Abandon your desk forever", correct: false },
            { text: "Set your desk on fire", correct: false },
          ],
        },
        {
          difficulty: "Very Hard",
          content: "📸🕷️",
          description: "You need to take a close-up photo of a spider.",
          options: [
            { text: "Approach slowly and steadily", correct: true },
            { text: "Use a macro lens for detail", correct: true },
            { text: "Set up a controlled environment", correct: true },
            { text: "Research the spider species first", correct: true },
            { text: "Refuse to do the task", correct: false },
            { text: "Take a photo of a toy spider instead", correct: false },
            { text: "Ask someone else to do it", correct: false },
            { text: "Photoshop a spider into a picture", correct: false },
          ],
        },
        {
          difficulty: "Extreme",
          content: "🖐️🕷️",
          description: "A harmless spider lands on your hand.",
          options: [
            { text: "Stay calm and let it crawl off", correct: true },
            { text: "Observe its behavior closely", correct: true },
            { text: "Gently blow on it to encourage it to leave", correct: true },
            { text: "Slowly lower your hand to a surface", correct: true },
            { text: "Violently shake your hand", correct: false },
            { text: "Scream and panic", correct: false },
            { text: "Slap your hand against a wall", correct: false },
            { text: "Douse your hand in insect spray", correct: false },
          ],
        },
      ],
    },
    water: {
      name: "Water",
      emoji: "💧",
      levels: [
        {
          difficulty: "Easy",
          content: "💧",
          description: "You see a glass of water on the table.",
          options: [
            { text: "Take a small sip", correct: true },
            { text: "Touch the outside of the glass", correct: true },
            { text: "Smell the water", correct: true },
            { text: "Pour a little water out", correct: true },
            { text: "Run away from the glass", correct: false },
            { text: "Knock the glass over", correct: false },
            { text: "Pretend the glass doesn't exist", correct: false },
            { text: "Ask someone to remove the glass", correct: false },
          ],
        },
        {
          difficulty: "Normal",
          content: "🚰",
          description: "You need to turn on a faucet.",
          options: [
            { text: "Slowly turn the handle", correct: true },
            { text: "Let water run for a few seconds", correct: true },
            { text: "Put your hand under the stream", correct: true },
            { text: "Adjust the water temperature", correct: true },
            { text: "Refuse to touch the faucet", correct: false },
            { text: "Ask someone else to do it", correct: false },
            { text: "Use the faucet wearing gloves", correct: false },
            { text: "Avoid the bathroom altogether", correct: false },
          ],
        },
        {
          difficulty: "Hard",
          content: "🛁",
          description: "You need to take a bath.",
          options: [
            { text: "Fill the tub halfway", correct: true },
            { text: "Test the water temperature", correct: true },
            { text: "Sit on the edge of the tub", correct: true },
            { text: "Put your feet in the water", correct: true },
            { text: "Refuse to take a bath", correct: false },
            { text: "Only take showers from now on", correct: false },
            { text: "Ask someone to bathe you", correct: false },
            { text: "Use dry shampoo instead", correct: false },
          ],
        },
        {
          difficulty: "Very Hard",
          content: "🏊",
          description: "You're invited to a pool party.",
          options: [
            { text: "Attend and sit by the pool", correct: true },
            { text: "Dip your toes in the water", correct: true },
            { text: "Wade in the shallow end", correct: true },
            { text: "Learn basic swimming techniques", correct: true },
            { text: "Decline the invitation", correct: false },
            { text: "Attend but avoid the pool area", correct: false },
            { text: "Wear a full-body suit to the party", correct: false },
            { text: "Drain the pool before attending", correct: false },
          ],
        },
        {
          difficulty: "Extreme",
          content: "🌊",
          description: "You're at the beach near the ocean.",
          options: [
            { text: "Walk along the shoreline", correct: true },
            { text: "Let waves touch your feet", correct: true },
            { text: "Wade knee-deep into the water", correct: true },
            { text: "Float on your back in shallow water", correct: true },
            { text: "Stay far away from the water", correct: false },
            { text: "Panic when water touches you", correct: false },
            { text: "Refuse to look at the ocean", correct: false },
            { text: "Leave the beach immediately", correct: false },
          ],
        },
      ],
    },
    heights: {
      name: "Heights",
      emoji: "🏔️",
      levels: [
        {
          difficulty: "Easy",
          content: "🏔️",
          description: "You're looking at a picture of a tall building.",
          options: [
            { text: "Study the architectural details", correct: true },
            { text: "Imagine being on the ground floor", correct: true },
            { text: "Count the number of floors", correct: true },
            { text: "Appreciate the skyline view", correct: true },
            { text: "Throw the picture away", correct: false },
            { text: "Close your eyes and avoid looking", correct: false },
            { text: "Feel dizzy and lie down", correct: false },
            { text: "Rip up the picture", correct: false },
          ],
        },
        {
          difficulty: "Normal",
          content: "🪟",
          description: "You're on the 2nd floor looking out a window.",
          options: [
            { text: "Look at nearby buildings", correct: true },
            { text: "Open the window slightly", correct: true },
            { text: "Observe people walking below", correct: true },
            { text: "Enjoy the different perspective", correct: true },
            { text: "Stay away from all windows", correct: false },
            { text: "Close all curtains and blinds", correct: false },
            { text: "Only use the stairs from now on", correct: false },
            { text: "Ask to move to a windowless room", correct: false },
          ],
        },
        {
          difficulty: "Hard",
          content: "🏙️",
          description: "You're on the 10th floor of a building.",
          options: [
            { text: "Look out the window briefly", correct: true },
            { text: "Use breathing exercises to stay calm", correct: true },
            { text: "Walk around the floor confidently", correct: true },
            { text: "Appreciate the view from a safe distance", correct: true },
            { text: "Crawl on the floor to move around", correct: false },
            { text: "Refuse to go above the ground floor", correct: false },
            { text: "Keep your eyes closed at all times", correct: false },
            { text: "Cling to walls for support", correct: false },
          ],
        },
        {
          difficulty: "Very Hard",
          content: "🎢",
          description: "You're invited to ride a Ferris wheel.",
          options: [
            { text: "Ride in the lowest cabin", correct: true },
            { text: "Focus on the horizon while riding", correct: true },
            { text: "Take deep breaths during the ride", correct: true },
            { text: "Enjoy the slow, steady movement", correct: true },
            { text: "Refuse to go near the Ferris wheel", correct: false },
            { text: "Panic and try to get off mid-ride", correct: false },
            { text: "Close your eyes for the entire ride", correct: false },
            { text: "Cling to your seat in fear", correct: false },
          ],
        },
        {
          difficulty: "Extreme",
          content: "🪂",
          description: "You're offered a tandem skydiving experience.",
          options: [
            { text: "Watch safety demonstration videos", correct: true },
            { text: "Practice deep breathing techniques", correct: true },
            { text: "Visualize a successful jump", correct: true },
            { text: "Trust your experienced instructor", correct: true },
            { text: "Refuse to consider skydiving", correct: false },
            { text: "Try to exit the plane mid-flight", correct: false },
            { text: "Panic and hyperventilate", correct: false },
            { text: "Demand to land immediately", correct: false },
          ],
        },
      ],
    },
    public_speaking: {
      name: "Public Speaking",
      emoji: "🎤",
      levels: [
        {
          difficulty: "Easy",
          content: "🗣️",
          description: "You need to introduce yourself to a small group.",
          options: [
            { text: "Take deep breaths and speak slowly", correct: true },
            { text: "Practice your introduction beforehand", correct: true },
            { text: "Focus on one friendly face in the group", correct: true },
            { text: "Remind yourself that everyone feels nervous sometimes", correct: true },
            { text: "Avoid eye contact with everyone", correct: false },
            { text: "Speak as quickly as possible to get it over with", correct: false },
            { text: "Make an excuse to leave the room", correct: false },
            { text: "Let someone else introduce you", correct: false },
          ],
        },
      ],
    },
    darkness: {
      name: "Darkness",
      emoji: "🌑",
      levels: [
        {
          difficulty: "Easy",
          content: "🔦",
          description: "You need to walk through a dimly lit room.",
          options: [
            { text: "Turn on a small light or use a flashlight", correct: true },
            { text: "Walk slowly and let your eyes adjust", correct: true },
            { text: "Remind yourself that the room is safe", correct: true },
            { text: "Focus on your breathing to stay calm", correct: true },
            { text: "Run through the room as fast as possible", correct: false },
            { text: "Close your eyes while walking", correct: false },
            { text: "Refuse to enter the room", correct: false },
            { text: "Scream for someone to rescue you", correct: false },
          ],
        },
      ],
    },
  }
  
  export async function getFearData(fearId: string | null) {
    // Simulate an API call or database query
    await new Promise((resolve) => setTimeout(resolve, 500))
    if (!fearId) return null
    return fears[fearId as keyof typeof fears] || null
  }
  
  