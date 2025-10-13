# HERO.IO Apps Showcase

HERO.IO is a Vite + React single-page experience that spotlights trending digital products and simulates an internal app marketplace. It demonstrates modern UI patterns, client-side routing, persistent state, and lightweight analytics to present how a product studio might market and manage its catalog.

## Live Demo
- Explore the hosted build here: https://appkhuji.netlify.app/

## Overview
- Home page hero highlights the studio's story and high-level metrics.
- Trending grid and catalog view surface curated apps from local JSON sources.
- Dynamic detail pages pair rich metadata with an interactive ratings chart and install actions.
- Installation state persists in `localStorage`, backed by toast notifications and a dedicated management screen.
- Responsive Tailwind + DaisyUI styling keeps the layout polished on every device.

## Features
- **Marketing hero:** Branded landing section with platform CTAs and trust metrics.
- **Trending spotlight:** Loader-driven fetch of `/data/trendingData.json` renders a responsive card grid with download/rating badges.
- **Catalog search:** Debounced filtering over `/data/appsData.json` with graceful "searching" spinner feedback.
- **Deep app profiles:** Detail route (`/Apps/:id`) visualizes ratings via Recharts, summarizes stats, and surfaces install/uninstall controls.
- **Installations dashboard:** Lists and sorts installed apps, enabling one-click removal while reflecting live counts.
- **Persistent feedback loop:** Install/uninstall actions update `localStorage` and trigger contextual toast notifications.
- **Loading & error handling:** Router-level loading states blur the UI, and dedicated 404/empty-state screens guide users back on track.

## Tech Stack
- React 19 + React Router 7
- Vite build tooling
- Tailwind CSS v4 with DaisyUI components
- Recharts for data visualization
- React Toastify for notifications

## Getting Started
- **Prerequisites:** Node.js 18+ and npm.
- **Install dependencies:** `npm install`
- **Start the dev server:** `npm run dev` (defaults to http://localhost:5173)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`

## Available Scripts
- `npm run dev` — start the Vite development server with hot module reloading.
- `npm run build` — generate an optimized production bundle.
- `npm run preview` — serve the built assets locally for smoke testing.
- `npm run lint` — run ESLint with the project configuration.

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

## Data Sources
- **`public/data/trendingData.json`** powers the home page spotlight.
- **`public/data/appsData.json`** feeds the catalog, detail view, and installations dashboard.
- Assets in `public/` and `src/assets/` are referenced directly by the cards and hero components.

## Application Flow
- **Home:** Hero banner introduces the studio, followed by trending apps pulled through a loader.
- **Apps:** Full catalog view with instant search feedback and reusable card grid.
- **App Details:** Lookup by ID, render analytics chart, and manage installation state via outlet context.
- **Installations:** Hydrates from `localStorage`, allows sorting, and mirrors uninstall actions with toasts.
- **Fallbacks:** App-specific 404 screen protects against invalid IDs, while a global error page catches unknown routes.

## Persistence & Notifications
- Installation state is centralized in `Root.jsx`, which exposes install/uninstall handlers via `Outlet` context.
- `src/utils/storage.js` abstracts reads and writes to `localStorage`.
- Toast messages (React Toastify) confirm every change, keeping users informed without navigating away.

## Deployment Notes
- The `_redirects` file under `public/` enables SPA-friendly routing on platforms like Netlify.
- Update the GitHub and social links in the navbar/footer to point to your organization before going live.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-update`.
3. Commit your changes and open a pull request.

## License
No license has been specified. Add a LICENSE file if you plan to distribute or open-source the project.