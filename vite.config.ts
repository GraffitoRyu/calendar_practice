import { defineConfig } from "vite";
import path, { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

const pagesRoot = resolve(__dirname, "pages");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: pagesRoot,
  server: {
    port: 3333,
  },
  build: {
    emptyOutDir: true,
    minify: "esbuild",
    rollupOptions: {
      input: {
        main: path.resolve(pagesRoot, "index.html"),
        full_calendar: path.resolve(pagesRoot, "full_calendar/index.html"),
        big_calendar: path.resolve(pagesRoot, "big_calendar/index.html"),
      },
    },
  },
});
