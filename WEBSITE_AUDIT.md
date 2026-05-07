# IBNAY Website Audit

Date: 2026-05-07

## Summary

Local production build passes, and local `main` matches GitHub `origin/main`. The live Netlify site still appears to be serving an older build: the live homepage does not include the new SEO-ready metadata, header logo asset, or teal palette, and the live contact page does not include `info@ibnayiftibe.com`.

Most likely deployment blocker: the project uses Next `16.2.4`, but Netlify is configured to build with Node `18`. The installed Next package requires Node `>=20.9.0`, while this machine is using Node `24.12.0`, so local builds can pass while Netlify CI fails.

## Verification Performed

- Local build: `npm.cmd run build` passed.
- Diff check: `git diff --check` passed.
- Lint command: `npm.cmd run lint` failed because `next lint` is no longer valid in this setup.
- GitHub sync: local `HEAD` matches `origin/main` at `bb1d2b04d183329cb6bf5fdb91b6ac6aa234e56c`.
- Live homepage check: `https://ibnayiftribe.com` returns `200`, but does not show recent local content.
- Live contact check: `https://ibnayiftribe.com/contact` returns `200`, but does not show the updated inbox email.
- Live sitemap check: `https://ibnayiftribe.com/sitemap.xml` returns `404`.

## Major Issues

### 1. Netlify build Node version likely blocks live deploy

Priority: Critical

Evidence:
- `package.json:17` uses Next `^16.2.4`.
- `node_modules/next/package.json` requires Node `>=20.9.0`.
- `netlify.toml:6` pins Netlify to `NODE_VERSION = "18"`.
- Local machine uses Node `v24.12.0`.

Impact:
- Netlify CI/CD may fail before publishing, which explains why GitHub has the latest code but the live site still shows older content.

Recommended fix:
- Change Netlify build environment to Node `20` or `22`.
- Prefer `NODE_VERSION = "22"` in `netlify.toml`.
- Trigger a fresh Netlify production deploy after the change is pushed.

### 2. Live site is serving an older deployment

Priority: Critical

Evidence:
- Live homepage does not contain the new `SEO-ready websites` metadata.
- Live homepage does not contain `ibnay-header-logo`.
- Live homepage does not contain the new teal palette value.
- Live contact page does not contain `info@ibnayiftibe.com`.
- GitHub `origin/main` already matches local `HEAD`.

Impact:
- Users are seeing stale content even though the repository is current.

Recommended fix:
- First fix the Node version mismatch.
- Then trigger Netlify deploy from GitHub or run a production deploy from Netlify.
- Check Netlify deploy logs for the latest failed production deploy.

### 3. Sitemap is missing and robots points to old domain

Priority: High

Evidence:
- `public/robots.txt:5` points to `https://ibnay.studio/sitemap.xml`.
- Live `https://ibnayiftribe.com/sitemap.xml` returns `404`.
- `public/robots.txt:10` disallows `/_next/`, which may block important render assets from crawlers.

Impact:
- Google indexing and SEO discovery can be weaker.
- Search engines may see an outdated sitemap URL.

Recommended fix:
- Add `public/sitemap.xml` or generate a sitemap through Next metadata routes.
- Update robots sitemap to `https://ibnayiftribe.com/sitemap.xml`.
- Remove `Disallow: /_next/` unless there is a specific reason to block Next assets.

### 4. Contact form email routing still needs Netlify dashboard confirmation

Priority: High

Evidence:
- `public/__forms.html` defines the Netlify form.
- `src/app/contact/page.tsx:31` sets `info@ibnayiftibe.com`.
- Netlify form submissions do not automatically email a custom inbox unless form notifications are configured in Netlify.

Impact:
- Form submissions may be stored in Netlify but not emailed to the team.

Recommended fix:
- In Netlify dashboard, open Forms > contact > Notifications.
- Add email notification recipient: `info@ibnayiftibe.com`.
- Submit one production test enquiry after deployment.

### 5. Case-study detail pages still use generic stock visuals

Priority: Medium

Evidence:
- `src/app/work/[id]/page.tsx:23`, `src/app/work/[id]/page.tsx:60`, `src/app/work/[id]/page.tsx:97`, and `src/app/work/[id]/page.tsx:134` still use Unsplash hero images.
- `src/app/work/[id]/page.tsx:46`, `src/app/work/[id]/page.tsx:83`, `src/app/work/[id]/page.tsx:120`, and `src/app/work/[id]/page.tsx:157` still use generic gallery images.

Impact:
- The homepage and work listing now feel more human, but clicking into a project returns to abstract/generic visuals.

Recommended fix:
- Replace the case-study hero and gallery images with the same human/project-specific image direction used on selected work.
- Prefer local optimized assets for important portfolio visuals.

## Minor Issues

### 6. Insights article links are placeholders

Priority: Medium

Evidence:
- `src/app/insights/page.tsx:138` uses `href="#"`.

Impact:
- Users click a “Read Article” CTA and go nowhere.
- It weakens trust and can hurt engagement.

Recommended fix:
- Either create article detail pages or hide/disable the CTA until articles exist.

### 7. Newsletter form has no submit handler

Priority: Medium

Evidence:
- `src/app/insights/page.tsx:188` renders a newsletter form without a real action, API route, or Netlify form setup.

Impact:
- Users can enter email addresses but nothing useful happens.

Recommended fix:
- Connect it to Netlify Forms, a mailing tool, or remove it until the workflow is ready.

### 8. Meta Pixel uses placeholder ID

Priority: Medium

Evidence:
- `src/components/Analytics.tsx:76` calls `fbq('init', 'PIXEL_ID')`.

Impact:
- Browser may load Meta Pixel script but tracking will not work correctly.

Recommended fix:
- Replace `PIXEL_ID` with the real Meta Pixel ID, or remove Meta Pixel until the account is ready.

### 9. Google Ads conversion target is placeholder

Priority: Medium

Evidence:
- `src/app/contact/page.tsx:100` uses `AW-CONVERSION_ID`.

Impact:
- Contact form conversions will not track correctly in Google Ads.

Recommended fix:
- Replace with the real Google Ads conversion destination, or remove the event until configured.

### 10. Lint script is broken

Priority: Low

Evidence:
- `package.json:9` runs `next lint`.
- `npm.cmd run lint` fails with `Invalid project directory provided ...\lint`.

Impact:
- CI cannot rely on linting.
- Developers may assume lint is passing when the command itself is invalid.

Recommended fix:
- Replace with an ESLint command compatible with this project, for example `eslint . --ext .ts,.tsx`.
- Add an ESLint config if one is missing.

### 11. Phone and WhatsApp numbers are inconsistent

Priority: Low

Evidence:
- Footer WhatsApp uses `+91 7861010850` and `+372 54185107`.
- Contact page and CTA still use `+91 7990866163`.

Impact:
- Visitors may not know which number is official.

Recommended fix:
- Decide the primary sales number.
- Use the same phone/WhatsApp numbers consistently across footer, contact page, mobile menu, and CTA sections.

### 12. Remote images are used for important portfolio visuals

Priority: Low

Evidence:
- `next.config.js:8` allows Unsplash images.
- `next.config.js:12` allows Pexels images.

Impact:
- Portfolio visuals depend on third-party image availability and can shift if URLs or providers change.

Recommended fix:
- Download final approved portfolio visuals into `public/work/`.
- Reference local images for important case-study and selected-work assets.

## Recommended Fix Order

1. Update Netlify Node version to `22` and redeploy.
2. Confirm Netlify deploy logs show a successful production deploy.
3. Fix sitemap and robots domain.
4. Configure Netlify form email notification.
5. Replace case-study detail visuals.
6. Fix placeholder tracking IDs and broken insights/newsletter links.
7. Clean up phone number consistency.
8. Replace remote portfolio images with local optimized assets.
