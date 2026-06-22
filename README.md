# Mubashir Ahmad — Portfolio

A production-ready personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. Content is sourced entirely from the resume in `lib/data.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, Metadata API (SEO/OpenGraph)
  page.tsx           Assembles all sections
  globals.css         Tailwind layers, focus states, reduced-motion handling
  robots.ts / sitemap.ts
components/
  layout/             Header (sticky nav) and Footer
  sections/           Hero, About, Experience, Projects, Contact
  ui/                 Reusable primitives: Button, Badge, Container,
                      SectionHeading, ArchitectureFlow (hero diagram),
                      TechStackGrid
lib/
  data.ts             All resume content, fully typed
public/
  avatar.svg          Generated monogram (no headshot was provided)
```

## Notes on the contact form

The form validates client-side and submits via a `mailto:` link pre-filled with the sender's name, email, and message — so it works immediately with zero backend configuration or API keys.

If you'd rather have messages land directly without opening the visitor's email client, swap the `handleSubmit` logic in `components/sections/Contact.tsx` for a POST to an API route backed by a transactional email provider (e.g. Resend, SendGrid) — the form's validation and accessible error states can stay as-is.

## Before deploying

- Update `siteConfig.url` in `lib/data.ts` to your real production domain (used in metadata, OpenGraph, sitemap, and robots).
- Replace `public/avatar.svg` with a real photo if you'd like — `next/image` is already wired up for it in `components/sections/About.tsx`.
- Run `npm run build` to confirm a clean production build before shipping.
