import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { viteSingleFile } from 'vite-plugin-singlefile'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: true,
    hmr: {
      port: 3000,
      host: 'localhost',
      protocol: 'ws',
    },
    // Configuração para permitir acesso a todas as rotas
    fs: {
      strict: false,
    },
    // Configuração para permitir acesso de outros dispositivos na rede local
    cors: true,
  },
  preview: {
    port: 3000,
    open: true,
    cors: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: () => 'app.js',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
})
