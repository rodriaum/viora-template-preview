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
})
