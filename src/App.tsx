
import { motion } from "motion/react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const messages = [
  "Glass, Flat, Gradients, Cats — Hardly any design we can't implement.",
  "Don't believe us?",
  "Watch",
]

function App() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [shouldExplode, setShouldExplode] = useState(false)
  const [boldProgress, setBoldProgress] = useState(0)
  const [completedMessages, setCompletedMessages] = useState(new Set())
  const [typewriterText, setTypewriterText] = useState("Watch")
  const [typewriterIndex, setTypewriterIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const words = messages[currentMessageIndex].split(' ')
      const boldDuration = words.length * 250 // 250ms per word
      const pauseDuration = 2000 // 2 seconds pause after animation

      const timeout = setTimeout(() => {
        setCurrentMessageIndex((prev) => {
          if (prev + 1 >= messages.length) {
            // Start scale animation 0.125 seconds after "Watch." appears
            setTimeout(() => {
              setShouldExplode(true)
            }, 125)
            return prev
          }
          return prev + 1
        })
      }, boldDuration + pauseDuration)

      return () => clearTimeout(timeout)
    }
  }, [currentMessageIndex, navigate])

  // Word bold animation effect
  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      setBoldProgress(0)
      const words = messages[currentMessageIndex].split(' ')
      const wordInterval = setInterval(() => {
        setBoldProgress((prev) => {
          if (prev >= words.length) {
            clearInterval(wordInterval)
            return prev
          }
          return prev + 1
        })
      }, 250) // Each word becomes bold every 250ms (matches human reading speed)

      return () => clearInterval(wordInterval)
    }
  }, [currentMessageIndex])

  // Keep words bold after animation completes
  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const words = messages[currentMessageIndex].split(' ')
      const animationDuration = words.length * 250

      const timeout = setTimeout(() => {
        setBoldProgress(words.length) // Set all words to bold after animation
        setCompletedMessages(prev => new Set([...prev, currentMessageIndex])) // Mark this message as completed
      }, animationDuration)

      return () => clearTimeout(timeout)
    }
  }, [currentMessageIndex])

  // Typewriter effect to change "Watch" to "Click"
  useEffect(() => {
    if (shouldExplode) {
      // Wait 0.2 seconds after scaling, then start typewriter effect
      const timeout = setTimeout(() => {
        setTypewriterText("Watch")
        setTypewriterIndex(0)

        // Wait 0.2s then start typing "Click"
        setTimeout(() => {
          const targetText = "Click"
          const typewriterInterval = setInterval(() => {
            setTypewriterIndex((prev) => {
              if (prev >= targetText.length) {
                clearInterval(typewriterInterval)
                return prev
              }
              setTypewriterText(targetText.slice(0, prev + 1))
              return prev + 1
            })
          }, 100) // 100ms per character
        }, 200) // 0.2s wait before typing
      }, 200) // 0.2s delay after scaling

      return () => clearTimeout(timeout)
    }
  }, [shouldExplode])

  const backgroundColors = [
    "bg-gray-50",
    "bg-blue-50",
    "#D90A5D"
  ]

  return (
    <motion.div
      className={`h-screen w-screen flex items-center justify-center relative`}
      animate={{ backgroundColor: backgroundColors[currentMessageIndex] }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-4">
        {messages.map((message, index) => {
          const isActive = index === currentMessageIndex
          const isPrevious = index < currentMessageIndex
          const isNext = index > currentMessageIndex

          if (isNext) return null

          if (shouldExplode && index === 2) {
            // Scale up the "Watch." text to fit viewport with whitespace
            return (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center w-full h-full px-8"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <button
                  className="text-6xl sm:text-8xl font-mono font-bold text-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  style={{
                    fontFamily: 'SUSE Mono, monospace',
                    color: '#FEEF20'
                  }}
                  onClick={() => navigate('/experience')}
                >
                  {typewriterText}
                </button>
              </motion.div>
            )
          }

          return (
            <motion.div
              key={index}
              className="absolute"
              initial={isActive ? { opacity: 0, scale: 0.8, y: 20 } : false}
              animate={{
                opacity: 1,
                scale: 1,
                y: isActive ? 0 : isPrevious ? -60 - (currentMessageIndex - index - 1) * 20 : 0,
                filter: isPrevious ? `blur(${2 + (currentMessageIndex - index - 1) * 2}px)` : "blur(0px)"
              }}
              transition={{
                type: "spring",
                stiffness: isActive ? 300 : 200,
                damping: 20,
                duration: 0.8
              }}
            >
              <p className={`text-sm sm:text-lg py-3 sm:py-4 font-mono w-full text-left sm:text-center px-4 sm:px-0`} style={{
                fontFamily: 'SUSE Mono, monospace',
                color: currentMessageIndex === 2 ? '#FEEF20' : '#1f2937'
              }}>
                <span className="inline-block">
                  {message.split(' ').map((word, wordIndex) => {
                    const isCompleted = completedMessages.has(index)
                    const shouldBeBold = isCompleted || (index === currentMessageIndex && wordIndex < boldProgress)

                    // Define colors for first 4 words in first message
                    const getWordColor = (word, wordIndex, messageIndex) => {
                      if (messageIndex === 0 && wordIndex < 4) {
                        const colors = {
                          'Glass': '#00FFFF', // Cyan for glass
                          'Flat': '#FF6B35', // Orange for flat
                          'Gradients': '#8A2BE2', // Purple for gradients
                          'Cats': '#FF1493' // Pink for cats
                        }
                        return colors[word.replace(/[^a-zA-Z]/g, '')] || '#1f2937'
                      }
                      return currentMessageIndex === 2 ? '#FEEF20' : '#1f2937'
                    }

                    return (
                      <span key={wordIndex}>
                        <span
                          className={shouldBeBold ? 'font-bold' : 'font-normal'}
                          style={{
                            transition: 'font-weight 0.2s ease-in-out',
                            color: shouldBeBold ? getWordColor(word, wordIndex, index) : (currentMessageIndex === 2 ? '#FEEF20' : '#1f2937')
                          }}
                        >
                          {word}
                        </span>
                        {wordIndex < message.split(' ').length - 1 && ' '}
                      </span>
                    )
                  })}
                </span>
              </p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default App
