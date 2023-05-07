import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import glsl from 'vite-plugin-glsl'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), glsl()],
  server: {
    // port: 5173, // 启动端口
    // hmr: {
    //   host: '127.0.0.1',
    //   port: 5173
    // },
    // 设置https代理
    proxy: {
      api: {
        target: 'http address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
