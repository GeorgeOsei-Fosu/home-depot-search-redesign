import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the site from /<repo-name>/, so production builds
// need that prefix. The dev server stays at the root.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/home-depot-search-redesign/" : "/",
}));
