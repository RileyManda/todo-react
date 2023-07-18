import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { resolve } from "path-browserify";

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});
