'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'

interface SlotMachineNumberProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function SlotMachineNumber({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = ''
}: SlotMachineNumberProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true)
      
      // Animate from 0 to value
      const controls = animate(0, value, {
        duration,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest))
        },
        onComplete: () => {
          setIsAnimating(false)
        }
      })

      return () => controls.stop()
    }
  }, [isInView, value, duration, isAnimating])

  // Convert number to array of digits for 3D flip effect
  const digits = displayValue.toString().split('').map(Number)
  
  return (
    <div ref={ref} className={`font-display ${className}`}>
      <span className="text-accent">{prefix}</span>
      <div className="inline-flex">
        {digits.map((digit, index) => (
          <motion.span
            key={`${index}-${digit}`}
            className="inline-block"
            initial={{ rotateX: -90, opacity: 0 }}
            animate={isInView ? { rotateX: 0, opacity: 1 } : { rotateX: -90, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{ 
              transformStyle: 'preserve-3d',
              transformOrigin: 'center bottom'
            }}
          >
            {digit}
          </motion.span>
        ))}
      </div>
      <span className="text-accent">{suffix}</span>
    </div>
  )
}

// 3D Rolling Counter variant with slot-machine style
interface RollingCounterProps {
  value: number
  className?: string
}

export function RollingCounter({ value, className = '' }: RollingCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      })
    }
  }, [isInView, value])

  const digits = displayValue.toString().padStart(3, '0').split('')

  return (
    <div ref={ref} className={`flex items-center gap-1 ${className}`}>
      {digits.map((digit, index) => (
        <div 
          key={index}
          className="relative w-12 h-16 bg-background-elevated rounded-lg border border-border overflow-hidden"
          style={{ perspective: 200 }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center font-display text-2xl text-foreground"
            initial={{ rotateX: 90 }}
            animate={isInView ? { rotateX: 0 } : { rotateX: 90 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {digit}
          </motion.div>
          
          {/* Slot machine window effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        </div>
      ))}
    </div>
  )
}
