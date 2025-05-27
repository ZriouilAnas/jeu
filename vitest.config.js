/// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./src/setupTests.js"],
    include: ["tests/**/*.test.jsx"],
    globals: true,
    environment: "jsdom",
  },
});
