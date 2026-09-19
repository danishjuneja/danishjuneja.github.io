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

Add a writing page under `_posts/` with a filename in this format:

```text
YYYY-MM-DD-title.md
```

Add projects under `_projects/`. Each file uses YAML front matter for its title, summary, technologies and links, followed by the page content in Markdown.

The shared layouts automatically apply the site theme, navigation and page metadata.

More examples are available in [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

## Deployment

The repository includes a GitHub Actions workflow that builds the Jekyll site and deploys the generated static files to GitHub Pages.

The current site configuration uses the default GitHub Pages URL. Custom-domain configuration can be added separately when a domain is ready.
