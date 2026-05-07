'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

interface TiltCard3DProps {
  children: React.ReactNode
  className?: string
  tiltAmount?: number
  shineOpacity?: number
}

export function TiltCard3D({ 
  children, 
  className = '', 
  tiltAmount = 10,
  shineOpacity = 0.15
}: TiltCard3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Mouse position relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring animation for tilt
  const springConfig = { stiffness: 300, damping: 30 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), springConfig)

  // Shine position (opposite to tilt)
  const shineX = useTransform(rotateY, [-tiltAmount, tiltAmount], ['0%', '100%'])
  const shineY = useTransform(rotateX, [tiltAmount, -tiltAmount], ['0%', '100%'])

  // If user prefers reduced motion, render without 3D effects
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Normalize to -0.5 to 0.5 range
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseEnter = () => setIsHovered(true)
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
        
        {/* Shine overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{
            background: `radial-gradient(circle at ${shineX.get()} ${shineY.get()}, rgba(255,255,255,${shineOpacity}) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

// Simpler version for project cards (lift effect)
interface LiftCard3DProps {
  children: React.ReactNode
  className?: string
  liftAmount?: number
}

export function LiftCard3D({ 
  children, 
  className = '', 
  liftAmount = 12
}: LiftCard3DProps) {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, render with simple scale effect
  if (prefersReducedMotion) {
    return (
      <div className={`relative transition-transform duration-300 ${className}`}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          z: isHovered ? -liftAmount : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(44, 191, 174, 0.25), 0 0 0 1px rgba(44, 191, 174, 0.1)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
