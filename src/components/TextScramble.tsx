'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const chars = '!<>-_\\/[]{}—=+*^?#________'

interface TextScrambleProps {
  children: string
  className?: string
  duration?: number
}

export function TextScramble({ 
  children, 
  className = '', 
  duration = 2000 
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    let iteration = 0
    const originalText = children
    const totalIterations = originalText.length * 3
    const intervalTime = duration / totalIterations

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration / 3) {
              return originalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      iteration += 1

      if (iteration >= totalIterations) {
        clearInterval(interval)
        setDisplayText(originalText)
      }
    }, intervalTime)

    return () => clearInterval(interval)
  }, [isInView, children, duration])

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  )
}
