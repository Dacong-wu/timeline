<script setup>
let timelineArr = [{ name: '测试11111111111111111111111111111122222' }, { name: '测试22222222222222' }, { name: '测试2' }]
</script>
<template>
  <div class="flex flex-col text-xl">
    <div
      class="flex items-center relative justify-between w-[50%] py-3 text-white odd:self-end even:justify-end after:content-[''] after:absolute after:w-1 after:bg-red-600 top-0 odd:after:-left-0.5 after:-right-0.5"
      :class="{
        'after:bottom-0 after:h-[50%]': index === 0,
        'after:top-0 after:h-[50%]': index + 1 === timelineArr.length,
        'after:h-full': index > 0 && index + 1 < timelineArr.length
      }"
      v-for="(item, index) in timelineArr"
    >
      <div
        class="flex items-center p-2 rounded relative break-all after:content-[''] after:h-3 after:w-3 after:rounded-full after:bg-red-600 after:absolute z-10"
        :class="{ 'bg-red-500 after:-left-5 ml-3.5': index % 2 === 0, 'bg-orange-500 after:-right-5 mr-3.5': index % 2 !== 0 }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
