# Static Marketing Site with Astro and Tina CMS

## Project Overview

This project is a modern static marketing site built with Astro and Tina CMS, prioritizing performance through minimal JavaScript. The site follows a progressive enhancement philosophy: HTML/CSS first, Astro second, and client-side JavaScript (Preact) only as a last resort when absolutely necessary.

**Core Philosophy**: Build a fast, accessible, SEO-friendly marketing site that ships virtually zero JavaScript by leveraging modern HTML/CSS capabilities and Astro's static generation.

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
- **Purpose**: Interactive UI components (sparingly used)
- **Why**: Lightweight React alternative (3KB), only when HTML/CSS can't handle the interaction
- **Use Cases** (minimal - only when necessary):
  - Complex state management beyond HTML/CSS
  - Real-time data fetching and updates
  - Advanced form validation with dynamic fields
  - Third-party integrations requiring client-side JavaScript
- **When NOT to use**:
  - Navigation menus (use CSS for dropdowns/mobile menus)
  - Accordions/tabs (use HTML details/summary or CSS)
  - Simple forms (use native HTML forms)
  - Modals/overlays (use HTML dialog element or CSS)
  - Animations (use CSS animations/transitions)
  - Toggles/switches (use CSS checkbox styling)

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
│   ├── components/       # Mostly Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Navigation.astro
│   │   ├── Card.astro
│   │   └── interactive/  # Preact (only when needed)
│   │       └── ContactForm.tsx
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
├── pnpm-lock.yaml        # pnpm lock file
└── tsconfig.json
```

**Note**: This project uses pnpm for package management. Always use pnpm commands instead of npm or yarn.

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (required - this project uses pnpm exclusively)
- Git

**Package Manager**: This project uses **pnpm** exclusively. Do not use npm or yarn.

### Installation

1. **Initialize the project**
   ```bash
   pnpm create astro@latest
   ```

2. **Install Tina CMS**
   ```bash
   pnpm install tinacms @tinacms/cli
   ```

3. **Install Preact integration (ONLY if needed)**
   ```bash
   # Wait until you actually need client-side interactivity
   # Most sites won't need this initially
   pnpm astro add preact
   ```

   **Note**: Start without Preact and only add it when you encounter a feature that truly requires client-side JavaScript beyond what HTML/CSS can provide.

### Configuration

#### Astro Config (`astro.config.mjs`)
```javascript
import { defineConfig } from 'astro/config';
// import preact from '@astrojs/preact'; // Only add when needed

export default defineConfig({
  // integrations: [preact()], // Only uncomment if you need Preact
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
# Option 1: Start Astro dev server only
pnpm run dev

# Option 2: Start Astro with Tina CMS (recommended)
pnpm run dev:tina
```

**Note**: Use `dev:tina` to enable the Tina CMS visual editor at `/admin`.

### Content Management

1. **Access Tina CMS**: Navigate to `/admin` in your browser
2. **Edit Content**: Use the visual editor to modify content
3. **Commit Changes**: Changes are saved as Git commits

### Building for Production

```bash
# Build the site
pnpm run build

# Preview the build
pnpm run preview
```

## Key Features

### Performance Optimization
- **Zero JavaScript by Default**: Astro ships no JS unless explicitly needed
- **HTML/CSS First**: Most features implemented without JavaScript
- **Island Architecture**: Only Preact components hydrate (when absolutely necessary)
- **Minimal Bundle**: Target <10KB total JavaScript for entire site
- **Image Optimization**: Automatic image optimization with Astro
- **CSS Optimization**: Scoped styles, minimal CSS
- **Progressive Enhancement**: Site fully functional without JavaScript

### Content Management
- **Visual Editing**: Real-time preview while editing
- **Git-Based**: All content versioned in Git
- **Markdown/MDX**: Developer-friendly content format
- **Media Management**: Built-in media library

### Developer Experience
- **TypeScript**: Type safety across the stack
- **Hot Module Replacement**: Fast development feedback
- **Zero-JavaScript by Default**: No client-side JS unless explicitly needed
- **Component Reusability**: Astro components compose easily
- **File-Based Routing**: Intuitive page creation
- **Progressive Enhancement**: Site works without JavaScript

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
- Contact form (native HTML form with Astro endpoint)
- Contact information
- Map integration (static or iframe)

## Common Features Without JavaScript

Here are practical examples of implementing common marketing site features without Preact:

### Mobile Navigation Menu (CSS Only)
```astro
<!-- No JavaScript needed! -->
<input type="checkbox" id="menu-toggle" hidden>
<label for="menu-toggle" class="hamburger">☰</label>
<nav class="mobile-menu">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

<style>
  .mobile-menu { display: none; }
  #menu-toggle:checked ~ .mobile-menu { display: block; }
</style>
```

### FAQ Accordion (Native HTML)
```astro
<details>
  <summary>What is your pricing?</summary>
  <p>Our pricing starts at $10/month...</p>
</details>
```

### Contact Form (Astro Endpoint)
```astro
<!-- src/pages/contact.astro -->
<form method="POST" action="/api/contact">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

```typescript
// src/pages/api/contact.ts
export async function POST({ request }) {
  const data = await request.formData();
  // Handle form submission server-side
  return new Response(JSON.stringify({ success: true }));
}
```

### Tabs (CSS :target)
```astro
<nav>
  <a href="#tab1">Tab 1</a>
  <a href="#tab2">Tab 2</a>
</nav>
<div id="tab1" class="tab-content">Content 1</div>
<div id="tab2" class="tab-content">Content 2</div>

<style>
  .tab-content { display: none; }
  .tab-content:target { display: block; }
</style>
```

### Modal Dialog (Native HTML)
```astro
<dialog id="my-modal">
  <h2>Modal Title</h2>
  <p>Modal content</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>

<!-- Minimal JS only to open dialog -->
<button onclick="document.getElementById('my-modal').showModal()">
  Open Modal
</button>
```

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
pnpm run build
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
- **Default to zero JavaScript**: Use Astro components for everything possible
- **Exhaust HTML/CSS solutions first**: Most "interactive" features don't need JS
- **Preact as last resort**: Only when HTML/CSS and Astro can't solve the problem
- **Ship minimal JavaScript**: Target <10KB of JS for the entire site
- Implement lazy loading for images
- Use static site generation (SSG)
- Audit bundle size regularly - any Preact component should be justified

### JavaScript Usage Guidelines
- Before adding Preact, ask: "Can this be done with CSS?"
- Before adding state management, ask: "Can this be server-side?"
- Document why each Preact component is necessary
- Prefer native HTML elements (`<details>`, `<dialog>`, `<form>`)
- Use CSS for animations, transitions, and visual effects
- Use Astro endpoints for form handling and server logic

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

## Performance Targets

The site should aim for these metrics:

### Lighthouse Scores
- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### Bundle Size
- **Total JavaScript**: <10KB (ideally 0KB)
- **First Load**: <50KB
- **Images**: Optimized and lazy-loaded

## Future Enhancements

When adding features, always consider the HTML/CSS-first approach:

- [ ] Blog functionality (Astro with Tina CMS)
- [ ] Multi-language support (Astro i18n)
- [ ] Analytics integration (lightweight, privacy-focused)
- [ ] Search functionality (consider static search or Astro endpoint)
- [ ] Newsletter signup (HTML form → Astro endpoint → email service)
- [ ] Integration with CRM/email marketing (server-side)

**Note**: Evaluate each enhancement against the zero-JavaScript principle. Only add client-side JavaScript when truly necessary.

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
- Update dependencies monthly (using `pnpm update`)
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
