<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
})

const totalStock = computed(() =>
  props.products.reduce((sum, p) => sum + p.stock, 0)
)

onMounted(() => {
  console.log('NavBar mounted')
})

onUnmounted(() => {
  console.log('NavBar unmounted')
})
</script>

<template>
  <nav class="navbar bg-white shadow-md px-6">
    <div class="flex-1">
      <RouterLink to="/" class="text-xl font-bold">ShoeStore</RouterLink>
    </div>
    <div class="flex gap-4 items-center">
      <RouterLink to="/" class="btn btn-ghost btn-sm">Home</RouterLink>
      <RouterLink to="/product/1" class="btn btn-ghost btn-sm">Product</RouterLink>
      <RouterLink to="/about" class="btn btn-ghost btn-sm">About</RouterLink>
      <div class="badge badge-primary">Stock: {{ totalStock }}</div>
    </div>
  </nav>
</template>
