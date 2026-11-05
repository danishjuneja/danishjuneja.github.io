# Adding content

Add writing to `_posts` using `YYYY-MM-DD-title.md` filenames and front matter such as:

```yaml
---
title: "A note about building software"
description: "A short summary for listings and search engines."
date: 2026-10-12
tags: [engineering, systems]
---
```

Add projects to `_projects` with `title`, `summary`, `technologies`, `featured`, and `order` fields. The shared project layout supplies the page structure automatically. Add optional `github`, `demo`, or `preview` URL fields to show corresponding links on the project page and its featured card:

```yaml
github: "https://github.com/username/project"
demo: "https://example.com/demo"
preview: "https://example.com/preview"
```
