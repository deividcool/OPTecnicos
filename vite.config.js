import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* base: 'https://colisionbeta.exiware.co/OperacionesTecnico/dist/',   */
  /* base: 'http://192.168.1.3/simplexweb/colision/OperacionesTecnico/dist/',   */
  server: {
    proxy: {
      '/api': 'http://192.168.1.3',
    },
  },
})
