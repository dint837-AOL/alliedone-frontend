# AlliedOne Frontend

<div align="center">

![AlliedOne](https://img.shields.io/badge/AlliedOne-Limited-0D3A5C?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.x-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**The public-facing marketing and CRM web application for AlliedOne Limited.**

[Live Site](https://www.alliedoneltd.com) · [Backend Repo](../alliedone-backend) · [Report Bug](https://alliedoneltd.com/contact)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages and Routing](#pages-and-routing)
- [Component Architecture](#component-architecture)
- [Key Features](#key-features)
- [Local Development](#local-development)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Design System](#design-system)

---

## Overview

The AlliedOne Frontend is the public-facing web application for **AlliedOne Limited**, a Bangladeshi AI automation, digital services, and global trade company. Built with Next.js 16 (App Router), React 19, and TypeScript, it delivers a premium, performance-first web experience for potential clients and business partners.

The application serves multiple purposes:

- **Marketing** — Showcases AlliedOne's two core business pillars (Digital Solutions and Global Trade) with dedicated, SEO-optimized service pages.
- **Lead Generation** — An intelligent contact form that captures, validates, and routes inquiries directly to the CRM backend with automated email notifications.
- **User Engagement** — Features a real-time AI-powered chat widget, a feedback submission widget, a careers application portal, and a newsletter subscription system with welcome emails.
- **Partner Brand Hosting** — Hosts the **GSBD (Global Supply BD)** brand page, a subsidiary focused on export, import, and supply chain.
- **Legal and Compliance** — Hosts legally-complete Terms of Service and Privacy Policy pages.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | Next.js | 16.x | Full-stack React framework with App Router |
| **UI Library** | React | 19 | Component model and state management |
| **Language** | TypeScript | 5.x | Type-safe development |
| **Styling** | Tailwind CSS | 4.x | Utility-first CSS framework |
| **Animation** | Framer Motion | 12.x | Smooth page and component animations |
| **AI Chat** | Vercel AI SDK (`ai`) | 7.x | Streaming chat completions via OpenAI-compatible endpoint |
| **Forms** | React Hook Form + Zod | 7.x / 4.x | Performant form validation and schema enforcement |
| **Notifications** | Sonner | 2.x | Toast notification system |
| **Icons** | Lucide React | 1.x | Consistent, lightweight icon library |
| **Font** | Inter (Google Fonts) | — | Primary typeface, loaded via `next/font` |
| **Hosting** | Vercel | — | Edge deployment with automatic CI/CD |

---

## Project Structure

```
alliedone-frontend/
├── public/
│   ├── logo-mark-v2.png       # AlliedOne primary logo mark
│   ├── gsbd-logo.png          # Global Supply BD brand logo
│   └── ...                    # Static assets and images
│
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout: Nav, Footer, floating widgets, Toaster
│   │   ├── page.tsx           # Homepage (/)
│   │   ├── globals.css        # Global CSS resets and design tokens
│   │   │
│   │   ├── about/             # About Us page (/about)
│   │   │   └── page.tsx
│   │   │
│   │   ├── careers/           # Careers portal (/careers)
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/           # Contact page (/contact)
│   │   │   └── page.tsx
│   │   │
│   │   ├── gsbd/              # GSBD (Global Supply BD) brand page (/gsbd)
│   │   │   └── page.tsx
│   │   │
│   │   ├── services/          # Service pages
│   │   │   ├── page.tsx       # Services overview index (/services)
│   │   │   └── [slug]/        # Dynamic service detail pages
│   │   │       └── page.tsx
│   │   │
│   │   ├── privacy/           # Privacy Policy (/privacy)
│   │   │   └── page.tsx
│   │   │
│   │   ├── terms/             # Terms of Service (/terms)
│   │   │   └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── chat/          # AI chat streaming API route
│   │   │       └── route.ts
│   │   │
│   │   ├── error.tsx          # Global error boundary
│   │   └── not-found.tsx      # Custom 404 page
│   │
│   └── components/
│       ├── sections/          # Full-page section components
│       │   ├── CareerApplicationForm.tsx  # Job application form with file upload
│       │   ├── FAQSection.tsx             # Accordion FAQ section
│       │   ├── LeadCaptureForm.tsx        # Multi-field CRM contact/inquiry form
│       │   └── NewsletterSignup.tsx       # Full-featured newsletter signup block
│       │
│       └── ui/                # Reusable atomic UI components
│           ├── ChatWidget.tsx         # Floating AI chat assistant
│           ├── FeedbackWidget.tsx     # Bug report and suggestion widget
│           ├── NewsletterWidget.tsx   # Compact newsletter widget (footer)
│           ├── DesktopNav.tsx         # Desktop navigation bar with dropdown
│           ├── MobileNav.tsx          # Mobile hamburger navigation overlay
│           ├── ScrollToTop.tsx        # Floating scroll-to-top button
│           └── FadeInSection.tsx      # Intersection Observer animation wrapper
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages and Routing

All routes use the **Next.js App Router** with file-based routing.

| Route | Rendering | Description |
|-------|-----------|-------------|
| `/` | Static | Homepage with Hero, Services pillars, Process, FAQ, Testimonials, CTA, and Newsletter |
| `/about` | Static | Company story, team, mission, and values |
| `/careers` | Static | Careers portal with open positions and job application form |
| `/contact` | Static | Lead capture form with newsletter signup below |
| `/gsbd` | Static | Global Supply BD brand page — coming soon teaser |
| `/services` | Static | Services overview grid for both pillars |
| `/services/[slug]` | SSG | Individual service detail pages (pre-rendered paths) |
| `/privacy` | Static | Full Privacy Policy |
| `/terms` | Static | Terms of Service (20 sections) |
| `/api/chat` | Dynamic | Streaming AI chat completions endpoint |

### Dynamic Service Slugs

Pre-rendered at build time via `generateStaticParams`:

| URL Slug | Service Name |
|----------|-------------|
| `ai-opportunity-implementation` | AI Opportunity and Implementation |
| `process-automation-strategy` | Process Automation Strategy |
| `whatsapp-messaging-bots` | WhatsApp and Messaging Bots |
| `email-automation-consulting` | Email Automation Consulting |
| `digital-marketing-ai-agency` | Digital Marketing and AI Agency |
| `ai-content-studio` | AI Content Studio |
| `skill-development` | Skill Development |
| `global-trade-sourcing` | Global Trade — Sourcing |
| `global-trade-logistics` | Global Trade — Logistics |
| `global-trade-export` | Global Trade — Export |
| `government-procurement` | Government Procurement |

---

## Component Architecture

### Section Components

Large, full-width components that form entire page sections.

#### `LeadCaptureForm.tsx`

The primary CRM lead capture form used on the Contact and Homepage. Features:

- Multi-field form: name, email/phone, company, service interest dropdown, and message.
- Client-side validation using **React Hook Form** and **Zod** schemas.
- Integrates with `POST /api/leads` on the backend.
- Triggers an auto-reply email to the submitter and an internal notification to the team.
- Loading state with animated spinner and toast feedback via **Sonner**.
- Clear success and error feedback messaging.

#### `NewsletterSignup.tsx`

A full-width, premium newsletter subscription block. Used on the Homepage and Contact page. Features:

- Glassmorphism card design with layered radial gradients and a subtle dot-grid background overlay.
- Gradient headline mixing standard and gradient-clipped text styles.
- Integrates with `POST /api/newsletter/subscribe`.
- Animated success state with a confirmation icon.
- Styled error block for validation feedback.
- "No spam. Unsubscribe at any time." reassurance copy.

#### `CareerApplicationForm.tsx`

A structured job application form on the Careers page. Features:

- Collects: applicant name, email, phone, position of interest, cover letter, and CV file upload.
- Built with **React Hook Form** and **Zod** for robust client-side validation.
- Animated submission states with **Framer Motion**.
- Inline success/error feedback.

#### `FAQSection.tsx`

An expandable accordion FAQ section used on the Homepage and Careers page. Features:

- Smooth expand/collapse animations powered by **Framer Motion**.
- Contains company-profile-sourced FAQs covering services, process, and pricing.

---

### UI Components

Reusable, atomic components shared across pages.

#### `ChatWidget.tsx`

A floating AI chat assistant pinned to the bottom-right corner of every page.

- Powered by the `/api/chat` streaming route using the **Vercel AI SDK**.
- Renders markdown-formatted responses in real time via the `useChat` hook.
- Maintains full conversation history in React state.
- Smooth open/close animation with **Framer Motion**.

#### `FeedbackWidget.tsx`

A persistent floating feedback button allowing users to submit bug reports or suggestions without leaving the page.

- Collects: name, email, type (`BUG_REPORT`, `SUGGESTION`, `OTHER`), and message.
- Validated on both frontend and backend (Zod schemas).
- Surfaces backend validation errors (e.g., character limits) to the user in a friendly format.
- Integrates with `POST /api/feedback`.

#### `NewsletterWidget.tsx`

A compact, horizontal newsletter form used in the site footer.

- Same subscription logic as `NewsletterSignup.tsx`.
- Horizontal layout: description text on the left, email input and submit button on the right.
- Dark theme to match the footer background.

#### `DesktopNav.tsx` / `MobileNav.tsx`

Responsive navigation components:

- **Desktop:** Sticky horizontal nav bar with a **Services dropdown** exposing Digital Solutions and Global Trade sub-pillars, plus a "Get Started" CTA button.
- **Mobile:** Hamburger icon trigger with a full-screen slide-down overlay menu; Feedback widget entry point integrated directly in the mobile menu.

#### `ScrollToTop.tsx`

A floating button that appears after scrolling 400px down the page. Positioned above the chat widget button to avoid overlap.

#### `FadeInSection.tsx`

A lightweight wrapper using the browser-native **Intersection Observer API** to fade in content as it enters the viewport. Used on the homepage for animated section reveals with zero external dependencies.

---

## Key Features

### AI Chat Widget

An in-page AI assistant powered by a Next.js streaming API route using the **Vercel AI SDK**. Users can ask questions about AlliedOne's services, and the assistant responds in real time with streamed text output.

### Smart Lead Capture

The contact form captures structured CRM leads using **React Hook Form** + **Zod** validation, fires an automated auto-reply email to the submitter, and sends an internal notification to the AlliedOne team — all on a successful form submission.

### Newsletter System

Full end-to-end newsletter subscription flow:

1. User submits their email in the Homepage section, Contact page, or Footer widget.
2. Frontend sends a validated `POST` request to the backend.
3. Backend saves the subscriber and sends a formatted HTML welcome email via Brevo.
4. Duplicate and re-subscription scenarios are gracefully handled with informative messages.

### Careers Portal

A full careers page featuring open positions, company culture information, and a structured job application form that collects applicant details and CV file uploads.

### GSBD Brand Page

A dedicated page (`/gsbd`) hosting the **Global Supply BD** brand identity with a polished "coming soon" teaser page featuring glassmorphism design and ambient glow effects.

### Feedback Widget

A persistent bug/suggestion reporter available on every page. Submissions are saved to the database for internal team review.

### Scroll Animations

Page sections use `FadeInSection` (Intersection Observer API) for performant scroll-triggered fade-in effects. The Chat widget, Career form, and FAQ accordion leverage **Framer Motion** for richer interactive transitions.

---

## Local Development

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- The **AlliedOne Backend** running locally on port `3001`

### 1. Clone and Install

```bash
git clone https://github.com/mdkamrulislamdev/alliedone-frontend.git
cd alliedone-frontend
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.local.example .env.local
# Edit .env.local with your values
```

### 3. Start the Development Server

```bash
npm run dev
# App starts at http://localhost:3000
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server (webpack mode) |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# ─── Backend API ───────────────────────────────────────────
# URL of the AlliedOne backend API (no trailing slash)
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# ─── AI Chat ───────────────────────────────────────────────
# API key for the AI provider powering /api/chat
OPENAI_API_KEY=your_openai_api_key_here
```

For **Vercel production**, set these in the project's **Environment Variables** dashboard:

| Variable | Production Value |
|----------|-----------------|
| `NEXT_PUBLIC_API_URL` | `https://alliedone-backend.onrender.com/api` |
| `OPENAI_API_KEY` | Your production OpenAI key |

> `NEXT_PUBLIC_*` variables are exposed to the browser bundle. Never put secret keys in `NEXT_PUBLIC_*` variables.

---

## Deployment

This application is deployed on **[Vercel](https://vercel.com)** with automatic deployments triggered on every push to the `main` branch.

### Vercel Service Settings

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |
| **Install Command** | `npm install` |

### Build Output Summary

```
Route (app)
├── ○ /                          Static
├── ○ /about                     Static
├── ○ /careers                   Static
├── ○ /contact                   Static
├── ○ /gsbd                      Static
├── ○ /services                  Static
├── ● /services/[slug]           SSG — pre-rendered paths
├── ○ /privacy                   Static
├── ○ /terms                     Static
└── ƒ /api/chat                  Dynamic (streaming)

○  Static  — prerendered as static content
●  SSG     — prerendered with generateStaticParams
ƒ  Dynamic — server-rendered on demand
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Brand Dark** | `#0D3A5C` | Hero backgrounds, dark sections, footer |
| **Brand Blue** | `#2180C0` | Primary buttons, accents |
| **Brand Light Blue** | `#5BAEE8` | Hover states, gradient highlights |
| **Background** | `#F8FAFC` | Page backgrounds (slate-50) |
| **Text Primary** | `#0F172A` | Body text (slate-900) |
| **Text Secondary** | `#475569` | Muted / supporting text (slate-600) |

### Typography

- **Font Family:** `Inter` (Google Fonts, `latin` subset, loaded via `next/font`)
- **Weights:** 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

### Layout Tokens

- **Max content width:** `max-w-7xl` (1280px)
- **Standard section padding:** `py-20 md:py-28 px-6`
- **Card border radius:** `rounded-2xl` (16px)
- **Large block radius:** `rounded-3xl` (24px) for hero and feature blocks

### Core Component Patterns

| Pattern | Classes |
|---------|---------|
| **Primary Button** | `bg-[#2180C0] text-white hover:bg-[#1A5C8A] rounded-xl font-bold shadow-md` |
| **White Card** | `bg-white border border-slate-100 rounded-2xl shadow-sm` |
| **Dark Section** | `bg-[#0D3A5C]` with radial gradient overlay divs for depth |
| **Glassmorphism Panel** | `bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl` |
| **Pill / Badge** | `bg-white/10 text-[#5BAEE8] border border-white/20 rounded-full uppercase tracking-widest text-xs` |

---

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit using conventional commits: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request against `main`

---

## License

This project is proprietary software owned by **AlliedOne Limited**. All rights reserved.

---

<div align="center">
  <p>Built by the <strong>AlliedOne Limited</strong> engineering team</p>
  <p>
    <a href="https://alliedoneltd.com">alliedoneltd.com</a> ·
    <a href="mailto:info@alliedoneltd.com">info@alliedoneltd.com</a>
  </p>
</div>
