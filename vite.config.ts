import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/styles/variables";',
                includePaths: ['src']
            }
        }
    },
    /*
        Configurei um proxy devido ao erro de CORS.
        A requisição funciona normalmente no ambiente de desenvolvimento
        por causa do proxy, mas em produção retornará um erro devido ao CORS.
    */
    server: {
        proxy: {
            '/api': {
                target: 'https://app.econverse.com.br',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
});