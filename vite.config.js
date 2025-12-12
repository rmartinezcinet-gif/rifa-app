import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/rifa-app/",  // Usa el nombre EXACTO de tu repo
});
