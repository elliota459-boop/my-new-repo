import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | IBNAY Digital Studio',
  description: 'Our commitment to protecting your privacy and data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-foreground-muted">
              Last updated: December 19, 2024
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-foreground-muted">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="text-foreground-muted list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone)</li>
              <li>Company information</li>
              <li>Project requirements and budget</li>
              <li>Communication history</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-foreground-muted">
              We use the information we collect to:
            </p>
            <ul className="text-foreground-muted list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Communicate about projects and proposals</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-foreground-muted">
              We do not sell or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="text-foreground-muted list-disc pl-6 space-y-2">
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-foreground-muted">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              5. Your Rights
            </h2>
            <p className="text-foreground-muted">
              You have the right to:
            </p>
            <ul className="text-foreground-muted list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction or deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mt-8 mb-4">
              6. Contact Us
            </h2>
            <p className="text-foreground-muted">
              For privacy-related questions, contact us at{' '}
              <Link href="mailto:privacy@ibnay.studio" className="text-accent hover:text-accent-light">
                privacy@ibnay.studio
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
