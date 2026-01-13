# Static Marketing Site with Preact, Astro, and Tina CMS

## Project Overview

This project is a modern static marketing site built with a powerful combination of technologies designed for performance, developer experience, and content management flexibility.

## Tech Stack

### Astro
- **Purpose**: Static site framework
- **Why**: Partial hydration, excellent performance, ships zero JavaScript by default
- **Use Cases**:
  - Page routing and layouts
  - Static site generation
  - Asset optimization
  - SEO optimization

### Preact
- **Purpose**: Interactive UI components
- **Why**: Lightweight React alternative (3KB), fast, familiar React-like API
- **Use Cases**:
  - Interactive components (forms, navigation, modals)
  - Client-side interactivity where needed
  - Partial hydration for performance

### Tina CMS
- **Purpose**: Git-based headless CMS
- **Why**: Visual editing, Git-backed content, developer-friendly
- **Use Cases**:
  - Content management
  - Visual editing interface
  - Markdown/MDX content
  - Media management

## Project Structure

```
/
├── src/
│   ├── components/       # Preact components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── ContactForm.tsx
│   ├── layouts/          # Astro layouts
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/            # Astro pages (file-based routing)
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── features.astro
│   │   ├── pricing.astro
│   │   └── contact.astro
│   └── styles/           # Global styles
│       └── global.css
├── content/              # Markdown/MDX content
│   ├── pages/
│   └── blog/
├── public/               # Static assets
│   ├── images/
│   └── favicon.ico
├── tina/                 # Tina CMS configuration
│   ├── config.ts
│   └── templates/
├── astro.config.mjs      # Astro configuration
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Initialize the project**
   ```bash
   npm create astro@latest
   ```

2. **Install Preact integration**
   ```bash
   npx astro add preact
   ```

3. **Install Tina CMS**
   ```bash
   npm install tinacms
   ```

4. **Install additional dependencies**
   ```bash
   npm install @tinacms/cli
   ```

### Configuration

#### Astro Config (`astro.config.mjs`)
```javascript
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
  site: 'https://yoursite.com',
});
```

#### Tina Config (`tina/config.ts`)
```typescript
import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
```

## Development Workflow

### Running the Development Server

```bash
# Start Astro dev server
npm run dev

# Start Tina CMS (in separate terminal)
npx tinacms dev -c "npm run dev"
```

### Content Management

1. **Access Tina CMS**: Navigate to `/admin` in your browser
2. **Edit Content**: Use the visual editor to modify content
3. **Commit Changes**: Changes are saved as Git commits

### Building for Production

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

## Key Features

### Performance Optimization
- **Island Architecture**: Only interactive components hydrate
- **Lazy Loading**: Components load on demand
- **Image Optimization**: Automatic image optimization with Astro
- **CSS Optimization**: Scoped styles, minimal CSS

### Content Management
- **Visual Editing**: Real-time preview while editing
- **Git-Based**: All content versioned in Git
- **Markdown/MDX**: Developer-friendly content format
- **Media Management**: Built-in media library

### Developer Experience
- **TypeScript**: Type safety across the stack
- **Hot Module Replacement**: Fast development feedback
- **Component Reusability**: Preact components work everywhere
- **File-Based Routing**: Intuitive page creation

## Page Types

### Homepage
- Hero section with CTA
- Feature highlights
- Social proof/testimonials
- Newsletter signup

### About Page
- Company story
- Team section
- Mission/values

### Features Page
- Feature grid
- Detailed descriptions
- Visual demonstrations

### Pricing Page
- Pricing tiers
- Feature comparison
- FAQ section

### Contact Page
- Contact form (Preact component)
- Contact information
- Map integration

## Components Architecture

### Static Components (Astro)
- Layout components
- SEO components
- Non-interactive sections

### Interactive Components (Preact)
- Navigation with mobile menu
- Contact forms
- Modal dialogs
- Interactive pricing calculators
- Newsletter signup forms

## SEO Considerations

- Meta tags in layout components
- Sitemap generation
- robots.txt
- Open Graph tags
- Structured data (JSON-LD)
- Fast page load times
- Mobile responsive design

## Deployment Options

### Recommended Platforms
1. **Vercel**: Zero-config deployment, edge network
2. **Netlify**: Git-based deployment, form handling
3. **Cloudflare Pages**: Global CDN, fast builds
4. **GitHub Pages**: Free hosting for public repos

### Build Command
```bash
npm run build
```

### Output Directory
```bash
dist/
```

## Environment Variables

```env
# Tina CMS
TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token

# Site Configuration
PUBLIC_SITE_URL=https://yoursite.com
```

## Content Structure

### Pages Collection
```markdown
---
title: "Page Title"
description: "Page description"
---

# Page Content
Your markdown content here...
```

### Frontmatter Fields
- `title`: Page title
- `description`: Meta description
- `ogImage`: Social share image
- `publishDate`: Publication date
- `draft`: Draft status

## Best Practices

### Performance
- Use Astro for static content
- Use Preact only for interactive elements
- Implement lazy loading for images
- Minimize JavaScript bundle size
- Use static site generation (SSG)

### Content Management
- Organize content in logical collections
- Use meaningful file names
- Write descriptive commit messages
- Test content changes in preview mode

### Development
- Keep components small and focused
- Use TypeScript for type safety
- Follow consistent naming conventions
- Document complex components
- Test across devices and browsers

## Testing Strategy

### Visual Testing
- Test all pages in development mode
- Use Tina preview for content changes
- Cross-browser testing

### Performance Testing
- Lighthouse scores
- Core Web Vitals
- Page load times
- Bundle size analysis

## Future Enhancements

- [ ] Blog functionality
- [ ] Multi-language support
- [ ] Advanced analytics integration
- [ ] A/B testing capabilities
- [ ] Enhanced form handling
- [ ] Search functionality
- [ ] Customer portal
- [ ] Integration with CRM/email marketing

## Resources

### Documentation
- [Astro Documentation](https://docs.astro.build)
- [Preact Documentation](https://preactjs.com)
- [Tina CMS Documentation](https://tina.io/docs)

### Community
- Astro Discord
- Tina Slack
- GitHub Discussions

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Review and optimize bundle size
- Monitor Core Web Vitals
- Update content regularly
- Backup Git repository

### Security
- Keep dependencies updated
- Use environment variables for secrets
- Implement CSP headers
- Regular security audits

---

**Project Status**: Planning Phase
**Last Updated**: 2026-01-13
**Maintained By**: Development Team
