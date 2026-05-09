'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { Magnetic } from '@/components'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: 'IBNAY took over a half-built product that had been stuck for months. They cleaned the code, rebuilt the backend, fixed the launch blockers, and shipped a site our team can actually use.',
    author: 'Sarah Chen',
    title: 'Founder',
    company: 'SaaS Platform',
    image: 'SC',
  },
  {
    quote: 'We came with an AI-generated prototype that looked close but failed in production. IBNAY turned it into a real web app with auth, database rules, analytics, and deployment handled properly.',
    author: 'Marcus Rodriguez',
    title: 'Product Lead',
    company: 'AI Tools Company',
    image: 'MR',
  },
  {
    quote: 'They understood both the website and the Web3 logic. The wallet flow, dashboard, smart contract integration, and user education all finally felt like one product.',
    author: 'Dr. Emily Watson',
    title: 'Operations Director',
    company: 'Web3 Health Platform',
    image: 'EW',
  },
  {
    quote: 'Our previous agency gave us a beautiful website that nobody on the team trusted. IBNAY rebuilt the structure, speed, forms, and backend so the site became something we could confidently send to clients.',
    author: 'James Park',
    title: 'Founder',
    company: 'Commerce Brand',
    image: 'JP',
  },
  {
    quote: 'The best part was clarity. They told us what to keep, what to rebuild, and what to postpone. That saved us weeks and got the product live without wasting budget.',
    author: 'Priya Sharma',
    title: 'VP Product',
    company: 'EdTech Company',
    image: 'PS',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-surface"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div ref={contentRef}>
          <div className="text-center mb-16">
            <span className="font-mono text-label text-background/50 tracking-widest uppercase block mb-4">
              Client Reviews
            </span>
            <h2 className="font-display text-display-sm md:text-display-md text-background">
              What Clients Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-background rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
              <motion.div
                className="absolute -top-6 left-8 md:left-12 w-12 h-12 bg-accent rounded-full flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Quote className="w-5 h-5 text-white" />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-display text-heading-sm md:text-heading-md text-foreground leading-relaxed mb-10">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                      <span className="font-display text-lg text-accent">{current.image}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="font-display text-heading-sm text-foreground">
                        {current.author}
                      </div>
                      <div className="font-mono text-label text-foreground/50">
                        {current.title}, {current.company}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 mt-10 pt-8 border-t border-border">
                <Magnetic strength={0.3}>
                  <motion.button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center"
                    whileHover={{ borderColor: '#5a4fcf', color: '#5a4fcf' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <motion.button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center"
                    whileHover={{ borderColor: '#5a4fcf', color: '#5a4fcf' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Magnetic>
                <motion.div
                  className="ml-auto font-mono text-label text-foreground/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={currentIndex}
                >
                  {currentIndex + 1} / {testimonials.length}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
