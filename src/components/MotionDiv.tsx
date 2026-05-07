'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeInUp, viewportConfig } from '@/lib/animations'

interface MotionDivProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  className?: string
  delay?: number
  whileHover?: any
  whileTap?: any
}

export function MotionDiv({ 
  children, 
  className = '', 
  delay = 0,
  whileHover,
  whileTap,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
