'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

interface RevealImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  priority?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function RevealImage({ 
  src, 
  alt, 
  className = '',
  aspectRatio = '16/9',
  priority = false,
  direction = 'up'
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isLoaded, setIsLoaded] = useState(false)

  const clipPathVariants = {
    hidden: {
      clipPath: direction === 'up' 
        ? 'inset(100% 0 0 0)'
        : direction === 'down'
        ? 'inset(0 0 100% 0)'
        : direction === 'left'
        ? 'inset(0 100% 0 0)'
        : 'inset(0 0 0 100%)'
    },
    visible: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  }

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <motion.div
        className="absolute inset-0"
        variants={clipPathVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={`object-cover transition-transform duration-700 ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      
      {/* Shimmer effect while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      )}
    </div>
  )
}

// Image with hover zoom effect
interface HoverImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
}

export function HoverImage({ 
  src, 
  alt, 
  className = '',
  aspectRatio = '16/9'
}: HoverImageProps) {
  return (
    <motion.div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { scale: 1 },
          hover: { 
            scale: 1.05,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  )
}

// Mask reveal text over image
interface MaskRevealProps {
  children: React.ReactNode
  className?: string
}

export function MaskReveal({ children, className = '' }: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
