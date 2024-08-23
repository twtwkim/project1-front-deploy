import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://improved-henka-twtwkim-e27780f6.koyeb.app/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
