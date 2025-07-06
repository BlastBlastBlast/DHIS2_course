// Basic Vite config for vanilla JS
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    open: true, // Automatically open browser on dev
    port: 5173 // Default Vite port
  }
});
