<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'

let ctx
const main = ref()

onMounted(() => {
  ctx = gsap.context(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true
    })
  }, main.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>

<template>
  <div ref="main">
    <p v-for="item in 100">{{ item }}</p>
  </div>
</template>
