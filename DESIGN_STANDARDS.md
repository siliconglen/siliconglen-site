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
- No other accent colour (teal, green, or otherwise) may be introduced anywhere on the site.

## Typography
- Heading font: Plus Jakarta Sans, weight 800, loaded via Google Fonts.
- Fallback stack: Arial, Helvetica, sans-serif.

## Navigation
- Top-level navigation is exclusively for evidence/case-study pages: what Craig has already done.
- The "Work With Me" dropdown is exclusively for future-tense, bookable services: what Craig will do for a client.
- No page may appear in both the top nav and the Work With Me dropdown.
- No top-level navigation item may link into a /work-with-me/ URL.
- Evidence pages (Critical Thinking, Delivery, Business Agility, AI, Case Studies) must never live under /work-with-me/.
- Workshops and bookable offers must never appear as content on a top-level evidence page — they belong exclusively under Work With Me.

## Voice
- Homepage introductory text and service/proposition pages: first person.
- About page: third person.
- All case studies (Case Studies page and any case study content elsewhere, including any reference to this site's own build): third person.
- Direct testimonial quotes retain the speaker's own first-person voice and are not affected by this rule.

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

## Homepage hero pills
- The four pills under the hero (Critical Thinking, Delivery, Agile, AI) link exclusively to their corresponding top-level evidence pages: /critical-thinking/, /delivery/, /business-agility/, /ai/.
- Pills must never link into /work-with-me/ URLs — the "Work with me" button already covers that route.

## Zero tolerance
- No page on this site may return a 404. Every internal link must resolve to a real, existing page. Any task that moves or renames a page must search the entire repository for every reference to the old URL and update every one.
- The statement that this site (siliconglen.com) was built from its design brief in three days using two different LLMs, with human direction and review throughout, and that the process is recorded in the public Siliconglen site GitHub repository, must never be removed from the AI page under any circumstances, and must stay on the AI page — it is not a case study and must not be moved to Case Studies. Any task that touches ai/index.md must confirm this statement is still present, in third person, with the correct "three days" wording, before reporting success.

## Process rule
Every future Codex task prompt must begin by reading this file, and its final report must state explicitly, for each item above, whether it verified compliance or made a change to it (with the requesting task's explicit authorisation quoted).
