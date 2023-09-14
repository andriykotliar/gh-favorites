import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
    host: true,
  },
  plugins: [
    react(),
    tsconfigPaths()
  ],
});