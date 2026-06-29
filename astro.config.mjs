// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://dra-gabriela-dornelas.vercel.app",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
