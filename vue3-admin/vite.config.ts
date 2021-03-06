import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';

const pathResolve = (dir: string) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    AutoImport({
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    createHtmlPlugin({
      minify: true,
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          title: 'Nest.js 微服务后台管理模板',
          // injectScript: `<script src="./inject.js"></script>`,
        },
      },
    }),
  ],
  build: {
    sourcemap: true,
    outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
    chunkSizeWarningLimit: 1500 // chunk 大小警告的限制（以 kbs 为单位）
  },
  resolve: {
    alias: {
      '@': pathResolve('./src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: '/', // 设置公共基础路径
  server: {
    port: 8000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: '0.0.0.0',
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/\\api/, '')
      }
    }
  }
});
