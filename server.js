import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
  const server = await createServer({
    configFile: false,
    root: __dirname,
    server: {
      port: 3000,
      open: true,
      strictPort: true,
      host: true,
      historyApiFallback: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  });

  await server.listen();
  server.printUrls();
}

startServer().catch((err) => {
  console.error(err);
  process.exit(1);
});
