import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About IBNAY | Web Design & Development Studio',
  description: 'IBNAY is a web design and development studio that builds websites, custom web apps, ecommerce, Web3 products, and rescue rebuilds.',
  keywords: 'web design studio, website development company, about IBNAY, web development team, digital studio',
  openGraph: {
    title: 'About IBNAY | Web Design & Development Agency',
    description: 'Learn about IBNAY - a web studio that builds websites and apps that actually work. Custom development, Web3, and rescue projects.',
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