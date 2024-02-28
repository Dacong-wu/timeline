<script setup>
import dayjs from 'dayjs'
import gsap from 'dacong-gsap'
import { ScrollSmoother } from 'dacong-gsap/dist/ScrollSmoother'
let ctx
const main = ref()
let timelineArr = [
  { time: '2018-02-15', name: '开始的日子❤️' },
  { time: '2023-08-07', name: '1999天，求婚💍', path: '/1999' },
  { time: '2024-02-13', name: '2199天，领证' }
]
onMounted(() => {
  ctx = gsap.context(self => {
    ScrollSmoother.create({
      smooth: 1.2,
      effects: true
    })
    const boxes = self.selector('.time-item')
    boxes.forEach(box => {
      gsap.to(box, {
        opacity: 1,
        scrollTrigger: {
          trigger: box,
          end: 'bottom+=100 bottom',
          scrub: true
        }
      })
    })
  }, main.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
function getDayNumber(time) {
  const daysPassed = dayjs().diff(time, 'day')
  return daysPassed
}
</script>
<template>
  <div
    ref="main"
    class="flex flex-col text-xl"
  >
    <div
      class="flex items-center relative justify-between w-[50%] py-3 text-white odd:self-end even:justify-end after:content-[''] after:absolute after:w-1 after:bg-red-600 top-0 odd:after:-left-0.5 after:-right-0.5"
      :class="{
        'after:bottom-0 after:h-[50%]': index === 0,
        'after:top-0 after:h-[50%]': index + 1 === timelineArr.length,
        'after:h-full': index > 0 && index + 1 < timelineArr.length
      }"
      v-for="(item, index) in timelineArr"
    >
      <NuxtLink
        v-if="item.path"
        :to="item.path"
      >
        <div
          class="time-item opacity-0 cursor-pointer transition-colors hover:brightness-90 flex flex-col justify-center p-2 rounded relative break-all after:content-[''] after:h-3 after:w-3 after:rounded-full after:absolute z-10"
          :class="{
            'bg-red-500 after:-left-5 ml-3.5 hover:bg-red-600 after:bg-red-500 ': index % 2 === 0,
            'bg-orange-500 hover:bg-orange-600 after:-right-5 mr-3.5 items-end after:bg-orange-500 ': index % 2 !== 0
          }"
        >
          <p>{{ item.name }}</p>
          <p class="text-sm">
            {{ item.time }} <span class="text-2xl">{{ getDayNumber(item.time) }}</span>
          </p>
        </div>
      </NuxtLink>
      <div
        v-else
        class="time-item opacity-0 cursor-pointer transition-colors hover:brightness-90 flex flex-col justify-center p-2 rounded relative break-all after:content-[''] after:h-3 after:w-3 after:rounded-full after:absolute z-10"
        :class="{
          'bg-red-500 after:-left-5 ml-3.5 hover:bg-red-600 after:bg-red-500 ': index % 2 === 0,
          'bg-orange-500 hover:bg-orange-600 after:-right-5 mr-3.5 items-end after:bg-orange-500 ': index % 2 !== 0
        }"
      >
        <p>{{ item.name }}</p>
        <p class="text-sm">
          {{ item.time }} <span class="text-2xl">{{ getDayNumber(item.time) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
