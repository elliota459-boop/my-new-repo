'use client'

import { motion, useScroll, useTransform, useSpring, MotionValue, useMotionValue } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  delay?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({ 
  children, 
  className = '',
  direction = 'up',
  distance = 50,
  delay = 0,
  duration = 0.6,
  once = true
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, x: 0 }
      case 'down': return { y: -distance, x: 0 }
      case 'left': return { x: distance, y: 0 }
      case 'right': return { x: -distance, y: 0 }
      default: return { y: distance, x: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const
      }}
    >
      {children}
    </motion.div>
  )
}

// Horizontal scroll text
interface HorizontalScrollTextProps {
  text: string
  className?: string
  baseVelocity?: number
}

export function HorizontalScrollText({ 
  text, 
  className = '',
  baseVelocity = 100 
}: HorizontalScrollTextProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  
  const scrollVelocity = useSpring(
    useTransform(scrollY, [0, 1000], [0, baseVelocity]),
    { stiffness: 50, damping: 30 }
  )
  
  const x = useTransform(baseX, (v) => `${v}%`)

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div 
        className="flex whitespace-nowrap"
        style={{ x }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// Rotate on scroll
interface RotateOnScrollProps {
  children: ReactNode
  className?: string
  rotation?: number
}

export function RotateOnScroll({ 
  children, 
  className = '',
  rotation = 360
}: RotateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotation])
  const springRotate = useSpring(rotate, { stiffness: 100, damping: 30 })

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ rotate: springRotate }}>
        {children}
      </motion.div>
    </div>
  )
}

// Scale on scroll
interface ScaleOnScrollProps {
  children: ReactNode
  className?: string
  startScale?: number
  endScale?: number
}

export function ScaleOnScroll({ 
  children, 
  className = '',
  startScale = 0.8,
  endScale = 1
}: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale: springScale, opacity }}>
        {children}
      </motion.div>
    </div>
  )
}

// Parallax wrapper with multiple layers
interface ParallaxLayersProps {
  children: ReactNode
  className?: string
  speed?: number
  offset?: number
}

export function ParallaxLayer({ 
  children, 
  className = '',
  speed = 0.5,
  offset = 0
}: ParallaxLayersProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [offset, offset + (speed * 100)]
  )
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y: springY }}>
        {children}
      </motion.div>
    </div>
  )
}

// Text reveal on scroll - character by character
interface TextRevealScrollProps {
  text: string
  className?: string
}

export function TextRevealScroll({ text, className = '' }: TextRevealScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.2']
  })

  const words = text.split(' ')

  return (
    <div ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const totalChars = words.reduce((acc, w) => acc + w.length, 0)
            const charProgress = (wordIndex * words[0].length + charIndex) / totalChars
            
            const charOpacity = useTransform(
              scrollYProgress,
              [charProgress * 0.8, charProgress * 0.8 + 0.2],
              [0.1, 1]
            )
            
            return (
              <motion.span
                key={charIndex}
                className="inline-block"
                style={{ opacity: charOpacity }}
              >
                {char}
              </motion.span>
            )
          })}
        </span>
      ))}
    </div>
  )
}
