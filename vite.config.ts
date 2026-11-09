// @lovable.dev/vite-tanstack-config already includes the core TanStack Start,
// React, Tailwind, path aliases, and Lovable deployment plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Required when this repo is deployed outside Lovable, e.g. on Vercel.
  // Lovable builds still override this to their own hosting preset automatically.
  nitro: { preset: "vercel" },
});
