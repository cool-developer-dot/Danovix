# DANOVIX

Premium luxury handbag brand experience — Next.js 16, React 19, TypeScript, Tailwind CSS v4, GSAP, and Three.js.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4, Lucide icons
- **Motion:** GSAP + ScrollTrigger
- **3D:** React Three Fiber / Three.js (product journey)
- **Deploy:** Vercel-ready (`vercel.json`)

## Routes

| Path | Experience |
|------|------------|
| `/` | Brand opening + cinematic homepage |
| `/search` | Luxury Discovery Experience |
| `/wishlist` | Private Collection |
| `/reserved` | Reserved Collection |
| `/signup` | Authentication |
| `/brand` | Brand story |
| `/contact` | Contact |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run ci         # lint + typecheck + build
```

## Environment

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Set the same variable in Vercel for preview and production.

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new)
2. Set `NEXT_PUBLIC_SITE_URL` to your production origin
3. Deploy — zero extra configuration required

## License

Private — DANOVIX. All rights reserved.
