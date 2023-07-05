<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import ScrollSmoother from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
onMounted(() => {
  fromToClassLogo()
  let scrollTl = scrollTimeline()
  scrollTlFromToClassLogo(scrollTl)
  scrollTlFromToElementHeader(scrollTl)
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
      yPercent: 50
    },
    {
      yPercent: -50,
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
      trigger: document.body,
      start: 0,
      end: () => window.innerHeight * 1.5,
      scrub: 0.8
    }
  })
}

// logo 滚动动画
function scrollTlFromToClassLogo(scrollTl) {
  let from = {
    top: '50vh',
    scale: 4,
    textShadow: '0 0 2px rgba(0,0,0,0.3)'
  }
  let to = {
    top: 0,
    yPercent: 0,
    scale: 1,
    textShadow: '0 0 2px rgba(0,0,0,0)',
    duration: 0.8
  }
  // 移动端适配更改
  if (window.matchMedia('(max-width: 576px)').matches) {
    from.rotation = 90
    from.scale = 2
    to.rotation = 0
  }
  scrollTl.fromTo('.logo', from, to)
}

// header 滚动动画
function scrollTlFromToElementHeader(scrollTl) {
  scrollTl.fromTo(
    'header',
    {
      boxShadow: '0px 0px 10px rgba(0,0,0,0)'
    },
    {
      boxShadow: '0px 0px 10px rgba(0,0,0,.15)',
      duration: 0.2
    }
  )
}
</script>
<template>
  <div class="gasp-body">
    <header>
      <div class="logo">
        <TitleDay1999 />
      </div>
    </header>
    <main id="wrapper">
      <div
        id="content"
        class="o-wrapper"
      >
        <ul class="gallery">
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1590426911380-bd4a61d4d3ea?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDU3NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1586943353950-95bdbe3207a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDU5MQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1528559296571-33e15acf4c8a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ0NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1532460248413-7c349109c98a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ0NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1544223192-a4af683edb17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ0NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1578326626553-39f72c545b07?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ0NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1588222188836-a10b919573ee?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ0NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1544211393-7fdc8fca9f4f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDU5MQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1580686803023-f221abbe6e27?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ0NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1593970014662-be40fcbfe126?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDY3NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1502088513349-3ff6482aa816?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ0NQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1464151759330-a3441f3da55e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ3Mw&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1615858336478-92e0308f6bd3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ3Mw&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1505148230895-d9a785a555fa?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ3Mw&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1535940587896-3a4e0ce292f4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDQ3Mw&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1532714845903-d7b2a053e92b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDUwOQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1567608198472-6796ad9466a2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDUwOQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
          <li class="image">
            <img
              src="https://images.unsplash.com/photo-1521299573904-7f325e44ecf5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ5NDUwOQ&ixlib=rb-1.2.1&q=85&w=700"
              alt=""
            />
          </li>
        </ul>
        <!-- <footer>
          <h2 class="end">That's all folks</h2>
        </footer> -->
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
$primary-color: #fff5da;
$logo-height: 77px;
.gasp-body {
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: $primary-color;
    height: $logo-height;
    z-index: 1;
    .logo {
      text-align: center;
      position: absolute;
      top: 0;
      width: 100%;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    }
  }
  .o-wrapper {
    padding: 0 10%;
    background: $primary-color;
    @media #{$phone} {
      padding: 0 2rem;
    }
    .gallery {
      padding-top: 150vh;
      padding-left: 0;
      display: grid;
      list-style-type: none; //用于设置列表项（<li> 元素）的标志样式
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;
      @media #{$phone} {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      @media #{$pad} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .image {
        aspect-ratio: 2 / 3;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

footer {
  margin-top: 5rem;
  text-align: center;
  font-size: 6vw;
  letter-spacing: 0.1em;
  padding-bottom: 5rem;
}
</style>
