import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Website Design & Development Agency',
  description: 'IBNAY is a website design and development agency. We build professional websites from scratch, redesign existing ones, and rescue broken or half-built projects. One team, full stack, no handoffs.',
  keywords: 'website design agency, website development company, about IBNAY, web design team, fix broken website, website rescue agency, website redesign company, full stack web agency',
  openGraph: {
    title: 'About IBNAY | Website Design & Development Agency',
    description: 'We build new websites, fix broken ones, and rescue half-built projects. One team handles design, frontend, backend, and deployment.',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}