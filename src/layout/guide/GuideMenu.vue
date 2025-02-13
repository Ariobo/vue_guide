<script setup lang="ts">
const isOpen = ref(false)

const emit = defineEmits(['changed'])

const menus = [
  { name: '컴포넌트', isGroup: true },
  { name: 'Input', path: '/guide/components/input' },
  { name: 'Button', path: '/guide/components/button' },
  { name: 'style', isGroup: true },
  { name: 'Color', path: '/guide/styles/color' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  emit('changed')
}
</script>

<template>
  <button class="hamburger" :class="{ 'is-active': isOpen }" @click="toggleMenu">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <div class="overlay" :class="{ 'overlay--visible': isOpen }" @click="toggleMenu"></div>

  <nav class="nav-menu" :class="{ 'nav-menu--open': isOpen }">
    <button class="close-btn" @click="toggleMenu">✕</button>

    <ul class="nav-menu__list">
      <li v-for="(menu, index) in menus" :key="`menu-${index}`" class="nav-menu__item">
        <span v-if="menu.isGroup" class="nav-menu__group">{{ menu.name }}</span>
        <RouterLink v-else :to="menu.path || ''" class="nav-menu__link" @click="toggleMenu">
          {{ menu.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.hamburger {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  cursor: pointer;

  span {
    width: 100%;
    height: 4px;
    background: #333;
    border-radius: 2px;
    transition:
      transform 0.3s,
      opacity 0.3s;
  }

  &.is-active {
    span:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s;
  z-index: 50;
  visibility: hidden;

  &--visible {
    background: rgba(0, 0, 0, 0.5);
    visibility: visible;
  }
}

.nav-menu {
  position: fixed;
  top: 0;
  left: -250px;
  width: 220px;
  height: 100vh;
  background: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: left 0.3s ease-in-out;
  z-index: 100;

  &--open {
    left: 0;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__group {
    font-size: 15px;
    font-weight: bold;
    color: #444;
    padding: 12px 0;
  }

  &__link {
    text-decoration: none;
    font-size: 14px;
    color: #333;
    padding: 10px 12px;
    display: block;
    border-radius: 6px;
    transition:
      background 0.2s,
      color 0.2s;

    &:hover {
      background: #007aff;
      color: #fff;
    }
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 22px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff3b30;
  }
}
</style>
