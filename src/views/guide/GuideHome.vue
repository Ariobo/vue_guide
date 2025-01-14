<script setup lang="ts">
import { ref } from 'vue'

const usedList = ref([
  { name: 'Vite', link: 'https://ko.vitejs.dev/' },
  { name: 'Vue', link: 'https://v3-docs.vuejs-korea.org/' },
  { name: 'Typescript', link: 'https://www.typescriptlang.org/' },
  { name: 'Vue Router 4', link: 'https://router.vuejs.kr/' },
  { name: 'Pinia', link: 'https://pinia.vuejs.kr/' },
  { name: 'Axios', link: 'https://axios-http.com/kr/docs/intro' },
  { name: 'VueUse', link: 'https://vueuse.org/' },
  { name: 'dayjs', link: 'https://day.js.org/' },
  { name: 'UnoCss', link: 'https://unocss.dev/' },
  { name: 'Sass', link: 'https://sass-lang.com/' },
  { name: 'vue3-notification', link: 'https://www.npmjs.com/package/@kyvg/vue3-notification' },
  { name: 'Eslint', link: 'https://eslint.org/' },
  { name: 'Prettier', link: 'https://prettier.io/' },
])
</script>

<template>
  <div>
    <h1>Vue3 Framework Guide</h1>
    <p class="mb-5">
      Vue3 Framework는 웹 사용자 인터페이스를 만들기 위한 쉽고 강력한 자바스크립트 프레임워크인
      Vue.js와 Typescript를 기반으로 구성되었다.<br />
      빌드 도구는 빠르고 간결하게 개발 가능한 Vite를 사용한다.
    </p>
    <ul class="mb-5">
      <li v-for="(used, index) in usedList" :key="`used-${index}`">
        <a class="link" :href="used.link">{{ used.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
