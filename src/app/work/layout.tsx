import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design & Development Portfolio | IBNAY Case Studies',
  description: 'See our web design and development case studies. Custom websites, web apps, ecommerce systems, Web3 dApps, and rescue rebuilds.',
  keywords: 'web design portfolio, website development case studies, web app examples, ecommerce projects, Web3 case studies, website redesign examples',
  openGraph: {
    title: 'Web Design & Development Portfolio | IBNAY',
    description: 'Real projects, shipped. Explore our portfolio of custom websites, web apps, ecommerce, and Web3 development projects.',
    type: 'website',
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}