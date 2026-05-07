'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

interface FloatingElementProps {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
  delay?: number
  rotateAmplitude?: number
}

export function FloatingElement({ 
  children, 
  className = '',
  amplitude = 15,
  duration = 4,
  delay = 0,
  rotateAmplitude = 5
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, rotateAmplitude, 0, -rotateAmplitude, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic button that follows cursor
interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className = '', strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      
      x.set(distanceX * strength)
      y.set(distanceY * strength)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [x, y, strength])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  )
}

// Parallax wrapper for scroll-based movement
interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function Parallax({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const y = useMotionValue(0)
  const x = useMotionValue(0)
  
  const springY = useSpring(y, { damping: 30, stiffness: 100 })
  const springX = useSpring(x, { damping: 30, stiffness: 100 })

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const rate = scrolled * speed
      
      if (direction === 'up') y.set(-rate)
      if (direction === 'down') y.set(rate)
      if (direction === 'left') x.set(-rate)
      if (direction === 'right') x.set(rate)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction, x, y])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ 
        y: direction === 'up' || direction === 'down' ? springY : 0,
        x: direction === 'left' || direction === 'right' ? springX : 0
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger children wrapper
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
}

export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ 
  children, 
  className = '' 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}
