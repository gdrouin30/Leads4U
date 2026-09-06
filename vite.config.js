import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    host: true,
    open: false,
    strictPort: true,
    fs: {
      strict: false,
    },
    allowedHosts: true,
    proxy: {
      '/supabase': {
        target: 'https://0ec90b57d6e95fcbda19832f.supabase.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/supabase/, ''),
      },
    },
  },
});
