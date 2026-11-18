import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// GitHub Pages serves this project from /template-preview/.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/template-preview/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-vendor",
              test: /node_modules[\\/](?:react|react-dom)(?:[\\/]|$)/,
              priority: 30,
              maxSize: 240 * 1024,
            },
            {
              name: "base-ui-vendor",
              test: /node_modules[\\/]@base-ui[\\/]react(?:[\\/]|$)/,
              priority: 20,
              maxSize: 240 * 1024,
            },
            {
              name: "calendar-vendor",
              test: /node_modules[\\/](?:date-fns|react-day-picker)(?:[\\/]|$)/,
              priority: 10,
              maxSize: 180 * 1024,
            },
            {
              name: "icons-vendor",
              test: /node_modules[\\/]lucide-react(?:[\\/]|$)/,
              priority: 10,
              maxSize: 180 * 1024,
            },
          ],
        },
      },
    },
  },
})
