import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      // 자동 import할 api가 있으면 추가 하시면 됩니다. ex)pinia,vue-router,vue-i18n 등등
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n'],
      eslintrc: {
        enabled: false, // ESLint 설정 파일 자동 생성 비활성화
        filepath: './.eslintrc-auto-import.json', // ESLint 설정 파일 경로
        globalsPropValue: true, // 글로벌 변수의 속성 값으로 "true"를 설정
      },
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ['src/components/', 'src/layout'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
