<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
onMounted(() => {
  /* Fade in the logo */
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

  /* Smooth content */
  let smoother = ScrollSmoother.create({
    wrapper: '#wrapper',
    content: '#content',
    smooth: 1,
    effects: true
  })

  smoother.effects('.image', {
    speed: i => {
      // Desktop three columns layout
      if (window.matchMedia('(min-width:730px)').matches) {
        // Center column is faster
        return i % 3 === 1 ? 1.15 : 1
      } else {
        // Mobile, right column is fast
        return i % 2 === 0 ? 1 : 1.15
      }
    }
  })

  /* Logo to header animation */
  let logoTl = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: 0,
      end: () => window.innerHeight * 1.2,
      scrub: 0.6
    }
  })
  logoTl.fromTo(
    '.logo',
    {
      top: '50vh',
      yPercent: -50,
      scale: 4,
      textShadow: '0 0 2px rgba(0,0,0,0.3)'
    },
    {
      top: 0,
      yPercent: 0,
      scale: 1,
      textShadow: '0 0 2px rgba(0,0,0,0)',
      duration: 0.8
    }
  )
  // Toggle the burger visibility
  logoTl.fromTo(
    '.menu',
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.1
    },
    0.9
  )
  // Toggle the header box-shadow
  logoTl.fromTo(
    'header',
    {
      boxShadow: '0px 0px 10px rgba(0,0,0,0)'
    },
    {
      boxShadow: '0px 0px 10px rgba(0,0,0,.15)',
      duration: 0.2
    },
    0.8
  )

  /* That's all Folks animation */
  let endTl = gsap.timeline({
    repeat: -1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px'
    }
  })
  gsap.set('.end', {
    opacity: 0
  })
  gsap.to('.end', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px',
      once: true
    }
  })
  let mySplitText = new SplitText('.end', { type: 'words,chars' })
  let chars = mySplitText.chars
  let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2'])
  endTl.to(chars, {
    duration: 0.5,
    scaleY: 0.6,
    ease: 'power3.out',
    stagger: 0.04,
    transformOrigin: 'center bottom'
  })
  endTl.to(
    chars,
    {
      yPercent: -20,
      ease: 'elastic',
      stagger: 0.03,
      duration: 0.8
    },
    0.5
  )
  endTl.to(
    chars,
    {
      scaleY: 1,
      ease: 'elastic.out(2.5, 0.2)',
      stagger: 0.03,
      duration: 1.5
    },
    0.5
  )
  endTl.to(
    chars,
    {
      color: (i, el, arr) => {
        return endGradient(i / arr.length).hex()
      },
      ease: 'power2.out',
      stagger: 0.03,
      duration: 0.3
    },
    0.5
  )
  endTl.to(
    chars,
    {
      yPercent: 0,
      ease: 'back',
      stagger: 0.03,
      duration: 0.8
    },
    0.7
  )
  endTl.to(chars, {
    color: 'hsl(0,0,0)',
    duration: 1.4,
    stagger: 0.05
  })

  let menu = document.querySelector('.menu')

  menu.addEventListener('click', e => {
    ScrollTrigger.refresh()
  })
})
</script>
<template>
  <header>
    <h1 class="logo">Simba</h1>
    <button class="menu">
      <span></span>
    </button>
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
      <footer>
        <h2 class="end">That's all folks</h2>
      </footer>
    </div>
  </main>
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  background: #fff5da;
  font-family: 'Luckiest Guy', cursive;
}
img {
  width: 100%;
}
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2.3rem 0 0.5rem;
  background: #fff5da;
  z-index: 1;
}
.logo {
  text-align: center;
  font-size: 6vw;
  text-transform: uppercase;
  opacity: 0;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  color: #f47340;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
.menu {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
  background: none;
  width: 3rem;
  height: 2rem;
  cursor: pointer;
  border: none;
  padding: 0;
  opacity: 0;
  @media (min-width: 730px) {
    right: 10%;
  }
  span {
    display: block;
    width: 100%;
    height: 2px;
    background: black;
    &:after,
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      background: inherit;
    }
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }
  }
}
.o-wrapper {
  padding: 0 2rem;
  @media (min-width: 730px) {
    padding: 0 10%;
  }
}
.gallery {
  padding-top: 150vh;
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  @media (min-width: 730px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.image {
  aspect-ratio: 2 / 3;
  img {
    height: 100%;
    object-fit: cover;
  }
}

footer {
  margin-top: 10rem;
  text-align: center;
  font-size: 6vw;
  letter-spacing: 0.1em;
  padding-bottom: 20rem;
  @media (min-width: 730px) {
    margin-top: 20rem;
    padding-bottom: 20rem;
  }
}
</style>
