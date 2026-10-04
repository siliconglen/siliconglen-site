# Design and Content Standards — DO NOT VIOLATE

This file is the single source of truth for locked decisions on this site.
Every Codex task must read this file before making changes, and must verify
its own output against it before reporting success. No item below may be
changed unless a task explicitly names this file and states which item it
is authorised to change and why.

## Colour
- Accent colour is Scottish Saltire blue: #005eb8
- Tint background: #eaf2fb
- Button hover/focus: #003d78
- Banned: #f5f9fd, #e3effa, and any other blue tint not listed above. Only #005eb8 (accent), #eaf2fb (tint), and #003d78 (hover/focus) are permitted blue values anywhere on the site.
- No other accent colour (teal, green, or otherwise) may be introduced anywhere on the site.

## Typography
- Heading font: Plus Jakarta Sans, weight 800, loaded via Google Fonts.
- Fallback stack: Arial, Helvetica, sans-serif.

## Design references
The site's design reference sites are the five below. Every site audit must assess the site against all five, combining their qualities without copying any of them directly.
- firewalkers.earth: editorial storytelling rhythm (bold one-line claim, short sentences, a band of large statistics that breaks the reading pace, audience pathways, live proof, founder credibility, a recent-writing feed, email sign-up).
- snehaltalati.com: personal-brand authority, for its functionality rather than its visual style (career timeline, downloadable one-page capability statement, latest-insights feed on the homepage, one clear contact action).
- dslxcontent.com: content and SEO strength (keyword-led metadata, hierarchical service pages, industry landing pages, FAQ sections answering search intent, named testimonials with titles and companies, a metrics strip, quantified case studies).
- agilist.co.uk (Tim Robinson): commercial clarity at the point of purchase and design polish (one-sentence positioning, buyer-type entry points, published prices and durations for fixed-format offers, a free or low-cost first step, a visible engagement path, a calendar booking link repeated in navigation, hero and footer).
- redteamthinking.com: the Red Team Thinking® licensor's own presentation of the method (a clear four-way offer split of Train Me, Train My Team, Red Team This and Coach Me; credibility through a book, a Forbes column, a podcast, military credentials and a named corporate client testimonial; a self-assessment tool and newsletter sign-up; positioning as training and facilitation rather than consulting). Audits check that the Red Team Thinking® pages present the offer at least as clearly and use the licensor's terminology and positioning correctly.
jamesstamford.com is no longer a reference site and must not be used in audits.

## Font and colour consistency
- Body text must use exactly the approved font stack: Arial, Helvetica, sans-serif. No platform/system font stack (e.g. -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, or similar OS-default fonts) may be introduced anywhere on the site, even as part of a longer fallback list.
- Headings must use exactly the approved stack: "Plus Jakarta Sans", Arial, Helvetica, sans-serif, at weight 800.
- Body text colour must be consistent within any single continuous block of content (e.g. the homepage hero, an intro paragraph pair). Do not mix muted/lighter text colour with standard body text colour within what a visitor would read as one continuous statement, unless one part is deliberately a caption, label, or secondary note and is visually distinguished as such on purpose.
- Any task that adds or edits CSS, or adds new body content near existing content, must check both the font-family AND the text colour of the surrounding content, and confirm the new content matches unless a deliberate visual distinction is intended and stated in the task.

## Lede paragraphs
- The `.lede` class (max-width: var(--measure); font-size: 1.25rem) is the standard treatment for narrative prose paragraphs — full sentences written in Craig's voice explaining something, as opposed to list items, card/tile captions, testimonial quotes, or table/ledger entries.
- On every page except the homepage: apply .lede only to the first paragraph immediately following a heading, where that paragraph is a scene-setting introduction to the section.
- On the homepage specifically (exception to the rule above): apply .lede to every narrative paragraph on the page, not just the first one per section — including both hero paragraphs and every subsequent prose paragraph, wherever the content is genuine narrative text rather than a list, card, quote, or ledger entry.
- .lede must never carry a colour property. It controls typography only (size and width). This is a hard rule: the site previously had a visible bug caused by .lede setting a muted colour that applied inconsistently across paragraphs. Any future change to this class must preserve colour-neutrality.

## Heading and section spacing
- Every section and subsection must be clearly visually differentiated from the one before and after it. A visitor must be able to tell at a glance where one item (e.g. a case study, a service description, a list entry) ends and the next begins.
- Homepage rhythm: sections alternate white and grey, with the blue band and any dark video section as accents. No two adjacent sections (including the footer) may share a background. Re-check the full sequence after any reorder.
- The gap before a new heading must be visibly larger than the gap between that heading and its own body text — headings must read as attached to the content below them, not floating roughly equidistant between the previous section and their own text.
- Current implementation: `.prose > h3` uses `margin: clamp(3rem, 6vw, 4rem) 0 .5rem` and `.prose > h4` uses `margin: 1.25rem 0 .25rem`. Any future spacing change must preserve this principle (larger gap above a heading than below it) even if the exact values are adjusted.

## Navigation
- No two navigation items may point to the same destination. Legacy URL redirects must remain out of the navigation when their destination is already represented by another item.
- Top-level navigation includes evidence pages (Critical Thinking, Delivery, Business Agility, AI, Case Studies) alongside the necessary navigational items Home, Work With Me, About, and Contact.
- The "Work With Me" dropdown is exclusively for future-tense, bookable services: what Craig will do for a client.
- Evidence pages must not live under /work-with-me/, and the Work With Me dropdown must not contain evidence pages.
- Evidence pages should end with a clear, single call-to-action linking to the most relevant corresponding Work With Me service page — this is intended and correct, not a violation. Evidence pages are not required to strip all mention of related services; they may reference and link to the relevant Work With Me offer as their natural conversion point.
- Work With Me and About are single dropdown controls, not links and not split link-and-arrow controls. On desktop each dropdown opens on hover, click or Enter; in the mobile menu it opens on tap.
- Services overview links to `/work-with-me/` as the fixed first item in the Work With Me dropdown. About Craig links to `/about/` as the fixed first item in the About dropdown.
- The remaining Work With Me and About dropdown items are alphabetised after their fixed overview item. Any future item added to either dropdown must retain that order.
- The About dropdown contains, after About Craig: Citations, Credentials, Insights, Speaking, Updates. These are dropdown-only links and must not also appear as separate top-level navigation items.
- Each dropdown header has one visual state and receives a single current-section highlight when the visitor is on any page listed in that dropdown.
- Citations uses the top-level URL `/citations/`. It is a third-person record of external recognition, citations and credits Craig has received, ordered most recent first, and opens with: "Recognition, credits and citations from over three decades of work."
- Updates uses the top-level URL `/updates/`. It is for short-form reflective and opinion posts, presented in reverse chronological order in a blog-like format.

## Contact details
- Homepage calls to action: the hero has no button; the 'What type of help do you need?' section has one call to action only, a bold blue 'Work with me' button linking to /work-with-me/ placed after the six routes; the closing section has 'Get in touch now:' with the 'Contact me' button. No two buttons sit adjacent anywhere on the page.
- Contact form: name, email and message are mandatory and marked with a red asterisk; all other fields are optional. Topic options match the current Work With Me service names, plus 'Speaking', 'Not sure yet' and 'Something else'. The default option is 'No selection made'.
- The footer wording is “SILICONGLEN”, then “Craig Cockburn”, then “Write to me at craig@siliconglen.com or via my contact form.” The email address and “contact form” are links, and both ways to reach me sit together.
- Footer: small LinkedIn and YouTube icon links sit next to Craig Cockburn's name, in that order, using each platform's official brand icon and colour. This is a stated exception to the single-accent-colour rule, kept for recognisability.
- Contact remains a top-level navigation item.
- Closing calls to action use the homepage's bold blue primary-button treatment and link to `/contact/`; weak closing copy such as “My contact details are in the footer” must not be used.
- General and evidence pages (About, Critical Thinking, Delivery, Business Agility, AI, Credentials, Citations and Speaking) end with “Get in touch now:” followed by a **Contact me** button.
- Work With Me service pages (Agile Coaching, Decision Support Workshops, Leadership Strategy, Programme & Project Delivery, Red Team Thinking® Training and Team Turnaround Workshops) end with “Book me now:” followed by a **Book me** button. The Work With Me overview uses the same service CTA.
- Case Studies and every individual Insights article end with “Get in touch now:” followed by a **Contact me** button, after any more specific service link already present.
- The homepage's existing button is unchanged and is not part of this closing CTA system.

## External links
- Every external link added to the site must be checked before publication using an actual request that confirms the destination responds, not merely by judging whether its URL looks plausible.
- Broken or dead external links must not be published. Replace one with a verified working URL where possible; otherwise retain the reference as plain text without a hyperlink.

## SEO metadata
- Every page has a self-referencing canonical and Open Graph tags from the shared layout; redirect stubs keep their own canonical only.
- Page `<title>` comes from `meta_title` when set, otherwise "Title · Siliconglen". Keep titles to about 60 characters and descriptions to about 160.
- Keyword owner pages use one page per search term, never two: agile coach Scotland = `/work-with-me/agile-coaching/`; critical thinking Scotland and critical thinking trainer UK = `/critical-thinking/`; agile delivery specialist UK = `/delivery/`; red team thinking UK = `/work-with-me/red-team-thinking/`. Business Agility targets business agility and Agile transformation and links to Agile Coaching rather than competing with it.
- Location wording: based in Scotland, preference for Europe, available internationally. Service page intros and descriptions state UK, Europe and international reach ("internationally" or "beyond"); never limit them to the UK and Europe only. Do not name specific countries for international work unless Craig supplies a dated example.
- Core skills group: wherever the core offer is summarised (homepage title and description, service page intros, About and Case Studies intros, and any future summary line), name all three skills together: agile coaching, programme and project delivery, and critical thinking, in that order unless the page's own topic leads. Never drop one of the three, and write delivery as "programme and project delivery" when it is spelled out. Single-topic keyword titles on the owner pages are exempt.

## Images
- Every image is sized for how it is displayed: the homepage portrait is 1400x1000 and under 200 KB, and no image file over 300 KB is published without a stated reason.
- The social-sharing image is assets/images/home/craig-cockburn-og.jpg at 1200x630, referenced by og:image with its width and height.
- Every <img> carries width and height attributes matching the file's real pixel dimensions.

## 404 and legacy redirects
- `/404.html` is a plain "Page not found" page: noindex, excluded from the sitemap, no canonical or Open Graph tags.
- A head script on the 404 page forwards every missing path to the same path on https://www.siliconglen.scot (query string and fragment preserved), EXCEPT paths that start with one of the new site's own sections: /about/, /ai/, /articles/, /assets/, /business-agility/, /case-studies/, /citations/, /contact/, /credentials/, /critical-thinking/, /delivery/, /insights/, /speaking/, /updates/, /work-with-me/. Missing paths inside those sections show the local 'Page not found' page. Whenever a new top-level section is added to this site, add its prefix to this list in the same PR.
- This replaces the earlier "plain 404 only, no redirect logic" decision.

## Insights
- Every full-article Insights page must reference its original publication date near the top of the page. This is the date on which it was first published on LinkedIn or Medium, not the date on which it was migrated to this site.
- Every full-article Insights page sets published_date in its front matter as a quoted ISO date (YYYY-MM-DD, or YYYY-MM where only the month is known), matching its visible publication date. The shared head then outputs og:type article and article:published_time. All other pages output og:type website.
- The `/insights/` index page must display every entry's original publication date and list all entries most-recent-first. This applies automatically to every Insights article added in future batches.
- Store all Insights article imagery in `assets/images/insights/` so that future article images use one consistent location.
- **Permanent academic-paper lock:** The page `/insights/critical-thinking-kahneman-correction/`, from its title through its References and Keywords, is a submitted, professor-approved academic paper. Codex must never alter its text again, under any circumstances. The only actions Codex may ever take on this page are (a) presentation or styling changes, including fonts, spacing, and layout, and (b) wrapping already-existing exact text in a hyperlink. Codex must not add, remove, reword, correct, normalise, or otherwise change any word of the paper.

## Voice
- The site is first person throughout: every page must use “I” and “my”, not “Craig” or “his”.
- The sole exception is the Case Studies page, which stays in third person because that is the case-narrative genre.
- Citations retains its established third-person record format as a named exception.
- Direct testimonial quotes retain the speaker's own first-person voice and are not affected by this rule.
- All visitor-facing sentences must be grammatically sound, plain English. A sentence must not attach a date to an abstract noun or concept in a way that doesn't logically make sense (e.g. "delivery rooted in 2007" is not valid — delivery is not a plant with roots). If a date needs stating, state it as a fact about Craig's experience directly (e.g. "I've been delivering complex programmes since 2007"), not as a decorative modifier bolted onto an unrelated noun.
- Before publishing any new sentence, read it aloud test: does it parse as something a fluent English speaker would actually say? If not, rewrite it.

## Testimonial attribution
- Testimonial attribution lines begin with an em dash (> — Name, Role, Organisation (years)). This is the only place an em dash may appear in visitor-facing text.
- Every testimonial or quote attributed to a named person anywhere on the site must include that person's role or title and their company or organisation, unless confidentiality requires the company or organisation to be omitted.
- Testimonial attributions give the person's role at the time of the assignment, with years, as supplied by Craig, not their current title.
- Testimonials outside the homepage link to https://www.linkedin.com/in/siliconglen/details/recommendations/ with the text 'Read the full recommendation on LinkedIn'.
- A bare name beside a quote carries no credibility and must not be published. If the role or title cannot be determined from the original source, flag the quote for resolution rather than guessing or publishing it with only a name.
- Testimonials use the recommender's own words. Obvious spelling and typing errors (misspellings, doubled words, stray punctuation) may be corrected; wording and meaning must never be changed.
- A shortened excerpt may be used only where the full testimonial is available on this site or on LinkedIn, and the excerpt links to it.

## Content ownership
- Every recurring fact, story or credential has exactly one canonical owner page containing the full detail. Every other page that references it must use a short one- or two-sentence summary and link to the precise owned entry; it must neither repeat the full detail nor simply delete the fact.
- **Case Studies** owns client-specific outcomes and figures, including Southwark, VisitScotland, Government Spending Challenge, Admiral, BT and the trading-technology workshop.
- **Credentials** owns qualifications, certifications and exact award dates.
- **Citations** owns community recognition, publications and honours.
- **Speaking** owns talks and conference appearances, including embedded video.
- **Insights** owns full articles.
- **About** owns the chronological career narrative.
- Business Agility, Delivery, Critical Thinking, AI and every Work With Me service page own no recurring facts. They state capability and positioning only and link to the relevant owner entry for detail or evidence.
- **Homepage exception:** Home may restate general narrative, proposition and capability copy so that it works as a complete, persuasive page in its own right. It must not be reduced to bare links merely to avoid duplication. The exception does not extend to exact figures or facts owned by a specific case study, credential date or citation; Home must keep those to a short mention and link to the precise owner entry for full detail.
- There must be no net loss of information when consolidating content. Before shortening or removing a duplicated fact, confirm that its full detail exists on its owner page and add it there first if necessary.
- Every ownership link must target the specific section on the owner page, not the page top. Individual case studies, credential entries, citation entries and speaking entries must have stable anchor IDs wherever another page links to them.

## Case Studies page
- Case studies: each case study shows its location and dates, in the same format as the Admiral case study.
- Case study outcome labels: use 'Measured outcome' only where a measure is stated; otherwise use 'Outcome'.
- The page formerly named "Results" is named "Case Studies" (URL: /case-studies/).
- Organised into sections for the areas that currently have case studies: Delivery, Business Agility, AI. Critical Thinking must not appear until real case studies exist for that area.
- The page has on-page quick links at the top, using relative anchor links (e.g. #ai, #delivery, #business-agility) to jump to each section.
- Every case study referenced from any other page (About, Delivery, Business Agility, AI, homepage) must link to its specific anchor on this page, not duplicate the case study's full content elsewhere.

## Editorial and meta commentary
- No page may ever contain commentary about the site's own content, publishing intentions, editorial approach, or production process as visitor-facing text. This includes but is not limited to: statements about what content "will be" published, how claims are sourced or verified, descriptions of the site's own organisation or structure, and any sentence whose subject is the site or its content pipeline rather than Craig's work or expertise.
- This is a general category, not a fixed list of banned phrases. Before adding any new page or section, check whether the text describes the site itself rather than Craig, his work, or his expertise — if so, remove or rewrite it.
- The only exception is the AI page's own statement about how this site was built, which is explicitly permitted and protected elsewhere in this file.

## Speaking vs Work With Me
- Speaking page: content about teaching a topic to an audience, at a conference, in-house event, or similar — including workshop-format talks (e.g. a teaching workshop at a conference). This is knowledge-sharing, not client engagement.
- Work With Me: content about helping a specific organisation solve a specific problem it has.
- The test: does this describe teaching a topic, or solving a named organisation's problem? Teaching → Speaking. Problem-solving → Work With Me.
- A workshop delivered at a conference to teach a topic (e.g. Agile India) belongs on Speaking, not Work With Me, even though the word "workshop" appears in its name.

## Red Team Thinking® terminology {#red-team-thinking-terminology}
- Trademarks: Red Team Thinking®, Red Team Coach™, Red Team Coaching™, Red Team Instructor™ and Red Team Leaders™ carry their mark on every occurrence in the site's own text (not in URLs, ids, third-party quotations or the Kahneman article).
- Red Team Thinking® has two distinct offers on this site, and copy must keep them clearly separated:
  - **Red Team Thinking® Training** (licensed): Craig delivers licensed Red Team Thinking® training content under permission from Red Team Thinking® / TruThinking Corp. He trains, then leaves — outcomes belong to the client from that point.
  - **Decision Support Workshops**: Craig uses Red Team Thinking® tools and critical thinking practice to facilitate a client through a live decision, strategy, or problem. This is described using the accessible term "decision support" rather than the RTT brand name, since not every visitor will know what Red Team Thinking® means.
- This work is facilitation, not consulting. Per Red Team Thinking®'s own positioning (redteamthinking.com): "We are not a consulting company. We don't provide answers; we provide tools that you unlock the solutions that reside inside your organization." Craig's role is to guide the client's own team through a process, not to advise them on the answer. Site copy describing this offer must use "facilitate"/"facilitation"/"guide" language, not "advise" or "consult".
- Critical thinking is the broader discipline. Red Team Thinking® is one specific, branded, licensed method of applying it — not the only one. Craig can and does apply critical thinking outside the RTT brand.
- Client engagements using RTT tools are typically confidential — clients frequently do not want to be named or identified. This is why no named case studies exist for Decision Support Workshops or the consulting side of Red Team Thinking®; conference talks and video evidence substitute for named case studies here, and this is a deliberate, accepted exception, not a gap to be flagged in future audits.

## Homepage hero pills
- Homepage hero: eyebrow, headline, two supporting paragraphs (the introduction and the 20-years paragraph), the four practice-area tags, the case studies link and the portrait. No button.
- Homepage testimonials: four cards only, in this order: Phyroze Mohamed, Nick Jones, Polly Purvis, Sorcha Moore. Each links to the full testimonial on this site.
- The four pills under the hero (Critical Thinking, Delivery, Agile, AI) link exclusively to their corresponding top-level evidence pages: /critical-thinking/, /delivery/, /business-agility/, /ai/.
- Pills must never link into /work-with-me/ URLs — the "Work with me" button already covers that route.

## Zero tolerance
- No page on this site may return a 404. Every internal link must resolve to a real, existing page. Any task that moves or renames a page must search the entire repository for every reference to the old URL and update every one.
- The statement that this site (siliconglen.com) was built from its design brief in three days using two different LLMs, with human direction and review throughout, and that the process is recorded in the public Siliconglen site GitHub repository, must never be removed from the AI page under any circumstances, and must stay on the AI page — it is not a case study and must not be moved to Case Studies. Any task that touches ai/index.md must confirm this statement is still present, in first person, with the correct "three days" wording, before reporting success.

## Accessibility and HTML validity
- Pronunciation: 'Cockburn' is pronounced 'Coburn'. The About page states this once, on its first mention of the name. Every other occurrence of the name sitewide carries an aria-label with the correct pronunciation instead of changing the visible text.
- Every page must meet WCAG 2.2 Level AA at minimum, including but not limited to: colour contrast of at least 4.5:1 for normal text and 3:1 for large text and UI components; full keyboard navigability with visible, unobscured focus states; semantic heading structure and landmarks; a skip-to-content link; correct alt text on all images; accessible form labels and error messages; and support for 200% zoom/reflow and reduced-motion preferences.
- Every page's HTML must validate with zero errors against the W3C Nu HTML Checker (or equivalent validator). Warnings should be minimised but are not blocking; errors are never acceptable.
- Any task that adds or changes markup must check its own output against both requirements before reporting success, and must report the specific check performed (not just "should be fine").
- Technical: any raw HTML block (e.g. prose-media__figure) must start at column 0 with a blank line immediately before and after it, or kramdown will render the tags as literal text instead of parsing them as HTML.
- Mobile navigation: when the menu opens, focus moves to its first link and the main content and footer are inert; Escape or the backdrop closes it and returns focus to the menu button; Escape does nothing to the mobile menu when it is closed. On desktop, Escape closes an open dropdown and returns focus to its toggle.
- Reveal-on-scroll hides content only after confirming IntersectionObserver support and no reduced-motion preference; otherwise all content is visible immediately.

## Process rule
- Favicon: favicon.ico, apple-touch-icon.png and a 512x512 PNG icon at /assets/icons/ are referenced in the shared head on every page. Design is the Scottish saltire in Pantone 300 (#005EB8).
- Live domain: the site is served at https://siliconglen.com with an empty baseurl. The site-wide noindex/nofollow directive has been removed; individual redirect stubs keep their own.
- Analytics: Umami Cloud (cookieless) is loaded from the shared page head and runs only on siliconglen.com and www.siliconglen.com. No cookie banner is used. assets/js/analytics-events.js sends four custom events: cta-click (page, button label, target path), email-click (page), outbound-click (page, destination host) and contact-form-submit (selected topic only). No personal data or form contents are sent, and no cookies or browser storage are used. Any change to analytics needs a fresh check of UK cookie rules.
- Structured data: the homepage carries one JSON-LD block (Person, Organization, WebSite) in the head. It must match visible content and must not include dates of birth, qualification dates, a home address or any current employer.
- Structured data: the homepage's JSON-LD Person object states areaServed as Scotland, United Kingdom, Europe and Worldwide, matching _layouts/default.html.
Every future Codex task prompt must begin by reading this file, and its final report must state explicitly, for each item above, whether it verified compliance or made a change to it (with the requesting task's explicit authorisation quoted).
