# Siliconglen site

Proposed Jekyll replacement for siliconglen.com. Development deploys only to the temporary GitHub Pages URL; do not configure a custom domain or change DNS.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Content lives in Markdown. Shared HTML is in `_layouts` and `_includes`; navigation data is in `_data`; design tokens and baseline styles are in `assets/css/main.css`.
