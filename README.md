# Yazan Bawaqna Portfolio

Premium multi-page portfolio site for Yazan Bawaqna, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Live Site

[Open the portfolio](https://yazan-portfolio-sable.vercel.app)

## Highlights

- Cinematic personal portfolio with separate pages for projects, experience, education, skills, goals, perspective, and contact
- Verified project links with Vercel demos where available
- Resume download, contact actions, language section, and editable typed content
- Built for Vercel deployment with no required environment variables

## Run Locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Update Content

Most editable content lives in `src/content`:

- `profile.ts`: name, positioning, contact links, resume path, hero copy
- `projects.ts`: project summaries, tech stacks, GitHub links, live links, placeholder notes
- `experience.ts`: verified work experience cards
- `skills.ts`: capability pillars and skill map
- `travel.ts`: global perspective, wildlife, and humanities sections

## Swap Links And Assets

- Replace unresolved project placeholders in `src/content/projects.ts`.
- Replace online project image URLs in `src/content/projects.ts` if you want different 4K references.
- Replace the resume at `public/resume/Yazan_Bawaqna_CV13.pdf`.
- Replace the social preview at `public/og.svg`.
- Update colors and surface treatments in `src/app/globals.css`.

## Deploy To Vercel

1. Push the repo to GitHub.
2. Import the repo in Vercel.
3. Use the default Next.js settings.
4. Run `npm run build` as the build command.

No environment variables are required for the portfolio.

## Current Placeholders

- Ghosted links to `https://ghosted.vercel.app`, but that deployment appears to be an older prototype; the GitHub repo reflects the current job-post scoring MVP.
- WildWhere uses its verified GitHub Pages browser demo because no Vercel deployment was verified.
- ReachAI is displayed as the product-facing name; the verified repository is currently named `OutreachAI`.
