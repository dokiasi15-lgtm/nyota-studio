# NYOTA STUDIO

A bilingual React + Vite studio site with an interactive Three.js feature, real portfolio captures, expandable service descriptions, and a guided project request form.

## Run locally

~~~sh
npm install
npm run dev
~~~

## Production build

~~~sh
npm run build
npm run preview
~~~

## Project request handoff

The order form is static and does not store submissions on a server. It opens WhatsApp or the visitor's mail app with the project details filled in; the visitor reviews the message and presses Send to submit it. To change the studio's contact details, update EMAIL and WHATSAPP in src/main.jsx.

## GitHub Pages

The repository includes .github/workflows/deploy.yml. In GitHub, set **Settings → Pages → Source** to **GitHub Actions**, then manually run **Deploy NYOTA STUDIO to GitHub Pages** from the **Actions** tab.

For a repository site, the workflow sets VITE_BASE from the repository name. For a custom domain or a user/organization site, set VITE_BASE to / in the workflow file.

The site and the two portfolio case studies are public. Keep project claims accurate and present the two portfolios as personal projects.
