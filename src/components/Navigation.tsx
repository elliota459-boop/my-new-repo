'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative block h-9 w-28 md:h-10 md:w-32" aria-label="IBNAY home">
              <Image
                src="/brand/ibnay-header-logo.png"
                alt="IBNAY"
                fill
                priority
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain object-left"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground link-hover transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="btn-outline group text-sm"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenu />
          </div>
        </div>
      </nav>
    </>
  )
}
