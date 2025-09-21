// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // Import tailwindcss
import autoprefixer from 'autoprefixer' // Import autoprefixer

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Add tailwindcss as a plugin
        autoprefixer(), // Add autoprefixer as a plugin
      ],
    },
  },
})