<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

onMounted(() => {
  console.log('CartView mounted')
})

onUnmounted(() => {
  console.log('CartView unmounted')
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>

    <div v-if="cartStore.items.length === 0" class="text-center py-10">
      <p class="text-xl text-gray-500">Your cart is empty</p>
      <RouterLink to="/" class="btn btn-primary mt-4">Continue Shopping</RouterLink>
    </div>

    <div v-else>
      <div class="overflow-x-auto">
        <table class="table bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.items" :key="item.id">
              <td>
                <div class="flex items-center gap-3">
                  <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded object-cover" />
                  <span class="font-medium">{{ item.name }}</span>
                </div>
              </td>
              <td>${{ item.price }}</td>
              <td>{{ item.qty }}</td>
              <td class="font-bold">${{ (item.price * item.qty).toFixed(2) }}</td>
              <td>
                <button
                  class="btn btn-error btn-sm"
                  @click="cartStore.removeFromCart(item.id)"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-between items-center mt-6 p-4 bg-white shadow-md rounded-lg">
        <div>
          <p class="text-lg">Total Items: <span class="font-bold">{{ cartStore.totalItems }}</span></p>
          <p class="text-xl">Total Price: <span class="font-bold text-primary">${{ cartStore.totalPrice.toFixed(2) }}</span></p>
        </div>
        <button class="btn btn-error" @click="cartStore.clearCart()">Clear Cart</button>
      </div>
    </div>
  </div>
</template>
