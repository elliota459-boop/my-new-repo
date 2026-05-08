import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design & Development Services | IBNAY',
  description: 'Professional web design, custom development, SEO websites, web apps, ecommerce, Web3 dApps, and rescue rebuilds. From $8,000. Get found, trusted, and contacted online.',
  keywords: 'web design services, website development, custom web application, SEO website, ecommerce development, Web3 development, website redesign, web app development',
  openGraph: {
    title: 'Web Design & Development Services | IBNAY',
    description: 'We build websites and web apps that get businesses found, trusted, and contacted. Custom development, SEO, ecommerce, Web3, and rescue projects.',
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