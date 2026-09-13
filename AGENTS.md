<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Techno Architecture - Project Conventions & Architecture Guide

## 1. Tech Stack Overview
- **Framework**: Next.js 16 (App Router) with React 19 & TypeScript
- **Styling**: Tailwind CSS v4 with custom theme tokens (`--color-brand-dark: #1A1A1A`, `--color-brand-grey: #4A4A4A`, `--color-brand-light: #9B9B9B`)
- **Database & ORM**: PostgreSQL via Prisma ORM v6 (`prisma/schema.prisma`)
- **Authentication**: Session-based credentials authentication using `iron-session` (stateless encrypted cookie)
- **Media Delivery**: Cloudinary CDN with signed server-side uploads (`/api/cloudinary/sign` -> direct Cloudinary upload)
- **Email**: Resend API (`resend` client in `lib/resend.ts`)
- **SEO**: Dynamic `app/sitemap.ts` and `app/robots.ts`

## 2. Folder Structure
```
app/
├── (public)/                       # Public-facing portfolio routes
│   ├── layout.tsx                  # Public layout with sticky Navbar and Footer
│   ├── page.tsx                    # Home (Hero, Projects highlight, Why Techno, Testimonials)
│   ├── about/page.tsx              # About Us (Vision, Mission, Core Values, USP)
│   ├── services/page.tsx           # Services list
│   ├── projects/                   # Projects portfolio
│   │   ├── page.tsx                # Filterable project list (All / Completed / Ongoing)
│   │   └── [slug]/page.tsx         # Detailed project showcase with lightbox gallery
│   ├── team/page.tsx               # Studio team grid
│   ├── blog/                       # Journal / Articles
│   │   ├── page.tsx                # Blog archive
│   │   └── [slug]/page.tsx         # Single article reader
│   ├── faq/page.tsx                # Accordion FAQ
│   ├── gallery/page.tsx            # Masonry / categorized visual gallery with lightbox
│   ├── recognitions/page.tsx       # Awards, press & certifications
│   └── contact/page.tsx            # Inquiry form with email dispatch & DB persistence
├── (admin)/
│   └── admin/                      # Protected CMS Portal
│       ├── layout.tsx              # Auth-guarded admin layout with persistent sidebar
│       ├── login/page.tsx          # Credentials login form
│       ├── dashboard/page.tsx      # Overview metrics & quick links
│       ├── projects/page.tsx       # Full CRUD for architectural projects
│       ├── team/page.tsx           # CRUD for team members
│       ├── services/page.tsx       # CRUD for practice services
│       ├── testimonials/page.tsx   # CRUD for client quotes
│       ├── blog/page.tsx           # CRUD for blog posts
│       ├── faq/page.tsx            # CRUD for FAQ items
│       ├── gallery/page.tsx        # Media manager for visual archive
│       ├── recognitions/page.tsx   # Awards and honors manager
│       ├── content-blocks/page.tsx # Editable CMS blocks (Vision, Mission, Taglines, etc.)
│       └── contact-submissions/    # Incoming client lead viewer
├── api/
│   ├── auth/                       # login, logout, me
│   ├── cloudinary/sign/            # Server signature for secure client upload
│   ├── contact/                    # Public contact form submission endpoint
│   └── admin/                      # CRUD API handlers for all entities
components/
├── layout/                         # Navbar, Footer, PublicLayout
├── ui/                             # ScrollReveal, ImageUpload, Lightbox wrappers
└── admin/                          # Admin tables, forms, modals
lib/
├── prisma.ts                       # Global PrismaClient singleton
├── session.ts                      # iron-session configuration and types
├── auth.ts                         # Server-side auth helper (getSession, requireAdmin)
├── cloudinary.ts                   # Cloudinary SDK wrapper and signature generator
├── resend.ts                       # Resend email notification dispatcher
└── utils.ts                        # Slugs, dates, class merging
```

## 3. Key Conventions

### Next.js 16 Async Request APIs
- In Next.js 16, dynamic params and search params are asynchronous promises:
  ```ts
  export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;
    // ...
  }
  ```
- Similarly, route handlers must await `ctx.params`, `cookies()`, and `headers()`.

### Database & Prisma
- Always import `prisma` from `@/lib/prisma`.
- Run `npx prisma generate` after changing `prisma/schema.prisma`.
- Seed test content with `npm run db:seed`.

### Admin Authentication
- Uses `iron-session` with encrypted cookies.
- Server Actions or API routes verify session with `requireAdmin()` from `@/lib/auth`.
- Default credentials: `admin@technoarchitecture.in` / `admin123`.

### Cloudinary Upload Pattern
- Never expose API Secret on the client.
- The client calls `GET /api/cloudinary/sign?folder={folder}` to receive a signed timestamp and signature.
- Client uploads directly to `https://api.cloudinary.com/v1_1/{cloudName}/image/upload`.
- Returned `secure_url` is stored in PostgreSQL.
