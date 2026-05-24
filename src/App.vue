<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'

const products = ref([
  {
    id: 1,
    name: 'Cozy Sneakers',
    description: 'High-quality sneakers that go with everything you wear.',
    image: 'https://picsum.photos/seed/sneakers/300/300',
    badge: 'NEW',
    price: 120,
    discount: 20,
    stock: 10,
    tags: ['Fashion', 'Casual', 'Sport'],
  },
  {
    id: 2,
    name: 'Running Shoes',
    description: 'Built for speed and comfort on any terrain.',
    image: 'https://picsum.photos/seed/running/300/300',
    badge: '',
    price: 90,
    discount: 10,
    stock: 5,
    tags: ['Sport', 'Running'],
  },
  {
    id: 3,
    name: 'Casual Boots',
    description: 'Rugged boots for everyday adventures.',
    image: 'https://picsum.photos/seed/boots/300/300',
    badge: 'SALE',
    price: 150,
    discount: 0,
    stock: 8,
    tags: ['Casual', 'Winter'],
  },
  {
    id: 4,
    name: 'Flip Flops',
    description: 'Light and breezy for sunny days.',
    image: 'https://picsum.photos/seed/flops/300/300',
    badge: '',
    price: 30,
    discount: 50,
    stock: 20,
    tags: ['Summer', 'Casual'],
  },
])

function handleBuy(productId) {
  const product = products.value.find((p) => p.id === productId)
  if (product && product.stock > 0) {
    product.stock--
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar :products="products" />

    <router-view :products="products" @buy="handleBuy" />
  </div>
</template>
