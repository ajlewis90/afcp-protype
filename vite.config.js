import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  allowedHosts: ['28876bc9-b99a-4f62-8e8d-72b648ac2825-00-13c724o05xof8.picard.replit.dev', '.picard.replit.dev'],

  // Add this server configuration
  server: {
    port: 5173,
    // Ensure static files are served correctly
    fs: {
      strict: false
    }
  },
  
  // Add this to ensure public directory is served
  publicDir: 'public',
  
  // Add this build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }  
})

