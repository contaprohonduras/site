// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ⚠️ Importante: rutas relativas para GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'docs', // 🔁 Usamos 'docs' porque GitHub Pages solo permite /docs o /root
  },
});