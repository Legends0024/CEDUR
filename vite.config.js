import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Enable SPA fallback for client-side routing after deployment
  server: {
    open: true,
    historyApiFallback: true,
  },
  preview: {
    open: true,
    historyApiFallback: true,
  },
  // For Netlify/Vercel, use _redirects file in public/
});
