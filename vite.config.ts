import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project at /gethyped-site/.
// Override with BASE_PATH=/ when deploying to a domain root.
const base = process.env.BASE_PATH ?? '/gethyped-site/'

export default defineConfig({
  plugins: [react()],
  base,
  server: { port: 5173 },
})
