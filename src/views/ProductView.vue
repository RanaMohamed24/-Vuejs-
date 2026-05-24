<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useProductStore } from '@/stores/productStore'
import ProductDetails from '@/components/ProductDetails.vue'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
})

const productStore = useProductStore()

const featuredProduct = computed(() =>
  productStore.products.find((p) => p.id === props.productId)
)

const relatedProducts = computed(() =>
  productStore.products.filter((p) => p.id !== props.productId)
)

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchProducts()
  }
  console.log(`ProductView mounted for ID: ${props.productId}`)
})

onUnmounted(() => {
  console.log('ProductView unmounted')
})

watch(
  () => props.productId,
  (newId) => {
    console.log(`ProductView — navigated to product ID: ${newId}`)
  }
)
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="productStore.loading" class="text-center py-10">
      <span class="loading loading-spinner loading-lg"></span>
    </div>

    <template v-else-if="featuredProduct">
      <ProductDetails :product="featuredProduct" />

      <h2 class="text-2xl font-bold mt-10 mb-6">Related Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          v-for="item in relatedProducts"
          :key="item.id"
          :product="item"
        />
      </div>
    </template>

    <p v-else class="text-center text-xl mt-10">Product not found.</p>
  </div>
</template>
