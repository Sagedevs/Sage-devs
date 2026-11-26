# Sage Devs — conversion, portfolio, branding and SEO implementation

Updated 26 November 2026 (Pakistan Standard Time). Work was prepared on `redesign/premium-sage-devs-v2`; the user authorized pushing and production deployment on 26 November after final checks. Main starts at `1735ce807f88abd946adc5c2954f7321734e88be`. The latest instruction is to commit and push for Vercel to detect; no manual production promotion is being performed.

## Implemented in the existing project

- Homepage FAQ now reuses the existing FAQ component/data. Five relevant questions include the confirmed hours. Native buttons have associated answer regions, expanded state, inert collapsed content, wrapping text and separate icon columns. A single-column layout applies through 900px; explicit equal container padding replaces competing calculated widths. Mobile side padding is 20px. Dedicated FAQ content remains, including all 19 original answers plus the new hours answer.
- `src/lib/business.ts` centralizes `https://calendly.com/sagedevs-info`, contact details, consultation slots, and Monday–Saturday evenings, **6:00 PM – 2:00 AM PKT (Pakistan Standard Time)**. The underlying shift ends the next day. Following the owner’s later correction, visible business hours use US Eastern Time: Monday–Saturday, 8 AM–4 PM EST / 9 AM–5 PM EDT, automatically adjusted for daylight saving. The footer omits the next-morning explanation. Local structured data retains the correct overnight PKT schedule. Contact, footer, homepage inquiry, About, FAQ, retained support content and schema use the shared schedule. Existing inquiry forms and submission destinations are preserved.
- All active Calendly links now read the shared configuration, including retained legacy CTA components. Source search finds one Calendly literal: the approved URL. The production HTML audit checks 86 rendered booking links for exact destination and external-link behavior. The destination returned HTTP 200.
- All 16 review texts match the live Sage Devs page captured on 25 November; six have matching original videos. The large quote/video slider is restored following browser feedback: previous/next controls, keyboard arrows, touch gestures, thumbnails only for video reviews, no automatic advancement. Google artwork is reused from the existing site's assets. The requested publication/import wording and source link are removed from the product UI; provenance remains in `docs/qa/review-source.json`. No Google API integration, independent verification claim, inflated total or aggregate-rating schema is added.
- Homepage featured work is **KhanJee Canada → 14islands Creative Agency → Kelvin Melgar Photography**. Barrel Marketing was removed from active data and public assets at the owner’s request; its original files are archived under `assets/portfolio-archive/`. Lingua Nova Institute and Elite Creations PK are added to the existing project and case-study data using inspected public content, original client imagery and confirmed technologies. Eleven static, crawlable project detail routes extend the existing case-study section; preview modals remain. Descriptions omit invented metrics or delivery timelines for new clients.
- The portfolio opens with all 35 distinct websites. The remaining 51 category entries are retained in the data; duplicate sites across industries are shown once in the All projects view. Lingua Nova and Elite Creations appear together in the middle of the All projects grid. Redundant Explore project buttons were removed from that grid; linked titles and external Visit website actions remain. Category filters and search remain. Work navigation includes Home, View All Projects, substantial image previews, case studies and the two latest additions. Home is also a direct main-navigation item.
- Shared primary, secondary and glass button styles give key actions clear borders, contrast, pressed states and focus indicators. Ordinary content links remain links.
- Motion durations/easing are centralized. App Router template entrance animation does not intercept routing or control scroll position. Navigation, project previews and modal entrances use restrained transitions. Atmospheric backgrounds are limited to **two pilot sections: homepage hero and selected work**. Their lightweight CSS transform/opacity animation pauses offscreen, in hidden tabs and for reduced-motion preferences. No new dependency, canvas, video or WebGL system was added. No site-wide expansion occurred without visual/performance verification.
- Official wordmark/emblem assets remain in header, footer, compact placements, favicon, Apple touch icon, installable app icons and social metadata. Legacy public brand/icon URLs redirect to official versions; original files are retained. The shared Brand component supports a dark backing when used on a light surface, preserving the silver artwork and geometry. PWA metadata now includes a stable app id, description, language and categories.
- The PWA no longer precaches approximately **89.3 MiB of source ZIP downloads**, or nonessential project imagery, during installation. Downloads remain available on demand. Generated service-worker checks found no ZIP or legacy logo/icon precache entries. Self-hosted fonts, responsive Next Image handling and lazy chat loading are retained.

## Technical SEO

- All 36 generated public pages have unique titles/descriptions, self-consistent canonical and Open Graph URLs, social cards, a single H1, image alt attributes, and valid JSON-LD syntax. Internal routes, fragments and local image references resolve in the generated output.
- Sitemap contains exactly the 36 generated public routes, including all project and article detail pages, with no duplicates or invented build-time modification dates. Robots permits public crawling and excludes `/api/`; API responses carry `X-Robots-Tag: noindex, nofollow`.
- Consistent Organization/ProfessionalService, WebSite, BreadcrumbList, Service, BlogPosting, founder Person and project WebPage data. Lahore/Pakistan and worldwide service are supported by visible content. No street address, map coordinates, ratings, language alternates or verification tokens were invented. City-only business data is not a promise of LocalBusiness rich-result eligibility.
- Overnight hours use a single opening-hours record for each starting day, 18:00 to 02:00, consistent with [Google's overnight-hours guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business#business-hours).
- Removed the unused placeholder schema implementation containing a fictional street address/telephone and fake video metadata. Source artwork and original project data are preserved.
- The existing Google verification HTML file is served unchanged. A filename was incorrectly being used as a Google meta token; that incorrect meta value is removed. Optional `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` environment variables now accept real supplied tokens.
- The `www.sagedevs.tech` hostname redirects to the canonical non-www hostname, retaining paths; trailing-slash normalization works. Old brand/icon URL redirects were checked locally. Service-to-project and project-to-service contextual links are present.
- No search-result star manipulation. Google does not make self-serving Organization/LocalBusiness reviews eligible for review stars; see [Google's review-snippet guidelines](https://developers.google.com/search/docs/appearance/structured-data/review-snippet#self-serving-reviews).

## Verification performed

| Check | Result |
| --- | --- |
| TypeScript | Pass (`npm run typecheck`) |
| ESLint | Pass, zero errors/warnings (`npm run lint`) |
| Automated tests | 11 pass: chat validation/rate limiting/provider fallback, overnight schedule, featured ordering, new project completeness, review/video preservation |
| Production build | Pass (`npm run build`) |
| Generated HTML/SEO/internal-link audit | 36 pages, zero issues (`npm run audit:seo`) |
| Local HTTP audit | 36 pages + 14 branding/SEO assets all HTTP 200 |
| Sitemap/PWA audit | 36 canonical URLs, no duplicates/missing routes, no ZIP precache |
| App icon dimensions | All four manifest entries match actual PNG sizes |
| Booking destination | Exact requested Calendly URL returns HTTP 200 |
| Review source comparison | All 16 quote texts match the original live page |
| Repository whitespace | Pass (`git diff --check`) |
| Main branch | Unchanged hash verified |

Production build reports approximately 189 kB first-load JavaScript on the homepage, 110 kB on project detail pages, and 101 kB shared JavaScript. These are build artifact sizes, **not Lighthouse or Core Web Vitals scores**. Next.js was updated to 15.5.29 with the matching ESLint configuration, React/React DOM 19.3.1, Sharp 0.35.5, and compatible dependency security updates. Build still emits a Node deprecation notice. Two audit entries remain for Next’s pinned PostCSS build dependency (one high direct advisory, one moderate inherited advisory); CSS inputs are repository-owned. A Next 16 migration was not introduced just before release. No claim of a clean dependency security audit is made.

An initial build collided with dev artifacts and failed to resolve `/_document`. The owned preview was stopped, generated `.next` artifacts were moved to a temporary backup, and subsequent clean builds passed. No repository reset was used.

Machine-readable evidence is in `docs/qa/production-audit.json`, `local-http-audit.json`, `sitemap-pwa-audit.json`, `pwa-icons.json`, `review-source.json` and `external-links.json`.

## External link findings and owner input

The initial read-only external audit checked 74 URLs: 60 returned successful responses; the remaining 14 were three client sites plus LinkedIn profile/share endpoints. After the latest requested removals, generated pages contain 72 unique external links.

- `barrelmarketing.com`: DNS resolution failed; the owner explicitly requested complete removal. It is absent from active code and public assets; the historical record remains in a source archive.
- `intensemeals.com`: HTTPS certificate does not match the hostname, including the www variant. No certificate checks were bypassed and no unrelated replacement business was substituted.
- `benjaminfranklinplumbing.com`: HTTP/2 protocol error; an HTTP/1.1 retry returned an empty reply. Browser/manual availability remains uncertain.
- LinkedIn profile and share endpoints return 403/login restrictions to automated requests. These are inconclusive, not proven broken links.
- The owner answered the URL query by removing Barrel Marketing. A corrected Intense Meals URL remains outstanding; its legitimate portfolio entry is retained.

No changes to external websites, social accounts, Search Console or Bing accounts were made. Search Console/Bing ownership verification and sitemap submission require owner account access or valid verification tokens. Google review profile/per-review URLs would be needed for direct Google source links or independent review verification; no account integration is required for the current static review presentation.

## Still unverified

- Full-route visual coverage remains incomplete. The homepage FAQ has now been inspected in-browser at 390px and 768px, and layout bounds measured at 1440px. All three had scrollWidth equal to clientWidth (375, 753 and 1425 respectively; browser scrollbar occupies 15px). FAQ click and Space keyboard toggling passed.
- The video dialog opens, Escape closes it, and focus returns to the play control in the real browser. The thumbnail loads at 480px natural width. Playback of every external video, touch swiping, mobile navigation, full page-transition scroll restoration, and installed PWA presentation remain to be comprehensively checked.
- Lighthouse, runtime animation frame cost, Core Web Vitals and real Google/Bing rich-result/indexing behavior. The two background pilots must be inspected/measured before broader use.
- Live Formspree submissions, real AI-provider requests and booking completion were not performed; no test inquiries or messages were sent to the business.

The updated production build passed locally. Browser access became available on 26 November for the targeted checks above. Publishing is now authorized by the owner, conditional on the technical checks passing.

## Latest mobile corrections

- The homepage principles section now uses its own `home-principles` class. This prevents legacy About-page grid and diamond decoration rules from affecting it. Grid tracks and children can shrink, the native accordions retain their interactions, and the mobile text uses the full balanced container width.
- Testimonial media has explicit width constraints and no conflicting fixed minimum height with its aspect ratio on mobile. Mobile type, spacing, caption and play-control sizes are refined; the header is more compact and accounts for the safe area.
- All six real video thumbnails were downloaded from YouTube’s image CDN and optimized as local WebP files. Originals and source mapping are retained in `assets/testimonials/`. A failed image leaves the usable play control and caption without a broken image icon.
- New editorial portfolio covers are saved in `public/proj/lingua-nova-cover.webp` and `public/proj/elite-creations-cover.webp` (1600×900). Generated masters and exact prompts are in `assets/projects/generated/` and `assets/projects/THUMBNAIL_PROMPTS.md`. These are project covers, not claimed screenshots.

Release check on 26 November: production build, ESLint, TypeScript, all 11 tests, and generated SEO audit pass after the dependency updates. The generated audit checks 36 pages and 86 booking links with zero metadata/internal-link issues. Earlier HTTP and sitemap/PWA JSON reports retain their recorded timestamps and may cover the preceding 37-route build; the production audit reflects the current 36-route build.
