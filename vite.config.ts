import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@netlify/vite-plugin-tanstack-start';
import path from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: 'server' },
    }),
    viteReact(),
    netlify(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});