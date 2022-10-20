import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// 自动导入库
import AutoImport from 'unplugin-auto-import/vite'
// 1. 自动导入组件
import Components from 'unplugin-vue-components/vite';
// 1.1 自动导入组件 - 具体组件
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteCommonjs(),
    vue(),
    AutoImport({
      dts: './src/auto-import.d.ts',
      imports: ['vue', 'vue-router'],
      dirs: ['src/interface/models', 'src/components/widgets', 'src/v-use'],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        }),
      ]
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
    extensions: ['.ts', '.js'],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['download'])]
    }
  },
})
