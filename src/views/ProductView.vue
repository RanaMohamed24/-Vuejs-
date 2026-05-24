<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue'
import ProductDetails from '@/components/ProductDetails.vue'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['buy'])

const featuredProduct = computed(() =>
  props.products.find((p) => p.id === props.productId)
)

const relatedProducts = computed(() =>
  props.products.filter((p) => p.id !== props.productId)
)

function handleBuy(productId) {
  emit('buy', productId)
}

onMounted(() => {
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
    <ProductDetails
      v-if="featuredProduct"
      :product="featuredProduct"
      @buy="handleBuy"
    />

    <p v-else class="text-center text-xl mt-10">Product not found.</p>

    <h2 class="text-2xl font-bold mt-10 mb-6">Related Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        v-for="item in relatedProducts"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>
