# Sage Devs: original versus V2 audit and recovery plan

Audit date: 23 November 2026 (Asia/Karachi). Status: **audit checkpoint; recovery has not started**.

## Finding

The current redesign replaced too much of the original website. Preserving URLs and copying some data did not preserve the original experience. The original implementation must be the foundation for recovery.

- All **15 original page routes** still have page files, but most have substantially reduced compositions.
- Of **59 original component/block files reachable from the original page and root-layout imports, 55 are no longer reachable**. All 55 remain unchanged on disk. This is source import reachability, not a claim that every imported component rendered in every original state.
- The four original component paths still reached are Careers, ChatWidget, Footer and ProjectCalculator. All four were modified; only Careers substantially retains its original implementation.
- All **nine original homepage section components** are disconnected.
- The rich mega menu, **16 testimonials including six video entries**, technology tabs, AI demonstrations, and several conversion forms are missing from the current experience.
- The current featured-work selection used the wrong source. Existing fallback project data was substituted for the active original homepage and case-study catalogs.
- Valuable source and assets remain recoverable. A blind reset is unnecessary and would discard useful work.

This document supersedes any implication in the earlier REDESIGN_AUDIT.md that retaining routes or extracted data constituted functional parity.

## Evidence, scope and safety

| Item | Observed state |
| --- | --- |
| Working branch | `redesign/premium-sage-devs-v2` |
| Original commit | `1735ce807f88abd946adc5c2954f7321734e88be` |
| Local HEAD, main, origin/main and v1-original-website | All resolve to that original commit |
| GitHub main and backup tag | Read-only remote ref checks also returned that commit |
| Redesign changes | Uncommitted and unpushed; current work is in the working tree |
| Production | No deployment, merge, DNS or hosting-setting changes performed |
| Original comparison copy | Read-only Git archive extracted into `/tmp/sage-original-audit` |
| Application edits after the latest correction | Stopped; this checkpoint adds audit documentation |

Sources inspected: original and current route files, shared layout, navigation, all original component/block files, project/testimonial/resource/pricing data, assets, forms, configuration and working-tree diffs. The companion `ORIGINAL_VS_V2_INVENTORY.json` records original/current imports and per-component source equality, motion references, event handlers and forms.

The inventory follows local TypeScript/JavaScript imports and dynamic string imports. It is a source inventory, not a runtime coverage report. Unused baseline files are explicitly separated below. Existing labels, metrics and testimonials are source content, not independently verified business claims.

The earlier preview was inspected on desktop and partially on mobile. Full route, interaction, accessibility and responsive parity have **not** been verified. An earlier build passed before later changes; that is not validation of the current tree. TypeScript checks passed during the work, but the final build/lint/browser gate remains outstanding. The original baseline build encountered remote Google Fonts network access failure; that is not evidence of an original application failure. The preview tab was no longer open at the end of this audit.

## Original homepage, in original order

| Original section/source | Original value and behavior | Current result | Recovery |
| --- | --- | --- | --- |
| `sections/HeroSection.tsx` | Agency identity, original copy, client/technology imagery, three capability cards, layered animated presentation | Replaced with new copy and KhanJee/Conso composition; original trust/capability content omitted | Upgrade the original hero and retain its content; use real priority-project imagery and refined entrance motion |
| `sections/TrustedBySection.tsx` | Eight client logos, moving logo strip, six statistic blocks and CTA | Entire component absent | Restore client assets and trust section; distinguish supplied claims from verified facts without deleting the section |
| `sections/Services.tsx` | Nine offerings with descriptions, features, technology labels, links and motion | Four broad accordion entries replace the detailed overview | Restore original offerings and hierarchy; improve grouping, readability and glass treatments |
| `sections/CaseStudies.tsx` | Three detailed cases: 14islands, KLMNKO and Kelvin; imagery, challenge/solution/results, technology, scope/duration and selected-case presentation | New WorkShowcase prioritizes KhanJee, Conso and AceFrame; original detailed presentation absent | Adapt this original component to prioritize KhanJee, KLMNKO and Kelvin Melgar using existing case records/assets |
| `sections/WhyChooseUs.tsx` | Benefits, supporting content, stats and conversion links | Replaced by generic studio/collaboration prose | Restore original business reasons and CTAs; refine composition |
| `TestimonialSlider.tsx` | 16 testimonials, client attribution, image/video assets, six video entries, automatic loop, pause on hover, previous/next and video popup | No testimonial section | Restore the original data and interaction model; improve motion, focus, controls and mobile layout |
| `sections/tabs.tsx` | Ten technology groups, AI subgroups, icons, technology links and selectable panels | Four static groups with 12 technology labels | Restore the complete tabbed capability explorer with accessible tab controls |
| `sections/extra.tsx` | AWS SageMaker/Bedrock content, technology/partnership visuals and responsive business-challenge carousel | Omitted | Restore capability content/carousel; substantiate formal partnership wording separately |
| `sections/FinalCTA.tsx` | Name/email/company/budget/message inquiry form, feedback states, booking/email/work links | Link-only shared CTA | Restore the working form, original endpoint and payload; retain accessible error handling |

The ten technology groups are AI, frontend, backend, mobile, big data, databases/data storage, cloud databases/warehouses/storage, DevOps, ecommerce and CMS. Condensing these into four labels is a content and interaction regression.

## Shared layout, navigation and footer

### Mega menu

Original source: `src/blocks/Components/GooeyNav/GooeyNav.tsx`; original configuration also lives in `src/app/layout.tsx`.

The original eight primary destinations were Home, Let's Talk AI, Services, Case Studies, Pricing, Resources, About and Contact. The original menu contains:

- Large service groups for Web Development, Web Development Resources, AI Solutions and Design & Strategy, with featured content and CTA areas.
- Case-study groups by industry and technology, with a showcase area.
- A distinct AI knowledge menu with five actual article entries, imagery and an AI Knowledge Hub sidebar.
- Desktop hover delays/cancellation, click state, positioned overlays, active navigation indication, opening/closing motion and keyboard event handling.
- Mobile nested dropdown state, grouped links and the specialized AI content.

Current Header substitutes four desktop links and a flat mobile list. It does not preserve this navigation depth. Recovery must edit and reconnect the original mega-menu component, preserving its information hierarchy while correcting focus management, Escape dismissal, pointer transitions, mobile accordion behavior and invalid destinations. Existing keyboard handlers alone do not prove accessibility.

Some original child links target pages/anchors that do not exist in the original snapshot. Record and repair each target against the real route/section inventory; do not remove whole menu categories to hide those defects.

### Footer and global behavior

Original Footer contains a newsletter form, detailed service/case-study/resource/about links, contact/booking links, phone, Wapda Town/Lahore location, social links, legal navigation and animated depth. Current Footer omits the newsletter, phone and much of the section navigation. Recover the original footer composition and content, then refine typography, columns and background effects.

Original layout also connected Lenis SmoothScroll, a custom cursor, shortcut/devtools blocking, chat, Analytics and structured data. Per the latest brief, **do not restore scroll interception, the custom cursor or shortcut blocking**. Their removal is intentional, not a feature restoration target. Preserve ordinary browser controls and natural scrolling. Recover useful visual motion independently.

Keep valid route-specific SEO and analytics while checking original verification tags, manifest, icons and structured data. Do not reintroduce a home-page canonical on every page. PWA configuration remains present; generated service-worker behavior needs production-build testing.

## Every original route

| Route | Original foundation | Current preservation / regression | Selective recovery action |
| --- | --- | --- | --- |
| `/` | Nine sections listed above | Original compositions all disconnected | Recover original order, content and interactions; redesign section by section |
| `/about` | HeroSection, OurStory, OurProcess, Team, Technologies, Culture, CTASection | Team names/roles/images partly extracted; bios and much of the page's story, interactive process, moving team strip, technology visuals and culture presentation omitted | Reconnect all seven original components; preserve founder/social content, team bios and individual section identities |
| `/services` | ServicesIndexPage; hero; four main tabs; five development and three design sub-tabs; ten detailed service modules; final inquiry section | Ten short static rows replace the detailed tabbed page and form | Recover existing index and modules; preserve hash-selected service navigation and form; improve tab accessibility |
| `/case-studies` | Hero, ten detailed case records, selected-case view, ecommerce-growth narrative, CTA/form | Replaced with six entries from a different data file; long case content and selection experience lost | Restore original case catalog and details, original four-part composition, relevant category/deep-link behavior and inquiry form |
| `/projects` | HeroProj, Proj category explorer, CTA; 50 category entries across ten categories | Extracted catalog and category filter survive; descriptions truncated to first sentence; original hero/CTA/layout removed | Upgrade original project explorer; retain full descriptions, images, URLs, categories and interaction; 50 entries include duplicates across categories, not 50 verified unique clients |
| `/letstalkai` | Nine distinct sections: hero, second section, consultation, ML, NLP, computer vision, strategy, transformation guide, final inquiry | Five plain summaries/shared process replace rich content and demonstrations; seven-field form represented by a generic replacement | Recover all original sections, demos, diagrams and form semantics; optimize effects without deleting interactions |
| `/pricing` | Nine standard packages plus Everything Included; tabs/cards, detailed comparison, quote form, consultation actions, 14-day date picker and seven time slots | Prices/package arrays extracted; original interaction/design reduced; comparison loses feature matrix; booking becomes unrestricted native date field; payload field changed | Restore original pricing UI and comparison; keep package data exact; restore booking constraints and `message` payload key |
| `/resources` | Hero, GuidesTemplates, TechnologyStack, ProjectCalculator, SupportCenter | Six downloads retained; cards lose supporting metadata/preview behavior; technology groups reduced; calculator rewritten; support tabs replaced by links | Recover five original sections, download metadata, support tabs and calculator presentation; separately verify estimator behavior changes |
| `/blog` | Ten articles; category/search; list/detail state and legacy hash URLs; article navigation, TOC, share/copy controls | Article data copied; list/filter survive in replacement; ten new slug routes added; original article composition/TOC lost | Preserve all articles and original useful reading controls; keep slug URLs additively with legacy-hash/back-forward compatibility |
| `/faq` | Grouped FAQ component, custom accordion, supporting context and unique page layout | Text extracted; native details allow multiple open items; original context/icons/composition stripped | Upgrade original FAQ component, accessible toggles and accurate visible-content schema |
| `/contact` | Distinct hero, contact-method benefits, info/social panels, four-field form, hours, FAQs and final CTA | Endpoint/field names and hours retained; methods, FAQs, social presentation and bespoke structure removed | Recover original page sections; apply accessible labels/status/error handling directly to original form |
| `/careers` | Careers component with searches, jobs, expansion state, conditional application form | Main component retained with label/error fixes; wrapper/schema/global styling changed | Keep functional original component and targeted fixes; restore necessary page metadata and check conditional form flows/styles |
| `/privacy` | Detailed legal content with decorative client-side canvas | Content largely retained; canvas/client effects removed; styling changed | Keep legal wording, review presentation and metadata; canvas removal can remain as a measured performance choice |
| `/terms` | Detailed terms and client-rendered date; original canonical mismatch | Text largely retained, canonical corrected; dynamic date replaced with an unverified fixed date | Keep canonical correction; preserve terms; resolve date provenance rather than asserting a new legal revision date |
| `/sitemap` | Grouped navigation cards/sections, icons, hover state and section links | Flat 14-link list replaces grouped sitemap | Restore useful grouping/section targets, repair invalid links and refine visual hierarchy |

Resources `WebinarsTalks` and `resources/CaseStudies` files were not mounted by the original resources page. Their absence is not a new regression. Original placeholder webinar/community/tutorial links still need an honest destination or unavailable state.

## Portfolio provenance and priority

The active original homepage used `sections/CaseStudies.tsx`. The active original case-study page used `casestudy/casestudy.tsx`. Neither was driven by the six-entry fallback `src/data/projects.tsx` now used for the page. Selecting that fallback was the central portfolio mistake.

| Project | Existing source/assets | Existing destination | Recovery priority |
| --- | --- | --- | --- |
| KhanJee | Original detailed case catalog and portfolio; `/proj/khanjee.webp`; fallback also uses `/proj/projectSix.webp` | `https://khanjeecanada.com` | Homepage first |
| KLMNKO | Original homepage, case catalog and portfolio; `/proj/klmnko.webp`, `/proj1/klmnko-removebg-preview.webp` | `https://klmnko.de` | Homepage second |
| Kelvin Melgar | Original homepage, case catalog and portfolio; `/proj/kelvin.webp` | `https://kelvinmelgar.com` | Homepage third |
| AIDN | Original portfolio; `/proj1/adin-removebg-preview.webp` | `https://aidn.org.au` | Retain catalog and relevant case presentation |
| Priority IB | Original portfolio; `/proj1/priority-removebg-preview.webp` | `https://priorityib.com.au` | Retain catalog and relevant case presentation |
| Cedar High United | Not located by name in the inspected tagged/current source or asset filenames | Not established | Search older history and existing asset records during recovery; do not invent a URL or substitute another project |
| Loudoun Stars Rentals | Not located by name in the inspected tagged/current source or asset filenames | Not established | Same provenance check; explicitly keep this requested project on the recovery list |

The ten original detailed case records are 14islands, Abhishek Jha, KLMNKO, Alaro, Roberto Coin, Reech, Barrel, KhanJee, Kelvin and Good Looking. Preserve this source inventory and verify factual conflicts; presence in the code is not independent proof of client ownership or outcomes.

Some existing KhanJee descriptions disagree on Toronto versus Montreal. Preserve the source record and flag the contradiction for factual resolution; do not add new location/outcome claims. Existing case metrics should not be amplified or replaced with fabricated improvements.

## Testimonials

The original, unchanged `TestimonialSlider.tsx` contains these 16 attributed records: Igor Vainshtein; Jake (video); Bavalle Team; Kelvin Melgar; Ana Kurkina (video); Priority Team; AIDN Leadership; Emily (video); VrdeOS Founders; Mehfil Management; Jason (video); Eli Burch; KhanJee Leadership; Andrew (video); Jake Matluck; Randy (video).

Its data, star values, text, attribution and imagery remain in the source. The continuous GSAP strip uses repeated data, pauses on hover, supports manual previous/next and opens video content. None of that is mounted in the current redesign.

Recovery: retain all records/assets; improve layout and typography, provide clear previous/next and pause controls, pause appropriately for keyboard interaction, disable automatic travel for reduced motion, and make video opening/closing/focus accessible. Repeated slides must not create duplicate keyboard/screen-reader clutter.

Content inconsistencies exist in the original, including KhanJee Leadership attributed to “Immigration Consulting Services” and Kelvin's company label. Preserve records for review rather than silently deleting them. Existing aggregate review/rating statements also require factual confirmation; do not manufacture replacements.

## Forms and integrations

Endpoints below are public client form identifiers, not secret credentials. Audit compares source contracts; no real submissions were sent as part of this audit.

| Placement | Original Formspree ID and fields | Current state / recovery requirement |
| --- | --- | --- |
| Homepage FinalCTA | `mdkwzkzj`: name, email, company, budget, message | Missing; restore full form and feedback states |
| Services finalsection | `xldpndqz`: name, email, phone, service, message | Missing; restore service-specific inquiry |
| Case-study CTA | `xzzjgdbq`: name, company, email, message | Missing; restore case-study conversion |
| Contact | `xeorkorj`: name, email, subject, message | Endpoint/keys retained in replacement; restore original context and verify required/optional rules |
| AI final section | `xeorkowb`: name, email, company, aiInterest, projectScale, timeline, message | Endpoint/keys retained; defaults and required choices changed; recover original option semantics |
| Pricing | `myznjkzv`: name, email, message, budget; selectedDate/selectedTime appended when chosen | **Regression:** textarea now submits `projectDetails`, not `message`; new `plan` field, changed budget options and unrestricted date UI need review |
| Careers | `mnnggbpp`: fullName, email, phone, location, experience, currentRole, currentCompany, portfolio, linkedin, github, availability, expectedSalary, noticePeriod, skills, education, coverLetter, referral; selected position included from state | Original component retained; keep label and non-success response fixes; check conditional fields and payload |
| Resources newsletter | `xldpndqz`: JSON email | Replacement uses FormData email plus source; preserve downstream expectations and original placement |
| Footer newsletter | `xeorkowb`: email | Missing; same ID as original AI form; preserve original routing unless explicitly corrected |
| Chat lead capture | `xldpndqz`: name, email, source plus `_subject`, timestamp, page_url | Name/email/source retained but contextual metadata omitted; restore contract and original lead flow |

Chat's original request directly referenced a public OpenRouter environment variable in client code. The new server route is a useful security improvement to retain selectively. The original widget's quick actions, conversation presentation, lead flow and useful states should be recovered around the server transport. Current rewrite also simplifies response formatting, timestamps, notification behavior and animations.

The server proxy includes validation, timeout and in-memory rate limiting, but production-origin behavior, provider/model availability and distributed rate limiting remain unverified. Do not describe this as completed security hardening. No credential values were inspected or changed. Keep credentials server-side; any historically exposed credential would require owner-managed rotation.

Retain original Calendly, WhatsApp, email, phone, social and external-project destinations, with an explicit broken-link repair list. Test form success, non-2xx, timeout, double-submit prevention and retained input with intercepted/mock requests before any authorized live delivery test.

## Interactive tools, content and motion

| Feature | Original behavior | Current difference / recovery requirement |
| --- | --- | --- |
| Service explorer | Four main tabs; development/design sub-tabs; hash selection | Static rows; restore original navigation/state and complete modules |
| AI consultation | Selectable active node and service diagram | Absent; recover demonstration |
| Machine learning | Four selectable input/process/output flow demonstrations | Absent; recover flow controls/content |
| NLP | Demo selection, typing/result states and processing stages | Absent; preserve simulation semantics without implying a live model if none exists |
| Computer vision | Active service, integration capabilities, process and hover details | Absent; recover section and controls |
| AI strategy/transformation | Interactive neural/phase content, active/hover states and depth | Absent; retain informative interaction, reduce expensive continuous effects |
| Project filtering | Ten categories, original images/links/descriptions | Filter/data partly retained; restore full descriptions and original visual/interaction character |
| Case detail | Selection state and richer content presentation | Reduced to short summaries/external links; restore detail and dismissal/navigation |
| Downloads | Six existing ZIP downloads with titles, metadata and card interactions | Paths retained; supporting metadata/presentation reduced; verify files and download responses |
| Calculator | Project type, team/timeline selectors, feature controls, quantity and summary | Rewritten with selects and new pure estimator; original rates retained but quantity/floor/reset behavior changed |
| Support Center | Live support, tutorials, community, FAQ tabs; six support FAQs; WhatsApp/phone/email | Simplified links; restore useful tabs/content while fixing original placeholders |
| Pricing | Package comparison and consultation interactions | Feature matrix and booking experience reduced; restore original data and useful controls |
| Blog | Ten articles, search/category, detail view, TOC, share/copy, adjacent article navigation, history/hash state | Data/filters retained; slug routes added; preserve original reading tools and old links |
| About | Rotating hero, process step/play states, team movement/pause, technology/culture visuals | Mostly static generic sections; restore useful section-specific behavior |
| FAQ | Grouped accordion with single-open state | Native multi-open details changes behavior; modernize original component intentionally |

Calculator changes must be treated as proposed fixes, not established parity: the new quantity clamp is 1–100, the price floor multiplies by quantity rather than using the original base-only floor, feature quantity behavior changes, and project-type changes reset timeline. Compare representative estimates and business intent before accepting changes. Recover the original visual tool independently of estimator fixes.

Original motion technologies already include GSAP/ScrollTrigger, Framer Motion/motion and CSS. Recover hero entrances, section/text reveals, project/image transitions, mega-menu motion, testimonial movement and button feedback inside the original components. Use scoped effects with cleanup, offscreen pausing, reduced-motion branches and mobile budgets. Avoid restoring every particle/canvas loop merely because it existed. Avoid hidden content that depends on animation succeeding to become readable.

## Improvements worth retaining, selectively

| Current work | Keep / qualify |
| --- | --- |
| Server metadata and `src/lib/seo.ts` | Keep per-route canonical/social defaults; validate original metadata/verification/schema coverage and duplicate tags |
| Server chat proxy | Keep transport/security direction; integrate into original widget and finish validation |
| Skip link, focus styles, form labels/status/error handling | Apply to recovered original components; current presence is not an accessibility pass |
| Careers non-2xx handling | Keep targeted error correction and label associations |
| Self-hosted font files/licenses | Useful to remove build-time remote font dependency; typography must still serve the original identity |
| Reduced-motion handling / removal of cursor and blocking | Keep; apply to recovered motion rather than globally erasing useful animation |
| Article slug URLs | Keep as additive SEO/navigation improvement while preserving complete content and old links |
| Central brand configuration | Keep the integration point; existing official logo remains pending; schema/favicon/social placements still need complete alignment |
| Extracted data files | Useful references, not authority over active original data; compare field-for-field before reuse |
| Current visual experiments | Preserve for reference; carry over only useful typography/material/spacing decisions into original components |

Do not keep the generic page/template architecture merely because it is already written. Do not keep shortened content, the fallback portfolio choice, missing forms or flattened navigation as “simplification.”

`next.config.ts`, package manifests/lockfile and deployment configuration have not been redesigned. `public/sw.js` and `public/sitemap-0.xml` contain generated build churn; handle those deliberately at the final build stage instead of treating them as intentional feature changes.

The local development-server log also records a concrete `/favicon.ico` 500 caused by a conflicting public file and app file. Both `public/favicon.ico` and `src/app/favicon.ico` exist in the original and current trees, so this is an original defect still unresolved, not a newly removed feature. Resolve ownership of that icon route during brand/metadata recovery. The task-owned development server was stopped at this audit checkpoint.

## Recovery plan to execute after this audit checkpoint

### 1. Preserve both versions before integration

Create a recoverable local checkpoint of the current tracked diff **and untracked source/assets/docs**. Keep the original tag immutable. Use the existing tagged archive to compare individual files. Do not hard-reset, bulk-checkout the tree or delete the experimental components. No production action is part of this plan.

### 2. Reconnect the original shell and homepage foundation

Restore the original page composition by editing imports and preserving useful server metadata. Reconnect the original mega menu and footer, then all nine original homepage sections. Scope the design tokens/styles so the current global replacement CSS cannot flatten original layouts. Apply selected form/security/accessibility fixes as reviewed changes to the original code.

First validation surface: original navigation plus hero. Refine frosted navigation, large grouped overlays, navy/graphite and light compositions, imagery, type hierarchy and entrance motion in those original components. Verify desktop, tablet, mobile and keyboard states before broad page styling.

Then recover homepage work with **KhanJee → KLMNKO → Kelvin Melgar**, using existing descriptions/assets and large project presentation areas. Restore testimonials, trust, services, benefits, technology tabs/AI capabilities, supported technology partnership content and the inquiry form. Keep every original section accounted for.

### 3. Validate one complete homepage before internal-page redesign

Compare original and recovered content/behavior side by side. Check all mega-menu groups, hover-to-panel travel, click toggles, focus order, Escape, mobile nested navigation, selected-case behavior, testimonial controls/video, technology tabs and form states. Inspect actual rendered pages at desktop/tablet/mobile widths and with reduced motion. Save comparison screenshots and record remaining differences. Do not begin another mass template rewrite.

### 4. Recover and improve each internal route in place

Recommended order: services and case studies (content/form losses); projects and AI (catalog/demos); pricing and resources (tools/downloads); about, blog and contact; FAQ, careers, legal and sitemap. Use the route table as the parity checklist. Recover each original composition before visual refinement, preserving unique section structure. Repair existing bugs without removing the feature that exposed them.

For source gaps such as Cedar High United and Loudoun Stars Rentals, search older Git history and asset provenance before requesting missing factual information. Do not fill gaps with invented projects or outcomes.

### 5. Verify functionality and engineering claims

- All 15 original routes plus additive article routes render; valid redirects/deep links/history work.
- Every navigation destination and in-page anchor is tested; original broken targets are explicitly resolved.
- All original forms are present with endpoint, payload and state parity; use mocks for submission failure/success checks.
- Project categories/details, testimonial slider/video, technology/service tabs, AI demos, pricing/booking, calculator and FAQ/careers states work.
- All six downloads are real and accessible; article content and reader controls are complete.
- Desktop, tablet and mobile have no overflow or obstructed controls; reduced motion and keyboard access are tested.
- Inspect console/network errors, metadata/canonicals/structured data, image/font loading, contrast/focus and animation cleanup.
- Run final lint, TypeScript and production build on the recovered tree. Inspect the built app, including PWA/cache behavior; a build alone is insufficient.
- Record remaining factual questions and any deliberate behavior changes. No new testimonials, achievements, statistics or project outcomes.

The official new logo can be integrated when supplied through the existing brand configuration and original header/footer placements, including mobile, favicon, metadata and social imagery. It does not require another header rebuild.

### Acceptance condition

Every valuable original section, content source and interaction is either preserved and verified or has an explicit, justified correction recorded. The resulting site must remain recognizably the original Sage Devs website, with stronger composition, glass surfaces, motion, typography and responsive behavior. No merge into main, tag change or production deployment is authorized by this recovery plan.

## Appendix: component-level source inventory

The generated tables below enumerate original component/block files. “Disconnected” means no longer reachable through the audited page/layout imports. Event/motion details are in `ORIGINAL_VS_V2_INVENTORY.json`. Page-inline features are covered in the route, form and interaction tables above.

### Previously reachable original files

| Original file | Current source | Current import reachability |
| --- | --- | --- |
| `src/blocks/Backgrounds/Squares/Squares.tsx` | Unchanged | Disconnected |
| `src/blocks/Components/GooeyNav/GooeyNav.tsx` | Unchanged | Disconnected |
| `src/components/Careers.tsx` | Modified | Connected |
| `src/components/ChatWidget.tsx` | Modified | Connected |
| `src/components/Footer.tsx` | Modified | Connected |
| `src/components/SmoothScroll.tsx` | Unchanged | Disconnected |
| `src/components/TestimonialSlider.tsx` | Unchanged | Disconnected |
| `src/components/aboutus/CTASection.tsx` | Unchanged | Disconnected |
| `src/components/aboutus/Culture.tsx` | Unchanged | Disconnected |
| `src/components/aboutus/HeroSection.tsx` | Unchanged | Disconnected |
| `src/components/aboutus/OurProcess.tsx` | Unchanged | Disconnected |
| `src/components/aboutus/OurStory.tsx` | Unchanged | Disconnected |
| `src/components/aboutus/Team.tsx` | Unchanged | Disconnected |
| `src/components/aboutus/Technologies.tsx` | Unchanged | Disconnected |
| `src/components/casestudy/casestudy.tsx` | Unchanged | Disconnected |
| `src/components/casestudy/cta.tsx` | Unchanged | Disconnected |
| `src/components/casestudy/ecommercegrowth.tsx` | Unchanged | Disconnected |
| `src/components/casestudy/hero.tsx` | Unchanged | Disconnected |
| `src/components/customcursor.tsx` | Unchanged | Disconnected |
| `src/components/faq.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/AIConsultation.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/AIStrategy.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/AITransformationGuide.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/ComputerVision.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/LetsTalkAIFinalSection.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/LetsTalkAIHero.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/LetsTalkAISecondSection.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/MachineLearning.tsx` | Unchanged | Disconnected |
| `src/components/lets-talk-ai/NaturalLanguageProcessing.tsx` | Unchanged | Disconnected |
| `src/components/proj/cta.tsx` | Unchanged | Disconnected |
| `src/components/proj/heroproj.tsx` | Unchanged | Disconnected |
| `src/components/proj/proj.tsx` | Unchanged | Disconnected |
| `src/components/resources/GuidesTemplates.tsx` | Unchanged | Disconnected |
| `src/components/resources/HeroSection.tsx` | Unchanged | Disconnected |
| `src/components/resources/ProjectCalculator.tsx` | Modified | Connected |
| `src/components/resources/SupportCenter.tsx` | Unchanged | Disconnected |
| `src/components/resources/TechnologyStack.tsx` | Unchanged | Disconnected |
| `src/components/sections/CaseStudies.tsx` | Unchanged | Disconnected |
| `src/components/sections/FinalCTA.tsx` | Unchanged | Disconnected |
| `src/components/sections/HeroSection.tsx` | Unchanged | Disconnected |
| `src/components/sections/Services.tsx` | Unchanged | Disconnected |
| `src/components/sections/TrustedBySection.tsx` | Unchanged | Disconnected |
| `src/components/sections/WhyChooseUs.tsx` | Unchanged | Disconnected |
| `src/components/sections/extra.tsx` | Unchanged | Disconnected |
| `src/components/sections/tabs.tsx` | Unchanged | Disconnected |
| `src/components/seo/StructuredData.tsx` | Unchanged | Disconnected |
| `src/components/services/AISolutions.tsx` | Unchanged | Disconnected |
| `src/components/services/BrandIdentity.tsx` | Unchanged | Disconnected |
| `src/components/services/CloudDevOps.tsx` | Unchanged | Disconnected |
| `src/components/services/DigitalStrategy.tsx` | Unchanged | Disconnected |
| `src/components/services/EcommerceSolutions.tsx` | Unchanged | Disconnected |
| `src/components/services/MaintenanceSupport.tsx` | Unchanged | Disconnected |
| `src/components/services/SaaSProductDev.tsx` | Unchanged | Disconnected |
| `src/components/services/UIDesign.tsx` | Unchanged | Disconnected |
| `src/components/services/WebAppDevelopment.tsx` | Unchanged | Disconnected |
| `src/components/services/WordPressServices.tsx` | Unchanged | Disconnected |
| `src/components/services/finalsection.tsx` | Unchanged | Disconnected |
| `src/components/services/herosection.tsx` | Unchanged | Disconnected |
| `src/components/shortcuts.tsx` | Unchanged | Disconnected |

### Files already outside the original page/layout import graph

These are not counted as newly removed features.

| Original file | Current source |
| --- | --- |
| `src/blocks/Backgrounds/Threads/Threads.tsx` | Unchanged |
| `src/blocks/TextAnimations/BlurText/BlurText.tsx` | Unchanged |
| `src/blocks/TextAnimations/FallingText/FallingText.tsx` | Unchanged |
| `src/blocks/TextAnimations/TrueFocus/TrueFocus.tsx` | Unchanged |
| `src/components/AnimatedCounter.tsx` | Unchanged |
| `src/components/ProjectCard.tsx` | Unchanged |
| `src/components/SkillTag.tsx` | Unchanged |
| `src/components/resources/CaseStudies.tsx` | Unchanged |
| `src/components/resources/WebinarsTalks.tsx` | Unchanged |
| `src/components/ui/progressive-blur.tsx` | Unchanged |
