<script setup>
import { RouterLink } from 'vue-router'
const list = [
  {
    id: 1,
    to: '/',
    name: '1999'
  },
  {
    id: 2,
    to: '/1000',
    name: '1000'
  }
]
</script>
<template>
  <header>
    <div
      v-for="item in list"
      :key="id"
      class="timeline-body"
    >
      <div
        class="timeline"
        v-if="item.id !== 1"
        >💑</div
      >
      <router-link :to="item.to">{{ item.name }}</router-link>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: var(--color-background);
  position: sticky;
  top: 0;
  z-index: 1000;
  .timeline-body {
    display: flex;
    align-items: center;
    .timeline {
      width: 20px;
      height: 20px;
    }
    a {
      text-decoration: none;
      color: $primary-color;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.2s ease;
    }
    @media (hover: hover) {
      a:hover {
        color: $primary-color-hover;
      }
    }
  }
}
</style>
