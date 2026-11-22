import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// On GitHub Pages project sites, assets must be requested from /<repo-name>/.
// Locally (and for <username>.github.io sites) the base stays "/".
// The deploy workflow sets VITE_BASE automatically — no manual editing needed.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
});
