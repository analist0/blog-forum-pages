---
title: "Setting Up GitHub Pages Deployment"
date: 2025-11-10
tags: ["github", "deployment", "tutorial"]
layout: post.njk
---

# Setting Up GitHub Pages Deployment

This tutorial will guide you through setting up GitHub Pages to host your blog for free. GitHub Pages is an excellent platform for hosting static sites like our Markdown-based blog.

## Prerequisites

- A GitHub account
- Git installed on your system
- Your blog files ready to deploy

## Steps to Deploy

### 1. Create a GitHub Repository

First, create a new repository on GitHub. You can name it anything you like, such as `my-blog` or `blog-forum-system`.

### 2. Initialize Git in Your Blog Directory

```bash
cd /path/to/your/blog-forum-system
git init
git add .
git commit -m "Initial blog setup"
```

### 3. Connect to Your GitHub Repository

```bash
git remote add origin https://github.com/your-username/your-repository-name.git
git branch -M main
git push -u origin main
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to the "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 5. Wait for Deployment

GitHub Pages will take a few minutes to build and deploy your site. Once complete, you'll see a message confirming the deployment with a link to your site.

## Adding New Posts

Adding new posts to your blog is as simple as:

1. Create a new Markdown file in the `src/posts/` directory
2. Include the required frontmatter (title, date, tags, layout)
3. Commit and push to GitHub
4. Run the build process (if needed) or wait for automatic deployment

## Automatic Builds

You can set up GitHub Actions to automatically build your site whenever you push changes to your repository. Create a `.github/workflows/deploy.yml` file with the build configuration.

Your blog will be automatically updated with your new posts!