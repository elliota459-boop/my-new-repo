import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design & Development Services | IBNAY',
  description: 'Professional web design, custom development, websites, web apps, ecommerce, Web3 dApps, and rescue rebuilds. From $8,000.',
  keywords: 'web design services, website development, custom web application, website builder, ecommerce development, Web3 development, website redesign, web app development',
  openGraph: {
    title: 'Web Design & Development Services | IBNAY',
    description: 'We build websites and web apps that work. Custom development, ecommerce, Web3, and rescue projects.',
    type: 'website',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}