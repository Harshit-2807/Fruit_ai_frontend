import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add this for SPA routing support
  server: {
    historyApiFallback: true,  // For development server
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  },
  // Optional: if deploying to a subdirectory, set base accordingly
  base: './',  // Change this if deploying to a subdirectory
});
