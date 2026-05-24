<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const discountedPrice = computed(() => {
  if (props.product.discount > 0) {
    return props.product.price - (props.product.price * props.product.discount) / 100
  }
  return props.product.price
})

onMounted(() => {
  console.log(`ProductCard mounted — ${props.product.name}`)
})

onUnmounted(() => {
  console.log(`ProductCard unmounted — ${props.product.name}`)
})
</script>

<template>
  <div class="card bg-white shadow-md">
    <figure>
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-40 object-cover"
      />
    </figure>
    <div class="card-body p-4">
      <div class="flex items-center gap-2">
        <h3 class="card-title text-base">{{ product.name }}</h3>
        <span
          v-if="product.badge"
          class="badge badge-sm"
          :class="{
            'badge-primary': product.badge === 'NEW',
            'badge-secondary': product.badge === 'SALE',
          }"
        >
          {{ product.badge }}
        </span>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-primary font-bold">${{ discountedPrice }}</span>
        <span
          v-if="product.discount > 0"
          class="line-through text-gray-400 text-sm"
        >
          ${{ product.price }}
        </span>
      </div>

      <div class="card-actions mt-2">
        <RouterLink :to="{ name: 'product', params: { id: product.id } }">
          <button class="btn btn-primary btn-sm">View Product</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
