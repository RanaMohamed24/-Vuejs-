<script setup>
import { computed } from 'vue'

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
</script>

<template>
  <div class="card bg-white shadow-md">
    <figure>
      <img :src="product?.image" :alt="product?.name" class="w-full h-40 object-cover" />
    </figure>
    <div class="card-body p-4">
      <h3 class="card-title text-base">{{ product?.name }}</h3>

      <div class="flex items-center gap-2">
        <span class="text-primary font-bold">${{ discountedPrice }}</span>
        <span
          v-if="product?.discount > 0"
          class="line-through text-gray-400 text-sm"
        >
          ${{ product?.price }}
        </span>
      </div>

      <div v-if="product?.discount > 0" class="badge badge-secondary">
        -{{ product?.discount }}%
      </div>
    </div>
  </div>
</template>
