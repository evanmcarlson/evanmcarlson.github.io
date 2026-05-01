# evanmcarlson.github.io

![screenshot](public/images/screenshot.png)

A central hub uniting my GitHub repositories with their live demos — a single place to browse, explore, and run my projects without digging through individual repos.

Built with [Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Adding a project

All project data lives in [`src/data/projects.ts`](src/data/projects.ts). Add a new object to the relevant array and the page updates automatically — no markup to touch.

```ts
{
  owner: 'evanmcarlson',
  name: 'your-repo-name',
  description: 'A short description of the project.',
  tags: ['Tag'],
  githubUrl: 'https://github.com/evanmcarlson/your-repo-name',
  demoUrl: 'https://evanmcarlson.github.io/your-repo-name',
}
```

## Deployment

Pushes to `master` trigger a GitHub Actions workflow that builds the site and deploys it to GitHub Pages automatically.
