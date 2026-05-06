'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowEffectProps {
  children: ReactNode
  className?: string
  glowColor?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function GlowEffect({ 
  children, 
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.5)',
  intensity = 'medium'
}: GlowEffectProps) {
  const intensityMap = {
    low: { spread: 20, opacity: 0.3 },
    medium: { spread: 40, opacity: 0.5 },
    high: { spread: 60, opacity: 0.7 }
  }

  const { spread, opacity } = intensityMap[intensity]

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Glow layer */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-inherit blur-xl"
        style={{
          background: glowColor,
          filter: `blur(${spread}px)`,
          opacity: 0
        }}
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          hover: { 
            opacity,
            scale: 1.1,
            transition: { duration: 0.3 }
          }
        }}
      />
      {children}
    </motion.div>
  )
}

// Pulse animation wrapper
interface PulseProps {
  children: ReactNode
  className?: string
  duration?: number
}

export function Pulse({ children, className = '', duration = 2 }: PulseProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.02, 1],
        opacity: [1, 0.9, 1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  )
}

// Breathing animation (subtle scale)
interface BreatheProps {
  children: ReactNode
  className?: string
}

export function Breathe({ children, className = '' }: BreatheProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.005, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  )
}

// Gradient shift animation
interface GradientShiftProps {
  children: ReactNode
  className?: string
  colors?: string[]
  duration?: number
}

export function GradientShift({ 
  children, 
  className = '',
  colors = ['from-violet-600', 'via-purple-600', 'to-blue-600'],
  duration = 5
}: GradientShiftProps) {
  return (
    <motion.div
      className={`bg-gradient-to-r ${colors.join(' ')} ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        backgroundSize: '200% 200%'
      }}
    >
      {children}
    </motion.div>
  )
}

// Shimmer loading effect
interface ShimmerProps {
  className?: string
  width?: string
  height?: string
}

export function Shimmer({ className = '', width = '100%', height = '20px' }: ShimmerProps) {
  return (
    <div 
      className={`relative overflow-hidden bg-foreground/10 rounded ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  )
}

// Ripple effect on click
interface RippleProps {
  children: ReactNode
  className?: string
  color?: string
}

export function Ripple({ children, className = '', color = 'rgba(255, 255, 255, 0.3)' }: RippleProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileTap="tap"
      initial="initial"
    >
      <motion.span
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{ backgroundColor: color }}
        variants={{
          initial: { scale: 0, opacity: 0.5 },
          tap: { 
            scale: 2,
            opacity: 0,
            transition: { duration: 0.5 }
          }
        }}
      />
      {children}
    </motion.div>
  )
}
