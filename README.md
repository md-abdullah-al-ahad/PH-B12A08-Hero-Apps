# HERO.IO Apps

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=00d8ff&labelColor=20232a)
![Vite](https://img.shields.io/badge/Vite-7.1-646cff?logo=vite&logoColor=ffd026&labelColor=20232a)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-38bdf8?logo=tailwindcss&logoColor=38bdf8&labelColor=20232a)
![Netlify Status](https://img.shields.io/badge/Deployed%20on-Netlify-00c7b7?logo=netlify&logoColor=00c7b7&labelColor=20232a)

> HERO.IO is a Vite + React single-page experience that spotlights trending digital products and simulates an internal app marketplace. It demonstrates modern UI patterns, client-side routing, persistent state, and lightweight analytics to show how a product studio can market and manage its catalog.

---

## Table of Contents

1. [Live Demo](#live-demo)
2. [Highlights](#highlights)
3. [Feature Overview](#feature-overview)
4. [Tech Stack](#tech-stack)
5. [Getting Started](#getting-started)
6. [Available Scripts](#available-scripts)
7. [Project Structure](#project-structure)
8. [Data Sources](#data-sources)
9. [Application Flow](#application-flow)
10. [Persistence & Notifications](#persistence--notifications)
11. [Deployment Notes](#deployment-notes)
12. [Contributing](#contributing)
13. [License](#license)

---

## Live Demo

- Hosted build: **https://appkhuji.netlify.app/**

<a href="https://appkhuji.netlify.app/" target="_blank">
  <img src="src/assets/images/hero.png" alt="HERO.IO homepage preview" width="100%" />
</a>

---

## Highlights

- Home page hero introduces the studio narrative and shows high-level engagement metrics.
- Loader-driven trending grid surfaces curated products from static JSON feeds.
- Dynamic detail pages pair rich metadata with an interactive ratings bar chart and install actions.
- Install state persists via `localStorage`, with toast feedback and a management dashboard.
- Tailwind + DaisyUI styling keeps the experience polished on desktop and mobile breakpoints.

---

## Feature Overview

| Section            | Summary                                                                 |
| ------------------ | ----------------------------------------------------------------------- |
| Marketing Hero     | Branded landing section with app store CTAs and social proof metrics.   |
| Trending Spotlight | Responsive card grid driven by `/data/trendingData.json`.               |
| App Catalog        | Debounced search filtering over `/data/appsData.json` with spinner UX.  |
| App Details        | Deep dive route (`/Apps/:id`) with Recharts analytics and install flow. |
| Installations Hub  | Sorted list of installed apps backed by persistent state.               |
| Error Handling     | Custom 404 screens for invalid routes and missing app IDs.              |

- [x] Instant navigation via React Router.
- [x] Consistent visual language through Tailwind tokens and DaisyUI components.
- [x] Feedback loop through React Toastify notifications.

---

## Tech Stack

- React 19 and React Router 7
- Vite for lightning-fast builds and dev server
- Tailwind CSS v4 + DaisyUI component primitives
- Recharts for analytics visualizations
- React Toastify for non-blocking notifications

---

## Getting Started

> **Prerequisites:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (defaults to http://localhost:5173)
npm run dev

# Create an optimized production build
npm run build

# Preview the production bundle locally
npm run preview
```

---

## Available Scripts

- `npm run dev` — start the Vite development server with hot module reloading.
- `npm run build` — generate an optimized production bundle.
- `npm run preview` — serve the built assets locally for smoke testing.
- `npm run lint` — run ESLint with the project configuration.

---

## Project Structure

```text
public/
  data/
    appsData.json          # Comprehensive app catalog
    trendingData.json      # Curated subset for the home page
src/
  Components/
    Hero/                  # Landing page hero and marketing metrics
    Navbar/, Footer/       # Global chrome shared across routes
    Allapps/               # Catalog grid renderer
    LoadingSpinner/        # Shared spinner with daisyUI styles
  pages/
    Home/, Apps/, AppDetails/, Installations/
    AppErrorPage/, ErrorPage/
  Routes/Routes.jsx        # React Router configuration and loaders
  utils/storage.js         # LocalStorage helpers for installs
  main.jsx                 # Application entry point
  index.css                # Tailwind + DaisyUI setup
```

---

## Data Sources

- `public/data/trendingData.json` powers the home page spotlight.
- `public/data/appsData.json` feeds the catalog, detail view, and installations dashboard.
- Assets in `public/` and `src/assets/` are referenced directly by the cards and hero components.

---

## Application Flow

1. **Home:** Loader fetches trending data and renders the marketing hero plus featured grid.
2. **Apps:** Catalog view fetches the main dataset and performs debounced search filtering with spinner feedback.
3. **App Details:** Route lookup by ID, render analytics chart, and manage install/uninstall state via outlet context.
4. **Installations:** Hydrates from `localStorage`, supports sorting, and mirrors uninstall actions with toasts.
5. **Fallbacks:** App-specific 404 screen protects against invalid IDs, while a global error page handles unknown routes.

---

## Persistence & Notifications

- Installation state is centralized in `pages/Root/Root.jsx`, exposing install/uninstall handlers through `Outlet` context.
- `src/utils/storage.js` abstracts reads and writes to `localStorage`, ensuring persistence across sessions.
- Toast messages confirm each action, keeping users informed without leaving the current route.

---

## Deployment Notes

- The `_redirects` file under `public/` enables SPA-friendly routing on hosts like Netlify.
- Update the GitHub and social links in the navbar/footer to reflect your organization before going live.
- For custom domains on Netlify, adjust the site settings and re-deploy.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-update`.
3. Commit your changes and open a pull request.

---
