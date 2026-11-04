# NYOTA STUDIO

Responsive bilingual studio site built with React + Vite.

## Run locally

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

## GitHub Pages base path

Set `VITE_BASE` to the repository path before building. For a repository called `nyota-studio`, use `/nyota-studio/`. For a custom domain or a user/organization Pages repository, use `/`. Example in PowerShell:

```powershell
$env:VITE_BASE='/nyota-studio/'; npm run build
```

The generated site is in `dist/`. A manual GitHub Actions workflow is included at `.github/workflows/deploy.yml`. In the repository's **Settings → Pages**, set the source to **GitHub Actions**. Then run **Deploy NYOTA STUDIO to GitHub Pages** from the **Actions** tab when you choose to publish. The workflow uses the repository name as the base path; for a custom domain, change the `VITE_BASE` value in the workflow to `/`. Nothing is published until you manually run that workflow.

## Before launch

Replace the marked contact placeholder in `src/main.jsx` with a real email address or contact link. The two portfolio items are labeled as personal projects. The descriptive copy only claims Blender modeling and GLB export, based on the project owner's notes.
