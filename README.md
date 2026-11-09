# Colzy Tech — Portfolio Site

React 19 + Vite + Tailwind CSS v4 + React Router. Black / gold / orange theme.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Notes

- **Tailwind v4 setup**: this uses the `@tailwindcss/vite` plugin (see
  `vite.config.js`), not the PostCSS pipeline. This is the setup that
  reliably generates responsive (`sm:` / `md:` / `lg:`) classes — verified
  in the production build here. If you ever see responsive classes
  silently missing again like on Cibus Musica, check that this plugin
  (not `postcss.config.js` + `tailwindcss` as a PostCSS plugin) is what's
  wired up.
- **Contact form**: `src/pages/Contact.jsx` is frontend-only right now —
  it logs to console and shows a success state. Wire `handleSubmit` to
  your Express/Mailjet endpoint (same pattern as Cibus Musica) or a
  Firestore `messages` collection when you're ready.
- **Project data**: everything shown on Home and Work pages lives in
  `src/data/projects.js` — edit that file to update descriptions, stack
  tags, status, or add new projects. Add a `link` field to any project
  once it has a live URL.
- **Signature element**: the thin gold line with the orange dot between
  sections is `<CircuitTrace />` (`src/components/CircuitTrace.jsx`) —
  reuse it anywhere you want a section break.

## Structure

```
src/
  components/   Navbar, Footer, ProjectCard, CircuitTrace, ScrollToTop
  pages/        Home, Work, About, Contact
  data/         projects.js — edit this to update your project list
  index.css     design tokens (colors, fonts) + global styles
```
