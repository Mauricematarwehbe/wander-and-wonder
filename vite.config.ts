import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',             // ✅ Ensures Vite looks in the root directory
  plugins: [react()],
})
