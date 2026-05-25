import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Standalone SPA build for Vercel / static hosting.
// Does NOT include Cloudflare Workers or TanStack Start SSR.
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist/spa",
    emptyOutDir: true,
  },
});
