'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

interface FloatingObject3DProps {
  variant?: 'crystal' | 'sphere' | 'torus'
  size?: number
  className?: string
}

export function FloatingObject3D({ 
  variant = 'crystal',
  size = 400,
  className = ''
}: FloatingObject3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics
  const springConfig = { stiffness: 100, damping: 30, mass: 1 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Transform mouse to rotation (8-12 degrees as per strategy doc)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8])
  
  // Parallax movement
  const moveX = useTransform(smoothX, [-0.5, 0.5], [-20, 20])
  const moveY = useTransform(smoothY, [-0.5, 0.5], [-20, 20])

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Normalize to -0.5 to 0.5
      mouseX.set((e.clientX - centerX) / (window.innerWidth / 2))
      mouseY.set((e.clientY - centerY) / (window.innerHeight / 2))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!isMounted) return null

  // CSS 3D crystal shape
  const CrystalShape = () => (
    <div 
      className="relative"
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
        animation: 'float 6s ease-in-out infinite',
      }}
    >
      {/* Main crystal faces */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3) 0%, rgba(167, 139, 250, 0.1) 50%, rgba(124, 58, 237, 0.3) 100%)',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          transform: 'rotateX(0deg) translateZ(50px)',
          filter: 'blur(0.5px)',
          boxShadow: '0 0 60px rgba(124, 58, 237, 0.3), inset 0 0 60px rgba(167, 139, 250, 0.1)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(225deg, rgba(124, 58, 237, 0.2) 0%, rgba(91, 33, 182, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          transform: 'rotateY(72deg) translateZ(50px)',
          filter: 'blur(0.5px)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, rgba(124, 58, 237, 0.25) 0%, rgba(167, 139, 250, 0.15) 100%)',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          transform: 'rotateY(144deg) translateZ(50px)',
          filter: 'blur(0.5px)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(315deg, rgba(91, 33, 182, 0.35) 0%, rgba(124, 58, 237, 0.2) 100%)',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          transform: 'rotateY(216deg) translateZ(50px)',
          filter: 'blur(0.5px)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(167, 139, 250, 0.2) 0%, rgba(124, 58, 237, 0.3) 100%)',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          transform: 'rotateY(288deg) translateZ(50px)',
          filter: 'blur(0.5px)',
        }}
      />
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'scale(1.5)',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
      />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(180deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  )

  // Sphere variant
  const SphereShape = () => (
    <div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle at 30% 30%, rgba(167, 139, 250, 0.6) 0%, rgba(124, 58, 237, 0.4) 40%, rgba(91, 33, 182, 0.6) 100%)',
        boxShadow: `
          0 0 80px rgba(124, 58, 237, 0.4),
          inset -20px -20px 60px rgba(91, 33, 182, 0.5),
          inset 20px 20px 60px rgba(167, 139, 250, 0.3)
        `,
        animation: 'float-sphere 6s ease-in-out infinite',
      }}
    >
      <style jsx>{`
        @keyframes float-sphere {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )

  // Torus variant
  const TorusShape = () => (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        animation: 'float-torus 6s ease-in-out infinite',
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, rgba(124, 58, 237, 0.6), rgba(167, 139, 250, 0.3), rgba(124, 58, 237, 0.6))',
          boxShadow: `
            0 0 60px rgba(124, 58, 237, 0.4),
            inset 0 0 60px rgba(91, 33, 182, 0.3)
          `,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 35%, 35% 35%, 35% 65%, 65% 65%, 65% 35%, 0% 35%)',
        }}
      />
      <style jsx>{`
        @keyframes float-torus {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  )

  const shapes = {
    crystal: CrystalShape,
    sphere: SphereShape,
    torus: TorusShape,
  }

  const SelectedShape = shapes[variant]

  // If user prefers reduced motion, render simplified version without parallax
  if (prefersReducedMotion) {
    return (
      <div className={`pointer-events-none ${className}`}>
        <div className="opacity-40">
          <SelectedShape />
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`pointer-events-none ${className}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: moveX,
          y: moveY,
          transformStyle: 'preserve-3d',
        }}
      >
        <SelectedShape />
      </motion.div>
    </div>
  )
}
