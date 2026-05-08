import type { Metadata } from 'next'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics, GoogleAnalyticsNoScript, MetaPixel } from '@/components/Analytics'
import { ScrollProgress } from '@/components/ScrollProgress'
import { AnimationProvider } from '@/components/AnimationProvider'
import { ClientEngagementLayer } from '@/components/ClientEngagementLayer'

export const metadata: Metadata = {
  title: 'IBNAY | Digital Studio',
  description: 'IBNAY designs and builds websites, web applications, and Web3 products. Custom frontend, solid backend, smart contracts, and deployment. From landing pages to dApps, one team handles the full stack.',
  keywords: 'web design, web development, website builder, custom website, web application, SaaS MVP, dashboard development, ecommerce development, React developer, Next.js developer, Web3 development, dApp development, smart contract developer, Solidity developer, project rescue, AI prototype cleanup, frontend development, backend development, API development',
  icons: {
    icon: '/brand/logo.png',
  },
  openGraph: {
    title: 'IBNAY | Digital Studio',
    description: 'IBNAY designs and builds websites, web applications, and Web3 products. Custom frontend, solid backend, smart contracts, and deployment. One team, full stack, shipped products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <MetaPixel />
      </head>
      <body className="antialiased">
        <GoogleAnalyticsNoScript />
        <ScrollProgress />
        <ClientEngagementLayer />
        <AnimationProvider>
          <SmoothScroll>
            <Navigation />
            <main>
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </AnimationProvider>
      </body>
    </html>
  )
}
