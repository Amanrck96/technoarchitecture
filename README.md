# Techno Architecture

A modern, high-performance web platform and Content Management System (CMS) for **Techno Architecture** — an award-winning contemporary architectural and interior design studio.

Built with Next.js 16 (Turbopack, App Router), React 19, TypeScript, Tailwind CSS v4, Prisma ORM, and PostgreSQL.

---

## 🏛️ Features

### Public Portfolio
- **Hero & Curated Showcase**: Smooth scroll-reveals, responsive project highlights, and studio statistics.
- **Projects Portfolio**: Filterable project gallery (All, Completed, Ongoing) with rich slug-based detail pages and interactive lightbox galleries.
- **Studio Story & About**: Vision, mission, philosophy, design methodology, and core values.
- **Services**: Detailed architectural and interior design practice areas.
- **Team**: Studio leadership and team profiles.
- **Journal / Blog**: Thought-leadership articles, architectural critiques, and project case studies.
- **Visual Archive (Gallery)**: Masonry media archive categorized by typologies.
- **Recognitions & Awards**: Press features, honors, and design awards.
- **Contact & Inquiries**: Dynamic inquiry form with real-time email dispatch (Resend) and database persistence.
- **SEO & Performance**: Dynamic metadata, OpenGraph cards, auto-generated `sitemap.xml`, and `robots.txt`.

### Protected Admin CMS Portal (`/admin`)
- **Credentials-based Authentication**: Secured with encrypted session cookies (`iron-session`).
- **Dashboard Overview**: Studio metrics, inquiry activity, and fast-action shortcuts.
- **Content Management**:
  - Full CRUD for **Projects** (images, client, location, year, completion status, typologies)
  - Full CRUD for **Services**, **Team Members**, **Blog Posts**, and **FAQ**
  - Media management for the visual **Gallery**
  - **Recognitions & Awards** manager
  - **CMS Content Blocks** (Vision, Mission, Studio Taglines)
  - Lead / Contact submissions viewer
- **Cloudinary Direct Signed Uploads**: Zero-server-bandwidth image pipeline with direct signed uploads to Cloudinary CDN.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19 & TypeScript
- **Styling**: Tailwind CSS v4 with custom brand tokens
- **Database & ORM**: PostgreSQL via Prisma ORM v6
- **Session Auth**: `iron-session`
- **Media CDN**: Cloudinary
- **Email Delivery**: Resend
- **Icons & Motion**: Lucide React & Tailwind CSS Animations

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone git@github.com:Amanrck96/technoarchitecture.git
cd technoarchitecture
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Key environment variables:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/techno_architecture"

# Iron Session
SESSION_SECRET="your-secret-key-minimum-32-characters-long"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email (Resend)
RESEND_API_KEY="re_xxxxxxxxxxxx"
CONTACT_EMAIL_TO="info@technoarchitecture.in"

# Base URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Initialize the Database

```bash
# Push schema to database
npx prisma db push

# (Optional) Seed initial demo projects, services, team, and admin account
npm run db:seed
```

> **Default Admin Credentials**:
> - Email: `admin@technoarchitecture.in`
> - Password: `admin123`

### 4. Run Development Server

```bash
npm run dev
```

Visit:
- Public Website: [http://localhost:3000](http://localhost:3000)
- Admin CMS Portal: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts local Next.js Turbopack development server |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Runs the production build |
| `npm run lint` | Runs Next.js ESLint verification |
| `npm run db:seed` | Seeds database with initial architectural data |

---

## 📄 License

Private repository — All rights reserved © Techno Architecture.
