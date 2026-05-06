'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { SlotMachineNumber } from '@/components'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  { value: 45, suffix: '+', label: 'Ecosystems', sublabel: 'Delivered' },
  { value: 10, suffix: 'M+', prefix: '$', label: 'Client Revenue', sublabel: 'Generated' },
  { value: 12, suffix: '+', label: 'Industries', sublabel: 'Served' },
  { value: 95, suffix: '%', label: 'Client Retention', sublabel: 'Rate' },
]

export function MetricsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.metric-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-surface-dark border-y border-border"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="metric-item text-center md:text-left p-4 rounded-lg cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                backgroundColor: 'rgba(var(--accent), 0.05)',
                scale: 1.02
              }}
            >
              <SlotMachineNumber 
                value={metric.value} 
                prefix={metric.prefix}
                suffix={metric.suffix}
                className="text-display-sm md:text-display-md mb-2"
              />
              <div className="font-mono text-label text-foreground/50 uppercase tracking-widest">
                {metric.label}
              </div>
              <div className="text-body-sm text-foreground/40 mt-1">
                {metric.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
