# Blog Forum System

This is a Markdown-based blog system that automatically converts your posts to a blog hosted on GitHub Pages. This system allows you to easily create and manage blog content using simple Markdown files.

## How to Update the Blog

1. **Add new posts**: Create new Markdown files in the `src/posts/` directory
2. **Include the required frontmatter** at the top of the file:

   ```markdown
   ---
   title: "Your Post Title"
   date: YYYY-MM-DD
   tags: ["tag1", "tag2", "tag3"]
   layout: post.njk
   ---

   # Your Post Title

   Your post content goes here...
   ```

3. **Build the site locally** (optional, for testing):
   ```bash
   npx @11ty/eleventy
   ```

4. **Push changes to GitHub**:
   ```bash
   git add .
   git commit -m "Add new blog post"
   git push origin master
   ```

## GitHub Pages Configuration

GitHub Pages is configured to use the `/docs` folder on the `master` branch.

The site will be automatically updated when you push changes to this repository.

## Directory Structure

```
├── .eleventy.js         # Eleventy configuration
├── package.json         # Project metadata and dependencies
├── src/                 # Source files (Markdown, templates)
│   ├── _includes/       # Reusable components
│   ├── _layouts/        # Page templates
│   ├── _data/           # Global data files
│   ├── posts/           # Blog posts (Markdown files)
│   ├── css/             # Stylesheets
│   └── index.njk        # Homepage
├── docs/                # Generated site (served by GitHub Pages)
└── _site/               # Temporary build directory
```

## Customization

You can customize the look and feel of your blog by:

1. Modifying CSS files in `src/css/main.css`
2. Updating layout files in `src/_layouts/`
3. Adding new layout templates as needed