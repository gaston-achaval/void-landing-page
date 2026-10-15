import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// BASE_PATH: en GitHub Pages usa el nombre del repo (ej: /void-landing-page/)
export default defineConfig(() => ({
  base: process.env.BASE_PATH ?? "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
