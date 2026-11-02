import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/droid-haruka/',
  plugins: [vue()],
  build: {
    target: 'chrome135',
    outDir: 'site',
    emptyOutDir: true,
  },
});
