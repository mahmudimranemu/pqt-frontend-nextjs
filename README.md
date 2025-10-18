Property Quest Turkey — Frontend

This repository contains the frontend for Property Quest Turkey, a Next.js-based web application that lists and showcases properties in Turkey. The app is built with the Next.js App Router (TypeScript), and is intended to be served as a modern React/SSR frontend that consumes an API (separate backend repository).

This README covers local development, build and deployment tips, environment variables, and contribution guidelines specific to the frontend.

## Quick start (Windows / PowerShell)

1. Install dependencies (pnpm is recommended):

```powershell
pnpm install
# or
npm install
```

2. Run the development server:

```powershell
pnpm dev
# or
npm run dev
```

3. Open http://localhost:3000 in your browser. The app uses the `app/` directory and supports fast refresh while you edit files.

## Build and production preview

```powershell
pnpm build
pnpm start
# or for npm
npm run build; npm run start
```

This will build the Next.js app and start the production server for a local preview.

## Environment variables

The frontend expects several environment variables for connecting to the backend API and third-party services. Create a `.env.local` file in the project root (never commit secrets).

Example `.env.local` (values should be provided by the backend or infrastructure team):

```
NEXT_PUBLIC_API_URL=https://api.propertyquestturkey.example
NEXT_PUBLIC_MAPS_KEY=your-maps-api-key
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Keep private keys out of the frontend repo.

## Project structure

- `app/` - Next.js App Router pages and layouts (server and client components)
- `public/` - static files and assets
- `styles/` or `globals.css` - global styles
- `next.config.js/ts` - Next.js configuration

Adjust structure as the project grows (components, hooks, lib, services, types).

## Linting & Formatting

This project includes TypeScript and likely ESLint/Prettier configs. Run the linters before committing:

```powershell
pnpm lint
pnpm format
# or using npm scripts
npm run lint
npm run format
```

If lint scripts are not present, check `package.json` for available scripts and adapt the commands.

## Tests

If tests exist, run them with the configured test runner (Jest / Vitest / React Testing Library):

```powershell
pnpm test
```

Add unit and integration tests for components and page behavior where possible.

## Deployment

Recommended platforms: Vercel (native Next.js support), Netlify, or any platform that supports Node.js servers. For static-exportable parts you can use S3/CloudFront.

Vercel is the simplest option:

1. Push the repository to GitHub (or GitLab/Bitbucket).
2. Import the repo in Vercel and set the environment variables in the Vercel dashboard.
3. Set the build command to `pnpm build` (or `npm run build`) and the output directory to the default Next.js output.

For Docker deployments, build the app and use a lightweight Node image or the Next.js recommended base.

## Contributing

- Fork the repo and create feature branches for changes.
- Follow the existing code style. Run lint/format before creating a PR.
- Add tests for new features and bug fixes.
- Document any environment variables or infra requirements in this README.

## Troubleshooting

- If you see TypeScript or build errors, run `pnpm build` locally to reproduce.
- Ensure the backend API URL in `.env.local` is reachable and CORS allows requests from the frontend origin.
- Check browser console for runtime errors and the server terminal for build-time logs.

## License & Acknowledgements

Include licensing information here if applicable, and acknowledge any libraries or assets used.

---

If you want, I can also:

- Add a short contributing.md or CODE_OF_CONDUCT.
- Create a `.env.example` with the variable names (no secrets).
- Add basic CI workflow for linting and build on push.

If you'd like any of those, tell me which and I'll add them.
