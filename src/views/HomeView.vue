<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useProductStore } from '@/stores/productStore'
import CarouselBanner from '@/components/CarouselBanner.vue'
import ProductCard from '@/components/ProductCard.vue'

const productStore = useProductStore()

onMounted(async () => {
  await productStore.fetchProducts()
  console.log(`HomeView mounted — ${productStore.products.length} products loaded`)
})

onUnmounted(() => {
  console.log('HomeView unmounted')
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <CarouselBanner />

    <div v-if="productStore.loading" class="text-center py-10">
      <span class="loading loading-spinner loading-lg"></span>
      <p class="mt-2">Loading products...</p>
    </div>

    <div v-else-if="productStore.error" class="alert alert-error max-w-lg mx-auto">
      <p>Failed to load products: {{ productStore.error }}</p>
    </div>

    <template v-else>
      <h2 class="text-2xl font-bold mb-6">Our Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in productStore.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </template>
  </div>
</template>
