import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          history: path.resolve(__dirname, 'history.html'),
          organisation: path.resolve(__dirname, 'organisation.html'),
          ranks: path.resolve(__dirname, 'ranks.html'),
          training: path.resolve(__dirname, 'training.html'),
          equipment: path.resolve(__dirname, 'equipment.html'),
          operations: path.resolve(__dirname, 'operations.html'),
          humanitarian: path.resolve(__dirname, 'humanitarian.html'),
          women: path.resolve(__dirname, 'women.html'),
          references: path.resolve(__dirname, 'references.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
