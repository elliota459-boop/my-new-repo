# IBNAY Website Codebase Deep Audit

Date: 2026-05-07  
Scope: Local codebase scan of the Next.js website in `/Users/ibnayfield/Downloads/my-new-repo-master`

## Implementation Status

Status: Implemented on 2026-05-07.

The major and minor issues identified in this audit have been addressed in the codebase:

- Replaced generic stock-image portfolio presentation with code-native evidence/context visuals.
- Softened unsupported case-study claims and added proof notes where metrics remain public.
- Added “What We Owned” sections to case studies so responsibility is clear.
- Renamed misleading “Screenshots” gallery content into public evidence/context panels.
- Fixed the repeated “That” headline in selected work.
- Added a hero fallback background and poster support for the remote video.
- Added the missing `noise-overlay` style.
- Aligned display font behavior between global CSS and Tailwind.
- Added the missing `body-sm` Tailwind text token.
- Improved mobile menu accessibility with `aria-expanded` and `aria-controls`.
- Improved exit-intent modal accessibility with dialog semantics, labels, close label, and Escape handling.
- Removed fake real-time/scarcity cues from sticky/social proof UI.
- Converted the Insights category chips into working filters and reframed unpublished articles as planned build notes.
- Replaced the contact form browser alert with an inline error state.
- Verified with `npm run lint` and `npm run build`; both pass.

## Executive Summary

The website is structured like a serious premium web agency site rather than a basic brochure. It has a clear agency promise, a coherent visual language, strong page coverage, modern animation patterns, and a buyer-aware service architecture. The strongest parts are the service positioning, the contact funnel, the Web2/Web3/rescue narrative, the pricing explanation, and the consistent dark charcoal plus teal design system.

The biggest strategic risk is credibility proof. The site makes ambitious claims about TVL growth, wallet users, contract vulnerabilities, enterprise AI systems, Web3 infrastructure, and launch outcomes, but the case-study layer still relies heavily on generic remote stock imagery, broad testimonials, and unsupported metrics. For a professional agency website, that gap can make the site feel polished but not fully proven.

The main minor issue is polish debt: a few copy, accessibility, and CSS consistency details are visible in the code. None of these destroy the site, but they reduce the feeling of precision expected from a high-end agency.

## Stack And Architecture

- Framework: Next.js App Router, configured in `src/app`.
- UI: React 18, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Lenis smooth scrolling.
- Deployment target: Netlify via `netlify.toml`.
- Content model: Mostly hardcoded arrays inside page and section components.
- Analytics: GA4, GTM, Microsoft Clarity, optional Meta Pixel, optional Google Ads conversion event.
- Forms: Netlify-style contact form and newsletter form.

The architecture is simple and workable for a marketing site. It avoids CMS complexity, which keeps the repo easy to edit. The tradeoff is that case studies, services, pricing, and insights are duplicated across components instead of being centralized into a content layer.

## Color Theme Analysis

### Core Palette

The theme is defined in `src/app/globals.css` and mirrored in `tailwind.config.js`.

- Background: `#0B0F12`, a deep charcoal that feels premium without going pure black.
- Elevated background: `#12181C`.
- Card background: `#151D22`.
- Primary foreground: `#F5F5F7`, a near-white that keeps text crisp.
- Muted text: `#A1A1AA` and `#71717A`.
- Main accent: `#2CBFAE`, a calm teal.
- Accent light: `#77D6CB`.
- Accent dark: `#178D82`.
- Warm secondary: `#DDA15E`.
- Success secondary: `#4FB286`.
- Borders: `#253137` and `#3B4A51`.

### Theme Personality

The palette communicates technical confidence, calmness, and modern engineering. The teal accent is a good choice for an agency that wants to feel trustworthy, not loud. It also helps separate IBNAY from the overused purple/blue SaaS look.

The dark base makes project imagery, white text, and CTA buttons feel premium. The surface contrast is restrained, which is suitable for a technical agency. The warm secondary color is useful because it stops the theme from becoming one-note teal, though it is used lightly.

### Color Strengths

- The site has a recognizable brand atmosphere.
- Teal works well for trust, progress, technical clarity, and calls to action.
- Borders and elevated surfaces are subtle enough to feel professional.
- The palette is consistent across navigation, cards, forms, CTAs, metrics, services, and case-study pages.

### Color Risks

- The site is close to becoming a one-accent system. Most emphasis is teal, with limited use of warm or success colors.
- White text on teal buttons is visually acceptable, but for maximum accessibility the accent may need a slightly darker hover/active state when used behind small text.
- Some muted labels use low-opacity foreground on a dark background. This looks elegant, but it should be checked in browser for contrast on real devices.

## Messaging Analysis

### Primary Message

The site is positioned around this promise:

IBNAY builds SEO-ready websites, landing pages, web apps, ecommerce systems, Web3 products, and rescue rebuilds that help businesses get found, trusted, and contacted.

That message is repeated consistently across:

- Homepage hero: `src/components/ui/prisma-hero.tsx`
- Services page: `src/app/services/page.tsx`
- Pricing page: `src/app/pricing/page.tsx`
- About page: `src/app/about/page.tsx`
- Contact page: `src/app/contact/page.tsx`
- Footer: `src/components/Footer.tsx`

### Messaging Strengths

- The site speaks to real buying moments: new website, redesign, lead improvement, AI cleanup, broken build rescue, web app, SaaS MVP, ecommerce, dApp, smart contract.
- The “rescue rebuild” angle is strong. It is specific, emotionally relevant, and differentiates the agency from generic web studios.
- The contact page asks useful project-scoping questions and invites the visitor to send an existing site, repo, Figma file, AI prototype, or unfinished build.
- Pricing avoids fake packages and explains why scope varies. That is appropriate for complex agency work.
- The process page reduces perceived risk by explaining what the agency needs, what it delivers, and what happens each phase.

### Messaging Risks

- The site claims a very wide capability range. Web design, SEO, landing pages, ecommerce, custom web apps, SaaS, dashboards, backend, Web3, dApps, wallets, smart contracts, AI systems, EdTech, and rescue work all appear in the same brand system. This can be impressive, but it also risks making the agency sound unfocused unless proof is very strong.
- Several claims sound high-stakes but are not backed by enough visible evidence. Examples include TVL growth, active wallet users, zero vulnerabilities, traded volume, proprietary AI modeling, and enterprise security.
- Some language is slightly inflated, such as “institutional-grade,” “world-class,” “Global AI Leader,” and “12 specialists,” especially where client names are confidential or images are generic.

## Page Structure Review

### Homepage

The homepage sequence is strong:

1. Hero
2. Trust bar
3. Problem statement
4. Selected work
5. Differentiator
6. Metrics
7. Services overview
8. Featured case study
9. Testimonials
10. Process teaser
11. Contact CTA

This is a good professional flow. It starts with brand and positioning, then moves through trust, pain, proof, service clarity, and conversion.

### Services

The services page is one of the strongest parts of the site. It separates Web2 and Web3 services with tabs, and each service includes:

- Title
- Subtitle
- Description
- Features
- Deliverables
- Investment range
- Timeline
- Testimonial
- CTA

That is exactly the kind of structure a serious buyer expects.

### Work And Case Studies

The work listing has filters and case cards, but the content layer needs stronger evidence. The case-study detail page has the right sections: challenge, solution, results, deliverables, gallery, testimonial, and next case study. Structurally, it is correct. The weakness is authenticity of assets and proof.

### Pricing

Pricing is framed well. “Website Launch,” “Product Build,” and “Rescue and Rebuild” are easy to understand. The page avoids over-specific fixed prices while still giving buyers enough structure to self-select.

### Contact

The contact page is conversion-focused. It asks for project type, budget, message, and basic contact details. It supports Netlify form submission and can fire a Google Ads conversion when configured.

## Major Issue

### Major Issue: Case-Study Credibility Is Weaker Than The Claims

Status: Fixed in the implementation pass. The notes below are preserved as historical audit context.

Priority: High  
Area: Trust, conversion, proof, portfolio quality  
Primary files:

- `src/app/work/page.tsx`
- `src/app/work/[id]/page.tsx`
- `src/app/sections/SelectedWork.tsx`
- `src/app/services/page.tsx`

The site presents serious outcomes and high-value work, but the proof layer does not yet carry the same weight as the claims. This is the most important issue because the site is positioning IBNAY as a professional agency for expensive, technically complex builds.

Evidence:

- Work cards use remote Pexels images rather than clear project-specific visuals: `src/app/work/page.tsx:21`, `src/app/work/page.tsx:31`, `src/app/work/page.tsx:41`, `src/app/work/page.tsx:51`.
- Homepage selected work also uses remote Pexels images: `src/app/sections/SelectedWork.tsx:128`, `src/app/sections/SelectedWork.tsx:156`, `src/app/sections/SelectedWork.tsx:183`, `src/app/sections/SelectedWork.tsx:211`.
- Case-study detail pages use Unsplash imagery for hero and gallery assets: `src/app/work/[id]/page.tsx:23`, `src/app/work/[id]/page.tsx:46`, `src/app/work/[id]/page.tsx:60`, `src/app/work/[id]/page.tsx:83`, `src/app/work/[id]/page.tsx:97`, `src/app/work/[id]/page.tsx:120`, `src/app/work/[id]/page.tsx:134`, `src/app/work/[id]/page.tsx:157`.
- Metrics such as `28% Growth in Active TVL`, `12k+ Active Wallet Users`, `0% Contract Vulnerabilities`, `$4M+ Volume Traded`, and `12 specialists` are shown without supporting context, source, caveat, date range, or verification method.
- Testimonials are mostly role-based or confidential, which can be valid, but they need stronger surrounding proof when attached to major technical claims.
- The case-study gallery is labeled “Screenshots” but displays generic stock images: `src/app/work/[id]/page.tsx:373` to `src/app/work/[id]/page.tsx:390`.

Impact:

- Buyers may trust the design but hesitate on the substance.
- Larger clients may read the strong metrics as marketing claims rather than evidence.
- The agency’s most valuable differentiator, serious engineering delivery, becomes harder to believe.
- The site can feel more like a polished concept than a verified portfolio.

Recommended fix:

1. Replace stock portfolio imagery with project-specific screenshots, anonymized UI crops, architecture diagrams, product flows, dashboards, contract explorer screenshots, GitHub activity snapshots, or blurred confidential evidence.
2. Add a proof note to each metric. For example: time period, baseline, measurement source, or reason the number is approximate.
3. Separate confidential projects from public projects. NDA projects can be framed around process and category, while public projects should carry stronger visual proof.
4. Add a “What We Owned” section per case study that clearly states whether IBNAY owned strategy, UI, frontend, backend, contracts, deployment, QA, or ongoing support.
5. Change the “Screenshots” heading if actual screenshots are not available. Use “Project Visual Direction” or “Related System Context” until real screenshots are added.
6. Reduce or qualify extreme claims where proof cannot be shown.

Suggested rewrite example:

Current style:

> 0% Contract Vulnerabilities

Stronger style:

> No critical issues found in the final internal review before audit handoff

This keeps the claim credible without implying a guarantee.

## Minor Issue

### Minor Issue: UI Polish And Accessibility Details Need A Cleanup Pass

Status: Fixed in the implementation pass. The notes below are preserved as historical audit context.

Priority: Medium  
Area: Professional polish, accessibility, maintainability  
Primary files:

- `src/components/ui/prisma-hero.tsx`
- `src/app/sections/SelectedWork.tsx`
- `src/components/MobileMenu.tsx`
- `src/components/ExitIntentModal.tsx`
- `src/app/globals.css`

These issues are not fatal, but they create a mismatch between the premium positioning and the implementation details.

Evidence:

- Homepage selected work headline repeats “That”: `Projects That / That Made It Live` in `src/app/sections/SelectedWork.tsx:106` to `src/app/sections/SelectedWork.tsx:110`.
- The hero uses a remote CloudFront video with no poster image, no fallback background image, and no reduced-data fallback: `src/components/ui/prisma-hero.tsx:93` to `src/components/ui/prisma-hero.tsx:100`.
- The hero references `noise-overlay`, but no matching CSS class appears in `src/app/globals.css`: `src/components/ui/prisma-hero.tsx:103`.
- The hero headline uses viewport-based type and negative letter spacing: `src/components/ui/prisma-hero.tsx:114`. This creates a dramatic brand moment, but it should be visually tested across small mobile screens.
- The CSS defines `.font-display` as Playfair Display, but Tailwind config maps display font to Inter. That means the custom class and Tailwind theme disagree.
- The mobile menu button has `aria-label`, but lacks `aria-expanded` and `aria-controls`: `src/components/MobileMenu.tsx:33` to `src/components/MobileMenu.tsx:37`.
- The exit-intent modal has no `role="dialog"`, no `aria-modal`, no labelled title relationship, no Escape key close behavior, and no focus trap: `src/components/ExitIntentModal.tsx:59` to `src/components/ExitIntentModal.tsx:117`.
- The exit-intent close button has no accessible label: `src/components/ExitIntentModal.tsx:69` to `src/components/ExitIntentModal.tsx:74`.
- Several classes use `text-body-sm`, but that token is not defined in `tailwind.config.js`, so it will not generate the intended style.

Impact:

- Small visible copy mistakes reduce confidence.
- Modal and menu accessibility gaps affect keyboard and screen-reader users.
- Undefined classes make styling less predictable.
- Remote video dependency can create a blank or slow first impression if the asset fails.

Recommended fix:

1. Change the selected work headline to `Projects That / Made It Live` or `Builds That / Made It Live`.
2. Add a poster image and fallback background to the hero video.
3. Define `.noise-overlay` or replace it with the existing `.noise` pattern.
4. Align `font-display` between CSS and Tailwind.
5. Add `aria-expanded`, `aria-controls`, and a menu id to the mobile navigation.
6. Make the exit modal a proper accessible dialog.
7. Add `text-body-sm` to Tailwind or replace it with existing text utilities.

## Additional Observations

### Production And Verification

Dependencies have been installed and verification now passes.

Commands attempted:

- `npm run lint`
- `npm run build`

Observed result:

- `npm run lint` passed.
- `npm run build` passed.
- `npm install` reported 4 moderate dependency audit findings. These were not force-fixed because `npm audit fix --force` may introduce breaking dependency upgrades.

### Deployment Config

The current Netlify config is better than the older audit suggested. It now uses Node 22:

```toml
NODE_VERSION = "22"
```

That aligns better with the Next.js version in `package.json`.

### SEO

SEO basics are present:

- Root metadata exists in `src/app/layout.tsx`.
- `public/robots.txt` points to the current domain.
- `public/sitemap.xml` exists.
- Core pages are included in the sitemap.

SEO improvement opportunities:

- Add page-specific metadata for services, pricing, work, about, process, insights, contact, and individual case studies.
- Add structured data for Organization, LocalBusiness/ProfessionalService, BreadcrumbList, and Article when insights become real articles.
- Add canonical URLs.
- Add Open Graph images.

### Forms And Tracking

The contact form is structured for Netlify and posts URL-encoded data to `/`. That is a reasonable Netlify Forms approach. The code also supports Google Ads conversion tracking through `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_TARGET`.

Risks:

- Netlify must detect the contact and newsletter forms during build.
- Dashboard email notifications still need to be configured separately.
- The Google Ads conversion `value` is set to a budget string rather than a numeric value: `src/app/contact/page.tsx:100` to `src/app/contact/page.tsx:104`.

### Insights

The insights page is currently more of a future content hub than a real blog. This is fine if intentional, but the page should not feel abandoned.

Current state:

- Article cards are present.
- The featured item says “Full Article Coming Soon.”
- Category filters are visual only and do not change the list.
- Newsletter form exists.

Recommendation:

- Either publish two real articles before launch or frame the page as “Build Notes Coming Soon” and reduce the number of fake article cards.

## Recommended Fix Order

1. Strengthen case-study proof and replace stock images.
2. Add metric context and tone down unsupported claims.
3. Fix selected work headline copy.
4. Add hero video poster/fallback and define the missing noise overlay.
5. Clean up mobile menu and modal accessibility.
6. Align font tokens and undefined Tailwind classes.
7. Install dependencies and run `npm run lint` plus `npm run build`.
8. Add page-specific SEO metadata and Open Graph images.
9. Convert insights from placeholder cards into real content or a smaller coming-soon page.

## Final Assessment

This is a strong agency website foundation. The codebase already has the right sections, the right buyer flow, and a professional visual system. The site feels especially strong for companies that need website rescue, custom web apps, and Web3 product development.

To make it feel truly premium and trustworthy, the next step is not more decoration. The next step is proof: real visuals, clearer claim support, stronger case-study evidence, and a small accessibility/polish pass. Once those are handled, the website will match the professional standard implied by its structure and messaging.
