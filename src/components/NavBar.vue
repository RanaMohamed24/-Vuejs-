<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

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
      <RouterLink to="/cart" class="btn btn-ghost btn-sm">
        Cart
        <span v-if="cartStore.totalItems > 0" class="badge badge-primary badge-sm">
          {{ cartStore.totalItems }}
        </span>
      </RouterLink>
      <RouterLink to="/about" class="btn btn-ghost btn-sm">About</RouterLink>
    </div>
  </nav>
</template>
