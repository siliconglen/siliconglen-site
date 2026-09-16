# Siliconglen site

Jekyll source for siliconglen.com. Development deploys only to the temporary GitHub Pages URL; do not configure a custom domain or change DNS.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Page content lives in Markdown directories such as `case-studies/`. Collection content belongs in `_articles/`, `_case_studies/`, and `_talks/`. Shared HTML is in `_layouts/` and `_includes/`; navigation data is in `_data/`; design tokens and baseline styles are in `assets/css/main.css`.

All design and content changes must comply with `DESIGN_STANDARDS.md`.
