# Siliconglen New Website: Comprehensive Brief and Build Reference

Prepared 13 September 2026. This is the single reference for building the proposed replacement site.

**Site:** siliconglen.com, an expert-led professional site for Craig Cockburn.  
**Organising idea:** Think. Decide. Deliver. Improve.  
**Capabilities:** Critical Thinking, Delivery and Agile, presented as a blended practice—not separate businesses or an Agile-only consultancy.

> The existing hand-written siliconglen.com is live and untouched. This replacement starts from zero and remains on a temporary GitHub Pages URL until explicitly approved for launch.

## 1. Executive brief

Lead with client problems and outcomes. Help leaders challenge assumptions, make better decisions, deliver results and improve how their organisations work. Connect Craig's consultancy, training, speaking, delivery experience, YouTube and LinkedIn into one coherent, evidence-led site.

Objectives: establish the blended proposition; generate appropriate enquiries; prove capability through outcomes, talks and credentials; build useful search-led content; make Craig visible without producing a CV site; keep the site fast, secure, portable and inexpensive; and protect existing SEO during a later migration.

## 2. Brand and positioning

- **SILICONGLEN:** established identity and canonical website.
- **Think. Decide. Deliver. Improve.:** recurring organising proposition.
- **Critical Thinking / Delivery / Agile:** connected capabilities with no dominant silo.
- **Clearer Outcomes:** customer-facing campaign concept.
- **Decisive Value:** possible future service/framework, not a second corporate site.

Lead with problems and outcomes, make critical thinking practical, show that advice becomes delivery, and describe Agile as adaptive delivery and improvement rather than the whole brand. Use substantiated results. Craig is the visible expert.

Suggested hero:

> SILICONGLEN  
> Think clearer. Decide better. Deliver what matters.  
> I'm Craig Cockburn. I help leaders and organisations challenge assumptions, make better decisions and turn those decisions into results.  
> Critical Thinking · Delivery · Agile

Every page's identity lockup must read "SILICONGLEN, Craig Cockburn".

## 3. Audience and journeys

| Visitor need | Route |
|---|---|
| Make a difficult decision | Critical Thinking & Decision Support |
| Challenge strategy | Red Team Thinking |
| Deliver complex programmes/change | Programme & Project Delivery |
| Improve organisational delivery | Transformation & Agile |
| Develop better thinkers | Training & Workshops |
| Find a speaker/facilitator | Speaking |

## 4. Information architecture

```text
/
  work-with-me/
    critical-thinking/
    red-team-thinking/
    decision-support/
    programme-delivery/
    organisational-transformation/
    agile-transformation/
    training-workshops/
  ai-and-critical-thinking/
  speaking/
    critical-thinking-talks/
    visualising-strategy/
    [individual-talk-pages]
  insights/
    articles/
    talks/
  results/
    case-studies/
  about/
  contact/
```

Primary navigation: Home; Work With Me; Critical Thinking; Delivery & Transformation; Agile; Speaking; Insights; About; Contact. Dropdowns may simplify presentation, but all three capabilities must remain top-level discoverable.

## 5. Homepage

In order: photographic hero with two CTAs and Craig named; Think/Decide/Deliver/Improve cycle; problem-led routes; three blended capabilities; evidence ledger with quantified outcomes; AI & Critical Thinking editorial feature; speaking and lazy YouTube material; insights; short About Craig narrative; contact CTA and form.

Rhythm: photographic hero → four-part cycle → contrasting problems → visual break → capabilities → large-number results → AI editorial → speaking/video → insights → Craig → bold contact CTA.

## 6. Visual system

**Revised 13 September 2026, supersedes the original editorial direction below.** After reviewing the built homepage, the condensed all-caps display font, monospace labels and tan palette read as over-designed and reduced legibility. The site now uses one plain system sans-serif throughout (no webfont loading at all, faster and simpler), a white background with light-grey and soft teal-tint sections for rhythm, and a thin teal bar across the top of every page as the one distinctive brand mark. Simple single-colour line-icon SVGs (not photography) illustrate the Think/Decide/Deliver/Improve and capability cards. **Standard is now: plain, bold, immediately readable, still visually interesting through colour and simple icons rather than typographic flourish.**

**Photography policy:** real photography of Craig is still the goal and should replace placeholders as soon as it exists. Generic stock photography is permitted as a temporary development placeholder only, so Craig can evaluate layout and proportions, clearly not final content, and must be swapped for real photography (or removed) before public launch. Never present temporary stock photography as though it depicts Craig or a real client situation.

Current tokens (replace the previous block entirely, do not mix the two systems):

```css
--paper: #ffffff;
--paper-2: #f6f6f6;
--tint: #eaf4f0;
--ink: #1a1a1a;
--muted: #595959;
--line: #dddddd;
--accent: #156048;
--font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

Body copy is 1.125rem/1.6 in the plain system font. Headings are bold, sentence case (not uppercase), sized with `clamp()`, no letter-spacing tricks, condensed display fonts clump at small sizes and were the cause of an earlier readability complaint. Still avoid: low contrast, tiny text, gradients/blobs/glassmorphism, carousels, certification walls, dominant Agile diagrams and performance-harming animation.

References are Firewalkers, Red Team Thinking, Snehal Talati, James Stamford and DSLX for selected editorial, functional and commercial qualities, not imitation. Red Team Thinking specifically informed the shift to plain, bold, high-contrast text and simple card-plus-icon/photo patterns over typographic decoration.

## 7. Evidence

Priority candidates: six-hour government programme rescue and £19,300 external cost; CIO Council secure portal in under three months/about 98% under initial budget; Southwark's 13 suppliers/about 150 people and BCS award; VisitScotland e-commerce rescue; an approximately 900-page AI-assisted rewrite with analytics retained; and permissible enterprise work. Do not publish broader claims without evidence.

Case-study fields: situation, difficulty, Craig's role, approach, change, measured outcome, capabilities and optional testimonial/evidence.

## 8. AI and Critical Thinking

Editorial hook: "AI can produce an answer. Who is challenging the answer? If the AI is wrong, how would you know?" Cover verification, hallucination/false confidence, automation bias, decision quality, red-teaming output and useful AI without outsourcing judgement.

## 9. Speaking and publishing

Host video on YouTube. Curate talks into indexable pages with title, event, date, URL, description, topics, edited transcript/article and featured flag. Use privacy-enhanced lazy/facade embeds. Link LinkedIn in the header/footer/About, while keeping substantive positioning and evidence on-site.

Publish full articles on-site first and only summaries/links on LinkedIn. Migrate old LinkedIn work by exporting, lightly revising and re-hosting images. Preserve Linktree initially; after launch change the email signature to the site and Linktree's first item to the new site.

## 10. Contact

Use Formspree without login for visitors or a custom backend. Include name, email, optional organisation, optional category, message, consent/privacy text, visible business email and a honeypot. Test notifications before launch.

## 11. Technology

Jekyll built by GitHub Actions and hosted on GitHub Pages; static HTML; Markdown/Jekyll collections; no Node/npm build, CMS, login or database. Keep source on GitHub. Use YouTube, existing GA4/Search Console and later Formspree. Registrar/DNS remain independent at Krystal. Development uses only the temporary `siliconglen.github.io/siliconglen-site` URL.

## 12. Workflow

Create repository and Jekyll foundation; enable Pages via Actions; build the design system and approve the homepage; then add core pages, evidence, speaking and insights; implement forms/analytics/metadata; inventory old URLs; test accessibility/performance/mobile/browser/forms; and change DNS only after explicit approval and validation.

## 13. SEO and migration

Before replacement, inventory live URLs and Search Console/backlink value. Preserve good URLs and use page-specific 301s. Audit craigcockburn.com separately; keep siliconglen.scot separate. Add sitemap, canonicals, Open Graph and suitable schema. Monitor after launch.

## 14. Domains

siliconglen.com is eventual canonical. craigcockburn.com and variants may later redirect; brand-defence domains may redirect; siliconglen.scot stays untouched; dormant ventures should be assessed on value; unbiasedagile.com is not renewed; cleareroutcomes.com and decisivevalue.com may later point to matching sections. **No domain or DNS work is part of preview development. Do not alter mail records.**

## 15. Security, privacy and resilience

Keep Git history and backups; record DNS/MX/SPF/DKIM/DMARC before any future switch; preserve email; use HTTPS and one canonical host; minimise scripts; keep private addresses out of registrant details; test forms and spam controls.

## 16. Accessibility and performance

WCAG 2.2 AA is a launch blocker. Calculate contrast (4.5:1 normal text, 3:1 large text and controls/focus/meaningful graphics). Use semantic headings/landmarks, keyboard navigation and menus, a skip link, visible unobscured focus, underlined body links, practical 44×44px targets, persistent form labels and clear errors, correct alt handling, 200% zoom/reflow, enabled mobile zoom, reduced-motion support and readable responsive type.

Optimise AVIF/WebP with dimensions, lazy-load below-fold media and facade YouTube. Target excellent Core Web Vitals. Combine automated checks with manual keyboard, focus, form, zoom/reflow, link-purpose and contrast tests.

## 17. Editing

Keep service pages, articles, case studies and talks in Markdown collections. Ordinary portable source and Git history are mandatory. Consider a lightweight Git CMS only if future editing needs justify it.

## 18. Phases

0 Preserve current assets/data; 1 foundation and preview; 2 design system; 3 approved homepage; 4 core content; 5 migration/QA; 6 explicitly approved launch; 7 iterative improvement. No later phase should be assumed complete.

## 19. Success

Visitors quickly understand the blended practice, see outcomes rather than a CV/method catalogue, find a relevant route, connect Craig's wider work to the brand and can contact him frictionlessly. The release is fast, responsive, accessible, maintainable, evidence-led, SEO-safe, portable and expandable.

## 20. References

Design: firewalkers.earth, redteamthinking.com, snehaltalati.com, jamesstamford.com, dslxcontent.com, mountain-top.com.au, optimate.co, feldenkraisflowbn.com, waggingtonwalkies.com. Technical: GitHub Pages, Formspree and Pagefind.
