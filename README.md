# Jekyll Portfolio

A lightweight personal portfolio built with [Jekyll](https://jekyllrb.com/) and deployed as a static site with GitHub Pages.

The site uses reusable layouts and includes for shared structure, while projects and writing are added as Markdown files. This keeps content separate from presentation and makes new pages easy to publish without editing the main HTML template.

## Project structure

```text
_config.yml              Jekyll configuration
_layouts/                Shared page layouts
_includes/               Shared head, navigation and footer partials
_projects/               Project pages written in Markdown
_posts/                  Writing and articles
projects/index.html      Project listing page
writing/index.html       Writing listing page
assets/                  Images and other static assets
styles.css               Site styles
script.js                Small client-side enhancements
```

## Local development

Use Ruby 3.3 for the GitHub Pages-compatible dependency set.

```powershell
bundle install
bundle exec jekyll serve
```

Then open [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

## Adding content

Write content in Markdown. The front matter at the top of each file controls how Jekyll displays it; the Markdown below the second `---` becomes the page body. Shared layouts automatically apply the site theme, navigation and page metadata.

### Writing and articles

Create a file under `_posts/` using this exact filename pattern:

```text
YYYY-MM-DD-title-with-hyphens.md
```

Example: `_posts/2026-10-12-building-a-campus-erp.md`

```md
---
title: "Building a campus ERP"
description: "Lessons from working on software used across a large university."
date: 2026-10-12
tags: [engineering, systems, leadership]
---

Write the article here using normal Markdown.

## A section heading

You can use paragraphs, lists, links, images and code blocks.
```

Posts appear automatically on `/writing/`, newest first, and are published at `/writing/title-with-hyphens/`.

### Projects

Create a file under `_projects/` using a descriptive name, for example `_projects/campus-erp.md`:

```md
---
title: "Campus ERP"
summary: "An institute-wide platform for academic and administrative workflows."
technologies: [React, Java, PostgreSQL]
github: "https://github.com/danishjuneja/example"
demo: "https://example.com"
featured: true
order: 1
---

Describe the problem, your contribution, the technical decisions and the outcome here.
```

Only `title` is required. The other fields are optional:

- `summary` appears on the Projects listing.
- `technologies` appears as tags on the project page and listing.
- `github` and `demo` create external links.
- `featured` marks important work.
- `order` controls the project order; lower numbers appear first.

Projects appear automatically on `/projects/` and are published at `/projects/project-name/`.

### Drafts and publishing

For writing, put unfinished posts in `_drafts/` without a date until they are ready. To publish one, move it to `_posts/` and give it the required date-based filename.

For projects, keep unfinished files outside `_projects/`, or set `published: false` in the front matter until the page is ready.

After adding or editing a file, run the local build, review the generated page, then commit and push the Markdown file. No layout HTML changes are needed for normal content updates.

More examples are available in [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

## Deployment

The repository includes a GitHub Actions workflow that builds the Jekyll site and deploys the generated static files to GitHub Pages.

The current site configuration uses the default GitHub Pages URL. Custom-domain configuration can be added separately when a domain is ready.
