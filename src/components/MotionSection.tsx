'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeInUp, viewportConfig } from '@/lib/animations'

interface MotionSectionProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
}

export function MotionSection({ 
  children, 
  className = '', 
  variants = fadeInUp,
  delay = 0
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  )
}
