<template>
  <Head>
    <Title>幸福记录🥰</Title>
  </Head>
  <NuxtLayout>
    <NuxtPage class="max-w-[1300px] m-auto px-2" />
  </NuxtLayout>
</template>

<script setup>
import gsap from 'dacong-gsap'
import { ScrollTrigger } from 'dacong-gsap/ScrollTrigger'
import { ScrollSmoother } from 'dacong-gsap/dist/ScrollSmoother'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})
</script>
