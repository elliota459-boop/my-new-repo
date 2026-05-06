'use client'

import Link from 'next/link'
import { Linkedin, Instagram, Dribbble } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark border-t border-border">
      <div className="w-full px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-2xl text-foreground tracking-tight">
              IBNAY
            </Link>
            <p className="mt-4 text-body text-foreground/60 max-w-xs">
              Web design and development agency for SEO-ready websites, lead generation landing pages, custom web apps, Web3 products, and rescue rebuilds.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <div className="font-mono text-label text-foreground/40 mb-6">Navigate</div>
            <ul className="space-y-3">
              <li>
                <Link href="/work" className="text-body text-foreground/70 hover:text-accent transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-body text-foreground/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-body text-foreground/70 hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-body text-foreground/70 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-body text-foreground/70 hover:text-accent transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-body text-foreground/70 hover:text-accent transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body text-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="md:col-span-3">
            <div className="font-mono text-label text-foreground/40 mb-6">Address</div>
            <p className="text-body text-foreground/70 leading-relaxed">
              Harju maakond, Tallinn,<br />
              Kesklinna linnaosa,<br />
              Tartu mnt 67/1-13b, 10115
            </p>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2">
            <div className="font-mono text-label text-foreground/40 mb-6">Contacts</div>
            <div className="space-y-6">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-foreground/30 mb-1">E-mail</div>
                <a
                  href="mailto:info@ibnayiftribe.com"
                  className="text-body text-foreground/70 hover:text-accent transition-colors block"
                >
                  info@ibnayiftribe.com
                </a>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-foreground/30 mb-1">Mobile</div>
                <div className="space-y-1">
                  <a
                    href="tel:+917861010850"
                    className="text-body text-foreground/70 hover:text-accent transition-colors block"
                  >
                    +91 78610 10850
                  </a>
                  <a
                    href="tel:+37254185107"
                    className="text-body text-foreground/70 hover:text-accent transition-colors block"
                  >
                    +372 5418 5107
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-accent transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-label text-foreground/40">
            Copyright {currentYear} IBNAY Digital Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-mono text-label text-foreground/40 hover:text-foreground/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-mono text-label text-foreground/40 hover:text-foreground/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="font-mono text-label text-foreground/30">
            Built for Google intent. Designed for trust. Engineered for qualified leads.
          </p>
        </div>
      </div>
    </footer>
  )
}
