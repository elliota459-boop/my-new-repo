'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FlowArt, { FlowSection } from '@/components/ui/story-scroll'

/* ─────────────────────────────────────────────────────────────
   About Page — FlowArt story-scroll experience
   Five full-screen chapters tell the IBNAY story as the
   visitor scrolls. Each panel sweeps in from a 30° rotation.
────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <FlowArt aria-label="About IBNAY — Our Story">

      {/* ── 01 Who We Are ─────────────────────────────────── */}
      <FlowSection
        aria-label="Who we are"
        style={{ backgroundColor: '#0B0F12', color: '#F5F5F7' }}
      >
        {/* top label — sits below the fixed nav (~80px) */}
        <p className="pt-20 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/40">
          01 — Who We Are
        </p>

        <hr className="border-none border-t border-white/10" />

        <div>
          <h1
            className="font-display font-bold leading-[0.88] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)' }}
          >
            We Build
            <br />
            Websites
          </h1>
        </div>

        <hr className="border-none border-t border-white/10" />

        <p
          className="max-w-[55ch] font-normal leading-relaxed text-white/60"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}
        >
          IBNAY is a website design and development agency. We build new
          websites, fix broken ones, and rescue half-built projects that
          have stalled. One team owns the design, frontend, backend, and
          deployment — no handoffs, no gaps.
        </p>
      </FlowSection>

      {/* ── 02 What We Do ─────────────────────────────────── */}
      <FlowSection
        aria-label="What we do"
        style={{ backgroundColor: '#12181C', color: '#F5F5F7' }}
      >
        <p className="pt-20 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/40">
          02 — What We Do
        </p>

        <hr className="border-none border-t border-white/10" />

        <div>
          <h2
            className="font-display font-bold leading-[0.88] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)' }}
          >
            Build.
            <br />
            Fix.
            <br />
            Launch.
          </h2>
        </div>

        <hr className="border-none border-t border-white/10" />

        <p
          className="max-w-[55ch] font-normal leading-relaxed text-white/60"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}
        >
          Some clients need a professional website built from scratch.
          Others have a broken WordPress site, an abandoned agency project,
          or an AI-generated prototype that needs real engineering behind it.
          We serve both.
        </p>

        <hr className="border-none border-t border-white/10" />

        <div className="flex flex-wrap gap-[3vw]">
          {[
            {
              title: 'New Websites',
              body: 'Business sites, landing pages, service pages, ecommerce stores — designed, built, and deployed.',
            },
            {
              title: 'Web Applications',
              body: 'SaaS MVPs, dashboards, portals, booking flows, admin tools, payments, and APIs.',
            },
            {
              title: 'Project Rescue',
              body: 'Half-built repos, broken WordPress sites, AI prototypes, abandoned agency projects — we fix and finish them.',
            },
            {
              title: 'Web3 Products',
              body: 'Smart contracts, dApps, wallet flows, token systems, DeFi dashboards, and NFT utilities.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white/90">{title}</p>
              <p
                className="leading-relaxed text-white/50"
                style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* ── 03 How We Work ────────────────────────────────── */}
      <FlowSection
        aria-label="How we work"
        style={{ backgroundColor: '#0B0F12', color: '#F5F5F7' }}
      >
        <p className="pt-20 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/40">
          03 — How We Work
        </p>

        <hr className="border-none border-t border-white/10" />

        <div>
          <h2
            className="font-display font-bold leading-[0.88] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)' }}
          >
            Scope.
            <br />
            Build.
            <br />
            Ship.
          </h2>
        </div>

        <hr className="border-none border-t border-white/10" />

        <p
          className="max-w-[55ch] font-normal leading-relaxed text-white/60"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}
        >
          No vague phases, no vanity deliverables. We scope the work,
          design the system, write the code, test it, and deploy it.
          You see progress every week.
        </p>

        <hr className="border-none border-t border-white/10" />

        <div className="flex flex-wrap gap-[3vw]">
          {[
            {
              step: '01',
              title: 'Discovery & Scope',
              body: 'We review your idea, repo, existing site, or brief — then write a clear scope with timeline and cost.',
            },
            {
              step: '02',
              title: 'Architecture First',
              body: 'Backend structure, database schema, API design, and component system before a pixel of UI is designed.',
            },
            {
              step: '03',
              title: 'Build & Review',
              body: 'Weekly builds shared in staging. You review, give feedback, and see real progress — not promises.',
            },
            {
              step: '04',
              title: 'Deploy & Hand Off',
              body: 'Production deployment, documentation, and a clean handoff. You own everything — code, assets, access.',
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white/30">{step}</p>
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-white/90">{title}</p>
              <p
                className="leading-relaxed text-white/50"
                style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* ── 04 Why Choose Us ──────────────────────────────── */}
      <FlowSection
        aria-label="Why choose IBNAY"
        style={{ backgroundColor: '#0D1525', color: '#F5F5F7' }}
      >
        <p className="pt-20 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#2cBFAE]/60">
          04 — Why Choose Us
        </p>

        <hr className="border-none border-t border-white/10" />

        <div>
          <h2
            className="font-display font-bold leading-[0.88] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)' }}
          >
            One Team.
            <br />
            Full Stack.
          </h2>
        </div>

        <hr className="border-none border-t border-white/10" />

        <p
          className="mt-auto ml-auto max-w-[55ch] text-right font-normal leading-relaxed text-white/60"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}
        >
          Most agencies split design, frontend, and backend across
          different vendors. IBNAY is one team that owns all of it —
          which means faster delivery, zero blame-shifting, and a
          codebase that actually holds together.
        </p>

        <hr className="border-none border-t border-white/10" />

        <div className="flex flex-wrap gap-[3vw]">
          {[
            { stat: '40+',  label: 'Projects Shipped' },
            { stat: '12+',  label: 'Industries Served' },
            { stat: '4–10', label: 'Weeks to Launch' },
            { stat: '98%',  label: 'Documented Handoffs' },
          ].map(({ stat, label }) => (
            <div key={label} className="min-w-[140px] flex-1">
              <p
                className="font-display font-bold text-[#2cBFAE]"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
              >
                {stat}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">{label}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* ── 05 Start a Project ────────────────────────────── */}
      <FlowSection
        aria-label="Start a project"
        style={{ backgroundColor: '#5a4fcf', color: '#fff' }}
      >
        <p className="pt-20 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/50">
          05 — Let&apos;s Build
        </p>

        <hr className="border-none border-t border-white/20" />

        <div>
          <h2
            className="font-display font-bold leading-[0.88] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)' }}
          >
            Ready
            <br />
            To
            <br />
            Begin?
          </h2>
        </div>

        <hr className="border-none border-t border-white/20" />

        <p
          className="max-w-[50ch] font-normal leading-relaxed text-white/70"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}
        >
          Send us what you have — an idea, a Figma file, a broken repo,
          a slow website. We&apos;ll review it and tell you exactly what
          it needs and how long it will take.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-[#5a4fcf] transition-all hover:bg-white/90"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="font-mono text-sm uppercase tracking-widest text-white/60 underline underline-offset-4 transition-colors hover:text-white"
          >
            View All Services
          </Link>
        </div>
      </FlowSection>

    </FlowArt>
  )
}
