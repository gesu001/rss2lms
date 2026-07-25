# RSS2LMS

RSS2LMS is a frontend-focused Next.js application that demonstrates how RSS-style learning content can be presented in an LMS-style interface.

This repository currently contains **Assessment 1 (Frontend Design & Usability)** work:

- Responsive, accessible UI
- Feed browsing and post details
- Favorites workflow
- Theme and display preferences persisted in local storage

Backend RSS ingestion and LMS synchronization are not implemented in this repository yet.

## Live Deployment

- [RSS2LMS](https://rss2lms.vercel.app/)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9 + `eslint-config-next`

## Requirements

- Node.js 20+ recommended
- npm 10+ recommended

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stop the Dev Server

`npm run dev` starts one Next.js process that serves both:

- Local URL (`http://localhost:3000`)
- Network URL (for example `http://192.168.56.1:3000`)

To stop both, stop that single process:

1. In the same terminal, press `Ctrl + C`
2. If the original terminal is no longer available, kill the process by PID:

```bash
MSYS2_ARG_CONV_EXCL='*' taskkill /PID <pid> /F
```

Notes:

- In Git Bash on Windows, `MSYS2_ARG_CONV_EXCL='*'` prevents argument conversion issues with `taskkill` flags.
- You do not need separate kill commands for local and network URLs.

## Available Scripts

- `npm run dev` - Start Next.js in development mode
- `npm run build` - Create a production build
- `npm run start` - Run the production server
- `npm run lint` - Run ESLint checks

## Application Routes

- `/` - Home and feature overview
- `/feeds` - Feed list with category filter, sorting, card/list view, and pagination
- `/feeds/[id]` - Individual post detail page (statically generated from sample posts)
- `/favorites` - Favorited posts view with the same filtering/sorting/view controls
- `/about` - Project context and assessment scope
- `/settings` - Theme and preference controls
- `*` - Custom 404 page

## Current Feature Set

- **Theme switching** (light/dark) from header and settings
- **Favorites** toggle directly from feed cards
- **View modes** on feed listings: card and list
- **Sorting** by latest or oldest
- **Category filtering**
- **Pagination** on list pages
- **Responsive navigation** with desktop tabs + mobile hamburger menu
- **Breadcrumbs** for route context

## Data Model and Source

Feed content is currently static mock data in:

- `app/components/blogPosts.ts`

Each post includes:

- `id`
- `title`
- `date`
- `summary`
- `content`
- `category`
- `readTime`

## Client-Side Persistence

The app stores user state in browser local storage:

- `theme` - current theme (`light` or `dark`)
- `preferences` - display preferences (`compactLayout`, `showReadTime`, `cardsPerRow`)
- `favoritePosts` - array of favorited post IDs

## Project Structure

```text
app/
	about/page.tsx
	favorites/page.tsx
	feeds/page.tsx
	feeds/[id]/page.tsx
	settings/page.tsx
	page.tsx
	not-found.tsx
	layout.tsx
	components/
		BlogCard.tsx
		blogPosts.ts
		Breadcrumbs.tsx
		Footer.tsx
		Header.tsx
		Navigation.tsx
	context/
		ThemeContext.tsx
		PreferencesContext.tsx
		FavoritesContext.tsx
```

## Accessibility and UX Notes

- Semantic page structure and labeled controls
- Keyboard-focusable interactive elements
- High-contrast light/dark palettes
- Mobile-first responsive layouts

## Known Scope Limits

This is currently a frontend demonstration app:

- No backend API
- No real RSS parsing/ingestion
- No database
- No authentication or user accounts
- No LMS sync pipeline yet

## Next Milestones

Typical next steps for Assessment 2+:

- Add RSS ingestion service
- Introduce API and persistence layer
- Replace mock post dataset with live content
- Add LMS integration workflow
- Add automated tests for critical UI/state flows
