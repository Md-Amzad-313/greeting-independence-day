import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/greeting-independence-day/' : '/',
    plugins: [preact(), tailwindcss()],
  };
});
