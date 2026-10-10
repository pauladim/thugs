# We Are Not Thugs — Website

A React + Vite website for **We Are Not Thugs**, a community organisation supporting young people
affected by street life and limited opportunity through mentorship, education, skills training and
community outreach.

This is a full redesign built around an editorial, premium-NGO visual identity — burnt orange, alpine
green and black on a warm cream background — rather than the cinematic, movie-poster look of the
previous site.

## A note on imagery

This build does not include stock photography. Instead, every image slot uses a small set of
brand-coloured abstract compositions (see `src/components/Motif.jsx`) with a visible "Replace with
photography" label. This avoids generic stock photos and stereotypical poverty imagery until the
organisation supplies real, authentic photography of its people and programmes. To swap one in:

1. Add the image file to `src/assets/` (create the folder if it doesn't exist).
2. Replace the relevant `<PhotoPlaceholder ... />` usage with an `<img>` tag, or update
   `PhotoPlaceholder` in `src/components/Motif.jsx` to render a real image when one is supplied.

## Tech stack

- **React 18** + **Vite** — app shell and build tooling
- **React Router** — client-side routing across 6 pages
- **Tailwind CSS** — styling, using the brand tokens defined in `tailwind.config.js`
- **Framer Motion** — a single restrained entrance animation on the homepage hero
- **Lucide React** — icons

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Environment variables

Copy `.env.example` to `.env` and fill in real values:

```bash
cp .env.example .env
```

- `VITE_PAYSTACK_PUBLIC_KEY` — your Paystack **public** key (safe to expose in the frontend). Get it
  from the Paystack dashboard under Settings → API Keys & Webhooks. The donation form
  (`src/components/DonationForm.jsx`) automatically loads Paystack's inline checkout once this is set —
  until then, submitting the form shows a friendly explanation instead of failing silently.
  **Never** put your Paystack secret key in this project — secret keys belong only on a backend server,
  never in frontend code.
- `VITE_CONTACT_EMAIL`, `VITE_CONTACT_PHONE` — optional; the site currently reads contact details from
  `src/data/siteContent.js` directly, so update them there (see below) unless you wire these in.

## Editing content

Almost everything you'll want to change lives in `src/data/`, not scattered across JSX:

| File | Controls |
|---|---|
| `src/data/siteContent.js` | Org name, contact details, social links, nav labels, homepage stats, values, mission/vision/story, team, testimonial, donation amounts |
| `src/data/programs.js` | All 6 programmes — title, description, objectives, who it serves, how it works, expected impact |
| `src/data/projects.js` | Project archive entries and their categories |

Anything wrapped in `[INSERT ...]` is a placeholder — replace it with real organisational content before
launch. Nothing on this site claims a real statistic, testimonial, partner or outcome that wasn't
supplied in the brief.

## Project structure

```text
src/
├── components/       Reusable UI: Navbar, Footer, Button, cards, forms, motifs
├── pages/             Home, About, Programs, Projects, Donate, Contact
├── data/              Editable content (see table above)
├── styles/            Tailwind entry + base styles
├── App.jsx            Routes
└── main.jsx           App entry point
```

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. In Vercel, choose **Import Project** and select the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Add the environment variables from `.env.example` under Project Settings → Environment Variables.
5. Deploy. Vercel will redeploy automatically on every push to the main branch.

The same `dist/` output works on Netlify, Cloudflare Pages, or any static host.

## Accessibility & performance notes

- Semantic HTML, labelled form fields, and visible focus states throughout.
- `prefers-reduced-motion` is respected — animation is minimal by design (one hero entrance sequence).
- No external image requests until real photography is added, keeping the initial build lightweight.
