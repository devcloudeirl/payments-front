import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [
  vue(),
  AutoImport({
   imports: ['vue', 'vue-router', '@vueuse/core'],
   resolvers: [ElementPlusResolver()],
   dts: 'src/auto-imports.d.ts',
   eslintrc: {
    enabled: true,
   },
  }),
  Components({
   resolvers: [ElementPlusResolver()],
   dts: 'src/components.d.ts',
  }),
 ],
 resolve: {
  alias: {
   '@': path.resolve(__dirname, './src'),
  },
 },
})
