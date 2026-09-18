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
- The gap before a new heading must be visibly larger than the gap between that heading and its own body text — headings must read as attached to the content below them, not floating roughly equidistant between the previous section and their own text.
- Current implementation: `.prose > h3` uses `margin: clamp(3rem, 6vw, 4rem) 0 .5rem` and `.prose > h4` uses `margin: 1.25rem 0 .25rem`. Any future spacing change must preserve this principle (larger gap above a heading than below it) even if the exact values are adjusted.

## Navigation
- Top-level navigation includes evidence pages (Critical Thinking, Delivery, Business Agility, AI, Case Studies) alongside the necessary navigational items Home, Work With Me, About, and Contact.
- The "Work With Me" dropdown is exclusively for future-tense, bookable services: what Craig will do for a client.
- Evidence pages must not live under /work-with-me/, and the Work With Me dropdown must not contain evidence pages.
- Evidence pages should end with a clear, single call-to-action linking to the most relevant corresponding Work With Me service page — this is intended and correct, not a violation. Evidence pages are not required to strip all mention of related services; they may reference and link to the relevant Work With Me offer as their natural conversion point.
- The Work With Me top-level navigation item linking directly to /work-with-me/ is correct and intended.
- The About dropdown contains: Citations, Insights, Speaking, Updates. These are dropdown-only links and must not also appear as separate top-level navigation items.
- Items in the Work With Me and About dropdowns are alphabetised. Any future item added to either dropdown must retain that alphabetical order.
- Citations uses the top-level URL `/citations/`. It is a third-person record of external recognition, citations and credits Craig has received, ordered most recent first, and opens with: "Recognition, credits and citations from over three decades of work."
- Updates uses the top-level URL `/updates/`. It is for short-form reflective and opinion posts, presented in reverse chronological order in a blog-like format.

## Contact details
- The footer must present the contact form immediately next to Craig's email address so that both ways to reach him sit together.
- Contact remains a top-level navigation item.
- Elsewhere, in-body copy must not duplicate a separate "Contact Craig", "Contact me" or equivalent contact call-to-action. Evidence pages, Work With Me pages and other content should direct readers to the contact details in the footer instead.

## External links
- Every external link added to the site must be checked before publication using an actual request that confirms the destination responds, not merely by judging whether its URL looks plausible.
- Broken or dead external links must not be published. Replace one with a verified working URL where possible; otherwise retain the reference as plain text without a hyperlink.

## Insights
- Every full-article Insights page must reference its original publication date near the top of the page. This is the date on which it was first published on LinkedIn or Medium, not the date on which it was migrated to this site.
- The `/insights/` index page must display every entry's original publication date and list all entries most-recent-first. This applies automatically to every Insights article added in future batches.
- Store all Insights article imagery in `assets/images/insights/` so that future article images use one consistent location.

## Voice
- The site is first person throughout: every page must use “I” and “my”, not “Craig” or “his”.
- The sole exception is the Case Studies page, which stays in third person because that is the case-narrative genre.
- Citations retains its established third-person record format as a named exception.
- Direct testimonial quotes retain the speaker's own first-person voice and are not affected by this rule.
- All visitor-facing sentences must be grammatically sound, plain English. A sentence must not attach a date to an abstract noun or concept in a way that doesn't logically make sense (e.g. "delivery rooted in 2007" is not valid — delivery is not a plant with roots). If a date needs stating, state it as a fact about Craig's experience directly (e.g. "I've been delivering complex programmes since 2007"), not as a decorative modifier bolted onto an unrelated noun.
- Before publishing any new sentence, read it aloud test: does it parse as something a fluent English speaker would actually say? If not, rewrite it.

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

## Red Team Thinking terminology
- Red Team Thinking® has two distinct offers on this site, and copy must keep them clearly separated:
  - **Red Team Thinking Training** (licensed): Craig delivers licensed Red Team Thinking training content under permission from Red Team Thinking / TruThinking Corp. He trains, then leaves — outcomes belong to the client from that point.
  - **Decision Support Workshops**: Craig uses Red Team Thinking tools and critical thinking practice to facilitate a client through a live decision, strategy, or problem. This is described using the accessible term "decision support" rather than the RTT brand name, since not every visitor will know what Red Team Thinking means.
- This work is facilitation, not consulting. Per Red Team Thinking's own positioning (redteamthinking.com): "We are not a consulting company. We don't provide answers; we provide tools that you unlock the solutions that reside inside your organization." Craig's role is to guide the client's own team through a process, not to advise them on the answer. Site copy describing this offer must use "facilitate"/"facilitation"/"guide" language, not "advise" or "consult".
- Critical thinking is the broader discipline. Red Team Thinking is one specific, branded, licensed method of applying it — not the only one. Craig can and does apply critical thinking outside the RTT brand.
- Client engagements using RTT tools are typically confidential — clients frequently do not want to be named or identified. This is why no named case studies exist for Decision Support Workshops or the consulting side of Red Team Thinking; conference talks and video evidence substitute for named case studies here, and this is a deliberate, accepted exception, not a gap to be flagged in future audits.

## Homepage hero pills
- The four pills under the hero (Critical Thinking, Delivery, Agile, AI) link exclusively to their corresponding top-level evidence pages: /critical-thinking/, /delivery/, /business-agility/, /ai/.
- Pills must never link into /work-with-me/ URLs — the "Work with me" button already covers that route.

## Zero tolerance
- No page on this site may return a 404. Every internal link must resolve to a real, existing page. Any task that moves or renames a page must search the entire repository for every reference to the old URL and update every one.
- The statement that this site (siliconglen.com) was built from its design brief in three days using two different LLMs, with human direction and review throughout, and that the process is recorded in the public Siliconglen site GitHub repository, must never be removed from the AI page under any circumstances, and must stay on the AI page — it is not a case study and must not be moved to Case Studies. Any task that touches ai/index.md must confirm this statement is still present, in first person, with the correct "three days" wording, before reporting success.

## Accessibility and HTML validity
- Every page must meet WCAG 2.2 Level AA at minimum, including but not limited to: colour contrast of at least 4.5:1 for normal text and 3:1 for large text and UI components; full keyboard navigability with visible, unobscured focus states; semantic heading structure and landmarks; a skip-to-content link; correct alt text on all images; accessible form labels and error messages; and support for 200% zoom/reflow and reduced-motion preferences.
- Every page's HTML must validate with zero errors against the W3C Nu HTML Checker (or equivalent validator). Warnings should be minimised but are not blocking; errors are never acceptable.
- Any task that adds or changes markup must check its own output against both requirements before reporting success, and must report the specific check performed (not just "should be fine").

## Process rule
Every future Codex task prompt must begin by reading this file, and its final report must state explicitly, for each item above, whether it verified compliance or made a change to it (with the requesting task's explicit authorisation quoted).
