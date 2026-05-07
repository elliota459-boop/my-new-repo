'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark border-t border-border">
      <div className="w-full px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="relative block h-32 w-32 md:h-36 md:w-36" aria-label="IBNAY home">
              <Image
                src="/brand/ibnay-footer-logo.png"
                alt="IBNAY IFTRIBE"
                fill
                sizes="(max-width: 768px) 128px, 144px"
                className="object-contain object-left"
              />
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
                  href="mailto:info@ibnayiftibe.com"
                  className="text-body text-foreground/70 hover:text-accent transition-colors block"
                >
                  info@ibnayiftibe.com
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

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/dr-shahbaaz-azmi-618a95152"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-card text-foreground/60 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ibnay_iftribe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-card text-foreground/60 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/917861010850"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-card text-foreground/60 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                aria-label="WhatsApp India"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/37254185107"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-card text-foreground/60 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                aria-label="WhatsApp Estonia"
              >
                <MessageCircle className="w-5 h-5" />
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
      </div>
    </footer>
  )
}
