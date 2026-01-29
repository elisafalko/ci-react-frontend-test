import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/assets/frontend/",
  build: {
    outDir: "/output/frontend",
    emptyOutDir: true,
  },
});
