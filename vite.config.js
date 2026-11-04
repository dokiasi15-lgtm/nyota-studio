import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE to '/' for a custom domain, or '/repository-name/' for GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
