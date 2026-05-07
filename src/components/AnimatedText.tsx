'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'

interface AnimatedTextProps {
  text: string
  className?: string
  type?: 'words' | 'chars' | 'lines'
  delay?: number
  staggerDelay?: number
  once?: boolean
}

const wordVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const charVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    rotateX: -90
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const lineVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export function AnimatedText({ 
  text, 
  className = '', 
  type = 'words',
  delay = 0,
  once = true
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  const words = text.split(' ')
  const chars = text.split('')
  const lines = text.split('\n')

  if (type === 'chars') {
    return (
      <motion.span
        ref={ref}
        className={`inline-block ${className}`}
        variants={wordVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ perspective: '1000px' }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
            style={{ 
              transformStyle: 'preserve-3d',
              whiteSpace: char === ' ' ? 'pre' : 'normal'
            }}
            transition={{ delay: delay + index * 0.02 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  if (type === 'lines') {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            variants={lineVariants}
            className="block"
            transition={{ delay: delay + index * 0.1 }}
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Default: words
  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={wordVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          className="inline-block mr-[0.25em]"
          transition={{ delay: delay + index * 0.08 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Animated heading with letter stagger
export function AnimatedHeading({ 
  children, 
  className = '',
  as: Component = 'h2',
  delay = 0
}: { 
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  delay?: number
}) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const words = children.split(' ')

  return (
    <Component
      ref={ref as any}
      className={className}
    >
      <motion.span
        className="inline-block"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-[0.3em]">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={charVariants}
                className="inline-block"
                style={{ transformStyle: 'preserve-3d' }}
                transition={{ 
                  delay: delay + (wordIndex * 0.08) + (charIndex * 0.02)
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Component>
  )
}
