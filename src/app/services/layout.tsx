import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design, Development & Rescue Services',
  description: 'Professional website design, custom web development, website redesign, broken website repair, and project rescue. Web apps, ecommerce, and Web3. One team, full stack. From $8,000.',
  keywords: 'website design agency, web design services, website development company, website redesign, fix broken website, broken website repair, web application development, SaaS MVP, ecommerce website design, website rescue service, Web3 development, website not working fix',
  openGraph: {
    title: 'Website Design, Development & Rescue Services | IBNAY',
    description: 'We build new websites, redesign broken ones, and rescue half-built projects. Custom web apps, ecommerce, and Web3. One team, full stack.',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional custom website typically starts from $8,000. The final cost depends on the number of pages, design complexity, whether you need a CMS, ecommerce, forms, integrations, or a custom backend. We provide a detailed quote after a free 30-minute project review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fix a website that was built by someone else?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Website rescue and rebuild is one of our core services. We audit the existing codebase, identify what is working and what is broken, and either repair or rebuild it cleanly. We work with WordPress sites, abandoned agency projects, AI-generated prototypes, and half-built custom codebases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard business website or landing page typically takes 4–8 weeks from kickoff to launch. A full web application, SaaS MVP, or ecommerce platform takes 8–16 weeks depending on complexity. We give you a realistic timeline in our project scope document before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a website redesign and a website rebuild?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A redesign keeps the existing code structure and updates the visual design, layout, and content. A rebuild replaces the codebase entirely — usually because the existing structure is too fragile, slow, or hard to maintain. After our audit, we recommend which approach saves more time and budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to hire a web designer and a web developer separately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not with IBNAY. We are a full-stack website agency — one team handles UI/UX design, frontend development, backend engineering, database setup, and deployment. This means no handoffs between vendors, no gaps in responsibility, and one point of contact throughout the project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you only build Web3 and blockchain websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Web3 is one service line alongside our core website and web application work. We build professional business websites, service pages, ecommerce stores, SaaS MVPs, dashboards, and portals. Web3 is available for clients who need it but is not a requirement.',
      },
    },
  ],
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}