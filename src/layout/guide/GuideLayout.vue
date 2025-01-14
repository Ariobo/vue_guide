<script setup lang="ts">
const visibleSidebar = ref(true) // 좌측 메뉴 유지 여부

function handleChangedMenu() {
  visibleSidebar.value = true // 클릭 후에도 메뉴 유지
}
</script>

<template>
  <div>
    <aside v-if="visibleSidebar">
      <guide-menu @changed="handleChangedMenu" />
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
aside {
  width: 250px;
  float: left;
}

main {
  margin-left: 250px;
  padding: 20px;
}
</style>
