import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | IBNAY Digital Studio',
  description: 'Terms and conditions for working with IBNAY Digital Studio.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-foreground-muted">
              Last updated: December 19, 2024
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-foreground-muted">
              By engaging IBNAY Digital Studio for services, you agree to these Terms of Service. If you disagree with any part of these terms, please do not use our services.
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              2. Services Overview
            </h2>
            <p className="text-foreground-muted">
              IBNAY Digital Studio provides web design, web development, brand strategy, and related digital services. Specific deliverables, timelines, and pricing will be outlined in individual project proposals.
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              3. Payment Terms
            </h2>
            <ul className="text-foreground-muted list-disc pl-6 space-y-2">
              <li>Standard projects: 40% deposit, 35% at design approval, 25% at launch</li>
              <li>Payments are due within 7 days of invoice</li>
              <li>Late payments may incur a 1.5% monthly service charge</li>
              <li>All fees are non-refundable once work has commenced</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              4. Project Timeline
            </h2>
            <p className="text-foreground-muted">
              Project timelines begin upon receipt of signed proposal and deposit. Timelines may be affected by:
            </p>
            <ul className="text-foreground-muted list-disc pl-6 space-y-2">
              <li>Client feedback delays (beyond 5 business days)</li>
              <li>Scope changes requested by client</li>
              <li>Third-party service delays</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-foreground-muted">
              Upon final payment, clients receive full ownership of:
            </p>
            <ul className="text-foreground-muted list-disc pl-6 space-y-2">
              <li>Final design files and assets</li>
              <li>Custom code and development work</li>
              <li>Content management systems (excludes licensed third-party tools)</li>
            </ul>
            <p className="text-foreground-muted mt-4">
              IBNAY retains the right to display completed work in our portfolio and marketing materials unless otherwise agreed in writing.
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              6. Revisions Policy
            </h2>
            <p className="text-foreground-muted">
              Each project includes a specified number of revision rounds. Additional revisions beyond the included rounds will be billed at our standard hourly rate.
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              7. Confidentiality
            </h2>
            <p className="text-foreground-muted">
              We maintain strict confidentiality regarding all client information, business strategies, and proprietary data shared during our engagement.
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-foreground-muted">
              IBNAY's liability is limited to the total amount paid for the specific project. We are not liable for indirect, consequential, or incidental damages.
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              9. Contact
            </h2>
            <p className="text-foreground-muted">
              For questions about these terms, contact us at{' '}
              <Link href="mailto:info@ibnayiftribe.com" className="text-accent hover:text-accent-light">
                info@ibnayiftribe.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
