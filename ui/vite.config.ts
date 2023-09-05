import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // devServer: {
  //   proxy: {
  //     '^/api': {
  //       target: 'http://localhost:3080',
  //       changeOrigin: true
  //     },
  //   }
  // }
})
