import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWind from "@unocss/preset-wind";
import ViteInspector from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/my-element.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [
    UnoCSS({
      mode: "shadow-dom",
      presets: [presetUno(), presetWind()],
      inspector: false,
    }),
    ViteInspector(),
  ],
});
