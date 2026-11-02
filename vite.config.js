import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { mdeVue } from 'mde-vue/vite';

export default defineConfig({
  base: '/droid-haruka/',
  plugins: [vue(), mdeVue()],
  build: {
    target: 'chrome135',
    outDir: 'site',
    emptyOutDir: true,
  },
});
