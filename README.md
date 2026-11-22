# Ayush Singh — Portfolio

A premium, animated single-page portfolio built with **React + Vite**, **Framer Motion** and **Lucide icons**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Customize

Almost all content lives in one file: `src/data.js`.

- `profile` — name, email, location and intro text
- `experiences` — roles, companies, durations and bullet tags
- `skills` / `services` — toolkit and offered services
- `stats` — animated numbers in the About section

**Before publishing:** replace the placeholder email `ayushsingh@example.com` in `src/data.js` with your real email address.

Colors, typography and spacing are defined at the top of `src/index.css` in the `:root` block.

## Download as PDF

The **Download PDF** button (in the navbar and hero) renders the entire page into a multi-page A4 PDF and saves it directly to the visitor's device. It uses `html2canvas` + `jspdf` in `src/components/DownloadPDF.jsx`, and briefly walks the page to make sure scroll-triggered animations have revealed every section before capturing.

## Deploy to GitHub Pages (automatic)

1. Create a GitHub repository and push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. In your repo, go to **Settings → Pages → Build and deployment**, and set **Source** to **GitHub Actions**.

3. That's it — the workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site with the correct base path, and deploys it on every push to `main` (or `master`).

Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

### Why the base path matters

React/Vite apps reference bundled JS and CSS with absolute paths by default (`/assets/...`). GitHub Pages project sites serve from a subfolder (`/<repo-name>/`), so those assets would 404. `vite.config.js` now reads `VITE_BASE`, which the workflow sets automatically from the repo name. For `<username>.github.io` repos it correctly uses `/`.
