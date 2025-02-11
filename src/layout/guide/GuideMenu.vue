<script setup lang="ts">
const menus = [
  { name: '컴포넌트', isGroup: true },
  { name: 'Input', path: '/guide/components/input' },
  { name: 'Button', path: '/guide/components/button' },
  { name: 'style', isGroup: true },
  { name: 'Color', path: '/guide/styles/color' },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="(menu, index) in menus" :key="`menu-${index}`">
        <span v-if="menu.isGroup">{{ menu.name }}</span>

        <RouterLink v-else :to="menu.path || ''">{{ menu.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
