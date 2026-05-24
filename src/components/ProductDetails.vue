<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const cartStore = useCartStore()

const discountedPrice = computed(() => {
  if (props.product.discount > 0) {
    return props.product.price - (props.product.price * props.product.discount) / 100
  }
  return props.product.price
})

const stockLabel = computed(() =>
  props.product.stock > 0 ? `${props.product.stock} in stock` : 'Out of Stock'
)

const stockClass = computed(() =>
  props.product.stock > 0 ? 'badge-success' : 'badge-error'
)

function handleBuy() {
  cartStore.addToCart(props.product)
}

onMounted(() => {
  console.log(`ProductDetails mounted — ${props.product.name}`)
})

onUnmounted(() => {
  console.log(`ProductDetails unmounted — ${props.product.name}`)
})
</script>

<template>
  <div class="card lg:card-side bg-white shadow-lg max-w-4xl mx-auto">
    <figure class="lg:w-2/5">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-72 object-cover"
      />
    </figure>

    <div class="card-body lg:w-3/5">
      <div class="flex items-center gap-3">
        <h1 class="card-title text-2xl">{{ product.name }}</h1>
        <span
          v-if="product.badge"
          class="badge badge-lg"
          :class="{
            'badge-primary': product.badge === 'NEW',
            'badge-secondary': product.badge === 'SALE',
          }"
        >
          {{ product.badge }}
        </span>
      </div>

      <p class="text-gray-600 mt-2">{{ product.description }}</p>

      <div class="flex items-center gap-4 mt-4">
        <span class="text-primary font-bold text-2xl">${{ discountedPrice }}</span>
        <span
          v-if="product.discount > 0"
          class="line-through text-gray-400 text-lg"
        >
          ${{ product.price }}
        </span>
        <span v-if="product.discount > 0" class="badge badge-secondary">
          -{{ product.discount }}% OFF
        </span>
      </div>

      <div class="flex items-center gap-2 mt-3">
        <span class="badge" :class="stockClass">{{ stockLabel }}</span>
      </div>

      <div class="flex flex-wrap gap-2 mt-3">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="badge badge-outline"
        >
          {{ tag }}
        </span>
      </div>

      <div class="card-actions mt-4">
        <button
          class="btn btn-primary"
          :disabled="product.stock === 0"
          @click="handleBuy"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
