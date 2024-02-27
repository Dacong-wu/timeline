<template>
  <Head>
    <Title>幸福记录🥰</Title>
  </Head>
  <NuxtPage class="max-w-[1300px] m-auto px-2" />
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})
</script>
