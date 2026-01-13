# Astro + Tina CMS Marketing Site

A modern static marketing site built with Astro and Tina CMS, following HTML/CSS-first principles with minimal JavaScript.

## Prerequisites

- Node.js 18+
- pnpm (required - this project uses pnpm exclusively)
- Git

**Package Manager**: This project uses **pnpm** exclusively. Do not use npm or yarn.

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

**For local-only development**: Leave `TINA_CLIENT_ID` and `TINA_TOKEN` empty in the `.env` file.

**For Tina Cloud features**: Get credentials from [tina.io](https://tina.io) after creating a project.

### 3. Build Tina Admin (First Time Only)

Generate the Tina CMS admin interface:

```bash
pnpm exec tinacms build --local --skip-cloud-checks
```

This creates the admin interface at `public/admin/index.html`.

### 4. Run Development Server

```bash
# Option 1: Start Astro dev server only
pnpm run dev

# Option 2: Start Astro with Tina CMS (recommended)
pnpm run dev:tina
```

The site will be available at `http://localhost:4321` and the Tina CMS admin at `http://localhost:4321/admin`.

**Note**: Use `dev:tina` to enable the Tina CMS visual editor. This starts both the Astro dev server and Tina's admin interface.

## Project Structure

```
/
├── src/
│   ├── components/       # Mostly Astro components
│   │   ├── interactive/  # Preact (only when needed)
│   ├── layouts/          # Astro layouts
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/            # Astro pages (file-based routing)
│   └── styles/           # Global styles
│       └── global.css
├── content/              # Markdown/MDX content
│   ├── pages/
│   └── blog/
├── public/               # Static assets
│   └── images/
├── tina/                 # Tina CMS configuration
│   └── config.ts
├── astro.config.mjs      # Astro configuration
├── package.json
└── tsconfig.json
```

## Features

### Blog

The site includes a fully functional blog powered by Astro's content collections and Tina CMS:

- **Blog Listing**: View all published posts at `/blog`
- **Individual Posts**: Dynamic routes for each blog post at `/blog/[slug]`
- **Tina CMS Integration**: Manage blog posts through the visual editor at `/admin`
- **MDX Support**: Write rich content with markdown and embedded components
- **Metadata**: Title, date, author, excerpt, featured images, and tags
- **Draft Mode**: Hide unpublished posts from the listing

Blog posts are stored in `content/blog/` as MDX files and can be edited through:
1. The Tina CMS admin interface at `/admin`
2. Directly editing the `.mdx` files in your code editor

## Available Scripts

- `pnpm run dev` - Start Astro development server
- `pnpm run dev:tina` - Start Astro with Tina CMS admin (recommended)
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build

## Philosophy

This project follows a progressive enhancement approach:

1. **First**: Try to solve with HTML/CSS
2. **Second**: Use Astro components for static/server-side logic
3. **Last Resort**: Use Preact only when client-side JavaScript is absolutely required

## Performance Targets

- **Total JavaScript**: <10KB (ideally 0KB)
- **Lighthouse Scores**: 95-100 across all categories
- **Core Web Vitals**: Green for LCP, FID, and CLS

## Documentation

See [Claude.md](./Claude.md) for complete project documentation and guidelines.

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tina CMS Documentation](https://tina.io/docs)
- [Preact Documentation](https://preactjs.com) (use sparingly)
