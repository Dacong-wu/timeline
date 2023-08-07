<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import ScrollSmoother from 'gsap/ScrollSmoother'

const info = [
  {
    name: 'p-1',
    value: '💖2018-0215→2023-0807💖'
  },
  {
    name: 'p-2',
    value: '时间过的太快啦🚀'
  },
  {
    name: 'p-3',
    value: '一眨眼都在一起1999天了🌼'
  },
  {
    name: 'p-4',
    value: '换算一下就是5.4年🧏‍♀️'
  },
  {
    name: 'p-5',
    value: '今天该怎么庆祝呢🎉'
  },
  {
    name: 'p-6',
    value: '想来想去，这么好的日子🌝'
  },
  {
    name: 'p-7',
    value: '一般活动都有点配不上🫨'
  },
  {
    name: 'p-8',
    value: '1999，长长久久🐣'
  },
  {
    name: 'p-9',
    value: '要不求婚吧🌈'
  },
  {
    name: 'p-10',
    value: '所以你现在看到了这个网址🐥'
  },
  {
    name: 'p-11',
    value: '很庆幸，他没有被注册🌺'
  },
  {
    name: 'p-12',
    value: '让这一刻在互联网上定格吧📸'
  },
  {
    name: 'p-13',
    value: '美美丽的小莉莉，嫁给我吧💍'
  }
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger) //注册插件
  fromToClassLogo() //logo元素进场动画
  let scrollTl = scrollTimeline() //创建时间轴对象
  scrollTlFromToClassLogo(scrollTl) //Logo滚动动画
  scrollTlFromToClassP1()
})

// logo元素进场动画
function fromToClassLogo() {
  /*
    .in：表示缓动函数的进入阶段，即动画开始时的缓动效果。
    .out：表示缓动函数的离开阶段，即动画结束时的缓动效果。
  */
  gsap.fromTo(
    '.logo',
    {
      opacity: 0,
      yPercent: 100
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }
  )
}

// 创建滚动时间轴动画
function scrollTimeline() {
  /*
  trigger 属性指定了触发动画的元素，这里使用的是 document.body，即整个文档的 body 元素。
  start 属性指定了动画开始的位置，这里设置为 0，表示当滚动到页面顶部时开始触发动画。
  end 属性指定了动画结束的位置，这里使用一个函数 () => window.innerHeight * 1.2，表示当滚动到窗口高度的 1.2 倍时结束动画。这样可以设置一个结束点，使动画不会无限地继续播放。
  scrub 属性指定了动画的平滑度，这里设置为 0.6，表示在滚动过程中动画的播放速度相对于滚动速度的 0.6 倍，可以实现一种平滑的效果。
  */
  return gsap.timeline({
    scrollTrigger: {
      trigger: '.gasp-body',
      start: 0,
      end: () => window.innerHeight,
      scrub: 0.8
    }
  })
}

// logo 滚动动画
function scrollTlFromToClassLogo(scrollTl) {
  let from = {
    top: 'calc(50vh - 77px)',
    scale: 4,
    textShadow: '0 0 2px rgba(0,0,0,0.3)'
  }
  let to = {
    // top: 'calc(0vh - 0px)',
    opacity: 0,
    scale: 1,
    textShadow: '0 0 2px rgba(0,0,0,0)',
    duration: 1
  }
  // 移动端适配更改
  if (window.matchMedia('(max-width: 576px)').matches) {
    from.rotation = 90
    from.scale = 2
    to.rotation = 0
  }
  scrollTl.fromTo('.logo', from, to).set('.logo', { top: 'calc(0vh - 0px)' })
  scrollTl.fromTo('.logo', { opacity: 0 }, { opacity: 1 })
}

function scrollTlFromToClassP1() {
  for (let i = 0, len = info.length; i < len; i++) {
    let item = info[i].name
    let percent = (50 / len) * i
    gsap.from(`.${item}`, {
      scale: 0.5,
      rotate: 10,
      filter: 'blur(4px)',
      opacity: 0,
      scrollTrigger: {
        trigger: `.${item}`,
        start: getStart(item),
        end: `bottom ${percent + 50}%`,
        scrub: 0.8
        // markers: true
      }
    })
  }
}
function getStart(name) {
  let height = window.innerHeight
  let start = document.getElementsByClassName(name)[0].offsetTop - height
  return start
}
</script>
<template>
  <div class="gasp-body">
    <header>
      <div class="logo">
        <TitleDay1999 />
      </div>
    </header>
    <main>
      <div class="gallery">
        <p
          v-for="item in info"
          :key="item.name"
          class="p-all"
          :class="item.name"
          >{{ item.value }}</p
        >
      </div>
    </main>
    <footer class="">
      <span>
        <a
          target="_blank"
          href="https://beian.miit.gov.cn/#/Integrated/index"
        >
          <p>苏ICP备2021045936号-2</p>
        </a>
      </span>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
$primary-back-color: #fff5da;
$logo-height: 77px;

.gasp-body {
  min-height: 100vh;
  background-color: $primary-back-color;

  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: $primary-back-color;
    height: $logo-height;
    z-index: 1;

    .logo {
      text-align: center;
      position: relative;
      top: 0;
      width: 100%;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    }
  }

  main {
    padding: 0 10%;
    @media #{$phone} {
      padding: 0 2rem;
    }

    .gallery {
      color: $primary-color;
      padding-top: 100vh;
      padding-bottom: 5vh;
      padding-left: 0;
      .p-all {
        font-size: 60px;
        width: 100%;
        text-align: center;
        @media #{$phone} {
          font-size: 30px;
        }
      }
    }
  }

  footer{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding-bottom: env(safe-area-inset-bottom);
  span {
    padding: 0 5px;
  }
  p {
    color: $primary-color;
    font-size: 12px;
    margin: 0;
    padding: 10px 0;
  }
}

}
</style>
