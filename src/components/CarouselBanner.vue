<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('CarouselBanner mounted')
})

onUnmounted(() => {
  console.log('CarouselBanner unmounted')
})
</script>

<template>
  <div class="carousel w-full h-64 rounded-xl overflow-hidden mb-8">
    <div id="slide1" class="carousel-item relative w-full">
      <img
        src="https://picsum.photos/seed/banner1/1200/400"
        class="w-full object-cover"
        alt="Banner 1"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img
        src="https://picsum.photos/seed/banner2/1200/400"
        class="w-full object-cover"
        alt="Banner 2"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img
        src="https://picsum.photos/seed/banner3/1200/400"
        class="w-full object-cover"
        alt="Banner 3"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>
