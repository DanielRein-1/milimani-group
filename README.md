# Milimani Group Website

Official website for **Milimani Group**, an ICT support and services company based in Busia, Kenya (`https://milimani-group.vercel.app`).

## Overview

- **Framework:** Next.js 16.4.0 (App Router, TypeScript, Tailwind CSS v4)
- **Centralized Content & Contact Configuration:** [`src/content/site.ts`](src/content/site.ts)
- **Primary Routes:**
  - `/` — Homepage
  - `/about` — About Milimani Group
  - `/services` — ICT Support, Networking, Systems Administration, Security & Backups, Web & Database Support
  - `/projects` — Sample ICT project scenarios
  - `/contact` — Direct WhatsApp, email, and inquiry form
  - `/privacy` — Privacy Notice & Terms of Use

## Getting Started

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Verification Scripts

```bash
npx tsc --noEmit
npm run lint
npm run build
```
