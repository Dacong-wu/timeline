<script setup>
import gsap from 'dacong-gsap'
import { ScrollSmoother } from 'dacong-gsap/dist/ScrollSmoother'
useHead({
  title: '记录点-1999',
})
let ctx
const main = ref()
const info = [
  {
    value: '💖2018-0215→2023-0807💖',
  },
  {
    value: '时间过的太快啦🚀',
  },
  {
    value: '一眨眼都在一起1999天了🌼',
  },
  {
    value: '换算一下就是5.4年🧏‍♀️',
  },
  {
    value: '今天该怎么庆祝呢🎉',
  },
  {
    value: '想来想去，这么好的日子🌝',
  },
  {
    value: '一般活动都有点配不上🫨',
  },
  {
    value: '1999，长长久久🐣',
  },
  {
    value: '要不求婚吧🌈',
  },
  {
    value: '所以你现在看到了这个网址🐥',
  },
  {
    value: '很庆幸，他没有被注册🌺',
  },
  {
    value: '让这一刻在互联网上定格吧📸',
  },
  {
    value: '美美丽的小莉莉，嫁给我吧💍',
  },
]

onMounted(() => {
  ctx = gsap.context((self) => {
    ScrollSmoother.create({
      smooth: 1.2,
      effects: true,
    })
    if (window.matchMedia('(max-width: 576px)').matches) {
      const boxes = self.selector('.info-title span')
      gsap.to(boxes[0], {
        x: 200,
        opacity: 0,
        scrollTrigger: {
          start: 0,
          end: () => window.innerHeight / 2,
          scrub: 0.8,
        },
      })
      gsap.to(boxes[2], {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          start: 0,
          end: () => window.innerHeight / 2,
          scrub: 0.8,
        },
      })
    } else {
      gsap.to('.info-title', {
        scale: 4,
        opacity: 0,
        scrollTrigger: {
          start: 0,
          end: () => window.innerHeight / 2,
          scrub: 0.8,
        },
      })
    }

    const boxes = self.selector('.info-item')
    boxes.forEach((box) => {
      gsap.to(box, {
        rotate: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: box,
          end: 'bottom+=50 bottom',
          scrub: 0.8,
        },
      })
    })
  }, main.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>
<template>
  <main ref="main">
    <div class="h-screen flex items-center justify-center">
      <div
        class="info-title flex md:flex-row flex-col items-center text-7xl font-bold"
      >
        <span>记录点</span>
        <span class="hidden md:block">-</span>
        <span>1999</span>
      </div>
    </div>
    <div class="flex flex-col gap-y-5 md:gap-y-10 items-center pb-[50px]">
      <p
        v-for="item in info"
        :key="item.name"
        class="info-item md:text-5xl text-3xl text-center scale-50 rotate-6 blur-sm opacity-0"
      >
        {{ item.value }}
      </p>
    </div>
  </main>
</template>
