<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

const product = ref({
  id: 1,
  name: 'Cozy Sneakers',
  description: 'High-quality sneakers that go with everything you wear.',
  image: 'https://picsum.photos/seed/sneakers/400/400',
  badge: 'NEW',
  price: 120,
  discount: 20,
  tags: ['Fashion', 'Casual', 'Sport'],
})

const relatedProducts = ref([
  {
    id: 2,
    name: 'Running Shoes',
    price: 90,
    discount: 10,
    image: 'https://picsum.photos/seed/running/300/300',
  },
  {
    id: 3,
    name: 'Casual Boots',
    price: 150,
    discount: 0,
    image: 'https://picsum.photos/seed/boots/300/300',
  },
  {
    id: 4,
    name: 'Flip Flops',
    price: 30,
    discount: 50,
    image: 'https://picsum.photos/seed/flops/300/300',
  },
])

const discountedPrice = computed(() => {
  if (product.value.discount > 0) {
    return product.value.price - (product.value.price * product.value.discount) / 100
  }
  return product.value.price
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
  
    <div class="card lg:card-side bg-white shadow-lg mb-10 max-w-4xl mx-auto">
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
            :class="{ 'badge-primary': product.badge === 'NEW' }"
          >
            {{ product.badge }}
          </span>
        </div>

        <p class="text-gray-600 mt-2">{{ product.description }}</p>

      
        <div class="flex items-center gap-4 mt-4">
          <span class="text-primary font-bold text-2xl">${{ discountedPrice }}</span>
          <span
            v-if="product.discount > 0"
            class="line-through text-gray-400 text-xl"
          >
            ${{ product.price }}
          </span>
          <span
            v-if="product.discount > 0"
            class="badge badge-secondary badge-lg"
          >
            -{{ product.discount }}% OFF
          </span>
        </div>

      
        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in product.tags"
            :key="tag"
            class="badge badge-outline"
          >
            {{ tag }}
          </span>
        </div>

        <div class="card-actions mt-6">
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold mb-6">Related Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        v-for="item in relatedProducts"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>
