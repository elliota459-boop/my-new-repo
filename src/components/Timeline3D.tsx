'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

interface TimelinePhase {
  number: string
  title: string
  duration: string
  description: string
  deliverables: string[]
  tools: string[]
}

interface Timeline3DProps {
  phases: TimelinePhase[]
  className?: string
}

export function Timeline3D({ phases, className = '' }: Timeline3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform scroll progress to phase index
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      const newIndex = Math.min(
        Math.floor(value * phases.length),
        phases.length - 1
      )
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, phases.length, activeIndex])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* 3D Ribbon Background */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
        style={{
          background: 'linear-gradient(180deg, rgba(44, 191, 174, 0.3) 0%, rgba(119, 214, 203, 0.1) 50%, rgba(44, 191, 174, 0.3) 100%)',
          transform: 'translateX(-50%) perspective(1000px) rotateY(45deg)',
          transformStyle: 'preserve-3d',
        }}
      />

      {/* Progress indicator on ribbon */}
      <motion.div
        className="absolute left-1/2 top-0 w-3 -translate-x-1/2 rounded-full bg-accent"
        style={{
          height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
          transform: 'translateX(-50%) perspective(1000px) rotateY(45deg)',
          boxShadow: '0 0 20px rgba(44, 191, 174, 0.5)',
        }}
      />

      {/* Phases */}
      <div className="space-y-32 py-20">
        {phases.map((phase, index) => (
          <TimelinePhaseCard
            key={index}
            phase={phase}
            index={index}
            isActive={index <= activeIndex}
          />
        ))}
      </div>
    </div>
  )
}

interface TimelinePhaseCardProps {
  phase: TimelinePhase
  index: number
  isActive: boolean
}

function TimelinePhaseCard({ phase, index, isActive }: TimelinePhaseCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // 3D depth values based on position
  const depth = index % 2 === 0 ? 50 : -50 // Alternate sides
  const rotateY = index % 2 === 0 ? -5 : 5 // Slight rotation

  return (
    <motion.div
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
        index % 2 === 0 ? '' : 'lg:direction-rtl'
      }`}
      initial={{
        opacity: 0,
        z: -100,
        rotateY: rotateY,
      }}
      animate={isInView ? {
        opacity: 1,
        z: 0,
        rotateY: 0,
      } : {
        opacity: 0,
        z: -100,
        rotateY: rotateY,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {/* Number Circle */}
      <div className={`lg:col-span-2 flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start lg:order-last'}`}>
        <motion.div
          className={`relative w-20 h-20 rounded-full flex items-center justify-center ${
            isActive ? 'bg-accent' : 'bg-background-elevated border border-border'
          }`}
          animate={{
            scale: isActive ? 1.1 : 1,
            boxShadow: isActive
              ? '0 0 40px rgba(44, 191, 174, 0.4)'
              : '0 0 0 rgba(44, 191, 174, 0)',
          }}
          transition={{ duration: 0.5 }}
          style={{
            transform: 'translateZ(20px)',
          }}
        >
          <span className={`font-display text-2xl ${isActive ? 'text-white' : 'text-foreground-muted'}`}>
            {phase.number}
          </span>

          {/* Glow ring */}
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent/30"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`lg:col-span-10 ${index % 2 === 0 ? '' : 'lg:order-first'}`}>
        <motion.div
          className="p-8 rounded-2xl bg-background-card border border-border relative overflow-hidden"
          style={{
            transform: `translateZ(${isActive ? 30 : 0}px)`,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            boxShadow: isActive
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(44, 191, 174, 0.2)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h3 className="font-display text-2xl text-foreground">{phase.title}</h3>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-mono rounded-full">
                {phase.duration}
              </span>
            </div>

            <p className="text-foreground-muted mb-6 leading-relaxed">{phase.description}</p>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="font-mono text-sm text-foreground-subtle mb-3 uppercase tracking-wider">
                Deliverables
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {phase.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {phase.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-background-elevated text-foreground-subtle text-xs font-mono rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
