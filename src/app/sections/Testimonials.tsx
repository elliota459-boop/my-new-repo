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
    quote: "IBNAY didn't just build us a website. They built us a competitive weapon. Within 90 days we had 3 inbound enterprise inquiries we'd never have gotten with our old site. The strategy work alone was worth 10x what we paid.",
    author: 'Sarah Chen',
    title: 'CEO',
    company: 'Vertex AI',
    image: 'SC',
  },
  {
    quote: "I've worked with agencies for 15 years. IBNAY is the first one that actually understood our business before designing a single pixel. Our conversion rate went from 1.8% to 6.2% in 45 days.",
    author: 'Marcus Rodriguez',
    title: 'CMO',
    company: 'Apex Capital',
    image: 'MR',
  },
  {
    quote: "They refused to start designing until they understood our patient journey. That discipline is rare. The result? A 198% increase in online bookings and a site that actually builds trust with anxious patients.",
    author: 'Dr. Emily Watson',
    title: 'Director of Digital',
    company: 'Meridian Health',
    image: 'EW',
  },
  {
    quote: "Our previous agency gave us a beautiful site that nobody used. IBNAY gave us a site that converts at 4x the rate and costs less to maintain. That's the difference between decoration and engineering.",
    author: 'James Park',
    title: 'Founder',
    company: 'Nova Commerce',
    image: 'JP',
  },
  {
    quote: "The ROI was clear within 60 days. $85K investment, $1.2M in attributed revenue in the first quarter. IBNAY doesn't build websites. They build revenue machines.",
    author: 'Priya Sharma',
    title: 'VP of Growth',
    company: 'TechVenture',
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-label text-background/50 tracking-widest uppercase block mb-4">
              From The People Who Hired Us
            </span>
            <h2 className="font-display text-display-sm md:text-display-md text-background">
              Client Results
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-background rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
              {/* Quote Icon with float animation */}
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
                  {/* Quote */}
                  <blockquote className="font-display text-heading-sm md:text-heading-md text-foreground leading-relaxed mb-10">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
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

              {/* Navigation with Magnetic buttons */}
              <div className="flex items-center gap-4 mt-10 pt-8 border-t border-border">
                <Magnetic strength={0.3}>
                  <motion.button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center"
                    whileHover={{ borderColor: 'rgb(var(--accent))', color: 'rgb(var(--accent))' }}
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
                    whileHover={{ borderColor: 'rgb(var(--accent))', color: 'rgb(var(--accent))' }}
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
