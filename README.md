# Blog Forum System

This is a Markdown-based blog system that automatically converts your posts to a blog hosted on GitHub Pages. This system allows you to easily create and manage blog content using simple Markdown files.

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the site**:
   ```bash
   npx @11ty/eleventy
   ```

3. **Serve locally for development**:
   ```bash
   npx @11ty/eleventy --serve
   ```

## Adding New Posts

To add a new blog post:

1. Create a new Markdown file in the `src/posts/` directory
2. Include the required frontmatter at the top of the file:

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

3. Save the file with a `.md` extension
4. Run the build command to generate the updated site

## Frontmatter Fields

- `title`: The title of your post (required)
- `date`: The publication date in YYYY-MM-DD format (required)
- `tags`: An array of tags for categorizing your post (optional)
- `layout`: The layout template to use (should be `post.njk` for posts)

## Deployment to GitHub Pages

### Option 1: Manual Deployment

1. Build your site:
   ```bash
   npx @11ty/eleventy
   ```

2. The built site will be in the `_site` directory
3. Push the contents of the `_site` directory to your GitHub repository's `gh-pages` branch or `main` branch's `/docs` folder

### Option 2: Automated Deployment with GitHub Actions

1. Create a `.github/workflows/deploy.yml` file with:

   ```yaml
   name: Build and Deploy

   on:
     push:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
       - uses: actions/checkout@v3
       
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '20.x'
           
       - name: Install dependencies
         run: npm ci
         
       - name: Build site
         run: npx @11ty/eleventy
         
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./_site
   ```

2. Push this workflow file to your GitHub repository
3. GitHub will automatically build and deploy your site on every commit to the main branch

## Directory Structure

```
blog-forum-system/
├── .eleventy.js         # Eleventy configuration
├── package.json         # Project metadata and dependencies
├── src/                 # Source files
│   ├── _includes/       # Reusable components
│   ├── _layouts/        # Page templates
│   ├── _data/           # Global data files
│   ├── posts/           # Blog posts (Markdown files)
│   ├── css/             # Stylesheets
│   └── index.njk        # Homepage
└── _site/               # Built site (generated)
```

## Customization

You can customize the look and feel of your blog by:

1. Modifying CSS files in `src/css/main.css`
2. Updating layout files in `src/_layouts/`
3. Adding new layout templates as needed

## Development

To run the site locally during development:

```bash
npx @11ty/eleventy --serve
```

This will start a local server (usually at http://localhost:8080) and watch for changes, automatically rebuilding the site when you update source files.