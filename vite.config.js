import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      cesium: path.resolve(__dirname, 'node_modules/cesium')
    }
  },
  optimizeDeps: {
    exclude: ['cesium']
  },
  build: {
    rollupOptions: {
      external: ['cesium']
    }
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium')
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
});
