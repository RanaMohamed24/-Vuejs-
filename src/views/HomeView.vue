<script setup>
import { onMounted, onUnmounted } from 'vue'
import CarouselBanner from '@/components/CarouselBanner.vue'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})

onMounted(() => {
  console.log(`HomeView mounted — ${props.products.length} products loaded`)
})

onUnmounted(() => {
  console.log('HomeView unmounted')
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <CarouselBanner />

    <h2 class="text-2xl font-bold mb-6">Our Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
