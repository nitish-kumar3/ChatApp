import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import daisyui from "daisyui";

// import react from "vitejs/react-json"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:4002",
        changeOrigin: true,
      },
    },
  },
});
